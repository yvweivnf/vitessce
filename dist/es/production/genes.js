module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 214);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CoordinationType; });
/**
 * This file defines the current constant values.
 * To deprecate a value, add it to ./constants-old.js
 * with a corresponding log message.
 */var Component={DESCRIPTION:'description',STATUS:'status',GENES:'genes',CELL_SETS:'cellSets',SCATTERPLOT:'scatterplot',SPATIAL:'spatial',HEATMAP:'heatmap',LAYER_CONTROLLER:'layerController',CELL_SET_SIZES:'cellSetSizes',GENOMIC_PROFILES:'genomicProfiles',CELL_SET_EXPRESSION:'cellSetExpression',EXPRESSION_HISTOGRAM:'expressionHistogram',GATING:'gating'};var DataType={CELLS:'cells',CELL_SETS:'cell-sets',EXPRESSION_MATRIX:'expression-matrix',GENOMIC_PROFILES:'genomic-profiles',MOLECULES:'molecules',NEIGHBORHOODS:'neighborhoods',RASTER:'raster'};var FileType={CELLS_JSON:'cells.json',CELL_SETS_JSON:'cell-sets.json',EXPRESSION_MATRIX_ZARR:'expression-matrix.zarr',GENOMIC_PROFILES_ZARR:'genomic-profiles.zarr',MOLECULES_JSON:'molecules.json',NEIGHBORHOODS_JSON:'neighborhoods.json',RASTER_JSON:'raster.json',RASTER_OME_ZARR:'raster.ome-zarr',CLUSTERS_JSON:'clusters.json',GENES_JSON:'genes.json',ANNDATA_CELL_SETS_ZARR:'anndata-cell-sets.zarr',ANNDATA_CELLS_ZARR:'anndata-cells.zarr',ANNDATA_EXPRESSION_MATRIX_ZARR:'anndata-expression-matrix.zarr'};/**
 * Constants representing names of coordination types,
 * to help prevent typos.
 */var CoordinationType={DATASET:'dataset',// Entity types
OBS_TYPE:'obsType',FEATURE_TYPE:'featureType',FEATURE_VALUE_TYPE:'featureValueType',// Other types
EMBEDDING_TYPE:'embeddingType',EMBEDDING_ZOOM:'embeddingZoom',EMBEDDING_ROTATION:'embeddingRotation',EMBEDDING_TARGET_X:'embeddingTargetX',EMBEDDING_TARGET_Y:'embeddingTargetY',EMBEDDING_TARGET_Z:'embeddingTargetZ',EMBEDDING_OBS_SET_POLYGONS_VISIBLE:'embeddingObsSetPolygonsVisible',EMBEDDING_OBS_SET_LABELS_VISIBLE:'embeddingObsSetLabelsVisible',EMBEDDING_OBS_SET_LABEL_SIZE:'embeddingObsSetLabelSize',EMBEDDING_OBS_RADIUS:'embeddingObsRadius',EMBEDDING_OBS_RADIUS_MODE:'embeddingObsRadiusMode',EMBEDDING_OBS_OPACITY:'embeddingObsOpacity',EMBEDDING_OBS_OPACITY_MODE:'embeddingObsOpacityMode',SPATIAL_ZOOM:'spatialZoom',SPATIAL_ROTATION:'spatialRotation',SPATIAL_TARGET_X:'spatialTargetX',SPATIAL_TARGET_Y:'spatialTargetY',SPATIAL_TARGET_Z:'spatialTargetZ',SPATIAL_ROTATION_X:'spatialRotationX',SPATIAL_ROTATION_Y:'spatialRotationY',SPATIAL_ROTATION_Z:'spatialRotationZ',SPATIAL_ROTATION_ORBIT:'spatialRotationOrbit',SPATIAL_ORBIT_AXIS:'spatialOrbitAxis',SPATIAL_AXIS_FIXED:'spatialAxisFixed',HEATMAP_ZOOM_X:'heatmapZoomX',HEATMAP_ZOOM_Y:'heatmapZoomY',HEATMAP_TARGET_X:'heatmapTargetX',HEATMAP_TARGET_Y:'heatmapTargetY',OBS_FILTER:'obsFilter',OBS_HIGHLIGHT:'obsHighlight',OBS_SET_SELECTION:'obsSetSelection',OBS_SET_HIGHLIGHT:'obsSetHighlight',OBS_SET_COLOR:'obsSetColor',FEATURE_FILTER:'featureFilter',FEATURE_HIGHLIGHT:'featureHighlight',FEATURE_SELECTION:'featureSelection',FEATURE_VALUE_COLORMAP:'featureValueColormap',FEATURE_VALUE_TRANSFORM:'featureValueTransform',FEATURE_VALUE_COLORMAP_RANGE:'featureValueColormapRange',OBS_COLOR_ENCODING:'obsColorEncoding',SPATIAL_IMAGE_LAYER:'spatialImageLayer',SPATIAL_SEGMENTATION_LAYER:'spatialSegmentationLayer',SPATIAL_POINT_LAYER:'spatialPointLayer',SPATIAL_NEIGHBORHOOD_LAYER:'spatialNeighborhoodLayer',GENOMIC_ZOOM_X:'genomicZoomX',GENOMIC_ZOOM_Y:'genomicZoomY',GENOMIC_TARGET_X:'genomicTargetX',GENOMIC_TARGET_Y:'genomicTargetY',ADDITIONAL_OBS_SETS:'additionalObsSets',// TODO: use obsHighlight rather than moleculeHighlight.
MOLECULE_HIGHLIGHT:'moleculeHighlight',GATING_FEATURE_SELECTION_X:'gatingFeatureSelectionX',GATING_FEATURE_SELECTION_Y:'gatingFeatureSelectionY',FEATURE_VALUE_TRANSFORM_COEFFICIENT:'featureValueTransformCoefficient'};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || _nonIterableRest();
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fromEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return pluralize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getLongestString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getNextScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSourceFromLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isRgb; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* eslint-disable no-plusplus */ // Adapted from https://github.com/feross/fromentries/blob/29b52a850bb3a47c390937631c2638edf3443942/index.js
function fromEntries(iterable){return Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(iterable).reduce(function(obj,_ref){var key=_ref[0],val=_ref[1];return Object.assign(obj,Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},key,val));},{});}/**
 * Select between a singular and plural version of a word,
 * based on an item count.
 * @param {string} singular The singular version of the word.
 * @param {string} plural The plural version of the word.
 * @param {number} count The number of items.
 * @returns {string} Singular if count is one, else plural.
 */function pluralize(singular,plural,count){return count===1?singular:plural;}/**
 * Capitalize a the first letter of a string.
 * @param {string} word A string to capitalize.
 * @returns {string} The word parameter with the first letter capitalized.
 */function capitalize(word){return word.charAt(0).toUpperCase()+word.slice(1);}/**
 * Get the longest string in the array of strings.
 * @param {string[]} strings The array of strings.
 * @returns The longest string.
 */function getLongestString(strings){return strings.reduce(function(prevLongest,currentValue){return prevLongest.length>currentValue.length?prevLongest:currentValue;});}/**
 * Generate a new scope name which does not
 * conflict / overlap with a previous scope name.
 * Really these just need to be unique within the coordination object.
 * So in theory they could be String(Math.random()) or uuidv4() or something.
 * However it may be good to make them more human-readable and memorable
 * since eventually we will want to expose a UI to update the coordination.
 * @param {string[]} prevScopes Previous scope names.
 * @returns {string} The new scope name.
 */function getNextScope(prevScopes){// Keep an ordered list of valid characters.
var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';// Store the value of the next character for each position
// in the new string.
// For example, [0] -> "A", [1] -> "B", [0, 1] -> "AB"
var nextCharIndices=[0];// Generate a new scope name,
// potentially conflicting with an existing name.
// Reference: https://stackoverflow.com/a/12504061
function next(){var r=[];nextCharIndices.forEach(function(charIndex){r.unshift(chars[charIndex]);});var increment=true;for(var i=0;i<nextCharIndices.length;i++){var val=++nextCharIndices[i];if(val>=chars.length){nextCharIndices[i]=0;}else{increment=false;break;}}if(increment){nextCharIndices.push(0);}return r.join('');}var nextScope;do{nextScope=next();}while(prevScopes.includes(nextScope));return nextScope;}/**
 * Get a representative PixelSource from a loader object returned from
 * the Vitessce imaging loaders
 * @param {object} loader { data: (PixelSource[]|PixelSource), metadata, channels } object
 * @param {number=} level Level of the multiscale loader from which to get a PixelSource
 * @returns {object} PixelSource object
 */function getSourceFromLoader(loader,level){var data=loader.data;var source=Array.isArray(data)?data[level||data.length-1]:data;return source;}/*
 * Helper method to determine whether pixel data is interleaved and rgb or not.
 * @param {object} loader
 */function isRgb(loader){var source=getSourceFromLoader(loader);var shape=source.shape,dtype=source.dtype,labels=source.labels;var channelSize=shape[labels.indexOf('c')];return channelSize===3&&dtype==='Uint8';}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ViewConfigProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return useViewConfigStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return useViewConfigStoreApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuxiliaryProvider; });
