/*! crm-sdk 1.3.4 | (c) Dynamics Software | MIT license - https://github.com/dys-solutions/crm-sdk/blob/develop/LICENSE */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("WebAPI.noBabelPolyfill",[],t):"object"==typeof exports?exports["WebAPI.noBabelPolyfill"]=t():e["WebAPI.noBabelPolyfill"]=t()}(this,function(){return function(e){function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.i=function(e){return e},__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=353)}({18:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,i){try{var o=t[r](i),u=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r;Object.defineProperty(t,"__esModule",{value:!0}),t.WebAPI=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),u=n(68),a=_interopRequireDefault(u),s=n(69),c=_interopRequireDefault(s),l=n(51),f=_interopRequireDefault(l),p=n(70),y=_interopRequireDefault(p),h=n(71),_=_interopRequireDefault(h),d=n(72),b=_interopRequireDefault(d),v=n(33),w=_interopRequireDefault(v),m=n(73),g=_interopRequireDefault(m),P=n(74),x=_interopRequireDefault(P),E=n(75),k=_interopRequireDefault(E);void 0===window.Xrm&&void 0!==window.parent.Xrm&&(window.Xrm=window.parent.Xrm);var R=function(e){function WebAPI(){return _classCallCheck(this,WebAPI),_possibleConstructorReturn(this,(WebAPI.__proto__||Object.getPrototypeOf(WebAPI)).apply(this,arguments))}return _inherits(WebAPI,e),o(WebAPI,null,[{key:"getEntityDefinitions",value:function(e){return w.default.getEntityDefinitions(e)}},{key:"getEntitySetName",value:function(){function getEntitySetName(t){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getEntityDefinitions(e);case 2:return t=n.sent,n.abrupt("return",t.EntitySetName);case 4:case"end":return n.stop()}},_callee,this)}));return getEntitySetName}()},{key:"retrieveEntitySetProperty",value:function(e,t,n,r){var i=WebAPI.buildQueryString(r),o=WebAPI.parseEntityId(t);return WebAPI.requestAndReturnBody("GET",e+"("+o+")/"+n+i)}},{key:"parseEntityId",value:function(e){var t=e;if("object"===(void 0===e?"undefined":i(e))){var n=[];for(var r in e)e.hasOwnProperty(r)&&n.push(r+"='"+e[r]+"'");t=n.join(",")}else e.startsWith("{")&&e.endsWith("}")&&(t=t.substr(1,t.length-2));return t}},{key:"buildQueryString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[];if("string"==typeof e)t.push(e);else{if(e.select){var n=void 0;n="object"===i(e.select)?e.select.join(","):e.select,t.push("$select="+n)}e.top&&t.push("$top="+e.top),e.count&&t.push("$count="+e.count)}return t.length?"?"+t.join("&"):""}},{key:"context",get:function(){if(void 0!==window.Xrm)return window.Xrm.Page.context;if(void 0!==window.GetGlobalContext)return window.GetGlobalContext();throw new Error("Context is not available.")}},{key:"webAPIPath",get:function(){return this.context.getClientUrl()+"/api/data/"+this.version}},{key:"version",get:function(){return this.api||(this.version=window.Xrm.Page.context.getVersion().substr(0,3)),this.api},set:function(e){e.startsWith("v")||(e="v"+e),this.api=e}}]),WebAPI}((0,a.default)((0,c.default)((0,y.default)((0,_.default)((0,b.default)((0,g.default)((0,x.default)((0,k.default)(f.default)))))))));t.WebAPI=R,t.default=R,void 0!==(r=function(){return R}.call(t,n,t,e))&&(e.exports=r)},33:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,i){try{var o=t[r](i),u=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(18),o=function(e){return e&&e.__esModule?e:{default:e}}(i),u=function(){function Metadata(){_classCallCheck(this,Metadata)}return r(Metadata,null,[{key:"getEntityDefinitions",value:function(){function getEntityDefinitions(t){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!this.cachedEntityDefinitions[e]){n.next=2;break}return n.abrupt("return",this.cachedEntityDefinitions[e]);case 2:if("string"==typeof e){n.next=4;break}throw Error("Invalid logicalName given");case 4:return n.next=6,o.default.retrieveEntitySet("EntityDefinitions",{LogicalName:e});case 6:return t=n.sent,this.cachedEntityDefinitions[e]=t,n.abrupt("return",t);case 9:case"end":return n.stop()}},_callee,this)}));return getEntityDefinitions}()},{key:"getCachedEntityDefinitions",value:function(e){return this.cachedEntityDefinitions[e]}},{key:"getEntityDefinitionAttributes",value:function(){function getEntityDefinitionAttributes(t){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!this.cachedEntityDefinitionAttributes[e]){n.next=2;break}return n.abrupt("return",this.cachedEntityDefinitionAttributes[e]);case 2:return n.next=4,o.default.retrieveEntitySetProperty("EntityDefinitions",{LogicalName:e},"Attributes");case 4:return t=n.sent,this.cachedEntityDefinitionAttributes[e]=t,n.abrupt("return",t);case 7:case"end":return n.stop()}},_callee2,this)}));return getEntityDefinitionAttributes}()},{key:"getEntityDefinitionManyToOneRelationships",value:function(){function getEntityDefinitionManyToOneRelationships(t){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!this.cachedEntityDefinitionsManyToOneRelationships[e]){n.next=2;break}return n.abrupt("return",this.cachedEntityDefinitionsManyToOneRelationships[e]);case 2:return n.prev=2,n.next=5,o.default.retrieveEntitySetProperty("EntityDefinitions",{LogicalName:e},"ManyToOneRelationships");case 5:return t=n.sent,this.cachedEntityDefinitionsManyToOneRelationships[e]=t,n.abrupt("return",t);case 10:throw n.prev=10,n.t0=n.catch(2),n.t0;case 13:case"end":return n.stop()}},_callee3,this,[[2,10]])}));return getEntityDefinitionManyToOneRelationships}()},{key:"cachedEntityDefinitions",get:function(){return this.entityDef||(this.entityDef={}),this.entityDef}},{key:"cachedEntityDefinitionAttributes",get:function(){return this.entityDefAttributes||(this.entityDefAttributes={}),this.entityDefAttributes}},{key:"cachedEntityDefinitionsManyToOneRelationships",get:function(){return this.entityDefManyToOneRelationships||(this.entityDefManyToOneRelationships={}),this.entityDefManyToOneRelationships}}]),Metadata}();t.default=u},353:function(e,t,n){e.exports=n(18)},51:function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=function(){function Class(){_classCallCheck(this,Class)}return r(Class,[{key:"getClass",value:function(){return Object.getPrototypeOf(this).constructor}}]),Class}();t.default=i},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=["DELETE","GET","PATCH","POST","PUT"],i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise(function(o,a){var s=new XMLHttpRequest;if(-1===r.indexOf(t))throw new Error("Request method must be one of the following: "+r.join(", "));s.open(t,encodeURI(e),!0),s.setRequestHeader("OData-MaxVersion","4.0"),s.setRequestHeader("OData-Version","4.0"),s.setRequestHeader("Accept","application/json"),s.setRequestHeader("Content-Type","application/json; charset=utf-8");for(var c in i)s.setRequestHeader(c,i[c]);s.onreadystatechange=function(){if(4===s.readyState){s.onreadystatechange=null;try{var e=u(s);o(e)}catch(e){a(e)}}};var l=null;n&&(l=JSON.stringify(n)),s.send(l)})},o=function(e,t){if("string"==typeof t){var n=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?::(\d*))?Z$/.exec(t);if(n)return new Date(Date.UTC(+n[1],+n[2]-1,+n[3],+n[4],+n[5],+n[6],+n[7]||0))}return t},u=function(e){var t={200:function(){var t=null;try{t=JSON.parse(e.response,o)}catch(e){throw new Error("JSON response can't be parsed")}return{body:t,getResponseHeader:e.getResponseHeader.bind(e),statusCode:e.status}},204:function(){return{body:null,getResponseHeader:e.getResponseHeader.bind(e),statusCode:e.status}}},n=t[e.status];if(n)return n();throw new Error("Unexpected Error")};t.default=i},68:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,i){try{var o=t[r](i),u=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"executeAction",value:function(){function executeAction(t,n,r,i){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t,n,r){var i=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=4;break}return e.abrupt("return",this.executeBoundAction.apply(this,i));case 4:return e.abrupt("return",this.executeUnboundAction.apply(this,i));case 5:case"end":return e.stop()}},_callee,this)}));return executeAction}()},{key:"executeBoundAction",value:function(){function executeBoundAction(t,n,r,i){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e,t,n,r){var i;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.getEntitySetName(n);case 2:return i=o.sent,o.abrupt("return",this.requestAndReturnBody("POST",i+"("+r+")/Microsoft.Dynamics.CRM."+e,t));case 4:case"end":return o.stop()}},_callee2,this)}));return executeBoundAction}()},{key:"executeUnboundAction",value:function(e,t){return this.requestAndReturnBody("POST",""+e,t)}}]),_class}(e)};t.default=i},69:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,i){try{var o=t[r](i),u=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"associateEntities",value:function(){function associateEntities(t,n,r,i,o){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t,n,r,i){var o,u,a;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.getEntitySetName(e);case 2:return o=s.sent,u=this.webAPIPath,a={"@odata.id":u+"/"+r+"("+i+")"},s.abrupt("return",this.requestAndReturnBody("POST",o+"("+t+")/"+n+"/$ref",a));case 6:case"end":return s.stop()}},_callee,this)}));return associateEntities}()},{key:"disassociateEntities",value:function(){function disassociateEntities(t,n,r,i){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e,t,n,r){var i;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.getEntitySetName(e);case 2:return i=o.sent,o.abrupt("return",this.requestAndReturnBody("DELETE",i+"("+t+")/"+n+"("+r+")/$ref"));case 4:case"end":return o.stop()}},_callee2,this)}));return disassociateEntities}()}]),_class}(e)};t.default=i},70:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,i){try{var o=t[r](i),u=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"createEntity",value:function(){function createEntity(t,n){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t){var n,r;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.getEntitySetName(e);case 2:return n=i.sent,i.next=5,this.requestAndReturnHeader("POST",n,t,"OData-EntityId");case 5:if(!(r=i.sent)){i.next=8;break}return i.abrupt("return",this.getEntityIdFromHeader(r));case 8:case"end":return i.stop()}},_callee,this)}));return createEntity}()},{key:"getEntityIdFromHeader",value:function(e){return/\(([^)]+)\)/.exec(e)[1]}}]),_class}(e)};t.default=i},71:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,i){try{var o=t[r](i),u=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"deleteEntity",value:function(){function deleteEntity(t,n){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.getEntitySetName(e);case 2:return n=r.sent,r.abrupt("return",this.request("DELETE",n+"("+t+")"));case 4:case"end":return r.stop()}},_callee,this)}));return deleteEntity}()}]),_class}(e)};t.default=i},72:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,i){try{var o=t[r](i),u=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"executeFunction",value:function(e,t,n){return t?this.executeBoundFunction.apply(this,arguments):this.executeUnboundFunction.apply(this,arguments)}},{key:"executeBoundFunction",value:function(){function executeBoundFunction(t,n,r){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t,n){var r;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.getEntitySetName(t);case 2:return r=i.sent,i.abrupt("return",this.requestAndReturnBody("GET",r+"("+n+")/Microsoft.Dynamics.CRM."+e));case 4:case"end":return i.stop()}},_callee,this)}));return executeBoundFunction}()},{key:"executeUnboundFunction",value:function(e){return this.requestAndReturnBody("GET",""+e)}}]),_class}(e)};t.default=i},73:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,i){try{var o=t[r](i),u=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"retrieveEntity",value:function(){function retrieveEntity(t,n,r,i){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t,n,r){var i;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.getEntitySetName(e);case 2:return i=o.sent,o.abrupt("return",this.retrieveEntitySet(i,t,n,r));case 4:case"end":return o.stop()}},_callee,this)}));return retrieveEntity}()},{key:"retrieveEntitySet",value:function(e,t,n,r){var i=this.buildQueryString(n),o=t?this.parseEntityId(t):null,u=""+e;return o&&(u+="("+o+")"),u+=""+i,this.requestAndReturnBody("GET",u,null,r)}},{key:"retrieveMultiple",value:function(){function retrieveMultiple(t,n,r){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(e,t,n){var r,i,o=this;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.getEntitySetName(e);case 2:return r=u.sent,i=this.buildQueryString(t),u.abrupt("return",this.requestAndReturnBody("GET",""+r+i,null,n).then(function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e){var t,r;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(t=n&&n.Prefer&&n.Prefer.includes("odata.maxpagesize"),!e["@odata.nextLink"]||t){i.next=7;break}return i.next=4,o.requestNextLinks(e["@odata.nextLink"]);case 4:r=i.sent,e.value=e.value.concat(r),delete e["@odata.nextLink"];case 7:return i.abrupt("return",e);case 8:case"end":return i.stop()}},_callee2,o)}));return function(t){return e.apply(this,arguments)}}()));case 5:case"end":return u.stop()}},_callee3,this)}));return retrieveMultiple}()},{key:"requestNextLinks",value:function(e){var t=this,n=[];return this.requestAndReturnBody("GET",decodeURI(e)).then(function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee4(e){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.value,!e["@odata.nextLink"]){r.next=7;break}return r.t0=n,r.next=5,t.requestNextLinks(e["@odata.nextLink"]);case 5:r.t1=r.sent,n=r.t0.concat.call(r.t0,r.t1);case 7:return r.abrupt("return",n);case 8:case"end":return r.stop()}},_callee4,t)}));return function(t){return e.apply(this,arguments)}}())}},{key:"executeFetchXml",value:function(){function executeFetchXml(t,n){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee6(e,t){var n,r=this;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.getEntitySetName(e);case 2:return n=i.sent,i.abrupt("return",this.requestAndReturnBody("GET",n+"?fetchXml="+t).then(function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee5(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e["@odata.nextLink"]){n.next=6;break}return n.next=3,r.requestNextLinks(e["@odata.nextLink"]);case 3:t=n.sent,e.value=e.value.concat(t),delete e["@odata.nextLink"];case 6:return n.abrupt("return",e);case 7:case"end":return n.stop()}},_callee5,r)}));return function(t){return e.apply(this,arguments)}}()));case 4:case"end":return i.stop()}},_callee6,this)}));return executeFetchXml}()},{key:"count",value:function(){function count(t){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee7(e){var t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.getEntitySetName(e);case 2:return t=r.sent,r.next=5,this.requestAndReturnBody("GET",t+"/$count");case 5:return n=r.sent,r.abrupt("return",n);case 7:case"end":return r.stop()}},_callee7,this)}));return count}()}]),_class}(e)};t.default=i},74:function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(67),o=function(e){return e&&e.__esModule?e:{default:e}}(i),u=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"request",value:function(e,t,n,r){var i=this.webAPIPath,u=void 0;return u=0===t.indexOf("http")?t:i+"/"+t,(0,o.default)(u,e,n,r)}},{key:"requestAndReturnBody",value:function(e,t,n,r){return this.request(e,t,n,r).then(function(e){return e.body})}},{key:"requestAndReturnHeader",value:function(e,t,n,r){return this.request(e,t,n).then(function(e){return e.getResponseHeader(r)})}}]),_class}(e)};t.default=u},75:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,i){try{var o=t[r](i),u=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"updateEntity",value:function(){function updateEntity(t,n,r){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t,n){var r;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.getEntitySetName(e);case 2:return r=i.sent,i.abrupt("return",this.request("PATCH",r+"("+t+")",n));case 4:case"end":return i.stop()}},_callee,this)}));return updateEntity}()}]),_class}(e)};t.default=i}})});