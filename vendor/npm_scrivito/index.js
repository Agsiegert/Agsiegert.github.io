(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("underscore"), require("react"), require("urijs"), require("react-dom"), require("prop-types"), require("tcomb-validation"), require("speakingurl"), require("bluebird"));
	else if(typeof define === 'function' && define.amd)
		define(["underscore", "react", "urijs", "react-dom", "prop-types", "tcomb-validation", "speakingurl", "bluebird"], factory);
	else if(typeof exports === 'object')
		exports["scrivito"] = factory(require("underscore"), require("react"), require("urijs"), require("react-dom"), require("prop-types"), require("tcomb-validation"), require("speakingurl"), require("bluebird"));
	else
		root["scrivito"] = factory(root["underscore"], root["react"], root["urijs"], root["react-dom"], root["prop-types"], root["tcomb-validation"], root["speakingurl"], root["bluebird"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_70__, __WEBPACK_EXTERNAL_MODULE_77__, __WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_156__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TRANSFORM_SOURCE_ERROR_PREFIX = 'binary.unprocessable.image.transform.source.';
var TRANSFORM_SOURCE_TOO_LARGE = 'binary.unprocessable.image.transform.source.too_large';

// From https://phabricator.babeljs.io/T3083#65595
function ExtendableError() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  Error.apply(this, args);
}

ExtendableError.prototype = Object.create(Error.prototype);

if (Object.setPrototypeOf) {
  Object.setPrototypeOf(ExtendableError, Error);
} else {
  ExtendableError.__proto__ = Error;
}

var ScrivitoError = function (_ExtendableError) {
  _inherits(ScrivitoError, _ExtendableError);

  function ScrivitoError(message) {
    var captureStackTrace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _classCallCheck(this, ScrivitoError);

    // message should be set before capturing stacktrace
    // since it is featured in the stacktrace in some environments.
    var _this = _possibleConstructorReturn(this, (ScrivitoError.__proto__ || Object.getPrototypeOf(ScrivitoError)).call(this));

    _this.message = message;
    _this._captureStackTrace = captureStackTrace;

    if (captureStackTrace) {
      if (Error.captureStackTrace) {
        Error.captureStackTrace(_this, _this.constructor);
      } else {
        var stack = void 0;

        try {
          throw new Error();
        } catch (error) {
          stack = error.stack;
        }

        Object.defineProperty(_this, 'stack', { value: stack });
      }
    }
    return _this;
  }

  _createClass(ScrivitoError, [{
    key: 'name',
    get: function get() {
      return this.constructor.name;
    }

    // For test purpose only.

  }, {
    key: 'captureStackTrace',
    get: function get() {
      return !!this._captureStackTrace;
    }
  }]);

  return ScrivitoError;
}(ExtendableError);

var ClientError = function (_ScrivitoError) {
  _inherits(ClientError, _ScrivitoError);

  function ClientError(message, httpCode, backendCode) {
    _classCallCheck(this, ClientError);

    var _this2 = _possibleConstructorReturn(this, (ClientError.__proto__ || Object.getPrototypeOf(ClientError)).call(this, message));

    _this2.httpCode = httpCode;
    _this2.backendCode = backendCode;
    return _this2;
  }

  _createClass(ClientError, null, [{
    key: 'for',
    value: function _for(message, httpCode, backendCode) {
      if (backendCode === TRANSFORM_SOURCE_TOO_LARGE) {
        return new TransformationSourceTooLargeError(message, httpCode, backendCode);
      }

      if (backendCode && backendCode.indexOf(TRANSFORM_SOURCE_ERROR_PREFIX) !== -1) {
        return new TransformationSourceInvalidError(message, httpCode, backendCode);
      }

      return new ClientError(message, httpCode, backendCode);
    }
  }]);

  return ClientError;
}(ScrivitoError);

var AccessDeniedError = function (_ClientError) {
  _inherits(AccessDeniedError, _ClientError);

  function AccessDeniedError(message, httpCode, backendCode) {
    _classCallCheck(this, AccessDeniedError);

    return _possibleConstructorReturn(this, (AccessDeniedError.__proto__ || Object.getPrototypeOf(AccessDeniedError)).call(this, message, httpCode, backendCode));
  }

  return AccessDeniedError;
}(ClientError);

var ArgumentError = function (_ScrivitoError2) {
  _inherits(ArgumentError, _ScrivitoError2);

  function ArgumentError(message) {
    _classCallCheck(this, ArgumentError);

    return _possibleConstructorReturn(this, (ArgumentError.__proto__ || Object.getPrototypeOf(ArgumentError)).call(this, message));
  }

  return ArgumentError;
}(ScrivitoError);

var CommunicationError = function (_ScrivitoError3) {
  _inherits(CommunicationError, _ScrivitoError3);

  function CommunicationError(message, httpCode) {
    _classCallCheck(this, CommunicationError);

    var _this5 = _possibleConstructorReturn(this, (CommunicationError.__proto__ || Object.getPrototypeOf(CommunicationError)).call(this, message));

    _this5.httpCode = httpCode;
    return _this5;
  }

  return CommunicationError;
}(ScrivitoError);

var BackendError = function (_CommunicationError) {
  _inherits(BackendError, _CommunicationError);

  function BackendError(message, httpCode) {
    _classCallCheck(this, BackendError);

    return _possibleConstructorReturn(this, (BackendError.__proto__ || Object.getPrototypeOf(BackendError)).call(this, message, httpCode));
  }

  return BackendError;
}(CommunicationError);

var InternalError = function (_ScrivitoError4) {
  _inherits(InternalError, _ScrivitoError4);

  function InternalError(message) {
    _classCallCheck(this, InternalError);

    return _possibleConstructorReturn(this, (InternalError.__proto__ || Object.getPrototypeOf(InternalError)).call(this, message));
  }

  return InternalError;
}(ScrivitoError);

var NetworkError = function (_CommunicationError2) {
  _inherits(NetworkError, _CommunicationError2);

  function NetworkError(response) {
    _classCallCheck(this, NetworkError);

    var status = response.status;

    var _this8 = _possibleConstructorReturn(this, (NetworkError.__proto__ || Object.getPrototypeOf(NetworkError)).call(this, status === 0 ? response.statusText : response.responseText, status));

    _this8.response = response;
    return _this8;
  }

  return NetworkError;
}(CommunicationError);

var RateLimitExceededError = function (_CommunicationError3) {
  _inherits(RateLimitExceededError, _CommunicationError3);

  function RateLimitExceededError(message, httpCode) {
    _classCallCheck(this, RateLimitExceededError);

    return _possibleConstructorReturn(this, (RateLimitExceededError.__proto__ || Object.getPrototypeOf(RateLimitExceededError)).call(this, message, httpCode));
  }

  return RateLimitExceededError;
}(CommunicationError);

// public API


var ResourceNotFoundError = function (_ScrivitoError5) {
  _inherits(ResourceNotFoundError, _ScrivitoError5);

  function ResourceNotFoundError(message) {
    _classCallCheck(this, ResourceNotFoundError);

    return _possibleConstructorReturn(this, (ResourceNotFoundError.__proto__ || Object.getPrototypeOf(ResourceNotFoundError)).call(this, message));
  }

  return ResourceNotFoundError;
}(ScrivitoError);

var UnauthorizedError = function (_ClientError2) {
  _inherits(UnauthorizedError, _ClientError2);

  function UnauthorizedError(message, httpCode, backendCode, details) {
    _classCallCheck(this, UnauthorizedError);

    var _this11 = _possibleConstructorReturn(this, (UnauthorizedError.__proto__ || Object.getPrototypeOf(UnauthorizedError)).call(this, message, httpCode, backendCode));

    _this11.details = details || {};
    return _this11;
  }

  return UnauthorizedError;
}(ClientError);

var TransformationSourceTooLargeError = function (_ClientError3) {
  _inherits(TransformationSourceTooLargeError, _ClientError3);

  function TransformationSourceTooLargeError(message, httpCode, backendCode) {
    _classCallCheck(this, TransformationSourceTooLargeError);

    return _possibleConstructorReturn(this, (TransformationSourceTooLargeError.__proto__ || Object.getPrototypeOf(TransformationSourceTooLargeError)).call(this, message, httpCode, backendCode));
  }

  return TransformationSourceTooLargeError;
}(ClientError);

var TransformationSourceInvalidError = function (_ClientError4) {
  _inherits(TransformationSourceInvalidError, _ClientError4);

  function TransformationSourceInvalidError(message, httpCode, backendCode) {
    _classCallCheck(this, TransformationSourceInvalidError);

    return _possibleConstructorReturn(this, (TransformationSourceInvalidError.__proto__ || Object.getPrototypeOf(TransformationSourceInvalidError)).call(this, message, httpCode, backendCode));
  }

  return TransformationSourceInvalidError;
}(ClientError);

var TranslationError = function (_InternalError) {
  _inherits(TranslationError, _InternalError);

  function TranslationError(message) {
    _classCallCheck(this, TranslationError);

    return _possibleConstructorReturn(this, (TranslationError.__proto__ || Object.getPrototypeOf(TranslationError)).call(this, message));
  }

  return TranslationError;
}(InternalError);

var NavigateToEmptyBinaryError = function (_InternalError2) {
  _inherits(NavigateToEmptyBinaryError, _InternalError2);

  function NavigateToEmptyBinaryError(message) {
    _classCallCheck(this, NavigateToEmptyBinaryError);

    return _possibleConstructorReturn(this, (NavigateToEmptyBinaryError.__proto__ || Object.getPrototypeOf(NavigateToEmptyBinaryError)).call(this, message));
  }

  return NavigateToEmptyBinaryError;
}(InternalError);

var CurrentPageNotFoundError = function (_InternalError3) {
  _inherits(CurrentPageNotFoundError, _InternalError3);

  function CurrentPageNotFoundError(message) {
    _classCallCheck(this, CurrentPageNotFoundError);

    return _possibleConstructorReturn(this, (CurrentPageNotFoundError.__proto__ || Object.getPrototypeOf(CurrentPageNotFoundError)).call(this, message));
  }

  return CurrentPageNotFoundError;
}(InternalError);

var InterpolationError = function (_TranslationError) {
  _inherits(InterpolationError, _TranslationError);

  function InterpolationError(message) {
    _classCallCheck(this, InterpolationError);

    return _possibleConstructorReturn(this, (InterpolationError.__proto__ || Object.getPrototypeOf(InterpolationError)).call(this, message));
  }

  return InterpolationError;
}(TranslationError);

exports.AccessDeniedError = AccessDeniedError;
exports.ArgumentError = ArgumentError;
exports.BackendError = BackendError;
exports.ClientError = ClientError;
exports.InternalError = InternalError;
exports.InterpolationError = InterpolationError;
exports.CurrentPageNotFoundError = CurrentPageNotFoundError;
exports.NavigateToEmptyBinaryError = NavigateToEmptyBinaryError;
exports.NetworkError = NetworkError;
exports.RateLimitExceededError = RateLimitExceededError;
exports.ResourceNotFoundError = ResourceNotFoundError;
exports.ScrivitoError = ScrivitoError;
exports.TransformationSourceInvalidError = TransformationSourceInvalidError;
exports.TransformationSourceTooLargeError = TransformationSourceTooLargeError;
exports.TranslationError = TranslationError;
exports.UnauthorizedError = UnauthorizedError;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _map_and_load_parallel = __webpack_require__(78);

var _map_and_load_parallel2 = _interopRequireDefault(_map_and_load_parallel);

var _find_widget_placement = __webpack_require__(79);

var _find_widget_placement2 = _interopRequireDefault(_find_widget_placement);

var _convert_to_slug = __webpack_require__(87);

var _convert_to_slug2 = _interopRequireDefault(_convert_to_slug);

var _types = __webpack_require__(25);

var _obj_data_store = __webpack_require__(30);

var ObjDataStore = _interopRequireWildcard(_obj_data_store);

var _attribute_serializer = __webpack_require__(45);

var AttributeSerializer = _interopRequireWildcard(_attribute_serializer);

var _basic_widget = __webpack_require__(12);

var _basic_widget2 = _interopRequireDefault(_basic_widget);

var _basic_obj_search = __webpack_require__(26);

var _basic_obj_search2 = _interopRequireDefault(_basic_obj_search);

var _basic_attribute_content = __webpack_require__(46);

var _basic_attribute_content2 = _interopRequireDefault(_basic_attribute_content);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _errors = __webpack_require__(1);

var _future_binary = __webpack_require__(24);

var _future_binary2 = _interopRequireDefault(_future_binary);

var _random = __webpack_require__(97);

var _obj_class = __webpack_require__(33);

var _obj_class2 = _interopRequireDefault(_obj_class);

var _attribute_inflection = __webpack_require__(16);

var _iterable = __webpack_require__(53);

var _global_state = __webpack_require__(5);

var _async_methods = __webpack_require__(54);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SYSTEM_ATTRIBUTES = {
  _id: 'id',
  _obj_class: 'objClass',
  _path: 'path',
  _permalink: 'permalink',
  _created_at: 'createdAt',
  _created_by: 'createdBy',
  _last_changed: 'lastChanged',
  _last_changed_by: 'lastChangedBy'
};

var BasicObj = function (_BasicAttributeConten) {
  _inherits(BasicObj, _BasicAttributeConten);

  _createClass(BasicObj, null, [{
    key: 'fetch',
    value: function fetch(_id) {
      (0, _async_methods.asyncMethodStub)();
    }
  }, {
    key: 'fetchIncludingDeleted',
    value: function fetchIncludingDeleted(_id) {
      (0, _async_methods.asyncMethodStub)();
    }
  }, {
    key: 'get',
    value: function get(idOrList) {
      var _this2 = this;

      if (_underscore2.default.isArray(idOrList)) {
        return (0, _map_and_load_parallel2.default)(idOrList, function (id) {
          return _this2.get(id);
        });
      }

      var obj = this.getIncludingDeleted(idOrList);

      if (!obj || obj.isDeleted()) {
        return;
      }

      return obj;
    }
  }, {
    key: 'getIncludingDeleted',
    value: function getIncludingDeleted(idOrList) {
      var _this3 = this;

      if (_underscore2.default.isArray(idOrList)) {
        return (0, _map_and_load_parallel2.default)(idOrList, function (id) {
          return _this3.getIncludingDeleted(id);
        });
      }

      var objData = ObjDataStore.get(idOrList);
      if (!objData) {
        return;
      }

      var obj = new BasicObj(objData);

      if (obj.isFinallyDeleted()) {
        return;
      }

      return obj;
    }
  }, {
    key: 'create',
    value: function create(attributes) {
      var normalizedAttributes = scrivito.typeInfo.normalizeAttrs(attributes);
      assertObjClassExists(normalizedAttributes._objClass);

      if (!normalizedAttributes._id) {
        normalizedAttributes._id = [this.generateId()];
      }

      var serializedAttributes = {
        _id: normalizedAttributes._id, _obj_class: normalizedAttributes._objClass
      };
      return this.createWithSerializedAttributes(scrivito.typeInfo.unwrapAttributes(serializedAttributes), _underscore2.default.omit(attributes, '_objClass', '_id'));
    }
  }, {
    key: 'addChildWithSerializedAttributes',
    value: function addChildWithSerializedAttributes(parentPath, serializedAttributes) {
      var objId = BasicObj.generateId();
      return this.createWithSerializedAttributes(_underscore2.default.extend({}, serializedAttributes, {
        _id: objId,
        _path: parentPath + '/' + objId
      }));
    }
  }, {
    key: 'createWithSerializedAttributes',
    value: function createWithSerializedAttributes(serializedAttributes, attributeDict) {
      if (!attributeDict) {
        return this.createWithSerializedAttributes.apply(this, _toConsumableArray(extractAttributeDict(serializedAttributes)));
      }

      var objData = ObjDataStore.createObjData(serializedAttributes._id);
      objData.update(serializedAttributes);

      var obj = new BasicObj(objData);
      obj.update(attributeDict);

      return obj;
    }
  }, {
    key: 'generateId',
    value: function generateId() {
      return (0, _random.randomId)();
    }
  }, {
    key: 'all',
    value: function all() {
      return new _basic_obj_search2.default().batchSize(1000);
    }
  }, {
    key: 'root',
    value: function root() {
      return BasicObj.getByPath('/');
    }
  }, {
    key: 'where',
    value: function where(attribute, operator, value) {
      var boost = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      return new _basic_obj_search2.default().and(attribute, operator, value, boost);
    }
  }, {
    key: 'getByPath',
    value: function getByPath(path) {
      var obj = (0, _iterable.firstValueFromIterable)(this.where('_path', 'equals', path));
      if (obj) {
        return obj;
      }
    }
  }, {
    key: 'getByPermalink',
    value: function getByPermalink(permalink) {
      var iterable = this.where('_permalink', 'equals', permalink);
      var obj = (0, _iterable.firstValueFromIterable)(iterable);
      if (obj) {
        return obj;
      }
    }
  }]);

  function BasicObj(objData) {
    _classCallCheck(this, BasicObj);

    var _this = _possibleConstructorReturn(this, (BasicObj.__proto__ || Object.getPrototypeOf(BasicObj)).call(this));

    _this.objData = objData;
    return _this;
  }

  _createClass(BasicObj, [{
    key: 'id',
    value: function id() {
      return this._current._id;
    }
  }, {
    key: 'objClass',
    value: function objClass() {
      return this._current._obj_class;
    }
  }, {
    key: 'createdAt',
    value: function createdAt() {
      return (0, _types.parseStringToDate)(this._current._created_at);
    }
  }, {
    key: 'createdBy',
    value: function createdBy() {
      return this._current._created_by;
    }
  }, {
    key: 'lastChanged',
    value: function lastChanged() {
      if (this._current._last_changed) {
        return (0, _types.parseStringToDate)(this._current._last_changed);
      }

      return null;
    }
  }, {
    key: 'lastChangedBy',
    value: function lastChangedBy() {
      if (this._current._last_changed_by) {
        return this._current._last_changed_by;
      }

      return null;
    }
  }, {
    key: 'version',
    value: function version() {
      return this._current._version;
    }
  }, {
    key: 'path',
    value: function path() {
      return this._current._path || null;
    }
  }, {
    key: 'permalink',
    value: function permalink() {
      return this._current._permalink || null;
    }
  }, {
    key: 'parentPath',
    value: function parentPath() {
      if (this.path() && this.path() !== '/') {
        return computeParentPath(this.path());
      }
    }
  }, {
    key: 'parent',
    value: function parent() {
      var parentPath = this.parentPath();

      if (parentPath) {
        return BasicObj.getByPath(parentPath);
      }
    }
  }, {
    key: 'hasConflicts',
    value: function hasConflicts() {
      return !!this._current._conflicts;
    }
  }, {
    key: 'modification',
    value: function modification() {
      if (this._current._deleted) {
        return 'deleted';
      }

      return this._current._modification || null;
    }
  }, {
    key: 'isModified',
    value: function isModified() {
      return !!this.modification();
    }
  }, {
    key: 'isNew',
    value: function isNew() {
      return this.modification() === 'new';
    }
  }, {
    key: 'isEdited',
    value: function isEdited() {
      return this.modification() === 'edited';
    }
  }, {
    key: 'isDeleted',
    value: function isDeleted() {
      return this.modification() === 'deleted';
    }
  }, {
    key: 'isFinallyDeleted',
    value: function isFinallyDeleted() {
      return !!this._current._deleted;
    }
  }, {
    key: 'isBinary',
    value: function isBinary() {
      if (!this._objClass) {
        return false;
      }

      var blobAttribute = this._objClass.attribute('blob');

      if (blobAttribute) {
        return blobAttribute.type === 'binary';
      }

      return false;
    }
  }, {
    key: 'isImage',
    value: function isImage() {
      if (this.isBinary()) {
        var blob = this.get('blob', 'binary');

        if (blob) {
          return blob.isImage();
        }
      }

      return false;
    }
  }, {
    key: 'contentLength',
    value: function contentLength() {
      return this._binaryData('contentLength');
    }
  }, {
    key: 'contentType',
    value: function contentType() {
      return this._binaryData('contentType');
    }
  }, {
    key: 'contentUrl',
    value: function contentUrl() {
      return this._binaryData('url');
    }
  }, {
    key: 'metadata',
    value: function metadata() {
      return this._binaryData('metadata');
    }
  }, {
    key: 'fetchParent',
    value: function fetchParent() {
      (0, _async_methods.asyncMethodStub)();
    }
  }, {
    key: 'children',
    value: function children() {
      if (this.path()) {
        var iterable = BasicObj.all().and('_parentPath', 'equals', this.path());
        return (0, _iterable.arrayFromIterable)(iterable);
      }

      return [];
    }
  }, {
    key: 'hasChildren',
    value: function hasChildren() {
      return !!this.children().length;
    }
  }, {
    key: 'orderedChildren',
    value: function orderedChildren() {
      var children = this.children();
      var childOrder = this.get('childOrder', 'referencelist');

      if (_underscore2.default.isArray(childOrder)) {
        return _underscore2.default.sortBy(children, function (child) {
          var childOrderIds = _underscore2.default.invoke(childOrder, 'id');
          var childIndex = childOrderIds.indexOf(child.id());

          if (childIndex === -1) {
            return childOrder.length;
          }

          return childIndex;
        });
      }

      return children;
    }
  }, {
    key: 'backlinks',
    value: function backlinks() {
      return (0, _iterable.arrayFromIterable)(BasicObj.where('*', 'linksTo', this));
    }
  }, {
    key: 'ancestors',
    value: function ancestors() {
      var parentPath = this.parentPath();

      if (parentPath) {
        return collectPathComponents(parentPath).map(function (ancestorPath) {
          return BasicObj.getByPath(ancestorPath);
        });
      }

      return [];
    }
  }, {
    key: 'update',
    value: function update(attributes) {
      var _this4 = this;

      var normalizedAttributes = scrivito.typeInfo.normalizeAttrs(attributes);

      (0, _global_state.withBatchedUpdates)(function () {
        _this4._persistWidgets(_this4, normalizedAttributes);
        var patch = AttributeSerializer.serialize(normalizedAttributes);
        _this4.objData.update(patch);
      });

      this._linkResolution.start();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.update({ _modification: ['deleted'] });
    }
  }, {
    key: 'insertWidget',
    value: function insertWidget(widget, _ref) {
      var before = _ref.before,
          after = _ref.after;

      var id = (before || after).id();

      var _widgetPlacementFor2 = this._widgetPlacementFor(id),
          attributeValue = _widgetPlacementFor2.attributeValue,
          attributeName = _widgetPlacementFor2.attributeName,
          container = _widgetPlacementFor2.container,
          index = _widgetPlacementFor2.index;

      var newIndex = before ? index : index + 1;
      var newAttributeValue = [].concat(_toConsumableArray(attributeValue.slice(0, newIndex)), [widget], _toConsumableArray(attributeValue.slice(newIndex)));

      container.update(_defineProperty({}, attributeName, [newAttributeValue, 'widgetlist']));
    }
  }, {
    key: 'removeWidget',
    value: function removeWidget(widget) {
      var field = this.fieldContainingWidget(widget);
      field.update(_underscore2.default.reject(field.get(), function (curWidget) {
        return curWidget.equals(widget);
      }));
    }
  }, {
    key: 'copyAsync',
    value: function copyAsync() {
      var copyOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      assertValidCopyOptions(copyOptions);

      return this._copyAttributes().then(function (copiedAttributes) {
        var serializedAttributes = _underscore2.default.extend(copiedAttributes, copyOptions);
        var obj = BasicObj.createWithSerializedAttributes(serializedAttributes);
        return obj.finishSaving().then(function () {
          return obj;
        });
      });
    }
  }, {
    key: 'moveToAsync',
    value: function moveToAsync(parentPath) {
      this.update({ _path: [parentPath + '/' + this.id()] });
      return this.finishSaving();
    }
  }, {
    key: 'markResolvedAsync',
    value: function markResolvedAsync() {
      this.update({ _conflicts: [null] });
      return this.finishSaving();
    }
  }, {
    key: 'finishSaving',
    value: function finishSaving() {
      var _this5 = this;

      var finish = this._linkResolution.finishResolving().then(function () {
        return _this5.objData.finishSaving();
      });
      return new scrivito.PublicPromise(finish);
    }
  }, {
    key: 'equals',
    value: function equals(otherObj) {
      if (!(otherObj instanceof BasicObj)) {
        return false;
      }

      return this.id() === otherObj.id();
    }
  }, {
    key: 'widget',
    value: function widget(id) {
      if (this.widgetData(id)) {
        return _basic_widget2.default.build(id, this);
      }
      return null;
    }
  }, {
    key: 'widgets',
    value: function widgets() {
      var _this6 = this;

      return _underscore2.default.map(_underscore2.default.keys(this._widgetPool), function (id) {
        return _this6.widget(id);
      });
    }
  }, {
    key: 'widgetData',
    value: function widgetData(id) {
      return this._widgetPool[id];
    }
  }, {
    key: 'fieldContainingWidget',
    value: function fieldContainingWidget(widget) {
      var _widgetPlacementFor3 = this._widgetPlacementFor(widget.id()),
          container = _widgetPlacementFor3.container,
          attributeName = _widgetPlacementFor3.attributeName;

      return container.field(attributeName, 'widgetlist');
    }
  }, {
    key: 'generateWidgetId',
    value: function generateWidgetId() {
      for (var i = 0; i < 10; i++) {
        var id = (0, _random.randomHex)();

        if (!this.widget(id)) {
          return id;
        }
      }

      throw new _errors.InternalError('Could not generate a new unused widget id.');
    }
  }, {
    key: 'serializeAttributes',
    value: function serializeAttributes() {
      var serializedAttributes = _get(BasicObj.prototype.__proto__ || Object.getPrototypeOf(BasicObj.prototype), 'serializeAttributes', this).call(this);

      delete serializedAttributes._conflicts;
      delete serializedAttributes._modification;
      delete serializedAttributes._created_at;
      delete serializedAttributes._created_by;
      delete serializedAttributes._last_changed;
      delete serializedAttributes._last_changed_by;

      return serializedAttributes;
    }
  }, {
    key: 'slug',
    value: function slug() {
      var title = this.get('title', 'string');
      return (0, _convert_to_slug2.default)(title);
    }
  }, {
    key: 'toPrettyPrint',
    value: function toPrettyPrint() {
      return '[object ' + this.objClass() + ' id="' + this.id() + '"]';
    }
  }, {
    key: '_binaryData',
    value: function _binaryData(key) {
      var blob = this.get('blob', 'binary');
      return blob && blob.raw()[key]();
    }
  }, {
    key: '_hasParentPath',
    value: function _hasParentPath() {
      return this.path() && this.path() !== '/';
    }
  }, {
    key: '_copyAttributes',
    value: function _copyAttributes() {
      var objId = BasicObj.generateId();
      var serializedAttributes = this.serializeAttributes();
      var uploadPromises = [];

      _underscore2.default.each(serializedAttributes, function (typeAndValue, name) {
        if (name[0] === '_') {
          delete serializedAttributes[name];
          return;
        }

        var _typeAndValue = _slicedToArray(typeAndValue, 2),
            type = _typeAndValue[0],
            value = _typeAndValue[1];

        if (type === 'binary' && value) {
          var futureBinary = new _future_binary2.default({ idToCopy: value.id });
          var promise = futureBinary.intoId(objId).then(function (binary) {
            return { name: name, binary: binary };
          });
          uploadPromises.push(promise);
        }
      });

      serializedAttributes._id = objId;
      serializedAttributes._obj_class = this.objClass();
      if (this.path()) {
        serializedAttributes._path = this.parentPath() + '/' + objId;
      }

      return scrivito.PublicPromise.all(uploadPromises).then(function (binaries) {
        _underscore2.default.each(binaries, function (_ref2) {
          var name = _ref2.name,
              binary = _ref2.binary;

          serializedAttributes[name] = ['binary', { id: binary.id() }];
        });

        return serializedAttributes;
      });
    }
  }, {
    key: '_widgetPlacementFor',
    value: function _widgetPlacementFor(widgetId) {
      var placement = (0, _find_widget_placement2.default)(this._current, widgetId);
      var container = placement.parentWidgetId ? this.widget(placement.parentWidgetId) : this;
      var attributeName = (0, _attribute_inflection.camelCase)(placement.attributeName);
      var attributeValue = container.get(attributeName, 'widgetlist');

      return _underscore2.default.extend(placement, { container: container, attributeName: attributeName, attributeValue: attributeValue });
    }
  }, {
    key: '_widgetPool',
    get: function get() {
      return this._current._widget_pool || {};
    }
  }, {
    key: '_systemAttributes',
    get: function get() {
      return SYSTEM_ATTRIBUTES;
    }
  }, {
    key: '_current',
    get: function get() {
      return this.objData.current;
    }
  }, {
    key: '_objClass',
    get: function get() {
      return _obj_class2.default.find(this.objClass());
    }
  }, {
    key: '_linkResolution',
    get: function get() {
      return scrivito.uiAdapter.linkResolutionFor(this.objData);
    }
  }]);

  return BasicObj;
}(_basic_attribute_content2.default);

exports.default = BasicObj;


(0, _async_methods.provideAsyncMethods)(BasicObj, {
  get: 'fetch',
  getByPermalink: 'fetchByPermalink',
  getIncludingDeleted: 'fetchIncludingDeleted'
});

(0, _async_methods.provideAsyncInstanceMethods)(BasicObj, {
  parent: 'fetchParent'
});

function assertObjClassExists(attrInfoAndValue) {
  if (!attrInfoAndValue) {
    throw new _errors.ArgumentError('Please provide an obj class as the "_objClass" property.');
  }
}

function extractAttributeDict(attributes) {
  var serializedAttributes = {};
  var attributeDict = {};

  _underscore2.default.each(attributes, function (serializedValue, name) {
    if (_underscore2.default.isArray(serializedValue) && _underscore2.default.first(serializedValue) === 'widgetlist') {
      var widgets = _underscore2.default.map(_underscore2.default.last(serializedValue), function (serializedWidgetAttributes) {
        return _basic_widget2.default.newWithSerializedAttributes(serializedWidgetAttributes);
      });

      var attrName = (0, _attribute_inflection.camelCase)(name);
      attributeDict[attrName] = [widgets, ['widgetlist']];
    } else {
      serializedAttributes[name] = serializedValue;
    }
  });

  if (!serializedAttributes._id) {
    serializedAttributes._id = BasicObj.generateId();
  }

  return [serializedAttributes, attributeDict];
}

function collectPathComponents(path) {
  var results = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (path === '/') {
    return ['/'].concat(_toConsumableArray(results));
  }
  return collectPathComponents(computeParentPath(path), [path].concat(_toConsumableArray(results)));
}

function computeParentPath(path) {
  var pathComponents = path.split('/');
  pathComponents.pop();
  if (pathComponents.length === 1) {
    return '/';
  }
  return pathComponents.join('/');
}

function assertValidCopyOptions(copyOptions) {
  var validCopyOptions = ['_path'];

  if (_underscore2.default.difference(_underscore2.default.keys(copyOptions), validCopyOptions).length) {
    throw new _errors.ArgumentError('Currently only "_path" copy option is supported.');
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = connect;

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _loadable_data = __webpack_require__(7);

var _loadable_data2 = _interopRequireDefault(_loadable_data);

var _errors = __webpack_require__(1);

var _is_class_component = __webpack_require__(113);

var _is_class_component2 = _interopRequireDefault(_is_class_component);

var _global_state = __webpack_require__(5);

var _display_name_from_component = __webpack_require__(64);

var _display_name_from_component2 = _interopRequireDefault(_display_name_from_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function connect(component) {
  if (typeof component !== 'function') {
    throw new _errors.ArgumentError('Scrivito.connect expects either a plain function or a subclass of React.Component');
  }

  if ((0, _is_class_component2.default)(component)) {
    return connectClassComponent(component);
  }

  return connectClassComponent(wrapInClassComponent(component));
}

function connectClassComponent(classComponent) {
  var connectedComponent = function (_classComponent) {
    _inherits(connectedComponent, _classComponent);

    function connectedComponent() {
      _classCallCheck(this, connectedComponent);

      return _possibleConstructorReturn(this, (connectedComponent.__proto__ || Object.getPrototypeOf(connectedComponent)).apply(this, arguments));
    }

    _createClass(connectedComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        this._scrivitoUnsubscribeModelState = (0, _global_state.subscribe)(function () {
          if (_this2._scrivitoIsStateChangeDetected && _this2._scrivitoIsStateChangeDetected()) {
            _this2.forceUpdate();
          }
        });

        if (_get(connectedComponent.prototype.__proto__ || Object.getPrototypeOf(connectedComponent.prototype), 'componentWillMount', this)) {
          _get(connectedComponent.prototype.__proto__ || Object.getPrototypeOf(connectedComponent.prototype), 'componentWillMount', this).call(this);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._scrivitoUnsubscribeModelState();

        if (_get(connectedComponent.prototype.__proto__ || Object.getPrototypeOf(connectedComponent.prototype), 'componentWillUnmount', this)) {
          _get(connectedComponent.prototype.__proto__ || Object.getPrototypeOf(connectedComponent.prototype), 'componentWillUnmount', this).call(this);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var reactElement = void 0;

        this._scrivitoIsStateChangeDetected = (0, _global_state.trackChanges)(function () {
          var run = void 0;

          _loadable_data2.default.capture(function () {
            run = _loadable_data2.default.run(function () {
              return _get(connectedComponent.prototype.__proto__ || Object.getPrototypeOf(connectedComponent.prototype), 'render', _this3).call(_this3);
            });
          }).loadRequiredData();

          if (run.allDataLoaded) {
            reactElement = run.result;
          } else {
            var preliminaryResult = run.success ? run.result : null;
            reactElement = _this3._scrivitoHandleLoading(preliminaryResult);
          }
        });

        return reactElement;
      }
    }, {
      key: '_scrivitoHandleLoading',
      value: function _scrivitoHandleLoading(preliminaryResult) {
        if (this._scrivitoRenderWhileLoading) {
          return this._scrivitoRenderWhileLoading();
        }

        return preliminaryResult;
      }
    }]);

    return connectedComponent;
  }(classComponent);

  connectedComponent.displayName = (0, _display_name_from_component2.default)(classComponent);

  return connectedComponent;
}

function wrapInClassComponent(functionalComponent) {
  var classComponent = function (_React$Component) {
    _inherits(classComponent, _React$Component);

    function classComponent() {
      _classCallCheck(this, classComponent);

      return _possibleConstructorReturn(this, (classComponent.__proto__ || Object.getPrototypeOf(classComponent)).apply(this, arguments));
    }

    _createClass(classComponent, [{
      key: 'render',
      value: function render() {
        return functionalComponent(this.props);
      }
    }]);

    return classComponent;
  }(_react2.default.Component);

  classComponent.displayName = (0, _display_name_from_component2.default)(functionalComponent);

  return classComponent;
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-empty-interface */
var errors_es6_1 = __webpack_require__(1);
var state_tree_1 = __webpack_require__(82);
var globalState;
var stateController;
function initializeGlobalState(ui) {
    if (!ui) {
        // we are the top-level window, so we own the globalState.
        globalState = new state_tree_1.default();
        stateController = globalState;
        exports.appState = createAppState();
        exports.cmsState = globalState.subState('cms');
        exports.uiState = globalState.subState('ui');
    }
    else {
        // we are inside an iFrame, so we don't own the globalState,
        // but rely on the UI instead.
        globalState = undefined;
        stateController = ui.stateController();
        exports.appState = ui.createAppState();
        exports.cmsState = ui.cmsState();
    }
}
exports.initializeGlobalState = initializeGlobalState;
var appStateCounter = 0;
function createAppState() {
    if (!globalState) {
        // createAppState should never be called inside an iFrame
        throw new errors_es6_1.InternalError();
    }
    var id = (appStateCounter++).toString();
    var apps = globalState.subState('apps');
    return apps.subState(id);
}
exports.createAppState = createAppState;
function withBatchedUpdates(fn) {
    return stateController.withBatchedUpdates(fn);
}
exports.withBatchedUpdates = withBatchedUpdates;
function subscribe(fn) {
    return stateController.subscribe(fn);
}
exports.subscribe = subscribe;
function trackChanges(fn) {
    return stateController.trackChanges(fn);
}
exports.trackChanges = trackChanges;
// for test purposes only
function listenerCount() {
    if (!globalState) {
        throw new errors_es6_1.InternalError();
    }
    return globalState.listenerCount();
}
exports.listenerCount = listenerCount;
// for test purposes only
function reset() {
    if (!globalState) {
        throw new errors_es6_1.InternalError();
    }
    globalState.clear();
}
exports.reset = reset;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapInAppClass = wrapInAppClass;
exports.buildAppClassInstance = buildAppClassInstance;
exports.unwrapAppClassValues = unwrapAppClassValues;
exports.unwrapAppClassValue = unwrapAppClassValue;
exports.unwrapAppAttributes = unwrapAppAttributes;

var _underscore = __webpack_require__(0);

var _attribute = __webpack_require__(19);

var _attribute2 = _interopRequireDefault(_attribute);

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _basic_widget = __webpack_require__(12);

var _basic_widget2 = _interopRequireDefault(_basic_widget);

var _basic_link = __webpack_require__(15);

var _basic_link2 = _interopRequireDefault(_basic_link);

var _errors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrapInAppClass(registry, internalValue) {
  if ((0, _underscore.isArray)(internalValue)) {
    return (0, _underscore.map)(internalValue, function (value) {
      return wrapInAppClass(registry, value);
    });
  }

  if (internalValue instanceof _basic_obj2.default) {
    return buildAppClassInstance(internalValue, registry.objClassFor(internalValue.objClass()));
  }

  if (internalValue instanceof _basic_widget2.default) {
    var objClassName = internalValue.objClass();
    var appClass = registry.widgetClassFor(objClassName);

    return buildAppClassInstance(internalValue, appClass);
  }
  if (internalValue instanceof _basic_link2.default) {
    return registry.defaultClassForLinks.build(internalValue.buildAttributes());
  }
  return internalValue;
}

function buildAppClassInstance(internalValue, appClass) {
  var externalValue = Object.create(appClass.prototype);
  externalValue._scrivitoPrivateContent = internalValue;
  return externalValue;
}

function unwrapAppClassValues(values) {
  if ((0, _underscore.isArray)(values)) {
    return (0, _underscore.map)(values, unwrapAppClassValue);
  }

  return unwrapAppClassValue(values);
}

function unwrapAppClassValue(value) {
  if (value && value._scrivitoPrivateContent) {
    return value._scrivitoPrivateContent;
  }

  return value;
}

function unwrapAppAttributes(appAttributes, schema, appClassName) {
  return (0, _underscore.mapObject)(appAttributes, function (value, name) {
    if (_attribute2.default.isSystemAttribute(name)) {
      return [value];
    }
    var typeInfo = schema.attributes[name];

    if (!typeInfo) {
      throw new _errors.ArgumentError('Attribute "' + name + '" is not defined for CMS object ' + ('class "' + appClassName + '".'));
    }

    var unwrappedValue = unwrapAppClassValues(value);
    return [unwrappedValue, typeInfo];
  });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errors_es6_1 = __webpack_require__(1);
var LoadHandler = __webpack_require__(75);
var loadable_value_1 = __webpack_require__(76);
var loadIdCounter = 0;
var captureNotLoadedStackTrace = true;
var allDataLoadedDuringRun;
var LoadableData = /** @class */ (function () {
    // state is the stateContainer where the LoadableData should store its state.
    function LoadableData(_a) {
        var state = _a.state, loader = _a.loader, invalidation = _a.invalidation, throwNotLoaded = _a.throwNotLoaded;
        if (!state) {
            throw new errors_es6_1.InternalError('LoadableData needs state');
        }
        this.value = new loadable_value_1.default(state);
        this.loader = loader;
        this.invalidation = invalidation;
        this.throwNotLoaded = throwNotLoaded || false;
    }
    LoadableData.throwNotLoaded = function () {
        allDataLoadedDuringRun = false;
        throw new scrivito.NotLoadedError(captureNotLoadedStackTrace);
    };
    LoadableData.capture = function (fn) {
        return LoadHandler.capture(fn);
    };
    LoadableData.run = function (loadableFunction) {
        var allDataLoadedBefore = allDataLoadedDuringRun;
        allDataLoadedDuringRun = true;
        try {
            var result = withoutNotLoadedStackTrace(loadableFunction);
            return {
                success: true,
                result: result,
                allDataLoaded: allDataLoadedDuringRun,
            };
        }
        catch (error) {
            if (allDataLoadedDuringRun) {
                throw error;
            }
            return {
                success: false,
                allDataLoaded: false,
            };
        }
        finally {
            allDataLoadedDuringRun = allDataLoadedBefore;
        }
    };
    // Access the LoadableData synchronously, assuming it is available.
    // If the LoadableData is an error, the error is thrown.
    // If the LoadableData is missing or loading, undefined will be returned.
    // if `throwNotLoaded` has been configured, a NotLoadedError is thrown instead.
    LoadableData.prototype.get = function () {
        var _this = this;
        if (this.isAvailable()) {
            this.reloadIfOutdated();
            return this.value.value();
        }
        if (this.isError()) {
            this.reloadIfOutdated();
            throw this.value.error();
        }
        allDataLoadedDuringRun = false;
        LoadHandler.notifyMissingData(function () { return _this.progressLoading(); });
        if (this.throwNotLoaded) {
            LoadableData.throwNotLoaded();
        }
    };
    // set the data to a value. this makes the value available.
    LoadableData.prototype.set = function (value) {
        this.value.transitionToAvailable(value, this.currentVersion());
    };
    // set the data to an error.
    LoadableData.prototype.setError = function (error) {
        this.transitionToError(error);
    };
    // transition back to missing, removes any value or errors.
    LoadableData.prototype.reset = function () {
        this.value.transitionToMissing();
    };
    // returns true iff the value is missing
    LoadableData.prototype.isMissing = function () {
        return this.value.status() === 'MISSING';
    };
    // returns true iff the value not available and not an error, but
    // has started loading.
    LoadableData.prototype.isLoading = function () {
        return this.value.getLoading() !== undefined;
    };
    // return true iff value is available.
    LoadableData.prototype.isAvailable = function () {
        return this.value.status() === 'AVAILABLE';
    };
    // return true iff an error was set.
    LoadableData.prototype.isError = function () {
        return this.value.status() === 'ERROR';
    };
    // trigger loading the data. does nothing if the data is already loading.
    LoadableData.prototype.triggerLoading = function () {
        var _this = this;
        if (this.isLoading()) {
            return;
        }
        var loadId = loadIdCounter++;
        var ifUnchanged = function (fn) {
            if (_this.value.getLoading() === loadId) {
                fn();
            }
        };
        var versionWhenLoadingStarted = this.currentVersion();
        var pushCallbacks = [];
        var addPushCallback = function (callback) { return pushCallbacks.push(callback); };
        var runPushCallbacks = function () { return pushCallbacks.forEach(function (callback) { return callback(); }); };
        this.loader(addPushCallback).then(function (result) {
            return ifUnchanged(function () {
                return scrivito.batchedStateUpdater.add(function () {
                    _this.value.transitionToAvailable(result, versionWhenLoadingStarted);
                    runPushCallbacks();
                });
            });
        }, function (error) {
            return ifUnchanged(function () {
                return scrivito.batchedStateUpdater.add(function () {
                    _this.transitionToError(error, versionWhenLoadingStarted);
                    runPushCallbacks();
                });
            });
        });
        this.value.setLoading(loadId);
    };
    LoadableData.prototype.transitionToError = function (error, version) {
        if (version === void 0) { version = this.currentVersion(); }
        this.value.transitionToError(error, version);
    };
    LoadableData.prototype.reloadIfOutdated = function () {
        var _this = this;
        if (this.hasBeenInvalidated()) {
            LoadHandler.notifyOutdatedData(function () { return _this.progressLoading(); });
        }
    };
    LoadableData.prototype.progressLoading = function () {
        if (this.hasBeenInvalidated() || (!this.isAvailable() && !this.isError())) {
            this.triggerLoading();
        }
    };
    LoadableData.prototype.hasBeenInvalidated = function () {
        if (!this.invalidation) {
            return false;
        }
        return this.currentVersion() !== this.value.version();
    };
    LoadableData.prototype.currentVersion = function () {
        var callback = this.invalidation;
        if (!callback) {
            return;
        }
        var version = callback();
        // protect against "crazy" objects like NaN
        if (typeof version === 'number' && isNaN(version)) {
            var message = "invalidation callback returned unsuitable version " + version;
            throw new errors_es6_1.InternalError(message);
        }
        return version;
    };
    return LoadableData;
}());
exports.default = LoadableData;
function withoutNotLoadedStackTrace(fn) {
    var beforeStackTrace = captureNotLoadedStackTrace;
    try {
        captureNotLoadedStackTrace = false;
        return fn();
    }
    finally {
        captureNotLoadedStackTrace = beforeStackTrace;
    }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tcomb = undefined;

var _tcombValidation = __webpack_require__(77);

var tcomb = _interopRequireWildcard(_tcombValidation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

tcomb.struct.strict = true;
tcomb.interface.strict = true;
tcomb.fail = function (message) {
  // original displays `[tcomb] ${message}`
  throw new TypeError(message);
};

exports.tcomb = tcomb;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _urijs = __webpack_require__(23);

var _urijs2 = _interopRequireDefault(_urijs);

var _loadable_data = __webpack_require__(7);

var _loadable_data2 = _interopRequireDefault(_loadable_data);

var _underscore = __webpack_require__(0);

var _errors = __webpack_require__(1);

var _future_binary = __webpack_require__(24);

var _future_binary2 = _interopRequireDefault(_future_binary);

var _metadata_collection = __webpack_require__(55);

var _metadata_collection2 = _interopRequireDefault(_metadata_collection);

var _global_state = __webpack_require__(5);

var _tcomb = __webpack_require__(8);

var _input_types = __webpack_require__(44);

var _type_checker = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// this is a small, 1x1 pixel, fully transparent GIF image
var FALLBACK_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

var FALLBACK_BINARY_DATA = {
  public_access: { get: { url: FALLBACK_URL } },
  private_access: { get: { url: FALLBACK_URL } }
};

// public API

var Binary = function () {
  function Binary(id, isPublic, definition) {
    var _this = this;

    _classCallCheck(this, Binary);

    this._id = id;
    this._isPublic = isPublic;
    this._definition = definition;

    this._loadableData = new _loadable_data2.default({
      state: modelState(id, definition),
      loader: function loader() {
        return _this._loadUrlData();
      }
    });
  }

  // public API


  _createClass(Binary, [{
    key: 'id',
    value: function id() {
      return this._id;
    }

    // public API

  }, {
    key: 'copy',
    value: function copy(options) {
      return new _future_binary2.default({ idToCopy: this._id }, options);
    }

    // public API

  }, {
    key: 'isPrivate',
    value: function isPrivate() {
      return !this._isPublic;
    }

    // public API

  }, {
    key: 'optimizeFor',
    value: function optimizeFor(definition) {
      return new Binary(this._id, this._isPublic, (0, _underscore.extend)({}, this._definition, definition));
    }

    // public API

  }, {
    key: 'original',
    value: function original() {
      return new Binary(this._id, this._isPublic, {});
    }

    // public API

  }, {
    key: 'raw',
    value: function raw() {
      return new Binary(this._id, this._isPublic);
    }
  }, {
    key: 'isExplicitlyTransformed',
    value: function isExplicitlyTransformed() {
      return this._isTransformed() && !(0, _underscore.isEmpty)(this._definition);
    }
  }, {
    key: 'isRaw',
    value: function isRaw() {
      return !this._isTransformed();
    }

    // public API

  }, {
    key: 'url',
    value: function url() {
      return this._urlData()[this._accessType()].get.url;
    }

    // public API

  }, {
    key: 'filename',
    value: function filename() {
      var url = this.url();

      if (url.match(/^data:/)) {
        return '';
      }

      return (0, _urijs2.default)(url).path().split('/').pop();
    }

    // public API

  }, {
    key: 'metadata',
    value: function metadata() {
      this._assertNotTransformed('Metadata');

      return new _metadata_collection2.default(this._id);
    }

    // public API

  }, {
    key: 'contentType',
    value: function contentType() {
      this._assertNotTransformed('Content type');

      return this.metadata().get('contentType');
    }

    // public API

  }, {
    key: 'contentLength',
    value: function contentLength() {
      this._assertNotTransformed('Content length');

      return this.metadata().get('contentLength') || 0;
    }
  }, {
    key: 'extname',
    value: function extname() {
      if (this.raw().filename().indexOf('.') > -1) {
        var ext = /[^.\\]*$/.exec(this.raw().filename())[0];
        return ext.toLowerCase();
      }
    }

    // For test purpose only.

  }, {
    key: 'equals',
    value: function equals(binary) {
      return binary instanceof Binary && binary.id() === this.id() && binary.isPrivate() === this.isPrivate() && (0, _underscore.isEqual)(binary.definition(), this.definition());
    }
  }, {
    key: 'isImage',
    value: function isImage() {
      var contentType = this.raw().contentType();
      if (contentType) {
        return contentType.split('/')[0] === 'image';
      }

      return false;
    }

    // For test purpose only.

  }, {
    key: 'definition',
    value: function definition() {
      return this._definition || null;
    }
  }, {
    key: '_accessType',
    value: function _accessType() {
      if (this.isPrivate()) {
        return 'private_access';
      }
      return 'public_access';
    }
  }, {
    key: '_urlData',
    value: function _urlData() {
      return this._loadableData.get() || FALLBACK_BINARY_DATA;
    }
  }, {
    key: '_loadUrlData',
    value: function _loadUrlData() {
      var path = 'blobs/' + encodeURIComponent(this._id);
      var params = void 0;

      if (this._definition) {
        path = path + '/optimize';
        params = { transformation: this._definition };
      }

      return scrivito.CmsRestApi.get(path, params);
    }
  }, {
    key: '_assertNotTransformed',
    value: function _assertNotTransformed(fieldName) {
      if (this._isTransformed()) {
        throw new _errors.ScrivitoError('"' + fieldName + '" is not available for transformed images.' + ' Use "Scrivito.Binary#raw" to access the untransformed version of the image.');
      }
    }
  }, {
    key: '_isTransformed',
    value: function _isTransformed() {
      return !!this._definition;
    }
  }], [{
    key: 'upload',
    value: function upload(source, options) {
      checkUpload(source, options);
      if (!_input_types.FileType.is(source)) {
        if (!(options && options.filename)) {
          throw new _errors.ArgumentError('Expected a filename to be passed with Blob as the source.');
        }
      }
      return new _future_binary2.default({ source: source }, options);
    }
  }, {
    key: 'store',
    value: function store(binaryId, _ref, cmsRestApiResponse) {
      var transformation = _ref.transformation;

      var loadableData = new _loadable_data2.default({ state: modelState(binaryId, transformation) });
      loadableData.set(cmsRestApiResponse);

      var raw = new Binary(binaryId);
      if (transformation) {
        return raw.optimizeFor(transformation);
      }

      return raw;
    }
  }, {
    key: 'storeMetadata',
    value: function storeMetadata(binaryId, cmsRestApiResponse) {
      return _metadata_collection2.default.store(binaryId, cmsRestApiResponse);
    }
  }]);

  return Binary;
}();

var BinaryOptionsType = _tcomb.tcomb.struct({
  contentType: _tcomb.tcomb.maybe(_tcomb.tcomb.String),
  filename: _tcomb.tcomb.maybe(_tcomb.tcomb.String)
});

var SourceType = _tcomb.tcomb.refinement(_tcomb.tcomb.Object, function (value) {
  return _input_types.BlobType.is(value) || _input_types.FileType.is(value);
}, 'Blob or File');

var checkUpload = (0, _type_checker.checkArgumentsFor)('Binary.upload', [['source', SourceType], ['options', _tcomb.tcomb.maybe(BinaryOptionsType)]], {
  docPermalink: 'js-sdk/Binary-static-upload'
});

function modelState(binaryId, definition) {
  var subStateKey = scrivito.computeCacheKey([binaryId, definition]);
  return _global_state.cmsState.subState('binary').subState(subStateKey);
}

exports.default = Binary;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Schema = function () {
  _createClass(Schema, null, [{
    key: 'forInstance',
    value: function forInstance(model) {
      return this.forClass(model.constructor);
    }
  }, {
    key: 'forClass',
    value: function forClass(klass) {
      return klass._scrivitoPrivateSchema;
    }
  }, {
    key: 'basicFieldFor',
    value: function basicFieldFor(model, attributeName) {
      var schema = Schema.forInstance(model);
      if (!schema) {
        return;
      }

      var typeInfo = schema.attributeDefinition(attributeName);
      if (!typeInfo) {
        return;
      }

      return model._scrivitoPrivateContent.field(attributeName, typeInfo);
    }
  }]);

  function Schema(definition, parent) {
    _classCallCheck(this, Schema);

    definition.attributes = definition.attributes || {};

    if (parent._scrivitoPrivateSchema) {
      definition.attributes = _underscore2.default.extend({}, parent._scrivitoPrivateSchema.attributes, definition.attributes);
    }
    this.definition = definition;
  }

  _createClass(Schema, [{
    key: 'attributeDefinition',
    value: function attributeDefinition(name) {
      var attrDefinition = this.attributes[name];
      if (attrDefinition) {
        return scrivito.typeInfo.normalize(attrDefinition);
      }
    }
  }, {
    key: 'isBinary',
    value: function isBinary() {
      var _ref = this.attributeDefinition('blob') || [],
          _ref2 = _slicedToArray(_ref, 1),
          type = _ref2[0];

      return type === 'binary';
    }
  }, {
    key: 'attributes',
    get: function get() {
      return this.definition.attributes;
    }
  }, {
    key: 'name',
    get: function get() {
      return this.definition.name;
    }
  }, {
    key: 'validContainerClasses',
    get: function get() {
      return this.definition.validContainerClasses;
    }
  }]);

  return Schema;
}();

exports.default = Schema;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prettyPrint;

var _underscore = __webpack_require__(0);

function prettyPrint(input) {
  try {
    if ((0, _underscore.isFunction)(input)) {
      return printFunction(input);
    }

    if ((0, _underscore.isObject)(input)) {
      return printObject(input);
    }

    return printTruncated(input);
  } catch (_e) {
    return '';
  }
}

function printObject(object) {
  var basicContent = object._scrivitoPrivateContent;

  if (basicContent && (0, _underscore.isFunction)(basicContent.toPrettyPrint)) {
    return basicContent.toPrettyPrint();
  }

  if ((0, _underscore.isElement)(object)) {
    return '[object HTMLElement ' + printTruncated(object.outerHTML) + ']';
  }

  return printTruncated(object);
}

function printFunction(fn) {
  var schema = fn._scrivitoPrivateSchema;

  if (schema) {
    return '[class ' + schema.name + ']';
  }

  if (fn.prototype && fn.prototype.isReactComponent) {
    var name = fn.displayName || fn.name;
    return '[class React.Component "' + name + '"]';
  }

  return truncate(fn.toString());
}

function printTruncated(input) {
  var stringified = JSON.stringify(input);

  if (stringified) {
    return truncate(stringified);
  }

  return stringified;
}

function truncate(string) {
  if (string.length > 100) {
    return string.slice(0, 100) + '...';
  }

  return string;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attribute_serializer = __webpack_require__(45);

var AttributeSerializer = _interopRequireWildcard(_attribute_serializer);

var _basic_attribute_content = __webpack_require__(46);

var _basic_attribute_content2 = _interopRequireDefault(_basic_attribute_content);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _attribute_inflection = __webpack_require__(16);

var _errors = __webpack_require__(1);

var _global_state = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SYSTEM_ATTRIBUTES = {
  _id: 'id',
  _obj_class: 'objClass'
};

var BasicWidget = function (_BasicAttributeConten) {
  _inherits(BasicWidget, _BasicAttributeConten);

  _createClass(BasicWidget, null, [{
    key: 'build',
    value: function build(id, obj) {
      var instance = Object.create(BasicWidget.prototype);
      instance._obj = obj;
      instance._id = id;

      return instance;
    }
  }, {
    key: 'newWithSerializedAttributes',
    value: function newWithSerializedAttributes(attributes) {
      var unserializedAttributes = {};
      var serializedAttributes = {};

      _underscore2.default.each(attributes, function (value, name) {
        if (name === '_obj_class') {
          unserializedAttributes._objClass = [value];
          return;
        }

        if (_underscore2.default.isArray(value) && _underscore2.default.first(value) === 'widgetlist') {
          var newWidgets = _underscore2.default.map(_underscore2.default.last(value), function (serializedWidget) {
            return BasicWidget.newWithSerializedAttributes(serializedWidget);
          });

          var attrName = (0, _attribute_inflection.camelCase)(name);
          unserializedAttributes[attrName] = [newWidgets, ['widgetlist']];
          return;
        }

        serializedAttributes[name] = value;
      });

      var widget = new BasicWidget(unserializedAttributes);
      widget.preserializedAttributes = serializedAttributes;
      return widget;
    }
  }]);

  function BasicWidget(attributes) {
    _classCallCheck(this, BasicWidget);

    var _this = _possibleConstructorReturn(this, (BasicWidget.__proto__ || Object.getPrototypeOf(BasicWidget)).call(this));

    _this._attributesToBeSaved = scrivito.typeInfo.normalizeAttrs(attributes);

    assertWidgetClassExists(attributes._objClass);
    return _this;
  }

  _createClass(BasicWidget, [{
    key: 'id',
    value: function id() {
      if (this.isPersisted()) {
        return this._id;
      }

      this._throwUnpersistedError();
    }
  }, {
    key: 'objClass',
    value: function objClass() {
      if (this.isPersisted()) {
        return this._current._obj_class;
      }

      return this._attributesToBeSaved._objClass[0];
    }
  }, {
    key: 'obj',
    value: function obj() {
      if (this.isPersisted()) {
        return this._obj;
      }

      this._throwUnpersistedError();
    }
  }, {
    key: 'widget',
    value: function widget(id) {
      return this.obj().widget(id);
    }
  }, {
    key: 'update',
    value: function update(attributes) {
      var _this2 = this;

      var normalizedAttributes = scrivito.typeInfo.normalizeAttrs(attributes);

      (0, _global_state.withBatchedUpdates)(function () {
        _this2._persistWidgets(_this2.obj(), normalizedAttributes);
        var patch = AttributeSerializer.serialize(normalizedAttributes);
        _this2._updateSelf(patch);
      });
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(widget) {
      widget.obj().insertWidget(this, { before: widget });
    }
  }, {
    key: 'insertAfter',
    value: function insertAfter(widget) {
      widget.obj().insertWidget(this, { after: widget });
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.obj().removeWidget(this);
    }
  }, {
    key: 'copy',
    value: function copy() {
      if (this.isPersisted()) {
        return this._copyPersisted();
      }

      return this._copyUnpersisted();
    }
  }, {
    key: 'persistInObj',
    value: function persistInObj(obj) {
      this._persistWidgets(obj, this._attributesToBeSaved);
      var patch = AttributeSerializer.serialize(this._attributesToBeSaved);
      _underscore2.default.extend(patch, this.preserializedAttributes || {});

      this._obj = obj;
      this._id = obj.generateWidgetId();

      this._updateSelf(patch);
      this._executeDidPersistCallback();
    }
  }, {
    key: 'isPersisted',
    value: function isPersisted() {
      return !!this._obj;
    }
  }, {
    key: 'onDidPersist',
    value: function onDidPersist(callback) {
      if (this.isPersisted()) {
        throw new _errors.ScrivitoError('Cannot call "onDidPersist" of an already persisted widget');
      }

      this._onDidPersistCallback = callback;
    }

    // For test purpose only.

  }, {
    key: 'hasOnDidPersistCallback',
    value: function hasOnDidPersistCallback() {
      return !!this._onDidPersistCallback;
    }
  }, {
    key: 'finishSaving',
    value: function finishSaving() {
      return this.obj().finishSaving();
    }
  }, {
    key: 'equals',
    value: function equals(otherWidget) {
      if (!(otherWidget instanceof BasicWidget)) {
        return false;
      }

      return this.id() === otherWidget.id() && this.obj().id() === otherWidget.obj().id();
    }
  }, {
    key: 'containingField',
    value: function containingField() {
      return this.obj().fieldContainingWidget(this);
    }
  }, {
    key: 'toPrettyPrint',
    value: function toPrettyPrint() {
      return '[object ' + this.objClass() + ' id="' + this.id() + '" objId="' + this.obj().id() + '"]';
    }
  }, {
    key: '_throwUnpersistedError',
    value: function _throwUnpersistedError() {
      throw new _errors.ScrivitoError('Can not access a new widget before it has been saved.');
    }
  }, {
    key: '_updateSelf',
    value: function _updateSelf(patch) {
      var widgetPoolPatch = { _widgetPool: [_defineProperty({}, this.id(), patch)] };
      this.obj().update(widgetPoolPatch);
    }
  }, {
    key: '_executeDidPersistCallback',
    value: function _executeDidPersistCallback() {
      if (this._onDidPersistCallback) {
        this._onDidPersistCallback();
        delete this._onDidPersistCallback;
      }
    }
  }, {
    key: '_copyPersisted',
    value: function _copyPersisted() {
      var serializedAttributes = this.serializeAttributes();
      return BasicWidget.newWithSerializedAttributes(serializedAttributes);
    }
  }, {
    key: '_copyUnpersisted',
    value: function _copyUnpersisted() {
      var attributes = _underscore2.default.mapObject(this._attributesToBeSaved, function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            value = _ref3[0],
            typeInfo = _ref3[1];

        if (typeInfo && typeInfo[0] === 'widgetlist') {
          return [_underscore2.default.invoke(value, 'copy'), typeInfo];
        }

        return [value, typeInfo];
      });

      var copy = new BasicWidget(attributes);

      if (this._onDidPersistCallback) {
        copy.onDidPersist(this._onDidPersistCallback);
      }

      return copy;
    }
  }, {
    key: 'attributesToBeSaved',
    get: function get() {
      return this._attributesToBeSaved;
    }
  }, {
    key: '_current',
    get: function get() {
      if (this.isPersisted()) {
        return this.obj().widgetData(this.id());
      }

      throw new _errors.ScrivitoError('Can not access an unpersisted widget.');
    }
  }, {
    key: '_systemAttributes',
    get: function get() {
      return SYSTEM_ATTRIBUTES;
    }
  }]);

  return BasicWidget;
}(_basic_attribute_content2.default);

exports.default = BasicWidget;


function assertWidgetClassExists(attrInfoAndValue) {
  if (!attrInfoAndValue) {
    throw new _errors.ArgumentError('Please provide a widget class as the "_objClass" property.');
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setWindowContext = exports.getWindowContext = undefined;

var _realm = __webpack_require__(98);

var _realm2 = _interopRequireDefault(_realm);

var _initialize_content = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The iframe context is the `scrivito` object, available top-level in the application iframe and
// used as the public API for the client. Following indirection is used in the specs in order to
// not pollute the global `window` object with the public API properties.

var realmApi = {};

var realm = _realm2.default.init(realmApi);
realm.setInitialContentFor(_initialize_content.initialContentFor);

function getWindowContext() {
  return realmApi;
}

// For test purpose only.
function setWindowContext(newIframeContext) {
  realmApi = newIframeContext;
}

exports.getWindowContext = getWindowContext;
exports.setWindowContext = setWindowContext;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tcomb_1 = __webpack_require__(8);
var pretty_print_1 = __webpack_require__(11);
var _ = __webpack_require__(0);
var errors_es6_1 = __webpack_require__(1);
function checkArgumentsFor(functionName, argumentsDefinitions, _a) {
    var docPermalink = _a.docPermalink;
    return function () {
        var givenArguments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            givenArguments[_i] = arguments[_i];
        }
        var errorMessage = errorMessageForArguments(givenArguments, argumentsDefinitions);
        if (errorMessage) {
            var moreInfo = "Visit https://scrivito.com/" + docPermalink + " for more information.";
            throw new errors_es6_1.ArgumentError("Invalid arguments for '" + functionName + "': " + errorMessage + " " + moreInfo);
        }
    };
}
exports.checkArgumentsFor = checkArgumentsFor;
function errorMessageForArguments(givenArguments, argumentsDefinitions) {
    var numExpected = argumentsDefinitions.length;
    var numGiven = givenArguments.length;
    if (numGiven > numExpected) {
        return "Expected " + numExpected + " arguments, got " + numGiven;
    }
    var errors = _.flatten(argumentsDefinitions.map(function (_a, index) {
        var argumentName = _a[0], argumentType = _a[1];
        var givenArgument = givenArguments[index];
        var validation = tcomb_1.tcomb.validate(givenArgument, argumentType);
        return validation.errors.map(function (error) { return messageForError(argumentName, error); });
    }));
    if (errors.length > 0) {
        return errors.join(' ');
    }
}
function messageForError(argumentName, error) {
    var subjectDescription = subjectDescriptionForError(argumentName, error);
    if (error.actual === undefined) {
        return "Missing required " + subjectDescription + ".";
    }
    if (error.expected === tcomb_1.tcomb.Nil) {
        return "Unexpected " + subjectDescription + ".";
    }
    var typeName = tcomb_1.tcomb.getTypeName(error.expected);
    var message = "got " + pretty_print_1.default(error.actual) + ", expected type " + typeName + ".";
    return "Unexpected value for " + subjectDescription + ": " + message;
}
function subjectDescriptionForError(argumentName, error) {
    var argumentDescription = "argument '" + argumentName + "'";
    if (error.path.length === 0) {
        return argumentDescription;
    }
    return "key '" + error.path.join('/') + "' in " + argumentDescription;
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _urijs = __webpack_require__(23);

var _urijs2 = _interopRequireDefault(_urijs);

var _errors = __webpack_require__(1);

var _pretty_print = __webpack_require__(11);

var _pretty_print2 = _interopRequireDefault(_pretty_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var allowedAttributes = ['hash', 'obj', 'query', 'target', 'title', 'url'];

var BasicLink = function () {
  _createClass(BasicLink, null, [{
    key: 'build',
    value: function build(attributes) {
      var objId = attributes.objId;
      delete attributes.objId;
      var link = new this(attributes);
      if (objId) {
        link._objId = objId;
      }

      return link;
    }
  }]);

  function BasicLink(attributes) {
    _classCallCheck(this, BasicLink);

    assertValidPublicAttributes(attributes);

    this._hash = attributes.hash || null;
    this._query = attributes.query || null;
    this._target = attributes.target || null;
    this._title = attributes.title || null;
    this._url = attributes.url || null;

    this._objId = null;
    if (attributes.obj) {
      this._objId = attributes.obj.id();
    }
  }

  // public API


  _createClass(BasicLink, [{
    key: 'title',
    value: function title() {
      return this._title;
    }

    // public API

  }, {
    key: 'query',
    value: function query() {
      return this._query;
    }

    // public API

  }, {
    key: 'hash',
    value: function hash() {
      return this._hash;
    }

    // public API

  }, {
    key: 'target',
    value: function target() {
      return this._target;
    }

    // public API

  }, {
    key: 'url',
    value: function url() {
      return this._url;
    }
  }, {
    key: 'objId',
    value: function objId() {
      return this._objId;
    }

    // public API

  }, {
    key: 'obj',
    value: function obj() {
      if (this.objId()) {
        return _basic_obj2.default.get(this.objId());
      }

      return null;
    }
  }, {
    key: 'queryParameters',
    value: function queryParameters() {
      return _urijs2.default.parseQuery(this.query());
    }
  }, {
    key: 'fetchObj',
    value: function fetchObj() {
      if (this.isExternal()) {
        return scrivito.PublicPromise.reject(new _errors.ScrivitoError('The link is external and does not reference an object.'));
      }

      return _basic_obj2.default.fetch(this.objId());
    }

    // public API

  }, {
    key: 'isExternal',
    value: function isExternal() {
      return !!this.url();
    }

    // public API

  }, {
    key: 'isInternal',
    value: function isInternal() {
      return !this.isExternal();
    }

    // public API

  }, {
    key: 'copy',
    value: function copy(attributes) {
      assertValidPublicAttributes(attributes);

      var newAttributes = this.buildAttributes();
      if (_underscore2.default.has(attributes, 'obj')) {
        delete newAttributes.objId;
      }
      _underscore2.default.extend(newAttributes, attributes);

      return this.constructor.build(newAttributes);
    }
  }, {
    key: 'buildAttributes',
    value: function buildAttributes() {
      return {
        title: this.title(),
        query: this.query(),
        hash: this.hash(),
        target: this.target(),
        url: this.url(),
        objId: this.objId()
      };
    }
  }, {
    key: 'isBroken',
    value: function isBroken() {
      if (this.isExternal()) {
        return false;
      }

      return !this.obj();
    }
  }, {
    key: 'toPrettyPrint',
    value: function toPrettyPrint() {
      if (this.isInternal()) {
        return '[object Link objId="' + this.objId() + '"]';
      }

      return '[object Link url="' + this.url() + '"]';
    }
  }]);

  return BasicLink;
}();

exports.default = BasicLink;


function assertValidPublicAttributes(attributes) {
  var unknownAttrs = _underscore2.default.without.apply(_underscore2.default, [_underscore2.default.keys(attributes)].concat(allowedAttributes));
  if (!_underscore2.default.isEmpty(unknownAttrs)) {
    throw new _errors.ArgumentError('Unexpected attributes ' + (0, _pretty_print2.default)(unknownAttrs) + '.' + (' Available attributes: ' + (0, _pretty_print2.default)(allowedAttributes)));
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CONVERT_TO_CAMELCASE = /(_+)(\w)/g;
var CONVERT_TO_UNDERSCORE = /([A-Z])/g;

var TEST_ABBR_OR_NUMBER = /[A-Z]+|\d+/g;
var TEST_CAMEL_CASE = /^_?(_+[A-Z0-9]|[^_])+$/;
var TEST_SEPARATOR = /[_\s]+/g;
var TEST_TITLE_CASE_WORD = /[A-Z][a-z]+/g;
var TEST_UNDERSCORE = /^[a-z0-9_:]+$/;

function isUnderscore(name) {
  return TEST_UNDERSCORE.test(name);
}

function isCamelCase(name) {
  return TEST_CAMEL_CASE.test(name);
}

function underscore(name) {
  return name.replace(CONVERT_TO_UNDERSCORE, function (_match, group) {
    return '_' + group.toLowerCase();
  });
}

function camelCase(name) {
  return name.replace(CONVERT_TO_CAMELCASE, function (match, underscores, nextChar, index) {
    if (!index) {
      return match;
    }
    if (nextChar.toUpperCase() === nextChar) {
      return match;
    }

    return '' + underscores.substr(1) + nextChar.toUpperCase();
  });
}

function classify(name) {
  var camelCased = camelCase(name);
  return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
}

function sentenceCase(name) {
  return name.replace(TEST_SEPARATOR, ' ').replace(TEST_TITLE_CASE_WORD, function (word) {
    return ' ' + word.toLowerCase();
  }).replace(TEST_ABBR_OR_NUMBER, function (word) {
    return ' ' + word;
  }).trim().replace(/./, capitalize);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

exports.camelCase = camelCase;
exports.classify = classify;
exports.isCamelCase = isCamelCase;
exports.isUnderscore = isUnderscore;
exports.sentenceCase = sentenceCase;
exports.underscore = underscore;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCurrentPage = exports.replaceCurrentPage = exports.currentPageError = exports.currentPageParams = exports.currentPage = undefined;

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _underscore = __webpack_require__(0);

var _schema = __webpack_require__(10);

var _schema2 = _interopRequireDefault(_schema);

var _basic_link = __webpack_require__(15);

var _basic_link2 = _interopRequireDefault(_basic_link);

var _errors = __webpack_require__(1);

var _load = __webpack_require__(21);

var _load2 = _interopRequireDefault(_load);

var _window_context = __webpack_require__(13);

var _global_state = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nextVersion = 0;

// public API
function currentPage() {
  var _getState = getState(),
      objId = _getState.objId;

  if ((0, _underscore.isNull)(objId)) {
    return objId;
  }
  if (!objId) {
    return;
  }

  try {
    return scrivito.loadWithDefault(undefined, function () {
      var appModelAccessor = (0, _window_context.getWindowContext)().appModelAccessor;
      var modelClass = (0, _window_context.getWindowContext)().Obj;

      var obj = appModelAccessor.getObj(modelClass, objId);

      if (obj) {
        return obj;
      }

      throw new _errors.ResourceNotFoundError('Obj with id "' + objId + '" not found.');
    });
  } catch (error) {
    scrivito.nextTick(function () {
      return advanceWithError(nextVersion, error);
    });
    return;
  }
}

// public API
function currentPageParams() {
  return getState().queryParameters || {};
}

function currentPageError() {
  return getState().error;
}

function replaceCurrentPage(fn) {
  var beforeSetCallback = function beforeSetCallback(_ref) {
    var obj = _ref.obj,
        queryParameters = _ref.queryParameters,
        hash = _ref.hash;

    if (obj) {
      scrivito.BrowserLocation.replaceWith({ obj: obj, queryParameters: queryParameters, hash: hash });
    }
  };
  setCurrentPage(fn, beforeSetCallback);
}

function setCurrentPage(fn, beforeSetCallback) {
  if (!(0, _underscore.isFunction)(fn)) {
    throw new _errors.ArgumentError('Parameter fn needs to be a function.');
  }

  var version = generateNextVersion();

  (0, _load2.default)(fn).then(function (target) {
    return (0, _load2.default)(function () {
      if (target.obj) {
        return extractRoutingTarget(target.obj, target.queryParameters, target.hash);
      }

      throw new _errors.CurrentPageNotFoundError();
    });
  }).then(function (_ref2) {
    var obj = _ref2.obj,
        url = _ref2.url,
        queryParameters = _ref2.queryParameters,
        hash = _ref2.hash;

    beforeSetCallback({ obj: obj, queryParameters: queryParameters, hash: hash });
    if (url) {
      advance(version, function () {
        return scrivito.changeLocation(url);
      });
    } else {
      advance(version, function () {
        return setStateForTarget({ obj: obj, queryParameters: queryParameters, hash: hash });
      });
    }
  }).catch(function (error) {
    if (error instanceof _errors.NavigateToEmptyBinaryError) {
      return;
    }
    advanceWithError(version, error);
  });
}

function state() {
  return _global_state.appState.subState('currentPage');
}

function getState() {
  return state().get() || {};
}

function setState(newState) {
  state().set(newState);
}

function generateNextVersion() {
  nextVersion += 1;
  return nextVersion;
}

function advance(version, changeTheState) {
  if (nextVersion === version) {
    changeTheState();
  }
}

function advanceWithError(version, error) {
  advance(version, function () {
    scrivito.logError(error);
    setState({ objId: null, error: error });
    setUiCurrentPage(null);
  });
}

function setStateForTarget(_ref3) {
  var obj = _ref3.obj,
      queryParameters = _ref3.queryParameters,
      hash = _ref3.hash;

  var objId = obj && obj.id() || null;
  setState({ objId: objId, queryParameters: queryParameters, hash: hash });
  setUiCurrentPage(objId);
}

function setUiCurrentPage(objId) {
  if (scrivito.uiAdapter) {
    scrivito.uiAdapter.setCurrentPageId(objId);
  }
}

function extractRoutingTarget(objOrLink, queryParameters, hash) {
  assertValidBasicTarget(objOrLink);

  if (objOrLink === null) {
    return {};
  }

  if (objOrLink instanceof _basic_obj2.default) {
    return extractRoutingTargetForObj(objOrLink, queryParameters, hash);
  }

  if (objOrLink instanceof _basic_link2.default) {
    return extractRoutingTargetForLink(objOrLink, queryParameters, hash);
  }
}

function extractRoutingTargetForObj(obj, queryParameters, hash) {
  if (isBinary(obj)) {
    var blob = obj.get('blob', ['binary']);

    if (!blob) {
      throw new _errors.NavigateToEmptyBinaryError();
    }

    return { url: blob.url() };
  }

  return { obj: obj, queryParameters: queryParameters, hash: hash };
}

function extractRoutingTargetForLink(link, queryParameters, hash) {
  if (link.isExternal()) {
    return { url: link.url() };
  }

  var routingTarget = {
    obj: link.obj(),
    queryParameters: link.queryParameters(),
    hash: link.hash()
  };

  if (queryParameters && !(0, _underscore.isEmpty)(queryParameters)) {
    routingTarget.queryParameters = queryParameters;
  }

  if (hash) {
    routingTarget.hash = hash;
  }

  return extractRoutingTarget(routingTarget.obj, routingTarget.queryParameters, routingTarget.hash);
}

function assertValidBasicTarget(target) {
  if ((0, _underscore.isNull)(target)) {
    return;
  }
  if (target instanceof _basic_obj2.default) {
    return;
  }
  if (target instanceof _basic_link2.default) {
    return;
  }

  if (!target) {
    throw new _errors.ArgumentError('Missing target.');
  }

  throw new _errors.ArgumentError('Target is invalid. Valid targets are instances of Obj or Link.');
}

function isBinary(basicObj) {
  var klass = (0, _window_context.getWindowContext)().getClass(basicObj.objClass());
  if (!klass) {
    return false;
  }

  var schema = _schema2.default.forClass(klass);
  return schema.isBinary();
}

exports.currentPage = currentPage;
exports.currentPageParams = currentPageParams;
exports.currentPageError = currentPageError;
exports.replaceCurrentPage = replaceCurrentPage;
exports.setCurrentPage = setCurrentPage;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BinaryType = exports.ObjSearchType = exports.LinkType = exports.WidgetType = exports.ObjType = undefined;

var _tcomb = __webpack_require__(8);

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _basic_widget = __webpack_require__(12);

var _basic_widget2 = _interopRequireDefault(_basic_widget);

var _basic_link = __webpack_require__(15);

var _basic_link2 = _interopRequireDefault(_basic_link);

var _basic_obj_search = __webpack_require__(26);

var _basic_obj_search2 = _interopRequireDefault(_basic_obj_search);

var _binary = __webpack_require__(9);

var _binary2 = _interopRequireDefault(_binary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjType = exports.ObjType = _tcomb.tcomb.irreducible('Obj', function (maybeObj) {
  var privateContent = maybeObj && maybeObj._scrivitoPrivateContent;
  return privateContent instanceof _basic_obj2.default;
});

var WidgetType = exports.WidgetType = _tcomb.tcomb.irreducible('Widget', function (maybeWidget) {
  var privateContent = maybeWidget && maybeWidget._scrivitoPrivateContent;
  return privateContent instanceof _basic_widget2.default;
});

var LinkType = exports.LinkType = _tcomb.tcomb.irreducible('Link', function (maybeLink) {
  var privateContent = maybeLink && maybeLink._scrivitoPrivateContent;
  return privateContent instanceof _basic_link2.default;
});

var ObjSearchType = exports.ObjSearchType = _tcomb.tcomb.irreducible('ObjSearch', function (maybeSearch) {
  return maybeSearch._scrivitoPrivateContent instanceof _basic_obj_search2.default;
});

var BinaryType = exports.BinaryType = _tcomb.tcomb.irreducible('Binary', function (maybeBinary) {
  return maybeBinary instanceof _binary2.default;
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = __webpack_require__(0);

var _obj_class = __webpack_require__(33);

var _obj_class2 = _interopRequireDefault(_obj_class);

var _widget_class = __webpack_require__(34);

var _widget_class2 = _interopRequireDefault(_widget_class);

var _errors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Attribute = function () {
  _createClass(Attribute, null, [{
    key: 'isSystemAttribute',
    value: function isSystemAttribute(name) {
      return name[0] === '_';
    }
  }]);

  function Attribute(attributeData) {
    _classCallCheck(this, Attribute);

    this.name = attributeData.name;
    this.type = attributeData.type;
    this._values = attributeData.values;
    this._valuesLocalization = attributeData.valuesLocalization;
    this._attributeData = attributeData;
  }

  // public

  _createClass(Attribute, [{
    key: 'title',
    value: function title() {
      return this._attributeData.title;
    }
  }, {
    key: 'description',
    value: function description() {
      return this._attributeData.description;
    }
  }, {
    key: 'typeInfo',
    value: function typeInfo() {
      if (this.type === 'enum' || this.type === 'multienum') {
        return [this.type, { values: this._values, valuesLocalization: this._valuesLocalization }];
      }
      return [this.type, {}];
    }
  }, {
    key: 'values',
    value: function values() {
      this._assertValidTypes(['enum', 'multienum'], 'Only enum and multienum attributes can have valid values');
      return this._values || [];
    }
  }, {
    key: 'validClasses',
    value: function validClasses() {
      this._assertValidTypes(['reference', 'referencelist'], 'Only reference and referencelist attributes can have valid classes');
      var objClassNames = this._attributeData.validClasses;

      if (objClassNames) {
        return (0, _underscore.map)(objClassNames, function (name) {
          return _obj_class2.default.find(name);
        });
      }
    }
  }, {
    key: 'only',
    value: function only() {
      this._assertValidTypes(['widgetlist'], 'Only widgetlist attributes have only()');
      var only = this._attributeData.only;
      if (only) {
        var widgetClassNames = (0, _underscore.isArray)(only) ? only : [only];
        return (0, _underscore.compact)((0, _underscore.map)(widgetClassNames, function (name) {
          return _widget_class2.default.find(name);
        }));
      }
    }

    // private

  }, {
    key: '_assertValidTypes',
    value: function _assertValidTypes(validTypes, errorMessage) {
      if (!(0, _underscore.include)(validTypes, this.type)) {
        throw new _errors.InternalError(errorMessage);
      }
    }
  }]);

  return Attribute;
}();

exports.default = Attribute;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deferred = function Deferred() {
  var _this = this;

  _classCallCheck(this, Deferred);

  this.promise = new scrivito.Promise(function (resolveFn, rejectFn) {
    _this.resolve = resolveFn;
    _this.reject = rejectFn;
  });
};

exports.default = Deferred;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deferred = __webpack_require__(20);

var _deferred2 = _interopRequireDefault(_deferred);

var _loadable_data = __webpack_require__(7);

var _loadable_data2 = _interopRequireDefault(_loadable_data);

var _global_state = __webpack_require__(5);

var _type_checker = __webpack_require__(14);

var _tcomb = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// load triggers the loading of all resource that the passed in
// function needs and returns a Promise to the result of the function.
//
// It can be used to convert synchronous code (the loadable function)
// into asynchronous code (Promise to the return value).
//
// A loadable function is a function that:
// * may throw a NotLoadedError
// * is pure, i.e. idempotent, doesn't perform I/O, is free of side-effects
//
// load will run the provided function as many times as needed,
// and trigger loading of any NotLoadedError that should occur.
//
// It returns a Promise that fulfills once the function returns a value.
// If the function throws an Exception (other than NotLoadedError),
// the Promise is rejected.
function load(loadableFunction) {
  checkLoad(loadableFunction);
  function tryToSettle() {
    var run = void 0;
    var error = void 0;

    var captured = _loadable_data2.default.capture(function () {
      try {
        run = _loadable_data2.default.run(loadableFunction);
      } catch (e) {
        error = e;
      }
    });

    if (!captured.isAllDataUpToDate()) {
      captured.loadRequiredData();

      var deferred = new _deferred2.default();

      var unsubscribe = (0, _global_state.subscribe)(function () {
        deferred.resolve();
        unsubscribe();
      });

      return deferred.promise.then(tryToSettle);
    }

    if (error) {
      throw error;
    }

    return run.result;
  }

  return new scrivito.Promise(function (resolve) {
    return resolve(tryToSettle());
  });
}

var checkLoad = (0, _type_checker.checkArgumentsFor)('load', [['loadableFunction', _tcomb.tcomb.Function]], {
  docPermalink: 'js-sdk/load'
});

exports.default = load;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function devicePixelRatio() {
  var windowObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  return windowObject.devicePixelRatio || 1;
}

function location() {
  return window.location;
}

function redirectTo(newLocation) {
  window.location = newLocation;
}

function history() {
  return window.history;
}

function onpopstate() {
  return window.onpopstate;
}

function setOnpopstate(value) {
  window.onpopstate = value;
}

function screen() {
  return window.screen;
}

function getDocument() {
  return document;
}

exports.devicePixelRatio = devicePixelRatio;
exports.history = history;
exports.location = location;
exports.onpopstate = onpopstate;
exports.redirectTo = redirectTo;
exports.screen = screen;
exports.setOnpopstate = setOnpopstate;
exports.getDocument = getDocument;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binary = __webpack_require__(9);

var _binary2 = _interopRequireDefault(_binary);

var _type_checker = __webpack_require__(14);

var _model_types = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FutureBinary = function () {
  function FutureBinary(sourceSpec) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, FutureBinary);

    var filename = void 0;

    if (sourceSpec.idToCopy) {
      this.idToCopy = sourceSpec.idToCopy;
      this.contentType = options.contentType;
      filename = options.filename;
    } else {
      var source = sourceSpec.source;

      this.source = source;
      this.contentType = options.contentType || source.type;
      filename = options.filename || source.name;
    }
    if (filename) {
      this.filename = filename.replace(/[^\w\-_\.$]/g, '-');
    }
  }

  // public API


  _createClass(FutureBinary, [{
    key: 'into',
    value: function into(target) {
      checkInto(target);
      return this.intoId(target.id());
    }
  }, {
    key: 'intoId',
    value: function intoId(targetId) {
      var binaryPromise = void 0;

      if (this.idToCopy) {
        binaryPromise = scrivito.BinaryRequest.copy(this.idToCopy, targetId, this.filename, this.contentType);
      } else {
        binaryPromise = scrivito.BinaryRequest.upload(targetId, this.source, this.filename, this.contentType);
      }

      return binaryPromise.then(function (_ref) {
        var id = _ref.id;
        return new _binary2.default(id, false);
      });
    }
  }]);

  return FutureBinary;
}();

var checkInto = (0, _type_checker.checkArgumentsFor)('FutureBinary#into', [['target', _model_types.ObjType]], {
  docPermalink: 'js-sdk/FutureBinary-into'
});

exports.default = FutureBinary;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.deserializeAsInteger = deserializeAsInteger;
exports.isValidInteger = isValidInteger;
exports.isValidFloat = isValidFloat;
exports.deserializeAsDate = deserializeAsDate;
exports.parseStringToDate = parseStringToDate;
exports.formatDateToString = formatDateToString;
exports.isValidDateString = isValidDateString;

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _errors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INTEGER_RANGE_START = -9007199254740991;
var INTEGER_RANGE_END = 9007199254740991;
var BACKEND_FORMAT_REGEXP = /^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/;

function deserializeAsInteger(value) {
  if (_underscore2.default.isString(value)) {
    if (value.match(/^-?\d+$/)) {
      return convertToInteger(value);
    }
    return null;
  }
  return convertToInteger(value);
}

function isValidInteger(value) {
  return isInteger(value) && INTEGER_RANGE_START <= value && value <= INTEGER_RANGE_END;
}

function isValidFloat(value) {
  return _underscore2.default.isNumber(value) && _underscore2.default.isFinite(value);
}

function deserializeAsDate(value) {
  if (!_underscore2.default.isString(value)) {
    return null;
  }

  if (!isValidDateString(value)) {
    throw new _errors.InternalError('The value is not a valid ISO date time: "' + value + '"');
  }

  return parseStringToDate(value);
}

function parseStringToDate(dateString) {
  if (!dateString) {
    return;
  }

  var _dateString$match = dateString.match(BACKEND_FORMAT_REGEXP),
      _dateString$match2 = _slicedToArray(_dateString$match, 7),
      _match = _dateString$match2[0],
      year = _dateString$match2[1],
      month = _dateString$match2[2],
      day = _dateString$match2[3],
      hours = _dateString$match2[4],
      minutes = _dateString$match2[5],
      seconds = _dateString$match2[6];

  return new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));
}

function formatDateToString(date) {
  var yearMonth = '' + date.getUTCFullYear() + pad(date.getUTCMonth() + 1);
  var dateHours = '' + pad(date.getUTCDate()) + pad(date.getUTCHours());
  var minutesSeconds = '' + pad(date.getUTCMinutes()) + pad(date.getUTCSeconds());
  return '' + yearMonth + dateHours + minutesSeconds;
}

function isValidDateString(dateString) {
  return _underscore2.default.isString(dateString) && dateString.match(/^\d{14}$/);
}

function pad(number) {
  return number < 10 ? '0' + number : number;
}

function isInteger(value) {
  return _underscore2.default.isNumber(value) && _underscore2.default.isFinite(value) && Math.floor(value) === value;
}

function convertToInteger(valueFromBackend) {
  var intValue = parseInt(valueFromBackend, 10);

  if (intValue === 0) {
    return 0; // otherwise -0 could be returned.
  } else if (isValidInteger(intValue)) {
    return intValue;
  }

  return null;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OPERATORS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _types = __webpack_require__(25);

var _obj_query_store = __webpack_require__(51);

var ObjQueryStore = _interopRequireWildcard(_obj_query_store);

var _facet_query = __webpack_require__(95);

var _facet_query2 = _interopRequireDefault(_facet_query);

var _underscore = __webpack_require__(0);

var _attribute_inflection = __webpack_require__(16);

var _errors = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OPERATORS = exports.OPERATORS = ['contains', 'containsPrefix', 'equals', 'startsWith', 'isGreaterThan', 'isLessThan', 'linksTo', 'refersTo'];
var NEGATABLE_OPERATORS = ['equals', 'startsWith', 'isGreaterThan', 'isLessThan'];
var BOOSTABLE_PARAMETERS = ['contains', 'containsPrefix'];
var DEFAULT_BATCH_SIZE = 100;

var BasicObjSearch = function () {
  function BasicObjSearch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, BasicObjSearch);

    this._query = [].concat(params.query || []);
    this._batchSize = params.batchSize;
    this._offset = params.offset;
    this._sortBy = params.sortBy;
    this._sortDirection = params.sortDirection;
    this._includeDeleted = params.includeDeleted;
  }

  _createClass(BasicObjSearch, [{
    key: 'and',
    value: function and(attributeOrSearch, operator, value) {
      var boost = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      if (attributeOrSearch instanceof BasicObjSearch) {
        this._query = [].concat(_toConsumableArray(this._query), _toConsumableArray(attributeOrSearch._query));
      } else {
        var subQuery = buildSubQuery(attributeOrSearch, operator, value);

        if (boost) {
          assertBoostableOperator(operator);
          subQuery.boost = underscoreBoostAttributes(boost);
        }

        this._query.push(subQuery);
      }

      return this;
    }
  }, {
    key: 'andNot',
    value: function andNot(attribute, operator, value) {
      var subQuery = buildSubQuery(attribute, operator, value);
      assertNegatableOperator(operator);

      subQuery.negate = true;
      this._query.push(subQuery);
      return this;
    }

    // public API

  }, {
    key: 'offset',
    value: function offset(_offset) {
      this._offset = _offset;
      return this;
    }

    // public API

  }, {
    key: 'order',
    value: function order(attribute) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';

      this._sortBy = underscoreAttribute(attribute);
      this._sortDirection = direction;
      return this;
    }
  }, {
    key: 'batchSize',
    value: function batchSize(_batchSize) {
      this._batchSize = _batchSize;
      return this;
    }
  }, {
    key: 'includeDeleted',
    value: function includeDeleted() {
      this._includeDeleted = true;
      return this;
    }

    // public API

  }, {
    key: 'count',
    value: function count() {
      return this.getObjDataQuery().count();
    }
  }, {
    key: 'iterator',
    value: function iterator() {
      var queryIterator = this.getObjDataQuery().iterator();

      return {
        next: function next() {
          var _queryIterator$next = queryIterator.next(),
              done = _queryIterator$next.done,
              value = _queryIterator$next.value;

          if (done) {
            return { done: done };
          }

          return { done: done, value: new _basic_obj2.default(value) };
        }
      };
    }
  }, {
    key: 'getObjDataQuery',
    value: function getObjDataQuery() {
      return ObjQueryStore.get(this.params(), this.getBatchSize());
    }
  }, {
    key: 'getBatchSize',
    value: function getBatchSize() {
      return this._batchSize || DEFAULT_BATCH_SIZE;
    }
  }, {
    key: 'facet',
    value: function facet(attribute) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var facetQuery = new _facet_query2.default(underscoreAttribute(attribute), options, this._query);
      return facetQuery.result();
    }
  }, {
    key: 'store',
    value: function store(objIds) {
      ObjQueryStore.store(this.params(), objIds);
    }
  }, {
    key: 'params',
    value: function params() {
      return (0, _underscore.omit)({
        query: this._query,
        offset: this._offset,
        sortBy: this._sortBy,
        sortDirection: this._sortDirection,
        includeDeleted: this._includeDeleted,
        batchSize: this._batchSize
      }, _underscore.isUndefined);
    }
  }]);

  return BasicObjSearch;
}();

exports.default = BasicObjSearch;


function buildSubQuery(camelcasedAttribute, publicOperator, unserializedValue) {
  var attribute = convertAttribute(camelcasedAttribute);
  var operator = convertOperator(publicOperator);
  var value = convertValue(unserializedValue);
  return { field: attribute, operator: operator, value: value };
}

function assertBoostableOperator(operator) {
  if (!(0, _underscore.contains)(BOOSTABLE_PARAMETERS, operator)) {
    throw new _errors.ArgumentError('Boosting operator "' + operator + '" is invalid.');
  }
}

function assertNegatableOperator(operator) {
  if (!(0, _underscore.contains)(NEGATABLE_OPERATORS, operator)) {
    throw new _errors.ArgumentError('Negating operator "' + operator + '" is invalid.');
  }
}

function convertValue(value) {
  if ((0, _underscore.isArray)(value)) {
    return (0, _underscore.map)(value, convertSingleValue);
  }

  return convertSingleValue(value);
}

function convertSingleValue(value) {
  if ((0, _underscore.isDate)(value)) {
    return (0, _types.formatDateToString)(value);
  }

  if (value instanceof _basic_obj2.default) {
    return value.id();
  }
  return value;
}

function convertOperator(operator) {
  if (!(0, _underscore.contains)(OPERATORS, operator)) {
    throw new _errors.ArgumentError('Operator "' + operator + '" is invalid.');
  }

  return (0, _attribute_inflection.underscore)(operator);
}

function convertAttribute(attribute) {
  if ((0, _underscore.isArray)(attribute)) {
    return (0, _underscore.map)(attribute, underscoreAttribute);
  }

  return underscoreAttribute(attribute);
}

function underscoreBoostAttributes(boost) {
  var boostWithUnderscoreAttributes = {};

  (0, _underscore.each)(boost, function (value, attributeName) {
    var underscoredAttributeName = underscoreAttribute(attributeName);
    boostWithUnderscoreAttributes[underscoredAttributeName] = value;
  });

  return boostWithUnderscoreAttributes;
}

function underscoreAttribute(attributeName) {
  if (!(0, _attribute_inflection.isCamelCase)(attributeName)) {
    throw new _errors.ArgumentError('Attribute name "' + attributeName + '" is not camel case.');
  }

  return (0, _attribute_inflection.underscore)(attributeName);
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var registry = {};

function registerComponentForId(componentId, componentClass) {
  registry[componentId] = componentClass;
}

function getComponentForId(componentId) {
  return registry[componentId] || null;
}

function registerComponentForAppClass(className, componentClass) {
  registerComponentForId(appClassId(className), componentClass);
}

function getComponentForAppClass(className) {
  return getComponentForId(appClassId(className));
}

function appClassId(className) {
  return "appClass-" + className;
}

// For test purpose only.
function clearComponentRegistry() {
  registry = {};
}

exports.clearComponentRegistry = clearComponentRegistry;
exports.getComponentForAppClass = getComponentForAppClass;
exports.getComponentForId = getComponentForId;
exports.registerComponentForAppClass = registerComponentForAppClass;
exports.registerComponentForId = registerComponentForId;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEditingMode;
function isEditingMode() {
  if (scrivito.uiAdapter) {
    return scrivito.uiAdapter.isEditingMode();
  }

  return false;
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preload = preload;
exports.createObjData = createObjData;
exports.store = store;
exports.set = set;
exports.setError = setError;
exports.get = get;
exports.clearCache = clearCache;

var _obj_data = __webpack_require__(89);

var _obj_data2 = _interopRequireDefault(_obj_data);

var _load = __webpack_require__(21);

var _load2 = _interopRequireDefault(_load);

var _global_state = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function preload(id) {
  (0, _load2.default)(function () {
    return get(id);
  });
}

function createObjData(id) {
  var objData = objDataFor(id);
  objData.set(null);

  scrivito.ObjReplication.get(id).notifyBackendState(null);

  return objData;
}

function store(primitiveObj) {
  var id = primitiveObj._id;
  if (!objDataFor(id).isAvailable()) {
    set(id, primitiveObj);
  }
  scrivito.ObjReplication.get(id).notifyBackendState(primitiveObj);
}

function set(id, primitiveObj) {
  objDataFor(id).set(primitiveObj);
}

// test method only!
function setError(id, error) {
  objDataFor(id).setError(error);
}

function get(id) {
  var objData = objDataFor(id);

  if (objData.current === undefined) {
    return;
  }

  return objData;
}

function clearCache() {
  cacheStore().clear();
}

function cacheStore() {
  return _global_state.cmsState.subState('objData');
}

function objDataFor(id) {
  return new _obj_data2.default(id, cacheStore().subState(id));
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWindowRegistry = undefined;

var _window_context = __webpack_require__(13);

function getWindowRegistry() {
  return (0, _window_context.getWindowContext)()._privateRealm._registry;
}

exports.getWindowRegistry = getWindowRegistry;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = __webpack_require__(0);

var _current_page = __webpack_require__(17);

var _scroll_window_to_top = __webpack_require__(110);

var _scroll_window_to_top2 = _interopRequireDefault(_scroll_window_to_top);

var _wrap_in_app_class = __webpack_require__(6);

var _type_checker = __webpack_require__(14);

var _tcomb = __webpack_require__(8);

var _model_types = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// public API
function navigateTo(target, options) {
  checkNavigateTo(target, options);

  var fn = target;
  var params = void 0;
  var hashParam = void 0;

  if (!(0, _underscore.isFunction)(target)) {
    fn = function fn() {
      return target;
    };
  }

  if (options) {
    params = options.params || {};
    hashParam = options.hash;
    var convenienceParams = (0, _underscore.omit)(options, 'hash', 'params');
    checkNavigateToConvenience(target, convenienceParams);
    params = (0, _underscore.extend)(convenienceParams, params);
  }

  var basicFn = function basicFn() {
    return {
      obj: (0, _wrap_in_app_class.unwrapAppClassValue)(fn()),
      queryParameters: params,
      hash: hashParam
    };
  };

  var beforeSetCallback = function beforeSetCallback(_ref) {
    var obj = _ref.obj,
        queryParameters = _ref.queryParameters,
        hash = _ref.hash;

    if (obj) {
      (0, _scroll_window_to_top2.default)();
      scrivito.BrowserLocation.pushWith({ obj: obj, queryParameters: queryParameters, hash: hash });
    }
  };

  (0, _current_page.setCurrentPage)(basicFn, beforeSetCallback);
}

var TargetType = _tcomb.tcomb.union([_tcomb.tcomb.Function, _tcomb.tcomb.irreducible('null', function (x) {
  return x === null;
}), _model_types.ObjType, _model_types.LinkType]);

var ParamsValueType = _tcomb.tcomb.dict(_tcomb.tcomb.String, _tcomb.tcomb.String);

var checkNavigateTo = (0, _type_checker.checkArgumentsFor)('navigateTo', [['target', TargetType], ['options', _tcomb.tcomb.maybe(_tcomb.tcomb.struct({
  hash: _tcomb.tcomb.maybe(_tcomb.tcomb.String),
  params: _tcomb.tcomb.maybe(ParamsValueType)
}, { strict: false }))]], {
  docPermalink: 'js-sdk/navigateTo'
});

var checkNavigateToConvenience = (0, _type_checker.checkArgumentsFor)('navigateTo', [['target', TargetType], ['options', _tcomb.tcomb.maybe(ParamsValueType)]], {
  docPermalink: 'js-sdk/navigateTo'
});

exports.default = navigateTo;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _binary = __webpack_require__(9);

var _binary2 = _interopRequireDefault(_binary);

var _with_server_defaults = __webpack_require__(43);

var withServerDefaults = _interopRequireWildcard(_with_server_defaults);

var _underscore = __webpack_require__(0);

var _errors = __webpack_require__(1);

var _pretty_print = __webpack_require__(11);

var _pretty_print2 = _interopRequireDefault(_pretty_print);

var _attribute_content_class = __webpack_require__(47);

var _attribute_content_class2 = _interopRequireDefault(_attribute_content_class);

var _valid_rails_page_classes = __webpack_require__(86);

var _use_rails_engine = __webpack_require__(49);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ALLOWED_CREATE_OBJ_ATTRIBUTES = ['_path', 'blob'];

var ObjClass = function (_AttributeContentClas) {
  _inherits(ObjClass, _AttributeContentClas);

  function ObjClass() {
    _classCallCheck(this, ObjClass);

    return _possibleConstructorReturn(this, (ObjClass.__proto__ || Object.getPrototypeOf(ObjClass)).apply(this, arguments));
  }

  _createClass(ObjClass, [{
    key: 'createObjWithDefaults',
    value: function createObjWithDefaults(attributes) {
      var unexpectedAttrs = _underscore.without.apply(undefined, [(0, _underscore.keys)(attributes)].concat(ALLOWED_CREATE_OBJ_ATTRIBUTES));

      if (!(0, _underscore.isEmpty)(unexpectedAttrs)) {
        throw new _errors.InternalError('Unexpected attributes ' + (0, _pretty_print2.default)(unexpectedAttrs) + '.' + (' Available attributes: ' + (0, _pretty_print2.default)(ALLOWED_CREATE_OBJ_ATTRIBUTES)));
      }

      if (this._classData.usesServerCallbacks) {
        return this._createObjWithServerDefaults(attributes);
      }

      return scrivito.Promise.resolve(this._createObjWithInitialValues(attributes));
    }
  }, {
    key: 'createBinaryWithDefaults',
    value: function createBinaryWithDefaults(source) {
      var _this2 = this;

      if (this._classData.usesServerCallbacks) {
        return this._createObjWithServerDefaults({ blob: source });
      }
      var objId = _basic_obj2.default.generateId();
      return _binary2.default.upload(source).intoId(objId).then(function (binary) {
        return _this2._createObjWithInitialValues({ blob: binary }, objId);
      });
    }
  }, {
    key: 'isBinary',
    value: function isBinary() {
      var blob = this.attribute('blob');
      return !!(blob && blob.type === 'binary');
    }
  }, {
    key: 'hasChildOrder',
    value: function hasChildOrder() {
      var childOrder = this.attribute('childOrder');
      return !!(childOrder && childOrder.type === 'referencelist');
    }
  }, {
    key: '_createObjWithInitialValues',
    value: function _createObjWithInitialValues(_ref, objId) {
      var _path = _ref._path,
          blob = _ref.blob;

      var publicAttrs = { _objClass: [this.name] };

      if (objId) {
        publicAttrs._id = [objId];
      }
      if (_path) {
        publicAttrs._path = [_path];
      }
      if (blob) {
        publicAttrs.blob = [blob, 'binary'];
      }

      var obj = _basic_obj2.default.create(publicAttrs);
      scrivito.AppConfig.initializeContentForObj(obj.id());

      return obj;
    }
  }, {
    key: '_createObjWithServerDefaults',
    value: function _createObjWithServerDefaults(attributes) {
      var legacyAttributes = (0, _underscore.extend)({ _obj_class: this.name }, attributes);
      return withServerDefaults.createObjFromLegacyAttributes(legacyAttributes);
    }
  }], [{
    key: 'type',
    value: function type() {
      return 'Obj';
    }
  }, {
    key: 'validPageClasses',
    value: function validPageClasses(path) {
      if ((0, _use_rails_engine.useRailsEngine)()) {
        var objClassNames = (0, _valid_rails_page_classes.validRailsPageClasses)(path);

        return objClassNames.reduce(function (arr, objClassName) {
          var objClass = ObjClass.find(objClassName);

          if (objClass) {
            arr.push(objClass);
          }

          return arr;
        }, []);
      }

      return ObjClass.all().filter(isValidPageClass);
    }
  }, {
    key: 'isValidPageClassName',
    value: function isValidPageClassName(objClassName) {
      if ((0, _use_rails_engine.useRailsEngine)()) {
        throw new _errors.InternalError('Unexpected call of isValidPageClassName in rails mode');
      }
      var objClass = ObjClass.find(objClassName);
      if (!objClass) {
        return false;
      }
      return isValidPageClass(objClass);
    }
  }]);

  return ObjClass;
}(_attribute_content_class2.default);

exports.default = ObjClass;


function isValidPageClass(objClass) {
  return !objClass.isHiddenInSelectionDialogs() && !objClass.isBinary();
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _valid_classes_for_widgetlist_field = __webpack_require__(84);

var _valid_classes_for_widgetlist_field2 = _interopRequireDefault(_valid_classes_for_widgetlist_field);

var _with_server_defaults = __webpack_require__(43);

var withServerDefaults = _interopRequireWildcard(_with_server_defaults);

var _basic_widget = __webpack_require__(12);

var _basic_widget2 = _interopRequireDefault(_basic_widget);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _attribute_content_class = __webpack_require__(47);

var _attribute_content_class2 = _interopRequireDefault(_attribute_content_class);

var _content_class_registry = __webpack_require__(48);

var _content_class_registry2 = _interopRequireDefault(_content_class_registry);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WidgetClass = function (_AttributeContentClas) {
  _inherits(WidgetClass, _AttributeContentClas);

  _createClass(WidgetClass, null, [{
    key: 'type',
    value: function type() {
      return 'Widget';
    }
  }, {
    key: 'validClassNamesForField',
    value: function validClassNamesForField(field) {
      return this.validClassesForField(field).map(function (widgetClass) {
        return widgetClass.name;
      });
    }
  }, {
    key: 'validClassesForField',
    value: function validClassesForField(field) {
      var container = field.container();
      var containerClass = findContentClassForBasicModel(container);
      if (containerClass && containerClass.usesServerCallbacks()) {
        var names = (0, _valid_classes_for_widgetlist_field2.default)(field);
        return names.reduce(function (acc, name) {
          var widgetClass = _content_class_registry2.default.findByType('Widget', name);

          if (widgetClass) {
            acc.push(widgetClass);
          }
          return acc;
        }, []);
      }
      var attribute = containerClass && containerClass.attribute(field.name());
      var only = attribute && attribute.only();
      var widgetClasses = only || _content_class_registry2.default.allForType('Widget');

      return widgetClasses.filter(validWidgetClassForObjClass(container.objClass()));
    }
  }]);

  function WidgetClass(classData) {
    _classCallCheck(this, WidgetClass);

    var _this = _possibleConstructorReturn(this, (WidgetClass.__proto__ || Object.getPrototypeOf(WidgetClass)).call(this, classData));

    _this.embeds = classData.embeds;
    _this._embeddingAttribute = classData.embeddingAttribute;
    return _this;
  }

  _createClass(WidgetClass, [{
    key: 'newWidgetWithDefaults',
    value: function newWidgetWithDefaults() {
      if (this._classData.usesServerCallbacks) {
        return withServerDefaults.newWidget(this.name);
      }

      var widget = new _basic_widget2.default({ _objClass: [this.name] });

      widget.onDidPersist(function () {
        var objId = widget.obj().id();
        var widgetId = widget.id();

        scrivito.AppConfig.initializeContentForWidget(objId, widgetId);
      });

      return scrivito.Promise.resolve(widget);
    }

    // public

  }, {
    key: 'embeddingAttribute',
    value: function embeddingAttribute() {
      if (this.embeds) {
        return this.attribute(this._embeddingAttribute);
      }
    }
  }, {
    key: 'isValidContainerClass',
    value: function isValidContainerClass(modelClassName) {
      if (!this._classData.validContainerClasses) {
        return true;
      }

      return _underscore2.default.contains(this._classData.validContainerClasses, modelClassName);
    }
  }]);

  return WidgetClass;
}(_attribute_content_class2.default);

function validWidgetClassForObjClass(objClassName) {
  return function (widgetClass) {
    return !widgetClass.isHiddenInSelectionDialogs() && widgetClass.isValidContainerClass(objClassName);
  };
}

function findContentClassForBasicModel(basicModel) {
  var type = basicModel instanceof _basic_widget2.default ? 'Widget' : 'Obj';
  return _content_class_registry2.default.findByType(type, basicModel.objClass());
}

exports.default = WidgetClass;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContentBrowserConfiguration = getContentBrowserConfiguration;
exports.resetContentBrowserConfiguration = resetContentBrowserConfiguration;
exports.default = configureContentBrowser;

var _underscore = __webpack_require__(0);

var _ui_adapter_compatible_value = __webpack_require__(36);

var _ui_adapter_compatible_value2 = _interopRequireDefault(_ui_adapter_compatible_value);

var _type_checker = __webpack_require__(14);

var _tcomb = __webpack_require__(8);

var _model_types = __webpack_require__(18);

var _basic_obj_search = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _filters = void 0;

function getContentBrowserConfiguration() {
  if (_filters) {
    return { filters: _filters };
  }
}

function resetContentBrowserConfiguration() {
  _filters = undefined;
}

// public API
function configureContentBrowser(configuration) {
  if (!scrivito.uiAdapter) {
    return;
  }

  checkConfigure(configuration);

  if (configuration.filters) {
    _filters = configuration.filters;
  }

  var baseFilter = configuration.baseFilter;
  if (baseFilter) {
    var baseQuery = baseFilter.query;
    if (baseQuery) {
      scrivito.uiAdapter.configureContentBrowser((0, _ui_adapter_compatible_value2.default)({ baseQuery: baseQuery }));
    }
  }
}

var SearchFieldType = _tcomb.tcomb.union([_tcomb.tcomb.String, _tcomb.tcomb.list(_tcomb.tcomb.String)]);
var SearchOperatorType = _tcomb.tcomb.enums.of((0, _underscore.intersection)(_basic_obj_search.OPERATORS, ['contains', 'containsPrefix', 'equals', 'startsWith', 'isGreaterThan', 'isLessThan']));
var SearchValueType = _tcomb.tcomb.union([_tcomb.tcomb.String, _tcomb.tcomb.Date, _tcomb.tcomb.Nil, _tcomb.tcomb.Number, _tcomb.tcomb.list(_tcomb.tcomb.union([_tcomb.tcomb.String, _tcomb.tcomb.Nil])), _tcomb.tcomb.list(_tcomb.tcomb.union([_tcomb.tcomb.Date, _tcomb.tcomb.Nil])), _tcomb.tcomb.list(_tcomb.tcomb.union([_tcomb.tcomb.Number, _tcomb.tcomb.Nil]))], 'SearchValue');

var FilterNodeType = _tcomb.tcomb.struct({
  title: _tcomb.tcomb.maybe(_tcomb.tcomb.String)
});
var FilterCollectionNodeType = FilterNodeType.extend({
  field: _tcomb.tcomb.maybe(SearchFieldType),
  operator: _tcomb.tcomb.maybe(SearchOperatorType),
  expanded: _tcomb.tcomb.maybe(_tcomb.tcomb.Boolean)
});

var RadioOptionType = FilterNodeType.extend({
  value: _tcomb.tcomb.maybe(SearchValueType),
  query: _tcomb.tcomb.maybe(_model_types.ObjSearchType),
  selected: _tcomb.tcomb.maybe(_tcomb.tcomb.Boolean)
});
var RadioFilterType = FilterCollectionNodeType.extend({
  type: _tcomb.tcomb.enums.of(['radioButton']),
  options: _tcomb.tcomb.dict(_tcomb.tcomb.String, RadioOptionType)
}, 'RadioFilterDefinition');

var CheckboxOptionType = FilterNodeType.extend({
  value: _tcomb.tcomb.maybe(SearchValueType),
  selected: _tcomb.tcomb.maybe(_tcomb.tcomb.Boolean)
});
var CheckboxFilterType = FilterCollectionNodeType.extend({
  type: _tcomb.tcomb.enums.of(['checkbox']),
  options: _tcomb.tcomb.dict(_tcomb.tcomb.String, CheckboxOptionType)
}, 'CheckboxFilterDefinition');

var TreeFilterType = _tcomb.tcomb.declare('TreeFilterDefinition');
TreeFilterType.define(FilterNodeType.extend({
  type: _tcomb.tcomb.maybe(_tcomb.tcomb.enums.of('tree')),
  icon: _tcomb.tcomb.maybe(_tcomb.tcomb.String),
  query: _tcomb.tcomb.maybe(_model_types.ObjSearchType),
  expanded: _tcomb.tcomb.maybe(_tcomb.tcomb.Boolean),
  value: _tcomb.tcomb.maybe(SearchValueType),
  field: _tcomb.tcomb.maybe(SearchFieldType),
  operator: _tcomb.tcomb.maybe(SearchOperatorType),
  selected: _tcomb.tcomb.maybe(_tcomb.tcomb.Boolean),
  options: _tcomb.tcomb.maybe(_tcomb.tcomb.dict(_tcomb.tcomb.String, TreeFilterType))
}));

var FilterDefinitionType = _tcomb.tcomb.union([TreeFilterType, CheckboxFilterType, RadioFilterType]);
FilterDefinitionType.dispatch = function (definition) {
  switch (definition.type || 'tree') {
    case 'tree':
      return TreeFilterType;
    case 'radioButton':
      return RadioFilterType;
    case 'checkbox':
      return CheckboxFilterType;
  }
};
var FiltersType = _tcomb.tcomb.dict(_tcomb.tcomb.String, FilterDefinitionType);

var BaseFilterType = _tcomb.tcomb.struct({
  query: _model_types.ObjSearchType
});

var ConfigurationType = _tcomb.tcomb.struct({
  filters: _tcomb.tcomb.maybe(FiltersType),
  baseFilter: _tcomb.tcomb.maybe(BaseFilterType)
}, 'Configuration');
var checkConfigure = (0, _type_checker.checkArgumentsFor)('configureContentBrowser', [['configuration', ConfigurationType]], {
  docPermalink: 'js-sdk/configureContentBrowser'
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // Supported types must not exceed the supported types mentioned here:
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm


exports.default = uiAdapterCompatibleValue;

var _underscore = __webpack_require__(0);

var _basic_obj_search = __webpack_require__(26);

var _basic_obj_search2 = _interopRequireDefault(_basic_obj_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (inner) values translated to undefined are removed from arrays and objects they are referred from
function uiAdapterCompatibleValue(value) {
  if (!value) {
    return value;
  }

  switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
    case 'string':
    case 'number':
    case 'boolean':
      return value;
    case 'object':
      if (value._scrivitoPrivateContent instanceof _basic_obj_search2.default) {
        return uiAdapterCompatibleValue(value._scrivitoPrivateContent.params());
      }
      if ((0, _underscore.isDate)(value)) {
        return value;
      }
      if ((0, _underscore.isArray)(value)) {
        return uiCompatibleArrayValue(value);
      }
      return uiCompatibleObjectValue(value);
  }
}

function uiCompatibleArrayValue(array) {
  var copy = [];
  array.forEach(function (item) {
    var compatibleItem = uiAdapterCompatibleValue(item);
    if (compatibleItem !== undefined) {
      copy.push(compatibleItem);
    }
  });
  return copy;
}

function uiCompatibleObjectValue(object) {
  var copy = {};
  (0, _underscore.each)(object, function (value, key) {
    var compatibleValueForKey = uiAdapterCompatibleValue(value);
    if (compatibleValueForKey !== undefined) {
      copy[key] = compatibleValueForKey;
    }
  });
  return copy;
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _schema = __webpack_require__(10);

var _schema2 = _interopRequireDefault(_schema);

var _errors = __webpack_require__(1);

var _wrap_in_app_class = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppModelAccessor = function () {
  function AppModelAccessor(registry) {
    _classCallCheck(this, AppModelAccessor);

    this._registry = registry;
  }

  _createClass(AppModelAccessor, [{
    key: 'getObj',
    value: function getObj(modelClass, id) {
      var instance = _basic_obj2.default.get(id);
      return this._checkObjClassAndWrapInAppClass(modelClass, instance);
    }
  }, {
    key: 'getObjIncludingDeleted',
    value: function getObjIncludingDeleted(modelClass, id) {
      var instance = _basic_obj2.default.getIncludingDeleted(id);
      return this._checkObjClassAndWrapInAppClass(modelClass, instance);
    }
  }, {
    key: 'read',
    value: function read(model, attributeName) {
      var basicField = _schema2.default.basicFieldFor(model, attributeName);
      if (!basicField) {
        return;
      }

      var internalValue = basicField.get();
      return (0, _wrap_in_app_class.wrapInAppClass)(this._registry, internalValue);
    }
  }, {
    key: 'update',
    value: function update(model, attributes) {
      var appClassName = this._registry.objClassNameFor(model.constructor);
      if (!appClassName) {
        var baseClass = void 0;

        if (model.constructor === this._registry.defaultClassForObjs) {
          baseClass = 'Obj';
        } else {
          baseClass = 'Widget';
        }

        throw new _errors.ArgumentError('Updating is not supported on the base class "' + baseClass + '".');
      }

      if (attributes.constructor !== Object) {
        throw new _errors.ArgumentError('The provided attributes are invalid. They have ' + 'to be an Object with valid Scrivito attribute values.');
      }

      var schema = _schema2.default.forInstance(model);
      var attributesWithTypeInfo = (0, _wrap_in_app_class.unwrapAppAttributes)(attributes, schema, appClassName);
      model._scrivitoPrivateContent.update(attributesWithTypeInfo);
    }
  }, {
    key: 'wrapInAppClass',
    value: function wrapInAppClass(instance) {
      return (0, _wrap_in_app_class.wrapInAppClass)(this._registry, instance);
    }
  }, {
    key: '_checkObjClassAndWrapInAppClass',
    value: function _checkObjClassAndWrapInAppClass(modelClass, instance) {
      var objClassName = this._registry.objClassNameFor(modelClass);

      if (objClassName && objClassName !== instance.objClass()) {
        throw new _errors.ResourceNotFoundError('Obj with id "' + instance.id() + '" is not of type "' + objClassName + '".');
      }

      return this.wrapInAppClass(instance);
    }
  }]);

  return AppModelAccessor;
}();

exports.default = AppModelAccessor;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tcomb_1 = __webpack_require__(8);
var type_checker_1 = __webpack_require__(14);
var model_types_js_1 = __webpack_require__(18);
var editingConfigForClass = {};
function getEditingConfigFor(className, propertyName) {
    var config = editingConfigForClass[className];
    if (!config) {
        return;
    }
    return config[propertyName];
}
exports.getEditingConfigFor = getEditingConfigFor;
var EnumValueLocalizationType = tcomb_1.tcomb.struct({
    value: tcomb_1.tcomb.String,
    title: tcomb_1.tcomb.String,
});
var AttributesConfigType = tcomb_1.tcomb.dict(tcomb_1.tcomb.String, tcomb_1.tcomb.struct({
    title: tcomb_1.tcomb.maybe(tcomb_1.tcomb.String),
    description: tcomb_1.tcomb.maybe(tcomb_1.tcomb.String),
    values: tcomb_1.tcomb.maybe(tcomb_1.tcomb.list(EnumValueLocalizationType)),
}));
var PropertiesGroupsType = tcomb_1.tcomb.list(tcomb_1.tcomb.struct({
    title: tcomb_1.tcomb.String,
    component: tcomb_1.tcomb.maybe(tcomb_1.tcomb.String),
    properties: tcomb_1.tcomb.maybe(tcomb_1.tcomb.list(tcomb_1.tcomb.String)),
}));
var InitialContentType = tcomb_1.tcomb.dict(tcomb_1.tcomb.String, tcomb_1.tcomb.union([
    model_types_js_1.LinkType,
    tcomb_1.tcomb.Date,
    tcomb_1.tcomb.Function,
    tcomb_1.tcomb.Nil,
    tcomb_1.tcomb.Number,
    tcomb_1.tcomb.String,
    tcomb_1.tcomb.list(model_types_js_1.LinkType),
    tcomb_1.tcomb.list(model_types_js_1.WidgetType),
    tcomb_1.tcomb.list(tcomb_1.tcomb.String),
]));
var EditingConfigType = tcomb_1.tcomb.struct({
    attributes: tcomb_1.tcomb.maybe(AttributesConfigType),
    propertiesGroups: tcomb_1.tcomb.maybe(PropertiesGroupsType),
    title: tcomb_1.tcomb.maybe(tcomb_1.tcomb.String),
    description: tcomb_1.tcomb.maybe(tcomb_1.tcomb.String),
    thumbnail: tcomb_1.tcomb.maybe(tcomb_1.tcomb.String),
    titleForContent: tcomb_1.tcomb.maybe(tcomb_1.tcomb.Function),
    descriptionForContent: tcomb_1.tcomb.maybe(tcomb_1.tcomb.Function),
    thumbnailForContent: tcomb_1.tcomb.maybe(tcomb_1.tcomb.Function),
    hideInSelectionDialogs: tcomb_1.tcomb.maybe(tcomb_1.tcomb.Boolean),
    properties: tcomb_1.tcomb.maybe(tcomb_1.tcomb.list(tcomb_1.tcomb.String)),
    initialContent: tcomb_1.tcomb.maybe(InitialContentType),
});
var checkProvideEditingConfig = type_checker_1.checkArgumentsFor('provideEditingConfig', [
    ['className', tcomb_1.tcomb.String],
    ['editingConfig', EditingConfigType],
], { docPermalink: 'js-sdk/provideEditingConfig' });
function provideEditingConfig(className, editingConfig) {
    checkProvideEditingConfig(className, editingConfig);
    editingConfigForClass[className] = editingConfig;
}
exports.provideEditingConfig = provideEditingConfig;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basicUrlFor = basicUrlFor;

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _schema = __webpack_require__(10);

var _schema2 = _interopRequireDefault(_schema);

var _basic_link = __webpack_require__(15);

var _basic_link2 = _interopRequireDefault(_basic_link);

var _window_context = __webpack_require__(13);

var _errors = __webpack_require__(1);

var _binary = __webpack_require__(9);

var _binary2 = _interopRequireDefault(_binary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function basicUrlFor(target) {
  assertValidTarget(target);

  if (target instanceof _basic_link2.default) {
    return urlForLink(target);
  }
  if (target instanceof _binary2.default) {
    return urlForBinary(target);
  }
  if (isBinaryObj(target)) {
    return urlForBinaryObj(target);
  }

  return scrivito.Routing.generate({ obj: target });
}

function assertValidTarget(target) {
  if (!target) {
    throw new _errors.ArgumentError('Missing target.');
  }
  if (target instanceof _basic_link2.default) {
    return;
  }
  if (target instanceof _basic_obj2.default) {
    return;
  }
  if (target instanceof _binary2.default) {
    return;
  }

  throw new _errors.ArgumentError('Target is invalid. Valid targets are instances of Obj or Link.');
}

function urlForBinary(binary) {
  return binary.url();
}

function urlForBinaryObj(obj) {
  var blob = obj.get('blob', ['binary']);

  if (blob) {
    return urlForBinary(blob);
  }

  return '#__empty_blob';
}

function urlForLink(link) {
  if (link.isExternal()) {
    return link.url();
  }

  return basicUrlFor(link.obj());
}

function context() {
  return (0, _window_context.getWindowContext)();
}

function isBinaryObj(obj) {
  var klass = context().getClass(obj.objClass());
  if (!klass) {
    return false;
  }

  var schema = _schema2.default.forClass(klass);
  return schema.isBinary();
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformHTML = transformHTML;
exports.findTarget = findTarget;
exports.reset = reset;

var _window_context = __webpack_require__(13);

var _url_for_obj_id = __webpack_require__(120);

var _url_for_obj_id2 = _interopRequireDefault(_url_for_obj_id);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REG_EXP = /\bobjid:([a-f0-9]{16})\b([^"']*)/g;

var knownLinks = {};

function transformHTML(htmlString) {
  return htmlString.replace(REG_EXP, function (_match, objId) {
    var url = (0, _url_for_obj_id2.default)(objId);
    var path = scrivito.Routing.recognizePath(url);

    if (path) {
      knownLinks[path] = objId;
    }

    return url;
  });
}

function findTarget(currentNode, outermostNode) {
  if (currentNode === outermostNode) {
    return null;
  }

  if (currentNode.nodeName === 'A') {
    var path = scrivito.Routing.recognizePath(currentNode.href);
    var objId = knownLinks[path];

    if (objId) {
      return (0, _window_context.getWindowContext)().Obj.get(objId);
    }
  }

  return findTarget(currentNode.parentNode, outermostNode);
}

// For test purpose only.
function reset() {
  knownLinks = {};
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WIDGET_TAG_CONTEXT_KEY = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(70);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _underscore = __webpack_require__(0);

var _is_editing_mode = __webpack_require__(28);

var _is_editing_mode2 = _interopRequireDefault(_is_editing_mode);

var _schema = __webpack_require__(10);

var _schema2 = _interopRequireDefault(_schema);

var _window_registry = __webpack_require__(31);

var _extract_ids_from_content = __webpack_require__(42);

var _extract_ids_from_content2 = _interopRequireDefault(_extract_ids_from_content);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

var _errors = __webpack_require__(1);

var _menu_marker = __webpack_require__(122);

var _menu_marker2 = _interopRequireDefault(_menu_marker);

var _option_marker = __webpack_require__(124);

var _option_marker2 = _interopRequireDefault(_option_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WIDGET_TAG_CONTEXT_KEY = '_scrivitoWidget';

var WidgetTag = function (_React$Component) {
  _inherits(WidgetTag, _React$Component);

  function WidgetTag(props) {
    _classCallCheck(this, WidgetTag);

    var _this = _possibleConstructorReturn(this, (WidgetTag.__proto__ || Object.getPrototypeOf(WidgetTag)).call(this, props));

    _this.state = {
      hasFocus: false,
      isDragged: false
    };

    _this._onMouseOver = _this._onMouseOver.bind(_this);
    _this._onMouseOut = _this._onMouseOut.bind(_this);

    _this._onWidgetFocus = _this._onWidgetFocus.bind(_this);
    _this._onWidgetBlur = _this._onWidgetBlur.bind(_this);

    _this._setDragState = _this._setDragState.bind(_this);
    return _this;
  }

  _createClass(WidgetTag, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._registerDropZone();

      this._focusToken = scrivito.WidgetFocus.subscribe({
        onFocus: this._onWidgetFocus,
        onBlur: this._onWidgetBlur
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this._widgetRef !== this._dropZoneWidgetRef) {
        this._registerDropZone();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      scrivito.WidgetFocus.unsubscribe(this._focusToken);
    }

    // Cleanup the context, so it is not visible to underlying application components.

  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return _defineProperty({}, WIDGET_TAG_CONTEXT_KEY, null);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var widget = this.context[WIDGET_TAG_CONTEXT_KEY];

      if (!widget) {
        throw new _errors.ScrivitoError('Detected inappropriate placing of Scrivito.WidgetTag: ' + 'It is intended to be used exclusively as top-level element inside a Widget component.');
      }

      if (!(0, _is_editing_mode2.default)()) {
        return _react2.default.createElement(this.props.tag, (0, _underscore.omit)(this.props, 'tag'));
      }

      return _react2.default.createElement(this.props.tag, (0, _underscore.extend)((0, _underscore.omit)(this.props, 'tag', 'className', 'style'), {
        ref: function ref(widgetDomElement) {
          return _this2._widgetRef = widgetDomElement;
        },

        className: this._className(),
        style: this._style(),

        onMouseOver: this._onMouseOver,
        onMouseOut: this._onMouseOut,

        children: [_react2.default.createElement(_menu_marker2.default, {
          key: 'menuMarker',
          widget: widget,
          setDragState: this._setDragState
        })].concat(_toConsumableArray(_react2.default.Children.toArray(this.props.children)), [this._renderOptionMarker('top'), this._renderOptionMarker('bottom')])
      }, this._dataProps()));
    }
  }, {
    key: '_setDragState',
    value: function _setDragState(isDragging) {
      this.setState({ isDragging: isDragging });
    }
  }, {
    key: '_className',
    value: function _className() {
      if (this.state.hasFocus) {
        if (this.props.className) {
          return this.props.className + ' scrivito_active scrivito_entered';
        }

        return 'scrivito_active scrivito_entered';
      }

      return this.props.className;
    }
  }, {
    key: '_dataProps',
    value: function _dataProps() {
      var dataProps = {
        'data-scrivito-private-widget': true,
        'data-scrivito-private-dropzone': true
      };

      if (this._isStructureMarker()) {
        dataProps['data-scrivito-private-structure-widget'] = true;
      }

      if (this.state.isDragging) {
        dataProps['data-scrivito-private-dropback'] = true;
      }

      return dataProps;
    }
  }, {
    key: '_style',
    value: function _style() {
      if (this.state.isDragging) {
        if (this.props.style) {
          return (0, _underscore.extend)(this.props.style, { opacity: 0.5 });
        }

        return { opacity: 0.5 };
      }

      return this.props.style;
    }
  }, {
    key: '_isStructureMarker',
    value: function _isStructureMarker() {
      var registry = (0, _window_registry.getWindowRegistry)();
      var appClass = registry.widgetClassFor(this.context[WIDGET_TAG_CONTEXT_KEY].objClass());
      var schema = _schema2.default.forClass(appClass);

      if (schema) {
        return (0, _underscore.some)(schema.attributes, function (_definition, name) {
          var _schema$attributeDefi = schema.attributeDefinition(name),
              _schema$attributeDefi2 = _slicedToArray(_schema$attributeDefi, 1),
              type = _schema$attributeDefi2[0];

          return type === 'widgetlist';
        });
      }

      return false;
    }
  }, {
    key: '_onMouseOver',
    value: function _onMouseOver(e) {
      e.stopPropagation();
      scrivito.WidgetFocus.notifyFocus(this._focusToken);
    }
  }, {
    key: '_onMouseOut',
    value: function _onMouseOut(e) {
      e.stopPropagation();
      scrivito.WidgetFocus.notifyBlur(this._focusToken);
    }
  }, {
    key: '_onWidgetFocus',
    value: function _onWidgetFocus() {
      this.setState({ hasFocus: true });
    }
  }, {
    key: '_onWidgetBlur',
    value: function _onWidgetBlur() {
      this.setState({ hasFocus: false });
    }
  }, {
    key: '_renderOptionMarker',
    value: function _renderOptionMarker(position) {
      return _react2.default.createElement(_option_marker2.default, {
        key: 'optionMarker-' + position,
        position: position,
        widget: this.context[WIDGET_TAG_CONTEXT_KEY],
        insertWidget: insertWidget,
        isAlwaysShown: scrivito.uiAdapter.alwaysShowOptionMarkers()
      });
    }
  }, {
    key: '_registerDropZone',
    value: function _registerDropZone() {
      if ((0, _is_editing_mode2.default)() && this._widgetRef) {
        var _extractIdsFromConten = (0, _extract_ids_from_content2.default)(this.context[WIDGET_TAG_CONTEXT_KEY]),
            objId = _extractIdsFromConten.objId,
            widgetId = _extractIdsFromConten.widgetId;

        var domNode = _reactDom2.default.findDOMNode(this._widgetRef);

        scrivito.uiAdapter.registerWidgetDropZoneInDom(domNode, objId, widgetId);
        this._dropZoneWidgetRef = this._widgetRef;
      }
    }
  }]);

  return WidgetTag;
}(_react2.default.Component);

WidgetTag.displayName = 'Scrivito.WidgetTag';

WidgetTag.defaultProps = {
  tag: 'div'
};

WidgetTag.contextTypes = _defineProperty({}, WIDGET_TAG_CONTEXT_KEY, _propTypes2.default.object);

WidgetTag.childContextTypes = _defineProperty({}, WIDGET_TAG_CONTEXT_KEY, _propTypes2.default.object);

function insertWidget(widget, position) {
  var _extractIdsFromConten2 = (0, _extract_ids_from_content2.default)(widget),
      objId = _extractIdsFromConten2.objId,
      widgetId = _extractIdsFromConten2.widgetId;

  scrivito.uiAdapter.insertWidget(objId, widgetId, position);
}

exports.WIDGET_TAG_CONTEXT_KEY = WIDGET_TAG_CONTEXT_KEY;
exports.default = (0, _connect2.default)(WidgetTag);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractIdsFromContent;

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extractIdsFromContent(basicContent) {
  if (basicContent instanceof _basic_obj2.default) {
    return { objId: basicContent.id() };
  }

  return { objId: basicContent.obj().id(), widgetId: basicContent.id() };
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.createObjFromLegacyAttributes = createObjFromLegacyAttributes;
exports.newWidget = newWidget;

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _input_types = __webpack_require__(44);

var _basic_widget = __webpack_require__(12);

var _basic_widget2 = _interopRequireDefault(_basic_widget);

var _uploaded_blob = __webpack_require__(83);

var _uploaded_blob2 = _interopRequireDefault(_uploaded_blob);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _errors = __webpack_require__(1);

var _binary = __webpack_require__(9);

var _binary2 = _interopRequireDefault(_binary);

var _future_binary = __webpack_require__(24);

var _future_binary2 = _interopRequireDefault(_future_binary);

var _obj_class = __webpack_require__(33);

var _obj_class2 = _interopRequireDefault(_obj_class);

var _widget_class = __webpack_require__(34);

var _widget_class2 = _interopRequireDefault(_widget_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createObjFromLegacyAttributes(attributes) {
  var objClassName = attributes._obj_class;
  var objClass = _obj_class2.default.find(objClassName);
  var objId = _basic_obj2.default.generateId();

  if (!objClass) {
    return scrivito.Promise.reject(new _errors.ArgumentError('Please provide a valid CMS object class as the "_obj_class" property.'));
  }

  var _separateAttributesFo = separateAttributesForDefault(attributes),
      _separateAttributesFo2 = _slicedToArray(_separateAttributesFo, 2),
      attributesForDefault = _separateAttributesFo2[0],
      binaryValues = _separateAttributesFo2[1];

  var fetchDefaultPromise = fetchDefaults(objClass, attributesForDefault);
  var uploadBinariesPromise = uploadBinaryValues(objId, binaryValues);

  return scrivito.Promise.all([fetchDefaultPromise, uploadBinariesPromise]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        serializedDefaultAttributes = _ref2[0],
        uploadedBinaryAttributes = _ref2[1];

    return _basic_obj2.default.createWithSerializedAttributes(_underscore2.default.extend(serializedDefaultAttributes, uploadedBinaryAttributes, { _id: objId }));
  }).then(function (createdObj) {
    return createdObj.finishSaving().then(function () {
      return createdObj;
    });
  });
}

function newWidget(className) {
  var widgetClass = _widget_class2.default.find(className);
  return widgetClass.fetchDefaults().then(function (widgetDefaults) {
    return _basic_widget2.default.newWithSerializedAttributes(widgetDefaults);
  });
}

function fetchDefaults(objClass, attributes) {
  if (objClass.usesServerCallbacks()) {
    return objClass.fetchDefaults(attributes);
  }

  return scrivito.Promise.resolve(attributes);
}

function separateAttributesForDefault(attributes) {
  var attributesForDefault = {};
  var ignoredAttributes = {};

  _underscore2.default.each(attributes, function (value, name) {
    if (isBinary(value)) {
      ignoredAttributes[name] = value;
    } else {
      attributesForDefault[name] = value;
    }
  });

  return [attributesForDefault, ignoredAttributes];
}

function isBinary(value) {
  return _input_types.FileType.is(value) || value instanceof _future_binary2.default || value instanceof _uploaded_blob2.default;
}

function uploadBinaryValues(objId, binaryValues) {
  var promises = _underscore2.default.map(binaryValues, function (value, name) {
    if (_input_types.FileType.is(value)) {
      return serializeFile(objId, name, value);
    }

    if (value instanceof _uploaded_blob2.default) {
      return serializeUploadedBlob(objId, name, value);
    }

    if (value instanceof _future_binary2.default) {
      return serializeFutureBinary(objId, name, value);
    }
  });

  return scrivito.Promise.all(promises).then(_underscore2.default.object);
}

function serializeFile(objId, attrName, file) {
  return serializeFutureBinary(objId, attrName, _binary2.default.upload(file));
}

function serializeUploadedBlob(objId, attrName, uploadedBlob) {
  return serializeFutureBinary(objId, attrName, uploadedBlob.copy());
}

function serializeFutureBinary(objId, attrName, futureBinary) {
  return futureBinary.intoId(objId).then(function (binary) {
    return [attrName, ['binary', { id: binary.id() }]];
  });
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileType = exports.BlobType = undefined;

var _tcomb = __webpack_require__(8);

var BlobType = exports.BlobType = _tcomb.tcomb.interface({
  size: _tcomb.tcomb.Number,
  type: _tcomb.tcomb.String
}, { name: 'Blob', strict: false });

var FileType = exports.FileType = BlobType.extend({
  name: _tcomb.tcomb.String
}, { name: 'File', strict: false });

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.serialize = serialize;

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _types = __webpack_require__(25);

var _basic_widget = __webpack_require__(12);

var _basic_widget2 = _interopRequireDefault(_basic_widget);

var _basic_link = __webpack_require__(15);

var _basic_link2 = _interopRequireDefault(_basic_link);

var _attribute = __webpack_require__(19);

var _attribute2 = _interopRequireDefault(_attribute);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _errors = __webpack_require__(1);

var _pretty_print = __webpack_require__(11);

var _pretty_print2 = _interopRequireDefault(_pretty_print);

var _attribute_inflection = __webpack_require__(16);

var _binary = __webpack_require__(9);

var _binary2 = _interopRequireDefault(_binary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function serialize(attributes) {
  var serializedAttributes = {};
  _underscore2.default.each(attributes, function (_ref, name) {
    var _ref2 = _slicedToArray(_ref, 2),
        value = _ref2[0],
        attrInfo = _ref2[1];

    var serializedName = convertCamelCasedAttributeName(name);
    if (_attribute2.default.isSystemAttribute(serializedName)) {
      serializedAttributes[serializedName] = value;
    } else {
      var _attrInfo = _slicedToArray(attrInfo, 2),
          attrType = _attrInfo[0],
          attrOptions = _attrInfo[1];

      serializedAttributes[serializedName] = [serializeAttributeType(attrType, name), valueOrNull(serializeAttributeValue(attrType, attrOptions, value, name))];
    }
  });

  return serializedAttributes;
}

function convertCamelCasedAttributeName(name) {
  if (!(0, _attribute_inflection.isCamelCase)(name)) {
    throw new _errors.ArgumentError('Attribute names have to be in camel case.');
  }

  return (0, _attribute_inflection.underscore)(name);
}

function serializeAttributeType(type, name) {
  switch (type) {
    case 'enum':
      return 'string';
    case 'float':
    case 'integer':
      return 'number';
    case 'multienum':
      return 'stringlist';
    case 'binary':
    case 'date':
    case 'html':
    case 'link':
    case 'linklist':
    case 'reference':
    case 'referencelist':
    case 'string':
    case 'stringlist':
    case 'widgetlist':
      return type;
    default:
      throw new _errors.ArgumentError('Attribute "' + name + '" is of unsupported type "' + type + '".');
  }
}

function serializeAttributeValue(type, options, value, name) {
  if (value === null) {
    return value;
  }

  switch (type) {
    case 'binary':
      return serializeBinaryAttributeValue(value, name);
    case 'date':
      return serializeDateAttributeValue(value, name);
    case 'enum':
      return serializeEnumAttributeValue(options, value, name);
    case 'float':
      return serializeFloatAttributeValue(value, name);
    case 'html':
      return serializeHtmlAttributeValue(value, name);
    case 'integer':
      return serializeIntegerAttributeValue(value, name);
    case 'link':
      return serializeLinkAttributeValue(value, name);
    case 'linklist':
      return serializeLinklistAttributeValue(value, name);
    case 'multienum':
      return serializeMultienumAttributeValue(options, value, name);
    case 'reference':
      return serializeReferenceAttributeValue(value, name);
    case 'referencelist':
      return serializeReferencelistAttributeValue(value, name);
    case 'string':
      return serializeStringAttributeValue(value, name);
    case 'stringlist':
      return serializeStringlistAttributeValue(value, name);
    case 'widgetlist':
      return serializeWidgetlistAttributeValue(value, name);
    default:
      throw new _errors.InternalError('serializeAttributeValue is not implemented for "' + type + '".');
  }
}

function valueOrNull(value) {
  if ((_underscore2.default.isString(value) || _underscore2.default.isArray(value)) && _underscore2.default.isEmpty(value)) {
    return null;
  }
  return value;
}

function throwInvalidAttributeValue(value, name, expected) {
  throw new _errors.ArgumentError('Unexpected value ' + (0, _pretty_print2.default)(value) + ' for' + (' attribute "' + name + '". Expected: ' + expected));
}

function serializeBinaryAttributeValue(value, name) {
  if (value instanceof _binary2.default) {
    return { id: value.id() };
  }
  throwInvalidAttributeValue(value, name, 'A Binary.');
}

function serializeDateAttributeValue(value, name) {
  if (_underscore2.default.isDate(value)) {
    return (0, _types.formatDateToString)(value);
  }
  if ((0, _types.isValidDateString)(value)) {
    return value;
  }
  throwInvalidAttributeValue(value, name, 'A Date.');
}

function serializeEnumAttributeValue(_ref3, value, name) {
  var values = _ref3.values;

  if (_underscore2.default.contains(values, value)) {
    return value;
  }

  var e = 'Valid attribute values are contained in its "values" array [' + values + '].';
  throwInvalidAttributeValue(value, name, e);
}

function serializeFloatAttributeValue(value, name) {
  if ((0, _types.isValidFloat)(value)) {
    return value;
  }

  var invalidValue = value;
  if (_underscore2.default.isNumber(value)) {
    invalidValue = String(value);
  }
  throwInvalidAttributeValue(invalidValue, name, 'A Number, that is #isFinite().');
}

function serializeHtmlAttributeValue(value, name) {
  if (_underscore2.default.isString(value)) {
    return value;
  }
  throwInvalidAttributeValue(value, name, 'A String.');
}

function serializeIntegerAttributeValue(value, name) {
  if ((0, _types.isValidInteger)(value)) {
    return value;
  }
  throwInvalidAttributeValue(value, name, 'A Number, that is #isSafeInteger().');
}

function serializeLinkAttributeValue(value, name) {
  if (validLinkObject(value)) {
    return convertLinkToCmsApi(value);
  }
  throwInvalidAttributeValue(value, name, 'A Link instance.');
}

function serializeLinklistAttributeValue(value, name) {
  if (_underscore2.default.isArray(value) && _underscore2.default.every(value, validLinkObject)) {
    return _underscore2.default.map(value, convertLinkToCmsApi);
  }
  throwInvalidAttributeValue(value, name, 'An array of Link instances.');
}

function validLinkObject(value) {
  if (value instanceof _basic_link2.default) {
    return true;
  }

  // check if value is backend compatible
  if (!_underscore2.default.isObject(value)) {
    return false;
  }
  var invalidKeys = _underscore2.default.without(_underscore2.default.keys(value), 'hash', 'obj_id', 'query', 'target', 'title', 'url');
  return _underscore2.default.isEmpty(invalidKeys);
}

function convertLinkToCmsApi(value) {
  var backendLink = {
    fragment: typeof value.hash === 'function' ? value.hash() : value.hash,
    query: typeof value.query === 'function' ? value.query() : value.query,
    target: typeof value.target === 'function' ? value.target() : value.target,
    title: typeof value.title === 'function' ? value.title() : value.title,
    url: typeof value.url === 'function' ? value.url() : value.url
  };
  backendLink.obj_id = typeof value.objId === 'function' ? value.objId() : value.obj_id;

  return _underscore2.default.mapObject(backendLink, function (v) {
    return v || null;
  });
}

function serializeMultienumAttributeValue(_ref4, value, name) {
  var values = _ref4.values;

  var errorMessage = 'An array with values from ' + (0, _pretty_print2.default)(values) + '.';

  if (!_underscore2.default.isArray(value) || !_underscore2.default.every(value, _underscore2.default.isString)) {
    throwInvalidAttributeValue(value, name, errorMessage);
  }

  var forbiddenValues = _underscore2.default.difference(value, values);
  if (forbiddenValues.length) {
    var e = errorMessage + ' Forbidden values: ' + (0, _pretty_print2.default)(forbiddenValues) + '.';
    throwInvalidAttributeValue(value, name, e);
  }
  return value;
}

function serializeReferenceAttributeValue(value, name) {
  if (isValidReference(value)) {
    return serializeSingleReferenceValue(value);
  }
  throwInvalidAttributeValue(value, name, 'A BasicObj or a String ID.');
}

function serializeReferencelistAttributeValue(value, name) {
  if (isValidReferencelistValue(value)) {
    return _underscore2.default.map(value, serializeSingleReferenceValue);
  }
  throwInvalidAttributeValue(value, name, 'An array with BasicObjs or String IDs.');
}

function serializeSingleReferenceValue(value) {
  if (value instanceof _basic_obj2.default) {
    return value.id();
  }
  return value;
}

function isValidReference(value) {
  return _underscore2.default.isString(value) || value instanceof _basic_obj2.default;
}

function isValidReferencelistValue(value) {
  return _underscore2.default.isArray(value) && _underscore2.default.every(value, function (v) {
    return isValidReference(v);
  });
}

function serializeStringAttributeValue(value, name) {
  if (isValidString(value)) {
    return value.toString();
  }
  throwInvalidAttributeValue(value, name, 'A String.');
}

function serializeStringlistAttributeValue(value, name) {
  if (_underscore2.default.isArray(value) && _underscore2.default.every(value, function (v) {
    return isValidString(v);
  })) {
    return _underscore2.default.invoke(value, 'toString');
  }
  throwInvalidAttributeValue(value, name, 'An array of strings.');
}

function isValidString(value) {
  return _underscore2.default.isString(value) || _underscore2.default.isNumber(value);
}

function serializeWidgetlistAttributeValue(value, name) {
  if (_underscore2.default.isArray(value) && _underscore2.default.every(value, function (v) {
    return v instanceof _basic_widget2.default;
  })) {
    return _underscore2.default.invoke(value, 'id');
  }
  throwInvalidAttributeValue(value, name, 'An array of BasicWidget instances.');
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attribute_deserializer = __webpack_require__(80);

var AttributeDeserializer = _interopRequireWildcard(_attribute_deserializer);

var _basic_field = __webpack_require__(81);

var _basic_field2 = _interopRequireDefault(_basic_field);

var _attribute = __webpack_require__(19);

var _attribute2 = _interopRequireDefault(_attribute);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _errors = __webpack_require__(1);

var _attribute_inflection = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasicAttributeContent = function () {
  function BasicAttributeContent() {
    _classCallCheck(this, BasicAttributeContent);
  }

  _createClass(BasicAttributeContent, [{
    key: 'get',
    value: function get(attributeName, typeInfo) {
      if (!(0, _attribute_inflection.isCamelCase)(attributeName)) {
        throw new _errors.ArgumentError('Attribute names have to be in camel case.');
      }
      var internalAttributeName = (0, _attribute_inflection.underscore)(attributeName);

      if (_attribute2.default.isSystemAttribute(internalAttributeName)) {
        if (_underscore2.default.has(this._systemAttributes, internalAttributeName)) {
          var attribute = this._systemAttributes[internalAttributeName];
          return typeof this[attribute] === 'function' ? this[attribute]() : this[attribute];
        }

        return;
      }

      var _scrivito$typeInfo$no = scrivito.typeInfo.normalize(typeInfo),
          _scrivito$typeInfo$no2 = _slicedToArray(_scrivito$typeInfo$no, 2),
          type = _scrivito$typeInfo$no2[0],
          options = _scrivito$typeInfo$no2[1];

      var rawValue = this._current[internalAttributeName];
      if (!rawValue || !_underscore2.default.isArray(rawValue)) {
        rawValue = [];
      }

      return AttributeDeserializer.deserialize(this, rawValue, type, options);
    }
  }, {
    key: 'field',
    value: function field(attributeName, typeInfo) {
      return new _basic_field2.default({
        container: this,
        attributeName: attributeName,
        typeInfo: scrivito.typeInfo.normalize(typeInfo)
      });
    }
  }, {
    key: 'widget',
    value: function widget(_id) {
      throw new TypeError('Override in subclass.');
    }
  }, {
    key: 'serializeAttributes',
    value: function serializeAttributes() {
      var _this = this;

      var serializedAttrs = {};
      _underscore2.default.each(this._current, function (value, name) {
        if (_underscore2.default.isArray(value) && _underscore2.default.first(value) === 'widgetlist') {
          var publicAttrName = (0, _attribute_inflection.camelCase)(name);
          var serializedAttributes = _underscore2.default.invoke(_this.get(publicAttrName, ['widgetlist']), 'serializeAttributes');
          serializedAttrs[name] = ['widgetlist', serializedAttributes];

          return;
        }

        serializedAttrs[name] = value;
      });

      return serializedAttrs;
    }
  }, {
    key: '_persistWidgets',
    value: function _persistWidgets(obj, attributes) {
      _underscore2.default.each(attributes, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            widgets = _ref2[0],
            typeInfo = _ref2[1];

        if (typeInfo && typeInfo[0] === 'widgetlist') {
          _underscore2.default.each(widgets, function (widget) {
            if (!widget.isPersisted()) {
              widget.persistInObj(obj);
            }
          });
        }
      });
    }
  }, {
    key: '_objClass',
    get: function get() {
      throw new TypeError('Override in subclass.');
    }
  }, {
    key: '_current',
    get: function get() {
      throw new TypeError('Override in subclass.');
    }
  }]);

  return BasicAttributeContent;
}();

exports.default = BasicAttributeContent;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attribute = __webpack_require__(19);

var _attribute2 = _interopRequireDefault(_attribute);

var _underscore = __webpack_require__(0);

var _errors = __webpack_require__(1);

var _content_class_registry = __webpack_require__(48);

var _content_class_registry2 = _interopRequireDefault(_content_class_registry);

var _pretty_print = __webpack_require__(11);

var _pretty_print2 = _interopRequireDefault(_pretty_print);

var _rails_thumbnail = __webpack_require__(85);

var _use_rails_engine = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AttributeContentClass = function () {
  _createClass(AttributeContentClass, null, [{
    key: 'init',
    value: function init(classDatas) {
      var _this = this;

      var contentClasses = classDatas.map(function (classData) {
        return new _this(classData);
      });
      _content_class_registry2.default.register(this.type(), contentClasses);
    }
  }, {
    key: 'find',
    value: function find(name) {
      return _content_class_registry2.default.findByType(this.type(), name);
    }
  }, {
    key: 'get',
    value: function get(name) {
      var modelClass = this.find(name);

      if (modelClass) {
        return modelClass;
      }

      throw new _errors.InternalError('Model class "' + name + '" does not exist.');
    }
  }, {
    key: 'all',
    value: function all() {
      return _content_class_registry2.default.allForType(this.type());
    }
  }]);

  function AttributeContentClass(classData) {
    _classCallCheck(this, AttributeContentClass);

    this.name = classData.name;
    this._classData = classData;

    this.attributes = (0, _underscore.map)(classData.attributes, function (attributeData) {
      return new _attribute2.default(attributeData);
    });
  }

  // public


  _createClass(AttributeContentClass, [{
    key: 'title',
    value: function title() {
      return this._classData.title;
    }
  }, {
    key: 'description',
    value: function description() {
      return this._classData.description;
    }
  }, {
    key: 'thumbnail',
    value: function thumbnail() {
      return this._classData.thumbnail;
    }
  }, {
    key: 'hasDetailsView',
    value: function hasDetailsView() {
      return this.useRailsDetailsTemplate() && !!this._classData.hasServerDetailsTemplate;
    }
  }, {
    key: 'attribute',
    value: function attribute(name) {
      assertValidAttribute(name);

      return (0, _underscore.findWhere)(this.attributes, { name: name });
    }
  }, {
    key: 'localizedAttributes',
    value: function localizedAttributes() {
      return (0, _underscore.filter)(this.attributes, function (attribute) {
        return !!attribute.title();
      });
    }
  }, {
    key: 'useRailsDetailsTemplate',
    value: function useRailsDetailsTemplate() {
      return this.usesServerCallbacks();
    }
  }, {
    key: 'useRailsThumbnailHtml',
    value: function useRailsThumbnailHtml() {
      return !this._classData.description && !this._classData.thumbnail && !!this._classData.usesServerCallbacks;
    }
  }, {
    key: 'railsThumbnailHtml',
    value: function railsThumbnailHtml() {
      return (0, _rails_thumbnail.getRailsThumbnail)(this.name);
    }
  }, {
    key: 'usesServerCallbacks',
    value: function usesServerCallbacks() {
      return !!this._classData.usesServerCallbacks;
    }
  }, {
    key: 'isHiddenInSelectionDialogs',
    value: function isHiddenInSelectionDialogs() {
      if ((0, _use_rails_engine.useRailsEngine)()) {
        return !!this._classData.hideFromEditor;
      }

      return !!scrivito.AppConfig.hideInSelectionDialogsForClass(this.name);
    }
  }, {
    key: 'fetchDefaults',
    value: function fetchDefaults(attributes) {
      var path = 'obj_class/' + this.name + '/defaults';
      var query = '';

      var params = {};
      if (attributes) {
        params.attributes = serializeAttributesForApplication(attributes);
      }
      if (scrivito.applicationDocument().hasCurrentPage()) {
        params.context = { current_page_id: scrivito.applicationDocument().pageId() };
      }
      if (!(0, _underscore.isEmpty)(params)) {
        query = '?' + $.param(params);
      }

      return scrivito.Promise.resolve(scrivito.ajax('GET', '' + path + query));
    }
  }]);

  return AttributeContentClass;
}();

function assertValidAttribute(name) {
  if (!(0, _underscore.isString)(name)) {
    throw new _errors.ArgumentError('Expected a string for attribute name, but got ' + (0, _pretty_print2.default)(name));
  }

  if (!name) {
    throw new _errors.ArgumentError('An empty string is not a valid attribute name');
  }
}

function serializeAttributesForApplication(attributes) {
  return (0, _underscore.mapObject)(attributes, function (value) {
    if ((0, _underscore.isDate)(value)) {
      return moment.utc(value).toISOString();
    }

    return value;
  });
}

exports.default = AttributeContentClass;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentClasses = {};

var ContentClassRegistry = {
  register: function register(type, objClasses) {
    contentClasses[type] = objClasses;
  },
  allForType: function allForType(type) {
    return contentClasses[type];
  },
  findByType: function findByType(type, name) {
    return _underscore2.default.findWhere(this.allForType(type), { name: name });
  }
};

exports.default = ContentClassRegistry;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isUsingRailsEngine = void 0;

function useRailsEngine() {
  return !!isUsingRailsEngine;
}

function initUseRailsEngine(state) {
  isUsingRailsEngine = state;
}

exports.useRailsEngine = useRailsEngine;
exports.initUseRailsEngine = initUseRailsEngine;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.apply = apply;
exports.diff = diff;

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function apply(primitiveObj, patch) {
  if (!primitiveObj) {
    return patch;
  }
  if (!patch) {
    return null;
  }

  var updatedPrimitiveObj = {};

  eachKeyFrom(primitiveObj, patch, function (attribute, objValue, patchValue) {
    if (attribute === '_widget_pool') {
      updatedPrimitiveObj._widget_pool = buildUpdatedWidgetPool(objValue, patchValue);
    } else if (patch.hasOwnProperty(attribute)) {
      if (patchValue) {
        updatedPrimitiveObj[attribute] = patchValue;
      }
    } else {
      updatedPrimitiveObj[attribute] = primitiveObj[attribute];
    }
  });

  return updatedPrimitiveObj;
}

function diff(primitiveObjA, primitiveObjB) {
  if (!primitiveObjA) {
    return primitiveObjB;
  }
  if (!primitiveObjB) {
    return null;
  }

  var patch = {};

  eachKeyFrom(primitiveObjA, primitiveObjB, function (attribute, valueInA, valueInB) {
    if (attribute === '_widget_pool') {
      var widgetPoolPatch = buildWidgetPoolPatch(valueInA, valueInB);

      if (!_underscore2.default.isEmpty(widgetPoolPatch)) {
        patch._widget_pool = widgetPoolPatch;
      }
    } else {
      var patchValue = buildPatchEntry(valueInA, valueInB, function () {
        if (!_underscore2.default.isEqual(valueInA, valueInB)) {
          return valueInB;
        }
      });

      if (patchValue !== undefined) {
        patch[attribute] = patchValue;
      }
    }
  });

  return patch;
}

function eachKeyFrom(objectA, objectB, handler) {
  _underscore2.default.union(_underscore2.default.keys(objectA), _underscore2.default.keys(objectB)).forEach(function (key) {
    return handler(key, workspaceAwareObject(objectA[key]), workspaceAwareObject(objectB[key]));
  });
}

function workspaceAwareObject(object) {
  if (_underscore2.default.isArray(object)) {
    var _object = _slicedToArray(object, 2),
        type = _object[0],
        value = _object[1];

    // Ignore binary URLs, since they are different across workspaces.
    // However, a binary ID identifies a binary unambiguously.


    if (type === 'binary' && value) {
      return [type, _underscore2.default.omit(value, 'url')];
    }

    return object;
  }

  return object;
}

function buildUpdatedWidgetPool(widgetPool, widgetPoolPatch) {
  if (!widgetPoolPatch || _underscore2.default.isEmpty(widgetPoolPatch)) {
    return widgetPool;
  }

  var updatedWidgetPool = {};

  eachKeyFrom(widgetPool || {}, widgetPoolPatch || {}, function (id, widget, widgetPatch) {
    if (widgetPoolPatch.hasOwnProperty(id)) {
      if (widgetPatch && !widget) {
        updatedWidgetPool[id] = widgetPatch;
      } else if (widgetPatch) {
        updatedWidgetPool[id] = apply(widget, widgetPatch);
      }
    } else {
      updatedWidgetPool[id] = widget;
    }
  });

  return updatedWidgetPool;
}

function buildPatchEntry(valueA, valueB, fnHandleBoth) {
  if (!valueA && valueB) {
    return valueB;
  }

  if (valueA && !valueB) {
    return null;
  }

  if (valueA && valueB) {
    return fnHandleBoth();
  }
}

function buildWidgetPoolPatch(widgetPoolA, widgetPoolB) {
  if (widgetPoolA === widgetPoolB) {
    return {};
  }

  var patch = {};

  eachKeyFrom(widgetPoolA, widgetPoolB, function (widgetId, widgetA, widgetB) {
    var widgetValue = buildPatchEntry(widgetA, widgetB, function () {
      var widgetPatch = diff(widgetA, widgetB);

      if (!_underscore2.default.isEmpty(widgetPatch)) {
        return widgetPatch;
      }
    });

    if (widgetValue !== undefined) {
      patch[widgetId] = widgetValue;
    }
  });

  return patch;
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = store;
exports.computeCacheKey = computeCacheKey;
exports.get = get;
exports.stateContainer = stateContainer;
exports.clearCache = clearCache;

var _obj_id_query = __webpack_require__(52);

var _obj_id_query2 = _interopRequireDefault(_obj_id_query);

var _obj_data_query = __webpack_require__(94);

var _obj_data_query2 = _interopRequireDefault(_obj_data_query);

var _global_state = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function store(params, objIds) {
  _obj_id_query2.default.store(params, objIds);
}

function computeCacheKey(obj) {
  return scrivito.computeCacheKey(obj);
}

function get(params, batchSize) {
  return new _obj_data_query2.default(params, batchSize);
}

function stateContainer() {
  return _global_state.cmsState.subState('objQuery');
}

function clearCache() {
  stateContainer().clear();
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _obj_id_query_batch = __webpack_require__(92);

var _obj_id_query_batch2 = _interopRequireDefault(_obj_id_query_batch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjIdQuery = function () {
  _createClass(ObjIdQuery, null, [{
    key: 'store',
    value: function store(params, objIds) {
      _obj_id_query_batch2.default.store(params, objIds);
    }
  }, {
    key: 'count',
    value: function count(params) {
      return _obj_id_query_batch2.default.countFor(params);
    }
  }]);

  function ObjIdQuery(params, batchSize) {
    _classCallCheck(this, ObjIdQuery);

    this._params = params;
    this._batchSize = batchSize;
  }

  _createClass(ObjIdQuery, [{
    key: 'iterator',
    value: function iterator() {
      var priorObjIds = {};

      var currentBatch = _obj_id_query_batch2.default.firstBatchFor(this._params, this._batchSize);
      var currentIndex = 0;

      function next() {
        if (!currentBatch) {
          return { done: true };
        }

        var currentObjIds = currentBatch.objIds();

        if (currentIndex < currentObjIds.length) {
          var objId = currentObjIds[currentIndex];
          currentIndex++;

          if (priorObjIds[objId]) {
            return next();
          }

          priorObjIds[objId] = true;

          return {
            value: objId,
            done: false
          };
        }

        currentBatch = currentBatch.nextBatch();
        currentIndex = 0;

        return next();
      }

      return { next: next };
    }
  }]);

  return ObjIdQuery;
}();

exports.default = ObjIdQuery;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function arrayFromIterable(iterable, size) {
    var iterator = iterable.iterator();
    var result = [];
    while (result.length !== size) {
        var next = iterator.next();
        if (next.done) {
            return result;
        }
        result.push(next.value);
    }
    return result;
}
exports.arrayFromIterable = arrayFromIterable;
function firstValueFromIterable(iterable) {
    var value = iterable.iterator().next().value;
    return value || null;
}
exports.firstValueFromIterable = firstValueFromIterable;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provideAsyncMethods = provideAsyncMethods;
exports.provideAsyncInstanceMethods = provideAsyncInstanceMethods;
exports.asyncMethodStub = asyncMethodStub;

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _errors = __webpack_require__(1);

var _load = __webpack_require__(21);

var _load2 = _interopRequireDefault(_load);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function provideAsyncMethods(klass, methods) {
  _underscore2.default.each(methods, function (asyncName, syncName) {
    klass[asyncName] = asyncMethodFor(syncName);
  });
}

function provideAsyncInstanceMethods(klass, methods) {
  return provideAsyncMethods(klass.prototype, methods);
}

function asyncMethodFor(syncName) {
  return function asyncMethod() {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return scrivito.PublicPromise.resolve((0, _load2.default)(function () {
      return _this[syncName].apply(_this, args);
    }));
  };
}

function asyncMethodStub() {
  throw new _errors.InternalError('this method is supposed to be overwritten by calling provideAsyncMethods');
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _types = __webpack_require__(25);

var _underscore = __webpack_require__(0);

var _loadable_data = __webpack_require__(7);

var _loadable_data2 = _interopRequireDefault(_loadable_data);

var _global_state = __webpack_require__(5);

var _attribute_inflection = __webpack_require__(16);

var _errors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// public API
var MetadataCollection = function () {
  function MetadataCollection(binaryId) {
    var _this = this;

    _classCallCheck(this, MetadataCollection);

    this._binaryId = binaryId;

    if (binaryId) {
      this._loadableData = new _loadable_data2.default({
        state: modelState(binaryId),
        loader: function loader() {
          return _this._loadData();
        }
      });
    }
  }

  _createClass(MetadataCollection, [{
    key: 'get',


    // public API
    value: function get(key) {
      assertCamelCase(key);

      var data = this._getData();

      if (data) {
        return data[(0, _attribute_inflection.underscore)(key)];
      }
    }
  }, {
    key: 'keys',
    value: function keys() {
      var data = this._getData();

      if (data) {
        return (0, _underscore.map)((0, _underscore.keys)(data), _attribute_inflection.camelCase);
      }

      return [];
    }

    // For test purpose only.

  }, {
    key: '_getData',
    value: function _getData() {
      if (this._binaryId) {
        return this._loadableData.get();
      }
    }
  }, {
    key: '_loadData',
    value: function _loadData() {
      var path = 'blobs/' + encodeURIComponent(this._binaryId) + '/meta_data';
      return scrivito.CmsRestApi.get(path).then(deserializeMetadata);
    }
  }, {
    key: 'binaryId',
    get: function get() {
      return this._binaryId;
    }
  }], [{
    key: 'store',
    value: function store(binaryId, cmsRestApiResponse) {
      var loadableData = new _loadable_data2.default({ state: modelState(binaryId) });
      loadableData.set(deserializeMetadata(cmsRestApiResponse));
    }
  }]);

  return MetadataCollection;
}();

function modelState(binaryId) {
  return _global_state.cmsState.subState('metadataCollection').subState(binaryId);
}

function deserializeMetadata(rawMetadata) {
  return (0, _underscore.mapObject)(rawMetadata.meta_data, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        type = _ref2[0],
        value = _ref2[1];

    switch (type) {
      case 'date':
        return (0, _types.deserializeAsDate)(value);
      case 'number':
        return (0, _types.deserializeAsInteger)(value);
      default:
        return value;
    }
  });
}

function assertCamelCase(key) {
  if (!(0, _attribute_inflection.isCamelCase)(key)) {
    throw new _errors.ArgumentError('Metadata key "' + key + '" is not in camel case.');
  }
}

exports.default = MetadataCollection;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wrap_in_app_class = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjFacetValue = function () {
  function ObjFacetValue(registry, basicObjFacetValue) {
    _classCallCheck(this, ObjFacetValue);

    this._registry = registry;
    this._basicObjFacetValue = basicObjFacetValue;
  }

  // public API


  _createClass(ObjFacetValue, [{
    key: 'name',
    value: function name() {
      return this._basicObjFacetValue.name();
    }

    // public API

  }, {
    key: 'count',
    value: function count() {
      return this._basicObjFacetValue.count();
    }

    // public API

  }, {
    key: 'includedObjs',
    value: function includedObjs() {
      var response = this._basicObjFacetValue.includedObjs();
      return (0, _wrap_in_app_class.wrapInAppClass)(this._registry, response);
    }
  }]);

  return ObjFacetValue;
}();

exports.default = ObjFacetValue;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetIsConfigured = exports.isConfigured = exports.configure = undefined;

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _tcomb = __webpack_require__(8);

var _type_checker = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _isConfigured = false;

var ConfigurationType = _tcomb.tcomb.struct({
  tenant: _tcomb.tcomb.String,
  endpoint: _tcomb.tcomb.maybe(_tcomb.tcomb.String),
  homepage: _tcomb.tcomb.maybe(_tcomb.tcomb.Function),
  routingBasePath: _tcomb.tcomb.maybe(_tcomb.tcomb.String)
});

var checkConfigure = (0, _type_checker.checkArgumentsFor)('configure', [['options', ConfigurationType]], {
  docPermalink: 'js-sdk/configure'
});

function configure(options) {
  checkConfigure(options);
  var endpoint = options.endpoint,
      homepage = options.homepage,
      routingBasePath = options.routingBasePath,
      tenant = options.tenant;


  scrivito.CmsRestApi.init(endpoint || 'api.scrivito.com', tenant);
  scrivito.RoutingPath.init(homepage || function () {
    return _basic_obj2.default.root();
  });
  scrivito.Routing.init({ routingBasePath: routingBasePath });
  _isConfigured = true;
}

function isConfigured() {
  return _isConfigured;
}

// for test purpose only
function resetIsConfigured() {
  _isConfigured = false;
}

exports.configure = configure;
exports.isConfigured = isConfigured;
exports.resetIsConfigured = resetIsConfigured;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = AttributeContentFactory;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AttributeContentFactory(appModelAccessor) {
  var AttributeContent = function () {
    function AttributeContent() {
      _classCallCheck(this, AttributeContent);
    }

    _createClass(AttributeContent, [{
      key: "id",

      // public API
      value: function id() {
        return this._scrivitoPrivateContent.id();
      }

      // public API

    }, {
      key: "objClass",
      value: function objClass() {
        return this._scrivitoPrivateContent.objClass();
      }

      /**
        * Resolves when all previous updates have been persisted.
        * If an update fails the promise is rejected.
        *
        * @returns {Promise}
        */

    }, {
      key: "finishSaving",
      value: function finishSaving() {
        return this._scrivitoPrivateContent.finishSaving();
      }

      // public API

    }, {
      key: "get",
      value: function get(attributeName) {
        return appModelAccessor.read(this, attributeName);
      }

      // public API

    }, {
      key: "update",
      value: function update(attributes) {
        appModelAccessor.update(this, attributes);
      }
    }]);

    return AttributeContent;
  }();

  return AttributeContent;
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initialAttributesFor;
function initialAttributesFor(providedAttributes, registry, schema, appClassName) {
  var initialAttributes = {};

  Object.keys(schema.definition.attributes).forEach(function (attributeName) {
    if (!providedAttributes.hasOwnProperty(attributeName)) {
      var initialValue = registry.initialContentFor(appClassName, attributeName);

      if (initialValue !== undefined) {
        initialAttributes[attributeName] = initialValue;
      }
    }
  });

  return initialAttributes;
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __webpack_require__(0);
var basic_obj_es6_1 = __webpack_require__(2);
var basic_widget_1 = __webpack_require__(12);
var provide_editing_config_1 = __webpack_require__(38);
var window_context_es6_1 = __webpack_require__(13);
var wrap_in_app_class_es6_1 = __webpack_require__(6);
var window_registry_es6_1 = __webpack_require__(31);
function initialContentFor(className, attributeName) {
    var initialContent = provide_editing_config_1.getEditingConfigFor(className, 'initialContent');
    if (initialContent) {
        var attributeContent = initialContent[attributeName];
        if (underscore_1.isFunction(attributeContent)) {
            return attributeContent();
        }
        if (isWidgetlist(attributeContent)) {
            var registry_1 = window_registry_es6_1.getWindowRegistry();
            return attributeContent.map(function (widget) {
                var basicWidget = widget._scrivitoPrivateContent;
                var copy = basicWidget.copy();
                return wrap_in_app_class_es6_1.wrapInAppClass(registry_1, copy);
            });
        }
        return attributeContent;
    }
}
exports.initialContentFor = initialContentFor;
function isWidgetlist(maybeWidgetlist) {
    return underscore_1.isArray(maybeWidgetlist) && underscore_1.every(maybeWidgetlist, isWidget);
}
function isWidget(maybeWidget) {
    return maybeWidget._scrivitoPrivateContent &&
        maybeWidget._scrivitoPrivateContent instanceof basic_widget_1.default;
}
function initializeContentForObj(objId) {
    var basicObj = basic_obj_es6_1.default.get(objId);
    initializeContentFor(basicObj);
}
exports.initializeContentForObj = initializeContentForObj;
function initializeContentForWidget(objId, widgetId) {
    var basicObj = basic_obj_es6_1.default.get(objId);
    var basicWidget = basicObj.widget(widgetId);
    initializeContentFor(basicWidget);
}
exports.initializeContentForWidget = initializeContentForWidget;
function initializeContentFor(basicContent) {
    var objClassName = basicContent.objClass();
    var schema = window_context_es6_1.getWindowContext().getClass(objClassName)._scrivitoPrivateSchema;
    var initialAttributes = {};
    underscore_1.each(schema.definition.attributes, function (typeInfo, attributeName) {
        var currentValue = basicContent.get(attributeName, typeInfo);
        if (underscore_1.isEmpty(currentValue)) {
            var initialValue = initialContentFor(objClassName, attributeName);
            if (initialValue) {
                initialAttributes[attributeName] = initialValue;
            }
        }
    });
    var attributesWithTypeInfo = wrap_in_app_class_es6_1.unwrapAppAttributes(initialAttributes, schema, objClassName);
    basicContent.update(attributesWithTypeInfo);
}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = exports.isComponentMounted = exports.mountComponent = undefined;

var _errors = __webpack_require__(1);

var _component_registry = __webpack_require__(27);

var _window_context = __webpack_require__(13);

var _window_proxy = __webpack_require__(22);

var _on_element_resize = __webpack_require__(108);

var _on_element_resize2 = _interopRequireDefault(_on_element_resize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _isComponentMounted = false;

function mountComponent(componentId, props) {
  if (_isComponentMounted) {
    return;
  }

  var component = (0, _component_registry.getComponentForId)(componentId);

  if (!component) {
    throw new _errors.ArgumentError('Component with ID "' + componentId + '" not found. ' + 'Please make sure you registered it using "Scrivito.registerComponent".');
  }

  var obj = void 0;
  var widget = void 0;

  if (props.widgetId) {
    widget = (0, _window_context.getWindowContext)().Obj.get(props.objId).widget(props.widgetId);
  } else {
    obj = (0, _window_context.getWindowContext)().Obj.get(props.objId);
  }

  _isComponentMounted = true;

  var element = appendComponentToDOM((0, _window_proxy.getDocument)(), component, { obj: obj, widget: widget });

  (0, _on_element_resize2.default)(element, function () {
    return scrivito.uiAdapter.notifyDocumentResize();
  });
  scrivito.uiAdapter.notifyDocumentResize();
}

function isComponentMounted() {
  return _isComponentMounted;
}

function reset() {
  _isComponentMounted = false;
}

function appendComponentToDOM(doc, component, props) {
  var element = doc.createElement('div');

  doc.body.innerHTML = '';
  doc.body.appendChild(element);

  ReactDOM.render(React.createElement(component, props), element);

  return element;
}

exports.mountComponent = mountComponent;
exports.isComponentMounted = isComponentMounted;
exports.reset = reset;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlFor = urlFor;

var _wrap_in_app_class = __webpack_require__(6);

var _basic_url_for = __webpack_require__(39);

var _tcomb = __webpack_require__(8);

var _type_checker = __webpack_require__(14);

var _model_types = __webpack_require__(18);

// public API
function urlFor(target, options) {
  checkUrlFor(target, options);

  var _ref = options || {},
      query = _ref.query,
      fragment = _ref.fragment;

  var basicTarget = (0, _wrap_in_app_class.unwrapAppClassValue)(target);

  var queryString = query ? '?' + query : '';
  var fragmentString = fragment ? '#' + fragment : '';

  return (0, _basic_url_for.basicUrlFor)(basicTarget).concat(queryString).concat(fragmentString);
}

var TargetType = _tcomb.tcomb.union([_model_types.ObjType, _model_types.LinkType, _model_types.BinaryType]);

var OptionsType = _tcomb.tcomb.struct({
  query: _tcomb.tcomb.maybe(_tcomb.tcomb.String),
  fragment: _tcomb.tcomb.maybe(_tcomb.tcomb.String)
});

var checkUrlFor = (0, _type_checker.checkArgumentsFor)('urlFor', [['target', TargetType], ['options', _tcomb.tcomb.maybe(OptionsType)]], {
  docPermalink: 'js-sdk/urlFor'
});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var window_proxy_es6_1 = __webpack_require__(22);
function scaleDownBinary(binary) {
    if (binary.isRaw() || binary.isExplicitlyTransformed()) {
        return binary;
    }
    // The binary service never scales up, so we transform all images, regardless of their width.
    return binary.optimizeFor({ width: window_proxy_es6_1.screen().width * window_proxy_es6_1.devicePixelRatio() });
}
exports.default = scaleDownBinary;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function displayNameFrom(component) {
  return component.displayName || component.name;
}

exports.default = displayNameFrom;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _underscore = __webpack_require__(0);

var _wrap_in_app_class = __webpack_require__(6);

var _basic_link = __webpack_require__(15);

var _basic_link2 = _interopRequireDefault(_basic_link);

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _binary = __webpack_require__(9);

var _binary2 = _interopRequireDefault(_binary);

var _navigate_to = __webpack_require__(32);

var _navigate_to2 = _interopRequireDefault(_navigate_to);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

var _is_modifier_click = __webpack_require__(66);

var _is_modifier_click2 = _interopRequireDefault(_is_modifier_click);

var _basic_url_for = __webpack_require__(39);

var _tcomb = __webpack_require__(116);

var _model_types = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// public API
var LinkTag = function (_React$Component) {
  _inherits(LinkTag, _React$Component);

  function LinkTag(props) {
    _classCallCheck(this, LinkTag);

    var _this = _possibleConstructorReturn(this, (LinkTag.__proto__ || Object.getPrototypeOf(LinkTag)).call(this, props));

    _this._onClick = _this._onClick.bind(_this);
    return _this;
  }

  _createClass(LinkTag, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        this._linkProps(),
        this.props.children
      );
    }
  }, {
    key: '_linkProps',
    value: function _linkProps() {
      var linkProps = (0, _underscore.omit)(this.props, 'to');

      linkProps.href = this._href();
      linkProps.onClick = this._onClick;
      linkProps.target = this._target();

      return linkProps;
    }
  }, {
    key: '_href',
    value: function _href() {
      if (this._to()) {
        return this._to();
      }

      return '#';
    }
  }, {
    key: '_onClick',
    value: function _onClick(e) {
      if ((0, _is_modifier_click2.default)(e)) {
        return;
      }

      e.preventDefault();

      if (this._to()) {
        var target = this._target();

        if ((0, _underscore.isString)(this.props.to)) {
          return scrivito.openLocation(this.props.to, '_blank');
        }

        if (target) {
          scrivito.openLocation(this._href(), target);
        } else {
          (0, _navigate_to2.default)(this.props.to);
        }
      }
    }
  }, {
    key: '_target',
    value: function _target() {
      if (this.props.target) {
        return this.props.target;
      }

      if (this.props.to && this.props.to._scrivitoPrivateContent instanceof _basic_link2.default) {
        return this.props.to.target();
      }
    }
  }, {
    key: '_to',
    value: function _to() {
      if (this.props.to) {
        if ((0, _underscore.isString)(this.props.to)) {
          return this.props.to;
        }

        var unwrappedToValue = (0, _wrap_in_app_class.unwrapAppClassValue)(this.props.to);

        if (unwrappedToValue instanceof _basic_link2.default || unwrappedToValue instanceof _basic_obj2.default || unwrappedToValue instanceof _binary2.default) {
          return (0, _basic_url_for.basicUrlFor)(unwrappedToValue);
        }
      }
    }
  }]);

  return LinkTag;
}(_react2.default.Component);

LinkTag.displayName = 'Scrivito.LinkTag';
LinkTag.propTypes = (0, _tcomb.propTypes)({
  to: _tcomb.tcomb.maybe(_tcomb.tcomb.union([_model_types.ObjType, _model_types.LinkType, _model_types.BinaryType, _tcomb.tcomb.String]))
}, { strict: false });

exports.default = (0, _connect2.default)(LinkTag);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isModifierClick;
// IE11 is the only browser triggering a click event on middle click, so we must take care of it.
// Chrome, FF, Edge handle the middle click without triggering an event.
var IE11_MIDDLE_MOUSE_BUTTON = 2;

function isModifierClick(event) {
    return event.ctrlKey || event.metaKey || event.shiftKey || event.which === IE11_MIDDLE_MOUSE_BUTTON;
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _is_editing_mode = __webpack_require__(28);

var _is_editing_mode2 = _interopRequireDefault(_is_editing_mode);

var _schema = __webpack_require__(10);

var _schema2 = _interopRequireDefault(_schema);

var _underscore = __webpack_require__(0);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _errors = __webpack_require__(1);

var _wrap_in_app_class = __webpack_require__(6);

var _key_for_basic_content = __webpack_require__(119);

var _key_for_basic_content2 = _interopRequireDefault(_key_for_basic_content);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

var _editor_registry = __webpack_require__(68);

var _attribute_value = __webpack_require__(69);

var _attribute_value2 = _interopRequireDefault(_attribute_value);

var _editor = __webpack_require__(126);

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentTag = function (_React$Component) {
  _inherits(ContentTag, _React$Component);

  function ContentTag() {
    _classCallCheck(this, ContentTag);

    return _possibleConstructorReturn(this, (ContentTag.__proto__ || Object.getPrototypeOf(ContentTag)).apply(this, arguments));
  }

  _createClass(ContentTag, [{
    key: 'render',
    value: function render() {
      if (!this.props.content) {
        return null;
      }

      var field = _schema2.default.basicFieldFor(this.props.content, this.props.attribute);

      if (!field) {
        var attributeName = this.props.attribute;

        scrivito.nextTick(function () {
          throw new _errors.ArgumentError('Component "Scrivito.ContentTag" received prop "attribute" with invalid value: ' + ('Attribute "' + attributeName + '" is not defined for content specified in prop "content".'));
        });

        return null;
      }

      var editorId = void 0;
      var editorClass = void 0;

      var editorRegistration = (0, _editor_registry.editorRegistrationFor)({ type: field.type(), tag: this.props.tag });

      if (editorRegistration) {
        editorId = editorRegistration.id;
        editorClass = editorRegistration.editorClass;
      }

      if ((0, _is_editing_mode2.default)()) {
        return _react2.default.createElement(
          _editor2.default,
          {
            key: this._editorKey(editorId),
            field: field,
            editorClass: editorClass,
            tag: this.props.tag,
            customProps: this._customProps(),
            content: this.props.content
          },
          this.props.children
        );
      }

      return _react2.default.createElement(
        _attribute_value2.default,
        {
          field: field,
          tag: this.props.tag,
          customProps: this._customProps()
        },
        this.props.children
      );
    }
  }, {
    key: '_customProps',
    value: function _customProps() {
      return (0, _underscore.omit)(this.props, 'content', 'attribute', 'tag');
    }
  }, {
    key: '_editorKey',
    value: function _editorKey(editorId) {
      var content = (0, _wrap_in_app_class.unwrapAppClassValue)(this.props.content);

      return [this.props.tag, (0, _key_for_basic_content2.default)(content), this.props.attribute, editorId].join('|');
    }
  }]);

  return ContentTag;
}(_react2.default.Component);

ContentTag.displayName = 'Scrivito.ContentTag';

ContentTag.defaultProps = { tag: 'div' };

exports.default = (0, _connect2.default)(ContentTag);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerEditor = exports.editorRegistrationFor = exports.clearEditorRegistry = undefined;

var _underscore = __webpack_require__(0);

var _global_state = __webpack_require__(5);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var currentId = 0;
var registry = {};

function generateId() {
  currentId++;
  return currentId;
}

function registerEditor(editorClass) {
  var id = generateId();
  registry[id] = editorClass;

  var state = getState();
  var ids = state.get() || [];

  state.set([].concat(_toConsumableArray(ids), [id]));
}

function editorRegistrationFor(options) {
  var ids = getState().get();

  if (ids) {
    var id = (0, _underscore.find)(ids, function (i) {
      return registry[i] && registry[i].canEdit(options);
    });

    if (id) {
      var editorClass = registry[id];
      return { id: id, editorClass: editorClass };
    }
  }
}

function getState() {
  return _global_state.appState.subState('editors');
}

// For test purpose only.
function clearEditorRegistry() {
  currentId = 0;
  registry = {};
  getState().clear();
}

exports.clearEditorRegistry = clearEditorRegistry;
exports.editorRegistrationFor = editorRegistrationFor;
exports.registerEditor = registerEditor;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _is_editing_mode = __webpack_require__(28);

var _is_editing_mode2 = _interopRequireDefault(_is_editing_mode);

var _internal_links = __webpack_require__(40);

var InternalLinks = _interopRequireWildcard(_internal_links);

var _underscore = __webpack_require__(0);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _navigate_to = __webpack_require__(32);

var _navigate_to2 = _interopRequireDefault(_navigate_to);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

var _is_modifier_click = __webpack_require__(66);

var _is_modifier_click2 = _interopRequireDefault(_is_modifier_click);

var _widget_content = __webpack_require__(121);

var _widget_content2 = _interopRequireDefault(_widget_content);

var _widgetlist_placeholder = __webpack_require__(125);

var _widgetlist_placeholder2 = _interopRequireDefault(_widgetlist_placeholder);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttributeValue = function (_React$Component) {
  _inherits(AttributeValue, _React$Component);

  function AttributeValue(props) {
    _classCallCheck(this, AttributeValue);

    var _this = _possibleConstructorReturn(this, (AttributeValue.__proto__ || Object.getPrototypeOf(AttributeValue)).call(this, props));

    _this._onClick = _this._onClick.bind(_this);
    return _this;
  }

  _createClass(AttributeValue, [{
    key: 'render',
    value: function render() {
      switch (this.props.field.type()) {
        case 'html':
          return this._renderHtml();
        case 'string':
          return this._renderString();
        case 'widgetlist':
          return this._renderWidgetlist();
        default:
          return this._renderContent({ children: this.props.children });
      }
    }
  }, {
    key: '_renderHtml',
    value: function _renderHtml() {
      if (this.props.children) {
        return this._renderContent({ children: this.props.children });
      }

      var html = InternalLinks.transformHTML(this._attributeValue());
      var props = {
        dangerouslySetInnerHTML: { __html: html },
        onClick: this._onClick
      };

      return this._renderContent({ props: props });
    }
  }, {
    key: '_onClick',
    value: function _onClick(e) {
      if ((0, _is_modifier_click2.default)(e)) {
        return;
      }

      var target = InternalLinks.findTarget(e.target, e.currentTarget);

      if (target) {
        e.preventDefault();
        e.stopPropagation();
        (0, _navigate_to2.default)(target);
      }
    }
  }, {
    key: '_renderString',
    value: function _renderString() {
      return this._renderContent({ children: this.props.children || this._attributeValue() });
    }
  }, {
    key: '_renderWidgetlist',
    value: function _renderWidgetlist() {
      var children = void 0;

      var widgets = this._attributeValue();
      if (widgets.length) {
        children = widgets.map(function (widget) {
          return _react2.default.createElement(_widget_content2.default, {
            key: widget.id(),
            widget: widget
          });
        });
      } else if ((0, _is_editing_mode2.default)()) {
        children = _react2.default.createElement(_widgetlist_placeholder2.default, { field: this.props.field });
      }

      return this._renderContent({ children: children });
    }
  }, {
    key: '_renderContent',
    value: function _renderContent(_ref) {
      var props = _ref.props,
          children = _ref.children;

      var contentProps = (0, _underscore.extend)({}, this.props.customProps, props, this._editingProps());
      return _react2.default.createElement(this.props.tag, contentProps, children);
    }
  }, {
    key: '_editingProps',
    value: function _editingProps() {
      if (this.props.onClick) {
        return { onClick: this.props.onClick };
      }

      return {};
    }
  }, {
    key: '_attributeValue',
    value: function _attributeValue() {
      return this.props.field.get();
    }
  }]);

  return AttributeValue;
}(_react2.default.Component);

AttributeValue.displayName = 'Scrivito.ContentTag.AttributeValue';

exports.default = (0, _connect2.default)(AttributeValue);

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_70__;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!window.scrivito) {
  window.scrivito = {};
}
window.scrivito.client = {};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCss = loadCss;
exports.loadJs = loadJs;
function loadCss(url) {
  var targetDocument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.document;

  var link = targetDocument.createElement('link');

  link.rel = 'stylesheet';
  link.href = url;

  targetDocument.head.appendChild(link);
}

function loadJs(url) {
  var targetDocument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.document;

  var script = targetDocument.createElement('script');

  script.src = url;

  targetDocument.head.appendChild(script);
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _public_api = __webpack_require__(74);

Object.keys(_public_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _public_api[key];
    }
  });
});

var _connect_to_ui = __webpack_require__(137);

var _connect_to_ui2 = _interopRequireDefault(_connect_to_ui);

var _scrivito_sdk = __webpack_require__(138);

var _load_editing_assets = __webpack_require__(173);

var _load_editing_assets2 = _interopRequireDefault(_load_editing_assets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This is the webpack entry file used by the NPM module
 */

var ui = (0, _connect_to_ui2.default)();

(0, _scrivito_sdk.initializeSdk)(ui);

if (ui) {
  (0, _load_editing_assets2.default)();
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provideWidgetClass = exports.provideObjClass = exports.getClass = exports.createWidgetClass = exports.createObjClass = exports.Widget = exports.ObjSearch = exports.Obj = exports.Link = exports.registerComponent = exports.provideComponent = exports.connect = exports.WidgetTag = exports.NotFoundErrorPage = exports.LinkTag = exports.InternalErrorPage = exports.ImageTag = exports.CurrentPage = exports.ContentTag = exports.ChildListTag = exports.BackgroundImageTag = exports.urlFor = exports.provideEditingConfig = exports.navigateTo = exports.isInPlaceEditingActive = exports.currentPageParams = exports.currentPage = exports.configureContentBrowser = exports.configure = exports.TransformationSourceTooLargeError = exports.TransformationSourceInvalidError = exports.ScrivitoError = exports.ResourceNotFoundError = exports.ArgumentError = exports.load = exports.ObjFacetValue = exports.FutureBinary = exports.Binary = undefined;

var _binary = __webpack_require__(9);

Object.defineProperty(exports, 'Binary', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_binary).default;
  }
});

var _future_binary = __webpack_require__(24);

Object.defineProperty(exports, 'FutureBinary', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_future_binary).default;
  }
});

var _obj_facet_value = __webpack_require__(56);

Object.defineProperty(exports, 'ObjFacetValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_obj_facet_value).default;
  }
});

var _load = __webpack_require__(21);

Object.defineProperty(exports, 'load', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_load).default;
  }
});

var _errors = __webpack_require__(1);

Object.defineProperty(exports, 'ArgumentError', {
  enumerable: true,
  get: function get() {
    return _errors.ArgumentError;
  }
});
Object.defineProperty(exports, 'ResourceNotFoundError', {
  enumerable: true,
  get: function get() {
    return _errors.ResourceNotFoundError;
  }
});
Object.defineProperty(exports, 'ScrivitoError', {
  enumerable: true,
  get: function get() {
    return _errors.ScrivitoError;
  }
});
Object.defineProperty(exports, 'TransformationSourceInvalidError', {
  enumerable: true,
  get: function get() {
    return _errors.TransformationSourceInvalidError;
  }
});
Object.defineProperty(exports, 'TransformationSourceTooLargeError', {
  enumerable: true,
  get: function get() {
    return _errors.TransformationSourceTooLargeError;
  }
});

var _configure = __webpack_require__(57);

Object.defineProperty(exports, 'configure', {
  enumerable: true,
  get: function get() {
    return _configure.configure;
  }
});

var _configure_content_browser = __webpack_require__(35);

Object.defineProperty(exports, 'configureContentBrowser', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_configure_content_browser).default;
  }
});

var _current_page = __webpack_require__(17);

Object.defineProperty(exports, 'currentPage', {
  enumerable: true,
  get: function get() {
    return _current_page.currentPage;
  }
});
Object.defineProperty(exports, 'currentPageParams', {
  enumerable: true,
  get: function get() {
    return _current_page.currentPageParams;
  }
});

var _is_in_place_editing_active = __webpack_require__(107);

Object.defineProperty(exports, 'isInPlaceEditingActive', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_is_in_place_editing_active).default;
  }
});

var _navigate_to = __webpack_require__(32);

Object.defineProperty(exports, 'navigateTo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navigate_to).default;
  }
});

var _provide_editing_config = __webpack_require__(38);

Object.defineProperty(exports, 'provideEditingConfig', {
  enumerable: true,
  get: function get() {
    return _provide_editing_config.provideEditingConfig;
  }
});

var _url_for = __webpack_require__(62);

Object.defineProperty(exports, 'urlFor', {
  enumerable: true,
  get: function get() {
    return _url_for.urlFor;
  }
});

var _background_image_tag = __webpack_require__(111);

Object.defineProperty(exports, 'BackgroundImageTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_background_image_tag).default;
  }
});

var _child_list_tag = __webpack_require__(114);

Object.defineProperty(exports, 'ChildListTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_child_list_tag).default;
  }
});

var _content_tag = __webpack_require__(67);

Object.defineProperty(exports, 'ContentTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_content_tag).default;
  }
});

var _current_page2 = __webpack_require__(130);

Object.defineProperty(exports, 'CurrentPage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_current_page2).default;
  }
});

var _image_tag = __webpack_require__(131);

Object.defineProperty(exports, 'ImageTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_image_tag).default;
  }
});

var _internal_error_page = __webpack_require__(133);

Object.defineProperty(exports, 'InternalErrorPage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_internal_error_page).default;
  }
});

var _link_tag = __webpack_require__(65);

Object.defineProperty(exports, 'LinkTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_link_tag).default;
  }
});

var _not_found_error_page = __webpack_require__(134);

Object.defineProperty(exports, 'NotFoundErrorPage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_not_found_error_page).default;
  }
});

var _widget_tag = __webpack_require__(41);

Object.defineProperty(exports, 'WidgetTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_widget_tag).default;
  }
});

var _connect = __webpack_require__(3);

Object.defineProperty(exports, 'connect', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_connect).default;
  }
});

var _provide_component = __webpack_require__(135);

Object.defineProperty(exports, 'provideComponent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_provide_component).default;
  }
});

var _register_component = __webpack_require__(136);

Object.defineProperty(exports, 'registerComponent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_register_component).default;
  }
});

var _window_context = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var realmApi = (0, _window_context.getWindowContext)();

var Link = exports.Link = realmApi.Link;
var Obj = exports.Obj = realmApi.Obj;
var ObjSearch = exports.ObjSearch = realmApi.ObjSearch;
var Widget = exports.Widget = realmApi.Widget;
var createObjClass = exports.createObjClass = realmApi.createObjClass;
var createWidgetClass = exports.createWidgetClass = realmApi.createWidgetClass;
var getClass = exports.getClass = realmApi.getClass;
var provideObjClass = exports.provideObjClass = realmApi.provideObjClass;
var provideWidgetClass = exports.provideWidgetClass = realmApi.provideWidgetClass;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* this module is package-private, i.e. do not import from outside of loadable. */
Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __webpack_require__(0);
var globalCaptureList;
function capture(fn) {
    var globalCaptureBefore = globalCaptureList;
    try {
        globalCaptureList = [];
        fn();
        return new CaptureReport(globalCaptureList);
    }
    finally {
        globalCaptureList = globalCaptureBefore;
    }
}
exports.capture = capture;
function notifyMissingData(loader) {
    if (globalCaptureList) {
        globalCaptureList.push({ reason: 'missing', loader: loader });
    }
    else {
        warnLoadingRequired('not yet fully loaded');
        loader();
    }
}
exports.notifyMissingData = notifyMissingData;
function notifyOutdatedData(loader) {
    if (globalCaptureList) {
        globalCaptureList.push({ reason: 'outdated', loader: loader });
    }
    else {
        warnLoadingRequired('outdated');
        loader();
    }
}
exports.notifyOutdatedData = notifyOutdatedData;
function warnLoadingRequired(reason) {
    scrivito.logError("Scrivito data is " + reason + ". " +
        "Try re-running or use Scrivito.load or Scrivito.connect.");
}
var CaptureReport = /** @class */ (function () {
    function CaptureReport(captureList) {
        this.captureList = captureList;
    }
    /* returns true iff no data is missing, doesn't care about outdated  */
    CaptureReport.prototype.isAllDataLoaded = function () {
        return !underscore_1.findWhere(this.captureList, { reason: 'missing' });
    };
    /* returns true iff no data is missing or outdated */
    CaptureReport.prototype.isAllDataUpToDate = function () {
        return this.captureList.length === 0;
    };
    /* triggers (re-)loading of all missing or outdated data that was captured */
    CaptureReport.prototype.loadRequiredData = function () {
        if (this.captureList.length === 0) {
            // without this, a resolved promise would be returned.
            // a careless caller could easily produce a hard-to-debug infinite loop.
            // returning no promise lets a careless caller fail early - easier to debug.
            return null;
        }
        this.captureList.forEach(function (captured) { return captured.loader(); });
    };
    return CaptureReport;
}());
exports.CaptureReport = CaptureReport;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errors_es6_1 = __webpack_require__(1);
var loadingState = {};
var EMPTY_STATE = { status: undefined };
// A wrapper around a value that is retrieved asynchronously.
// This class is stateless and (almost) pure:
// * it does not perform any I/O
// * the only side-effect it has is changing the provided state container
// * it does not keep any state itself
// * state is replaced, not mutated
// * it does not use Promises
var LoadableValue = /** @class */ (function () {
    // stateContainer is where the LoadableValue should store its state.
    function LoadableValue(stateContainer) {
        if (!stateContainer) {
            throw new errors_es6_1.InternalError('LoadableValue needs stateContainer');
        }
        this.container = stateContainer;
        this.id = stateContainer.id();
    }
    LoadableValue.resetLoadingState = function () {
        loadingState = {};
    };
    // store a loadId to identify the current load operation.
    // this allows you to distinguish different load operations
    // to facilitate concurrency protection, like optimistic locking.
    LoadableValue.prototype.setLoading = function (loadId) {
        loadingState[this.id] = loadId;
    };
    // return the current loadId. should only be called if loading.
    LoadableValue.prototype.getLoading = function () {
        return loadingState[this.id];
    };
    LoadableValue.prototype.status = function () {
        return this.getState().status || 'MISSING';
    };
    LoadableValue.prototype.value = function () {
        var state = this.getState();
        if (state.status !== 'AVAILABLE') {
            return;
        }
        return state.value;
    };
    LoadableValue.prototype.error = function () {
        var state = this.getState();
        if (state.status !== 'ERROR') {
            return;
        }
        return state.error;
    };
    LoadableValue.prototype.version = function () {
        var state = this.getState();
        if (state.status === undefined) {
            return;
        }
        return state.version;
    };
    LoadableValue.prototype.transitionToMissing = function () {
        this.setState({ status: undefined });
    };
    LoadableValue.prototype.transitionToAvailable = function (value, version) {
        this.setState({ status: 'AVAILABLE', value: value, version: version });
    };
    LoadableValue.prototype.transitionToError = function (error, version) {
        this.setState({ status: 'ERROR', error: error, version: version });
    };
    LoadableValue.prototype.setState = function (state) {
        delete loadingState[this.id];
        this.container.set(state);
    };
    LoadableValue.prototype.getState = function () {
        return this.container.get() || EMPTY_STATE;
    };
    return LoadableValue;
}());
exports.default = LoadableValue;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_77__;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapAndLoadParallel;

var _loadable_data = __webpack_require__(7);

var _loadable_data2 = _interopRequireDefault(_loadable_data);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapAndLoadParallel(list, iteratee) {
  var results = [];

  _underscore2.default.each(list, function (item) {
    var run = _loadable_data2.default.run(function () {
      return iteratee(item);
    });

    if (run.success) {
      results.push(run.result);
    }
  });

  if (results.length < list.length) {
    _loadable_data2.default.throwNotLoaded();
  }

  return results;
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = findWidgetPlacement;

var _attribute = __webpack_require__(19);

var _attribute2 = _interopRequireDefault(_attribute);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findWidgetPlacement(objData, widgetId) {
  var placement = findWidgetPlacementIn(objData, widgetId);

  if (placement) {
    return placement;
  }

  var widgetPool = objData._widget_pool;

  _underscore2.default.find(widgetPool, function (parentWidgetData, parentWidgetId) {
    placement = findWidgetPlacementIn(parentWidgetData, widgetId);

    if (placement) {
      placement.parentWidgetId = parentWidgetId;
      return true;
    }
  });

  return placement;
}

function findWidgetPlacementIn(objOrWidgetData, widgetId) {
  var placement = void 0;

  _underscore2.default.find(objOrWidgetData, function (attributeDict, attributeName) {
    if (_attribute2.default.isSystemAttribute(attributeName)) {
      return;
    }

    var _attributeDict = _slicedToArray(attributeDict, 2),
        attributeType = _attributeDict[0],
        attributeValue = _attributeDict[1];

    if (attributeValue && attributeType === 'widgetlist') {
      var index = attributeValue.indexOf(widgetId);

      if (index !== -1) {
        placement = { attributeName: attributeName, index: index };
        return true;
      }
    }
  });

  return placement;
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.deserialize = deserialize;

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _types = __webpack_require__(25);

var _basic_link = __webpack_require__(15);

var _basic_link2 = _interopRequireDefault(_basic_link);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _binary = __webpack_require__(9);

var _binary2 = _interopRequireDefault(_binary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deserialize(model, rawValue, type, options) {
  var _rawValue = _slicedToArray(rawValue, 2),
      typeFromBackend = _rawValue[0],
      valueFromBackend = _rawValue[1];

  switch (type) {
    case 'binary':
      return deserializeBinaryValue(typeFromBackend, valueFromBackend);
    case 'date':
      return deserializeDateValue(typeFromBackend, valueFromBackend);
    case 'float':
      return deserializeFloatValue(typeFromBackend, valueFromBackend);
    case 'enum':
      return deserializeEnumValue(typeFromBackend, valueFromBackend, options);
    case 'html':
      return deserializeHtmlValue(typeFromBackend, valueFromBackend);
    case 'integer':
      return deserializeIntegerValue(typeFromBackend, valueFromBackend);
    case 'link':
      return deserializeLinkValue(typeFromBackend, valueFromBackend);
    case 'linklist':
      return deserializeLinklistValue(typeFromBackend, valueFromBackend);
    case 'multienum':
      return deserializeMultienumValue(typeFromBackend, valueFromBackend, options);
    case 'reference':
      return deserializeReferenceValue(typeFromBackend, valueFromBackend);
    case 'referencelist':
      return deserializeReferencelistValue(typeFromBackend, valueFromBackend);
    case 'string':
      return deserializeStringValue(typeFromBackend, valueFromBackend);
    case 'stringlist':
      return deserializeStringlistValue(typeFromBackend, valueFromBackend);
    case 'widgetlist':
      return deserializeWidgetlistValue(typeFromBackend, valueFromBackend, model);
  }
}

function deserializeBinaryValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend === 'binary' && valueFromBackend) {
    var binaryId = valueFromBackend.id;
    var isPublic = scrivito.currentWorkspaceId() === 'published';

    return new _binary2.default(binaryId, isPublic).optimizeFor({});
  }

  return null;
}

function deserializeDateValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend !== 'date') {
    return null;
  }

  return (0, _types.deserializeAsDate)(valueFromBackend);
}

function deserializeHtmlValue(typeFromBackend, valueFromBackend) {
  if (_underscore2.default.contains(['html', 'string'], typeFromBackend) && _underscore2.default.isString(valueFromBackend)) {
    return valueFromBackend;
  }

  return '';
}

function deserializeEnumValue(typeFromBackend, valueFromBackend, _ref) {
  var values = _ref.values;

  if (typeFromBackend === 'string' && _underscore2.default.contains(values, valueFromBackend)) {
    return valueFromBackend;
  }

  return null;
}

function deserializeMultienumValue(typeFromBackend, valueFromBackend, _ref2) {
  var values = _ref2.values;

  if (typeFromBackend !== 'stringlist' || !Array.isArray(valueFromBackend)) {
    return [];
  }

  return _underscore2.default.intersection(valueFromBackend, values);
}

function deserializeFloatValue(typeFromBackend, valueFromBackend) {
  switch (typeFromBackend) {
    case 'string':
      if (valueFromBackend.match(/^-?\d+(\.\d+)?$/)) {
        return convertToFloat(valueFromBackend);
      }
      return null;
    case 'number':
      return convertToFloat(valueFromBackend);
    default:
      return null;
  }
}

function convertToFloat(valueFromBackend) {
  var floatValue = parseFloat(valueFromBackend);

  if ((0, _types.isValidFloat)(floatValue)) {
    return floatValue;
  }

  return null;
}

function deserializeIntegerValue(typeFromBackend, valueFromBackend) {
  switch (typeFromBackend) {
    case 'string':
    case 'number':
      return (0, _types.deserializeAsInteger)(valueFromBackend);
    default:
      return null;
  }
}

function deserializeLinkValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend !== 'link' || !_underscore2.default.isObject(valueFromBackend)) {
    return null;
  }

  return convertToLink(valueFromBackend);
}

function deserializeLinklistValue(_typeFromBackend, valueFromBackend) {
  if (!_underscore2.default.isArray(valueFromBackend)) {
    return [];
  }

  return _underscore2.default.compact(valueFromBackend.map(convertToLink));
}

function convertToLink(valueFromBackend) {
  var linkParams = _underscore2.default.pick(valueFromBackend, 'title', 'query', 'fragment', 'target', 'url');

  linkParams.hash = linkParams.fragment;
  delete linkParams.fragment;

  linkParams.objId = valueFromBackend.obj_id;
  var link = _basic_link2.default.build(linkParams);

  if (link.isBroken()) {
    return null;
  }

  return link;
}

function convertReferenceToBasicObj(valueFromBackend) {
  var obj = _basic_obj2.default.get(valueFromBackend);

  if (obj) {
    return obj;
  }

  return null;
}

function deserializeReferenceValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend === 'reference' && valueFromBackend) {
    return convertReferenceToBasicObj(valueFromBackend);
  }

  return null;
}

function deserializeReferencelistValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend !== 'referencelist') {
    return [];
  }

  if (!valueFromBackend) {
    return [];
  }

  var objs = valueFromBackend.map(convertReferenceToBasicObj);

  return _underscore2.default.compact(objs);
}

function deserializeStringValue(typeFromBackend, valueFromBackend) {
  if (_underscore2.default.contains(['html', 'string'], typeFromBackend) && _underscore2.default.isString(valueFromBackend)) {
    return valueFromBackend;
  }

  return '';
}

function deserializeStringlistValue(typeFromBackend, valueFromBackend) {
  if (typeFromBackend !== 'stringlist' || !Array.isArray(valueFromBackend)) {
    return [];
  }

  return valueFromBackend;
}

function deserializeWidgetlistValue(typeFromBackend, valueFromBackend, model) {
  if (typeFromBackend !== 'widgetlist') {
    return [];
  }

  return _underscore2.default.map(valueFromBackend, function (widgetId) {
    return model.widget(widgetId);
  });
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _underscore = __webpack_require__(0);

var _errors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasicField = function () {
  function BasicField(_ref) {
    var container = _ref.container,
        attributeName = _ref.attributeName,
        typeInfo = _ref.typeInfo;

    _classCallCheck(this, BasicField);

    this._container = container;
    this._attributeName = attributeName;
    this._typeInfo = typeInfo;
  }

  _createClass(BasicField, [{
    key: 'get',
    value: function get() {
      return this._container.get(this.name(), this._typeInfo);
    }
  }, {
    key: 'update',
    value: function update(newValue) {
      this._container.update(_defineProperty({}, this.name(), [newValue, this._typeInfo]));
    }
  }, {
    key: 'container',
    value: function container() {
      return this._container;
    }
  }, {
    key: 'name',
    value: function name() {
      return this._attributeName;
    }
  }, {
    key: 'type',
    value: function type() {
      return this._typeInfo[0];
    }
  }, {
    key: 'typeOptions',
    value: function typeOptions() {
      return this._typeInfo[1] || {};
    }
  }, {
    key: 'equals',
    value: function equals(other) {
      if (!(other instanceof BasicField)) {
        return false;
      }

      return this.container().equals(other.container()) && this.name() === other.name();
    }
  }, {
    key: 'values',
    value: function values() {
      this._assertValidTypes(['enum', 'multienum'], 'Only enum and multienum attributes can have values');
      return this._sortValuesByLocalization(this.typeOptions().values);
    }
  }, {
    key: 'titleForValue',
    value: function titleForValue(value) {
      this._assertValidTypes(['enum', 'multienum'], 'Only enum and multienum attributes can have localized values');
      var localization = (0, _underscore.findWhere)(this.typeOptions().valuesLocalization, { value: value });
      return localization && localization.title || value;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var _dataForId2 = this._dataForId(),
          name = _dataForId2.name,
          objId = _dataForId2.objId,
          widgetId = _dataForId2.widgetId;

      var stringRepresentation = '<BasicField name=' + name + ' objId=' + objId;

      if (widgetId) {
        stringRepresentation += ' widgetId=' + widgetId + '>';
      } else {
        stringRepresentation += '>';
      }

      return stringRepresentation;
    }
  }, {
    key: 'id',
    value: function id() {
      var _dataForId3 = this._dataForId(),
          name = _dataForId3.name,
          objId = _dataForId3.objId,
          widgetId = _dataForId3.widgetId;

      var id = name + '|' + objId;

      if (widgetId) {
        id += '|' + widgetId;
      }

      return id;
    }
  }, {
    key: '_assertValidTypes',
    value: function _assertValidTypes(validTypes, errorMessage) {
      if (!(0, _underscore.include)(validTypes, this.type())) {
        throw new _errors.InternalError(errorMessage);
      }
    }
  }, {
    key: '_dataForId',
    value: function _dataForId() {
      var jsonHash = { name: this.name() };

      var container = this.container();
      if (container instanceof _basic_obj2.default) {
        jsonHash.objId = container.id();
      } else {
        jsonHash.objId = container.obj().id();
        jsonHash.widgetId = container.id();
      }

      return jsonHash;
    }
  }, {
    key: '_sortValuesByLocalization',
    value: function _sortValuesByLocalization(values) {
      var _this = this;

      if (values) {
        if (this.typeOptions().valuesLocalization) {
          return (0, _underscore.sortBy)(values, function (value) {
            var index = (0, _underscore.findIndex)(_this.typeOptions().valuesLocalization, { value: value });

            if (index === -1) {
              return values.length;
            }

            return index;
          });
        }

        return values;
      }

      return [];
    }
  }]);

  return BasicField;
}();

exports.default = BasicField;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var errors_es6_1 = __webpack_require__(1);
var underscore_1 = __webpack_require__(0);
var treeIdCounter = 0;
// use native assign where available, since it's faster
var assign = Object.assign || underscore_1.extend;
// abstract interface for managing state
var AbstractStateStore = /** @class */ (function () {
    function AbstractStateStore() {
    }
    // return current state
    AbstractStateStore.prototype.get = function () {
        var _this = this;
        var valueWhenAccessed = this.untrackedGet();
        this.recordDetector(function () { return valueWhenAccessed !== _this.untrackedGet(); });
        return valueWhenAccessed;
    };
    AbstractStateStore.prototype.recordDetector = function (detector) {
        this.getTree().recordDetector(detector);
    };
    // reset the state back to undefined
    AbstractStateStore.prototype.clear = function () {
        this.set(undefined);
    };
    // this method may only be called when StateType is fully partial,
    // i.e. all properties defined by StateType are optional.
    AbstractStateStore.prototype.subState = function (key) {
        return new StateTreeNode(this, key);
    };
    // this method may only be called when StateType is fully partial,
    // i.e. all properties defined by StateType are optional.
    AbstractStateStore.prototype.setSubState = function (key, newSubState) {
        var priorState = this.untrackedGet();
        if (priorState === undefined) {
            var newState = (_a = {}, _a[key] = newSubState, _a);
            // Since StateType is fully partial, newState is a valid StateType.
            // No way to tell TypeScript this, though, therefore using `any`.
            this.set(newState);
        }
        else {
            var duplicate = assign({}, priorState);
            duplicate[key] = newSubState;
            this.set(duplicate);
        }
        var _a;
    };
    AbstractStateStore.prototype.getSubState = function (key) {
        var state = this.untrackedGet();
        if (state !== undefined) {
            return state[key];
        }
    };
    return AbstractStateStore;
}());
// a state tree, which can be used to store state.
// this is the root of the tree, which keeps the state of the entire tree.
var StateTree = /** @class */ (function (_super) {
    __extends(StateTree, _super);
    function StateTree() {
        var _this = _super.call(this) || this;
        _this.treeId = (treeIdCounter++).toString();
        _this.clearListeners();
        _this.batchUpdates = false;
        _this.version = 0;
        return _this;
    }
    StateTree.prototype.untrackedGet = function () {
        return this.state;
    };
    StateTree.prototype.set = function (newState) {
        this.state = newState;
        this.version++;
        if (!this.batchUpdates) {
            this.notifyListeners();
        }
    };
    /* Executes the given function and tracks read access to this tree.
      * All substates that are accessed while the function runs are considered "relevant".
      *
      * Returns a change detector function. The detector function returns:
      * - truthy if any relevant state has changed in the meantime
      * - falsey if all relevant state is still as it was
      *
      * The detector function can be used for cache invalidation:
      * If the detector returns false, then running the function again
      * will yield the same result - provided that all relevant data is stored inside this tree.
      */
    StateTree.prototype.trackChanges = function (fn) {
        var _this = this;
        var versionBefore = this.version;
        var individualDetectors = this.recordDetectors(fn);
        // checking the version first, to avoid running all detectors
        // when the tree is unchanged
        var overallDetector = function () {
            return _this.version !== versionBefore &&
                !!underscore_1.find(individualDetectors, function (detector) { return detector(); });
        };
        return overallDetector;
    };
    StateTree.prototype.recordDetector = function (detector) {
        var recording = this.detectorRecording;
        if (recording !== undefined) {
            recording.push(detector);
        }
    };
    StateTree.prototype.getTree = function () {
        return this;
    };
    StateTree.prototype.id = function () {
        return this.treeId;
    };
    StateTree.prototype.subscribe = function (listener) {
        var _this = this;
        var active = true;
        var guardedListener = function () { if (active) {
            listener();
        } };
        this.ensureCanMutateListeners();
        this.listeners.push(guardedListener);
        return function () {
            active = false;
            var index = _this.listeners.indexOf(guardedListener);
            _this.ensureCanMutateListeners();
            _this.listeners.splice(index, 1);
        };
    };
    StateTree.prototype.withBatchedUpdates = function (fn) {
        var stateBefore = this.state;
        var batchBefore = this.batchUpdates;
        try {
            this.batchUpdates = true;
            fn();
        }
        finally {
            this.batchUpdates = batchBefore;
            if (!this.batchUpdates && stateBefore !== this.state) {
                this.notifyListeners();
            }
        }
    };
    // For test purpose only.
    StateTree.prototype.listenerCount = function () {
        return this.listeners.length;
    };
    // public for test purpose only.
    StateTree.prototype.clearListeners = function () {
        this.listeners = [];
    };
    StateTree.prototype.recordDetectors = function (fn) {
        if (this.detectorRecording !== undefined) {
            throw new errors_es6_1.InternalError('no nested detector recording!');
        }
        try {
            this.detectorRecording = [];
            fn();
            return this.detectorRecording;
        }
        finally {
            this.detectorRecording = undefined;
        }
    };
    StateTree.prototype.notifyListeners = function () {
        this.listenersToNotify = this.listeners;
        this.listenersToNotify.forEach(function (listener) { return listener(); });
    };
    StateTree.prototype.ensureCanMutateListeners = function () {
        if (this.listenersToNotify === this.listeners) {
            // make shallow copy to avoid messing up a running notification loop
            this.listeners = this.listeners.slice();
        }
    };
    return StateTree;
}(AbstractStateStore));
exports.default = StateTree;
// a node of a state tree.
// does not actually keep state, but provides
// access scoped to a subtree of a StateTree.
var StateTreeNode = /** @class */ (function (_super) {
    __extends(StateTreeNode, _super);
    function StateTreeNode(parentState, key) {
        var _this = _super.call(this) || this;
        _this.parentState = parentState;
        _this.key = key;
        // cache tree locally (performance)
        _this.tree = parentState.getTree();
        return _this;
    }
    StateTreeNode.prototype.getTree = function () {
        return this.tree;
    };
    StateTreeNode.prototype.untrackedGet = function () {
        return this.parentState.getSubState(this.key);
    };
    StateTreeNode.prototype.set = function (newState) {
        this.parentState.setSubState(this.key, newState);
    };
    StateTreeNode.prototype.id = function () {
        // first convert backslash to double-backslash
        // then convert slash to backslash-slash
        var escapedKey = this.key.replace(/\\/g, '\\\\').replace(/\//g, '\\/');
        return this.parentState.id() + "/" + escapedKey;
    };
    return StateTreeNode;
}(AbstractStateStore));


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _future_binary = __webpack_require__(24);

var _future_binary2 = _interopRequireDefault(_future_binary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UploadedBlob = function () {
  function UploadedBlob(id, url, filename, objId) {
    _classCallCheck(this, UploadedBlob);

    this._id = id;
    this.url = url;
    this.filename = filename;
    this._objId = objId;
  }

  _createClass(UploadedBlob, [{
    key: 'noCacheUrl',
    value: function noCacheUrl() {
      if (scrivito.currentWorkspaceId() === 'published') {
        return scrivito.Promise.resolve(null);
      }

      var path = 'blobs/' + encodeURIComponent(this._id) + '/no_cache';
      return scrivito.CmsRestApi.get(path).then(function (response) {
        return response.private_access.get.url;
      }).catch(function (e) {
        scrivito.displayError(e);
        return scrivito.Promise.reject(e);
      });
    }
  }, {
    key: 'copy',
    value: function copy() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new _future_binary2.default({
        idToCopy: this._id
      }, {
        filename: params.filename,
        contentType: params.content_type
      });
    }
  }]);

  return UploadedBlob;
}();

exports.default = UploadedBlob;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validClassesForWidgetlistField;

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _widget_class = __webpack_require__(34);

var _widget_class2 = _interopRequireDefault(_widget_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALLOWED_CLASSES_ATTR = 'data-scrivito-private-field-widget-allowed-classes';

var cache = {};

function validClassesForWidgetlistField(field) {
  var validClasses = cache[field.id()];

  if (validClasses) {
    return validClasses;
  }

  return _underscore2.default.pluck(_widget_class2.default.all(), 'name');
}

function init() {
  if (!scrivito.editingContext.isViewMode()) {
    scrivito.on('content', function (root) {
      var widgetlistElements = scrivito.WidgetlistFieldElement.all($(root));
      _underscore2.default.each(widgetlistElements, function (element) {
        var field = element.basicField();
        cache[field.id()] = JSON.parse(element.dom_element().attr(ALLOWED_CLASSES_ATTR));
      });
    });
  }
}

function clearCache() {
  cache = {};
}

validClassesForWidgetlistField.init = init;
validClassesForWidgetlistField.clearCache = clearCache;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeRailsThumbnails = exports.getRailsThumbnail = undefined;

var _loadable_data = __webpack_require__(7);

var _loadable_data2 = _interopRequireDefault(_loadable_data);

var _global_state = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRailsThumbnail(objClassName) {
  return loadableData().get()[objClassName] || null;
}

// For test purpose only.
function storeRailsThumbnails(thumbnails) {
  loadableData().set(thumbnails);
}

function loadableData() {
  var state = _global_state.uiState.subState('railsThumbnails');
  return new _loadable_data2.default({ state: state, loader: loader, throwNotLoaded: true });
}

function loader() {
  return scrivito.ajax('GET', 'obj_class/thumbnails');
}

exports.getRailsThumbnail = getRailsThumbnail;
exports.storeRailsThumbnails = storeRailsThumbnails;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeValidRailsPageClasses = exports.validRailsPageClasses = undefined;

var _loadable_data = __webpack_require__(7);

var _loadable_data2 = _interopRequireDefault(_loadable_data);

var _global_state = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validRailsPageClasses(path) {
  return loadableDataFor(path).get();
}

function loadableDataFor(path) {
  var state = void 0;
  var baseState = _global_state.uiState.subState('validRailsPageClasses');

  if (path) {
    state = baseState.subState('byPath').subState(path);
  } else {
    state = baseState.subState('withoutPath');
  }

  return new _loadable_data2.default({
    state: state,
    loader: loaderFor(path),
    throwNotLoaded: true
  });
}

// For test purpose only
function storeValidRailsPageClasses(path, objClassNames) {
  loadableDataFor(path).set(objClassNames);
}

function loaderFor(path) {
  var queryString = '';

  if (path) {
    queryString = '?' + $.param({ parent_path: path });
  }

  return function () {
    return scrivito.ajax('GET', 'objs/valid_page_classes' + queryString);
  };
}

exports.validRailsPageClasses = validRailsPageClasses;
exports.storeValidRailsPageClasses = storeValidRailsPageClasses;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertToSlug;

var _speakingurl = __webpack_require__(88);

var _speakingurl2 = _interopRequireDefault(_speakingurl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convertToSlug(input) {
  return (0, _speakingurl2.default)(input);
}

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _obj_retrieval = __webpack_require__(90);

var ObjRetrieval = _interopRequireWildcard(_obj_retrieval);

var _obj_patch = __webpack_require__(50);

var ObjPatch = _interopRequireWildcard(_obj_patch);

var _loadable_data = __webpack_require__(7);

var _loadable_data2 = _interopRequireDefault(_loadable_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjData = function () {
  function ObjData(id, state) {
    var _this = this;

    _classCallCheck(this, ObjData);

    this._loadableData = new _loadable_data2.default({
      state: state,
      loader: function loader(push) {
        return ObjRetrieval.retrieveObj(_this._id).then(function (data) {
          push(function () {
            return _this._replication().notifyBackendState(data);
          });
          return data;
        });
      }
    });
    this._id = id;
  }

  _createClass(ObjData, [{
    key: 'set',
    value: function set(newState) {
      this._loadableData.set(newState);
    }
  }, {
    key: 'setError',
    value: function setError(error) {
      this._loadableData.setError(error);
    }
  }, {
    key: 'isAvailable',
    value: function isAvailable() {
      return this._loadableData.isAvailable();
    }
  }, {
    key: 'update',
    value: function update(objPatch) {
      var newState = ObjPatch.apply(this.current, objPatch);

      this._loadableData.set(newState);
      this._replication().notifyLocalState(newState);
    }
  }, {
    key: 'finishSaving',
    value: function finishSaving() {
      return this._replication().finishSaving();
    }
  }, {
    key: '_replication',
    value: function _replication() {
      return scrivito.ObjReplication.get(this._id);
    }
  }, {
    key: 'current',
    get: function get() {
      return this._loadableData.get();
    }
  }]);

  return ObjData;
}();

exports.default = ObjData;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var batch_retrieval_1 = __webpack_require__(91);
function mget(ids) {
    var workspaceId = scrivito.currentWorkspaceId();
    return scrivito.CmsRestApi.get("workspaces/" + workspaceId + "/objs/mget", {
        ids: ids, include_deleted: true,
    }).then(function (response) { return response.results; });
}
// Question: Why the magic batchSize: 17?
// Answer: Retrieval of up to 100 Objs is a common use-case (see ObjSearch)
// With a batchSize of 17, this leads to 6 concurrent requests, which is
// the concurrent request limit in many browsers for HTTP/1.
// This ensures maximum parallel loading.
var batchRetrieval = new batch_retrieval_1.default(mget, { batchSize: 17 });
function retrieveObj(id) {
    return batchRetrieval.retrieve(id).then(function (value) {
        if (value) {
            return value;
        }
        return { _deleted: true };
    });
}
exports.retrieveObj = retrieveObj;
// For test purpose only.
function reset() {
    batchRetrieval.reset();
}
exports.reset = reset;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var deferred_es6_1 = __webpack_require__(20);
var underscore_1 = __webpack_require__(0);
var BatchRetrieval = /** @class */ (function () {
    function BatchRetrieval(mget, _a) {
        var batchSize = (_a === void 0 ? {} : _a).batchSize;
        this.mget = mget;
        this.batchSize = batchSize || 100;
        this.deferreds = {};
    }
    BatchRetrieval.prototype.retrieve = function (id) {
        var _this = this;
        if (underscore_1.isEmpty(this.deferreds)) {
            scrivito.nextTick(function () { return _this.performRetrieval(); });
        }
        if (!this.deferreds[id]) {
            var deferred = new deferred_es6_1.default();
            this.deferreds[id] = deferred;
        }
        return this.deferreds[id].promise;
    };
    // For test purpose only.
    BatchRetrieval.prototype.reset = function () {
        this.deferreds = {};
    };
    BatchRetrieval.prototype.performRetrieval = function () {
        var _this = this;
        var ids = underscore_1.keys(this.deferreds).slice(0, this.batchSize);
        if (ids.length === 0) {
            return;
        }
        var currentRequestDeferreds = {};
        ids.forEach(function (id) {
            currentRequestDeferreds[id] = _this.deferreds[id];
            delete _this.deferreds[id];
        });
        this.mget(ids).then(function (results) {
            ids.forEach(function (id, index) {
                var deferred = currentRequestDeferreds[id];
                var result = results[index];
                if (index < results.length) {
                    deferred.resolve(result);
                }
                else {
                    _this.retrieve(id).then(deferred.resolve, deferred.reject);
                }
            });
        }, function (error) {
            underscore_1.each(currentRequestDeferreds, function (deferred) { return deferred.reject(error); });
        });
        this.performRetrieval();
    };
    return BatchRetrieval;
}());
exports.default = BatchRetrieval;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _obj_query_store = __webpack_require__(51);

var ObjQueryStore = _interopRequireWildcard(_obj_query_store);

var _obj_query_retrieval = __webpack_require__(93);

var ObjQueryRetrieval = _interopRequireWildcard(_obj_query_retrieval);

var _obj_data_store = __webpack_require__(30);

var ObjDataStore = _interopRequireWildcard(_obj_data_store);

var _underscore = __webpack_require__(0);

var _load2 = __webpack_require__(21);

var _load3 = _interopRequireDefault(_load2);

var _loadable_data = __webpack_require__(7);

var _loadable_data2 = _interopRequireDefault(_loadable_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FALLBACK_RESPONSE = { results: [] };

var ObjIdQueryBatch = function () {
  _createClass(ObjIdQueryBatch, null, [{
    key: 'store',
    value: function store(params, objIds) {
      var state = stateContainer(backendOrderedHitsParams(params), 0);
      var invalidation = invalidationFn(undefined);
      var loadableData = new _loadable_data2.default({ state: state, invalidation: invalidation });

      loadableData.set({ results: objIds });
    }
  }, {
    key: 'firstBatchFor',
    value: function firstBatchFor(params, batchSize) {
      return new ObjIdQueryBatch(backendOrderedHitsParams(params), batchSize);
    }
  }, {
    key: 'countFor',
    value: function countFor(params) {
      return this.firstBatchFor(params, 0).count();
    }

    // the constructor should only be called internally,
    // i.e. by ObjIdQueryBatch itself

  }]);

  function ObjIdQueryBatch(params, batchSize) {
    var previousBatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, ObjIdQueryBatch);

    this._params = params;
    this._batchSize = batchSize;

    if (previousBatch) {
      this._index = previousBatch.index + 1;
      this._continuation = previousBatch.continuationForNextBatch();
      this._previousBatch = previousBatch;
    } else {
      // First batch
      this._index = 0;
    }
  }

  // throws NotLoadedError if not available


  _createClass(ObjIdQueryBatch, [{
    key: 'objIds',
    value: function objIds() {
      return this._response().results;
    }
  }, {
    key: 'count',
    value: function count() {
      return this._response().total || 0;
    }

    // returns the next batch or undefined if this is the last batch
    // throws NotLoadedError if not available

  }, {
    key: 'nextBatch',
    value: function nextBatch() {
      if (this.continuationForNextBatch()) {
        return new ObjIdQueryBatch(this._params, this._batchSize, this);
      }
    }
  }, {
    key: 'continuationForNextBatch',
    value: function continuationForNextBatch() {
      return this._response().continuation;
    }
  }, {
    key: '_response',
    value: function _response() {
      return this._data().get() || FALLBACK_RESPONSE;
    }
  }, {
    key: '_data',
    value: function _data() {
      var _this = this;

      return new _loadable_data2.default({
        state: stateContainer(this._params, this._index),
        loader: function loader() {
          return _this._load();
        },
        invalidation: invalidationFn(this._continuation)
      });
    }
  }, {
    key: '_load',
    value: function _load() {
      var _this2 = this;

      return this._fetchContinuation().then(function (continuation) {
        var batchSpecificParams = { size: _this2._batchSize, continuation: continuation };

        var requestParams = (0, _underscore.extend)({}, _this2._params, batchSpecificParams);

        return ObjQueryRetrieval.retrieve(requestParams).then(function (response) {
          preloadObjData(response.results);

          return response;
        });
      });
    }
  }, {
    key: '_fetchContinuation',
    value: function _fetchContinuation() {
      var _this3 = this;

      if (this._previousBatch) {
        return (0, _load3.default)(function () {
          return _this3._previousBatch.continuationForNextBatch();
        });
      }

      return scrivito.Promise.resolve();
    }
  }, {
    key: 'index',
    get: function get() {
      return this._index;
    }
  }]);

  return ObjIdQueryBatch;
}();

exports.default = ObjIdQueryBatch;


function preloadObjData(ids) {
  (0, _underscore.each)(ids, function (id) {
    return ObjDataStore.preload(id);
  });
}

function stateContainer(params, index) {
  var paramsWithIndex = (0, _underscore.extend)({}, params, { index: index });
  var key = ObjQueryStore.computeCacheKey(paramsWithIndex);

  return ObjQueryStore.stateContainer().subState(key);
}

function invalidationFn(continuation) {
  return function () {
    return continuation + '|' + scrivito.ObjReplication.getWorkspaceVersion();
  };
}

function backendOrderedHitsParams(params) {
  var backendParams = (0, _underscore.omit)({
    query: params.query,
    offset: params.offset,
    sort_by: params.sortBy,
    sort_order: params.sortDirection
  }, _underscore.isUndefined);

  if (params.includeDeleted) {
    backendParams.options = { include_deleted: true };
  }

  return backendParams;
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function retrieve(params) {
  var workspaceId = scrivito.currentWorkspaceId();
  var consistentParams = _underscore2.default.extend({ consistent: true }, params);
  return scrivito.CmsRestApi.get('workspaces/' + workspaceId + '/objs/search', consistentParams).then(function (response) {
    response.results = _underscore2.default.pluck(response.results, 'id');
    return _underscore2.default.pick(response, 'results', 'continuation', 'total');
  });
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _obj_data_store = __webpack_require__(30);

var ObjDataStore = _interopRequireWildcard(_obj_data_store);

var _obj_id_query = __webpack_require__(52);

var _obj_id_query2 = _interopRequireDefault(_obj_id_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjDataQuery = function () {
  function ObjDataQuery(params, batchSize) {
    _classCallCheck(this, ObjDataQuery);

    this._params = params;
    this._batchSize = batchSize;
  }

  _createClass(ObjDataQuery, [{
    key: 'count',
    value: function count() {
      return _obj_id_query2.default.count(this._params);
    }
  }, {
    key: 'iterator',
    value: function iterator() {
      return new ObjDataQueryIterator(this._params, this._batchSize);
    }
  }]);

  return ObjDataQuery;
}();

exports.default = ObjDataQuery;

var ObjDataQueryIterator = function () {
  function ObjDataQueryIterator(params, batchSize) {
    _classCallCheck(this, ObjDataQueryIterator);

    this._iterator = new _obj_id_query2.default(params, batchSize).iterator();
  }

  _createClass(ObjDataQueryIterator, [{
    key: 'next',
    value: function next() {
      if (!this._iterator) {
        return { done: true };
      }

      var id = this._iterator.next().value;
      if (!id) {
        return { done: true };
      }

      var objData = ObjDataStore.get(id);

      if (objData === undefined) {
        this._iterator = undefined;

        return { done: true };
      }

      if (isFinallyDeleted(objData)) {
        return this.next();
      }

      return { value: objData, done: false };
    }
  }]);

  return ObjDataQueryIterator;
}();

function isFinallyDeleted(objData) {
  return !!objData.current._deleted;
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basic_obj_facet_value = __webpack_require__(96);

var _basic_obj_facet_value2 = _interopRequireDefault(_basic_obj_facet_value);

var _loadable_data = __webpack_require__(7);

var _loadable_data2 = _interopRequireDefault(_loadable_data);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _global_state = __webpack_require__(5);

var _errors = __webpack_require__(1);

var _pretty_print = __webpack_require__(11);

var _pretty_print2 = _interopRequireDefault(_pretty_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VALID_OPTIONS = ['limit', 'includeObjs'];

var FacetQuery = function () {
  function FacetQuery(attribute, options, searchQuery) {
    var _this = this;

    _classCallCheck(this, FacetQuery);

    assertValidOptions(options);

    this._requestParams = buildRequestParams(attribute, options, searchQuery);

    this._loadableData = new _loadable_data2.default({
      state: modelStateFor(this._requestParams),
      loader: function loader() {
        return _this._loadData();
      },
      invalidation: invalidation
    });
  }

  _createClass(FacetQuery, [{
    key: 'result',
    value: function result() {
      var restApiResult = this._loadableData.get();
      if (!restApiResult) {
        return [];
      }

      var firstFacetResult = _underscore2.default.first(restApiResult.facets);

      return _underscore2.default.map(firstFacetResult, function (rawFacetValue) {
        var name = rawFacetValue.value;
        var count = rawFacetValue.total;
        var includedObjs = rawFacetValue.results.map(function (result) {
          return result.id;
        });

        return new _basic_obj_facet_value2.default(name, count, includedObjs);
      });
    }
  }, {
    key: '_loadData',
    value: function _loadData() {
      var workspaceId = scrivito.currentWorkspaceId();
      return scrivito.CmsRestApi.get('workspaces/' + workspaceId + '/objs/search', this._requestParams);
    }
  }], [{
    key: 'store',
    value: function store(attribute, options, searchQuery, cmsRestApiResponse) {
      assertValidOptions(options);

      var requestParams = buildRequestParams(attribute, options, searchQuery);
      var loadableData = new _loadable_data2.default({
        state: modelStateFor(requestParams),
        invalidation: invalidation,
        throwNotLoaded: true
      });
      loadableData.set(cmsRestApiResponse);
    }
  }]);

  return FacetQuery;
}();

exports.default = FacetQuery;


function invalidation() {
  return scrivito.ObjReplication.getWorkspaceVersion();
}

function modelStateFor(requestParams) {
  var subStateKey = scrivito.computeCacheKey(requestParams);
  return _global_state.cmsState.subState('facetQuery').subState(subStateKey);
}

function assertValidOptions(options) {
  var invalidOptions = _underscore2.default.without.apply(_underscore2.default, [_underscore2.default.keys(options)].concat(VALID_OPTIONS));
  if (invalidOptions.length) {
    throw new _errors.ArgumentError('Invalid options: ' + ((0, _pretty_print2.default)(invalidOptions) + '. Valid options: ' + VALID_OPTIONS));
  }
}

function buildRequestParams(attribute, options, searchQuery) {
  var requestParams = {
    facets: [{
      attribute: attribute,
      limit: options.limit || 10,
      include_objs: options.includeObjs || 0
    }],
    size: 0
  };
  if (searchQuery && searchQuery.length) {
    requestParams.query = searchQuery;
  }

  return requestParams;
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasicObjFacetValue = function () {
  function BasicObjFacetValue(name, count, includedObjs) {
    _classCallCheck(this, BasicObjFacetValue);

    this._name = name;
    this._count = count;
    this._includedObjs = includedObjs;
  }

  _createClass(BasicObjFacetValue, [{
    key: 'name',
    value: function name() {
      return this._name;
    }
  }, {
    key: 'count',
    value: function count() {
      return this._count;
    }
  }, {
    key: 'includedObjs',
    value: function includedObjs() {
      return _basic_obj2.default.get(this._includedObjs);
    }
  }]);

  return BasicObjFacetValue;
}();

exports.default = BasicObjFacetValue;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function randomHex() {
  var hex = Math.floor(Math.random() * Math.pow(16, 8)).toString(16);
  while (hex.length < 8) {
    hex = "0" + hex;
  }
  return hex;
}

function randomId() {
  return randomHex() + randomHex();
}

exports.randomId = randomId;
exports.randomHex = randomHex;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _widget_factory = __webpack_require__(99);

var _widget_factory2 = _interopRequireDefault(_widget_factory);

var _obj_search_factory = __webpack_require__(100);

var _obj_search_factory2 = _interopRequireDefault(_obj_search_factory);

var _obj_factory = __webpack_require__(101);

var _obj_factory2 = _interopRequireDefault(_obj_factory);

var _link_factory = __webpack_require__(102);

var _link_factory2 = _interopRequireDefault(_link_factory);

var _registry = __webpack_require__(103);

var _registry2 = _interopRequireDefault(_registry);

var _app_model_accessor = __webpack_require__(37);

var _app_model_accessor2 = _interopRequireDefault(_app_model_accessor);

var _app_class_api = __webpack_require__(104);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Realm = function () {
  _createClass(Realm, null, [{
    key: 'init',
    value: function init(context) {
      var realm = new Realm();

      context.Obj = realm.Obj;
      context.Widget = realm.Widget;
      context.Link = realm.Link;
      context.ObjSearch = realm.ObjSearch;
      context.appModelAccessor = realm.appModelAccessor;
      context.provideObjClass = function () {
        return realm.provideObjClass.apply(realm, arguments);
      };
      context.provideWidgetClass = function () {
        return realm.provideWidgetClass.apply(realm, arguments);
      };
      context.createObjClass = function () {
        return realm.createObjClass.apply(realm, arguments);
      };
      context.createWidgetClass = function () {
        return realm.createWidgetClass.apply(realm, arguments);
      };
      context.getClass = function () {
        return realm.getClass.apply(realm, arguments);
      };

      context.allObjClasses = function () {
        return realm.allObjClasses();
      };
      context.allWidgetClasses = function () {
        return realm.allWidgetClasses();
      };

      context._privateRealm = realm;

      return realm;
    }
  }]);

  function Realm() {
    _classCallCheck(this, Realm);

    this._registry = new _registry2.default();
    this._registry.defaultClassForObjs = (0, _obj_factory2.default)(this._registry);
    this._registry.defaultClassForWidgets = (0, _widget_factory2.default)(this._registry);
    this._registry.defaultClassForLinks = (0, _link_factory2.default)(this._registry);
    this._registry.ObjSearch = (0, _obj_search_factory2.default)(this._registry);

    this.appModelAccessor = new _app_model_accessor2.default(this._registry);
  }

  _createClass(Realm, [{
    key: 'provideObjClass',


    // public API
    value: function provideObjClass(name, definition) {
      return (0, _app_class_api.provideObjClass)(this._registry, name, definition);
    }

    // public API

  }, {
    key: 'provideWidgetClass',
    value: function provideWidgetClass(name, definition) {
      return (0, _app_class_api.provideWidgetClass)(this._registry, name, definition);
    }

    // public API

  }, {
    key: 'createObjClass',
    value: function createObjClass(definition) {
      return (0, _app_class_api.createObjClass)(this._registry, definition);
    }

    // public API

  }, {
    key: 'createWidgetClass',
    value: function createWidgetClass(definition) {
      return (0, _app_class_api.createWidgetClass)(this._registry, definition);
    }

    // public API

  }, {
    key: 'getClass',
    value: function getClass(name) {
      return this._registry.getClass(name);
    }
  }, {
    key: 'allObjClasses',
    value: function allObjClasses() {
      return this._registry.allObjClasses();
    }
  }, {
    key: 'allWidgetClasses',
    value: function allWidgetClasses() {
      return this._registry.allWidgetClasses();
    }
  }, {
    key: 'setInitialContentFor',
    value: function setInitialContentFor(initialContentFor) {
      this._registry.setInitialContentFor(initialContentFor);
    }
  }, {
    key: 'Obj',
    get: function get() {
      return this._registry.defaultClassForObjs;
    }
  }, {
    key: 'Widget',
    get: function get() {
      return this._registry.defaultClassForWidgets;
    }
  }, {
    key: 'Link',
    get: function get() {
      return this._registry.defaultClassForLinks;
    }
  }, {
    key: 'ObjSearch',
    get: function get() {
      return this._registry.ObjSearch;
    }
  }]);

  return Realm;
}();

exports.default = Realm;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = WidgetFactory;

var _underscore = __webpack_require__(0);

var _schema = __webpack_require__(10);

var _schema2 = _interopRequireDefault(_schema);

var _basic_widget = __webpack_require__(12);

var _basic_widget2 = _interopRequireDefault(_basic_widget);

var _errors = __webpack_require__(1);

var _app_model_accessor = __webpack_require__(37);

var _app_model_accessor2 = _interopRequireDefault(_app_model_accessor);

var _attribute_content_factory = __webpack_require__(58);

var _attribute_content_factory2 = _interopRequireDefault(_attribute_content_factory);

var _initial_attributes_for = __webpack_require__(59);

var _initial_attributes_for2 = _interopRequireDefault(_initial_attributes_for);

var _wrap_in_app_class = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function WidgetFactory(registry) {
  var appModelAccessor = new _app_model_accessor2.default(registry);

  // public API

  var Widget = function (_AttributeContentFact) {
    _inherits(Widget, _AttributeContentFact);

    // public API
    function Widget(attributes) {
      _classCallCheck(this, Widget);

      var _this = _possibleConstructorReturn(this, (Widget.__proto__ || Object.getPrototypeOf(Widget)).call(this));

      var attributesForConstructor = _this._prepareAttributesForConstructor(attributes);
      var basicWidget = new _basic_widget2.default(attributesForConstructor);

      _this._scrivitoPrivateContent = basicWidget;
      return _this;
    }

    // public API


    _createClass(Widget, [{
      key: 'obj',
      value: function obj() {
        var basicObj = this._scrivitoPrivateContent.obj();
        return (0, _wrap_in_app_class.wrapInAppClass)(registry, basicObj);
      }

      // public API

    }, {
      key: 'copy',
      value: function copy() {
        var appClass = registry.widgetClassFor(this.objClass());
        var basicWidget = this._scrivitoPrivateContent.copy();

        return (0, _wrap_in_app_class.buildAppClassInstance)(basicWidget, appClass);
      }
    }, {
      key: '_prepareAttributesForConstructor',
      value: function _prepareAttributesForConstructor(appAttributes) {
        var appClassName = registry.objClassNameFor(this.constructor);
        var schema = _schema2.default.forInstance(this);

        assertValidConstructorAttributes(appClassName, appAttributes);

        var initialAttributes = (0, _initial_attributes_for2.default)(appAttributes, registry, schema, appClassName);
        var systemAttributes = { _objClass: appClassName };
        var constructorAttributes = (0, _underscore.extend)({}, appAttributes, initialAttributes, systemAttributes);

        return (0, _wrap_in_app_class.unwrapAppAttributes)(constructorAttributes, schema, appClassName);
      }
    }]);

    return Widget;
  }((0, _attribute_content_factory2.default)(appModelAccessor));

  return Widget;
}

function assertValidConstructorAttributes(appClassName, attributes) {
  if (!appClassName) {
    throw new _errors.ArgumentError('Creating widgets is not supported for the class Widget or abstract classes.');
  }

  if (attributes.constructor !== Object) {
    throw new _errors.ArgumentError('The provided attributes are invalid. They have ' + 'to be an Object with valid Scrivito attribute values.');
  }

  if (attributes._objClass) {
    throw new _errors.ArgumentError('Invalid attribute "_objClass". ' + ('"new ' + attributes._objClass + '" will automatically set the CMS object class correctly.'));
  }
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = ObjSearchFactory;

var _iterable = __webpack_require__(53);

var _basic_obj_search = __webpack_require__(26);

var _basic_obj_search2 = _interopRequireDefault(_basic_obj_search);

var _obj_facet_value = __webpack_require__(56);

var _obj_facet_value2 = _interopRequireDefault(_obj_facet_value);

var _wrap_in_app_class = __webpack_require__(6);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ObjSearchFactory(registry) {
  // public API
  var ObjSearch = function () {
    function ObjSearch(params) {
      _classCallCheck(this, ObjSearch);

      this._scrivitoPrivateContent = new _basic_obj_search2.default(params);
    }

    // public API


    _createClass(ObjSearch, [{
      key: 'and',
      value: function and(attributeOrSearch, operator, value) {
        var boost = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        if (attributeOrSearch instanceof ObjSearch) {
          this._scrivitoPrivateContent.and(attributeOrSearch._scrivitoPrivateContent);
        } else {
          var unwrappedValue = (0, _wrap_in_app_class.unwrapAppClassValues)(value);
          this._scrivitoPrivateContent.and(attributeOrSearch, operator, unwrappedValue, boost);
        }
        return this;
      }

      // public API

    }, {
      key: 'andNot',
      value: function andNot(attribute, operator, value) {
        var unwrappedValue = (0, _wrap_in_app_class.unwrapAppClassValues)(value);
        this._scrivitoPrivateContent.andNot(attribute, operator, unwrappedValue);
        return this;
      }

      // public API

    }, {
      key: 'facet',
      value: function facet(attribute) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var result = this._scrivitoPrivateContent.facet(attribute, options);
        return _underscore2.default.map(result, function (facetValue) {
          return new _obj_facet_value2.default(registry, facetValue);
        });
      }

      // public API

    }, {
      key: 'take',
      value: function take(count) {
        this._scrivitoPrivateContent.batchSize(count);
        var results = (0, _iterable.arrayFromIterable)(this._scrivitoPrivateContent, count);

        return results.map(function (result) {
          return (0, _wrap_in_app_class.wrapInAppClass)(registry, result);
        });
      }

      // public API

    }, {
      key: 'offset',
      value: function offset(_offset) {
        this._scrivitoPrivateContent.offset(_offset);
        return this;
      }

      // public API

    }, {
      key: 'order',
      value: function order(attribute, direction) {
        this._scrivitoPrivateContent.order(attribute, direction);
        return this;
      }

      // public API

    }, {
      key: 'count',
      value: function count() {
        return this._scrivitoPrivateContent.count();
      }
    }]);

    return ObjSearch;
  }();

  // check if the environment supports ES6 iterables
  // (either native or through some kind of polyfill)
  // if yes, make ObjSearch an ES6 iterable.


  if (typeof window.Symbol === 'function') {
    var iteratorSymbol = window.Symbol.iterator;
    if (iteratorSymbol) {
      var proto = ObjSearch.prototype;
      // public API
      proto[iteratorSymbol] = function iterator() {
        var basicObjsIterator = this._scrivitoPrivateContent.iterator();

        return {
          next: function next() {
            var _basicObjsIterator$ne = basicObjsIterator.next(),
                done = _basicObjsIterator$ne.done,
                value = _basicObjsIterator$ne.value;

            if (done) {
              return { done: done };
            }

            return { done: done, value: (0, _wrap_in_app_class.wrapInAppClass)(registry, value) };
          }
        };
      };
    }
  }

  return ObjSearch;
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = ObjFactory;

var _underscore = __webpack_require__(0);

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _schema = __webpack_require__(10);

var _schema2 = _interopRequireDefault(_schema);

var _errors = __webpack_require__(1);

var _app_model_accessor = __webpack_require__(37);

var _app_model_accessor2 = _interopRequireDefault(_app_model_accessor);

var _wrap_in_app_class = __webpack_require__(6);

var _metadata_collection = __webpack_require__(55);

var _metadata_collection2 = _interopRequireDefault(_metadata_collection);

var _attribute_content_factory = __webpack_require__(58);

var _attribute_content_factory2 = _interopRequireDefault(_attribute_content_factory);

var _initial_attributes_for = __webpack_require__(59);

var _initial_attributes_for2 = _interopRequireDefault(_initial_attributes_for);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ObjFactory(registry) {
  var appModelAccessor = new _app_model_accessor2.default(registry);

  function buildObjSearch(objClassName, batchSize) {
    var search = new registry.ObjSearch();
    if (objClassName) {
      search.and('_objClass', 'equals', objClassName);
    }
    if (batchSize) {
      search._scrivitoPrivateContent.batchSize(batchSize);
    }

    return search;
  }

  function wrap(response) {
    return (0, _wrap_in_app_class.wrapInAppClass)(registry, response);
  }

  // public API

  var Obj = function (_AttributeContentFact) {
    _inherits(Obj, _AttributeContentFact);

    function Obj() {
      _classCallCheck(this, Obj);

      return _possibleConstructorReturn(this, (Obj.__proto__ || Object.getPrototypeOf(Obj)).apply(this, arguments));
    }

    _createClass(Obj, [{
      key: 'lastChanged',


      // public API
      value: function lastChanged() {
        return this._scrivitoPrivateContent.lastChanged();
      }

      // public API

    }, {
      key: 'path',
      value: function path() {
        return this._scrivitoPrivateContent.path();
      }

      // public API

    }, {
      key: 'parent',
      value: function parent() {
        return wrap(this._scrivitoPrivateContent.parent());
      }

      // public API

    }, {
      key: 'ancestors',
      value: function ancestors() {
        return wrap(this._scrivitoPrivateContent.ancestors());
      }

      // public API

    }, {
      key: 'backlinks',
      value: function backlinks() {
        return wrap(this._scrivitoPrivateContent.backlinks());
      }

      // public API

    }, {
      key: 'children',
      value: function children() {
        return wrap(this._scrivitoPrivateContent.children());
      }
    }, {
      key: 'orderedChildren',
      value: function orderedChildren() {
        return wrap(this._scrivitoPrivateContent.orderedChildren());
      }

      // public API

    }, {
      key: 'permalink',
      value: function permalink() {
        return this._scrivitoPrivateContent.permalink();
      }

      // public API

    }, {
      key: 'slug',
      value: function slug() {
        return this._scrivitoPrivateContent.slug();
      }

      // public API

    }, {
      key: 'isBinary',
      value: function isBinary() {
        var schema = _schema2.default.forInstance(this);
        if (!schema) {
          return false;
        }

        return schema.isBinary();
      }

      // public API

    }, {
      key: 'contentLength',
      value: function contentLength() {
        if (this.isBinary()) {
          return this._scrivitoPrivateContent.contentLength();
        }
        return 0;
      }

      // public API

    }, {
      key: 'contentType',
      value: function contentType() {
        if (this.isBinary()) {
          return this._scrivitoPrivateContent.contentType();
        }
        return '';
      }

      // public API

    }, {
      key: 'contentUrl',
      value: function contentUrl() {
        if (this.isBinary()) {
          return this._scrivitoPrivateContent.contentUrl();
        }
        return '';
      }

      // public API

    }, {
      key: 'metadata',
      value: function metadata() {
        if (this.isBinary()) {
          return this._scrivitoPrivateContent.metadata();
        }
        return new _metadata_collection2.default();
      }

      // public API

    }, {
      key: 'destroy',
      value: function destroy() {
        this._scrivitoPrivateContent.destroy();
      }

      // public API

    }, {
      key: 'widget',
      value: function widget(id) {
        return wrap(this._scrivitoPrivateContent.widget(id));
      }

      // public API

    }, {
      key: 'widgets',
      value: function widgets() {
        return wrap(this._scrivitoPrivateContent.widgets());
      }
    }], [{
      key: 'get',

      // public API
      value: function get(id) {
        return appModelAccessor.getObj(this, id);
      }

      // public API

    }, {
      key: 'getIncludingDeleted',
      value: function getIncludingDeleted(id) {
        return appModelAccessor.getObjIncludingDeleted(this, id);
      }

      // public API

    }, {
      key: 'getByPath',
      value: function getByPath(path) {
        return wrap(_basic_obj2.default.getByPath(path));
      }

      // public API

    }, {
      key: 'getByPermalink',
      value: function getByPermalink(permalink) {
        return wrap(_basic_obj2.default.getByPermalink(permalink));
      }

      // public API

    }, {
      key: 'all',
      value: function all() {
        var objClassName = registry.objClassNameFor(this);
        return buildObjSearch(objClassName, 1000);
      }

      // public API

    }, {
      key: 'root',
      value: function root() {
        return wrap(_basic_obj2.default.root());
      }

      // public API

    }, {
      key: 'where',
      value: function where(attribute, operator, value) {
        var boost = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        var objClassName = registry.objClassNameFor(this);
        return buildObjSearch(objClassName).and(attribute, operator, value, boost);
      }

      // public API

    }, {
      key: 'create',
      value: function create(attributes) {
        var attributesForCreate = this._prepareAttributesForCreate(attributes);
        var basicObj = _basic_obj2.default.create(attributesForCreate);

        return wrap(basicObj);
      }
    }, {
      key: '_prepareAttributesForCreate',
      value: function _prepareAttributesForCreate(appAttributes) {
        var appClassName = registry.objClassNameFor(this);
        var schema = _schema2.default.forClass(this);

        assertValidCreateAttributes(appAttributes, appClassName);

        var initialAttributes = (0, _initial_attributes_for2.default)(appAttributes, registry, schema, appClassName);
        var systemAttributes = { _objClass: appClassName };
        var createAttributes = (0, _underscore.extend)({}, appAttributes, initialAttributes, systemAttributes);

        return (0, _wrap_in_app_class.unwrapAppAttributes)(createAttributes, schema, appClassName);
      }
    }]);

    return Obj;
  }((0, _attribute_content_factory2.default)(appModelAccessor));

  return Obj;
}

function assertValidCreateAttributes(attributes, appClassName) {
  if (!appClassName) {
    throw new _errors.ArgumentError('Creating CMS objects is not supported for the class Obj or abstract classes.');
  }

  if (attributes.constructor !== Object) {
    throw new _errors.ArgumentError('The provided attributes are invalid. They have ' + 'to be an Object with valid Scrivito attribute values.');
  }

  if (attributes._objClass) {
    throw new _errors.ArgumentError('Invalid attribute "_objClass". ' + ('"' + attributes._objClass + '.create" will automatically set the CMS object class ') + 'correctly.');
  }
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = LinkFactory;

var _basic_link = __webpack_require__(15);

var _basic_link2 = _interopRequireDefault(_basic_link);

var _wrap_in_app_class = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function LinkFactory(registry) {
  // public API
  var Link = function (_BasicLink) {
    _inherits(Link, _BasicLink);

    // public API
    function Link(attributes) {
      _classCallCheck(this, Link);

      return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, attributes));
    }

    // public API


    _createClass(Link, [{
      key: 'obj',
      value: function obj() {
        return (0, _wrap_in_app_class.wrapInAppClass)(registry, _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), 'obj', this).call(this));
      }
    }, {
      key: 'fetchObj',
      value: function fetchObj(id) {
        return _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), 'fetchObj', this).call(this, id).then(function (basicObj) {
          return (0, _wrap_in_app_class.wrapInAppClass)(registry, basicObj);
        });
      }
    }, {
      key: '_scrivitoPrivateContent',
      get: function get() {
        return _basic_link2.default.build(this.buildAttributes());
      }
    }]);

    return Link;
  }(_basic_link2.default);

  return Link;
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Registry = function () {
  function Registry() {
    _classCallCheck(this, Registry);

    this._mapping = {};
  }

  _createClass(Registry, [{
    key: 'register',
    value: function register(name, klass) {
      this._mapping[name] = klass;
    }
  }, {
    key: 'getClass',
    value: function getClass(name) {
      return this._mapping[name];
    }
  }, {
    key: 'allObjClasses',
    value: function allObjClasses() {
      return this._allForBaseClass(this.defaultClassForObjs);
    }
  }, {
    key: 'allWidgetClasses',
    value: function allWidgetClasses() {
      return this._allForBaseClass(this.defaultClassForWidgets);
    }
  }, {
    key: 'objClassFor',
    value: function objClassFor(name) {
      return this._appClassFor(name, this.defaultClassForObjs);
    }
  }, {
    key: 'widgetClassFor',
    value: function widgetClassFor(name) {
      return this._appClassFor(name, this.defaultClassForWidgets);
    }
  }, {
    key: 'objClassNameFor',
    value: function objClassNameFor(modelClass) {
      return _underscore2.default.findKey(this._mapping, function (klass) {
        return klass === modelClass;
      });
    }
  }, {
    key: 'setInitialContentFor',
    value: function setInitialContentFor(initialContentFor) {
      this._initialContentFor = initialContentFor;
    }
  }, {
    key: 'initialContentFor',
    value: function initialContentFor(className, attributeName) {
      if (this._initialContentFor) {
        return this._initialContentFor(className, attributeName);
      }
    }
  }, {
    key: '_appClassFor',
    value: function _appClassFor(name, baseClass) {
      var appClass = this.getClass(name);

      if (appClass && baseClass.isPrototypeOf(appClass)) {
        return appClass;
      }

      return baseClass;
    }
  }, {
    key: '_allForBaseClass',
    value: function _allForBaseClass(baseClass) {
      return _underscore2.default.pick(this._mapping, function (modelClass) {
        return baseClass.isPrototypeOf(modelClass);
      });
    }
  }]);

  return Registry;
}();

exports.default = Registry;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provideWidgetClass = exports.provideObjClass = exports.createWidgetClass = exports.createObjClass = undefined;

var _underscore = __webpack_require__(0);

var _app_class_factory = __webpack_require__(105);

var _app_class_factory2 = _interopRequireDefault(_app_class_factory);

var _app_class_validations = __webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createObjClass(registry, definition) {
  var defaultBaseClass = registry.defaultClassForObjs;
  (0, _app_class_validations.assertValidObjClassDefinition)(definition, defaultBaseClass);

  return createAppClass(definition, defaultBaseClass);
}

function createWidgetClass(registry, definition) {
  var defaultBaseClass = registry.defaultClassForWidgets;
  (0, _app_class_validations.assertValidWidgetClassDefinition)(definition, defaultBaseClass);

  return createAppClass(prepareWidgetClassDefinition(definition), defaultBaseClass);
}

function provideObjClass(registry, name, appClassOrDefinition) {
  if (isAppClass(appClassOrDefinition)) {
    return registry.register(name, appClassOrDefinition);
  }

  var defaultBaseClass = registry.defaultClassForObjs;
  (0, _app_class_validations.assertValidObjClassDefinition)(appClassOrDefinition, defaultBaseClass);

  return provideAppClass(registry, name, appClassOrDefinition, defaultBaseClass);
}

function provideWidgetClass(registry, name, appClassOrDefinition) {
  if (isAppClass(appClassOrDefinition)) {
    return registry.register(name, appClassOrDefinition);
  }

  var defaultBaseClass = registry.defaultClassForWidgets;
  (0, _app_class_validations.assertValidWidgetClassDefinition)(appClassOrDefinition, defaultBaseClass);

  return provideAppClass(registry, name, prepareWidgetClassDefinition(appClassOrDefinition), defaultBaseClass);
}

function prepareWidgetClassDefinition(definition) {
  var preparedDefinition = (0, _underscore.extend)({}, definition);
  var onlyInside = definition.onlyInside;

  if (onlyInside) {
    delete preparedDefinition.onlyInside;
    preparedDefinition.validContainerClasses = [onlyInside];
  }

  return preparedDefinition;
}

function provideAppClass(registry, name, definition, defaultBaseClass) {
  var appClass = createAppClass((0, _underscore.extend)(definition, { name: name }), defaultBaseClass);
  registry.register(name, appClass);

  return appClass;
}

function createAppClass(definition, defaultBaseClass) {
  var baseClass = definition.extend || defaultBaseClass;
  return (0, _app_class_factory2.default)(definition, baseClass);
}

function isAppClass(object) {
  return !!(object && object._scrivitoPrivateSchema);
}

exports.createObjClass = createObjClass;
exports.createWidgetClass = createWidgetClass;
exports.provideObjClass = provideObjClass;
exports.provideWidgetClass = provideWidgetClass;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = AppClassFactory;

var _schema = __webpack_require__(10);

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function AppClassFactory(definition, parent) {
  var schema = new _schema2.default(definition, parent);

  return function (_parent) {
    _inherits(_class, _parent);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, null, [{
      key: '_scrivitoPrivateSchema',
      get: function get() {
        return schema;
      }
    }]);

    return _class;
  }(parent);
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertValidWidgetClassDefinition = exports.assertValidObjClassDefinition = undefined;

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _pretty_print = __webpack_require__(11);

var _pretty_print2 = _interopRequireDefault(_pretty_print);

var _attribute_inflection = __webpack_require__(16);

var _errors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var VALID_KEYS_FOR_OBJ = ['attributes', 'extend', 'name'];
var VALID_KEYS_FOR_WIDGET = ['attributes', 'extend', 'name', 'onlyInside'];

function assertValidObjClassDefinition(definition, baseClass) {
  assertDefinitionIsValid(definition, VALID_KEYS_FOR_OBJ, baseClass, 'CMS object');
}

function assertValidWidgetClassDefinition(definition, baseClass) {
  assertDefinitionIsValid(definition, VALID_KEYS_FOR_WIDGET, baseClass, 'widget');
}

function assertDefinitionIsValid(definition, validKeys, defaultBaseClass, type) {
  var invalidKeys = _underscore2.default.without.apply(_underscore2.default, [_underscore2.default.keys(definition)].concat(_toConsumableArray(validKeys)));
  if (invalidKeys.length) {
    throw new _errors.ArgumentError('Invalid key(s) ' + (0, _pretty_print2.default)(invalidKeys) + ' ' + ('given. Valid keys are ' + (0, _pretty_print2.default)(validKeys) + '.'));
  }

  assertValidAttributesHash(definition.attributes);
  var baseClass = definition.extend;
  if (baseClass && defaultBaseClass !== baseClass && !defaultBaseClass.isPrototypeOf(baseClass)) {
    throw new _errors.ArgumentError('Invalid value for "extend": not a ' + type + ' class');
  }
}

function assertValidAttributesHash(attributes) {
  if (attributes === undefined) {
    return;
  }
  if (attributes.constructor === Object) {
    _underscore2.default.each(attributes, function (typeInfo, attributeName) {
      if (!(0, _attribute_inflection.isCamelCase)(attributeName)) {
        throw new _errors.ArgumentError('Attribute "' + attributeName + '" is not in camel case.');
      }
      if (!(_underscore2.default.isArray(typeInfo) || _underscore2.default.isString(typeInfo))) {
        throw new _errors.ArgumentError('Attribute definition for "' + attributeName + '" is invalid. ' + 'Should be a String or an Array.');
      }
    });
  } else {
    throw new _errors.ArgumentError('Required key "attributes" is invalid. Should be an Object.');
  }
}

exports.assertValidObjClassDefinition = assertValidObjClassDefinition;
exports.assertValidWidgetClassDefinition = assertValidWidgetClassDefinition;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInPlaceEditingActive;

var _mount_component = __webpack_require__(61);

// public API
function isInPlaceEditingActive() {
  if (scrivito.currentWorkspaceId() === 'published') {
    return false;
  }

  if ((0, _mount_component.isComponentMounted)()) {
    return true;
  }

  if (scrivito.uiAdapter) {
    return scrivito.uiAdapter.isEditingMode();
  }

  return false;
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onElementResize;

var _is_ie = __webpack_require__(109);

var _is_ie2 = _interopRequireDefault(_is_ie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onElementResize(element, fn) {
  if (!element._scrivitoResizeListeners) {
    element._scrivitoResizeListeners = [];

    // The element has to have relative position, otherwise the object won't span the whole height.
    //
    // Unfortunately Firefox cannot compute styles of elements inside an iframe with `display:none`
    // and it reports such elements to have no styles even _after_ the iframe became visible. So we
    // cannot set position to `relative` only if it was previously `static`.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=548397.
    //
    // We always have to enforce the relative position, regardless of the previous position.
    element.style.position = 'relative';

    var object = createObject();

    object.resizeElement = element;
    element._scrivitoResizeTrigger = object;

    if ((0, _is_ie2.default)()) {
      element.appendChild(object);
    }

    object.data = 'about:blank';

    if (!(0, _is_ie2.default)()) {
      element.appendChild(object);
    }
  }

  element._scrivitoResizeListeners.push(fn);
}

function createObject() {
  var object = document.createElement('object');

  object.type = 'text/html';
  object.onload = onObjectLoad;

  object.style.display = 'block';
  object.style.position = 'absolute';
  object.style.top = 0;
  object.style.left = 0;
  object.style.height = '100%';
  object.style.width = '100%';
  object.style.overflow = 'hidden';
  object.style.pointerEvents = 'none';
  object.style.zIndex = -1;

  return object;
}

function onObjectLoad() {
  this.contentDocument.defaultView._scrivitoResizeTrigger = this.resizeElement;
  this.contentDocument.defaultView.addEventListener('resize', onResize);
}

function onResize(e) {
  var targetWindow = e.target || e.srcElement;
  var trigger = targetWindow._scrivitoResizeTrigger;

  trigger._scrivitoResizeListeners.forEach(function (fn) {
    return fn(trigger, e);
  });
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIE;
function isIE() {
  var userAgent = window.navigator.userAgent;
  return userAgent.indexOf('MSIE') >= 0 || userAgent.indexOf('Trident') >= 0;
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollWindowToTop;
function scrollWindowToTop() {
  window.scrollTo(0, 0);
}

// For test purpose only.

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _underscore = __webpack_require__(0);

var _background_image = __webpack_require__(112);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// public API
var BackgroundImageTag = function (_React$Component) {
  _inherits(BackgroundImageTag, _React$Component);

  function BackgroundImageTag() {
    _classCallCheck(this, BackgroundImageTag);

    return _possibleConstructorReturn(this, (BackgroundImageTag.__proto__ || Object.getPrototypeOf(BackgroundImageTag)).apply(this, arguments));
  }

  _createClass(BackgroundImageTag, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          Tag = _props.tag;

      var passThroughProps = (0, _underscore.omit)(this.props, 'style', 'tag');

      var _partitionStyleProper = (0, _background_image.partitionStyleProperties)(style),
          backgrounds = _partitionStyleProper.backgrounds,
          passThroughStyle = _partitionStyleProper.passThroughStyle;

      var backgroundAttachment = 'scroll';
      var backgroundImage = backgrounds.map(_background_image.backgroundStylesFor).join(',');
      var backgroundOrigin = 'padding-box';
      var backgroundPosition = 'center center';
      var backgroundRepeat = 'no-repeat';
      var backgroundSize = 'cover';

      var backgroundStyle = {
        backgroundAttachment: backgroundAttachment,
        backgroundImage: backgroundImage,
        backgroundOrigin: backgroundOrigin,
        backgroundPosition: backgroundPosition,
        backgroundRepeat: backgroundRepeat,
        backgroundSize: backgroundSize
      };

      return _react2.default.createElement(Tag, _extends({}, passThroughProps, { style: (0, _underscore.extend)(backgroundStyle, passThroughStyle) }));
    }
  }]);

  return BackgroundImageTag;
}(_react2.default.Component);

BackgroundImageTag.displayName = 'Scrivito.BackgroundImageTag';

BackgroundImageTag.defaultProps = { tag: 'div' };

exports.default = (0, _connect2.default)(BackgroundImageTag);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __webpack_require__(0);
var binary_es6_1 = __webpack_require__(9);
var scale_down_binary_1 = __webpack_require__(63);
function partitionStyleProperties(style) {
    var result = {
        backgrounds: [],
        passThroughStyle: {},
    };
    for (var key in style) {
        if (key.indexOf('background') !== 0) {
            result.passThroughStyle[key] = style[key];
        }
        else if (key === 'background') {
            var value = style[key];
            result.backgrounds = underscore_1.isArray(value) ? value : [value];
        }
    }
    return result;
}
exports.partitionStyleProperties = partitionStyleProperties;
function backgroundStylesFor(background) {
    if (isPlainBackground(background)) {
        return background.image;
    }
    else if (background.image instanceof binary_es6_1.default) {
        return "url(" + scale_down_binary_1.default(background.image).url() + ")";
    }
    else if (background.image) {
        return "url(" + scale_down_binary_1.default(background.image.get('blob')).url() + ")";
    }
    return 'none';
}
exports.backgroundStylesFor = backgroundStylesFor;
function isPlainBackground(background) {
    return underscore_1.isString(background.image);
}


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isClassComponent;
function isClassComponent(component) {
    return typeof component === 'function' && component.prototype && component.prototype.isReactComponent;
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _is_editing_mode = __webpack_require__(28);

var _is_editing_mode2 = _interopRequireDefault(_is_editing_mode);

var _underscore = __webpack_require__(0);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _current_page = __webpack_require__(17);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

var _child_item = __webpack_require__(115);

var _child_item2 = _interopRequireDefault(_child_item);

var _menu_marker = __webpack_require__(118);

var _menu_marker2 = _interopRequireDefault(_menu_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChildListTag = function (_React$Component) {
  _inherits(ChildListTag, _React$Component);

  function ChildListTag(props) {
    _classCallCheck(this, ChildListTag);

    var _this = _possibleConstructorReturn(this, (ChildListTag.__proto__ || Object.getPrototypeOf(ChildListTag)).call(this, props));

    _this.state = { hasFocus: false };

    _this._onMouseOver = _this._onMouseOver.bind(_this);
    _this._onMouseOut = _this._onMouseOut.bind(_this);
    return _this;
  }

  _createClass(ChildListTag, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var parent = this.props.parent || (0, _current_page.currentPage)();

      if (!parent) {
        return null;
      }

      parent = parent._scrivitoPrivateContent;

      var props = (0, _underscore.omit)(this.props, 'parent', 'tag', 'renderChild');

      var menuMarker = void 0;

      if ((0, _is_editing_mode2.default)()) {
        props.onMouseOver = this._onMouseOver;
        props.onMouseOut = this._onMouseOut;

        props['data-scrivito-private-child-list-path'] = true;

        if (this.state.hasFocus) {
          props.className = 'scrivito_active scrivito_entered ' + props.className;
        }

        menuMarker = _react2.default.createElement(_menu_marker2.default, {
          key: 'menuMarker',
          parent: parent
        });
      }

      return _react2.default.createElement(this.props.tag, props, [menuMarker].concat(_toConsumableArray(parent.orderedChildren().map(function (child) {
        return _react2.default.createElement(_child_item2.default, {
          key: child.id(),
          child: child,
          renderChild: _this2.props.renderChild
        });
      }))));
    }
  }, {
    key: '_onMouseOver',
    value: function _onMouseOver(e) {
      e.stopPropagation();
      this.setState({ hasFocus: true });
    }
  }, {
    key: '_onMouseOut',
    value: function _onMouseOut(e) {
      e.stopPropagation();
      this.setState({ hasFocus: false });
    }
  }]);

  return ChildListTag;
}(_react2.default.Component);

ChildListTag.displayName = 'Scrivito.ChildListTag';

ChildListTag.defaultProps = { tag: 'ul' };

exports.default = (0, _connect2.default)(ChildListTag);

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _window_context = __webpack_require__(13);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

var _link_tag = __webpack_require__(65);

var _link_tag2 = _interopRequireDefault(_link_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChildItem(_ref) {
  var basicObj = _ref.child,
      renderChild = _ref.renderChild;

  var appObj = (0, _window_context.getWindowContext)().appModelAccessor.wrapInAppClass(basicObj);

  if (renderChild) {
    return renderChild(appObj);
  }

  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      _link_tag2.default,
      { to: appObj },
      basicObj.get('title', 'string')
    )
  );
}

ChildItem.displayName = 'Scrivito.ChildListTag.ChildItem';

exports.default = (0, _connect2.default)(ChildItem);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.tcomb = undefined;

var _tcomb = __webpack_require__(8);

var _tcombReact = __webpack_require__(117);

exports.tcomb = _tcomb.tcomb;
exports.propTypes = _tcombReact.propTypes;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = undefined;

var _tcomb = __webpack_require__(8);

// original contains more newlines
function getMessage(errors, what, displayName, type) {
  var intro = ['Invalid ' + what + ' supplied to ' + displayName + ', should be a ' + _tcomb.tcomb.getTypeName(type) + '.', 'Detected errors (' + errors.length + '):'];
  return intro.concat(errors.map(function (e, i) {
    return ' ' + (i + 1) + '. ' + e.message;
  })).join('\n');
}

function typeFromInputType(type) {
  if (_tcomb.tcomb.Object.is(type)) {
    return _tcomb.tcomb.struct(type);
  }
  return type;
}

// original contains NODE_ENV conditions, which disables the propType check
// effectively already at package build time.
function getPropTypes(inputType, options) {
  var type = typeFromInputType(inputType);

  var isSubtype = type.meta.kind === 'subtype';

  _tcomb.tcomb.assert(_tcomb.tcomb.isType(type), 'Invalid argument type supplied to propTypes()');

  var propTypes = {};
  var innerType = isSubtype ? type.meta.type : type;

  if (innerType.meta.kind === 'struct' || innerType.meta.kind === 'interface') {
    var props = innerType.meta.props;

    Object.keys(props).forEach(function (k) {
      var propType = props[k];

      var checkPropType = function checkPropType(values, prop, displayName) {
        var value = values[prop];
        var validationResult = _tcomb.tcomb.validate(value, propType);

        if (!validationResult.isValid()) {
          var message = getMessage(validationResult.errors, 'prop ' + _tcomb.tcomb.stringify(prop), displayName, propType);

          checkPropType.displayName = message;

          _tcomb.tcomb.fail(message);
        }
      };

      checkPropType.tcomb = propType;

      propTypes[k] = checkPropType;
    });

    if (!(options && options.strict === false)) {
      propTypes.__strict__ = function (values, _, displayName) {
        var extra = [];
        for (var k in values) {
          if (k !== '__strict__' && k !== '__subtype__' && values.hasOwnProperty(k) && !props.hasOwnProperty(k)) {
            extra.push(k);
          }
        }
        if (extra.length > 0) {
          var names = _tcomb.tcomb.stringify(extra);
          _tcomb.tcomb.fail('Invalid additional prop(s):\n\n' + names + '\n\nsupplied to ' + displayName + '.');
        }
      };
    }
  } else {
    propTypes.__generictype__ = function (values, _, displayName) {
      var validationResult = _tcomb.tcomb.validate(values, innerType);
      if (!validationResult.isValid()) {
        _tcomb.tcomb.fail(getMessage(validationResult.errors, 'props', displayName, innerType));
      }
    };
  }

  if (isSubtype) {
    propTypes.__subtype__ = function (values, _, displayName) {
      if (!type.meta.predicate(values)) {
        _tcomb.tcomb.fail('Invalid props:\n\n ' + _tcomb.tcomb.stringify(values) + '\n\nsupplied to ' + displayName + (', should be a ' + _tcomb.tcomb.getTypeName(type) + '.'));
      }
    };

    propTypes.__subtype__.predicate = type.meta.predicate;
  }

  return propTypes;
}

var propTypes = exports.propTypes = getPropTypes;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuMarker = function (_React$Component) {
  _inherits(MenuMarker, _React$Component);

  function MenuMarker(props) {
    _classCallCheck(this, MenuMarker);

    var _this = _possibleConstructorReturn(this, (MenuMarker.__proto__ || Object.getPrototypeOf(MenuMarker)).call(this, props));

    _this._onClick = _this._onClick.bind(_this);
    return _this;
  }

  _createClass(MenuMarker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'span',
        {
          ref: function ref(menuMarker) {
            return _this2._menuMarker = menuMarker;
          },
          className: 'scrivito_editing_marker',
          onClick: this._onClick
        },
        _react2.default.createElement('i', { className: 'scrivito_icon' }),
        _react2.default.createElement(
          'span',
          { className: 'scrivito_editing_marker_title' },
          this.props.parent.objClass()
        )
      );
    }
  }, {
    key: '_onClick',
    value: function _onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      if (this._menuMarker) {
        scrivito.uiAdapter.showChildListMenu((0, _reactDom.findDOMNode)(this._menuMarker), this.props.parent.id());
      }
    }
  }]);

  return MenuMarker;
}(_react2.default.Component);

MenuMarker.displayName = 'Scrivito.ChildListTag.MenuMarker';

exports.default = (0, _connect2.default)(MenuMarker);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyForBasicContent;

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _basic_widget = __webpack_require__(12);

var _basic_widget2 = _interopRequireDefault(_basic_widget);

var _errors = __webpack_require__(1);

var _pretty_print = __webpack_require__(11);

var _pretty_print2 = _interopRequireDefault(_pretty_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function keyForBasicContent(content) {
  if (content instanceof _basic_obj2.default) {
    return content.id();
  }

  if (content instanceof _basic_widget2.default) {
    return content.obj().id() + '|' + content.id();
  }

  var formattedContent = (0, _pretty_print2.default)(content).substr(0, 100);
  throw new _errors.InternalError('keyForBasicContent called with "' + formattedContent + '". Expected an instance of' + ' BasicObj or BasicWidget.');
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _basic_url_for = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function urlForObjId(objId) {
  var obj = _basic_obj2.default.get(objId);

  if (obj) {
    return (0, _basic_url_for.basicUrlFor)(obj);
  }

  return scrivito.Routing.generateUrl({ path: objId });
}

exports.default = urlForObjId;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(70);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _errors = __webpack_require__(1);

var _wrap_in_app_class = __webpack_require__(6);

var _is_editing_mode = __webpack_require__(28);

var _is_editing_mode2 = _interopRequireDefault(_is_editing_mode);

var _window_registry = __webpack_require__(31);

var _component_registry = __webpack_require__(27);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

var _widget_tag = __webpack_require__(41);

var _widget_tag2 = _interopRequireDefault(_widget_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WidgetContent = function (_React$Component) {
  _inherits(WidgetContent, _React$Component);

  function WidgetContent(props) {
    _classCallCheck(this, WidgetContent);

    var _this = _possibleConstructorReturn(this, (WidgetContent.__proto__ || Object.getPrototypeOf(WidgetContent)).call(this, props));

    _this.state = { hasError: false };
    return _this;
  }

  _createClass(WidgetContent, [{
    key: 'componentDidCatch',
    value: function componentDidCatch() {
      this.setState({ hasError: true });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.widget.equals(nextProps.widget);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return _defineProperty({}, _widget_tag.WIDGET_TAG_CONTEXT_KEY, this.props.widget);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.hasError) {
        if ((0, _is_editing_mode2.default)()) {
          return _react2.default.createElement(
            _widget_tag2.default,
            null,
            _react2.default.createElement(
              'div',
              { className: 'content_error' },
              'Widget could not be rendered due to application error.'
            )
          );
        }

        return _react2.default.createElement(_widget_tag2.default, null);
      }

      return _react2.default.createElement(AppWidget, { widget: this.props.widget });
    }
  }]);

  return WidgetContent;
}(_react2.default.Component);

var AppWidget = function (_React$Component2) {
  _inherits(AppWidget, _React$Component2);

  function AppWidget() {
    _classCallCheck(this, AppWidget);

    return _possibleConstructorReturn(this, (AppWidget.__proto__ || Object.getPrototypeOf(AppWidget)).apply(this, arguments));
  }

  _createClass(AppWidget, [{
    key: 'render',
    value: function render() {
      var appWidget = (0, _wrap_in_app_class.wrapInAppClass)((0, _window_registry.getWindowRegistry)(), this.props.widget);
      return _react2.default.createElement(this._getAppWidgetComponent(), { widget: appWidget });
    }
  }, {
    key: '_getAppWidgetComponent',
    value: function _getAppWidgetComponent() {
      var widgetClass = this.props.widget.objClass();
      var widgetComponent = (0, _component_registry.getComponentForAppClass)(widgetClass);

      if (!widgetComponent) {
        throw new _errors.ArgumentError('No component registered for widget class "' + widgetClass + '"');
      }

      return widgetComponent;
    }
  }]);

  return AppWidget;
}(_react2.default.Component);

WidgetContent.displayName = 'Scrivito.ContentTag.WidgetContent';

WidgetContent.childContextTypes = _defineProperty({}, _widget_tag.WIDGET_TAG_CONTEXT_KEY, _propTypes2.default.object);

exports.default = (0, _connect2.default)(WidgetContent);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _extract_ids_from_content = __webpack_require__(42);

var _extract_ids_from_content2 = _interopRequireDefault(_extract_ids_from_content);

var _setup_dragstart_event = __webpack_require__(123);

var _setup_dragstart_event2 = _interopRequireDefault(_setup_dragstart_event);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuMarker = function (_React$Component) {
  _inherits(MenuMarker, _React$Component);

  function MenuMarker(props) {
    _classCallCheck(this, MenuMarker);

    var _this = _possibleConstructorReturn(this, (MenuMarker.__proto__ || Object.getPrototypeOf(MenuMarker)).call(this, props));

    _this._onClick = _this._onClick.bind(_this);
    _this._onDragStart = _this._onDragStart.bind(_this);
    _this._onDragEnd = _this._onDragEnd.bind(_this);
    return _this;
  }

  _createClass(MenuMarker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'span',
        {
          ref: function ref(menuMarker) {
            return _this2._menuMarker = menuMarker;
          },
          className: 'scrivito_editing_marker',
          onClick: this._onClick,
          onDragStart: this._onDragStart,
          onDragEnd: this._onDragEnd,
          draggable: 'true'
        },
        _react2.default.createElement('i', { className: 'scrivito_icon' }),
        _react2.default.createElement(
          'span',
          { className: 'scrivito_editing_marker_title' },
          this.props.widget.objClass()
        )
      );
    }
  }, {
    key: '_onClick',
    value: function _onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      if (this._menuMarker) {
        var _extractIdsFromConten = (0, _extract_ids_from_content2.default)(this.props.widget),
            objId = _extractIdsFromConten.objId,
            widgetId = _extractIdsFromConten.widgetId;

        scrivito.uiAdapter.showWidgetMenu((0, _reactDom.findDOMNode)(this._menuMarker), objId, widgetId);
      }
    }
  }, {
    key: '_onDragStart',
    value: function _onDragStart(e) {
      (0, _setup_dragstart_event2.default)(e);

      var _extractIdsFromConten2 = (0, _extract_ids_from_content2.default)(this.props.widget),
          objId = _extractIdsFromConten2.objId,
          widgetId = _extractIdsFromConten2.widgetId;

      scrivito.uiAdapter.onDragStart(objId, widgetId);

      this.props.setDragState(true);
    }
  }, {
    key: '_onDragEnd',
    value: function _onDragEnd() {
      scrivito.uiAdapter.onDragEnd();
      this.props.setDragState(false);
    }
  }]);

  return MenuMarker;
}(_react2.default.Component);

MenuMarker.displayName = 'Scrivito.ContentTag.MenuMarker';

exports.default = (0, _connect2.default)(MenuMarker);

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function setupDragstartEvent(e) {
  e.dataTransfer.effectAllowed = 'move';

  // Is required in order to dragover event is triggered in FF and Safari.
  // http://stackoverflow.com/questions/21507189/dragenter-dragover-and-drop-events-not-working-in-firefox
  // IE 11 however does not allow to set the data, which results in a security exception.
  try {
    e.dataTransfer.setData('text/plain', e.target.id);
  } catch (error) {
    // Ignore.
  }
}

exports.default = setupDragstartEvent;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionMarker = function (_React$Component) {
  _inherits(OptionMarker, _React$Component);

  function OptionMarker(props) {
    _classCallCheck(this, OptionMarker);

    var _this = _possibleConstructorReturn(this, (OptionMarker.__proto__ || Object.getPrototypeOf(OptionMarker)).call(this, props));

    _this._onClick = _this._onClick.bind(_this);
    return _this;
  }

  _createClass(OptionMarker, [{
    key: 'render',
    value: function render() {
      var className = 'scrivito_option_marker scrivito_' + this.props.position;

      if (this.props.isAlwaysShown) {
        className += ' scrivito_visible';
      }

      return _react2.default.createElement(
        'span',
        {
          className: className,
          onClick: this._onClick
        },
        _react2.default.createElement('i', { className: 'scrivito_icon scrivito_icon_marker_plus' })
      );
    }
  }, {
    key: '_onClick',
    value: function _onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      this.props.insertWidget(this.props.widget, this.props.position);
    }
  }]);

  return OptionMarker;
}(_react2.default.Component);

OptionMarker.displayName = 'Scrivito.OptionMarker';

exports.default = (0, _connect2.default)(OptionMarker);

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _extract_ids_from_content = __webpack_require__(42);

var _extract_ids_from_content2 = _interopRequireDefault(_extract_ids_from_content);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WidgetlistPlaceholder = function (_React$Component) {
  _inherits(WidgetlistPlaceholder, _React$Component);

  function WidgetlistPlaceholder(props) {
    _classCallCheck(this, WidgetlistPlaceholder);

    var _this = _possibleConstructorReturn(this, (WidgetlistPlaceholder.__proto__ || Object.getPrototypeOf(WidgetlistPlaceholder)).call(this, props));

    _this._onClick = _this._onClick.bind(_this);
    return _this;
  }

  _createClass(WidgetlistPlaceholder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this._widgetPlaceholder) {
        var domNode = (0, _reactDom.findDOMNode)(this._widgetPlaceholder);

        var _extractIdsFromConten = (0, _extract_ids_from_content2.default)(this.props.field.container()),
            objId = _extractIdsFromConten.objId,
            widgetId = _extractIdsFromConten.widgetId;

        var attributeName = this.props.field.name();

        scrivito.uiAdapter.registerEmptyWidgetlistDropZoneInDom({ domNode: domNode, objId: objId, widgetId: widgetId, attributeName: attributeName });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        ref: function ref(widgetPlaceholder) {
          return _this2._widgetPlaceholder = widgetPlaceholder;
        },
        className: 'scrivito_empty_widget_field',
        'data-scrivito-private-dropzone': 'true',
        onClick: this._onClick
      });
    }
  }, {
    key: '_onClick',
    value: function _onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      if (this._widgetPlaceholder) {
        var attributeName = this.props.field.name();

        var _extractIdsFromConten2 = (0, _extract_ids_from_content2.default)(this.props.field.container()),
            objId = _extractIdsFromConten2.objId,
            widgetId = _extractIdsFromConten2.widgetId;

        scrivito.uiAdapter.showWidgetlistMenu((0, _reactDom.findDOMNode)(this._widgetPlaceholder), {
          objId: objId, widgetId: widgetId, attributeName: attributeName, mousePosition: { x: e.pageX, y: e.pageY }
        });
      }
    }
  }]);

  return WidgetlistPlaceholder;
}(_react2.default.Component);

WidgetlistPlaceholder.displayName = 'Scrivito.ContentTag.WidgetlistPlaceholder';

exports.default = (0, _connect2.default)(WidgetlistPlaceholder);

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _underscore = __webpack_require__(0);

var _attribute_value = __webpack_require__(69);

var _attribute_value2 = _interopRequireDefault(_attribute_value);

var _edit_controller = __webpack_require__(127);

var _edit_controller2 = _interopRequireDefault(_edit_controller);

var _editor_event = __webpack_require__(129);

var _editor_event2 = _interopRequireDefault(_editor_event);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editor = function (_React$Component) {
  _inherits(Editor, _React$Component);

  function Editor(props) {
    _classCallCheck(this, Editor);

    var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

    _this.state = { domMode: 'None' };
    _this._onClick = _this._onClick.bind(_this);
    return _this;
  }

  _createClass(Editor, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var field = this.props.field;
      var type = field.type();
      var options = field.typeOptions();
      var editorClass = this.props.editorClass;

      if (editorClass) {
        var attributeInfo = (0, _underscore.extend)({ type: type }, (0, _underscore.pick)(options, 'validClasses', 'values'));
        var controller = new _edit_controller2.default(field, function (domMode) {
          return _this2._setDomMode(domMode);
        });

        this._editor = new editorClass({ attributeInfo: attributeInfo, controller: controller });
        this._editorWillBeActivated();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.domMode === 'Replace') {
        this._editorDomWasMounted();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_prevProps, prevState) {
      var prevDomMode = prevState.domMode;
      var curDomMode = this.state.domMode;

      if (prevDomMode !== curDomMode) {
        if (curDomMode === 'Replace') {
          this._editorDomWasMounted();
        } else {
          this._editorDomWasUnmounted();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._editorWillBeDeactivated();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.state.domMode === 'Replace') {
        return _react2.default.createElement(this.props.tag, (0, _underscore.extend)((0, _underscore.omit)(this.props.customProps, 'children'), {
          ref: function ref(editorComponent) {
            return _this3._editorComponent = editorComponent;
          }
        }));
      }

      return _react2.default.createElement(_attribute_value2.default, {
        ref: function ref(editorComponent) {
          return _this3._editorComponent = editorComponent;
        },
        children: this.props.children,
        customProps: this.props.customProps,
        field: this.props.field,
        key: this.state.domMode,
        tag: this.props.tag,
        onClick: function onClick(e) {
          return _this3._onClick(e);
        }
      });
    }
  }, {
    key: '_onClick',
    value: function _onClick(e) {
      if (this._editor && this._editor.onClick) {
        this._editor.onClick(new _editor_event2.default(e));
      }
    }
  }, {
    key: '_editorWillBeActivated',
    value: function _editorWillBeActivated() {
      if (this._editor && this._editor.editorWillBeActivated) {
        this._editor.editorWillBeActivated();
      }
    }
  }, {
    key: '_editorWillBeDeactivated',
    value: function _editorWillBeDeactivated() {
      if (this._editor && this._editor.editorWillBeDeactivated) {
        this._editor.editorWillBeDeactivated();
      }
    }
  }, {
    key: '_editorDomWasMounted',
    value: function _editorDomWasMounted() {
      if (this._editor && this._editor.editorDomWasMounted && this._editorComponent) {
        this._editor.editorDomWasMounted((0, _reactDom.findDOMNode)(this._editorComponent));
      }
    }
  }, {
    key: '_editorDomWasUnmounted',
    value: function _editorDomWasUnmounted() {
      if (this._editor && this._editor.editorDomWasUnmounted) {
        this._editor.editorDomWasUnmounted();
      }
    }
  }, {
    key: '_setDomMode',
    value: function _setDomMode(domMode) {
      this.setState({ domMode: domMode });
    }
  }]);

  return Editor;
}(_react2.default.Component);

Editor.displayName = 'Scrivito.ContentTag.Editor';

exports.default = (0, _connect2.default)(Editor);

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _update_buffer = __webpack_require__(128);

var _update_buffer2 = _interopRequireDefault(_update_buffer);

var _internal_links = __webpack_require__(40);

var InternalLinks = _interopRequireWildcard(_internal_links);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditController = function () {
  function EditController(field, setDomMode) {
    _classCallCheck(this, EditController);

    this.setDomMode = setDomMode;
    this._buffer = new _update_buffer2.default({
      get: function get() {
        if (field.type() === 'html') {
          return InternalLinks.transformHTML(field.get());
        }

        return field.get();
      },
      set: function set(val) {
        return field.update(val);
      },
      flushRate: 100
    });
  }

  _createClass(EditController, [{
    key: 'content',
    get: function get() {
      return this._buffer.get();
    },
    set: function set(val) {
      this._buffer.set(val);
    }
  }]);

  return EditController;
}();

exports.default = EditController;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// UpdateBuffer wraps an underlying state and buffers updates to that state,
// throtteling how frequently the underlying state is updated.
//
// The buffer is flushed at regular intervals,
// propagating the accumulated updates to the underlying state.
//
// UpdateBuffer can wrap anything with a getter and a setter.
// It exposes a get and set method to be used in place of the original getter and setter.
// It ensures that the underlying setter is called at most once every `flushRate` milliseconds.

// special "null object"
// since the built-in values `null`, `false` and `undefined` are valid values
var NO_VALUE = {};

var UpdateBuffer = function () {
  function UpdateBuffer(_ref) {
    var get = _ref.get,
        set = _ref.set,
        flushRate = _ref.flushRate;

    _classCallCheck(this, UpdateBuffer);

    this._getUnderlying = get;
    this._setUnderlying = set;
    this._flushRate = flushRate;

    this._bufferedValue = NO_VALUE;
  }

  _createClass(UpdateBuffer, [{
    key: "get",
    value: function get() {
      var bufferedValue = this._bufferedValue;

      if (bufferedValue !== NO_VALUE) {
        return bufferedValue;
      }

      return this._getUnderlying();
    }
  }, {
    key: "set",
    value: function set(value) {
      this._bufferedValue = value;

      if (!this._flushRunning) {
        this._runFlush();
      }
    }
  }, {
    key: "_runFlush",
    value: function _runFlush() {
      var _this = this;

      if (this._bufferedValue === NO_VALUE) {
        this._flushRunning = false;

        return;
      }

      this._setUnderlying(this._bufferedValue);
      this._bufferedValue = NO_VALUE;

      setTimeout(function () {
        return _this._runFlush();
      }, this._flushRate);
      this._flushRunning = true;
    }
  }]);

  return UpdateBuffer;
}();

exports.default = UpdateBuffer;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorEvent = function () {
  function EditorEvent(internalEvent) {
    _classCallCheck(this, EditorEvent);

    this._internalEvent = internalEvent;
  }

  _createClass(EditorEvent, [{
    key: "preventDefault",
    value: function preventDefault() {
      this._internalEvent.preventDefault();
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      this._internalEvent.stopPropagation();
    }
  }]);

  return EditorEvent;
}();

exports.default = EditorEvent;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _current_page = __webpack_require__(17);

var _errors = __webpack_require__(1);

var _component_registry = __webpack_require__(27);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CurrentPage() {
  var page = (0, _current_page.currentPage)();
  var params = (0, _current_page.currentPageParams)();

  if (!page) {
    return null;
  }

  var pageClass = page.objClass();
  var pageComponent = (0, _component_registry.getComponentForAppClass)(pageClass);

  if (!pageComponent) {
    throw new _errors.ArgumentError('No component registered for obj class "' + pageClass + '"');
  }

  return _react2.default.createElement(pageComponent, { page: page, params: params });
}

CurrentPage.displayName = 'Scrivito.CurrentPage';

exports.default = (0, _connect2.default)(CurrentPage);

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _schema = __webpack_require__(10);

var _schema2 = _interopRequireDefault(_schema);

var _underscore = __webpack_require__(0);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _errors = __webpack_require__(1);

var _binary = __webpack_require__(9);

var _binary2 = _interopRequireDefault(_binary);

var _scale_down_binary = __webpack_require__(63);

var _scale_down_binary2 = _interopRequireDefault(_scale_down_binary);

var _image_placeholder = __webpack_require__(132);

var _image_placeholder2 = _interopRequireDefault(_image_placeholder);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

var _content_tag = __webpack_require__(67);

var _content_tag2 = _interopRequireDefault(_content_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// public API
var ImageTag = function (_React$Component) {
  _inherits(ImageTag, _React$Component);

  function ImageTag() {
    _classCallCheck(this, ImageTag);

    return _possibleConstructorReturn(this, (ImageTag.__proto__ || Object.getPrototypeOf(ImageTag)).apply(this, arguments));
  }

  _createClass(ImageTag, [{
    key: 'render',
    value: function render() {
      if (!this.props.content) {
        return null;
      }

      var htmlOptions = (0, _underscore.omit)(this.props, 'content', 'attribute');

      if (this.props.content instanceof _binary2.default) {
        return _react2.default.createElement('img', _extends({
          src: (0, _scale_down_binary2.default)(this.props.content).url()
        }, htmlOptions));
      }

      var binary = this._getBinary();

      var src = void 0;
      if (binary) {
        src = (0, _scale_down_binary2.default)(binary).url();
      } else {
        src = _image_placeholder2.default;
        htmlOptions['data-scrivito-image-placeholder'] = true;
      }

      return _react2.default.createElement(_content_tag2.default, _extends({
        attribute: this.props.attribute,
        content: this.props.content,
        tag: 'img',
        src: src
      }, htmlOptions));
    }
  }, {
    key: '_getBinary',
    value: function _getBinary() {
      var schema = _schema2.default.forInstance(this.props.content);
      var attributeType = schema.attributes[this.props.attribute];

      if (!attributeType) {
        throw new _errors.ScrivitoError('Component "Scrivito.ImageTag" received prop "content"' + (' with an object missing attribute "' + this.props.attribute + '".'));
      }

      if (attributeType === 'binary') {
        return this.props.content.get(this.props.attribute);
      }

      if (attributeType === 'reference') {
        return this._getReferencedBinary();
      }

      throw new _errors.ScrivitoError('Component "Scrivito.ImageTag" received prop "content"' + (' with an object, whose attribute "' + this.props.attribute + '"') + (' is of invalid type "' + attributeType + '".') + ' Valid attribute types are "binary" and "reference".');
    }
  }, {
    key: '_getReferencedBinary',
    value: function _getReferencedBinary() {
      var referencedObj = this.props.content.get(this.props.attribute);

      if (referencedObj) {
        var blob = referencedObj.get('blob');

        if (blob) {
          return blob;
        }
      }

      return null;
    }
  }]);

  return ImageTag;
}(_react2.default.Component);

ImageTag.displayName = 'Scrivito.ImageTag';

ImageTag.defaultProps = { attribute: 'blob' };

exports.default = (0, _connect2.default)(ImageTag);

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint max-len: 0 */
/*
 * This is a base64 placeholder for the image component.
 *
 * The image component is actually styled via CSS in order to provide a scalable placeholder.
 * However, in order to set a background image, the tag must have content. In this case a
 * transparent image of an appropriate size.
 */
exports.default = 'data:image/gif;base64,R0lGODlhyADIAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU0OTExLCAyMDEzLzEwLzI5LTExOjQ3OjE2ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDBEQjBEMDdFODMzMTFFNTg0QzY4MUNBMUVCQUU2MjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDBEQjBEMDhFODMzMTFFNTg0QzY4MUNBMUVCQUU2MjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMERCMEQwNUU4MzMxMUU1ODRDNjgxQ0ExRUJBRTYyNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMERCMEQwNkU4MzMxMUU1ODRDNjgxQ0ExRUJBRTYyNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAADIAMgAAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aNBhw7eixTAAA7';

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _current_page = __webpack_require__(17);

var _errors = __webpack_require__(1);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// public API
function InternalErrorPage(_ref) {
  var children = _ref.children;

  if ((0, _current_page.currentPageError)() && !((0, _current_page.currentPageError)() instanceof _errors.CurrentPageNotFoundError)) {
    if (children) {
      return React.createElement(
        'div',
        null,
        children
      );
    }

    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'We\'re sorry, but something went wrong.'
      )
    );
  }

  return null;
}

InternalErrorPage.displayName = 'Scrivito.InternalErrorPage';

exports.default = (0, _connect2.default)(InternalErrorPage);

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _current_page = __webpack_require__(17);

var _errors = __webpack_require__(1);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// public API
function NotFoundErrorPage(_ref) {
  var children = _ref.children;

  if ((0, _current_page.currentPageError)() instanceof _errors.CurrentPageNotFoundError) {
    if (children) {
      return React.createElement(
        'div',
        null,
        children
      );
    }

    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'The page you were looking for doesn\'t exist.'
      ),
      React.createElement(
        'p',
        null,
        'You may have mistyped the address or the page may have moved.'
      )
    );
  }

  return null;
}

NotFoundErrorPage.displayName = 'Scrivito.NotFoundErrorPage';

exports.default = (0, _connect2.default)(NotFoundErrorPage);

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = provideComponent;

var _underscore = __webpack_require__(0);

var _errors = __webpack_require__(1);

var _component_registry = __webpack_require__(27);

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

var _pretty_print = __webpack_require__(11);

var _pretty_print2 = _interopRequireDefault(_pretty_print);

var _widget_tag = __webpack_require__(41);

var _widget_tag2 = _interopRequireDefault(_widget_tag);

var _display_name_from_component = __webpack_require__(64);

var _display_name_from_component2 = _interopRequireDefault(_display_name_from_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// public API
function provideComponent(className, component) {
  assertValidComponent(component);
  assertNoCustomProps(component);

  if (isComponentMissingName(component)) {
    component.displayName = className;
  }

  var connectedComponent = (0, _connect2.default)(component);
  var wrappedComponent = ensureWidgetWrappedInWidgetTag(connectedComponent);

  (0, _component_registry.registerComponentForAppClass)(className, wrappedComponent);
}

function assertValidComponent(component) {
  if (typeof component !== 'function') {
    throw new _errors.ArgumentError('Scrivito.provideComponent expected a valid React component' + (', but received ' + (0, _pretty_print2.default)(component)));
  }
}

function assertNoCustomProps(component) {
  if (component.propTypes) {
    throw new _errors.ArgumentError('Custom props are not allowed when providing a component.');
  }
}

function ensureWidgetWrappedInWidgetTag(component) {
  var wrappedComponent = function (_component) {
    _inherits(wrappedComponent, _component);

    function wrappedComponent() {
      _classCallCheck(this, wrappedComponent);

      return _possibleConstructorReturn(this, (wrappedComponent.__proto__ || Object.getPrototypeOf(wrappedComponent)).apply(this, arguments));
    }

    _createClass(wrappedComponent, [{
      key: 'render',
      value: function render() {
        if (this.props.widget) {
          var value = _get(wrappedComponent.prototype.__proto__ || Object.getPrototypeOf(wrappedComponent.prototype), 'render', this).call(this);

          if ((0, _underscore.isArray)(value) || (0, _underscore.isBoolean)(value) || (0, _underscore.isNumber)(value) || (0, _underscore.isString)(value) || value === null || value && value.type !== _widget_tag2.default) {
            return React.createElement(_widget_tag2.default, { children: value });
          }

          return value;
        }

        return _get(wrappedComponent.prototype.__proto__ || Object.getPrototypeOf(wrappedComponent.prototype), 'render', this).call(this);
      }
    }]);

    return wrappedComponent;
  }(component);

  wrappedComponent.displayName = (0, _display_name_from_component2.default)(component);

  return wrappedComponent;
}

function isComponentMissingName(component) {
  // In some browsers functional components are missing the `name` property.
  // In some other browsers they have that property, but the value is meaningless: `_class`.
  return !component.displayName && (!component.name || component.name === '_class');
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerComponent;

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

var _component_registry = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerComponent(componentId, component) {
  (0, _component_registry.registerComponentForId)(componentId, (0, _connect2.default)(component));
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connectToUi;
// checks whether the UI is present
// if so, returns an instance of UiConnection
function connectToUi() {
  // check if there's a parent frame
  if (window.parent === window) {
    return;
  }

  var connectAppDocument = window.parent.connectAppDocument;
  if (connectAppDocument) {
    return connectAppDocument(window.document);
  }
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeSdk = initializeSdk;

__webpack_require__(139);

__webpack_require__(160);

__webpack_require__(161);

__webpack_require__(169);

var _open_content_browser = __webpack_require__(172);

var _open_content_browser2 = _interopRequireDefault(_open_content_browser);

var _editor_registry = __webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!window.scrivito) {
  window.scrivito = {};
}

window.scrivito.registerEditor = _editor_registry.registerEditor;
window.scrivito.openContentBrowser = _open_content_browser2.default;

function initializeSdk(ui) {
  if (ui) {
    ui.setAppAdapter("0.1.0-beta", scrivito.AppAdapter);
    scrivito.uiAdapter = ui.uiAdapter();
  }

  scrivito.client.init({ ui: ui });

  document.addEventListener('DOMContentLoaded', function () {
    return scrivito.BrowserLocation.init();
  });
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(71);

__webpack_require__(54);

__webpack_require__(140);

__webpack_require__(141);

__webpack_require__(145);

__webpack_require__(146);

__webpack_require__(147);

__webpack_require__(148);

__webpack_require__(149);

__webpack_require__(150);

__webpack_require__(151);

__webpack_require__(152);

__webpack_require__(2);

__webpack_require__(153);

__webpack_require__(154);

__webpack_require__(155);

__webpack_require__(157);

__webpack_require__(158);

__webpack_require__(159);

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _global_state = __webpack_require__(5);

(function () {
  var bufferedUpdates = [];

  var isUpdateScheduled = function isUpdateScheduled() {
    return bufferedUpdates.length;
  };

  function add(callback) {
    if (!isUpdateScheduled()) {
      scrivito.nextTick(function () {
        (0, _global_state.withBatchedUpdates)(function () {
          return performUpdate(bufferedUpdates);
        });
      });
    }

    bufferedUpdates.push(callback);
  }

  function performUpdate(callbacks) {
    bufferedUpdates = [];

    try {
      callbacks.forEach(function (callback) {
        return callback();
      });
    } finally {
      if (isUpdateScheduled()) {
        performUpdate(bufferedUpdates);
      }
    }
  }

  scrivito.batchedStateUpdater = { add: add };
})();

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deferred = __webpack_require__(20);

var _deferred2 = _interopRequireDefault(_deferred);

var _urijs = __webpack_require__(23);

var _urijs2 = _interopRequireDefault(_urijs);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _errors = __webpack_require__(1);

var _auth_failure_counter = __webpack_require__(142);

var _auth_failure_counter2 = _interopRequireDefault(_auth_failure_counter);

var _public_authentication = __webpack_require__(143);

var _public_authentication2 = _interopRequireDefault(_public_authentication);

var _window_proxy = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MIN_REQUEST_TIME = 5;
  var DEFAULT_REQUEST_TIMEOUT = 15000;

  var backendEndpoint = void 0;
  var tenant = void 0;
  var initDeferred = void 0;
  var authHeaderValueProvider = void 0;
  var forceVerification = void 0;

  scrivito.CmsRestApi = {
    init: function init(endpoint, initTenant, authorizationProvider) {
      if (initTenant) {
        backendEndpoint = endpoint;
        tenant = initTenant;

        if (initDeferred) {
          initDeferred.resolve();
        }
      }
      authHeaderValueProvider = authorizationProvider || authHeaderValueProvider || _public_authentication2.default;
    },


    // For test purpose only.
    reset: function reset() {
      backendEndpoint = undefined;
      tenant = undefined;
      initDeferred = undefined;
      authHeaderValueProvider = undefined;
      forceVerification = undefined;
    },
    get: function get(path, requestParams) {
      return fetch('GET', path, requestParams);
    },
    put: function put(path, requestParams) {
      return fetch('PUT', path, requestParams);
    },
    post: function post(path, requestParams) {
      return fetch('POST', path, requestParams);
    },
    delete: function _delete(path, requestParams) {
      return fetch('DELETE', path, requestParams);
    },
    requestBuiltInUserSession: function requestBuiltInUserSession(sessionId) {
      return ensureInitialized().then(function () {
        var method = 'PUT';
        var path = 'sessions/' + sessionId;
        var promise = retryRequest(method, function (timeout) {
          return requestAjaxDeferred(ajax({ method: method, path: path, timeout: timeout }));
        });
        promise.then(_auth_failure_counter2.default.reset);
        return promise;
      });
    },


    // For test purpose only.
    enableForceVerification: function enableForceVerification() {
      forceVerification = true;
    },


    // For test purpose only.
    currentPublicAuthorizationState: function currentPublicAuthorizationState() {
      if (authHeaderValueProvider) {
        if (authHeaderValueProvider.currentState) {
          return '[API] ' + authHeaderValueProvider.currentState();
        }
        return '[API]: authorization provider without currentState()';
      }
      return '[API]: no authorization provider';
    },


    get endpoint() {
      return backendEndpoint;
    },

    // For test purpose only.
    get tenant() {
      return tenant;
    }
  };

  var Timer = function () {
    function Timer() {
      var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_REQUEST_TIMEOUT;

      _classCallCheck(this, Timer);

      this.timesOutAt = Date.now() + timeout;
    }

    _createClass(Timer, [{
      key: 'timedOut',
      value: function timedOut() {
        return this.remainingTime() < MIN_REQUEST_TIME;
      }
    }, {
      key: 'remainingTime',
      value: function remainingTime() {
        return Math.max(this.timesOutAt - Date.now(), 0);
      }
    }, {
      key: 'cover',
      value: function cover(time) {
        return time <= this.timesOutAt - MIN_REQUEST_TIME;
      }
    }]);

    return Timer;
  }();

  function ensureInitialized() {
    if (tenant) {
      return scrivito.Promise.resolve();
    }

    if (!initDeferred) {
      initDeferred = new _deferred2.default();
    }

    return initDeferred.promise;
  }

  function fetch(method, path, requestParams) {
    return ensureInitialized().then(function () {
      return request(method, path, requestParams).then(function (result) {
        if (result && result.task && _underscore2.default.size(result) === 1) {
          return handleTask(result.task);
        }

        return result;
      });
    });
  }

  function request(method, path, requestParams) {
    return retryRequest(method, function (timeout) {
      return authHeaderValueProvider.perform(function (authorization) {
        return requestAjaxDeferred(ajax({ method: method, path: path, requestParams: requestParams, timeout: timeout, authorization: authorization }));
      });
    });
  }

  function requestAjaxDeferred(ajaxDeferred) {
    return scrivito.Promise.resolve(ajaxDeferred).catch(handleAjaxError);
  }

  function retryRequest(method, actualRequest) {
    var timer = new Timer();
    return retryOnceOnError(timer, method, function () {
      return retryOnRateLimit(timer, function () {
        return actualRequest(timer.remainingTime());
      });
    });
  }

  function retryOnceOnError(timer, method, requestCallback) {
    if (method === 'POST') {
      return requestCallback();
    }

    return requestCallback().catch(function (error) {
      if (!timer.timedOut()) {
        if (error instanceof _errors.BackendError) {
          return requestCallback();
        }
        if (error instanceof _errors.NetworkError) {
          return requestCallback();
        }
      }
      throw error;
    });
  }

  function retryOnRateLimit(timer, requestCallback) {
    var retry = function retry(retryCount) {
      return requestCallback().catch(function (e) {
        if (e instanceof _errors.NetworkError && e.httpCode === 429) {
          var error = e.response;
          var timeout = calculateTimeout(error.getResponseHeader('Retry-After'), retryCount);
          if (timer.cover(Date.now() + timeout)) {
            return scrivito.Promise.resolve(scrivito.waitMs(timeout)).then(function () {
              return retry(retryCount + 1);
            });
          }
          throw new _errors.RateLimitExceededError('rate limit exceeded', 429);
        }
        throw e;
      });
    };

    return retry(0);
  }

  function calculateTimeout(retryAfter, retryCount) {
    var calculatedTimeout = Math.pow(2, retryCount) * 0.5 * 1000;
    return Math.max(calculatedTimeout, retryAfter * 1000);
  }

  function handleAjaxError(error) {
    if (error.status === undefined || !_underscore2.default.isNumber(error.status)) {
      throw error;
    }

    var errorBody = void 0;
    try {
      errorBody = JSON.parse(error.responseText);
    } catch (e) {
      throw new _errors.NetworkError(error);
    }

    if (errorBody.code === 'auth_missing' && errorBody.details) {
      var returnTo = _auth_failure_counter2.default.augmentedRedirectUrl((0, _window_proxy.location)());
      var redirectTo = errorBody.details.visit.replace('retry=RETRY', 'retry=' + _auth_failure_counter2.default.currentFailureCount()).replace(/\$RETURN_TO/, encodeURIComponent(returnTo));
      return (0, _window_proxy.redirectTo)(redirectTo);
    }

    var specificOutput = errorBody.error;
    if (error.status === 401) {
      throw new _errors.UnauthorizedError(specificOutput, error.status, errorBody.code, errorBody.details);
    }
    if (error.status === 403) {
      throw new _errors.AccessDeniedError(specificOutput, error.status, errorBody.code);
    }
    if (error.status === 429) {
      throw new _errors.NetworkError(error);
    }
    if (specificOutput) {
      if (error.status === 500) {
        throw new _errors.BackendError(specificOutput, error.status);
      }
      if (error.status.toString()[0] === '4' && errorBody.error) {
        throw _errors.ClientError.for(specificOutput, error.status, errorBody.code);
      }
    }
    throw new _errors.NetworkError(error);
  }

  function prepareAjaxParams(method, path) {
    var requestParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var ajaxParams = {
      path: path,
      verb: method,
      params: requestParams
    };

    return ajaxParams;
  }

  function ajax(_ref) {
    var method = _ref.method,
        path = _ref.path,
        requestParams = _ref.requestParams,
        timeout = _ref.timeout,
        authorization = _ref.authorization;

    var url = (0, _urijs2.default)(backendEndpoint + '/tenants/' + tenant + '/perform').scheme('https').toString();
    var params = prepareAjaxParams(method, path, requestParams);

    return scrivito.fetch(method, url, { params: params, timeout: timeout, authorization: authorization, forceVerification: forceVerification });
  }

  function handleTask(task) {
    switch (task.status) {
      case 'success':
        return task.result;
      case 'error':
        throw _errors.ClientError.for(task.message, 412, task.code);
      case 'open':
        return scrivito.wait(2).then(function () {
          return request('GET', 'tasks/' + task.id).then(function (result) {
            return handleTask(result);
          });
        });
      default:
        throw new _errors.ScrivitoError('Invalid task response (unknown status)');
    }
  }
})();

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FRAGMENT_VALUE_LOCATOR = '&scrivito.authFailedCount=';
var failureCount = void 0;

function init(addressWindow) {
  reset();
  var location = addressWindow.location;
  var fragment = location.hash;
  var offset = fragment.indexOf(FRAGMENT_VALUE_LOCATOR);
  if (offset < 0) {
    return;
  }
  var countAsString = fragment.substr(offset + FRAGMENT_VALUE_LOCATOR.length, 3);
  var remainingFragment = fragment.substring(0, offset);
  if (remainingFragment === '#') {
    remainingFragment = '';
  }
  var newLocation = location.href.toString().replace(fragment, remainingFragment);
  failureCount = parseInt(countAsString, 10) || 0;
  addressWindow.history.replaceState({}, '', newLocation);
}

function reset() {
  failureCount = 0;
}

function augmentedRedirectUrl(currentLocation) {
  var returnTo = currentLocation.toString();
  if (!currentLocation.hash) {
    returnTo = returnTo + '#';
  }
  return '' + returnTo + FRAGMENT_VALUE_LOCATOR + (failureCount + 1);
}

function currentFailureCount() {
  return failureCount;
}

exports.default = {
  init: init,
  augmentedRedirectUrl: augmentedRedirectUrl,
  reset: reset,
  currentFailureCount: currentFailureCount
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errors = __webpack_require__(1);

var _verificator_functions = __webpack_require__(144);

var _verificator_functions2 = _interopRequireDefault(_verificator_functions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERROR_CODE_CLIENT_VERIFICATION_REQUIRED = 'client_verification_required';

var computation = void 0;
var verification = void 0;

function perform(callback) {
  return new scrivito.Promise(function (resolve) {
    return resolve(callback(currentAuthorization()));
  }).catch(function (error) {
    if (!(error instanceof _errors.UnauthorizedError)) {
      throw error;
    }
    if (error.backendCode !== ERROR_CODE_CLIENT_VERIFICATION_REQUIRED) {
      throw error;
    }
    return computeVerification(error.details.verificator, error.details.data).then(function (computedVerification) {
      return callback(computedVerification.authorization);
    });
  });
}

// If a pending computation is present, verificator and data are ignored.
// It is about to return any authorization, and have not more than one
// computation at any time.
function computeVerification(verificator, data) {
  // isPending() is Bluebird
  if (!(computation && computation.isPending())) {
    computation = _verificator_functions2.default.fetch(verificator.id, verificator.url).then(function (computeAuthorization) {
      return new scrivito.Promise(function (r) {
        return computeAuthorization(data, r);
      });
    });
    computation.then(forgetComputationAndRememberVerification);
    computation.challenge = { verificator: verificator, data: data };
  }
  return computation;
}

function forgetComputationAndRememberVerification(verificationToRemember) {
  computation = undefined;
  verification = verificationToRemember;
}

function reset() {
  forgetComputationAndRememberVerification();
}

function currentAuthorization() {
  if (!verification) {
    return;
  }
  if (verification.expiresAfter < new Date()) {
    verification = undefined;
    return;
  }
  return verification.authorization;
}

// integration test support
function currentState() {
  var authorization = currentAuthorization();
  if (authorization) {
    return 'Authorization: ' + authorization;
  }

  if (!computation) {
    return null;
  }

  var challenge = computation.challenge;
  var verificator = challenge.verificator;
  var verificatorId = verificator.id;
  var data = challenge.data;
  if (computation.isPending()) {
    return 'Pending computation: ' + verificatorId + ' with ' + data;
  }

  // The following states are not expected to ever be returned.
  // It indicates a computation that has finished unsucessfully.
  var orphaned = 'Orphaned computation: ' + verificatorId + ' with ' + data;
  if (!verification) {
    return orphaned + ' (verification not present?!?)';
  }

  var expiresAfter = verification && verification.expiresAfter;
  if (!expiresAfter) {
    return orphaned + ' (verification present, but without expiry?)';
  }

  var expireDescription = '(verification expiresAfter: ' + expiresAfter + ')';
  if (new Date() <= expiresAfter) {
    return orphaned + ' ' + expireDescription;
  }
  return orphaned + ' ' + expireDescription + ' (expired)';
}

reset();

exports.default = { perform: perform, reset: reset, currentState: currentState, ERROR_CODE_CLIENT_VERIFICATION_REQUIRED: ERROR_CODE_CLIENT_VERIFICATION_REQUIRED };

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deferred = __webpack_require__(20);

var _deferred2 = _interopRequireDefault(_deferred);

var _asset_loading = __webpack_require__(72);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registry = void 0;

function reset() {
  registry = {};
}

function fetch(verificatorId, verificatorUrl) {
  var deferred = registry[verificatorId];

  if (!deferred) {
    deferred = new _deferred2.default();
    registry[verificatorId] = deferred;

    (0, _asset_loading.loadJs)(verificatorUrl);
  }

  return deferred.promise;
}

reset();

window._scrivitoRegisterVerificator = function (verificatorId, verificatorFunction) {
  registry[verificatorId].resolve(verificatorFunction);
};

exports.default = {
  fetch: fetch,
  reset: reset
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  scrivito.computeCacheKey = function (data) {
    var normalizedData = normalizeData(data);
    return JSON.stringify(normalizedData);
  };

  function normalizeData(data) {
    if (_underscore2.default.isArray(data)) {
      return _underscore2.default.map(data, normalizeData);
    }

    if (_underscore2.default.isObject(data)) {
      return _underscore2.default.chain(data).mapObject(normalizeData).pairs().sortBy(_underscore2.default.first);
    }

    return data;
  }
})();

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var PUBLISHED_WORKSPACE_ID = 'published';

  scrivito.currentWorkspaceId = function () {
    if (scrivito.uiAdapter) {
      return scrivito.uiAdapter.currentWorkspaceId();
    }

    return PUBLISHED_WORKSPACE_ID;
  };
})();

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var consoleErrorIsDisabled = false;

  function logError() {
    if (window && window.console && !consoleErrorIsDisabled) {
      var _window$console;

      (_window$console = window.console).error.apply(_window$console, arguments);
    }
  }

  function disableConsoleError() {
    consoleErrorIsDisabled = true;
  }

  scrivito.logError = logError;
  scrivito.disableConsoleError = disableConsoleError;
})();

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _deferred = __webpack_require__(20);

var _deferred2 = _interopRequireDefault(_deferred);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var isDisabled = false;
  var connectionCounter = 0;

  // For test purpose only
  scrivito.isFetchingActive = function () {
    return connectionCounter > 0;
  };

  // For test purpose only
  scrivito.disableFetching = function () {
    isDisabled = true;
  };

  scrivito.fetch = function (method, url, _ref) {
    var params = _ref.params,
        timeout = _ref.timeout,
        authorization = _ref.authorization,
        forceVerification = _ref.forceVerification;

    if (isDisabled) {
      return new _deferred2.default().promise;
    }

    connectionCounter += 1;

    return new scrivito.Promise(function (resolve, reject) {
      var request = createRequestObj(method, url, timeout, resolve, reject);
      if (authorization) {
        request.setRequestHeader('Authorization', authorization);
      }
      if (forceVerification) {
        request.setRequestHeader('Scrivito-Force-Verification', 'true');
      }
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      request.send(JSON.stringify(params));
    });
  };

  function createRequestObj(method, url, timeout, resolve, reject) {
    var request = new XMLHttpRequest();

    request.open(method === 'POST' ? 'POST' : 'PUT', url);

    request.timeout = timeout;
    request.withCredentials = true;

    request.onload = function () {
      return onAjaxLoad(request, resolve, reject);
    };
    request.onerror = function (error) {
      return onAjaxError(error, reject);
    };

    return request;
  }

  function onAjaxLoad(request, resolve, reject) {
    connectionCounter -= 1;

    if (request.status >= 200 && request.status < 300) {
      try {
        return resolve(JSON.parse(request.responseText));
      } catch (error) {
        if (error instanceof SyntaxError) {
          return resolve(request.responseText);
        }

        throw error;
      }
    }

    return reject(request);
  }

  function onAjaxError(error, reject) {
    connectionCounter -= 1;

    reject(new Error('Network Error: ' + error));
  }
})();

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _global_state = __webpack_require__(5);

(function () {
  // if the UI is present, these modules are "connected" to the UI,
  // i.e. the local client module is replaced with
  // the matching module from the client inside the UI.
  var modulesToConnect = ['BinaryRequest', 'CmsRestApi', 'ObjReplication'];

  function connectModulesToUi(ui) {
    var uiModules = ui.clientModulesForExport();
    modulesToConnect.forEach(function (moduleName) {
      scrivito[moduleName] = uiModules[moduleName];
    });
  }

  function modulesForExport() {
    var modules = {};

    modulesToConnect.forEach(function (moduleName) {
      modules[moduleName] = scrivito[moduleName];
    });

    return modules;
  }

  function init() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        ui = _ref.ui;

    if (ui) {
      connectModulesToUi(ui);
    }

    (0, _global_state.initializeGlobalState)(ui);
  }

  // export
  scrivito.client.init = init;
  scrivito.client.modulesForExport = modulesForExport;
})();

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loadable_data = __webpack_require__(7);

var _loadable_data2 = _interopRequireDefault(_loadable_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  function loadAllUntil(iterator, size) {
    var objs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var run = _loadable_data2.default.run(function () {
      return iterator.next();
    });

    if (!run.allDataLoaded) {
      return { done: false, objs: objs };
    }

    var _run$result = run.result,
        obj = _run$result.value,
        done = _run$result.done;


    if (done || size === 0) {
      return { done: done, objs: objs };
    }

    return loadAllUntil(iterator, size - 1, objs.concat([obj]));
  }

  scrivito.loadAllUntil = loadAllUntil;
})();

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loadable_data = __webpack_require__(7);

var _loadable_data2 = _interopRequireDefault(_loadable_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  function loadableWithDefault(theDefault, loadableFunction) {
    var run = _loadable_data2.default.run(loadableFunction);

    return run.allDataLoaded ? run.result : theDefault;
  }

  // export
  scrivito.loadableWithDefault = loadableWithDefault;

  // legacy, keeping this for now to avoid conflicts.
  scrivito.loadWithDefault = loadableWithDefault;
})();

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _errors = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  /**
    * A `NotLoadedError` is thrown when data is accessed in a synchronous fashion but is not yet
    * available locally.
    */
  var NotLoadedError = function (_ScrivitoError) {
    _inherits(NotLoadedError, _ScrivitoError);

    function NotLoadedError(captureStackTrace) {
      _classCallCheck(this, NotLoadedError);

      return _possibleConstructorReturn(this, (NotLoadedError.__proto__ || Object.getPrototypeOf(NotLoadedError)).call(this, 'Data is not yet loaded.', captureStackTrace));
    }

    return NotLoadedError;
  }(_errors.ScrivitoError);

  // export


  scrivito.NotLoadedError = NotLoadedError;
})();

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var capturedDelayedFunctions = [];
  var captureEnabled = void 0;

  _underscore2.default.extend(scrivito, {
    nextTick: function nextTick(delayedFunction) {
      if (captureEnabled) {
        capturedDelayedFunctions.push(delayedFunction);
      } else {
        setTimeout(delayedFunction, 0);
      }
    },


    // For test purpose only.
    simulateNextTicks: function simulateNextTicks() {
      if (!captureEnabled) {
        return;
      }

      var exceptions = [];

      while (capturedDelayedFunctions.length) {
        var currentFunctions = _underscore2.default.shuffle(capturedDelayedFunctions);
        capturedDelayedFunctions = [];
        _underscore2.default.each(currentFunctions, function (delayedFunction) {
          try {
            delayedFunction();
          } catch (e) {
            exceptions.push(e);
          }
        });
      }

      if (exceptions.length > 0) {
        throw exceptions[0];
      }
    },


    // For test purpose only.
    enableNextTickCapture: function enableNextTickCapture() {
      captureEnabled = true;
    },


    // For test purpose only.
    disableNextTickCapture: function disableNextTickCapture() {
      captureEnabled = false;
    }
  });
})();

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deferred = __webpack_require__(20);

var _deferred2 = _interopRequireDefault(_deferred);

var _obj_patch = __webpack_require__(50);

var ObjPatch = _interopRequireWildcard(_obj_patch);

var _obj_data_store = __webpack_require__(30);

var ObjDataStore = _interopRequireWildcard(_obj_data_store);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _errors = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var replicationCache = {};
  var disabled = void 0;
  var writeCallbacks = {};
  var subscriptionToken = 0;
  var workspaceVersion = 0;

  scrivito.ObjReplication = function () {
    _createClass(ObjReplication, null, [{
      key: 'get',
      value: function get(id) {
        if (!replicationCache[id]) {
          replicationCache[id] = new scrivito.ObjReplication(id);
        }

        return replicationCache[id];
      }
    }, {
      key: 'subscribeWrites',
      value: function subscribeWrites(callback) {
        subscriptionToken += 1;
        writeCallbacks[subscriptionToken] = callback;
        return subscriptionToken;
      }
    }, {
      key: 'unsubscribeWrites',
      value: function unsubscribeWrites(token) {
        delete writeCallbacks[token];
      }

      // a version counter that increases whenever an Obj in the Workspace is changed.

    }, {
      key: 'getWorkspaceVersion',
      value: function getWorkspaceVersion() {
        return workspaceVersion;
      }
    }]);

    function ObjReplication(id) {
      var _this = this;

      _classCallCheck(this, ObjReplication);

      this._id = id;
      this._replicationActive = false;
      this._scheduledReplication = false;
      this._currentRequestDeferred = null;
      this._nextRequestDeferred = null;
      this._performThrottledReplication = scrivito.throttle(function () {
        return _this._performReplication();
      }, 1000);
    }

    _createClass(ObjReplication, [{
      key: 'notifyLocalState',
      value: function notifyLocalState(localState) {
        if (disabled) {
          return;
        }

        if (this._backendState === undefined) {
          throw new _errors.InternalError('Can not set local state before backend state.');
        }
        if (this._backendState && this._backendState._deleted) {
          throw new _errors.InternalError('Can not update a fully deleted obj.');
        }

        this._localState = localState;
        this._startReplication();
      }
    }, {
      key: 'notifyBackendState',
      value: function notifyBackendState(newBackendState) {
        if (this._backendState === undefined) {
          this._updateBackendState(newBackendState);
          this._updateLocalState(newBackendState);
          return;
        }

        var newestKnownBackendState = this._bufferedBackendState || this._backendState;
        if (compareStates(newBackendState, newestKnownBackendState) > 0) {
          if (this._replicationActive) {
            this._bufferedBackendState = newBackendState;
          } else {
            if (newBackendState._deleted) {
              this._updateLocalState(null);
            } else {
              var patch = diff(this._backendState, newBackendState);
              this._updateLocalState(apply(this.localState, patch));
            }
            this._updateBackendState(newBackendState);
          }
        }
      }
    }, {
      key: 'finishSaving',
      value: function finishSaving() {
        var finishSavingPromise = void 0;

        if (this._nextRequestDeferred) {
          finishSavingPromise = this._nextRequestDeferred.promise;
        } else if (this._currentRequestDeferred) {
          finishSavingPromise = this._currentRequestDeferred.promise;
        } else {
          return scrivito.Promise.resolve();
        }

        return finishSavingPromise.catch(function () {
          return scrivito.Promise.reject();
        });
      }
    }, {
      key: '_startReplication',
      value: function _startReplication() {
        var _this2 = this;

        if (!_underscore2.default.isEmpty(diff(this._backendState, this._localState))) {
          if (!this._replicationActive) {
            if (!this._scheduledReplication) {
              this._scheduledReplication = true;
              this._initDeferredForRequest();

              writeStarted(this._currentRequestDeferred.promise);
              scrivito.nextTick(function () {
                return _this2._performThrottledReplication();
              });
            }
          } else {
            if (!this._nextRequestDeferred) {
              this._nextRequestDeferred = new _deferred2.default();
            }
          }
        } else {
          if (this._nextRequestDeferred) {
            this._nextRequestDeferred.resolve();
            this._nextRequestDeferred = null;
          }
        }
      }
    }, {
      key: '_performReplication',
      value: function _performReplication() {
        var _this3 = this;

        var localState = this._localState;
        var patch = diff(this._backendState, this._localState);

        this._scheduledReplication = false;
        this._replicationActive = true;

        this._replicatePatchToBackend(patch).then(function (backendState) {
          _this3._handleBackendUpdate(localState, backendState);
          _this3._currentRequestDeferred.resolve(_this3._id);
          _this3._currentRequestDeferred = null;
          _this3._replicationActive = false;

          _this3._startReplication();
        }, function (error) {
          _this3._currentRequestDeferred.reject(error);
          _this3._currentRequestDeferred = null;
          _this3._replicationActive = false;
        });
      }
    }, {
      key: '_replicatePatchToBackend',
      value: function _replicatePatchToBackend(patch) {
        if (patch._modification === 'deleted') {
          return this._deleteObj();
        }

        if (_underscore2.default.isEmpty(patch)) {
          return scrivito.Promise.resolve(this._backendState);
        }

        var workspaceId = scrivito.currentWorkspaceId();
        var path = 'workspaces/' + workspaceId + '/objs/' + this._id;
        return scrivito.CmsRestApi.put(path, { obj: patch });
      }
    }, {
      key: '_deleteObj',
      value: function _deleteObj() {
        var workspaceId = scrivito.currentWorkspaceId();
        var path = 'workspaces/' + workspaceId + '/objs/' + this._id;
        return scrivito.CmsRestApi.delete(path, { include_deleted: true });
      }
    }, {
      key: '_initDeferredForRequest',
      value: function _initDeferredForRequest() {
        if (this._nextRequestDeferred) {
          var currentDeferred = this._nextRequestDeferred;
          this._nextRequestDeferred = null;
          this._currentRequestDeferred = currentDeferred;
        } else {
          this._currentRequestDeferred = new _deferred2.default();
        }
      }
    }, {
      key: '_handleBackendUpdate',
      value: function _handleBackendUpdate(replicatedState, backendState) {
        var bufferedLocalChanges = diff(replicatedState, this._localState);

        this._updateBackendState(newerState(backendState, this._bufferedBackendState));
        this._bufferedBackendState = undefined;

        this._updateLocalState(apply(this._backendState, bufferedLocalChanges));
      }
    }, {
      key: '_updateLocalState',
      value: function _updateLocalState(localState) {
        this._localState = localState;
        ObjDataStore.set(this._id, this._localState);
      }
    }, {
      key: '_updateBackendState',
      value: function _updateBackendState(newBackendState) {
        if (this._backendState !== undefined) {
          workspaceVersion++;
        }
        this._backendState = newBackendState;
      }

      // For test purpose only.

    }, {
      key: 'isNotStoredInBackend',


      // For test purpose only.
      value: function isNotStoredInBackend() {
        return this._backendState === null;
      }

      // For test purpose only.

    }, {
      key: 'isRequestInFlight',
      value: function isRequestInFlight() {
        return this._replicationActive;
      }

      // For test purpose only.

    }, {
      key: 'backendState',
      get: function get() {
        return this._backendState;
      }

      // For test purpose only.

    }, {
      key: 'localState',
      get: function get() {
        return this._localState;
      }
    }], [{
      key: 'disableReplication',
      value: function disableReplication() {
        disabled = true;
      }

      // For test purpose only.

    }, {
      key: 'enableReplication',
      value: function enableReplication() {
        disabled = false;
      }

      // For test purpose only.

    }, {
      key: 'clearWriteCallbacks',
      value: function clearWriteCallbacks() {
        writeCallbacks = {};
      }

      // For test purpose only.

    }, {
      key: 'clearCache',
      value: function clearCache() {
        replicationCache = {};
      }
    }]);

    return ObjReplication;
  }();

  function diff(stateA, stateB) {
    return ObjPatch.diff(stateA, stateB);
  }

  function apply(stateA, patch) {
    return ObjPatch.apply(stateA, patch);
  }

  function newerState(stateA, stateB) {
    if (compareStates(stateA, stateB) > 0) {
      return stateA;
    }

    return stateB;
  }

  function compareStates(stateA, stateB) {
    if (!stateA) {
      return -1;
    }
    if (!stateB) {
      return 1;
    }
    return strCompare(stateA._version, stateB._version);
  }

  function strCompare(str1, str2) {
    if (str1 > str2) {
      return 1;
    }
    if (str2 > str1) {
      return -1;
    }
    return 0;
  }

  function writeStarted(promise) {
    _underscore2.default.each(writeCallbacks, function (callback) {
      callback(promise);
    });
  }
})();

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _bluebird = __webpack_require__(156);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  _bluebird2.default.noConflict();

  _bluebird2.default.config({
    warnings: false,
    longStackTraces: false
  });

  _underscore2.default.extend(scrivito, {
    Promise: _bluebird2.default,

    promise: {
      enableDebugMode: function enableDebugMode() {
        _bluebird2.default.config({
          warnings: true,
          longStackTraces: true
        });
      },
      wrapInJqueryDeferred: function wrapInJqueryDeferred(promise, jQueryDeferred) {
        var d = jQueryDeferred;

        promise.then(function (data) {
          return d.resolve(data);
        }, function (error) {
          d.reject(error);
        });

        return d;
      },
      always: function always(promise, callback) {
        promise.then(callback, callback);
        return promise;
      },
      capturePromises: function capturePromises() {
        _bluebird2.default.setScheduler(function (promiseCallback) {
          scrivito.nextTick(promiseCallback);
        });
      }
    }
  });
})();

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_156__;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  scrivito.PublicPromise = function () {
    _createClass(Promise, null, [{
      key: "all",
      value: function all(promises) {
        return new scrivito.PublicPromise(scrivito.Promise.all(promises));
      }
    }, {
      key: "race",
      value: function race(promises) {
        return new scrivito.PublicPromise(scrivito.Promise.race(promises));
      }
    }, {
      key: "resolve",
      value: function resolve(valueOrThenable) {
        return new scrivito.PublicPromise(scrivito.Promise.resolve(valueOrThenable));
      }
    }, {
      key: "reject",
      value: function reject(valueOrThenable) {
        return new scrivito.PublicPromise(scrivito.Promise.reject(valueOrThenable));
      }
    }]);

    function Promise(promise) {
      _classCallCheck(this, Promise);

      this._internalPromise = promise;
    }

    _createClass(Promise, [{
      key: "then",
      value: function then(resolve, reject) {
        return new scrivito.PublicPromise(this._internalPromise.then(resolve, reject));
      }
    }, {
      key: "catch",
      value: function _catch(reject) {
        return new scrivito.PublicPromise(this._internalPromise.catch(reject));
      }
    }]);

    return Promise;
  }();
})();

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var shouldBypassThrottle = false;

  function throttle(fn, ms, options) {
    return shouldBypassThrottle ? fn : _underscore2.default.throttle(fn, ms, options);
  }

  function bypassThrottle() {
    shouldBypassThrottle = true;
  }

  scrivito.throttle = throttle;
  scrivito.bypassThrottle = bypassThrottle;
})();

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _attribute = __webpack_require__(19);

var _attribute2 = _interopRequireDefault(_attribute);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _errors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  scrivito.typeInfo = {
    normalize: function normalize(typeInfo) {
      if (_underscore2.default.isString(typeInfo)) {
        return [typeInfo];
      }

      if (_underscore2.default.isArray(typeInfo)) {
        return typeInfo;
      }

      throw new _errors.InternalError('Type Info needs to be a string or an array containing a string and optionally a hash');
    },
    normalizeAttrs: function normalizeAttrs(attributes) {
      var _this = this;

      return _underscore2.default.mapObject(attributes, function (_ref, name) {
        var _ref2 = _slicedToArray(_ref, 2),
            value = _ref2[0],
            typeInfo = _ref2[1];

        if (_attribute2.default.isSystemAttribute(name)) {
          return [value];
        }

        return [value, _this.normalize(typeInfo)];
      });
    },
    unwrapAttributes: function unwrapAttributes(attributes) {
      return _underscore2.default.mapObject(attributes, function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            value = _ref4[0];

        return value;
      });
    }
  };
})();

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(71);

__webpack_require__(6);

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(162);

__webpack_require__(163);

__webpack_require__(165);

__webpack_require__(166);

__webpack_require__(167);

__webpack_require__(168);

__webpack_require__(62);

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!window.scrivito) {
  window.scrivito = {};
}
window.scrivito.AppSupport = {};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _schema = __webpack_require__(10);

var _schema2 = _interopRequireDefault(_schema);

var _underscore = __webpack_require__(0);

var _navigate_to = __webpack_require__(32);

var _navigate_to2 = _interopRequireDefault(_navigate_to);

var _provide_editing_config = __webpack_require__(38);

var _window_context = __webpack_require__(13);

var _mount_component = __webpack_require__(61);

var _resolve_url = __webpack_require__(164);

var _resolve_url2 = _interopRequireDefault(_resolve_url);

var _window_proxy = __webpack_require__(22);

var _internal_links = __webpack_require__(40);

var _configure_content_browser = __webpack_require__(35);

var _ui_adapter_compatible_value = __webpack_require__(36);

var _ui_adapter_compatible_value2 = _interopRequireDefault(_ui_adapter_compatible_value);

var _initialize_content = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var UI_CONFIG_KEYS = ['title', 'description', 'thumbnail'];

  /* The AppAdapter is provided to the UI by the App.
   * The UI uses it as a communication channel to the App.
   * It is the counterpart of the UiAdapter.
   *
   * Communication should use only built-in datatypes,
   * i.e. communicate using `string` and `array`, not `BasicObj`.
   */
  var AppAdapter = {
    contentBrowserConfiguration: function contentBrowserConfiguration() {
      return (0, _ui_adapter_compatible_value2.default)((0, _configure_content_browser.getContentBrowserConfiguration)());
    },
    titleForClass: function titleForClass(className) {
      return (0, _provide_editing_config.getEditingConfigFor)(className, 'title');
    },
    propertiesGroupsForClass: function propertiesGroupsForClass(className) {
      return (0, _provide_editing_config.getEditingConfigFor)(className, 'propertiesGroups');
    },
    generalPropertiesForClass: function generalPropertiesForClass(className) {
      return (0, _provide_editing_config.getEditingConfigFor)(className, 'properties');
    },
    hideInSelectionDialogsForClass: function hideInSelectionDialogsForClass(className) {
      return (0, _provide_editing_config.getEditingConfigFor)(className, 'hideInSelectionDialogs');
    },
    titleForObj: function titleForObj(objId) {
      return invokeCallbackFromUiConfigWithObjId('titleForContent', objId);
    },
    descriptionForObj: function descriptionForObj(objId) {
      return invokeCallbackFromUiConfigWithObjId('descriptionForContent', objId);
    },
    titleForWidget: function titleForWidget(objId, widgetId) {
      var obj = (0, _window_context.getWindowContext)().Obj.getIncludingDeleted(objId);
      var widget = obj.widget(widgetId);
      return invokeCallbackFromUiConfigWithObj('titleForContent', widget);
    },
    thumbnailForObj: function thumbnailForObj(objId) {
      return invokeCallbackFromUiConfigWithObjId('thumbnailForContent', objId);
    },


    initializeContentForObj: _initialize_content.initializeContentForObj,
    initializeContentForWidget: _initialize_content.initializeContentForWidget,

    getClasses: function getClasses() {
      var realm = (0, _window_context.getWindowContext)();
      var classDatas = [];

      (0, _underscore.each)(realm.allObjClasses(), function (modelClass, name) {
        return classDatas.push(buildClassData('Obj', name, modelClass));
      });

      (0, _underscore.each)(realm.allWidgetClasses(), function (modelClass, name) {
        return classDatas.push(buildClassData('Widget', name, modelClass));
      });

      return classDatas;
    },
    navigateTo: function navigateTo(objId) {
      (0, _navigate_to2.default)(function () {
        return (0, _window_context.getWindowContext)().Obj.get(objId);
      });
    },


    mountComponent: _mount_component.mountComponent,

    resolveUrl: function resolveUrl(url) {
      return (0, _resolve_url2.default)(url).then(function (resolvedUrl) {
        if (resolvedUrl && resolvedUrl.obj) {
          return createRecognizedUrl(resolvedUrl);
        }

        return null;
      });
    },
    getDocumentHeight: function getDocumentHeight() {
      return (0, _window_proxy.getDocument)().querySelector('html').getBoundingClientRect().height;
    },
    transformHTML: function transformHTML(htmlString) {
      return (0, _internal_links.transformHTML)(htmlString);
    }
  };

  function buildClassData(type, name, modelClass) {
    var schema = _schema2.default.forClass(modelClass);
    var classData = {
      name: name,
      type: type,
      attributes: buildAttributeData(schema, (0, _underscore.keys)(schema.attributes)),
      validContainerClasses: schema.validContainerClasses
    };

    addValuesFromUiConfig(classData, name);
    addAttributeValuesFromUiConfig(classData, name);

    return classData;
  }

  function buildAttributeData(schema, names) {
    return names.map(function (name) {
      var _schema$attributeDefi = schema.attributeDefinition(name),
          _schema$attributeDefi2 = _slicedToArray(_schema$attributeDefi, 2),
          type = _schema$attributeDefi2[0],
          options = _schema$attributeDefi2[1];

      var attributeDefinition = { name: name, type: type };

      if (options) {
        if (options.only) {
          attributeDefinition.only = options.only;
        }
        if (options.values) {
          attributeDefinition.values = options.values;
        }
      }

      return attributeDefinition;
    });
  }

  function addValuesFromUiConfig(classData, className) {
    UI_CONFIG_KEYS.forEach(function (uiConfigKey) {
      var uiConfigValue = (0, _provide_editing_config.getEditingConfigFor)(className, uiConfigKey);

      if (uiConfigValue) {
        classData[uiConfigKey] = uiConfigValue;
      }
    });
  }

  function addAttributeValuesFromUiConfig(classData, className) {
    var attributes = (0, _provide_editing_config.getEditingConfigFor)(className, 'attributes');

    if (!attributes) {
      return;
    }

    Object.keys(attributes).forEach(function (name) {
      var attributeDefinition = (0, _underscore.findWhere)(classData.attributes, { name: name });

      if (attributeDefinition) {
        var _attributes$name = attributes[name],
            title = _attributes$name.title,
            description = _attributes$name.description,
            values = _attributes$name.values;

        var attrs = { title: title, description: description };

        if (values) {
          attrs.valuesLocalization = values;
        }

        (0, _underscore.extend)(attributeDefinition, attrs);
      }
    });
  }

  function invokeCallbackFromUiConfigWithObjId(callbackName, objId) {
    var obj = (0, _window_context.getWindowContext)().Obj.getIncludingDeleted(objId);
    return invokeCallbackFromUiConfigWithObj(callbackName, obj);
  }

  function invokeCallbackFromUiConfigWithObj(callbackName, obj) {
    var callback = (0, _provide_editing_config.getEditingConfigFor)(obj.objClass(), callbackName);
    if (callback) {
      return callback(obj);
    }
  }

  function createRecognizedUrl(resolvedUrl) {
    var hash = {
      obj_id: resolvedUrl.obj.id()
    };

    if (resolvedUrl.url.fragment()) {
      hash.fragment = resolvedUrl.url.fragment();
    }

    if (resolvedUrl.url.search()) {
      hash.query = resolvedUrl.url.search();
    }

    return hash;
  }

  scrivito.AppAdapter = AppAdapter;
})();

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _urijs = __webpack_require__(23);

var _urijs2 = _interopRequireDefault(_urijs);

var _underscore = __webpack_require__(0);

var _load = __webpack_require__(21);

var _load2 = _interopRequireDefault(_load);

var _configure = __webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolveUrl(url) {
  var parsedUrlToResolve = (0, _urijs2.default)(url);

  if (!(0, _configure.isConfigured)()) {
    return scrivito.Promise.resolve(null);
  }

  return (0, _load2.default)(function () {
    return scrivito.Routing.recognize(url);
  }).then(function (target) {
    if (!target.path) {
      return null;
    }

    if ((0, _underscore.include)(['/', ''], target.path)) {
      return null;
    }

    return { obj: target.obj, url: parsedUrlToResolve };
  });
}

exports.default = resolveUrl;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _underscore = __webpack_require__(0);

var _current_page = __webpack_require__(17);

var _window_proxy = __webpack_require__(22);

var window = _interopRequireWildcard(_window_proxy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  function pushWith(_ref) {
    var obj = _ref.obj,
        queryParameters = _ref.queryParameters,
        hash = _ref.hash;

    var state = {
      scrivitoObjId: obj.id(),
      scrivitoQueryParameters: queryParameters,
      scrivitoHash: hash
    };
    var url = scrivito.Routing.generate({ obj: obj, queryParameters: queryParameters, hash: hash });
    var history = window.history();

    if (history.state && history.state.scrivitoObjId === obj.id() && (0, _underscore.isEqual)(history.state.scrivitoQueryParameters, queryParameters) && history.state.scrivitoHash === hash) {
      // noop;
      return;
    }

    history.pushState(state, '', url);
  }

  function replaceWith(_ref2) {
    var obj = _ref2.obj,
        queryParameters = _ref2.queryParameters,
        hash = _ref2.hash;

    var state = {
      scrivitoObjId: obj.id(),
      scrivitoQueryParameters: queryParameters,
      scrivitoHash: hash
    };
    var url = scrivito.Routing.generate({ obj: obj, queryParameters: queryParameters, hash: hash });

    window.history().replaceState(state, '', url);
  }

  function handlePopEvents() {
    window.setOnpopstate(onpopstate);
  }

  function recognizeCurrentLocation() {
    var location = window.location().toString();
    (0, _current_page.replaceCurrentPage)(function () {
      var _scrivito$Routing$rec = scrivito.Routing.recognize(location),
          obj = _scrivito$Routing$rec.obj,
          queryParameters = _scrivito$Routing$rec.queryParameters,
          hash = _scrivito$Routing$rec.hash;

      if (obj) {
        return { obj: obj, queryParameters: queryParameters, hash: hash };
      }

      return { queryParameters: queryParameters, hash: hash };
    });
  }

  function init() {
    recognizeCurrentLocation();
    handlePopEvents();
  }

  function onpopstate(event) {
    var objId = void 0;
    var hash = void 0;
    var queryParameters = void 0;

    if (event.state) {
      objId = event.state.scrivitoObjId;
      hash = event.state.scrivitoHash;
      queryParameters = event.state.scrivitoQueryParameters;
    }

    if (objId) {
      (0, _current_page.replaceCurrentPage)(function () {
        return { obj: _basic_obj2.default.get(objId), queryParameters: queryParameters, hash: hash };
      });
    } else {
      recognizeCurrentLocation();
    }
  }

  // Do not use the function name "window",
  // otherwise you will no longer be able to access the global window

  scrivito.BrowserLocation = {};
  scrivito.BrowserLocation.init = init;
  scrivito.BrowserLocation.pushWith = pushWith;
  scrivito.BrowserLocation.replaceWith = replaceWith;
})();

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  function changeLocation(newLocation) {
    if (scrivito.uiAdapter) {
      // change the location of the parent, to avoid CSP errors.
      scrivito.uiAdapter.navigateToExternalUrl(newLocation);
    } else {
      scrivito.setWindowLocation(newLocation);
    }
  }

  function setWindowLocation(newLocation) {
    window.location = newLocation;
  }

  function openLocation(newLocation, target) {
    window.open(newLocation, target);
  }

  // For test purpose only.
  scrivito.setWindowLocation = setWindowLocation;
  scrivito.changeLocation = changeLocation;
  scrivito.openLocation = openLocation;
})();

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _urijs = __webpack_require__(23);

var _urijs2 = _interopRequireDefault(_urijs);

var _errors = __webpack_require__(1);

var _window_proxy = __webpack_require__(22);

var window = _interopRequireWildcard(_window_proxy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var basePath = void 0;
  var isInitialized = false;

  function init(_ref) {
    var routingBasePath = _ref.routingBasePath;

    isInitialized = true;
    basePath = routingBasePath || '';
  }

  // For test purpose only.
  function reset() {
    isInitialized = false;
    basePath = undefined;
  }

  function assertIsInitialized(methodName) {
    if (!isInitialized) {
      scrivito.logError('Error from Scrivito SDK: No application configured, cannot initialize routing.');
      throw new _errors.InternalError(methodName + ' can\'t be called before init.');
    }
  }

  function generate(_ref2) {
    var obj = _ref2.obj,
        queryParameters = _ref2.queryParameters,
        hash = _ref2.hash;

    assertIsInitialized('generate');

    var path = scrivito.RoutingPath.generate(obj);
    return generateUrl({ path: path, queryParameters: queryParameters, hash: hash });
  }

  function generateUrl(_ref3) {
    var path = _ref3.path,
        queryParameters = _ref3.queryParameters,
        hash = _ref3.hash;

    assertIsInitialized('generateUrl');

    var origin = (0, _urijs2.default)(window.location()).origin();
    var normalizedPath = ('/' + basePath + '/' + path).replace(/\/+/g, '/');
    var uri = (0, _urijs2.default)(origin).pathname(normalizedPath);

    if (queryParameters) {
      uri.query(queryParameters);
    }

    if (hash) {
      uri.hash(hash);
    }

    return uri.toString();
  }

  function recognize(url) {
    assertIsInitialized('recognize');
    var obj = null;

    var path = recognizePath(url);

    if (path || path === '') {
      obj = extractObjFromPath(path);
    }

    var queryParameters = extractQueryParameters(url);
    var hash = extractHashFromUrl(url);

    return { path: path, obj: obj, queryParameters: queryParameters, hash: hash };
  }

  function recognizePath(url) {
    var currentLocationOrigin = (0, _urijs2.default)(window.location()).origin();
    var uri = (0, _urijs2.default)(url);

    if (uri.is('absolute') && uri.origin() !== currentLocationOrigin) {
      return;
    }

    return extractPath(url);
  }

  function extractObjFromPath(path) {
    if (path !== null) {
      return scrivito.RoutingPath.recognize(path);
    }

    return null;
  }

  function extractPath(url) {
    var path = (0, _urijs2.default)(url).path();
    if (path.substring(0, basePath.length) !== basePath) {
      return null;
    }
    return path.substring(basePath.length);
  }

  function extractHashFromUrl(url) {
    var hash = (0, _urijs2.default)(url).hash();
    if (hash === '') {
      return null;
    }

    return hash;
  }

  function extractQueryParameters(url) {
    var parsedUrl = (0, _urijs2.default)(url);
    return parsedUrl.query(true);
  }

  scrivito.Routing = {};
  scrivito.Routing.init = init;
  scrivito.Routing.reset = reset;
  scrivito.Routing.generate = generate;
  scrivito.Routing.recognize = recognize;
  scrivito.Routing.generateUrl = generateUrl;
  scrivito.Routing.recognizePath = recognizePath;
})();

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _basic_obj = __webpack_require__(2);

var _basic_obj2 = _interopRequireDefault(_basic_obj);

var _underscore = __webpack_require__(0);

var _underscore2 = _interopRequireDefault(_underscore);

var _wrap_in_app_class = __webpack_require__(6);

var _window_registry = __webpack_require__(31);

var _errors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var homepageCallback = void 0;

  var RoutingPath = {
    init: function init(initHomepageCallback) {
      homepageCallback = initHomepageCallback;
    },
    generate: function generate(obj) {
      assertObjIsBasicObj(obj);
      if (isHomepage(obj)) {
        return '/';
      }
      if (obj.permalink()) {
        return '/' + obj.permalink();
      }
      var slug = generateSlug(obj);
      if (slug) {
        return '/' + slug + '-' + obj.id();
      }
      return '/' + obj.id();
    },
    recognize: function recognize(path) {
      assertPathIsString(path);

      if (_underscore2.default.include(['/', ''], path)) {
        return (0, _wrap_in_app_class.unwrapAppClassValue)(homepageCallback());
      }

      // remove leading /
      var pathWithoutLeadingSlash = removeLeadingChars(path, '/');

      var obj = _basic_obj2.default.getByPermalink(pathWithoutLeadingSlash);
      if (obj) {
        return obj;
      }

      return _basic_obj2.default.get(extractObjIdFromPath(pathWithoutLeadingSlash));
    },


    // For test purpose only.
    get homepageCallback() {
      return homepageCallback;
    },

    // For test purpose only.
    resetHomepageCallback: function resetHomepageCallback() {
      homepageCallback = undefined;
    }
  };

  function removeLeadingChars(input, leadingChars) {
    if (input.substring(0, leadingChars.length) === leadingChars) {
      return input.substring(leadingChars.length);
    }

    return input;
  }

  function isHomepage(obj) {
    if (!homepageCallback) {
      return false;
    }
    var homepage = scrivito.loadableWithDefault(null, homepageCallback);
    if (!homepage) {
      return false;
    }
    return homepage.id() === obj.id();
  }

  function assertObjIsBasicObj(obj) {
    if (!(obj instanceof _basic_obj2.default)) {
      throw new _errors.ArgumentError('Parameter obj needs to be a BasicObj.');
    }
  }

  function assertPathIsString(input) {
    if (!_underscore2.default.isString(input)) {
      throw new _errors.ArgumentError('Parameter path needs to be a String.');
    }
  }

  function generateSlug(basicObj) {
    var registry = (0, _window_registry.getWindowRegistry)();
    var appObj = (0, _wrap_in_app_class.wrapInAppClass)(registry, basicObj);

    return appObj.slug();
  }

  function extractObjIdFromPath(input) {
    var last = _underscore2.default.last(input.split('-'));
    return _underscore2.default.last(last.split('/'));
  }

  scrivito.RoutingPath = RoutingPath;
})();

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(170);

__webpack_require__(171);

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!window.scrivito) {
  window.scrivito = {};
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var currentFocus = void 0;
  var currentToken = 0;
  var handlers = {};

  var WidgetFocus = {
    subscribe: function subscribe(_ref) {
      var onFocus = _ref.onFocus,
          onBlur = _ref.onBlur;

      var token = currentToken;

      handlers[token] = { onFocus: onFocus, onBlur: onBlur };
      currentToken += 1;

      return token;
    },
    unsubscribe: function unsubscribe(token) {
      delete handlers[token];
    },
    notifyFocus: function notifyFocus(token) {
      currentFocus = token;
      handlers[currentFocus].onFocus();
    },
    notifyBlur: function notifyBlur(token) {
      // Performance optimization: Only re-render the widget, which lost the focus.
      if (token === currentFocus) {
        handlers[token].onBlur();
      }
    },


    // For test purpose only.
    get handlers() {
      return handlers;
    },

    // For test purpose only.
    reset: function reset() {
      currentFocus = undefined;
      currentToken = 0;
      handlers = {};
    }
  };

  scrivito.WidgetFocus = WidgetFocus;
})();

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = openContentBrowser;

var _underscore = __webpack_require__(0);

var _ui_adapter_compatible_value = __webpack_require__(36);

var _ui_adapter_compatible_value2 = _interopRequireDefault(_ui_adapter_compatible_value);

var _configure_content_browser = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function openContentBrowser(options) {
  return scrivito.uiAdapter.openContentBrowser((0, _ui_adapter_compatible_value2.default)((0, _underscore.extend)({}, (0, _configure_content_browser.getContentBrowserConfiguration)(), (0, _underscore.pick)(options, 'selection', 'selectionMode'))));
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadEditingAssets;
exports.setAssetUrlBase = setAssetUrlBase;

var _asset_loading = __webpack_require__(72);

var assetUrlBase = "https://assets.scrivito.com/sjs/0.1.0-beta";

function loadEditingAssets(targetDocument) {
  (0, _asset_loading.loadCss)(assetUrlBase + '/scrivito_editing.css', targetDocument);
  (0, _asset_loading.loadJs)(assetUrlBase + '/scrivito_editing.js', targetDocument);
}

// For test purpose only.
function setAssetUrlBase(url) {
  assetUrlBase = url;
}

/***/ })
/******/ ]);
});