/* unused harmony export useAuxiliaryStore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createViewConfigStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return useComponentLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createAuxiliaryStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return useCoordination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return useDatasetUids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return useMultiDatasetCoordination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useAuxiliaryCoordination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return useLoaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return useLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return useRemoveComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useChangeLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return useSetLoaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useSetViewConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useComponentHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return useSetComponentHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return useWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return useSetWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return useComponentViewInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return useSetComponentViewInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return useGridResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return useEmitGridResize; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zustand__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var zustand_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57);
/* harmony import */ var zustand_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(zustand_context__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var zustand_shallow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var zustand_shallow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(zustand_shallow__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
// Reference: https://github.com/pmndrs/zustand#react-context
// Reference: https://github.com/pmndrs/zustand/blob/e47ea03/tests/context.test.tsx#L60
var _createContext=zustand_context__WEBPACK_IMPORTED_MODULE_5___default()(),ViewConfigProviderLocal=_createContext.Provider,useViewConfigStoreLocal=_createContext.useStore,useViewConfigStoreApiLocal=_createContext.useStoreApi;var ViewConfigProvider=ViewConfigProviderLocal;var useViewConfigStore=useViewConfigStoreLocal;var useViewConfigStoreApi=useViewConfigStoreApiLocal;var _createContext2=zustand_context__WEBPACK_IMPORTED_MODULE_5___default()(),AuxiliaryProviderLocal=_createContext2.Provider,useAuxiliaryStoreLocal=_createContext2.useStore;var AuxiliaryProvider=AuxiliaryProviderLocal;var useAuxiliaryStore=useAuxiliaryStoreLocal;/**
 * The useViewConfigStore hook is initialized via the zustand
 * create() function, which sets up both the state variables
 * and the reducer-type functions.
 * Reference: https://github.com/react-spring/zustand
 * @returns {function} The useStore hook.
 */var createViewConfigStore=function createViewConfigStore(){return zustand__WEBPACK_IMPORTED_MODULE_4___default()(function(set){return{// State:
// The viewConfig is an object which must conform to the schema
// found in src/schemas/config.schema.json.
viewConfig:null,// The loaders object is a mapping from dataset ID to
// data type to loader object instance.
loaders:null,// Reducer functions which update the state
// (although technically also part of state):
setViewConfig:function setViewConfig(viewConfig){return set({viewConfig:viewConfig});},setLoaders:function setLoaders(loaders){return set({loaders:loaders});},setCoordinationValue:function setCoordinationValue(_ref){var parameter=_ref.parameter,scope=_ref.scope,value=_ref.value;return set(function(state){return{viewConfig:Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({},state.viewConfig,{coordinationSpace:Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({},state.viewConfig.coordinationSpace,Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},parameter,Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({},state.viewConfig.coordinationSpace[parameter],Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},scope,value))))})};});},removeComponent:function removeComponent(uid){return set(function(state){var newLayout=state.viewConfig.layout.filter(function(c){return c.uid!==uid;});return{viewConfig:Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({},state.viewConfig,{layout:newLayout})};});},changeLayout:function changeLayout(newComponentProps){return set(function(state){var newLayout=state.viewConfig.layout.slice();newComponentProps.forEach(function(_ref2){var _ref3=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref2,2),i=_ref3[0],newProps=_ref3[1];newLayout[i]=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({},newLayout[i],{},newProps);});return{viewConfig:Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({},state.viewConfig,{layout:newLayout})};});}};});};/**
 * Hook for getting components' layout from the view config based on
 * matching all coordination scopes.
 * @returns {Object} The components' layout.
 */var useComponentLayout=function useComponentLayout(component,scopes,coordinationScopes){return useViewConfigStore(function(state){return state.viewConfig.layout.filter(function(l){return l.component===component;}).filter(function(l){return scopes.every(function(scope){return l.coordinationScopes[scope]===coordinationScopes[scope];});});});};/**
 * The useAuxiliaryStore hook is initialized via the zustand
 * create() function, which sets up both the state variables
 * and the reducer-type functions.
 * Reference: https://github.com/react-spring/zustand
 * It is meant to be used for non-viewconfig-based coordination between components.
 * For example, as currently happens, the layer controller can coordinate
 * on-load callbacks with spatial view based on whether or not they are
 * coordinated via `spatialImageLayer` - the callbacks are not part of the view config
 * though so they live here.
 * @returns {function} The useStore hook.
 */var createAuxiliaryStore=function createAuxiliaryStore(){return zustand__WEBPACK_IMPORTED_MODULE_4___default()(function(set){return{auxiliaryStore:null,setCoordinationValue:function setCoordinationValue(_ref4){var parameter=_ref4.parameter,scope=_ref4.scope,value=_ref4.value;return set(function(state){return{auxiliaryStore:Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({},state.auxiliaryStore,Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},parameter,Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},scope,value)))};});}};});};/**
 * The hover store can be used to store global state
 * related to which component is currently hovered,
 * which is required for tooltip / crossover elements.
 * @returns {function} The useStore hook.
 */var useHoverStore=zustand__WEBPACK_IMPORTED_MODULE_4___default()(function(set){return{// Components may need to know if they are the "hover source"
// for tooltip interactions. This value should be a unique
// component ID, such as its index in the view config layout.
componentHover:null,setComponentHover:function setComponentHover(componentHover){return set({componentHover:componentHover});}};});/**
 * The warning store can be used to store global state
 * related to app warning messages.
 * @returns {function} The useStore hook.
 */var useWarnStore=zustand__WEBPACK_IMPORTED_MODULE_4___default()(function(set){return{// Want a global state to collect warning messages
// that occur anywhere in the app.
warning:null,setWarning:function setWarning(warning){return set({warning:warning});}};});/**
 * The view info store can be used to store component-level
 * viewInfo objects,
 * which are required for tooltip / crossover elements.
 * @returns {function} The useStore hook.
 */var useViewInfoStore=zustand__WEBPACK_IMPORTED_MODULE_4___default()(function(set){return{// The viewInfo object is a mapping from
// component IDs to component view info objects.
// Each view info object must have a project() function.
viewInfo:{},setComponentViewInfo:function setComponentViewInfo(uuid,viewInfo){return set(function(state){return{viewInfo:Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({},state.viewInfo,Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},uuid,viewInfo))};});}};});/**
 * The grid size store can be used to store a
 * counter which updates on each window or react-grid-layout
 * resize event.
 * @returns {function} The useStore hook.
 */var useGridSizeStore=zustand__WEBPACK_IMPORTED_MODULE_4___default()(function(set){return{resizeCount:{},incrementResizeCount:function incrementResizeCount(){return set(function(state){return{resizeCount:state.resizeCount+1};});}};});/**
 * The useCoordination hook returns both the
 * values and setter functions for the coordination objects
 * in a particular coordination scope mapping.
 * This hook is intended to be used within the ___Subscriber
 * components to allow them to "hook into" only those coordination
 * objects and setter functions of relevance.
 * @param {string[]} parameters Array of coordination types.
 * @param {object} coordinationScopes Mapping of coordination types
 * to scope names.
 * @returns {array} Returns a tuple [values, setters]
 * where values is an object containing all coordination values,
 * and setters is an object containing all coordination setter
 * functions for the values in `values`, named with a "set"
 * prefix.
 */function useCoordination(parameters,coordinationScopes){var setCoordinationValue=useViewConfigStore(function(state){return state.setCoordinationValue;});var values=useViewConfigStore(function(state){var coordinationSpace=state.viewConfig.coordinationSpace;return Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* fromEntries */ "b"])(parameters.map(function(parameter){if(coordinationSpace&&coordinationSpace[parameter]){var value=coordinationSpace[parameter][coordinationScopes[parameter]];return[parameter,value];}return[parameter,undefined];}));},zustand_shallow__WEBPACK_IMPORTED_MODULE_6___default.a);var setters=Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function(){return Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* fromEntries */ "b"])(parameters.map(function(parameter){var setterName="set".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* capitalize */ "a"])(parameter));var setterFunc=function setterFunc(value){return setCoordinationValue({parameter:parameter,scope:coordinationScopes[parameter],value:value});};return[setterName,setterFunc];// eslint-disable-next-line react-hooks/exhaustive-deps
}));},[parameters,coordinationScopes]);return[values,setters];}/**
 * Get a mapping from dataset coordination scopes to dataset UIDs.
 * @param {object} coordinationScopes The coordination scope mapping object for a view.
 * @returns {object} Mapping from dataset coordination scope names to dataset UIDs.
 */function useDatasetUids(coordinationScopes){var parameter=_constants__WEBPACK_IMPORTED_MODULE_7__[/* CoordinationType */ "b"].DATASET;var datasetScopes=coordinationScopes[parameter];// Mapping from dataset coordination scope name to dataset uid
var datasetUids=useViewConfigStore(function(state){var coordinationSpace=state.viewConfig.coordinationSpace;// Convert a single scope to an array of scopes to be consistent.
var datasetScopesArr=Array.isArray(datasetScopes)?datasetScopes:[datasetScopes];return Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* fromEntries */ "b"])(datasetScopesArr.map(function(datasetScope){if(coordinationSpace&&coordinationSpace[parameter]){var value=coordinationSpace[parameter][datasetScope];return[datasetScope,value];}return[datasetScope,undefined];}));},zustand_shallow__WEBPACK_IMPORTED_MODULE_6___default.a);return datasetUids;}/**
 * Use coordination values and coordination setter functions corresponding to
 * dataset-specific coordination scopes for each coordination type.
 * @param {string[]} parameters An array of coordination types supported by a view.
 * @param {object} coordinationScopes The coordination scope mapping object for a view.
 * @returns {array} [cValues, cSetters] where
 * cValues is a mapping from coordination scope name to { coordinationType: coordinationValue },
 * and cSetters is a mapping from coordination scope name to { setCoordinationType }
 * setter functions.
 */function useMultiDatasetCoordination(parameters,coordinationScopes){var setCoordinationValue=useViewConfigStore(function(state){return state.setCoordinationValue;});var datasetScopes=coordinationScopes[_constants__WEBPACK_IMPORTED_MODULE_7__[/* CoordinationType */ "b"].DATASET];// Convert a single scope to an array of scopes to be consistent.
var datasetScopesArr=Array.isArray(datasetScopes)?datasetScopes:[datasetScopes];var values=useViewConfigStore(function(state){var coordinationSpace=state.viewConfig.coordinationSpace;return Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* fromEntries */ "b"])(datasetScopesArr.map(function(datasetScope){var datasetValues=Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* fromEntries */ "b"])(parameters.map(function(parameter){if(coordinationSpace&&coordinationSpace[parameter]){var value;var parameterSpace=coordinationSpace[parameter];var parameterScope=coordinationScopes[parameter];if(typeof parameterScope==='object'){value=parameterSpace[parameterScope[datasetScope]];}else if(typeof parameterScope==='string'){value=parameterSpace[parameterScope];}else{console.error("coordination scope for ".concat(parameter," must be of type string or object."));}return[parameter,value];}return[parameter,undefined];}));return[datasetScope,datasetValues];}));},zustand_shallow__WEBPACK_IMPORTED_MODULE_6___default.a);var setters=Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function(){return Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* fromEntries */ "b"])(datasetScopesArr.map(function(datasetScope){var datasetSetters=Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* fromEntries */ "b"])(parameters.map(function(parameter){var setterName="set".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* capitalize */ "a"])(parameter));var setterFunc;var parameterScope=coordinationScopes[parameter];if(typeof parameterScope==='object'){setterFunc=function setterFunc(value){return setCoordinationValue({parameter:parameter,scope:parameterScope[datasetScope],value:value});};}else if(typeof parameterScope==='string'){setterFunc=function setterFunc(value){return setCoordinationValue({parameter:parameter,scope:parameterScope,value:value});};}else{console.error("coordination scope for ".concat(parameter," must be of type string or object."));}return[setterName,setterFunc];}));return[datasetScope,datasetSetters];// eslint-disable-next-line react-hooks/exhaustive-deps
}));},[parameters,coordinationScopes]);return[values,setters];}var AUXILIARY_COORDINATION_TYPES_MAP={spatialImageLayer:['rasterLayersCallbacks','areLoadingRasterChannnels']};/**
 * The maps the coordination types of incoming scopes to new types
 * for the auxiliary store.
 * @param {object} coordinationScopes Mapping of coordination types
 * to scope names.
 * @returns {object} Mapping of coordination types
 * to new scope names for the auxiliary store.
 */var mapCoordinationScopes=function mapCoordinationScopes(coordinationScopes){var newCoordinationScopes={};Object.keys(coordinationScopes).forEach(function(key){var newCoordinationTypes=AUXILIARY_COORDINATION_TYPES_MAP[key]||[];newCoordinationTypes.forEach(function(coordinationType){newCoordinationScopes[coordinationType||key]=coordinationScopes[key];});});return newCoordinationScopes;};var mapParameters=function mapParameters(parameters){return parameters.map(function(parameter){return AUXILIARY_COORDINATION_TYPES_MAP[parameter];}).filter(Boolean).flat();};/**
 * The useAuxiliaryCoordination hook returns both the
 * values and setter functions for the auxiliary coordination objects
 * in a particular coordination scope mapping.
 * This hook is intended to be used within the ___Subscriber
 * components to allow them to "hook into" only those auxiliary coordination
 * objects and setter functions of relevance, for example "on load" callbacks.
 * @param {string[]} parameters Array of coordination types.
 * @param {object} coordinationScopes Mapping of coordination types
 * to scope names.
 * @returns {array} Returns a tuple [values, setters]
 * where values is an object containing all coordination values,
 * and setters is an object containing all coordination setter
 * functions for the values in `values`, named with a "set"
 * prefix.
 */function useAuxiliaryCoordination(parameters,coordinationScopes){var setCoordinationValue=useAuxiliaryStore(function(state){return state.setCoordinationValue;});var mappedCoordinationScopes=mapCoordinationScopes(coordinationScopes);var mappedParameters=mapParameters(parameters);var values=useAuxiliaryStore(function(state){var auxiliaryStore=state.auxiliaryStore;return Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* fromEntries */ "b"])(mappedParameters.map(function(parameter){if(auxiliaryStore&&auxiliaryStore[parameter]){var value=auxiliaryStore[parameter][mappedCoordinationScopes[parameter]];return[parameter,value];}return[parameter,undefined];}));},zustand_shallow__WEBPACK_IMPORTED_MODULE_6___default.a);var setters=Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function(){return Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* fromEntries */ "b"])(mappedParameters.map(function(parameter){var setterName="set".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* capitalize */ "a"])(parameter));var setterFunc=function setterFunc(value){return setCoordinationValue({parameter:parameter,scope:mappedCoordinationScopes[parameter],value:value});};return[setterName,setterFunc];// eslint-disable-next-line react-hooks/exhaustive-deps
}));},[parameters,coordinationScopes]);return[values,setters];}/**
 * Obtain the loaders object from
 * the global app state.
 * @returns {object} The loaders object
 * in the `useViewConfigStore` store.
 */function useLoaders(){return useViewConfigStore(function(state){return state.loaders;});}/**
 * Obtain the view config layout array from
 * the global app state.
 * @returns {object[]} The layout array
 * in the `useViewConfigStore` store.
 */function useLayout(){return useViewConfigStore(function(state){var _state$viewConfig;return(_state$viewConfig=state.viewConfig)===null||_state$viewConfig===void 0?void 0:_state$viewConfig.layout;});}/**
 * Obtain the component removal function from
 * the global app state.
 * @returns {function} The remove component function
 * in the `useViewInfoStore` store.
 */function useRemoveComponent(){return useViewConfigStore(function(state){return state.removeComponent;});}/**
 * Obtain the component prop setter function from
 * the global app state.
 * @returns {function} The set component props function
 * in the `useViewInfoStore` store.
 */function useChangeLayout(){return useViewConfigStore(function(state){return state.changeLayout;});}/**
 * Obtain the loaders setter function from
 * the global app state.
 * @returns {function} The loaders setter function
 * in the `useViewConfigStore` store.
 */function useSetLoaders(){return useViewConfigStore(function(state){return state.setLoaders;});}/**
 * Obtain the view config setter function from
 * the global app state.
 * @returns {function} The view config setter function
 * in the `useViewConfigStore` store.
 */function useSetViewConfig(viewConfigStoreApi){var setViewConfigRef=Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(viewConfigStoreApi.getState().setViewConfig);var setViewConfig=setViewConfigRef.current;return setViewConfig;}/**
 * Obtain the component hover value from
 * the global app state.
 * @returns {number} The hovered component ID
 * in the `useHoverStore` store.
 */function useComponentHover(){return useHoverStore(function(state){return state.componentHover;});}/**
 * Obtain the component hover setter function from
 * the global app state.
 * @returns {function} The component hover setter function
 * in the `useHoverStore` store.
 */function useSetComponentHover(){return useHoverStore(function(state){return state.setComponentHover;});}/**
 * Obtain the warning message from
 * the global app state.
 * @returns {string} The warning message
 * in the `useWarnStore` store.
 */function useWarning(){return useWarnStore(function(state){return state.warning;});}/**
 * Obtain the warning setter function from
 * the global app state.
 * @returns {function} The warning setter function
 * in the `useWarnStore` store.
 */function useSetWarning(){return useWarnStore(function(state){return state.setWarning;});}/**
 * Obtain the component view info value from
 * the global app state.
 * @returns {object} The view info object for the component
 * in the `useViewInfoStore` store.
 */function useComponentViewInfo(uuid){return useViewInfoStore(Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function(state){return state.viewInfo[uuid];},[uuid]));}/**
 * Obtain the component view info setter function from
 * the global app state.
 * @returns {function} The component view info setter function
 * in the `useViewInfoStore` store.
 */function useSetComponentViewInfo(uuid){var setViewInfoRef=Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(useViewInfoStore.getState().setComponentViewInfo);var setComponentViewInfo=function setComponentViewInfo(viewInfo){return setViewInfoRef.current(uuid,viewInfo);};return setComponentViewInfo;}/**
 * Obtain the grid resize count value
 * from the global app state.
 * @returns {number} The grid resize increment value.
 */function useGridResize(){return useGridSizeStore(function(state){return state.resizeCount;});}/**
 * Obtain the grid resize count increment function
 * from the global app state.
 * @returns {function} The grid resize count increment
 * function.
 */function useEmitGridResize(){return useGridSizeStore(function(state){return state.incrementResizeCount;});}

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createSuper; });



