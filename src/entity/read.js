import Metadata from "../metadata/Metadata";
import WebAPI from "../webapi/WebAPI";

const read = superclass => class extends superclass {
    static get queryElements() {
        return ["attribute", "filters", "select", "expand", "orders"];
    }

    static async get(logicalName = this.logicalName, id, query = {}) {
        let queryOptions = await this.getQueryOptions(query, logicalName);
        if (id && query.filters) {
            console.log(`Get by 'id' does negate filters on query`);
        }
        console.log(`Get ${logicalName} (${id}) ${queryOptions}`);
        let data = await WebAPI.retrieveEntity(logicalName, id, queryOptions),
            attributes = await this.getQueryAttributes(query, logicalName);
        return this.parseResult(data.value ? data.value : [data], logicalName, attributes)[0];
    }

    /**
     * query: {filters: [{type, conditions, filters}]}
     * type: "or" | "and"
     * conditions: [{attribute, operator, value}]
     *
     * @param logicalName
     * @param query
     * @returns {Promise.<*|Promise.<TResult>>}
     */
    static async query(logicalName = this.logicalName, query = {}) {
        let queryOptions = await this.getQueryOptions(query, logicalName);
        console.log(`Query ${logicalName}`);
        let result = await WebAPI.retrieveMultiple(logicalName, queryOptions),
            attributes = await this.getQueryAttributes(query, logicalName);
        return this.parseResult(result.value, logicalName, attributes);
    }

    /**
     * Rewrites filter attributes on query to filters collection in query.
     * .query({myAttribute: "abc"}) => .query({filters: [conditions: [{attribute: "myAttribute", operator: "eq", value: "abc"}]]})
     * @param query
     */
    static rewriteFilters(query) {
        let filter = {
            type: "and",
            conditions: []
        };
        if (!query.filters) {
            query.filters = [];
        }
        for (let name in query) {
            if (query.hasOwnProperty(name)) {
                if (this.queryElements.indexOf(name) === -1) {
                    filter.conditions.push({
                        attribute: name.toLowerCase(),
                        operator: "eq",
                        value: query[name]
                    });
                }
            }
        }
        if (filter.conditions.length > 0) {
            query.filters.push(filter);
        }
    }

    /**
     * Rewrites select attributes, which are Lookups to expand.
     */
    static async rewriteSelect(query, logicalName) {
        if (query.select) {
            let entityAttributes = await this.getEntityAttributes(logicalName),
                clone = query.select.slice();
            for (let attribute of clone) {
                let entityAttribute = entityAttributes[attribute],
                    AttributeType = entityAttribute && entityAttribute.AttributeType;
                if (AttributeType === "Lookup") {
                    let entityMetadata = await Metadata.getEntityDefinitions(entityAttribute.Targets[0]),
                        index = query.select.indexOf(attribute);
                    query.select.splice(index, 1);
                    if (!query.expand) {
                        query.expand = [];
                    }
                    query.expand.push({
                        attribute: attribute,
                        select: [entityMetadata.PrimaryIdAttribute, entityMetadata.PrimaryNameAttribute]
                    });
                } else if (!AttributeType) {
                    throw(`Unexisting select field found: ${attribute}`);
                }
            }
        }
    }

    static async getQueryOptions(query, logicalName, separator = "&") {
        this.rewriteFilters(query);
        await this.rewriteSelect(query, logicalName);
        let options = [],
            parsedSelect = this.parseSelect(query.select),
            parsedFilters = await this.parseFilters(query.filters, logicalName),
            parsedExpand = await this.parseExpand(query.expand, logicalName),
            parsedOrders = this.parseOrders(query.orders);
        if (parsedFilters) {
            options.push(parsedFilters);
        }
        if (parsedSelect) {
            options.push(parsedSelect);
        }
        if (parsedExpand) {
            options.push(parsedExpand);
        }
        if (parsedOrders) {
            options.push(parsedOrders);
        }
        return options.join(separator);
    }

    static async parseExpand(expand = [], logicalName) {
        let parsedExpand = null;
        if (expand.length > 0) {
            let attributeString = "";
            for (let item of expand) {
                if (attributeString !== "") {
                    attributeString += ",";
                }
                if (typeof item === "string") {
                    attributeString += `${item}`;
                } else {
                    let {attribute} = item,
                        entityAttributes = await this.getEntityAttributes(logicalName),
                        parsedSubQuery = await this.getQueryOptions(item, entityAttributes[attribute].Targets[0], ";");
                    attributeString += `${attribute}(${parsedSubQuery})`;
                }
            }
            parsedExpand = `$expand=${attributeString}`;
        }
        return parsedExpand;
    }

    static parseSelect(select = []) {
        let parsedAttributes = null;
        if (select.length > 0) {
            let attributeString = "";
            for (let attribute of select) {
                if (attributeString !== "") {
                    attributeString += ",";
                }
                attributeString += `${attribute}`;
            }
            parsedAttributes = `$select=${attributeString}`;
        }
        return parsedAttributes;
    }

    static async parseFilters(filters = [], logicalName) {
        let parsedFiltersString = null;
        if (filters.length > 0) {
            let parsedFilters = [];
            for (let filter of filters) {
                let {type, conditions} = filter;
                parsedFilters.push(await this.parseConditions(conditions, type, logicalName));
                if (filter.filters) {
                    let parsedSubFilterString = await this.parseFilters(filter.filters, logicalName);
                    parsedFilters.push(parsedSubFilterString.substring(8));//scrape $filter=
                }
            }
            parsedFiltersString = "$filter=" + parsedFilters.join("and");
        }
        return parsedFiltersString;
    }

    static async parseConditions(conditions = [], type = "and", logicalName) {
        let parsedConditions = "",
            entityAttributes = await this.getEntityAttributes(logicalName);
        for (let {attribute, operator, value} of conditions) {
            let {AttributeType} = entityAttributes[attribute];
            operator = operator || "eq";
            value = AttributeType === "String" ? `'${value}'` : `${value}`;
            if (parsedConditions !== "") {
                parsedConditions += ` ${type} `;
            }
            parsedConditions += `${attribute} ${operator} ${value}`;
        }
        //return encodeURIComponent(`(${parsedConditions})`);
        return `(${parsedConditions})`;
    }

    static parseOrders(orders = []) {
        let parsedOrders = null;
        if (orders.length > 0) {
            let attributeString = "";
            for (let {attribute, descending} of orders) {
                let orderString = !descending ? "asc" : "desc";
                if (attributeString !== "") {
                    attributeString += ",";
                }
                attributeString += `${attribute} ${orderString}`;
            }
            parsedOrders = `$orderby=${attributeString}`;
        }
        return parsedOrders;
    }
};
export default read;