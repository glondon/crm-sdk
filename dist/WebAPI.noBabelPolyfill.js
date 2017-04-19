/*! crm-sdk 1.1.1 | (c) Dynamics Software | MIT license - https://github.com/dys-solutions/crm-sdk/blob/develop/LICENSE */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("WebAPI.noBabelPolyfill",[],t):"object"==typeof exports?exports["WebAPI.noBabelPolyfill"]=t():e["WebAPI.noBabelPolyfill"]=t()}(this,function(){return function(e){function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.i=function(e){return e},__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=322)}({18:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,o){try{var i=t[r](o),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r;Object.defineProperty(t,"__esModule",{value:!0}),t.WebAPI=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),u=n(63),a=_interopRequireDefault(u),s=n(64),c=_interopRequireDefault(s),l=n(50),f=_interopRequireDefault(l),p=n(65),y=_interopRequireDefault(p),_=n(66),h=_interopRequireDefault(_),d=n(67),b=_interopRequireDefault(d),v=n(41),w=_interopRequireDefault(v),m=n(68),P=_interopRequireDefault(m),g=n(69),x=_interopRequireDefault(g),k=n(70),E=_interopRequireDefault(k),R=function(e){function WebAPI(){return _classCallCheck(this,WebAPI),_possibleConstructorReturn(this,(WebAPI.__proto__||Object.getPrototypeOf(WebAPI)).apply(this,arguments))}return _inherits(WebAPI,e),i(WebAPI,null,[{key:"getEntitySetName",value:function(){function getEntitySetName(t){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.default.getEntityDefinitions(e);case 2:return t=n.sent,n.abrupt("return",t.EntitySetName);case 4:case"end":return n.stop()}},_callee,this)}));return getEntitySetName}()},{key:"retrieveEntitySetProperty",value:function(){function retrieveEntitySetProperty(t,n,r,o){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e,t,n,r){var o,i;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=WebAPI.buildQueryString(r),i=WebAPI.parseEntityId(t),u.abrupt("return",WebAPI.requestAndReturnBody("GET",e+"("+i+")/"+n+o));case 2:case"end":return u.stop()}},_callee2,this)}));return retrieveEntitySetProperty}()},{key:"parseEntityId",value:function(e){var t=e;if("object"===(void 0===e?"undefined":o(e))){var n=[];for(var r in e)e.hasOwnProperty(r)&&n.push(r+"='"+e[r]+"'");t=n.join(",")}return t}},{key:"buildQueryString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[];if("string"==typeof e)t.push(e);else{if(e.select){var n=void 0;n="object"===o(e.select)?e.select.join(","):e.select,t.push("$select="+n)}e.top&&t.push("$top="+e.top),e.count&&t.push("$count="+e.count)}return t.length?"?"+t.join("&"):""}},{key:"context",get:function(){if(void 0!==window.Xrm)return window.Xrm.Page.context;if(void 0!==window.GetGlobalContext)return window.GetGlobalContext();throw new Error("Context is not available.")}},{key:"webAPIPath",get:function(){return this.context.getClientUrl()+"/api/data/"+this.version}},{key:"version",get:function(){return this.api||(this.version=window.Xrm.Page.context.getVersion().substr(0,3)),this.api},set:function(e){e.startsWith("v")||(e="v"+e),this.api=e}}]),WebAPI}((0,a.default)((0,c.default)((0,y.default)((0,h.default)((0,b.default)((0,P.default)((0,x.default)((0,E.default)(f.default)))))))));t.WebAPI=R,t.default=R,void 0!==(r=function(){return R}.call(t,n,t,e))&&(e.exports=r)},322:function(e,t,n){e.exports=n(18)},41:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,o){try{var i=t[r](o),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(18),i=function(e){return e&&e.__esModule?e:{default:e}}(o),u=function(){function Metadata(){_classCallCheck(this,Metadata)}return r(Metadata,null,[{key:"getEntityDefinitions",value:function(){function getEntityDefinitions(t){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!this.cachedEntityDefinitions[e]){n.next=2;break}return n.abrupt("return",Promise.resolve(this.cachedEntityDefinitions[e]));case 2:if("string"==typeof e){n.next=4;break}throw Error("Invalid logicalName given");case 4:return n.next=6,i.default.retrieveEntitySet("EntityDefinitions",{LogicalName:e});case 6:return t=n.sent,this.cachedEntityDefinitions[e]=t,n.abrupt("return",t);case 9:case"end":return n.stop()}},_callee,this)}));return getEntityDefinitions}()},{key:"getCachedEntityDefinitions",value:function(e){return this.cachedEntityDefinitionAttributes[e]}},{key:"getEntityDefinitionAttributes",value:function(){function getEntityDefinitionAttributes(t){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!this.cachedEntityDefinitionAttributes[e]){n.next=2;break}return n.abrupt("return",Promise.resolve(this.cachedEntityDefinitionAttributes[e]));case 2:return n.next=4,i.default.retrieveEntitySetProperty("EntityDefinitions",{LogicalName:e},"Attributes");case 4:return t=n.sent,this.cachedEntityDefinitionAttributes[e]=t,n.abrupt("return",t);case 7:case"end":return n.stop()}},_callee2,this)}));return getEntityDefinitionAttributes}()},{key:"cachedEntityDefinitions",get:function(){return this.entityDef||(this.entityDef={}),this.entityDef}},{key:"cachedEntityDefinitionAttributes",get:function(){return this.entityDefAttributes||(this.entityDefAttributes={}),this.entityDefAttributes}}]),Metadata}();t.default=u},50:function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function(){function Class(){_classCallCheck(this,Class)}return r(Class,[{key:"getClass",value:function(){return Object.getPrototypeOf(this).constructor}}]),Class}();t.default=o},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=["DELETE","GET","PATCH","POST","PUT"],o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise(function(i,a){var s=new XMLHttpRequest;if(-1===r.indexOf(t))throw new Error("Request method must be one of the following: "+r.join(", "));s.open(t,encodeURI(e),!0),s.setRequestHeader("OData-MaxVersion","4.0"),s.setRequestHeader("OData-Version","4.0"),s.setRequestHeader("Accept","application/json"),s.setRequestHeader("Content-Type","application/json; charset=utf-8");for(var c in o)s.setRequestHeader(c,o[c]);s.onreadystatechange=function(){if(4===s.readyState){s.onreadystatechange=null;try{var e=u(s);i(e)}catch(e){a(e)}}},s.send(JSON.stringify(n))})},i=function(e,t){if("string"==typeof t){var n=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?::(\d*))?Z$/.exec(t);if(n)return new Date(Date.UTC(+n[1],+n[2]-1,+n[3],+n[4],+n[5],+n[6],+n[7]))}return t},u=function(e){var t={200:function(){var t=null;try{t=JSON.parse(e.response,i)}catch(e){throw new Error("JSON response can't be parsed")}return{body:t,getResponseHeader:e.getResponseHeader.bind(e),statusCode:e.status}},204:function(){return{body:null,getResponseHeader:e.getResponseHeader.bind(e),statusCode:e.status}}},n=t[e.status];if(n)return n();throw new Error("Unexpected Error")};t.default=o},63:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,o){try{var i=t[r](o),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"executeAction",value:function(){function executeAction(t,n,r,o){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t,n,r){var o=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=4;break}return e.abrupt("return",this.executeBoundAction.apply(this,o));case 4:return e.abrupt("return",this.executeUnboundAction.apply(this,o));case 5:case"end":return e.stop()}},_callee,this)}));return executeAction}()},{key:"executeBoundAction",value:function(){function executeBoundAction(t,n,r,o){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e,t,n,r){var o;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.getEntitySetName(n);case 2:return o=i.sent,i.abrupt("return",this.requestAndReturnBody("POST",o+"("+r+")/Microsoft.Dynamics.CRM."+e,t));case 4:case"end":return i.stop()}},_callee2,this)}));return executeBoundAction}()},{key:"executeUnboundAction",value:function(e,t){return this.requestAndReturnBody("POST",""+e,t)}}]),_class}(e)};t.default=o},64:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,o){try{var i=t[r](o),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"associateEntities",value:function(){function associateEntities(t,n,r,o,i){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t,n,r,o){var i,u,a;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.getEntitySetName(e);case 2:return i=s.sent,u=this.webAPIPath,a={"@odata.id":u+"/"+r+"("+o+")"},s.abrupt("return",this.requestAndReturnBody("POST",i+"("+t+")/"+n+"/$ref",a));case 6:case"end":return s.stop()}},_callee,this)}));return associateEntities}()},{key:"disassociateEntities",value:function(){function disassociateEntities(t,n,r,o){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e,t,n,r){var o;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.getEntitySetName(e);case 2:return o=i.sent,i.abrupt("return",this.requestAndReturnBody("DELETE",o+"("+t+")/"+n+"("+r+")/$ref"));case 4:case"end":return i.stop()}},_callee2,this)}));return disassociateEntities}()}]),_class}(e)};t.default=o},65:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,o){try{var i=t[r](o),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"createEntity",value:function(){function createEntity(t,n){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t){var n,r;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.getEntitySetName(e);case 2:return n=o.sent,o.next=5,this.requestAndReturnHeader("POST",n,t,"OData-EntityId");case 5:if(!(r=o.sent)){o.next=8;break}return o.abrupt("return",this.getEntityIdFromHeader(r));case 8:case"end":return o.stop()}},_callee,this)}));return createEntity}()},{key:"getEntityIdFromHeader",value:function(e){return/\(([^)]+)\)/.exec(e)[1]}}]),_class}(e)};t.default=o},66:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,o){try{var i=t[r](o),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"deleteEntity",value:function(){function deleteEntity(t,n){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.getEntitySetName(e);case 2:return n=r.sent,r.abrupt("return",this.request("DELETE",n+"("+t+")"));case 4:case"end":return r.stop()}},_callee,this)}));return deleteEntity}()}]),_class}(e)};t.default=o},67:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,o){try{var i=t[r](o),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"executeFunction",value:function(e,t,n){return t?this.executeBoundFunction.apply(this,arguments):this.executeUnboundFunction.apply(this,arguments)}},{key:"executeBoundFunction",value:function(){function executeBoundFunction(t,n,r){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t,n){var r;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.getEntitySetName(t);case 2:return r=o.sent,o.abrupt("return",this.requestAndReturnBody("GET",r+"("+n+")/Microsoft.Dynamics.CRM."+e));case 4:case"end":return o.stop()}},_callee,this)}));return executeBoundFunction}()},{key:"executeUnboundFunction",value:function(e){return this.requestAndReturnBody("GET",""+e)}}]),_class}(e)};t.default=o},68:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,o){try{var i=t[r](o),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"retrieveEntity",value:function(){function retrieveEntity(t,n,r,o){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t,n,r){var o;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.getEntitySetName(e);case 2:return o=i.sent,i.abrupt("return",this.retrieveEntitySet(o,t,n,r));case 4:case"end":return i.stop()}},_callee,this)}));return retrieveEntity}()},{key:"retrieveEntitySet",value:function(e,t,n,r){var o=this.buildQueryString(n),i=t?this.parseEntityId(t):null,u=""+e;return i&&(u+="("+i+")"),u+=""+o,this.requestAndReturnBody("GET",u,null,r)}},{key:"retrieveMultiple",value:function(){function retrieveMultiple(t,n,r){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(e,t,n){var r,o,i=this;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,this.getEntitySetName(e);case 2:return r=u.sent,o=this.buildQueryString(t),u.abrupt("return",this.requestAndReturnBody("GET",""+r+o,null,n).then(function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e){var t,r;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(t=n&&n.Prefer&&n.Prefer.includes("odata.maxpagesize"),!e["@odata.nextLink"]||t){o.next=7;break}return o.next=4,i.requestNextLinks(e["@odata.nextLink"]);case 4:r=o.sent,e.value=e.value.concat(r),delete e["@odata.nextLink"];case 7:return o.abrupt("return",e);case 8:case"end":return o.stop()}},_callee2,i)}));return function(t){return e.apply(this,arguments)}}()));case 5:case"end":return u.stop()}},_callee3,this)}));return retrieveMultiple}()},{key:"requestNextLinks",value:function(e){var t=this,n=[];return this.requestAndReturnBody("GET",decodeURI(e)).then(function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee4(e){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.value,!e["@odata.nextLink"]){r.next=7;break}return r.t0=n,r.next=5,t.requestNextLinks(e["@odata.nextLink"]);case 5:r.t1=r.sent,n=r.t0.concat.call(r.t0,r.t1);case 7:return r.abrupt("return",n);case 8:case"end":return r.stop()}},_callee4,t)}));return function(t){return e.apply(this,arguments)}}())}},{key:"executeFetchXml",value:function(){function executeFetchXml(t,n){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee6(e,t){var n,r=this;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.getEntitySetName(e);case 2:return n=o.sent,o.abrupt("return",this.requestAndReturnBody("GET",n+"?fetchXml="+t).then(function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee5(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e["@odata.nextLink"]){n.next=6;break}return n.next=3,r.requestNextLinks(e["@odata.nextLink"]);case 3:t=n.sent,e.value=e.value.concat(t),delete e["@odata.nextLink"];case 6:return n.abrupt("return",e);case 7:case"end":return n.stop()}},_callee5,r)}));return function(t){return e.apply(this,arguments)}}()));case 4:case"end":return o.stop()}},_callee6,this)}));return executeFetchXml}()},{key:"count",value:function(){function count(t){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee7(e){var t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.getEntitySetName(e);case 2:return t=r.sent,r.next=5,this.requestAndReturnBody("GET",t+"/$count");case 5:return n=r.sent,r.abrupt("return",n);case 7:case"end":return r.stop()}},_callee7,this)}));return count}()}]),_class}(e)};t.default=o},69:function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(62),i=function(e){return e&&e.__esModule?e:{default:e}}(o),u=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"request",value:function(e,t,n,r){var o=this.webAPIPath,u=void 0;return u=0===t.indexOf("http")?t:o+"/"+t,(0,i.default)(u,e,n,r)}},{key:"requestAndReturnBody",value:function(e,t,n,r){return this.request(e,t,n,r).then(function(e){return e.body})}},{key:"requestAndReturnHeader",value:function(e,t,n,r){return this.request(e,t,n).then(function(e){return e.getResponseHeader(r)})}}]),_class}(e)};t.default=u},70:function(e,t,n){"use strict";function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function step(r,o){try{var i=t[r](o),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){step("next",e)},function(e){step("throw",e)});e(u)}return step("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function(e){return function(e){function _class(){return _classCallCheck(this,_class),_possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments))}return _inherits(_class,e),r(_class,null,[{key:"updateEntity",value:function(){function updateEntity(t,n,r){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e,t,n){var r;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.getEntitySetName(e);case 2:return r=o.sent,o.abrupt("return",this.request("PATCH",r+"("+t+")",n));case 4:case"end":return o.stop()}},_callee,this)}));return updateEntity}()}]),_class}(e)};t.default=o}})});