function _createSuper(Derived) {
  return function () {
    var Super = Object(getPrototypeOf["a" /* default */])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEqual");

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useVitessceContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return useWindowDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useGridItemSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useDeckCanvasSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useClosestVitessceContainerSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useExpressionValueGetter; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _classNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
function getWindowDimensions(){var _window=window,width=_window.innerWidth,height=_window.innerHeight;return{width:width,height:height};}function useVitessceContainer(ref){return Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function(){if(ref.current){return ref.current.closest(".".concat(_classNames__WEBPACK_IMPORTED_MODULE_5__[/* VITESSCE_CONTAINER */ "e"]));}return null;},[ref]);}/**
 * Custom hook, gets the full window dimensions.
 * @returns {array} `[width, height]` where width and height
 * are numbers.
 */function useWindowDimensions(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(getWindowDimensions()),_useState2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState,2),windowDimensions=_useState2[0],setWindowDimensions=_useState2[1];Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){function handleResize(){setWindowDimensions(getWindowDimensions());}var onResizeDebounced=lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(handleResize,100,{trailing:true});window.addEventListener('resize',onResizeDebounced);return function(){return window.removeEventListener('resize',onResizeDebounced);};},[]);return windowDimensions;}/**
 * Custom hook, subscribes to GRID_RESIZE and window resize events.
 * @returns {array} `[width, height, containerRef]` where width and height
 * are numbers and containerRef is a React ref.
 */function useGridItemSize(){var containerRef=Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();var _useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState4=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState3,2),height=_useState4[0],setHeight=_useState4[1];var _useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState6=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5,2),width=_useState6[0],setWidth=_useState6[1];var resizeCount=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useGridResize */ "m"])();var incrementResizeCount=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useEmitGridResize */ "l"])();// On window resize events, increment the grid resize count.
Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){function onWindowResize(){incrementResizeCount();}var onResizeDebounced=lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(onWindowResize,100,{trailing:true});window.addEventListener('resize',onResizeDebounced);onWindowResize();return function(){window.removeEventListener('resize',onResizeDebounced);};},[incrementResizeCount]);// On new grid resize counts, re-compute the component
// width/height.
Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(!containerRef.current)return;var container=containerRef.current;var containerRect=container.getBoundingClientRect();setHeight(containerRect.height);setWidth(containerRect.width);},[resizeCount]);return[width,height,containerRef];}/**
 * Custom hook, subscribes to GRID_RESIZE and window resize events.
 * @returns {array} `[width, height, deckRef]` where width and height
 * are numbers and deckRef is a React ref to be used with
 * a <DeckGL/> element (or a forwardRef to one).
 */function useDeckCanvasSize(){var deckRef=Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();var _useState7=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState8=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState7,2),height=_useState8[0],setHeight=_useState8[1];var _useState9=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState10=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState9,2),width=_useState10[0],setWidth=_useState10[1];var resizeCount=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useGridResize */ "m"])();var incrementResizeCount=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useEmitGridResize */ "l"])();// On window resize events, increment the grid resize count.
Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){function onWindowResize(){incrementResizeCount();}var onResizeDebounced=lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(onWindowResize,100,{trailing:true});window.addEventListener('resize',onResizeDebounced);onWindowResize();return function(){window.removeEventListener('resize',onResizeDebounced);};},[incrementResizeCount]);// On new grid resize counts, re-compute the DeckGL canvas
// width/height.
Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(!deckRef.current)return;var canvas=deckRef.current.deck.canvas;var canvasRect=canvas.getBoundingClientRect();setHeight(canvasRect.height);setWidth(canvasRect.width);},[resizeCount]);return[width,height,deckRef];}/**
 * This hook handles a boolean isReady value,
 * which only returns true once every item in the
 * input list has been marked as "ready".
 * @param {string[]} items The items to wait on.
 * Should be defined as a constant
 * (outside a function component / render function),
 * otherwise strange bugs may occur.
 * @returns {array} An array
 * [isReady, setItemIsReady, setItemIsNotReady, resetReadyItems]
 * where isReady is the boolean value,
 * setItemIsReady marks one item as ready,
 * setItemIsNotReady marks one item as not ready,
 * and resetReadyItem marks all items as waiting.
 */function useReady(supportedItems){var items=supportedItems;var _useState11=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(items),_useState12=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState11,2),waiting=_useState12[0],setWaiting=_useState12[1];var setItemIsReady=Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function(readyItem){setWaiting(function(waitingItems){var nextWaitingItems=waitingItems.filter(function(item){return item!==readyItem;});// eslint-disable-next-line no-console
console.log("cleared ".concat(readyItem,"; waiting on ").concat(nextWaitingItems.length,": ").concat(JSON.stringify(nextWaitingItems)));return nextWaitingItems;});},[setWaiting]);var setItemIsNotReady=Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function(notReadyItem){setWaiting(function(waitingItems){var nextWaitingItems=[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(waitingItems),[notReadyItem]);// eslint-disable-next-line no-console
console.log("waiting on ".concat(nextWaitingItems.length,": ").concat(JSON.stringify(nextWaitingItems)));return nextWaitingItems;});},[setWaiting]);var resetReadyItems=Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function(){setWaiting(items);// eslint-disable-next-line no-console
console.log("waiting on ".concat(items.length,": ").concat(JSON.stringify(items)));},[setWaiting,items]);var isReady=waiting.length===0;return[isReady,setItemIsReady,setItemIsNotReady,resetReadyItems];}/**
 * This hook manages a list of URLs,
 * with adding and resetting helpers.
 * @returns {array} An array
 * [urls, addUrl, resetUrls]
 * where urls is the array of URL objects,
 * addUrl is a function for adding a URL to the array,
 * resetUrls is a function that clears the array.
 */function useUrls(){var _useState13=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),_useState14=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState13,2),urls=_useState14[0],setUrls=_useState14[1];var addUrl=Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function(url,name){if(url){setUrls(function(prev){return[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(prev),[{url:url,name:name}]);});}},[setUrls]);var resetUrls=Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function(){setUrls([]);},[setUrls]);return[urls,addUrl,resetUrls];}/**
 * Custom hook, subscribes to the width and height of the closest .vitessce-container
 * element and updates upon window resize events.
 * @param {Ref} ref A React ref object within the `.vitessce-container`.
 * @returns {array} `[width, height]` where width and height
 * are numbers.
 */function useClosestVitessceContainerSize(ref){var _useState15=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState16=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState15,2),height=_useState16[0],setHeight=_useState16[1];var _useState17=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState18=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState17,2),width=_useState18[0],setWidth=_useState18[1];Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){function onWindowResize(){if(ref.current){var _ref$current$closest=ref.current.closest('.vitessce-container'),componentHeight=_ref$current$closest.clientHeight,componentWidth=_ref$current$closest.clientWidth;setWidth(componentWidth);setHeight(componentHeight);}}var onResizeDebounced=lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(onWindowResize,100,{trailing:true});window.addEventListener('resize',onResizeDebounced);onWindowResize();return function(){window.removeEventListener('resize',onResizeDebounced);};},[ref]);return[width,height];}function useExpressionValueGetter(_ref){var attrs=_ref.attrs,expressionData=_ref.expressionData;// Get a mapping from cell ID to row index in the gene expression matrix.
var cellIdMap=Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function(){var result={};if(attrs&&attrs.rows){// eslint-disable-next-line no-plusplus
for(var i=0;i<attrs.rows.length;i++){result[attrs.rows[i]]=i;}}return result;},[attrs]);// Set up a getter function for gene expression values, to be used
// by the DeckGL layer to obtain values for instanced attributes.
var getExpressionValue=Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function(entry){var cellId=entry[0];if(cellIdMap&&expressionData&&expressionData[0]){var cellIndex=cellIdMap[cellId];var val=expressionData[0][cellIndex];return val;}return 0;},[cellIdMap,expressionData]);return getExpressionValue;}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/loaders/errors/AbstractLoaderError.js
var AbstractLoaderError = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(13);

// CONCATENATED MODULE: ./src/loaders/errors/LoaderValidationError.js
var LoaderValidationError_LoaderValidationError=/*#__PURE__*/function(_AbstractLoaderError){Object(inherits["a" /* default */])(LoaderValidationError,_AbstractLoaderError);var _super=Object(createSuper["a" /* default */])(LoaderValidationError);function LoaderValidationError(datasetType,datasetFileType,datasetUrl,reason){var _this;Object(classCallCheck["a" /* default */])(this,LoaderValidationError);_this=_super.call(this,"Error while validating ".concat(datasetType,"."));_this.name='LoaderValidationError';_this.datasetType=datasetType;_this.datasetFileType=datasetFileType;_this.datasetUrl=datasetUrl;_this.reason=reason;return _this;}Object(createClass["a" /* default */])(LoaderValidationError,[{key:"warnInConsole",value:function warnInConsole(){var datasetType=this.datasetType,datasetUrl=this.datasetUrl,reason=this.reason;console.warn("".concat(datasetType," from ").concat(datasetUrl,": validation failed"),JSON.stringify(reason,null,2));}}]);return LoaderValidationError;}(AbstractLoaderError["a" /* default */]);
// CONCATENATED MODULE: ./src/loaders/errors/LoaderNotFoundError.js
var LoaderNotFoundError_LoaderNotFoundError=/*#__PURE__*/function(_AbstractLoaderError){Object(inherits["a" /* default */])(LoaderNotFoundError,_AbstractLoaderError);var _super=Object(createSuper["a" /* default */])(LoaderNotFoundError);function LoaderNotFoundError(datasetType,datasetFileType,datasetUrl){var _this;Object(classCallCheck["a" /* default */])(this,LoaderNotFoundError);_this=_super.call(this,"Error finding loader for ".concat(datasetType,"."));_this.name='LoaderNotFoundError';_this.datasetType=datasetType;_this.datasetFileType=datasetFileType;_this.datasetUrl=datasetUrl;return _this;}Object(createClass["a" /* default */])(LoaderNotFoundError,[{key:"warnInConsole",value:function warnInConsole(){var datasetType=this.datasetType,datasetFileType=this.datasetFileType,datasetUrl=this.datasetUrl;if(datasetFileType&&datasetUrl){console.warn("".concat(datasetType," from ").concat(datasetUrl,": unable to find loader for fileType ").concat(datasetFileType));}else{console.warn("".concat(datasetType,": unable to find loader"));}}}]);return LoaderNotFoundError;}(AbstractLoaderError["a" /* default */]);
// CONCATENATED MODULE: ./src/loaders/errors/DatasetNotFoundError.js
var DatasetNotFoundError_DatasetNotFoundError=/*#__PURE__*/function(_AbstractLoaderError){Object(inherits["a" /* default */])(DatasetNotFoundError,_AbstractLoaderError);var _super=Object(createSuper["a" /* default */])(DatasetNotFoundError);function DatasetNotFoundError(datasetUid){var _this;Object(classCallCheck["a" /* default */])(this,DatasetNotFoundError);_this=_super.call(this,"Error finding dataset for ".concat(datasetUid,". Please check that at least one dataset exists in the view config."));_this.name='DatasetNotFoundError';_this.datasetUid=datasetUid;return _this;}Object(createClass["a" /* default */])(DatasetNotFoundError,[{key:"warnInConsole",value:function warnInConsole(){var datasetUid=this.datasetUid;if(datasetUid){console.warn("Unable to find dataset for ".concat(datasetUid));}else{console.warn('No dataset uid specified.');}}}]);return DatasetNotFoundError;}(AbstractLoaderError["a" /* default */]);
// CONCATENATED MODULE: ./src/loaders/errors/index.js
/* concated harmony reexport AbstractLoaderError */__webpack_require__.d(__webpack_exports__, "a", function() { return AbstractLoaderError["a" /* default */]; });
/* concated harmony reexport LoaderValidationError */__webpack_require__.d(__webpack_exports__, "d", function() { return LoaderValidationError_LoaderValidationError; });
/* concated harmony reexport LoaderNotFoundError */__webpack_require__.d(__webpack_exports__, "c", function() { return LoaderNotFoundError_LoaderNotFoundError; });
/* concated harmony reexport DatasetNotFoundError */__webpack_require__.d(__webpack_exports__, "b", function() { return DatasetNotFoundError_DatasetNotFoundError; });


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@hms-dbmi/viv");

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCellsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCellSetsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useExpressionMatrixData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useGeneSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useExpressionAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return useMoleculesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return useNeighborhoodsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return useRasterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useGenomicProfilesData; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _app_state_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _loaders_errors_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _spatial_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34);
/* harmony import */ var _app_plugins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44);
/**
 * Warn via publishing to the console
 * and to the global warning store.
 * @param {AbstractLoaderError} error An error instance.
 */function warn(error,setWarning){setWarning(error.message);console.warn(error.message);if(error instanceof _loaders_errors_index__WEBPACK_IMPORTED_MODULE_6__[/* AbstractLoaderError */ "a"]){error.warnInConsole();}}/**
 * Initialize values in the coordination space.
 * @param {object} values Object where
 * keys are coordination type names,
 * values are initial coordination values.
 * @param {object} setters Object where
 * keys are coordination type names with the prefix 'set',
 * values are coordination setter functions.
 * @param {object} initialValues Object where
 * keys are coordination type names and keys are values.
 */function initCoordinationSpace(values,setters,initialValues){if(!values||!setters){return;}var defaultCoordinationValues=Object(_app_plugins__WEBPACK_IMPORTED_MODULE_8__[/* getDefaultCoordinationValues */ "d"])();Object.entries(values).forEach(function(_ref){var _ref2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,2),coordinationType=_ref2[0],value=_ref2[1];var setterName="set".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* capitalize */ "a"])(coordinationType));var setterFunc=setters[setterName];var initialValue=initialValues&&initialValues[coordinationType];var shouldInit=fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default()(initialValue,defaultCoordinationValues[coordinationType]);if(shouldInit&&setterFunc){setterFunc(value);}});}/**
 * Get the dataset description string.
 * @param {object} loaders The object mapping
 * datasets and data types to loader instances.
 * @param {string} dataset The key for a dataset,
 * used to identify which loader to use.
 * @returns {array} [description] where
 * description is a string.
 */function useDescription(loaders,dataset){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState,2),description=_useState2[0],setDescription=_useState2[1];Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(!loaders[dataset]){return;}if(loaders[dataset].description){setDescription(loaders[dataset].description);}else{setDescription(null);}// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);return[description];}/**
 * Get data from a cells data type loader,
 * updating "ready" and URL state appropriately.
 * Throw warnings if the data is marked as required.
 * Subscribe to loader updates.
 * @param {object} loaders The object mapping
 * datasets and data types to loader instances.
 * @param {string} dataset The key for a dataset,
 * used to identify which loader to use.
 * @param {function} setItemIsReady A function to call
 * when done loading.
 * @param {function} addUrl A function to call to update
 * the URL list.
 * @param {boolean} isRequired Should a warning be thrown if
 * loading is unsuccessful?
 * @param {object} coordinationSetters Object where
 * keys are coordination type names with the prefix 'set',
 * values are coordination setter functions.
 * @param {object} initialCoordinationValues Object where
 * keys are coordination type names with the prefix 'initialize',
 * values are initialization preferences as boolean values.
 * @returns {array} [cells, cellsCount] where
 * cells is an object and cellsCount is the
 * number of items in the cells object.
 */function useCellsData(loaders,dataset,setItemIsReady,addUrl,isRequired,coordinationSetters,initialCoordinationValues){var _useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),_useState4=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState3,2),cells=_useState4[0],setCells=_useState4[1];var _useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),_useState6=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5,2),cellsCount=_useState6[0],setCellsCount=_useState6[1];var setWarning=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useSetWarning */ "v"])();Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(!loaders[dataset]){return;}if(loaders[dataset].loaders.cells){loaders[dataset].loaders.cells.load().catch(function(e){return warn(e,setWarning);}).then(function(payload){if(!payload)return;var data=payload.data,url=payload.url,coordinationValues=payload.coordinationValues;setCells(data);setCellsCount(Object.keys(data).length);addUrl(url,'Cells');// This dataset has cells, so set up the
// spatial cells layer coordination value
// using the cell layer singleton.
var coordinationValuesOrDefault=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({spatialSegmentationLayer:_spatial_constants__WEBPACK_IMPORTED_MODULE_7__[/* DEFAULT_CELLS_LAYER */ "a"]},coordinationValues);initCoordinationSpace(coordinationValuesOrDefault,coordinationSetters,initialCoordinationValues);setItemIsReady('cells');});}else{setCells({});setCellsCount(0);if(isRequired){warn(new _loaders_errors_index__WEBPACK_IMPORTED_MODULE_6__[/* LoaderNotFoundError */ "c"](dataset,'cells',null,null),setWarning);}else{setItemIsReady('cells');}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);return[cells,cellsCount];}/**
 * Get data from a cell sets data type loader,
 * updating "ready" and URL state appropriately.
 * Throw warnings if the data is marked as required.
 * Subscribe to loader updates.
 * @param {object} loaders The object mapping
 * datasets and data types to loader instances.
 * @param {string} dataset The key for a dataset,
 * used to identify which loader to use.
 * @param {function} setItemIsReady A function to call
 * when done loading.
 * @param {function} addUrl A function to call to update
 * the URL list.
 * @param {boolean} isRequired Should a warning be thrown if
 * loading is unsuccessful?
 * @param {object} coordinationSetters Object where
 * keys are coordination type names with the prefix 'set',
 * values are coordination setter functions.
 * @param {object} initialCoordinationValues Object where
 * keys are coordination type names and values are the current values.
 * @returns {array} [cellSets] where
 * cellSets is a sets tree object.
 */function useCellSetsData(loaders,dataset,setItemIsReady,addUrl,isRequired,coordinationSetters,initialCoordinationValues){var _useState7=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState8=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState7,2),cellSets=_useState8[0],setCellSets=_useState8[1];var setWarning=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useSetWarning */ "v"])();Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(!loaders[dataset]){return;}if(loaders[dataset].loaders['cell-sets']){// Load the data initially.
loaders[dataset].loaders['cell-sets'].load().catch(function(e){return warn(e,setWarning);}).then(function(payload){if(!payload)return;var data=payload.data,url=payload.url,coordinationValues=payload.coordinationValues;setCellSets(data);addUrl(url,'Cell Sets');initCoordinationSpace(coordinationValues,coordinationSetters,initialCoordinationValues);setItemIsReady('cell-sets');});}else{setCellSets(null);if(isRequired){warn(new _loaders_errors_index__WEBPACK_IMPORTED_MODULE_6__[/* LoaderNotFoundError */ "c"](dataset,'cell-sets',null,null),setWarning);}else{setItemIsReady('cell-sets');}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);return[cellSets];}/**
 * Get (potentially filtered) data from an expression matrix data type loader,
 * updating "ready" and URL state appropriately.
 * Throw warnings if the data is marked as required.
 * Subscribe to loader updates.  Should not be used in conjunction (called in the same component)
 * with useExpressionAttrs as this returns a potentially filtered set of attributes
 * specifically for the returned expression data.
 * @param {object} loaders The object mapping
 * datasets and data types to loader instances.
 * @param {string} dataset The key for a dataset,
 * used to identify which loader to use.
 * @param {function} setItemIsReady A function to call
 * when done loading.
 * @param {function} addUrl A function to call to update
 * the URL list.
 * @param {boolean} isRequired Should a warning be thrown if
 * loading is unsuccessful?
 * @param {object} coordinationSetters Object where
 * keys are coordination type names with the prefix 'set',
 * values are coordination setter functions.
 * @param {object} initialCoordinationValues Object where
 * keys are coordination type names with the prefix 'initialize',
 * values are initialization preferences as boolean values.
 * @returns {array} [expressionMatrix] where
 * expressionMatrix is an object with
 * shape { cols, rows, matrix }.
 */function useExpressionMatrixData(loaders,dataset,setItemIsReady,addUrl,isRequired,coordinationSetters,initialCoordinationValues){var _useState9=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState10=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState9,2),expressionMatrix=_useState10[0],setExpressionMatrix=_useState10[1];var setWarning=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useSetWarning */ "v"])();Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(!loaders[dataset]){return;}if(loaders[dataset].loaders['expression-matrix']){loaders[dataset].loaders['expression-matrix'].load().catch(function(e){return warn(e,setWarning);}).then(function(payload){if(!payload)return;var data=payload.data,url=payload.url,coordinationValues=payload.coordinationValues;var _data=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(data,2),attrs=_data[0],arr=_data[1];setExpressionMatrix({cols:attrs.cols,rows:attrs.rows,matrix:arr.data});addUrl(url,'Expression Matrix');initCoordinationSpace(coordinationValues,coordinationSetters,initialCoordinationValues);setItemIsReady('expression-matrix');});}else{setExpressionMatrix(null);if(isRequired){warn(new _loaders_errors_index__WEBPACK_IMPORTED_MODULE_6__[/* LoaderNotFoundError */ "c"](dataset,'expression-matrix',null,null),setWarning);}else{setItemIsReady('expression-matrix');}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);return[expressionMatrix];}/**
 * Get data from the expression matrix data type loader for a given gene selection.
 * Throw warnings if the data is marked as required.
 * Subscribe to loader updates.
 * @param {object} loaders The object mapping
 * datasets and data types to loader instances.
 * @param {string} dataset The key for a dataset,
 * used to identify which loader to use.
 * @param {function} setItemIsReady A function to call
 * when done loading.
 * @param {boolean} isRequired Should a warning be thrown if
 * loading is unsuccessful?
 * @param {boolean} selection A list of gene names to get expression data for.
 * @returns {array} [geneData] where geneData is an array [Uint8Array, ..., Uint8Array]
 * for however many genes are in the selection.
 */function useGeneSelection(loaders,dataset,setItemIsReady,isRequired,selection,setItemIsNotReady){var _useState11=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState12=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState11,2),geneData=_useState12[0],setGeneData=_useState12[1];var setWarning=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useSetWarning */ "v"])();Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(!loaders[dataset]){return;}if(!selection){setItemIsReady('expression-matrix');return;}var loader=loaders[dataset].loaders['expression-matrix'];if(loader){setItemIsNotReady('expression-matrix');var implementsGeneSelection=typeof loader.loadGeneSelection==='function';if(implementsGeneSelection){loaders[dataset].loaders['expression-matrix'].loadGeneSelection({selection:selection}).catch(function(e){return warn(e,setWarning);}).then(function(payload){if(!payload)return;var data=payload.data;setGeneData(data);setItemIsReady('expression-matrix');});}else{loader.load().catch(function(e){return warn(e,setWarning);}).then(function(payload){if(!payload)return;var data=payload.data;var _data2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(data,2),attrs=_data2[0],matrix=_data2[1].data;var expressionDataForSelection=selection.map(function(sel){var geneIndex=attrs.cols.indexOf(sel);var numGenes=attrs.cols.length;var numCells=attrs.rows.length;var expressionData=new Uint8Array(numCells);for(var cellIndex=0;cellIndex<numCells;cellIndex+=1){expressionData[cellIndex]=matrix[cellIndex*numGenes+geneIndex];}return expressionData;});setGeneData(expressionDataForSelection);setItemIsReady('expression-matrix');});}}else{setGeneData(null);if(isRequired){warn(new _loaders_errors_index__WEBPACK_IMPORTED_MODULE_6__[/* LoaderNotFoundError */ "c"](dataset,'expression-matrix',null,null),setWarning);}else{setItemIsReady('expression-matrix');}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset,selection]);return[geneData];}/**
 * Get the attributes for the expression matrix data type loader,
 * i.e names of cells and genes.
 * Throw warnings if the data is marked as required.
 * Subscribe to loader updates.  Should not be used in conjunction (called in the same component)
 * with useExpressionMatrixData.
 * @param {object} loaders The object mapping
 * datasets and data types to loader instances.
 * @param {string} dataset The key for a dataset,
 * used to identify which loader to use.
 * @param {function} setItemIsReady A function to call
 * when done loading.
 * @param {function} addUrl A function to call to update
 * the URL list.
 * @param {boolean} isRequired Should a warning be thrown if
 * loading is unsuccessful?
 * @returns {object} [attrs] { rows, cols } object containing cell and gene names.
 */function useExpressionAttrs(loaders,dataset,setItemIsReady,addUrl,isRequired){var _useState13=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState14=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState13,2),attrs=_useState14[0],setAttrs=_useState14[1];var setWarning=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useSetWarning */ "v"])();Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(!loaders[dataset]){return;}var loader=loaders[dataset].loaders['expression-matrix'];if(loader){var implementsLoadAttrs=typeof loader.loadAttrs==='function';if(implementsLoadAttrs){loader.loadAttrs().catch(function(e){return warn(e,setWarning);}).then(function(payload){if(!payload)return;var data=payload.data,url=payload.url;setAttrs(data);addUrl(url,'Expression Matrix');setItemIsReady('expression-matrix');});}else{loader.load().catch(function(e){return warn(e,setWarning);}).then(function(payload){if(!payload)return;var data=payload.data,url=payload.url;setAttrs(data[0]);addUrl(url,'Expression Matrix');setItemIsReady('expression-matrix');});}}else{setAttrs(null);if(isRequired){warn(new _loaders_errors_index__WEBPACK_IMPORTED_MODULE_6__[/* LoaderNotFoundError */ "c"](dataset,'expression-matrix',null,null),setWarning);}else{setItemIsReady('expression-matrix');}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);return[attrs];}/**
 * Get data from a molecules data type loader,
 * updating "ready" and URL state appropriately.
 * Throw warnings if the data is marked as required.
 * Subscribe to loader updates.
 * @param {object} loaders The object mapping
 * datasets and data types to loader instances.
 * @param {string} dataset The key for a dataset,
 * used to identify which loader to use.
 * @param {function} setItemIsReady A function to call
 * when done loading.
 * @param {function} addUrl A function to call to update
 * the URL list.
 * @param {boolean} isRequired Should a warning be thrown if
 * loading is unsuccessful?
 * @param {object} coordinationSetters Object where
 * keys are coordination type names with the prefix 'set',
 * values are coordination setter functions.
 * @param {object} initialCoordinationValues Object where
 * keys are coordination type names with the prefix 'initialize',
 * values are initialization preferences as boolean values.
 * @returns {array} [molecules, moleculesCount, locationsCount] where
 * molecules is an object,
 * moleculesCount is the number of unique molecule types, and
 * locationsCount is the number of molecules.
 */function useMoleculesData(loaders,dataset,setItemIsReady,addUrl,isRequired,coordinationSetters,initialCoordinationValues){var _useState15=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState16=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState15,2),molecules=_useState16[0],setMolecules=_useState16[1];var _useState17=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),_useState18=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState17,2),moleculesCount=_useState18[0],setMoleculesCount=_useState18[1];var _useState19=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),_useState20=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState19,2),locationsCount=_useState20[0],setLocationsCount=_useState20[1];var setWarning=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useSetWarning */ "v"])();Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(!loaders[dataset]){return;}if(loaders[dataset].loaders.molecules){loaders[dataset].loaders.molecules.load().catch(function(e){return warn(e,setWarning);}).then(function(payload){if(!payload)return;var data=payload.data,url=payload.url,coordinationValues=payload.coordinationValues;setMolecules(data);setMoleculesCount(Object.keys(data).length);setLocationsCount(Object.values(data).map(function(l){return l.length;}).reduce(function(a,b){return a+b;},0));addUrl(url,'Molecules');var coordinationValuesOrDefault=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({spatialPointLayer:_spatial_constants__WEBPACK_IMPORTED_MODULE_7__[/* DEFAULT_MOLECULES_LAYER */ "c"]},coordinationValues);initCoordinationSpace(coordinationValuesOrDefault,coordinationSetters,initialCoordinationValues);setItemIsReady('molecules');});}else{setMolecules({});setMoleculesCount(0);setLocationsCount(0);if(isRequired){warn(new _loaders_errors_index__WEBPACK_IMPORTED_MODULE_6__[/* LoaderNotFoundError */ "c"](dataset,'molecules',null,null),setWarning);}else{setItemIsReady('molecules');}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);return[molecules,moleculesCount,locationsCount];}/**
 * Get data from a neighborhoods data type loader,
 * updating "ready" and URL state appropriately.
 * Throw warnings if the data is marked as required.
 * Subscribe to loader updates.
 * @param {object} loaders The object mapping
 * datasets and data types to loader instances.
 * @param {string} dataset The key for a dataset,
 * used to identify which loader to use.
 * @param {function} setItemIsReady A function to call
 * when done loading.
 * @param {function} addUrl A function to call to update
 * the URL list.
 * @param {boolean} isRequired Should a warning be thrown if
 * loading is unsuccessful?
 * @param {object} coordinationSetters Object where
 * keys are coordination type names with the prefix 'set',
 * values are coordination setter functions.
 * @param {object} initialCoordinationValues Object where
 * keys are coordination type names with the prefix 'initialize',
 * values are initialization preferences as boolean values.
 * @returns {array} [neighborhoods] where
 * neighborhoods is an object.
 */function useNeighborhoodsData(loaders,dataset,setItemIsReady,addUrl,isRequired,coordinationSetters,initialCoordinationValues){var _useState21=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState22=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState21,2),neighborhoods=_useState22[0],setNeighborhoods=_useState22[1];var setWarning=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useSetWarning */ "v"])();Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(!loaders[dataset]){return;}if(loaders[dataset].loaders.neighborhoods){loaders[dataset].loaders.neighborhoods.load().catch(function(e){return warn(e,setWarning);}).then(function(payload){if(!payload)return;var data=payload.data,url=payload.url,coordinationValues=payload.coordinationValues;setNeighborhoods(data);addUrl(url,'Neighborhoods');var coordinationValuesOrDefault=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({spatialNeighborhoodLayer:_spatial_constants__WEBPACK_IMPORTED_MODULE_7__[/* DEFAULT_NEIGHBORHOODS_LAYER */ "d"]},coordinationValues);initCoordinationSpace(coordinationValuesOrDefault,coordinationSetters,initialCoordinationValues);setItemIsReady('neighborhoods');});}else{setNeighborhoods({});if(isRequired){warn(new _loaders_errors_index__WEBPACK_IMPORTED_MODULE_6__[/* LoaderNotFoundError */ "c"](dataset,'neighborhoods',null,null),setWarning);}else{setItemIsReady('neighborhoods');}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);return[neighborhoods];}/**
 * Get data from a raster data type loader,
 * updating "ready" and URL state appropriately.
 * Throw warnings if the data is marked as required.
 * Subscribe to loader updates.
 * @param {object} loaders The object mapping
 * datasets and data types to loader instances.
 * @param {string} dataset The key for a dataset,
 * used to identify which loader to use.
 * @param {function} setItemIsReady A function to call
 * when done loading.
 * @param {function} addUrl A function to call to update
 * the URL list.
 * @param {boolean} isRequired Should a warning be thrown if
 * loading is unsuccessful?
 * @param {object} coordinationSetters Object where
 * keys are coordination type names with the prefix 'set',
 * values are coordination setter functions.
 * @param {object} initialCoordinationValues Object where
 * keys are coordination type names with the prefix 'initialize',
 * values are initialization preferences as boolean values.
 * @returns {array} [raster, imageLayerLoaders, imageLayerMeta] where
 * raster is an object,
 * imageLayerLoaders is an object, and
 * imageLayerMeta is an object.
 */function useRasterData(loaders,dataset,setItemIsReady,addUrl,isRequired,coordinationSetters,initialCoordinationValues){var _useState23=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState24=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState23,2),raster=_useState24[0],setRaster=_useState24[1];// Since we want the image layer / channel definitions to come from the
// coordination space stored as JSON in the view config,
// we need to set up a separate state variable here to store the
// non-JSON objects, such as layer loader instances.
var _useState25=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),_useState26=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState25,2),imageLayerLoaders=_useState26[0],setImageLayerLoaders=_useState26[1];var _useState27=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),_useState28=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState27,2),imageLayerMeta=_useState28[0],setImageLayerMeta=_useState28[1];var setWarning=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useSetWarning */ "v"])();Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(!loaders[dataset]){if(isRequired){warn(new _loaders_errors_index__WEBPACK_IMPORTED_MODULE_6__[/* DatasetNotFoundError */ "b"](dataset),setWarning);}else{setItemIsReady('raster');}return;}if(loaders[dataset].loaders.raster){loaders[dataset].loaders.raster.load().catch(function(e){return warn(e,setWarning);}).then(function(payload){if(!payload)return;var data=payload.data,urls=payload.url,coordinationValues=payload.coordinationValues;setRaster(data);urls.forEach(function(_ref3){var _ref4=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref3,2),url=_ref4[0],name=_ref4[1];addUrl(url,name);});var nextImageLoaders=data.loaders,nextImageMeta=data.meta;setImageLayerLoaders(nextImageLoaders);setImageLayerMeta(nextImageMeta);initCoordinationSpace(coordinationValues,coordinationSetters,initialCoordinationValues);setItemIsReady('raster');});}else{// There was no raster loader for this dataset,
// and raster should be optional.
setImageLayerLoaders([]);setImageLayerMeta([]);if(isRequired){warn(new _loaders_errors_index__WEBPACK_IMPORTED_MODULE_6__[/* LoaderNotFoundError */ "c"](dataset,'raster',null,null),setWarning);}else{setItemIsReady('raster');}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);return[raster,imageLayerLoaders,imageLayerMeta];}/**
 * Get data from a genomic-profiles data type loader,
 * updating "ready" and URL state appropriately.
 * Throw warnings if the data is marked as required.
 * Subscribe to loader updates.
 * @param {object} loaders The object mapping
 * datasets and data types to loader instances.
 * @param {string} dataset The key for a dataset,
 * used to identify which loader to use.
 * @param {function} setItemIsReady A function to call
 * when done loading.
 * @param {function} addUrl A function to call to update
 * the URL list.
 * @param {boolean} isRequired Should a warning be thrown if
 * loading is unsuccessful?
 * @param {object} coordinationSetters Object where
 * keys are coordination type names with the prefix 'set',
 * values are coordination setter functions.
 * @param {object} initialCoordinationValues Object where
 * keys are coordination type names with the prefix 'initialize',
 * values are initialization preferences as boolean values.
 * @returns {array} [neighborhoods] where
 * neighborhoods is an object.
 */function useGenomicProfilesData(loaders,dataset,setItemIsReady,addUrl,isRequired,coordinationSetters,initialCoordinationValues){var _useState29=Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),_useState30=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState29,2),genomicProfilesAttrs=_useState30[0],setGenomicProfilesAttrs=_useState30[1];var setWarning=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useSetWarning */ "v"])();Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function(){if(!loaders[dataset]){return;}if(loaders[dataset].loaders['genomic-profiles']){loaders[dataset].loaders['genomic-profiles'].load().catch(function(e){return warn(e,setWarning);}).then(function(payload){if(!payload)return;var data=payload.data,url=payload.url,coordinationValues=payload.coordinationValues;setGenomicProfilesAttrs(data);addUrl(url);initCoordinationSpace(coordinationValues,coordinationSetters,initialCoordinationValues);setItemIsReady('genomic-profiles');});}else{setGenomicProfilesAttrs(null);if(isRequired){warn(new _loaders_errors_index__WEBPACK_IMPORTED_MODULE_6__[/* LoaderNotFoundError */ "c"](dataset,'genomic-profiles',null,null),setWarning);}else{setItemIsReady('genomic-profiles');}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);return[genomicProfilesAttrs];}

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DEFAULT_COORDINATION_VALUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTO_INDEPENDENT_COORDINATION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COMPONENT_COORDINATION_TYPES; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
var _DEFAULT_COORDINATION,_COMPONENT_COORDINATI;/**
 * Coordination types may have default values,
 * which can be defined here, and used by the
 * auto initialization strategy.
 */var DEFAULT_COORDINATION_VALUES=(_DEFAULT_COORDINATION={},Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_TYPE,'cell'),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_TYPE,'gene'),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TYPE,'expression'),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_ZOOM,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_ROTATION,0),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_TARGET_X,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_TARGET_Y,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_TARGET_Z,0),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_SET_POLYGONS_VISIBLE,false),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_SET_LABELS_VISIBLE,false),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_SET_LABEL_SIZE,14),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_RADIUS,1),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_RADIUS_MODE,'auto'),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_OPACITY,1),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_OPACITY_MODE,'auto'),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ZOOM,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ROTATION,0),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_TARGET_X,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_TARGET_Y,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_TARGET_Z,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ROTATION_X,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ROTATION_Y,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ROTATION_Z,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_AXIS_FIXED,false),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ROTATION_ORBIT,0),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ORBIT_AXIS,'Y'),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_IMAGE_LAYER,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_SEGMENTATION_LAYER,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_POINT_LAYER,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_NEIGHBORHOOD_LAYER,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].HEATMAP_ZOOM_X,0),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].HEATMAP_ZOOM_Y,0),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].HEATMAP_TARGET_X,0),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].HEATMAP_TARGET_Y,0),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_COLORMAP,'plasma'),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_COLORMAP_RANGE,[0.0,1.0]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TRANSFORM,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TRANSFORM_COEFFICIENT,1),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_FILTER,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_HIGHLIGHT,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_SELECTION,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_FILTER,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_HIGHLIGHT,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_SELECTION,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_HIGHLIGHT,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_COLOR,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_COLOR_ENCODING,'cellSetSelection'),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GENOMIC_ZOOM_X,0),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GENOMIC_ZOOM_Y,0),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GENOMIC_TARGET_X,1549999999.5),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GENOMIC_TARGET_Y,1549999999.5),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].ADDITIONAL_OBS_SETS,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].MOLECULE_HIGHLIGHT,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GATING_FEATURE_SELECTION_X,null),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_DEFAULT_COORDINATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GATING_FEATURE_SELECTION_Y,null),_DEFAULT_COORDINATION);// The following coordination types should be
// initialized to independent scopes when
// initialized automatically.
// These make the resulting view config
// (after auto-initialization) behave
// like "legacy" Vitessce (pre-coordination model).
var AUTO_INDEPENDENT_COORDINATION_TYPES=[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].HEATMAP_ZOOM_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].HEATMAP_ZOOM_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].HEATMAP_TARGET_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].HEATMAP_TARGET_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_ZOOM,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_TARGET_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_TARGET_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_TARGET_Z,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_SET_POLYGONS_VISIBLE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_SET_LABELS_VISIBLE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_SET_LABEL_SIZE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_RADIUS,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_OPACITY];/**
   * Mapping from component type to
   * supported coordination object types.
   * This mapping can be used to determine
   * which pieces of state that a component will
   * need to get/set.
   * Keys here are the component registry keys.
   */var COMPONENT_COORDINATION_TYPES=(_COMPONENT_COORDINATI={},Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_COMPONENT_COORDINATI,_constants__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"].SCATTERPLOT,[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].DATASET,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_ZOOM,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_ROTATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_TARGET_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_TARGET_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_TARGET_Z,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_SET_POLYGONS_VISIBLE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_SET_LABELS_VISIBLE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_SET_LABEL_SIZE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_RADIUS,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_RADIUS_MODE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_OPACITY,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_OPACITY_MODE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_FILTER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_COLOR,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_COLORMAP,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_COLORMAP_RANGE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_COLOR_ENCODING,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].ADDITIONAL_OBS_SETS]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_COMPONENT_COORDINATI,_constants__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"].GATING,[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].DATASET,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_ZOOM,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_ROTATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_TARGET_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_TARGET_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_TARGET_Z,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_SET_POLYGONS_VISIBLE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_SET_LABELS_VISIBLE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_SET_LABEL_SIZE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_RADIUS,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_RADIUS_MODE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_OPACITY,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].EMBEDDING_OBS_OPACITY_MODE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_FILTER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_COLOR,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_COLORMAP,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_COLORMAP_RANGE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_COLOR_ENCODING,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].ADDITIONAL_OBS_SETS,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TRANSFORM,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TRANSFORM_COEFFICIENT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GATING_FEATURE_SELECTION_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GATING_FEATURE_SELECTION_Y]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_COMPONENT_COORDINATI,_constants__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"].SPATIAL,[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].DATASET,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ZOOM,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ROTATION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_IMAGE_LAYER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_SEGMENTATION_LAYER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_POINT_LAYER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_NEIGHBORHOOD_LAYER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_TARGET_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_TARGET_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_TARGET_Z,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ROTATION_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ROTATION_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ROTATION_Z,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ROTATION_ORBIT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ORBIT_AXIS,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_AXIS_FIXED,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_FILTER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_COLOR,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_COLORMAP,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_COLORMAP_RANGE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_COLOR_ENCODING,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].ADDITIONAL_OBS_SETS,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].MOLECULE_HIGHLIGHT]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_COMPONENT_COORDINATI,_constants__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"].HEATMAP,[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].DATASET,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].HEATMAP_ZOOM_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].HEATMAP_ZOOM_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].HEATMAP_TARGET_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].HEATMAP_TARGET_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_FILTER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_COLOR,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_FILTER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_COLORMAP,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_COLORMAP_RANGE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_COLOR_ENCODING,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].ADDITIONAL_OBS_SETS]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_COMPONENT_COORDINATI,_constants__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"].CELL_SETS,[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].DATASET,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_COLOR,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_COLOR_ENCODING,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].ADDITIONAL_OBS_SETS,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_SELECTION]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_COMPONENT_COORDINATI,_constants__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"].CELL_SET_SIZES,[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].DATASET,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_COLOR,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].ADDITIONAL_OBS_SETS]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_COMPONENT_COORDINATI,_constants__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"].STATUS,[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].DATASET,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].MOLECULE_HIGHLIGHT]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_COMPONENT_COORDINATI,_constants__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"].GENES,[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].DATASET,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_FILTER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_COLOR_ENCODING,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_SELECTION]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_COMPONENT_COORDINATI,_constants__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"].CELL_SET_EXPRESSION,[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].DATASET,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TRANSFORM,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TRANSFORM_COEFFICIENT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_COLOR,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].ADDITIONAL_OBS_SETS]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_COMPONENT_COORDINATI,_constants__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"].EXPRESSION_HISTOGRAM,[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].DATASET,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_SELECTION]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_COMPONENT_COORDINATI,_constants__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"].LAYER_CONTROLLER,[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].DATASET,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_IMAGE_LAYER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_SEGMENTATION_LAYER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_POINT_LAYER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_NEIGHBORHOOD_LAYER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ZOOM,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_TARGET_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_TARGET_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_TARGET_Z,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ROTATION_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ROTATION_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ROTATION_Z,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ROTATION_ORBIT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_ORBIT_AXIS]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_COMPONENT_COORDINATI,_constants__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"].GENOMIC_PROFILES,[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].DATASET,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_VALUE_TYPE,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GENOMIC_ZOOM_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GENOMIC_ZOOM_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GENOMIC_TARGET_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GENOMIC_TARGET_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_FILTER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_SELECTION,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].OBS_SET_COLOR,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].ADDITIONAL_OBS_SETS]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_COMPONENT_COORDINATI,_constants__WEBPACK_IMPORTED_MODULE_1__[/* Component */ "a"].DESCRIPTION,[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].DATASET,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].SPATIAL_IMAGE_LAYER]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_COMPONENT_COORDINATI,"higlass",[_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].DATASET,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GENOMIC_ZOOM_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GENOMIC_ZOOM_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GENOMIC_TARGET_X,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].GENOMIC_TARGET_Y,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_FILTER,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_HIGHLIGHT,_constants__WEBPACK_IMPORTED_MODULE_1__[/* CoordinationType */ "b"].FEATURE_SELECTION]),_COMPONENT_COORDINATI);

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TOOLTIP_ANCESTOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PRIMARY_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SECONDARY_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLACK_CARD; });
/* unused harmony export TITLE_CARD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SCROLL_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VITESSCE_CONTAINER; });
var TOOLTIP_ANCESTOR='tooltip-ancestor';var CARD="card card-body my-2 ".concat(TOOLTIP_ANCESTOR);var PRIMARY_CARD="".concat(CARD," bg-primary");var SECONDARY_CARD="".concat(CARD," bg-secondary");var BLACK_CARD="".concat(CARD," bg-black");var TITLE_CARD='title';var SCROLL_CARD="".concat(PRIMARY_CARD," scroll");var VITESSCE_CONTAINER='vitessce-container';

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GLOBAL_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DEFAULT_RASTER_DOMAIN_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DEFAULT_RASTER_LAYER_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DEFAULT_MOLECULES_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_CELLS_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DEFAULT_NEIGHBORHOODS_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_LAYER_TYPE_ORDERING; });
/* harmony import */ var _hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_0__);
var GLOBAL_LABELS=['z','t'];var DEFAULT_RASTER_DOMAIN_TYPE='Min/Max';var DEFAULT_RASTER_LAYER_PROPS={visible:true,colormap:null,opacity:1,domainType:DEFAULT_RASTER_DOMAIN_TYPE,transparentColor:[0,0,0],renderingMode:_hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_0__["RENDERING_MODES"].ADDITIVE,use3d:false};var DEFAULT_MOLECULES_LAYER={opacity:1,radius:20,visible:true};var DEFAULT_CELLS_LAYER={opacity:1,radius:50,visible:true,stroked:false};var DEFAULT_NEIGHBORHOODS_LAYER={visible:false};var DEFAULT_LAYER_TYPE_ORDERING=['molecules','cells','neighborhoods','raster'];

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("zustand");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractLoaderError; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/**
 * A loader error ancestor class containing a default constructor
 * and a stub for the required warnInConsole() method.
 */var AbstractLoaderError=/*#__PURE__*/function(){function AbstractLoaderError(message){Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this,AbstractLoaderError);this.message=message;}// eslint-disable-next-line class-methods-use-this
Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AbstractLoaderError,[{key:"warnInConsole",value:function warnInConsole(){throw new Error('The warnInConsole() method has not been implemented.');}}]);return AbstractLoaderError;}();

/***/ }),
/* 38 */,
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(3);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(19);

// EXTERNAL MODULE: external "@material-ui/icons/CloudDownload"
var CloudDownload_ = __webpack_require__(77);
var CloudDownload_default = /*#__PURE__*/__webpack_require__.n(CloudDownload_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(56);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(46);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__(78);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: external "@material-ui/icons/ArrowDropDown"
var ArrowDropDown_ = __webpack_require__(65);
var ArrowDropDown_default = /*#__PURE__*/__webpack_require__.n(ArrowDropDown_);

// EXTERNAL MODULE: external "@material-ui/icons/ArrowDropUp"
var ArrowDropUp_ = __webpack_require__(66);
var ArrowDropUp_default = /*#__PURE__*/__webpack_require__.n(ArrowDropUp_);

// EXTERNAL MODULE: external "@material-ui/icons/Settings"
var Settings_ = __webpack_require__(79);
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(80);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: ./src/components/classNames.js
var classNames = __webpack_require__(32);

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__(81);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// CONCATENATED MODULE: ./src/components/LoadingIndicator.js
function LoadingIndicator(){return/*#__PURE__*/external_react_default.a.createElement("div",{className:"loading-indicator-backdrop"},/*#__PURE__*/external_react_default.a.createElement("div",{className:"loading-indicator-container"},/*#__PURE__*/external_react_default.a.createElement(CircularProgress_default.a,null)));}
// EXTERNAL MODULE: ./src/components/shared-mui/components.js
var components = __webpack_require__(49);

// CONCATENATED MODULE: ./src/components/TitleInfo.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleInfo; });
var useStyles=Object(styles_["makeStyles"])(function(theme){return{iconButton:{border:'none',marginLeft:0,background:'none',color:theme.palette.primaryForeground,paddingLeft:'0.25em',paddingRight:'0.25em',borderRadius:'2px','&:hover':{backgroundColor:theme.palette.primaryBackgroundLight},'&:first-child':{marginLeft:'0.25em'},'&:last-child':{marginRight:'0.25em'},'& svg':{width:'0.7em',height:'0.7em',verticalAlign:'middle',overflow:'visible'}},downloadLink:{color:theme.palette.primaryForeground}};});function SettingsIconWithArrow(_ref){var open=_ref.open;return/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,/*#__PURE__*/external_react_default.a.createElement(Settings_default.a,null),open?/*#__PURE__*/external_react_default.a.createElement(ArrowDropUp_default.a,null):/*#__PURE__*/external_react_default.a.createElement(ArrowDropDown_default.a,null));}function PlotOptions(props){var options=props.options;var _useState=Object(external_react_["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),open=_useState2[0],setOpen=_useState2[1];var classes=useStyles();return/*#__PURE__*/external_react_default.a.createElement(components["b" /* PopperMenu */],{open:open,setOpen:setOpen,buttonIcon:/*#__PURE__*/external_react_default.a.createElement(SettingsIconWithArrow,{open:open}),buttonClassName:classes.iconButton,placement:"bottom-end"},options);}function CloudDownloadIconWithArrow(_ref2){var open=_ref2.open;return/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,/*#__PURE__*/external_react_default.a.createElement(CloudDownload_default.a,null),open?/*#__PURE__*/external_react_default.a.createElement(ArrowDropUp_default.a,null):/*#__PURE__*/external_react_default.a.createElement(ArrowDropDown_default.a,null));}function DownloadOptions(props){var urls=props.urls;var _useState3=Object(external_react_["useState"])(false),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),open=_useState4[0],setOpen=_useState4[1];var classes=useStyles();return/*#__PURE__*/external_react_default.a.createElement(components["b" /* PopperMenu */],{open:open,setOpen:setOpen,buttonIcon:/*#__PURE__*/external_react_default.a.createElement(CloudDownloadIconWithArrow,{open:open}),buttonClassName:classes.iconButton,placement:"bottom-end"},urls.map(function(_ref3){var url=_ref3.url,name=_ref3.name;return/*#__PURE__*/external_react_default.a.createElement(MenuItem_default.a,{dense:true,key:url},/*#__PURE__*/external_react_default.a.createElement(Link_default.a,{underline:"none",href:url,target:"_blank",rel:"noopener",className:classes.downloadLink},"Download ",name));}));}function ClosePaneButton(props){var removeGridComponent=props.removeGridComponent;var classes=useStyles();return/*#__PURE__*/external_react_default.a.createElement(IconButton_default.a,{onClick:removeGridComponent,size:"small",className:classes.iconButton,title:"close"},/*#__PURE__*/external_react_default.a.createElement(Close_default.a,null));}function TitleInfo(props){var title=props.title,info=props.info,children=props.children,isScroll=props.isScroll,isSpatial=props.isSpatial,removeGridComponent=props.removeGridComponent,urls=props.urls,isReady=props.isReady,options=props.options;// eslint-disable-next-line no-nested-ternary
var childClassName=isScroll?classNames["c" /* SCROLL_CARD */]:isSpatial?classNames["a" /* BLACK_CARD */]:classNames["d" /* SECONDARY_CARD */];return/*#__PURE__*/ (// d-flex without wrapping div is not always full height; I don't understand the root cause.
external_react_default.a.createElement(external_react_default.a.Fragment,null,/*#__PURE__*/external_react_default.a.createElement("div",{className:"title"},/*#__PURE__*/external_react_default.a.createElement("div",{className:"title-left"},title),/*#__PURE__*/external_react_default.a.createElement("div",{className:"title-info",title:info},info),/*#__PURE__*/external_react_default.a.createElement("div",{className:"title-buttons"},options&&/*#__PURE__*/external_react_default.a.createElement(PlotOptions,{options:options}),urls&&urls.length>0&&/*#__PURE__*/external_react_default.a.createElement(DownloadOptions,{urls:urls}),/*#__PURE__*/external_react_default.a.createElement(ClosePaneButton,{removeGridComponent:removeGridComponent}))),/*#__PURE__*/external_react_default.a.createElement("div",{className:childClassName},!isReady&&/*#__PURE__*/external_react_default.a.createElement(LoadingIndicator,null),children))// "pl-2" only matters when the window is very narrow.
);}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("zustand/shallow");

/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2);

// EXTERNAL MODULE: ./src/app/constants.js
var constants = __webpack_require__(0);

// CONCATENATED MODULE: ./src/app/constant-relationships.js
var _FILE_TYPE_DATA_TYPE_;/**
 * Mapping from file types to data types. Each file type
 * should correspond to one data type. Multiple file types
 * can map onto the same data type.
 */var FILE_TYPE_DATA_TYPE_MAPPING=(_FILE_TYPE_DATA_TYPE_={},Object(defineProperty["a" /* default */])(_FILE_TYPE_DATA_TYPE_,constants["d" /* FileType */].CELLS_JSON,constants["c" /* DataType */].CELLS),Object(defineProperty["a" /* default */])(_FILE_TYPE_DATA_TYPE_,constants["d" /* FileType */].CELL_SETS_JSON,constants["c" /* DataType */].CELL_SETS),Object(defineProperty["a" /* default */])(_FILE_TYPE_DATA_TYPE_,constants["d" /* FileType */].EXPRESSION_MATRIX_ZARR,constants["c" /* DataType */].EXPRESSION_MATRIX),Object(defineProperty["a" /* default */])(_FILE_TYPE_DATA_TYPE_,constants["d" /* FileType */].GENOMIC_PROFILES_ZARR,constants["c" /* DataType */].GENOMIC_PROFILES),Object(defineProperty["a" /* default */])(_FILE_TYPE_DATA_TYPE_,constants["d" /* FileType */].MOLECULES_JSON,constants["c" /* DataType */].MOLECULES),Object(defineProperty["a" /* default */])(_FILE_TYPE_DATA_TYPE_,constants["d" /* FileType */].NEIGHBORHOODS_JSON,constants["c" /* DataType */].NEIGHBORHOODS),Object(defineProperty["a" /* default */])(_FILE_TYPE_DATA_TYPE_,constants["d" /* FileType */].RASTER_JSON,constants["c" /* DataType */].RASTER),Object(defineProperty["a" /* default */])(_FILE_TYPE_DATA_TYPE_,constants["d" /* FileType */].RASTER_OME_ZARR,constants["c" /* DataType */].RASTER),Object(defineProperty["a" /* default */])(_FILE_TYPE_DATA_TYPE_,constants["d" /* FileType */].CLUSTERS_JSON,constants["c" /* DataType */].EXPRESSION_MATRIX),Object(defineProperty["a" /* default */])(_FILE_TYPE_DATA_TYPE_,constants["d" /* FileType */].GENES_JSON,constants["c" /* DataType */].EXPRESSION_MATRIX),Object(defineProperty["a" /* default */])(_FILE_TYPE_DATA_TYPE_,constants["d" /* FileType */].ANNDATA_CELL_SETS_ZARR,constants["c" /* DataType */].CELL_SETS),Object(defineProperty["a" /* default */])(_FILE_TYPE_DATA_TYPE_,constants["d" /* FileType */].ANNDATA_CELLS_ZARR,constants["c" /* DataType */].CELLS),Object(defineProperty["a" /* default */])(_FILE_TYPE_DATA_TYPE_,constants["d" /* FileType */].ANNDATA_EXPRESSION_MATRIX_ZARR,constants["c" /* DataType */].EXPRESSION_MATRIX),_FILE_TYPE_DATA_TYPE_);
// EXTERNAL MODULE: ./src/app/state/coordination.js
var coordination = __webpack_require__(30);

// CONCATENATED MODULE: ./src/app/plugins.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return registerPluginCoordinationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return registerPluginViewType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return registerPluginFileType; });
/* unused harmony export registerPluginConvenienceFileType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getPluginViewTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getPluginViewType; });
/* unused harmony export getPluginCoordinationTypes */
/* unused harmony export getPluginCoordinationTypeDefaults */
/* unused harmony export getPluginCoordinationTypesForViewType */
/* unused harmony export getPluginFileTypes */
/* unused harmony export getPluginConvenienceFileTypes */
/* unused harmony export getDataTypeForPluginFileType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getLoaderClassesForPluginFileType; });
/* unused harmony export getExpansionFunctionForPluginConvenienceFileType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFileTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCoordinationTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getDefaultCoordinationValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getComponentCoordinationTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getFileTypeDataTypeMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getConvenienceFileTypes; });
var PLUGINS_KEY='__VITESSCE_PLUGINS__';var PLUGIN_VIEW_TYPES_KEY='viewTypes';var PLUGIN_COORDINATION_TYPES_KEY='coordinationTypes';var PLUGIN_COORDINATION_TYPES_PER_VIEW_KEY='coordinationTypesPerView';var PLUGIN_FILE_TYPES_KEY='fileTypes';var PLUGIN_FILE_TYPE_DATA_TYPE_MAPPING_KEY='fileTypeDataTypeMapping';var PLUGIN_CONVENIENCE_FILE_TYPES_KEY='convenienceFileTypes';window[PLUGINS_KEY]={};var PLUGINS=window[PLUGINS_KEY];// Reference: https://github.com/higlass/higlass-register/blob/master/src/index.js
PLUGINS[PLUGIN_VIEW_TYPES_KEY]=PLUGINS[PLUGIN_VIEW_TYPES_KEY]||{};PLUGINS[PLUGIN_COORDINATION_TYPES_KEY]=PLUGINS[PLUGIN_COORDINATION_TYPES_KEY]||{};PLUGINS[PLUGIN_COORDINATION_TYPES_PER_VIEW_KEY]=PLUGINS[PLUGIN_COORDINATION_TYPES_PER_VIEW_KEY]||{};PLUGINS[PLUGIN_FILE_TYPES_KEY]=PLUGINS[PLUGIN_FILE_TYPES_KEY]||{};PLUGINS[PLUGIN_FILE_TYPE_DATA_TYPE_MAPPING_KEY]=PLUGINS[PLUGIN_FILE_TYPE_DATA_TYPE_MAPPING_KEY]||{};PLUGINS[PLUGIN_CONVENIENCE_FILE_TYPES_KEY]=PLUGINS[PLUGIN_CONVENIENCE_FILE_TYPES_KEY]||{};/**
 * Register a new coordination type.
 * @param {string} typeName Name for the new coordination type.
 * @param {*} defaultValue A default value for the coordination type.
 */function registerPluginCoordinationType(typeName,defaultValue){PLUGINS[PLUGIN_COORDINATION_TYPES_KEY][typeName]=defaultValue;}/**
 * Register a new view type.
 * @param {string} viewType A name
 * @param {function} viewSubscriberReactComponent A react component.
 * @param {string[]} coordinationTypes A list of coordination types that this view supports.
 */function registerPluginViewType(viewType,viewSubscriberReactComponent,coordinationTypes){PLUGINS[PLUGIN_VIEW_TYPES_KEY][viewType]=viewSubscriberReactComponent;// Register the supported coordination types.
var pluginTypesPerView=PLUGINS[PLUGIN_COORDINATION_TYPES_PER_VIEW_KEY];if(Array.isArray(pluginTypesPerView[viewType])){coordinationTypes.forEach(function(coordinationType){if(!pluginTypesPerView[viewType].includes(coordinationType)){pluginTypesPerView[viewType].push(coordinationType);}});}else{pluginTypesPerView[viewType]=coordinationTypes;}}/**
 * Register a new file type.
 * @param {string} fileTypeName Name for the new file type.
 * @param {string} dataTypeName Name for the data type associated with the file type.
 * @param {class} dataSourceClass Data source class definition.
 * @param {class} dataLoaderClass Data loader class definition.
 */function registerPluginFileType(// eslint-disable-next-line no-unused-vars
fileTypeName,dataTypeName,dataLoaderClass,dataSourceClass){PLUGINS[PLUGIN_FILE_TYPES_KEY][fileTypeName]=[dataSourceClass,dataLoaderClass];PLUGINS[PLUGIN_FILE_TYPE_DATA_TYPE_MAPPING_KEY][fileTypeName]=dataTypeName;}/**
 * Register a new file type.
 * @param {string} fileTypeName Name for the new file type.
 * @param {function} expansionFunction The file type expansion function.
 * Should take in a single file definition and return an array of
 * file definitions with valid fileType values.
 */function registerPluginConvenienceFileType(// eslint-disable-next-line no-unused-vars
fileTypeName,expansionFunction){PLUGINS[PLUGIN_CONVENIENCE_FILE_TYPES_KEY][fileTypeName]=expansionFunction;}// Plugin getter functions.
function getPluginViewTypes(){return Object.keys(PLUGINS[PLUGIN_VIEW_TYPES_KEY]);}function getPluginViewType(viewType){return PLUGINS[PLUGIN_VIEW_TYPES_KEY][viewType];}function getPluginCoordinationTypes(){return Object.keys(PLUGINS[PLUGIN_COORDINATION_TYPES_KEY]);}function getPluginCoordinationTypeDefaults(){return PLUGINS[PLUGIN_COORDINATION_TYPES_KEY];}function getPluginCoordinationTypesForViewType(viewType){if(Array.isArray(PLUGINS[PLUGIN_COORDINATION_TYPES_PER_VIEW_KEY][viewType])){return PLUGINS[PLUGIN_COORDINATION_TYPES_PER_VIEW_KEY][viewType];}return[];}function getPluginFileTypes(){return Object.keys(PLUGINS[PLUGIN_FILE_TYPES_KEY]);}function getPluginConvenienceFileTypes(){return Object.keys(PLUGINS[PLUGIN_CONVENIENCE_FILE_TYPES_KEY]);}function getDataTypeForPluginFileType(fileType){return PLUGINS[PLUGIN_FILE_TYPE_DATA_TYPE_MAPPING_KEY][fileType];}function getLoaderClassesForPluginFileType(fileType){return PLUGINS[PLUGIN_FILE_TYPES_KEY][fileType];}function getExpansionFunctionForPluginConvenienceFileType(fileType){return PLUGINS[PLUGIN_CONVENIENCE_FILE_TYPES_KEY][fileType];}// Getters that depend on plugins.
function getFileTypes(){return[].concat(Object(toConsumableArray["a" /* default */])(Object.values(constants["d" /* FileType */])),Object(toConsumableArray["a" /* default */])(getPluginFileTypes()));}function getCoordinationTypes(){return[].concat(Object(toConsumableArray["a" /* default */])(Object.values(constants["b" /* CoordinationType */])),Object(toConsumableArray["a" /* default */])(getPluginCoordinationTypes()));}// Need to do this in a function since the plugin coordination
// types are dynamic.
function getDefaultCoordinationValues(){return Object(objectSpread2["a" /* default */])({},coordination["c" /* DEFAULT_COORDINATION_VALUES */],{},getPluginCoordinationTypeDefaults());}// Need to do this in a function since the plugin coordination
// types are dynamic.
function getComponentCoordinationTypes(){return Object(objectSpread2["a" /* default */])({},coordination["b" /* COMPONENT_COORDINATION_TYPES */],{},Object(utils["b" /* fromEntries */])(getPluginViewTypes().map(function(viewType){return[viewType,getPluginCoordinationTypesForViewType(viewType)];})));}function getFileTypeDataTypeMapping(){return Object(objectSpread2["a" /* default */])({},FILE_TYPE_DATA_TYPE_MAPPING,{},Object(utils["b" /* fromEntries */])(getPluginFileTypes().map(function(fileType){return[fileType,getDataTypeForPluginFileType(fileType)];})));}function getConvenienceFileTypes(){return Object(objectSpread2["a" /* default */])({},PLUGINS[PLUGIN_CONVENIENCE_FILE_TYPES_KEY]);}

/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuiSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PopperMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61);
function MuiSpan(props){var children=props.children;var classes=Object(_styles__WEBPACK_IMPORTED_MODULE_8__[/* styles */ "b"])();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:classes.span},children);}function PopperMenu(props){var buttonIcon=props.buttonIcon,open=props.open,setOpen=props.setOpen,children=props.children,buttonClassName=props.buttonClassName,_props$placement=props.placement,placement=_props$placement===void 0?'bottom-end':_props$placement;var classes=Object(_styles__WEBPACK_IMPORTED_MODULE_8__[/* styles */ "b"])();var anchorRef=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();var handleClick=function handleClick(){setOpen(function(prev){return!prev;});};var handleClose=function handleClose(){setOpen(false);};var id=open?'v-popover-menu':undefined;var getTooltipContainer=Object(_hooks__WEBPACK_IMPORTED_MODULE_7__[/* useVitessceContainer */ "g"])(anchorRef);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:anchorRef,className:classes.container},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a,{"aria-describedby":id,onClick:handleClick,size:"small",className:buttonClassName},buttonIcon),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_2___default.a,{id:id,open:open,anchorEl:anchorRef&&anchorRef.current,container:getTooltipContainer,onClose:handleClose,placement:placement,transition:true},function(_ref){var TransitionProps=_ref.TransitionProps;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_5___default.a,{onClickAway:handleClose},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6___default.a,Object.assign({},TransitionProps,{timeout:100}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a,{elevation:4,className:classes.paper},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_4___default.a,null,children))));}));}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("zustand/context");

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return muiTheme; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);
var styles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function(){return{paper:{maxHeight:200,overflow:'auto'},container:{position:'relative',left:0,top:0},span:{width:'70px',textAlign:'center',paddingLeft:'2px',paddingRight:'2px'}};});var muiTheme={dark:Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createTheme"])({palette:{type:'dark',primary:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["grey"],secondary:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["grey"],primaryBackground:'#222222',primaryBackgroundHighlight:'#000000',primaryBackgroundInput:'#D3D3D3',primaryBackgroundDim:'#333333',primaryBackgroundLight:'#757575',primaryForeground:'#D3D3D3',primaryForegroundDim:'#000000',primaryForegroundActive:'#9bb7d6',secondaryBackground:'#000000',secondaryBackgroundDim:'#444444',secondaryForeground:'#D3D3D3'},props:{MuiButtonBase:{disableRipple:true}}}),light:Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createTheme"])({palette:{type:'light',primary:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["grey"],secondary:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["grey"],primaryBackground:'#F1F1F1',primaryBackgroundHighlight:'#FFFFFF',primaryBackgroundInput:'#FFFFFF',primaryBackgroundDim:'#8A8A8A',primaryBackgroundLight:'#e0e0e0',primaryForeground:'#333333',primaryForegroundDim:'#808080',primaryForegroundActive:'#0074D9',secondaryBackground:'#F1F1F1',secondaryBackgroundDim:'#C0C0C0',secondaryForeground:'#222222'},props:{MuiButtonBase:{disableRipple:true}}})};

/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDropDown");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDropUp");

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CloudDownload");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal");

/***/ }),
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, exports) {

module.exports = require("lodash/difference");

/***/ }),
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(3);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "lodash/every"
var every_ = __webpack_require__(156);
var every_default = /*#__PURE__*/__webpack_require__.n(every_);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2);

// EXTERNAL MODULE: external "react-virtualized"
var external_react_virtualized_ = __webpack_require__(144);

// EXTERNAL MODULE: external "uuid/v4"
var v4_ = __webpack_require__(69);
var v4_default = /*#__PURE__*/__webpack_require__.n(v4_);

// EXTERNAL MODULE: external "lodash/union"
var union_ = __webpack_require__(157);
var union_default = /*#__PURE__*/__webpack_require__.n(union_);

// EXTERNAL MODULE: external "lodash/difference"
var difference_ = __webpack_require__(128);
var difference_default = /*#__PURE__*/__webpack_require__.n(difference_);

// EXTERNAL MODULE: external "lodash/isEqual"
var isEqual_ = __webpack_require__(16);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_);

// CONCATENATED MODULE: ./src/components/selectable-table/SelectableTable.js
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */ /* eslint-disable jsx-a11y/click-events-have-key-events */var SHIFT_KEYCODE=16;/**
 * A table with "selectable" rows.
 * @prop {string[]} columns An array of column names, corresponding to data object properties.
 * @prop {object[]} data An array of data objects used to populate table rows.
 * @prop {function} onChange Callback function,
 * passed a selection object when `allowMultiple` is false (and `null` if `allowUncheck` is true),
 * or passed an array of selection objects when `allowMultiple` is true.
 * @prop {string} idKey The key for a unique identifier property of `data` objects.
 * @prop {string} valueKey If initially-selected rows are required,
 * this key specifies a boolean property of the `data` objects
 * indicating those rows that should be initially selected.
 * @prop {boolean} allowMultiple Whether to allow multiple rows to be selected.
 * @prop {boolean} allowUncheck Whether to allow selected rows to be un-checked. By default, false.
 * @prop {boolean} showTableHead Whether to show the table header element. By default, true.
 * @prop {boolean} showTableInputs Whether to show the table input elements for each row.
 * By default, false.
 */function SelectableTable(props){var hasColorEncoding=props.hasColorEncoding,columns=props.columns,data=props.data,onChange=props.onChange,_props$idKey=props.idKey,idKey=_props$idKey===void 0?'id':_props$idKey,_props$valueKey=props.valueKey,valueKey=_props$valueKey===void 0?'value':_props$valueKey,_props$allowMultiple=props.allowMultiple,allowMultiple=_props$allowMultiple===void 0?false:_props$allowMultiple,_props$allowUncheck=props.allowUncheck,allowUncheck=_props$allowUncheck===void 0?false:_props$allowUncheck,_props$showTableHead=props.showTableHead,showTableHead=_props$showTableHead===void 0?true:_props$showTableHead,_props$showTableInput=props.showTableInputs,showTableInputs=_props$showTableInput===void 0?false:_props$showTableInput,_props$testHeight=props.testHeight,testHeight=_props$testHeight===void 0?undefined:_props$testHeight,_props$testWidth=props.testWidth,testWidth=_props$testWidth===void 0?undefined:_props$testWidth;var _useState=Object(external_react_["useState"])(null),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),selectedRows=_useState2[0],setSelectedRows=_useState2[1];var _useState3=Object(external_react_["useState"])(false),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),isCheckingMultiple=_useState4[0],setIsCheckingMultiple=_useState4[1];// Enable selecting multiple rows while the shift key is down.
Object(external_react_["useEffect"])(function(){function onKeyDown(event){if(allowMultiple&&event.keyCode===SHIFT_KEYCODE){setIsCheckingMultiple(true);}}function onKeyUp(event){if(allowMultiple&&event.keyCode===SHIFT_KEYCODE){setIsCheckingMultiple(false);}}window.addEventListener('keydown',onKeyDown);window.addEventListener('keyup',onKeyUp);return function(){window.removeEventListener('keydown',onKeyDown);window.removeEventListener('keyup',onKeyUp);};},[allowMultiple]);// Callback function to update the `selectedRows` state.
var onSelectRow=Object(external_react_["useCallback"])(function(value,checked){if(checked||allowUncheck){if(!isCheckingMultiple&&(checked||!checked&&allowMultiple&&selectedRows.length>1)){setSelectedRows([value]);}else if(!allowMultiple&&!checked){setSelectedRows([]);}else{setSelectedRows(checked?union_default()(selectedRows||[],[value]):difference_default()(selectedRows||[],[value]));}}},[allowMultiple,isCheckingMultiple,allowUncheck,selectedRows]);// Handler for checkbox input elements.
var handleInputChange=Object(external_react_["useCallback"])(function(event){var target=event.target;var checked=target.checked;var value=target.value;onSelectRow(value,checked);},[onSelectRow]);// Function to map row IDs to corresponding objects
// to pass to the `onChange` callback.
var getDataFromIds=Object(external_react_["useCallback"])(function(ids){return ids.map(function(id){var _ref;return _ref={},Object(defineProperty["a" /* default */])(_ref,idKey,id),Object(defineProperty["a" /* default */])(_ref,"data",data.find(function(item){return item[idKey]===id;})),_ref;});},[data,idKey]);// Function to check if a row ID has been selected.
var isSelected=Object(external_react_["useCallback"])(function(id){return Array.isArray(selectedRows)&&selectedRows.includes(id);},[selectedRows]);/* eslint-disable react-hooks/exhaustive-deps */Object(external_react_["useEffect"])(function(){// Check whether an initial set of rows should be selected.
var initialSelectedRows=data.map(function(d){if(d[valueKey]){return d[idKey];}return null;}).filter(Boolean);if(!isEqual_default()(initialSelectedRows,selectedRows)){if(initialSelectedRows.length>0){setSelectedRows(initialSelectedRows);}else{setSelectedRows(null);}}},[data,idKey,valueKey]);/* eslint-disable react-hooks/exhaustive-deps */Object(external_react_["useEffect"])(function(){// Call the `onChange` prop function with an updated row or set of rows.
if(!onChange||!selectedRows){return;}var selectedRowData=getDataFromIds(selectedRows);if(allowMultiple){onChange(selectedRowData);}else if(selectedRows.length===1){onChange(selectedRowData[0]);}else if(selectedRows.length===0){onChange(null);}},[selectedRows,allowMultiple]);// Generate a unique ID to use in (for, id) label-input pairs.
var inputUuid=v4_default()();// Class for first column of inputs, to hide them if desired.
var hiddenInputsClass=showTableInputs?'':'hidden-input-column';var rowRenderer=function rowRenderer(_ref2){var index=_ref2.index,style=_ref2.style;return/*#__PURE__*/ (// eslint-disable-next-line jsx-a11y/interactive-supports-focus
external_react_default.a.createElement("div",{key:data[index][idKey],className:"table-item table-row ".concat(isSelected(data[index][idKey])?'row-checked ':''),style:style,role:"button",onClick:function onClick(){return onSelectRow(data[index][idKey],!isSelected(data[index][idKey])||!hasColorEncoding);}},/*#__PURE__*/external_react_default.a.createElement("div",{className:"input-container ".concat(hiddenInputsClass," table-cell")},/*#__PURE__*/external_react_default.a.createElement("label",{htmlFor:"".concat(inputUuid,"_").concat(data[index][idKey])},/*#__PURE__*/external_react_default.a.createElement("input",{id:"".concat(inputUuid,"_").concat(data[index][idKey]),type:"checkbox",className:isCheckingMultiple?'checkbox':'radio',name:inputUuid,value:data[index][idKey],onChange:handleInputChange,checked:isSelected(data[index][idKey])}))),columns.map(function(column){return/*#__PURE__*/external_react_default.a.createElement("div",{className:"table-cell",key:column},data[index][column]);})));};var headerRowRenderer=function headerRowRenderer(_ref3){var style=_ref3.style;return/*#__PURE__*/external_react_default.a.createElement("div",{className:"".concat(hiddenInputsClass," table-row"),style:style},columns.map(function(column){return/*#__PURE__*/external_react_default.a.createElement("div",{key:column},column);}));};return/*#__PURE__*/external_react_default.a.createElement("div",{className:"selectable-table"},/*#__PURE__*/external_react_default.a.createElement(external_react_virtualized_["AutoSizer"],null,function(_ref4){var width=_ref4.width,height=_ref4.height;return/*#__PURE__*/external_react_default.a.createElement(external_react_virtualized_["Table"],{height:testHeight||height,gridStyle:{outline:'none'},rowCount:data.length// 24 is 1 em + padding in either direction (see _selectable_table.scss).
,rowHeight:24,headerHeight:showTableHead?24:undefined,rowRenderer:rowRenderer,width:testWidth||width,headerRowRenderer:showTableHead?headerRowRenderer:undefined,rowGetter:function rowGetter(_ref5){var index=_ref5.index;return data[index];}});}));}
// CONCATENATED MODULE: ./src/components/selectable-table/index.js

// CONCATENATED MODULE: ./src/components/genes/Genes.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Genes; });
function Genes(props){var hasColorEncoding=props.hasColorEncoding,_props$geneList=props.geneList,geneList=_props$geneList===void 0?[]:_props$geneList,_props$geneSelection=props.geneSelection,geneSelection=_props$geneSelection===void 0?[]:_props$geneSelection,_props$geneFilter=props.geneFilter,geneFilter=_props$geneFilter===void 0?null:_props$geneFilter,setGeneSelection=props.setGeneSelection,enableMultiSelect=props.enableMultiSelect;var _useState=Object(external_react_["useState"])(''),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),searchTerm=_useState2[0],setSearchTerm=_useState2[1];var _useState3=Object(external_react_["useState"])(geneList),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),searchResults=_useState4[0],setSearchResults=_useState4[1];Object(external_react_["useEffect"])(function(){var results=geneList.filter(function(gene){return gene.toLowerCase().includes(searchTerm.toLowerCase());});setSearchResults(results);},[searchTerm,geneList]);function onChange(selection){if(setGeneSelection&&selection){if(Array.isArray(selection)){if(selection.length>0&&every_default()(selection,function(s){return s.name;})){setGeneSelection(selection.map(function(s){return s.name;}));}else{setGeneSelection(null);}}else if(selection.name){setGeneSelection([selection.name]);setSearchTerm(selection.name);}}}var data=searchResults.filter(function(gene){return geneFilter?geneFilter.includes(gene):true;}).sort(function(a,b){return a.localeCompare(b);}).map(function(gene){return{name:gene,value:geneSelection?geneSelection.includes(gene):false};});var handleChange=function handleChange(event){setSearchTerm(event.target.value);};return/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,/*#__PURE__*/external_react_default.a.createElement("input",{className:"search-bar",type:"text",placeholder:"Search",value:searchTerm,onChange:handleChange}),/*#__PURE__*/external_react_default.a.createElement(SelectableTable,{columns:['name'],data:data,hasColorEncoding:hasColorEncoding,idKey:"name",valueKey:"value",onChange:onChange,allowMultiple:enableMultiSelect,allowUncheck:enableMultiSelect,showTableHead:false}));}

/***/ }),
/* 143 */,
/* 144 */
/***/ (function(module, exports) {

module.exports = require("react-virtualized");

/***/ }),
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenesSubscriber; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _data_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _app_state_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _app_state_coordination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);
/* harmony import */ var _TitleInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);
/* harmony import */ var _Genes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(142);
var GENES_DATA_TYPES=['expression-matrix'];/**
 * A subscriber component for a gene listing component.
 * @param {object} props
 * @param {string} props.theme The current theme name.
 * @param {object} props.coordinationScopes The mapping from coordination types to coordination
 * scopes.
 * @param {function} props.removeGridComponent The callback function to pass to TitleInfo,
 * to call when the component has been removed from the grid.
 * @param {string} props.title The component title.
 * @param {string} props.variablesLabelOverride The singular form
 * of the name of the variable.
 * @param {string} props.variablesPluralLabelOverride The plural
 * form of the name of the variable.
 * @param {boolean} props.enableMultiSelect If true, allow
 * shift-clicking to select multiple genes.
 */function GenesSubscriber(props){var coordinationScopes=props.coordinationScopes,removeGridComponent=props.removeGridComponent,_props$variablesLabel=props.variablesLabelOverride,variablesLabel=_props$variablesLabel===void 0?'gene':_props$variablesLabel,_props$variablesPlura=props.variablesPluralLabelOverride,variablesPluralLabel=_props$variablesPlura===void 0?"".concat(variablesLabel,"s"):_props$variablesPlura,theme=props.theme,_props$title=props.title,title=_props$title===void 0?'Expression Levels':_props$title,_props$enableMultiSel=props.enableMultiSelect,enableMultiSelect=_props$enableMultiSel===void 0?false:_props$enableMultiSel;var loaders=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useLoaders */ "o"])();// Get "props" from the coordination space.
var _useCoordination=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useCoordination */ "j"])(_app_state_coordination__WEBPACK_IMPORTED_MODULE_6__[/* COMPONENT_COORDINATION_TYPES */ "b"].genes,coordinationScopes),_useCoordination2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useCoordination,2),_useCoordination2$=_useCoordination2[0],dataset=_useCoordination2$.dataset,geneSelection=_useCoordination2$.featureSelection,geneFilter=_useCoordination2$.featureFilter,cellColorEncoding=_useCoordination2$.obsColorEncoding,_useCoordination2$2=_useCoordination2[1],setGeneSelection=_useCoordination2$2.setFeatureSelection,setGeneFilter=_useCoordination2$2.setFeatureFilter,setGeneHighlight=_useCoordination2$2.setFeatureHighlight,setCellColorEncoding=_useCoordination2$2.setObsColorEncoding;var _useUrls=Object(_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useUrls */ "f"])(),_useUrls2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useUrls,3),urls=_useUrls2[0],addUrl=_useUrls2[1],resetUrls=_useUrls2[2];var _useReady=Object(_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useReady */ "e"])(GENES_DATA_TYPES),_useReady2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useReady,4),isReady=_useReady2[0],setItemIsReady=_useReady2[1],setItemIsNotReady=_useReady2[2],// eslint-disable-line no-unused-vars
resetReadyItems=_useReady2[3];// Reset file URLs and loader progress when the dataset has changed.
Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){resetUrls();resetReadyItems();// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);// Get data from loaders using the data hooks.
var _useExpressionAttrs=Object(_data_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useExpressionAttrs */ "d"])(loaders,dataset,setItemIsReady,addUrl,true),_useExpressionAttrs2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useExpressionAttrs,1),attrs=_useExpressionAttrs2[0];var geneList=attrs?attrs.cols:[];var numGenes=geneList.length;function setGeneSelectionAndColorEncoding(newSelection){setGeneSelection(newSelection);setCellColorEncoding('geneSelection');}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TitleInfo__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],{title:title,info:"".concat(numGenes," ").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* pluralize */ "g"])(variablesLabel,variablesPluralLabel,numGenes)),theme:theme// Virtual scroll is used but this allows for the same styling as a scroll component
// even though this no longer uses the TitleInfo component's
// scroll css (SelectableTable is virtual scroll).
,isScroll:true,removeGridComponent:removeGridComponent,isReady:isReady,urls:urls},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Genes__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{hasColorEncoding:cellColorEncoding==='geneSelection',geneList:geneList,geneSelection:geneSelection,geneFilter:geneFilter,setGeneSelection:setGeneSelectionAndColorEncoding,setGeneFilter:setGeneFilter,setGeneHighlight:setGeneHighlight,enableMultiSelect:enableMultiSelect}));}

/***/ }),
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */
/***/ (function(module, exports) {

module.exports = require("lodash/every");

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = require("lodash/union");

/***/ }),
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GenesSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenesSubscriber", function() { return _GenesSubscriber__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _Genes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(142);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Genes", function() { return _Genes__WEBPACK_IMPORTED_MODULE_1__["a"]; });



/***/ })
/******/ ]);
//# sourceMappingURL=genes.js.map