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
/******/ 	return __webpack_require__(__webpack_require__.s = 213);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(136);


/***/ }),
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export makeCellStatusMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return cellLayerDefaultProps; });
/* unused harmony export DEFAULT_DARK_COLOR */
/* unused harmony export DEFAULT_LIGHT_COLOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getDefaultColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PALETTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VIEWER_PALETTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLORMAP_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_GL_OPTIONS; });
/* unused harmony export createDefaultUpdateStatus */
/* unused harmony export createDefaultUpdateCellsSelection */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return createDefaultUpdateCellsHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return createDefaultUpdateGenesHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return createDefaultUpdateTracksHover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return createDefaultUpdateViewInfo; });
/* unused harmony export createDefaultClearPleaseWait */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return copyUint8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getNextNumberedNodeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setCellSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return mergeCellSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return createWarningComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return asEsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return formatBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getStatsForResolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return canLoadResolution; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sets_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _classNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
// eslint-disable-line import/no-extraneous-dependencies
function makeCellStatusMessage(cellInfoFactors){return Object.entries(cellInfoFactors).map(function(_ref){var _ref2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,2),factor=_ref2[0],value=_ref2[1];return"".concat(factor,": ").concat(value);}).join('; ');}function cellLayerDefaultProps(cells,updateStatus,setCellHighlight,setComponentHover){return{coordinateSystem:_deck_gl_core__WEBPACK_IMPORTED_MODULE_3__["COORDINATE_SYSTEM"].CARTESIAN,data:cells,pickable:true,autoHighlight:true,stroked:true,filled:true,getElevation:0,onHover:function onHover(info){// Notify the parent component that its child component is
// the "hover source".
if(setComponentHover){setComponentHover();}if(info.object){var _info$object=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(info.object,2),cellId=_info$object[0],cellInfo=_info$object[1];var _cellInfo$factors=cellInfo.factors,factors=_cellInfo$factors===void 0?{}:_cellInfo$factors;if(updateStatus){updateStatus(makeCellStatusMessage(factors));}if(setCellHighlight){setCellHighlight(cellId);}}else if(setCellHighlight){// Clear the currently-hovered cell info by passing null.
setCellHighlight('');}}};}var DEFAULT_DARK_COLOR=[50,50,50];var DEFAULT_LIGHT_COLOR=[200,200,200];function getDefaultColor(theme){return theme==='dark'?DEFAULT_DARK_COLOR:DEFAULT_LIGHT_COLOR;}// From https://personal.sron.nl/~pault/#sec:qualitative
var PALETTE=[[68,119,170],[136,204,238],[68,170,153],[17,119,51],[153,153,51],[221,204,119],[204,102,119],[136,34,85],[170,68,153]];var VIEWER_PALETTE=[[0,0,255],[0,255,0],[255,0,255],[255,255,0],[0,255,255],[255,255,255],[255,128,0],[255,0,0]];var COLORMAP_OPTIONS=['viridis','greys','magma','jet','hot','bone','copper','summer','density','inferno'];var DEFAULT_GL_OPTIONS={webgl2:true};function createDefaultUpdateStatus(componentName){return function(message){return console.warn("".concat(componentName," updateStatus: ").concat(message));};}function createDefaultUpdateCellsSelection(componentName){return function(cellsSelection){return console.warn("".concat(componentName," updateCellsSelection: ").concat(cellsSelection));};}function createDefaultUpdateCellsHover(componentName){return function(hoverInfo){return console.warn("".concat(componentName," updateCellsHover: ").concat(hoverInfo.cellId));};}function createDefaultUpdateGenesHover(componentName){return function(hoverInfo){return console.warn("".concat(componentName," updateGenesHover: ").concat(hoverInfo.geneId));};}function createDefaultUpdateTracksHover(componentName){return function(hoverInfo){return console.warn("".concat(componentName," updateTracksHover: ").concat(hoverInfo));};}function createDefaultUpdateViewInfo(componentName){return function(viewInfo){return console.warn("".concat(componentName," updateViewInfo: ").concat(viewInfo));};}function createDefaultClearPleaseWait(){return function(){};}/**
 * Copy a typed array into a new array buffer.
 * @param {Uint8Array} arr The typed array to be copied.
 * @returns {Uint8Array} The copied array.
 */function copyUint8Array(arr){var newBuffer=new ArrayBuffer(arr.buffer.byteLength);var newArr=new Uint8Array(newBuffer);newArr.set(arr);return newArr;}function getNextNumberedNodeName(nodes,prefix){var i=1;if(nodes){// eslint-disable-next-line no-loop-func
while(nodes.find(function(n){return n.name==="".concat(prefix).concat(i);})){// eslint-disable-next-line no-plusplus
i++;}}return"".concat(prefix).concat(i);}/**
 * Create a new selected cell set based on a cell selection.
 * @param {string[]} cellSelection An array of cell IDs.
 * @param {object[]} additionalCellSets The previous array of user-defined cell sets.
 * @param {function} setCellSetSelection The setter function for cell set selections.
 * @param {function} setAdditionalCellSets The setter function for user-defined cell sets.
 */function setCellSelection(cellSelection,additionalCellSets,cellSetColor,setCellSetSelection,setAdditionalCellSets,setCellSetColor,setCellColorEncoding){var prefix=arguments.length>7&&arguments[7]!==undefined?arguments[7]:'Selection ';var CELL_SELECTIONS_LEVEL_ZERO_NAME='My Selections';var selectionsLevelZeroNode=additionalCellSets===null||additionalCellSets===void 0?void 0:additionalCellSets.tree.find(function(n){return n.name===CELL_SELECTIONS_LEVEL_ZERO_NAME;});var nextAdditionalCellSets={version:_sets_constants__WEBPACK_IMPORTED_MODULE_4__[/* HIERARCHICAL_SCHEMAS */ "c"][_sets_constants__WEBPACK_IMPORTED_MODULE_4__[/* SETS_DATATYPE_CELL */ "h"]].latestVersion,datatype:_sets_constants__WEBPACK_IMPORTED_MODULE_4__[/* SETS_DATATYPE_CELL */ "h"],tree:Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(additionalCellSets?additionalCellSets.tree:[])};var nextName=getNextNumberedNodeName(selectionsLevelZeroNode===null||selectionsLevelZeroNode===void 0?void 0:selectionsLevelZeroNode.children,prefix);var colorIndex=0;if(selectionsLevelZeroNode){colorIndex=selectionsLevelZeroNode.children.length;selectionsLevelZeroNode.children.push({name:nextName,set:cellSelection.map(function(d){return[d,null];})});}else{nextAdditionalCellSets.tree.push({name:CELL_SELECTIONS_LEVEL_ZERO_NAME,children:[{name:nextName,set:cellSelection.map(function(d){return[d,null];})}]});}setAdditionalCellSets(nextAdditionalCellSets);var nextPath=['My Selections',nextName];setCellSetColor([].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cellSetColor||[]),[{path:nextPath,color:PALETTE[colorIndex%PALETTE.length]}]));setCellSetSelection([nextPath]);setCellColorEncoding('cellSetSelection');}function mergeCellSets(cellSets,additionalCellSets){return{version:_sets_constants__WEBPACK_IMPORTED_MODULE_4__[/* HIERARCHICAL_SCHEMAS */ "c"][_sets_constants__WEBPACK_IMPORTED_MODULE_4__[/* SETS_DATATYPE_CELL */ "h"]].latestVersion,datatype:_sets_constants__WEBPACK_IMPORTED_MODULE_4__[/* SETS_DATATYPE_CELL */ "h"],tree:[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cellSets?cellSets.tree:[]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(additionalCellSets?additionalCellSets.tree:[]))};}function createWarningComponent(props){return function(){var title=props.title,message=props.message;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:_classNames__WEBPACK_IMPORTED_MODULE_5__[/* PRIMARY_CARD */ "b"]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,message));};}function asEsModule(component){return{__esModule:true,default:component};}function formatBytes(bytes){var decimals=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;if(bytes===0)return'0 Bytes';var k=1024;var dm=decimals<0?0:decimals;var sizes=['Bytes','KB','MB','GB'];var i=Math.floor(Math.log(bytes)/Math.log(k));// eslint-disable-next-line no-restricted-properties
return"".concat(parseFloat((bytes/Math.pow(k,i)).toFixed(dm))," ").concat(sizes[i]);}var getStatsForResolution=function getStatsForResolution(loader,resolution){var _loader$resolution=loader[resolution],shape=_loader$resolution.shape,labels=_loader$resolution.labels;var height=shape[labels.indexOf('y')];var width=shape[labels.indexOf('x')];var depth=shape[labels.indexOf('z')];// eslint-disable-next-line no-bitwise
var depthDownsampled=Math.max(1,depth>>resolution);// Check memory allocation limits for Float32Array (used in XR3DLayer for rendering)
var totalBytes=4*height*width*depthDownsampled;return{height:height,width:width,depthDownsampled:depthDownsampled,totalBytes:totalBytes};};var canLoadResolution=function canLoadResolution(loader,resolution){var _window$performance,_window$performance2,_window$performance2$;var _getStatsForResolutio=getStatsForResolution(loader,resolution),totalBytes=_getStatsForResolutio.totalBytes,height=_getStatsForResolutio.height,width=_getStatsForResolutio.width,depthDownsampled=_getStatsForResolutio.depthDownsampled;var maxHeapSize=((_window$performance=window.performance)===null||_window$performance===void 0?void 0:_window$performance.memory)&&((_window$performance2=window.performance)===null||_window$performance2===void 0?void 0:(_window$performance2$=_window$performance2.memory)===null||_window$performance2$===void 0?void 0:_window$performance2$.jsHeapSizeLimit)/2;var maxSize=maxHeapSize||Math.pow(2,31)-1;// 2048 is a normal texture size limit although some browsers go larger.
return totalBytes<maxSize&&height<=2048&&depthDownsampled<=2048&&width<=2048&&depthDownsampled>1;};

/***/ }),
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
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@luma.gl/constants");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEqual");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@deck.gl/core");

/***/ }),
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FILE_EXTENSION_JSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MIME_TYPE_JSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FILE_EXTENSION_TABULAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MIME_TYPE_TABULAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SEPARATOR_TABULAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NA_VALUE_TABULAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SETS_DATATYPE_CELL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HIERARCHICAL_SCHEMAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TABULAR_SCHEMAS; });
/* harmony import */ var _schemas_cell_sets_schema_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
var _schemas_cell_sets_schema_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(54, 1);
/* harmony import */ var _schemas_cell_sets_tabular_schema_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);
var _schemas_cell_sets_tabular_schema_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(93, 1);
var FILE_EXTENSION_JSON='json';var MIME_TYPE_JSON='application/json';var FILE_EXTENSION_TABULAR='csv';var MIME_TYPE_TABULAR='text/csv';var SEPARATOR_TABULAR=',';// The NA value below corresponds to the allowed string enum
// value "NA" in the cell-sets-tabular JSON schema.
var NA_VALUE_TABULAR='NA';var SETS_DATATYPE_CELL='cell';var HIERARCHICAL_SCHEMAS={cell:{latestVersion:'0.1.3',schema:_schemas_cell_sets_schema_json__WEBPACK_IMPORTED_MODULE_0__}};var TABULAR_SCHEMAS={cell:{schema:_schemas_cell_sets_tabular_schema_json__WEBPACK_IMPORTED_MODULE_1__}};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),
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
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GLSL_COLORMAPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GLSL_COLORMAP_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLORMAP_SHADER_PLACEHOLDER; });
// List of the GLSL colormaps available,
// to validate against before string replacing.
var GLSL_COLORMAPS=['plasma','viridis','jet'];var GLSL_COLORMAP_DEFAULT='plasma';var COLORMAP_SHADER_PLACEHOLDER='COLORMAP_FUNC';

/***/ }),
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
/* 38 */
/***/ (function(module, exports) {

module.exports = require("lodash/range");

/***/ }),
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
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slider");

/***/ }),
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
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(getPrototypeOf["a" /* default */])(object);
    if (object === null) break;
  }

  return object;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/get.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return get_get; });

function get_get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    get_get = Reflect.get;
  } else {
    get_get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return get_get(target, property, receiver || target);
}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@luma.gl/core");

/***/ }),
/* 54 */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"$id\":\"https://github.com/vitessce/vitessce/#cell-sets\",\"title\":\"Vitessce cell sets data\",\"type\":\"object\",\"definitions\":{\"stringArray\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"stringProbabilityTupleArray\":{\"type\":\"array\",\"items\":{\"type\":\"array\",\"additionalItems\":false,\"items\":[{\"type\":\"string\"},{\"oneOf\":[{\"type\":\"number\",\"minimum\":0,\"maximum\":1},{\"type\":\"null\"}]}]}},\"colorArray\":{\"type\":\"array\",\"items\":{\"type\":\"integer\",\"minimum\":0,\"maximum\":255},\"minItems\":3,\"maxItems\":3},\"treeNodeLeaf\":{\"type\":\"object\",\"additionalProperties\":false,\"required\":[\"name\"],\"properties\":{\"name\":{\"type\":\"string\"},\"color\":{\"$ref\":\"#/definitions/colorArray\"},\"set\":{\"$ref\":\"#/definitions/stringArray\"}}},\"treeNodeNonLeaf\":{\"type\":\"object\",\"additionalProperties\":false,\"required\":[\"name\"],\"properties\":{\"name\":{\"type\":\"string\"},\"color\":{\"$ref\":\"#/definitions/colorArray\"},\"children\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/treeNode\"}}}},\"treeNode\":{\"oneOf\":[{\"$ref\":\"#/definitions/treeNodeNonLeaf\"},{\"$ref\":\"#/definitions/treeNodeLeaf\"}]},\"version0.1.2\":{\"type\":\"object\",\"additionalProperties\":false,\"required\":[\"version\",\"datatype\",\"tree\"],\"properties\":{\"dataset\":{\"type\":\"string\"},\"version\":{\"type\":\"string\",\"enum\":[\"0.1.2\"]},\"datatype\":{\"type\":\"string\",\"enum\":[\"cell\"]},\"tree\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/treeNodeNonLeaf\"}}}},\"treeNodeLeafProbabilistic\":{\"type\":\"object\",\"additionalProperties\":false,\"required\":[\"name\"],\"properties\":{\"name\":{\"type\":\"string\"},\"color\":{\"$ref\":\"#/definitions/colorArray\"},\"set\":{\"$ref\":\"#/definitions/stringProbabilityTupleArray\"}}},\"treeNodeNonLeafProbabilistic\":{\"type\":\"object\",\"additionalProperties\":false,\"required\":[\"name\"],\"properties\":{\"name\":{\"type\":\"string\"},\"color\":{\"$ref\":\"#/definitions/colorArray\"},\"children\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/treeNodeProbabilistic\"}}}},\"treeNodeProbabilistic\":{\"oneOf\":[{\"$ref\":\"#/definitions/treeNodeNonLeafProbabilistic\"},{\"$ref\":\"#/definitions/treeNodeLeafProbabilistic\"}]},\"version0.1.3\":{\"type\":\"object\",\"additionalProperties\":false,\"required\":[\"version\",\"datatype\",\"tree\"],\"properties\":{\"dataset\":{\"type\":\"string\"},\"version\":{\"type\":\"string\",\"enum\":[\"0.1.3\"]},\"datatype\":{\"type\":\"string\",\"enum\":[\"cell\"]},\"tree\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/treeNodeNonLeafProbabilistic\"}}}}},\"oneOf\":[{\"$ref\":\"#/definitions/version0.1.2\"},{\"$ref\":\"#/definitions/version0.1.3\"}]}");

/***/ }),
/* 55 */,
/* 56 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("zustand/context");

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useSelectStyles; });
/* unused harmony export useOptionStyles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useControllerSectionStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StyledAccordionDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StyledAccordionSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StyledInputLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverflowEllipsisGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return StyledSelectionSlider; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(164);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(165);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(106);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
var useSelectStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function(){return{selectRoot:{padding:0,height:'auto',margin:'4px 0'}};});var useOptionStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function(theme){return{paper:{backgroundColor:theme.palette.background.paper},span:{width:'70px',textAlign:'center',paddingLeft:'2px',paddingRight:'2px'},colors:{'&:hover':{backgroundColor:'transparent'},paddingLeft:'2px',paddingRight:'2px'},popper:{zIndex:4}};});var sharedControllerStyles={width:'100%',flexDirection:'column'};var useControllerSectionStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function(){return{root:Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},sharedControllerStyles,{padding:'0px 8px'})};});var StyledAccordionDetails=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function(){return{root:Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},sharedControllerStyles,{padding:'8px 8px 24px 8px'})};})(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_3___default.a);var StyledAccordionSummary=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function(theme){return{root:{padding:'0px 8px'},content:{margin:'4px 0px',minWidth:'0px'},expanded:{marginBottom:theme.spacing(-3),top:theme.spacing(-1)},expandIcon:{'&$expanded':{top:theme.spacing(-1.3)}}};})(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_2___default.a);var StyledInputLabel=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function(){return{root:{fontSize:'14px'}};})(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a);var OverflowEllipsisGrid=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function(){return{item:{width:'100%',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}};})(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a);var StyledSelectionSlider=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function(){return{root:{marginTop:'7px'},markActive:{backgroundColor:'rgba(128, 128, 128, 0.7)'}};})(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5___default.a);

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("mathjs");

/***/ }),
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
/* 62 */
/***/ (function(module, exports) {

module.exports = require("math.gl");

/***/ }),
/* 63 */,
/* 64 */
/***/ (function(module, exports) {

module.exports = require("d3-array");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDropDown");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDropUp");

/***/ }),
/* 67 */,
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getSingleSelectionStats */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMultiSelectionStats; });
/* unused harmony export getPhysicalSizeScalingMatrix */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBoundingCube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abbreviateNumber; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var math_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62);
/* harmony import */ var math_gl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(math_gl__WEBPACK_IMPORTED_MODULE_4__);
function getSingleSelectionStats2D(_x){return _getSingleSelectionStats2D.apply(this,arguments);}function _getSingleSelectionStats2D(){_getSingleSelectionStats2D=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_ref){var loader,selection,data,raster,selectionStats,domain,slider;return C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:loader=_ref.loader,selection=_ref.selection;data=Array.isArray(loader)?loader[loader.length-1]:loader;_context3.next=4;return data.getRaster({selection:selection});case 4:raster=_context3.sent;selectionStats=Object(_hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_3__["getChannelStats"])(raster.data);domain=selectionStats.domain,slider=selectionStats.contrastLimits;return _context3.abrupt("return",{domain:domain,slider:slider});case 8:case"end":return _context3.stop();}}},_callee3);}));return _getSingleSelectionStats2D.apply(this,arguments);}function getSingleSelectionStats3D(_x2){return _getSingleSelectionStats3D.apply(this,arguments);}/**
 * Get bounding cube for a given loader i.e [[0, width], [0, height], [0, depth]]
 * @param {Object} loader PixelSource|PixelSource[]
 * @param {[]} selection Selection for stats.
 * @param {boolean} use3d Whether or not to get 3d stats.
 * @returns {Object} { domains, sliders }
 */function _getSingleSelectionStats3D(){_getSingleSelectionStats3D=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(_ref2){var loader,selection,lowResSource,shape,labels,sizeZ,raster0,rasterMid,rasterTop,stats0,statsMid,statsTop;return C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:loader=_ref2.loader,selection=_ref2.selection;lowResSource=loader[loader.length-1];shape=lowResSource.shape,labels=lowResSource.labels;// eslint-disable-next-line no-bitwise
sizeZ=shape[labels.indexOf('z')]>>loader.length-1;_context4.next=6;return lowResSource.getRaster({selection:Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},selection,{z:0})});case 6:raster0=_context4.sent;_context4.next=9;return lowResSource.getRaster({selection:Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},selection,{z:Math.floor(sizeZ/2)})});case 9:rasterMid=_context4.sent;_context4.next=12;return lowResSource.getRaster({selection:Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},selection,{z:Math.max(0,sizeZ-1)})});case 12:rasterTop=_context4.sent;stats0=Object(_hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_3__["getChannelStats"])(raster0.data);statsMid=Object(_hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_3__["getChannelStats"])(rasterMid.data);statsTop=Object(_hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_3__["getChannelStats"])(rasterTop.data);return _context4.abrupt("return",{domain:[Math.min(stats0.domain[0],statsMid.domain[0],statsTop.domain[0]),Math.max(stats0.domain[1],statsMid.domain[1],statsTop.domain[1])],slider:[Math.min(stats0.contrastLimits[0],statsMid.contrastLimits[0],statsTop.contrastLimits[0]),Math.max(stats0.contrastLimits[1],statsMid.contrastLimits[1],statsTop.contrastLimits[1])]});case 17:case"end":return _context4.stop();}}},_callee4);}));return _getSingleSelectionStats3D.apply(this,arguments);}var getSingleSelectionStats=/*#__PURE__*/function(){var _ref4=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref3){var loader,selection,use3d,getStats;return C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:loader=_ref3.loader,selection=_ref3.selection,use3d=_ref3.use3d;getStats=use3d?getSingleSelectionStats3D:getSingleSelectionStats2D;return _context.abrupt("return",getStats({loader:loader,selection:selection}));case 3:case"end":return _context.stop();}}},_callee);}));return function getSingleSelectionStats(_x3){return _ref4.apply(this,arguments);};}();var getMultiSelectionStats=/*#__PURE__*/function(){var _ref6=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref5){var loader,selections,use3d,stats,domains,sliders;return C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:loader=_ref5.loader,selections=_ref5.selections,use3d=_ref5.use3d;_context2.next=3;return Promise.all(selections.map(function(selection){return getSingleSelectionStats({loader:loader,selection:selection,use3d:use3d});}));case 3:stats=_context2.sent;domains=stats.map(function(stat){return stat.domain;});sliders=stats.map(function(stat){return stat.slider;});return _context2.abrupt("return",{domains:domains,sliders:sliders});case 7:case"end":return _context2.stop();}}},_callee2);}));return function getMultiSelectionStats(_x4){return _ref6.apply(this,arguments);};}();/**
 * Get physical size scaling Matrix4
 * @param {Object} loader PixelSource
 * @returns {Object} matrix
 */function getPhysicalSizeScalingMatrix(loader){var _loader$meta$physical,_loader$meta;var _ref7=(_loader$meta$physical=loader===null||loader===void 0?void 0:(_loader$meta=loader.meta)===null||_loader$meta===void 0?void 0:_loader$meta.physicalSizes)!==null&&_loader$meta$physical!==void 0?_loader$meta$physical:{},x=_ref7.x,y=_ref7.y,z=_ref7.z;if((x===null||x===void 0?void 0:x.size)&&(y===null||y===void 0?void 0:y.size)&&(z===null||z===void 0?void 0:z.size)){var min=Math.min(z.size,x.size,y.size);var ratio=[x.size/min,y.size/min,z.size/min];return new math_gl__WEBPACK_IMPORTED_MODULE_4__["Matrix4"]().scale(ratio);}return new math_gl__WEBPACK_IMPORTED_MODULE_4__["Matrix4"]().identity();}/**
 * Get bounding cube for a given loader
 * @param {Object} loader PixelSource|PixelSource[]
 * @returns {Array} [0, width], [0, height], [0, depth]]
 */function getBoundingCube(loader){var source=Array.isArray(loader)?loader[0]:loader;var shape=source.shape,labels=source.labels;var physicalSizeScalingMatrix=getPhysicalSizeScalingMatrix(source);var xSlice=[0,physicalSizeScalingMatrix[0]*shape[labels.indexOf('x')]];var ySlice=[0,physicalSizeScalingMatrix[5]*shape[labels.indexOf('y')]];var zSlice=[0,physicalSizeScalingMatrix[10]*shape[labels.indexOf('z')]];return[xSlice,ySlice,zSlice];}function abbreviateNumber(value){// Return an abbreviated representation of value, in 5 characters or less.
var maxLength=5;var maxNaiveDigits=maxLength;/* eslint-disable no-plusplus */if(!Number.isInteger(value)){--maxNaiveDigits;}// Wasted on "."
if(value<1){--maxNaiveDigits;}// Wasted on "0."
/* eslint-disable no-plusplus */var naive=Intl.NumberFormat('en-US',{maximumSignificantDigits:maxNaiveDigits,useGrouping:false}).format(value);if(naive.length<=maxLength)return naive;// "e+9" consumes 3 characters, so if we even had two significant digits,
// it would take take us to six characters, including the decimal point.
return value.toExponential(0);}

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),
/* 73 */,
/* 74 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),
/* 75 */,
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(9);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(4);

// EXTERNAL MODULE: external "short-number"
var external_short_number_ = __webpack_require__(135);
var external_short_number_default = /*#__PURE__*/__webpack_require__.n(external_short_number_);

// EXTERNAL MODULE: external "lodash/isEqual"
var isEqual_ = __webpack_require__(16);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_);

// EXTERNAL MODULE: external "@hms-dbmi/viv"
var viv_ = __webpack_require__(23);

// EXTERNAL MODULE: external "d3-array"
var external_d3_array_ = __webpack_require__(64);

// EXTERNAL MODULE: external "math.gl"
var external_math_gl_ = __webpack_require__(62);

// EXTERNAL MODULE: external "mathjs"
var external_mathjs_ = __webpack_require__(59);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(6);

// EXTERNAL MODULE: ./src/components/utils.js
var components_utils = __webpack_require__(12);

// EXTERNAL MODULE: ./src/components/spatial/constants.js
var constants = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(13);

// EXTERNAL MODULE: external "@luma.gl/constants"
var constants_ = __webpack_require__(15);
var constants_default = /*#__PURE__*/__webpack_require__.n(constants_);

// EXTERNAL MODULE: external "@deck.gl/core"
var core_ = __webpack_require__(17);

// EXTERNAL MODULE: external "@luma.gl/core"
var external_luma_gl_core_ = __webpack_require__(53);

// CONCATENATED MODULE: ./src/layers/bitmask-layer-shaders.js
var vs="\n#define SHADER_NAME bitmask-layer-vertex-shader\n\nattribute vec2 texCoords;\nattribute vec3 positions;\nattribute vec3 positions64Low;\nattribute vec3 instancePickingColors;\n\nvarying vec2 vTexCoord;\n\nvoid main(void) {\n  geometry.worldPosition = positions;\n  geometry.uv = texCoords;\n  geometry.pickingColor = instancePickingColors;\n  gl_Position = project_position_to_clipspace(positions, positions64Low, vec3(0.0), geometry.position);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  vTexCoord = texCoords;\n  vec4 color = vec4(0.0);\n  DECKGL_FILTER_COLOR(color, geometry);\n}\n";var fs="\n#define SHADER_NAME bitmask-layer-fragment-shader\nprecision highp float;\n\nvec4 plasma (float x_1306414511) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.050980392156862744,0.03137254901960784,0.5294117647058824,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.29411764705882354,0.011764705882352941,0.6313725490196078,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.49019607843137253,0.011764705882352941,0.6588235294117647,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.6588235294117647,0.13333333333333333,0.5882352941176471,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.796078431372549,0.27450980392156865,0.4745098039215686,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8980392156862745,0.4196078431372549,0.36470588235294116,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.9725490196078431,0.5803921568627451,0.2549019607843137,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.9921568627450981,0.7647058823529411,0.1568627450980392,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9411764705882353,0.9764705882352941,0.12941176470588237,1);\n  float a0 = smoothstep(e0,e1,x_1306414511);\n  float a1 = smoothstep(e1,e2,x_1306414511);\n  float a2 = smoothstep(e2,e3,x_1306414511);\n  float a3 = smoothstep(e3,e4,x_1306414511);\n  float a4 = smoothstep(e4,e5,x_1306414511);\n  float a5 = smoothstep(e5,e6,x_1306414511);\n  float a6 = smoothstep(e6,e7,x_1306414511);\n  float a7 = smoothstep(e7,e8,x_1306414511);\n  return max(mix(v0,v1,a0)*step(e0,x_1306414511)*step(x_1306414511,e1),\n    max(mix(v1,v2,a1)*step(e1,x_1306414511)*step(x_1306414511,e2),\n    max(mix(v2,v3,a2)*step(e2,x_1306414511)*step(x_1306414511,e3),\n    max(mix(v3,v4,a3)*step(e3,x_1306414511)*step(x_1306414511,e4),\n    max(mix(v4,v5,a4)*step(e4,x_1306414511)*step(x_1306414511,e5),\n    max(mix(v5,v6,a5)*step(e5,x_1306414511)*step(x_1306414511,e6),\n    max(mix(v6,v7,a6)*step(e6,x_1306414511)*step(x_1306414511,e7),mix(v7,v8,a7)*step(e7,x_1306414511)*step(x_1306414511,e8)\n  )))))));\n}\n\nvec4 viridis (float x_1870111103) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.26666666666666666,0.00392156862745098,0.32941176470588235,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.2784313725490196,0.17254901960784313,0.47843137254901963,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.23137254901960785,0.3176470588235294,0.5450980392156862,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.17254901960784313,0.44313725490196076,0.5568627450980392,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.12941176470588237,0.5647058823529412,0.5529411764705883,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.15294117647058825,0.6784313725490196,0.5058823529411764,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.3607843137254902,0.7843137254901961,0.38823529411764707,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.6666666666666666,0.8627450980392157,0.19607843137254902,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9921568627450981,0.9058823529411765,0.1450980392156863,1);\n  float a0 = smoothstep(e0,e1,x_1870111103);\n  float a1 = smoothstep(e1,e2,x_1870111103);\n  float a2 = smoothstep(e2,e3,x_1870111103);\n  float a3 = smoothstep(e3,e4,x_1870111103);\n  float a4 = smoothstep(e4,e5,x_1870111103);\n  float a5 = smoothstep(e5,e6,x_1870111103);\n  float a6 = smoothstep(e6,e7,x_1870111103);\n  float a7 = smoothstep(e7,e8,x_1870111103);\n  return max(mix(v0,v1,a0)*step(e0,x_1870111103)*step(x_1870111103,e1),\n    max(mix(v1,v2,a1)*step(e1,x_1870111103)*step(x_1870111103,e2),\n    max(mix(v2,v3,a2)*step(e2,x_1870111103)*step(x_1870111103,e3),\n    max(mix(v3,v4,a3)*step(e3,x_1870111103)*step(x_1870111103,e4),\n    max(mix(v4,v5,a4)*step(e4,x_1870111103)*step(x_1870111103,e5),\n    max(mix(v5,v6,a5)*step(e5,x_1870111103)*step(x_1870111103,e6),\n    max(mix(v6,v7,a6)*step(e6,x_1870111103)*step(x_1870111103,e7),mix(v7,v8,a7)*step(e7,x_1870111103)*step(x_1870111103,e8)\n  )))))));\n}\n\nvec4 greys (float x_1268378094) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_1268378094);\n  return mix(v0,v1,a0)*step(e0,x_1268378094)*step(x_1268378094,e1);\n}\n\nvec4 magma (float x_2443053725) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.01568627450980392,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.10980392156862745,0.06274509803921569,0.26666666666666666,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.30980392156862746,0.07058823529411765,0.4823529411764706,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.5058823529411764,0.1450980392156863,0.5058823529411764,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.7098039215686275,0.21176470588235294,0.47843137254901963,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8980392156862745,0.3137254901960784,0.39215686274509803,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.984313725490196,0.5294117647058824,0.3803921568627451,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.996078431372549,0.7607843137254902,0.5294117647058824,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9882352941176471,0.9921568627450981,0.7490196078431373,1);\n  float a0 = smoothstep(e0,e1,x_2443053725);\n  float a1 = smoothstep(e1,e2,x_2443053725);\n  float a2 = smoothstep(e2,e3,x_2443053725);\n  float a3 = smoothstep(e3,e4,x_2443053725);\n  float a4 = smoothstep(e4,e5,x_2443053725);\n  float a5 = smoothstep(e5,e6,x_2443053725);\n  float a6 = smoothstep(e6,e7,x_2443053725);\n  float a7 = smoothstep(e7,e8,x_2443053725);\n  return max(mix(v0,v1,a0)*step(e0,x_2443053725)*step(x_2443053725,e1),\n    max(mix(v1,v2,a1)*step(e1,x_2443053725)*step(x_2443053725,e2),\n    max(mix(v2,v3,a2)*step(e2,x_2443053725)*step(x_2443053725,e3),\n    max(mix(v3,v4,a3)*step(e3,x_2443053725)*step(x_2443053725,e4),\n    max(mix(v4,v5,a4)*step(e4,x_2443053725)*step(x_2443053725,e5),\n    max(mix(v5,v6,a5)*step(e5,x_2443053725)*step(x_2443053725,e6),\n    max(mix(v6,v7,a6)*step(e6,x_2443053725)*step(x_2443053725,e7),mix(v7,v8,a7)*step(e7,x_2443053725)*step(x_2443053725,e8)\n  )))))));\n}\n\nvec4 jet (float x_623120303) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.5137254901960784,1);\n  const float e1 = 0.125;\n  const vec4 v1 = vec4(0,0.23529411764705882,0.6666666666666666,1);\n  const float e2 = 0.375;\n  const vec4 v2 = vec4(0.0196078431372549,1,1,1);\n  const float e3 = 0.625;\n  const vec4 v3 = vec4(1,1,0,1);\n  const float e4 = 0.875;\n  const vec4 v4 = vec4(0.9803921568627451,0,0,1);\n  const float e5 = 1.0;\n  const vec4 v5 = vec4(0.5019607843137255,0,0,1);\n  float a0 = smoothstep(e0,e1,x_623120303);\n  float a1 = smoothstep(e1,e2,x_623120303);\n  float a2 = smoothstep(e2,e3,x_623120303);\n  float a3 = smoothstep(e3,e4,x_623120303);\n  float a4 = smoothstep(e4,e5,x_623120303);\n  return max(mix(v0,v1,a0)*step(e0,x_623120303)*step(x_623120303,e1),\n    max(mix(v1,v2,a1)*step(e1,x_623120303)*step(x_623120303,e2),\n    max(mix(v2,v3,a2)*step(e2,x_623120303)*step(x_623120303,e3),\n    max(mix(v3,v4,a3)*step(e3,x_623120303)*step(x_623120303,e4),mix(v4,v5,a4)*step(e4,x_623120303)*step(x_623120303,e5)\n  ))));\n}\n\nvec4 bone (float x_783795047) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.376;\n  const vec4 v1 = vec4(0.32941176470588235,0.32941176470588235,0.4549019607843137,1);\n  const float e2 = 0.753;\n  const vec4 v2 = vec4(0.6627450980392157,0.7843137254901961,0.7843137254901961,1);\n  const float e3 = 1.0;\n  const vec4 v3 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_783795047);\n  float a1 = smoothstep(e1,e2,x_783795047);\n  float a2 = smoothstep(e2,e3,x_783795047);\n  return max(mix(v0,v1,a0)*step(e0,x_783795047)*step(x_783795047,e1),\n    max(mix(v1,v2,a1)*step(e1,x_783795047)*step(x_783795047,e2),mix(v2,v3,a2)*step(e2,x_783795047)*step(x_783795047,e3)\n  ));\n}\n\nvec4 copper (float x_3932431844) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.804;\n  const vec4 v1 = vec4(1,0.6274509803921569,0.4,1);\n  const float e2 = 1.0;\n  const vec4 v2 = vec4(1,0.7803921568627451,0.4980392156862745,1);\n  float a0 = smoothstep(e0,e1,x_3932431844);\n  float a1 = smoothstep(e1,e2,x_3932431844);\n  return max(mix(v0,v1,a0)*step(e0,x_3932431844)*step(x_3932431844,e1),mix(v1,v2,a1)*step(e1,x_3932431844)*step(x_3932431844,e2)\n  );\n}\n\nvec4 density (float x_2921433544) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.21176470588235294,0.054901960784313725,0.1411764705882353,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.34901960784313724,0.09019607843137255,0.3137254901960784,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.43137254901960786,0.17647058823529413,0.5176470588235295,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.47058823529411764,0.30196078431372547,0.6980392156862745,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.47058823529411764,0.44313725490196076,0.8352941176470589,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.45098039215686275,0.592156862745098,0.8941176470588236,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.5254901960784314,0.7254901960784313,0.8901960784313725,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.6941176470588235,0.8392156862745098,0.8901960784313725,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9019607843137255,0.9450980392156862,0.9450980392156862,1);\n  float a0 = smoothstep(e0,e1,x_2921433544);\n  float a1 = smoothstep(e1,e2,x_2921433544);\n  float a2 = smoothstep(e2,e3,x_2921433544);\n  float a3 = smoothstep(e3,e4,x_2921433544);\n  float a4 = smoothstep(e4,e5,x_2921433544);\n  float a5 = smoothstep(e5,e6,x_2921433544);\n  float a6 = smoothstep(e6,e7,x_2921433544);\n  float a7 = smoothstep(e7,e8,x_2921433544);\n  return max(mix(v0,v1,a0)*step(e0,x_2921433544)*step(x_2921433544,e1),\n    max(mix(v1,v2,a1)*step(e1,x_2921433544)*step(x_2921433544,e2),\n    max(mix(v2,v3,a2)*step(e2,x_2921433544)*step(x_2921433544,e3),\n    max(mix(v3,v4,a3)*step(e3,x_2921433544)*step(x_2921433544,e4),\n    max(mix(v4,v5,a4)*step(e4,x_2921433544)*step(x_2921433544,e5),\n    max(mix(v5,v6,a5)*step(e5,x_2921433544)*step(x_2921433544,e6),\n    max(mix(v6,v7,a6)*step(e6,x_2921433544)*step(x_2921433544,e7),mix(v7,v8,a7)*step(e7,x_2921433544)*step(x_2921433544,e8)\n  )))))));\n}\n\nvec4 inferno (float x_1987546174) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.01568627450980392,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.12156862745098039,0.047058823529411764,0.2823529411764706,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.3333333333333333,0.058823529411764705,0.42745098039215684,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.5333333333333333,0.13333333333333333,0.41568627450980394,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.7294117647058823,0.21176470588235294,0.3333333333333333,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8901960784313725,0.34901960784313724,0.2,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.9764705882352941,0.5490196078431373,0.0392156862745098,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.9764705882352941,0.788235294117647,0.19607843137254902,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9882352941176471,1,0.6431372549019608,1);\n  float a0 = smoothstep(e0,e1,x_1987546174);\n  float a1 = smoothstep(e1,e2,x_1987546174);\n  float a2 = smoothstep(e2,e3,x_1987546174);\n  float a3 = smoothstep(e3,e4,x_1987546174);\n  float a4 = smoothstep(e4,e5,x_1987546174);\n  float a5 = smoothstep(e5,e6,x_1987546174);\n  float a6 = smoothstep(e6,e7,x_1987546174);\n  float a7 = smoothstep(e7,e8,x_1987546174);\n  return max(mix(v0,v1,a0)*step(e0,x_1987546174)*step(x_1987546174,e1),\n    max(mix(v1,v2,a1)*step(e1,x_1987546174)*step(x_1987546174,e2),\n    max(mix(v2,v3,a2)*step(e2,x_1987546174)*step(x_1987546174,e3),\n    max(mix(v3,v4,a3)*step(e3,x_1987546174)*step(x_1987546174,e4),\n    max(mix(v4,v5,a4)*step(e4,x_1987546174)*step(x_1987546174,e5),\n    max(mix(v5,v6,a5)*step(e5,x_1987546174)*step(x_1987546174,e6),\n    max(mix(v6,v7,a6)*step(e6,x_1987546174)*step(x_1987546174,e7),mix(v7,v8,a7)*step(e7,x_1987546174)*step(x_1987546174,e8)\n  )))))));\n}\n\nvec4 cool (float x_761030515) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.49019607843137253,0,0.7019607843137254,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.4549019607843137,0,0.8549019607843137,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.3843137254901961,0.2901960784313726,0.9294117647058824,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.26666666666666666,0.5725490196078431,0.9058823529411765,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0,0.8,0.7725490196078432,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0,0.9686274509803922,0.5725490196078431,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0,1,0.34509803921568627,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.1568627450980392,1,0.03137254901960784,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.5764705882352941,1,0,1);\n  float a0 = smoothstep(e0,e1,x_761030515);\n  float a1 = smoothstep(e1,e2,x_761030515);\n  float a2 = smoothstep(e2,e3,x_761030515);\n  float a3 = smoothstep(e3,e4,x_761030515);\n  float a4 = smoothstep(e4,e5,x_761030515);\n  float a5 = smoothstep(e5,e6,x_761030515);\n  float a6 = smoothstep(e6,e7,x_761030515);\n  float a7 = smoothstep(e7,e8,x_761030515);\n  return max(mix(v0,v1,a0)*step(e0,x_761030515)*step(x_761030515,e1),\n    max(mix(v1,v2,a1)*step(e1,x_761030515)*step(x_761030515,e2),\n    max(mix(v2,v3,a2)*step(e2,x_761030515)*step(x_761030515,e3),\n    max(mix(v3,v4,a3)*step(e3,x_761030515)*step(x_761030515,e4),\n    max(mix(v4,v5,a4)*step(e4,x_761030515)*step(x_761030515,e5),\n    max(mix(v5,v6,a5)*step(e5,x_761030515)*step(x_761030515,e6),\n    max(mix(v6,v7,a6)*step(e6,x_761030515)*step(x_761030515,e7),mix(v7,v8,a7)*step(e7,x_761030515)*step(x_761030515,e8)\n  )))))));\n}\n\nvec4 hot (float x_180130041) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.3;\n  const vec4 v1 = vec4(0.9019607843137255,0,0,1);\n  const float e2 = 0.6;\n  const vec4 v2 = vec4(1,0.8235294117647058,0,1);\n  const float e3 = 1.0;\n  const vec4 v3 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_180130041);\n  float a1 = smoothstep(e1,e2,x_180130041);\n  float a2 = smoothstep(e2,e3,x_180130041);\n  return max(mix(v0,v1,a0)*step(e0,x_180130041)*step(x_180130041,e1),\n    max(mix(v1,v2,a1)*step(e1,x_180130041)*step(x_180130041,e2),mix(v2,v3,a2)*step(e2,x_180130041)*step(x_180130041,e3)\n  ));\n}\n\nvec4 spring (float x_755571360) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(1,0,1,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0,1);\n  float a0 = smoothstep(e0,e1,x_755571360);\n  return mix(v0,v1,a0)*step(e0,x_755571360)*step(x_755571360,e1);\n}\n\nvec4 summer (float x_2651158874) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0.5019607843137255,0.4,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0.4,1);\n  float a0 = smoothstep(e0,e1,x_2651158874);\n  return mix(v0,v1,a0)*step(e0,x_2651158874)*step(x_2651158874,e1);\n}\n\nvec4 autumn (float x_626866098) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(1,0,0,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0,1);\n  float a0 = smoothstep(e0,e1,x_626866098);\n  return mix(v0,v1,a0)*step(e0,x_626866098)*step(x_626866098,e1);\n}\n\nvec4 winter (float x_2098958741) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,1,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(0,1,0.5019607843137255,1);\n  float a0 = smoothstep(e0,e1,x_2098958741);\n  return mix(v0,v1,a0)*step(e0,x_2098958741)*step(x_2098958741,e1);\n}\n\n// Data (mask) texture\nuniform sampler2D channel0;\nuniform sampler2D channel1;\nuniform sampler2D channel2;\nuniform sampler2D channel3;\nuniform sampler2D channel4;\nuniform sampler2D channel5;\n\n// Color texture\nuniform sampler2D colorTex;\nuniform float colorTexHeight;\nuniform float colorTexWidth;\nuniform float hovered;\n// range\nuniform bool channelsVisible[6];\n\n// Expression mapping\nuniform vec2 uColorScaleRange;\nuniform bool uIsExpressionMode;\nuniform sampler2D expressionTex;\n\n// opacity\nuniform float opacity;\n\nvarying vec2 vTexCoord;\n\nvec4 sampleAndGetColor(sampler2D dataTex, vec2 coord, bool isOn){\n  float sampledData = texture(dataTex, coord).r;\n  vec4 hoveredColor = float(sampledData == hovered && sampledData > 0. && hovered > 0.) * vec4(0., 0., 1., 1.);\n  // Colors are laid out corresponding to ids in row-major order in the texture.  So if width of the texture is 10, and you want ID 25,\n  // you need coordinate (1, 4) (i.e 2 rows down, and 5 columns over indexed from 0 for a total of 25 units covered in row major order).\n  vec2 colorTexCoord = vec2(mod(sampledData, colorTexWidth) / colorTexWidth, floor(sampledData / colorTexWidth) / (colorTexHeight - 1.));\n  float expressionValue = texture(expressionTex, colorTexCoord).r / 255.;\n  float scaledExpressionValue = (expressionValue - uColorScaleRange[0]) / max(0.005, (uColorScaleRange[1] - uColorScaleRange[0]));\n  vec4 sampledColor = float(uIsExpressionMode) * COLORMAP_FUNC(clamp(scaledExpressionValue, 0.0, 1.0)) +  (1. - float(uIsExpressionMode)) * vec4(texture(colorTex, colorTexCoord).rgb, 1.);\n  // Only return a color if the data is non-zero.\n  return max(0., min(sampledData, 1.)) * float(isOn) * (sampledColor + hoveredColor);\n}\n\nvoid main() {\n\n  gl_FragColor = sampleAndGetColor(channel0, vTexCoord, channelsVisible[0]);\n\n  // If the sampled color and the currently stored color (gl_FragColor) are identical, don't blend and use the sampled color,\n  // otherwise just use the currently stored color.  Repeat this for all channels.\n  vec4 sampledColor = sampleAndGetColor(channel1, vTexCoord, channelsVisible[1]);\n  gl_FragColor = (sampledColor == gl_FragColor || sampledColor == vec4(0.)) ? gl_FragColor : sampledColor;\n  sampledColor = sampleAndGetColor(channel2, vTexCoord, channelsVisible[2]);\n  gl_FragColor = (sampledColor == gl_FragColor || sampledColor == vec4(0.)) ? gl_FragColor : sampledColor;\n  sampledColor = sampleAndGetColor(channel3, vTexCoord, channelsVisible[3]);\n  gl_FragColor = (sampledColor == gl_FragColor || sampledColor == vec4(0.)) ? gl_FragColor : sampledColor;\n  sampledColor = sampleAndGetColor(channel4, vTexCoord, channelsVisible[4]);\n  gl_FragColor = (sampledColor == gl_FragColor || sampledColor == vec4(0.)) ? gl_FragColor : sampledColor;\n  sampledColor = sampleAndGetColor(channel5, vTexCoord, channelsVisible[5]);\n  gl_FragColor = (sampledColor == gl_FragColor || sampledColor == vec4(0.)) ? gl_FragColor : sampledColor;\n  // Apply the opacity if there is pixel data, and if the pixel data is empty i.e no segmentation, use 0 opacity.\n  gl_FragColor = vec4(gl_FragColor.rgb, (gl_FragColor.rgb == vec3(0., 0., 0.)) ? 0.0 : opacity);\n\n  geometry.uv = vTexCoord;\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n";
// EXTERNAL MODULE: ./src/layers/constants.js
var layers_constants = __webpack_require__(29);

// CONCATENATED MODULE: ./src/layers/BitmaskLayer.js
// eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-line import/no-extraneous-dependencies
function padWithDefault(arr,defaultValue,padWidth){var newArr=Object(toConsumableArray["a" /* default */])(arr);for(var i=0;i<padWidth;i+=1){newArr.push(defaultValue);}return newArr;}var defaultProps={hoveredCell:{type:'number',value:null,compare:true},cellColorData:{type:'object',value:null,compare:true},colormap:{type:'string',value:layers_constants["c" /* GLSL_COLORMAP_DEFAULT */],compare:true},expressionData:{type:'object',value:null,compare:true}};/**
 * A BitmapLayer that performs aggregation in the fragment shader,
 * and renders its texture from a Uint8Array rather than an ImageData.
 */var BitmaskLayer_BitmaskLayer=/*#__PURE__*/function(_XRLayer){Object(inherits["a" /* default */])(BitmaskLayer,_XRLayer);var _super=Object(createSuper["a" /* default */])(BitmaskLayer);function BitmaskLayer(){Object(classCallCheck["a" /* default */])(this,BitmaskLayer);return _super.apply(this,arguments);}Object(createClass["a" /* default */])(BitmaskLayer,[{key:"getShaders",// eslint-disable-next-line class-methods-use-this
value:function getShaders(){var colormap=this.props.colormap;return{fs:fs,vs:vs,modules:[core_["project32"],core_["picking"]],defines:Object(defineProperty["a" /* default */])({},layers_constants["a" /* COLORMAP_SHADER_PLACEHOLDER */],layers_constants["b" /* GLSL_COLORMAPS */].includes(colormap)?colormap:layers_constants["c" /* GLSL_COLORMAP_DEFAULT */])};}},{key:"updateState",value:function updateState(_ref){var props=_ref.props,oldProps=_ref.oldProps,changeFlags=_ref.changeFlags;Object(get["a" /* default */])(Object(getPrototypeOf["a" /* default */])(BitmaskLayer.prototype),"updateState",this).call(this,{props:props,oldProps:oldProps,changeFlags:changeFlags});if(props.cellColorData!==oldProps.cellColorData){this.setColorTexture();}if(props.expressionData!==oldProps.expressionData){var _this$props=this.props,expressionData=_this$props.expressionData,cellTexHeight=_this$props.cellTexHeight,cellTexWidth=_this$props.cellTexWidth;var expressionTex=this.dataToTexture(expressionData,cellTexWidth,cellTexHeight);this.setState({expressionTex:expressionTex});}if(props.colormap!==oldProps.colormap){var gl=this.context.gl;if(this.state.model){this.state.model.delete();}// eslint-disable-next-line no-underscore-dangle
this.setState({model:this._getModel(gl)});this.getAttributeManager().invalidateAll();}}},{key:"setColorTexture",value:function setColorTexture(){var _parameters;var _this$props2=this.props,data=_this$props2.cellColorData,height=_this$props2.cellTexHeight,width=_this$props2.cellTexWidth;var colorTex=new external_luma_gl_core_["Texture2D"](this.context.gl,{width:width,height:height,// Only use Float32 so we don't have to write two shaders
data:data,// we don't want or need mimaps
mipmaps:false,parameters:(_parameters={},Object(defineProperty["a" /* default */])(_parameters,constants_default.a.TEXTURE_MIN_FILTER,constants_default.a.NEAREST),Object(defineProperty["a" /* default */])(_parameters,constants_default.a.TEXTURE_MAG_FILTER,constants_default.a.NEAREST),Object(defineProperty["a" /* default */])(_parameters,constants_default.a.TEXTURE_WRAP_S,constants_default.a.CLAMP_TO_EDGE),Object(defineProperty["a" /* default */])(_parameters,constants_default.a.TEXTURE_WRAP_T,constants_default.a.CLAMP_TO_EDGE),_parameters),format:constants_default.a.RGB,dataFormat:constants_default.a.RGB,type:constants_default.a.UNSIGNED_BYTE});this.setState({colorTex:colorTex});}},{key:"draw",value:function draw(opts){var uniforms=opts.uniforms;var _this$props3=this.props,channelsVisible=_this$props3.channelsVisible,hoveredCell=_this$props3.hoveredCell,colorScaleLo=_this$props3.colorScaleLo,colorScaleHi=_this$props3.colorScaleHi,isExpressionMode=_this$props3.isExpressionMode;var _this$state=this.state,textures=_this$state.textures,model=_this$state.model,colorTex=_this$state.colorTex,expressionTex=_this$state.expressionTex;// Render the image
if(textures&&model&&colorTex){model.setUniforms(Object.assign({},uniforms,Object(objectSpread2["a" /* default */])({hovered:hoveredCell||0,colorTex:colorTex,expressionTex:expressionTex,colorTexHeight:colorTex.height,colorTexWidth:colorTex.width,channelsVisible:padWithDefault(channelsVisible,false,// There are six texture entries on the shaders
6-channelsVisible.length),uColorScaleRange:[colorScaleLo,colorScaleHi],uIsExpressionMode:isExpressionMode},textures))).draw();}}/**
   * This function creates textures from the data
   */},{key:"dataToTexture",value:function dataToTexture(data,width,height){var _parameters2;var isWebGL2On=Object(external_luma_gl_core_["isWebGL2"])(this.context.gl);return new external_luma_gl_core_["Texture2D"](this.context.gl,{width:width,height:height,// Only use Float32 so we don't have to write two shaders
data:new Float32Array(data),// we don't want or need mimaps
mipmaps:false,parameters:(_parameters2={},Object(defineProperty["a" /* default */])(_parameters2,constants_default.a.TEXTURE_MIN_FILTER,constants_default.a.NEAREST),Object(defineProperty["a" /* default */])(_parameters2,constants_default.a.TEXTURE_MAG_FILTER,constants_default.a.NEAREST),Object(defineProperty["a" /* default */])(_parameters2,constants_default.a.TEXTURE_WRAP_S,constants_default.a.CLAMP_TO_EDGE),Object(defineProperty["a" /* default */])(_parameters2,constants_default.a.TEXTURE_WRAP_T,constants_default.a.CLAMP_TO_EDGE),_parameters2),format:isWebGL2On?constants_default.a.R32F:constants_default.a.LUMINANCE,dataFormat:isWebGL2On?constants_default.a.RED:constants_default.a.LUMINANCE,type:constants_default.a.FLOAT});}}]);return BitmaskLayer;}(viv_["XRLayer"]);BitmaskLayer_BitmaskLayer.layerName='BitmaskLayer';BitmaskLayer_BitmaskLayer.defaultProps=defaultProps;
// EXTERNAL MODULE: ./src/components/layer-controller/utils.js
var layer_controller_utils = __webpack_require__(68);

// CONCATENATED MODULE: ./src/components/spatial/utils.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return square; });
/* unused harmony export sortLayers */
/* unused harmony export isInterleaved */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initializeLayerChannels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return initializeRasterLayersAndChannels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return makeSpatialSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInitialSpatialTargets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLayerLoaderTuple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return renderSubBitmaskLayers; });
/* eslint-disable no-plusplus */function square(x,y,r){return[[x,y+r],[x+r,y],[x,y-r],[x-r,y]];}/**
 * Sort spatial layer definition array,
 * to keep the ordering in the layer controller
 * consistent.
 * Intended to be used with auto-initialized layer
 * definition arrays only, as a pre-defined layer array
 * should not be re-ordered.
 * @param {object[]} layers Array of layer definition objects.
 * Object must have a .type property.
 */function sortLayers(layers){return layers.sort(function(a,b){return constants["b" /* DEFAULT_LAYER_TYPE_ORDERING */].indexOf(a.type)-constants["b" /* DEFAULT_LAYER_TYPE_ORDERING */].indexOf(b.type);});}/**
 * Return the midpoint of the global dimensions.
 * @param {object} source PixelSource object from Viv
 * @returns {object} The selection.
 */function getDefaultGlobalSelection(source){var globalIndices=source.labels.filter(function(dim){return constants["g" /* GLOBAL_LABELS */].includes(dim);});var selection={};globalIndices.forEach(function(dim){selection[dim]=Math.floor((source.shape[source.labels.indexOf(dim)]||0)/2);});return selection;}/**
 * Create a default selection using the midpoint of the available global dimensions,
 * and then the first four available selections from the first selectable channel.
 * @param {object} source PixelSource object from Viv
 * @returns {object} The selection.
 */function buildDefaultSelection(source){var selection=[];var globalSelection=getDefaultGlobalSelection(source);// First non-global dimension with some sort of selectable values
var firstNonGlobalDimension=source.labels.filter(function(dim){return!constants["g" /* GLOBAL_LABELS */].includes(dim)&&source.shape[source.labels.indexOf(dim)];})[0];for(var i=0;i<Math.min(4,source.shape[source.labels.indexOf(firstNonGlobalDimension)]);i+=1){selection.push(Object(objectSpread2["a" /* default */])(Object(defineProperty["a" /* default */])({},firstNonGlobalDimension,i),globalSelection));}return selection;}/**
 * @param {Array.<number>} shape loader shape
 */function isInterleaved(shape){var lastDimSize=shape[shape.length-1];return lastDimSize===3||lastDimSize===4;}/**
 * Initialize the channel selections for an individual layer.
 * @param {object} loader A viv loader instance with channel names appended by Vitessce loaders
 * of the form { data: (PixelSource[]|PixelSource), metadata: Object, channels }
 * @returns {object[]} An array of selected channels with default
 * domain/slider settings.
 */function initializeLayerChannels(_x,_x2){return _initializeLayerChannels.apply(this,arguments);}function _initializeLayerChannels(){_initializeLayerChannels=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(loader,use3d){var result,source,defaultSelection,stats,domains,colors,sliders;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:result=[];source=Object(utils["e" /* getSourceFromLoader */])(loader);// Add channel automatically as the first avaialable value for each dimension.
defaultSelection=buildDefaultSelection(source);defaultSelection=isInterleaved(source.shape)?[Object(objectSpread2["a" /* default */])({},defaultSelection[0],{c:0})]:defaultSelection;_context.next=6;return Object(layer_controller_utils["c" /* getMultiSelectionStats */])({loader:loader.data,selections:defaultSelection,use3d:use3d});case 6:stats=_context.sent;domains=Object(utils["f" /* isRgb */])(loader)?[[0,255],[0,255],[0,255]]:stats.domains;colors=Object(utils["f" /* isRgb */])(loader)?[[255,0,0],[0,255,0],[0,0,255]]:null;sliders=Object(utils["f" /* isRgb */])(loader)?[[0,255],[0,255],[0,255]]:stats.sliders;defaultSelection.forEach(function(selection,i){var domain=domains[i];var slider=sliders[i];var channel={selection:selection,// eslint-disable-next-line no-nested-ternary
color:colors?colors[i]:defaultSelection.length!==1?components_utils["d" /* VIEWER_PALETTE */][i]:[255,255,255],visible:true,slider:slider||domain};result.push(channel);});return _context.abrupt("return",result);case 12:case"end":return _context.stop();}}},_callee);}));return _initializeLayerChannels.apply(this,arguments);}function getMetaWithTransformMatrices(imageMeta,imageLoaders){// Do not fill in transformation matrices if any of the layers specify one.
var sources=imageLoaders.map(function(loader){return Object(utils["e" /* getSourceFromLoader */])(loader);});if(imageMeta.map(function(meta){var _meta$metadata,_meta$metadata$transf,_meta$metadata2,_meta$metadata2$trans,_meta$metadata3,_meta$metadata3$trans;return(meta===null||meta===void 0?void 0:(_meta$metadata=meta.metadata)===null||_meta$metadata===void 0?void 0:(_meta$metadata$transf=_meta$metadata.transform)===null||_meta$metadata$transf===void 0?void 0:_meta$metadata$transf.matrix)||(meta===null||meta===void 0?void 0:(_meta$metadata2=meta.metadata)===null||_meta$metadata2===void 0?void 0:(_meta$metadata2$trans=_meta$metadata2.transform)===null||_meta$metadata2$trans===void 0?void 0:_meta$metadata2$trans.scale)||(meta===null||meta===void 0?void 0:(_meta$metadata3=meta.metadata)===null||_meta$metadata3===void 0?void 0:(_meta$metadata3$trans=_meta$metadata3.transform)===null||_meta$metadata3$trans===void 0?void 0:_meta$metadata3$trans.translate);}).some(Boolean)||sources.every(function(source){var _source$meta,_source$meta$physical,_source$meta2,_source$meta2$physica;return!((_source$meta=source.meta)===null||_source$meta===void 0?void 0:(_source$meta$physical=_source$meta.physicalSizes)===null||_source$meta$physical===void 0?void 0:_source$meta$physical.x)||!((_source$meta2=source.meta)===null||_source$meta2===void 0?void 0:(_source$meta2$physica=_source$meta2.physicalSizes)===null||_source$meta2$physica===void 0?void 0:_source$meta2$physica.y);})){return imageMeta;}// Get the minimum physical among all the current images.
var minPhysicalSize=sources.reduce(function(acc,source){var _source$meta3,_source$meta3$physica,_source$meta3$physica2,_source$meta4,_source$meta5,_source$meta6,_source$meta7;var hasZPhyscialSize=(_source$meta3=source.meta)===null||_source$meta3===void 0?void 0:(_source$meta3$physica=_source$meta3.physicalSizes)===null||_source$meta3$physica===void 0?void 0:(_source$meta3$physica2=_source$meta3$physica.z)===null||_source$meta3$physica2===void 0?void 0:_source$meta3$physica2.size;var sizes=[Object(external_mathjs_["unit"])("".concat((_source$meta4=source.meta)===null||_source$meta4===void 0?void 0:_source$meta4.physicalSizes.x.size," ").concat((_source$meta5=source.meta)===null||_source$meta5===void 0?void 0:_source$meta5.physicalSizes.x.unit).replace('µ','u')),Object(external_mathjs_["unit"])("".concat((_source$meta6=source.meta)===null||_source$meta6===void 0?void 0:_source$meta6.physicalSizes.y.size," ").concat((_source$meta7=source.meta)===null||_source$meta7===void 0?void 0:_source$meta7.physicalSizes.y.unit).replace('µ','u'))];if(hasZPhyscialSize){var _source$meta8,_source$meta9;sizes.push(Object(external_mathjs_["unit"])("".concat((_source$meta8=source.meta)===null||_source$meta8===void 0?void 0:_source$meta8.physicalSizes.z.size," ").concat((_source$meta9=source.meta)===null||_source$meta9===void 0?void 0:_source$meta9.physicalSizes.z.unit).replace('µ','u')));}acc[0]=acc[0]===undefined||Object(external_mathjs_["compare"])(sizes[0],acc[0])===-1?sizes[0]:acc[0];acc[1]=acc[1]===undefined||Object(external_mathjs_["compare"])(sizes[1],acc[1])===-1?sizes[1]:acc[1];acc[2]=acc[2]===undefined||Object(external_mathjs_["compare"])(sizes[2],acc[2])===-1?sizes[2]:acc[2];return acc;},[]);var imageMetaWithTransform=imageMeta.map(function(meta,j){var _source$meta10,_source$meta10$physic,_source$meta10$physic2,_source$meta11,_source$meta12,_source$meta13,_source$meta14;var source=sources[j];var hasZPhyscialSize=(_source$meta10=source.meta)===null||_source$meta10===void 0?void 0:(_source$meta10$physic=_source$meta10.physicalSizes)===null||_source$meta10$physic===void 0?void 0:(_source$meta10$physic2=_source$meta10$physic.z)===null||_source$meta10$physic2===void 0?void 0:_source$meta10$physic2.size;var sizes=[Object(external_mathjs_["unit"])("".concat((_source$meta11=source.meta)===null||_source$meta11===void 0?void 0:_source$meta11.physicalSizes.x.size," ").concat((_source$meta12=source.meta)===null||_source$meta12===void 0?void 0:_source$meta12.physicalSizes.x.unit).replace('µ','u')),Object(external_mathjs_["unit"])("".concat((_source$meta13=source.meta)===null||_source$meta13===void 0?void 0:_source$meta13.physicalSizes.y.size," ").concat((_source$meta14=source.meta)===null||_source$meta14===void 0?void 0:_source$meta14.physicalSizes.y.unit).replace('µ','u'))];if(hasZPhyscialSize){var _source$meta15,_source$meta16;sizes.push(Object(external_mathjs_["unit"])("".concat((_source$meta15=source.meta)===null||_source$meta15===void 0?void 0:_source$meta15.physicalSizes.z.size," ").concat((_source$meta16=source.meta)===null||_source$meta16===void 0?void 0:_source$meta16.physicalSizes.z.unit).replace('µ','u')));}// Find the ratio of the sizes to get the scaling factor.
var scale=sizes.map(function(i,k){return Object(external_mathjs_["divide"])(i,minPhysicalSize[k]);});// Add in z dimension needed for Matrix4 scale API.
if(!scale[2]){scale[2]=1;}// no need to store/use identity scaling
if(isEqual_default()(scale,[1,1,1])){return meta;}// Make sure to scale the z direction by one.
var matrix=new external_math_gl_["Matrix4"]().scale(Object(toConsumableArray["a" /* default */])(scale));var newMeta=Object(objectSpread2["a" /* default */])({},meta);newMeta.metadata=Object(objectSpread2["a" /* default */])({},newMeta.metadata,{// We don't want to store matrix objects in the view config.
transform:{matrix:matrix.toArray()}});return newMeta;});return imageMetaWithTransform;}/**
 * Given a set of image layer loader creator functions,
 * create loader objects for an initial layer or set of layers,
 * which will be selected based on default values predefined in
 * the image data file or otherwise by a heuristic
 * (the midpoint of the layers array).
 * @param {object[]} rasterLayers A list of layer metadata objects with
 * shape { name, type, url, createLoader }.
 * @param {(string[]|null)} rasterRenderLayers A list of default raster layers. Optional.
 */function initializeRasterLayersAndChannels(_x3,_x4,_x5){return _initializeRasterLayersAndChannels.apply(this,arguments);}/**
 * Make a subtitle for the spatial component.
 * @param {object} params
 * @param {number} params.observationsCount
 * @param {string} params.observationsLabel
 * @param {string} params.observationsPluralLabel
 * @param {number} params.subobservationsCount
 * @param {string} params.subobservationsLabel
 * @param {string} params.subobservationsPluralLabel
 * @param {number} params.locationsCount
 * @returns {string} The subtitle string,
 * with info about items with zero counts omitted.
 */function _initializeRasterLayersAndChannels(){_initializeRasterLayersAndChannels=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(rasterLayers,rasterRenderLayers,usePhysicalSizeScaling){var nextImageLoaders,nextImageMetaAndLayers,autoImageLayerDefPromises,loaders,i,layer,loader,layerIndex,_loader,autoImageLayerDefPromise,globalIndicesOfRenderLayers,_loop,_i,autoImageLayerDefs;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:nextImageLoaders=[];nextImageMetaAndLayers=[];autoImageLayerDefPromises=[];// Start all loader creators immediately.
// Reference: https://eslint.org/docs/rules/no-await-in-loop
_context2.next=5;return Promise.all(rasterLayers.map(function(layer){return layer.loaderCreator();}));case 5:loaders=_context2.sent;for(i=0;i<rasterLayers.length;i++){layer=rasterLayers[i];loader=loaders[i];nextImageLoaders[i]=loader;nextImageMetaAndLayers[i]=layer;}if(usePhysicalSizeScaling){nextImageMetaAndLayers=getMetaWithTransformMatrices(nextImageMetaAndLayers,nextImageLoaders);}// No layers were pre-defined so set up the default image layers.
if(!rasterRenderLayers){// Midpoint of images list as default image to show.
layerIndex=Math.floor(rasterLayers.length/2);_loader=nextImageLoaders[layerIndex];autoImageLayerDefPromise=initializeLayerChannels(_loader).then(function(channels){var _nextImageMetaAndLaye,_nextImageMetaAndLaye2,_nextImageMetaAndLaye3,_nextImageMetaAndLaye4,_nextImageMetaAndLaye5;return Promise.resolve(Object(objectSpread2["a" /* default */])({type:((_nextImageMetaAndLaye=nextImageMetaAndLayers[layerIndex])===null||_nextImageMetaAndLaye===void 0?void 0:(_nextImageMetaAndLaye2=_nextImageMetaAndLaye.metadata)===null||_nextImageMetaAndLaye2===void 0?void 0:_nextImageMetaAndLaye2.isBitmask)?'bitmask':'raster',index:layerIndex},constants["f" /* DEFAULT_RASTER_LAYER_PROPS */],{channels:channels.map(function(channel,j){return Object(objectSpread2["a" /* default */])({},channel,{},nextImageMetaAndLayers[layerIndex].channels?nextImageMetaAndLayers[layerIndex].channels[j]:[]);}),modelMatrix:(_nextImageMetaAndLaye3=nextImageMetaAndLayers[layerIndex])===null||_nextImageMetaAndLaye3===void 0?void 0:(_nextImageMetaAndLaye4=_nextImageMetaAndLaye3.metadata)===null||_nextImageMetaAndLaye4===void 0?void 0:(_nextImageMetaAndLaye5=_nextImageMetaAndLaye4.transform)===null||_nextImageMetaAndLaye5===void 0?void 0:_nextImageMetaAndLaye5.matrix,transparentColor:layerIndex>0?[0,0,0]:null}));});autoImageLayerDefPromises.push(autoImageLayerDefPromise);}else{// The renderLayers parameter is a list of layer names to show by default.
globalIndicesOfRenderLayers=rasterRenderLayers.map(function(imageName){return rasterLayers.findIndex(function(image){return image.name===imageName;});});_loop=function _loop(_i){var layerIndex=globalIndicesOfRenderLayers[_i];var loader=nextImageLoaders[layerIndex];var autoImageLayerDefPromise=initializeLayerChannels(loader)// eslint-disable-next-line no-loop-func
.then(function(channels){var _nextImageMetaAndLaye6,_nextImageMetaAndLaye7,_nextImageMetaAndLaye8,_nextImageMetaAndLaye9,_nextImageMetaAndLaye10;return Promise.resolve(Object(objectSpread2["a" /* default */])({type:((_nextImageMetaAndLaye6=nextImageMetaAndLayers[layerIndex])===null||_nextImageMetaAndLaye6===void 0?void 0:(_nextImageMetaAndLaye7=_nextImageMetaAndLaye6.metadata)===null||_nextImageMetaAndLaye7===void 0?void 0:_nextImageMetaAndLaye7.isBitmask)?'bitmask':'raster',index:layerIndex},constants["f" /* DEFAULT_RASTER_LAYER_PROPS */],{channels:channels.map(function(channel,j){return Object(objectSpread2["a" /* default */])({},channel,{},nextImageMetaAndLayers[layerIndex].channels?nextImageMetaAndLayers[layerIndex].channels[j]:[]);}),domainType:'Min/Max',modelMatrix:(_nextImageMetaAndLaye8=nextImageMetaAndLayers[layerIndex])===null||_nextImageMetaAndLaye8===void 0?void 0:(_nextImageMetaAndLaye9=_nextImageMetaAndLaye8.metadata)===null||_nextImageMetaAndLaye9===void 0?void 0:(_nextImageMetaAndLaye10=_nextImageMetaAndLaye9.transform)===null||_nextImageMetaAndLaye10===void 0?void 0:_nextImageMetaAndLaye10.matrix,transparentColor:_i>0?[0,0,0]:null}));});autoImageLayerDefPromises.push(autoImageLayerDefPromise);};for(_i=0;_i<globalIndicesOfRenderLayers.length;_i++){_loop(_i);}}_context2.next=11;return Promise.all(autoImageLayerDefPromises);case 11:autoImageLayerDefs=_context2.sent;return _context2.abrupt("return",[autoImageLayerDefs,nextImageLoaders,nextImageMetaAndLayers]);case 13:case"end":return _context2.stop();}}},_callee2);}));return _initializeRasterLayersAndChannels.apply(this,arguments);}function makeSpatialSubtitle(_ref){var observationsCount=_ref.observationsCount,observationsLabel=_ref.observationsLabel,observationsPluralLabel=_ref.observationsPluralLabel,subobservationsCount=_ref.subobservationsCount,subobservationsLabel=_ref.subobservationsLabel,subobservationsPluralLabel=_ref.subobservationsPluralLabel,locationsCount=_ref.locationsCount;var parts=[];if(subobservationsCount>0){var part="".concat(subobservationsCount," ").concat(Object(utils["g" /* pluralize */])(subobservationsLabel,subobservationsPluralLabel,subobservationsCount));if(locationsCount>0){part+=" at ".concat(external_short_number_default()(locationsCount)," locations");}parts.push(part);}if(observationsCount>0){parts.push("".concat(observationsCount," ").concat(Object(utils["g" /* pluralize */])(observationsLabel,observationsPluralLabel,observationsCount)));}return parts.join(', ');}function getInitialSpatialTargets(_ref2){var width=_ref2.width,height=_ref2.height,cells=_ref2.cells,imageLayerLoaders=_ref2.imageLayerLoaders,useRaster=_ref2.useRaster,use3d=_ref2.use3d;var initialTargetX=-Infinity;var initialTargetY=-Infinity;var initialTargetZ=-Infinity;var initialZoom=-Infinity;// Some backoff from completely filling the screen.
var zoomBackoff=use3d?1.5:0.1;var cellValues=Object.values(cells);if(imageLayerLoaders.length>0&&useRaster){for(var i=0;i<imageLayerLoaders.length;i+=1){var viewSize={height:height,width:width};var _getDefaultInitialVie=Object(viv_["getDefaultInitialViewState"])(imageLayerLoaders[i].data,viewSize,zoomBackoff,use3d),target=_getDefaultInitialVie.target,newViewStateZoom=_getDefaultInitialVie.zoom;if(target[0]>initialTargetX){// eslint-disable-next-line prefer-destructuring
initialTargetX=target[0];initialZoom=newViewStateZoom;}if(target[1]>initialTargetY){// eslint-disable-next-line prefer-destructuring
initialTargetY=target[1];initialZoom=newViewStateZoom;}if(target[2]>initialTargetZ){// eslint-disable-next-line prefer-destructuring
initialTargetZ=target[2];initialZoom=newViewStateZoom;}else{initialTargetZ=null;}}}else if(cellValues.length>0// Only use cellValues in quadtree calculation if there is
// centroid data in the cells (i.e not just ids).
&&cellValues[0].xy&&!useRaster){var cellCoordinates=cellValues.map(function(c){return c.xy;});var xExtent=Object(external_d3_array_["extent"])(cellCoordinates,function(c){return c[0];});var yExtent=Object(external_d3_array_["extent"])(cellCoordinates,function(c){return c[1];});var xRange=xExtent[1]-xExtent[0];var yRange=yExtent[1]-yExtent[0];var getViewExtentFromPolygonExtents=function getViewExtentFromPolygonExtents(extents){return[Math.min.apply(Math,Object(toConsumableArray["a" /* default */])(extents.map(function(i){return i[0];}))),Math.max.apply(Math,Object(toConsumableArray["a" /* default */])(extents.map(function(i){return i[1];})))];};if(xRange===0){// The fall back is the cells' polygon coordinates, if the original range
// is 0 i.e the centroids are all on the same axis.
var polygonExtentsX=cellValues.map(function(cell){return Object(external_d3_array_["extent"])(cell.poly,function(i){return i[0];});});xExtent=getViewExtentFromPolygonExtents(polygonExtentsX);xRange=xExtent[1]-xExtent[0];}if(yRange===0){// The fall back is the first cells' polygon coordinates, if the original range
// is 0 i.e the centroids are all on the same axis.
var polygonExtentsY=cellValues.map(function(cell){return Object(external_d3_array_["extent"])(cell.poly,function(i){return i[1];});});yExtent=getViewExtentFromPolygonExtents(polygonExtentsY);yRange=yExtent[1]-yExtent[0];}initialTargetX=xExtent[0]+xRange/2;initialTargetY=yExtent[0]+yRange/2;initialTargetZ=null;initialZoom=Math.log2(Math.min(width/xRange,height/yRange))-zoomBackoff;}else{return{initialTargetX:null,initialTargetY:null,initialTargetZ:null,initialZoom:null};}return{initialTargetX:initialTargetX,initialTargetY:initialTargetY,initialZoom:initialZoom,initialTargetZ:initialTargetZ};}/**
 * Make a subtitle for the spatial component.
 * @param {object} data PixelSource | PixelSource[]
 * @returns {Array} [Layer, PixelSource | PixelSource[]] tuple.
 */function getLayerLoaderTuple(data,use3d){var loader=Array.isArray(data)&&data.length>1||!Array.isArray(data)?data:data[0];if(use3d){return[viv_["VolumeLayer"],Array.isArray(loader)?loader:[loader]];}var Layer=Array.isArray(data)&&data.length>1?viv_["MultiscaleImageLayer"]:viv_["ImageLayer"];return[Layer,loader];}function renderSubBitmaskLayers(props){var _props$tile=props.tile,_props$tile$bbox=_props$tile.bbox,left=_props$tile$bbox.left,top=_props$tile$bbox.top,right=_props$tile$bbox.right,bottom=_props$tile$bbox.bottom,x=_props$tile.x,y=_props$tile.y,z=_props$tile.z;var data=props.data,id=props.id,loader=props.loader;// Only render in positive coorinate system
if([left,bottom,right,top].some(function(v){return v<0;})||!data){return null;}var base=loader[0];var _loader$0$shape$slice=loader[0].shape.slice(-2),_loader$0$shape$slice2=Object(slicedToArray["a" /* default */])(_loader$0$shape$slice,2),height=_loader$0$shape$slice2[0],width=_loader$0$shape$slice2[1];// Tiles are exactly fitted to have height and width such that their bounds
// match that of the actual image (not some padded version).
// Thus the right/bottom given by deck.gl are incorrect since
// they assume tiles are of uniform sizes, which is not the case for us.
var bounds=[left,data.height<base.tileSize?height:bottom,data.width<base.tileSize?width:right,top];return new BitmaskLayer_BitmaskLayer(props,{channelData:data,// Uncomment to help debugging - shades the tile being hovered over.
// autoHighlight: true,
// highlightColor: [80, 80, 80, 50],
// Shared props with BitmapLayer:
bounds:bounds,id:"sub-layer-".concat(bounds,"-").concat(id),tileId:{x:x,y:y,z:z}});}

/***/ }),
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
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),
/* 92 */,
/* 93 */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"$id\":\"https://github.com/vitessce/vitessce/#cell-sets-tabular\",\"title\":\"Vitessce cell sets data, tabular format\",\"definitions\":{\"colorArray\":{\"type\":\"array\",\"items\":{\"type\":\"integer\",\"minimum\":0,\"maximum\":255},\"minItems\":3,\"maxItems\":3}},\"type\":\"array\",\"items\":{\"type\":\"object\",\"additionalProperties\":false,\"required\":[\"groupName\",\"setName\",\"obsId\"],\"properties\":{\"groupName\":{\"type\":\"string\"},\"setName\":{\"type\":\"string\"},\"setColor\":{\"$ref\":\"#/definitions/colorArray\"},\"obsId\":{\"type\":\"string\"},\"predictionScore\":{\"oneOf\":[{\"type\":\"number\",\"minimum\":0,\"maximum\":1},{\"type\":\"null\"}]}}}}");

/***/ }),
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
/* 106 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),
/* 107 */,
/* 108 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOMAINS; });
/* harmony import */ var _hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_0__);
function getDomains(){var domains={};var needMin=['Int8','Int16','Int32'];Object.keys(_hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_0__["DTYPE_VALUES"]).forEach(function(dtype){var max=_hms_dbmi_viv__WEBPACK_IMPORTED_MODULE_0__["DTYPE_VALUES"][dtype].max;var min=needMin.includes(dtype)?-(max+1):0;domains[dtype]=[min,max];});return domains;}var DOMAINS=getDomains();

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VectorLayerController; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(117);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58);
function VectorLayerController(props){var label=props.label,layer=props.layer,layerType=props.layerType,handleLayerChange=props.handleLayerChange;var slider=layer.opacity;var isOn=layer.visible;function handleSliderChange(v){if(layerType==='cells'){var stroked=v<0.7;handleLayerChange(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layer,{opacity:v,stroked:stroked}));}else{handleLayerChange(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layer,{opacity:v}));}}function handleCheckBoxChange(v){handleLayerChange(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layer,{visible:v}));}var classes=Object(_styles__WEBPACK_IMPORTED_MODULE_7__[/* useControllerSectionStyles */ "f"])();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a,{item:true,style:{marginTop:'10px'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a,{className:classes.root},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,{style:{padding:'15px 8px 0px 8px',marginBottom:'-5px'}},label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a,{container:true,direction:"row",justifyContent:"space-between"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a,{item:true,xs:2},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default.a,{color:"primary",checked:isOn,onChange:function onChange(e,v){return handleCheckBoxChange(v);}})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a,{item:true,xs:9,style:{paddingRight:'8px'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_6___default.a,{value:slider,min:0,max:1,step:0.001,onChange:function onChange(e,v){return handleSliderChange(v);},style:{marginTop:'7px'},orientation:"horizontal"})))));}

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */
/***/ (function(module, exports) {

module.exports = require("short-number");

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(9);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@hms-dbmi/viv"
var viv_ = __webpack_require__(23);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(28);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(108);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(127);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);

// EXTERNAL MODULE: external "@material-ui/core/Slider"
var Slider_ = __webpack_require__(45);
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider_);

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__(167);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__(145);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);

// EXTERNAL MODULE: external "@material-ui/core/Accordion"
var Accordion_ = __webpack_require__(168);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);

// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__(169);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// EXTERNAL MODULE: external "@material-ui/icons/Visibility"
var Visibility_ = __webpack_require__(170);
var Visibility_default = /*#__PURE__*/__webpack_require__.n(Visibility_);

// EXTERNAL MODULE: external "@material-ui/icons/VisibilityOff"
var VisibilityOff_ = __webpack_require__(171);
var VisibilityOff_default = /*#__PURE__*/__webpack_require__.n(VisibilityOff_);

// EXTERNAL MODULE: external "lodash/range"
var range_ = __webpack_require__(38);
var range_default = /*#__PURE__*/__webpack_require__.n(range_);

// EXTERNAL MODULE: external "math.gl"
var external_math_gl_ = __webpack_require__(62);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__(106);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__(72);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__(74);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

// EXTERNAL MODULE: ./src/components/layer-controller/utils.js
var utils = __webpack_require__(68);

// EXTERNAL MODULE: ./src/components/utils.js
var components_utils = __webpack_require__(12);

// EXTERNAL MODULE: ./src/components/spatial/constants.js
var constants = __webpack_require__(34);

// EXTERNAL MODULE: ./src/components/layer-controller/styles.js
var styles = __webpack_require__(58);

// CONCATENATED MODULE: ./src/components/layer-controller/LayerOptions.js
var DOMAIN_OPTIONS=['Full','Min/Max'];/**
 * Wrapper for the dropdown that selects a colormap (None, viridis, magma, etc.).
 * @prop {Object} loader Loader object with metadata.
 * @prop {function} handleMultiPropertyChange Function to propgate multiple layer changes at once.
 * This prevents updates from overridding each other.
 * @prop {number} resolution Current 3D resolution.
 * @prop {boolean} disable3d Whether or not to enable 3D selection
 * @prop {function} setRasterLayerCallback Setter for callbacks that fire after raster/volume loads.
 * @prop {function} setAreAllChannelsLoading Setter for whether or not a given channel is loading.
 * @prop {Object} setViewState Setter for the current view state.
 * @prop {number} spatialHeight Height of the spatial component.
 * @prop {number} spatialWidth Width of the spatial component.
 * @prop {object} channels Channels object.
 * @prop {boolean} use3d Whether or not 3D is enabled for this layer.
 */function VolumeDropdown(_ref){var loaderWithMeta=_ref.loader,handleMultiPropertyChange=_ref.handleMultiPropertyChange,currResolution=_ref.resolution,disable3d=_ref.disable3d,setRasterLayerCallback=_ref.setRasterLayerCallback,setAreAllChannelsLoading=_ref.setAreAllChannelsLoading,setViewState=_ref.setViewState,spatialHeight=_ref.spatialHeight,spatialWidth=_ref.spatialWidth,channels=_ref.channels,use3d=_ref.use3d,modelMatrix=_ref.modelMatrix;var classes=Object(styles["g" /* useSelectStyles */])();var selections=channels.map(function(i){return i.selection;});var loader=loaderWithMeta.data;var handleChange=/*#__PURE__*/function(){var _ref2=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(val){var shouldUse3D,_getBoundingCube,_getBoundingCube2,xSlice,ySlice,zSlice,propertiesChanged,_yield$getMultiSelect,sliders,defaultViewState,_yield$getMultiSelect2,_sliders,newChannels,_defaultViewState;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:// val is the resolution - null indicates 2D
shouldUse3D=typeof val==='number';setAreAllChannelsLoading(true);setRasterLayerCallback(function(){setAreAllChannelsLoading(false);setRasterLayerCallback(null);});if(!shouldUse3D){_context.next=18;break;}_getBoundingCube=Object(utils["b" /* getBoundingCube */])(loader),_getBoundingCube2=Object(slicedToArray["a" /* default */])(_getBoundingCube,3),xSlice=_getBoundingCube2[0],ySlice=_getBoundingCube2[1],zSlice=_getBoundingCube2[2];propertiesChanged={resolution:val,xSlice:xSlice,ySlice:ySlice,zSlice:zSlice,use3d:shouldUse3D};// Only make the fetch if needed i.e if the 3d was just being turned on.
if(use3d){_context.next=13;break;}_context.next=9;return Object(utils["c" /* getMultiSelectionStats */])({loader:loader,selections:selections,use3d:shouldUse3D});case 9:_yield$getMultiSelect=_context.sent;sliders=_yield$getMultiSelect.sliders;propertiesChanged.channels=Object(toConsumableArray["a" /* default */])(channels);propertiesChanged.channels.forEach(function(ch,i){// eslint-disable-next-line no-param-reassign
ch.slider=sliders[i];});case 13:// Update all properties at once to avoid overriding calls.
handleMultiPropertyChange(propertiesChanged);defaultViewState=Object(viv_["getDefaultInitialViewState"])(loader,{height:spatialHeight,width:spatialWidth},1.5,true,new external_math_gl_["Matrix4"](modelMatrix));setViewState(Object(objectSpread2["a" /* default */])({},defaultViewState,{rotationX:0,rotationOrbit:0}));_context.next=27;break;case 18:_context.next=20;return Object(utils["c" /* getMultiSelectionStats */])({loader:loader,selections:selections,use3d:shouldUse3D});case 20:_yield$getMultiSelect2=_context.sent;_sliders=_yield$getMultiSelect2.sliders;newChannels=Object(toConsumableArray["a" /* default */])(channels);newChannels.forEach(function(ch,i){// eslint-disable-next-line no-param-reassign
ch.slider=_sliders[i];});// Update all properties at once to avoid overriding calls.
handleMultiPropertyChange({resolution:val,use3d:shouldUse3D,spatialAxisFixed:false,channels:newChannels});_defaultViewState=Object(viv_["getDefaultInitialViewState"])(loader,{height:spatialHeight,width:spatialWidth},0.5,false,new external_math_gl_["Matrix4"](modelMatrix));setViewState(Object(objectSpread2["a" /* default */])({},_defaultViewState,{rotationX:null,rotationOrbit:null,orbitAxis:null}));case 27:case"end":return _context.stop();}}},_callee);}));return function handleChange(_x){return _ref2.apply(this,arguments);};}();var _ref3=Array.isArray(loader)?loader[0]:loader,labels=_ref3.labels,shape=_ref3.shape;var hasZStack=shape[labels.indexOf('z')]>1;return/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,/*#__PURE__*/external_react_default.a.createElement(Select_default.a,{native:true,value:currResolution,onChange:function onChange(e){return handleChange(e.target.value==='2D'?e.target.value:Number(e.target.value));},classes:{root:classes.selectRoot}},/*#__PURE__*/external_react_default.a.createElement("option",{key:"2D",value:"2D"},"2D Visualization"),Array.from({length:loader.length}).fill(0)// eslint-disable-next-line no-unused-vars
.map(function(_,resolution){if(loader){if(Object(components_utils["f" /* canLoadResolution */])(loader,resolution)){var _getStatsForResolutio=Object(components_utils["q" /* getStatsForResolution */])(loader,resolution),height=_getStatsForResolutio.height,width=_getStatsForResolutio.width,depthDownsampled=_getStatsForResolutio.depthDownsampled,totalBytes=_getStatsForResolutio.totalBytes;return/*#__PURE__*/external_react_default.a.createElement("option",{key:"(".concat(height,", ").concat(width,", ").concat(depthDownsampled,")"),value:resolution,disabled:disable3d||!hasZStack},"3D: ".concat(resolution,"x Downsampled, ~").concat(Object(components_utils["n" /* formatBytes */])(totalBytes)," per channel, (").concat(height,", ").concat(width,", ").concat(depthDownsampled,")"));}}return null;})));}/**
 * Wrapper for the dropdown that selects a colormap (None, viridis, magma, etc.).
 * @prop {string} value Currently selected value for the colormap.
 * @prop {string} inputId Css id.
 * @prop {function} handleChange Callback for every change in colormap.
 */function ColormapSelect(_ref4){var value=_ref4.value,inputId=_ref4.inputId,handleChange=_ref4.handleChange;var classes=Object(styles["g" /* useSelectStyles */])();return/*#__PURE__*/external_react_default.a.createElement(Select_default.a,{native:true,onChange:function onChange(e){return handleChange(e.target.value===''?null:e.target.value);},value:value,inputProps:{name:'colormap',id:inputId},style:{width:'100%'},classes:{root:classes.selectRoot}},/*#__PURE__*/external_react_default.a.createElement("option",{"aria-label":"None",value:""},"None"),components_utils["a" /* COLORMAP_OPTIONS */].map(function(name){return/*#__PURE__*/external_react_default.a.createElement("option",{key:name,value:name},name);}));}function TransparentColorCheckbox(_ref5){var value=_ref5.value,handleChange=_ref5.handleChange;return/*#__PURE__*/external_react_default.a.createElement(Checkbox_default.a,{style:{float:'left',padding:0},color:"default",onChange:function onChange(){if(value){handleChange(null);}else{handleChange([0,0,0]);}},checked:Boolean(value)});}/**
 * Wrapper for the slider that updates opacity.
 * @prop {string} value Currently selected value between 0 and 1.
 * @prop {function} handleChange Callback for every change in opacity.
 */function OpacitySlider(_ref6){var value=_ref6.value,handleChange=_ref6.handleChange;return/*#__PURE__*/external_react_default.a.createElement(Slider_default.a,{value:value,onChange:function onChange(e,v){return handleChange(v);},valueLabelDisplay:"auto",getAriaLabel:function getAriaLabel(){return'opacity slider';},min:0,max:1,step:0.01,orientation:"horizontal",style:{marginTop:'7px'}});}/**
 * Wrapper for the dropdown that chooses the domain type.
 * @prop {string} value Currently selected value (i.e 'Max/Min').
 * @prop {string} inputId Css id.
 * @prop {function} handleChange Callback for every change in domain.
 */function SliderDomainSelector(_ref7){var value=_ref7.value,inputId=_ref7.inputId,handleChange=_ref7.handleChange;var classes=Object(styles["g" /* useSelectStyles */])();return/*#__PURE__*/external_react_default.a.createElement(Select_default.a,{native:true,onChange:function onChange(e){return handleChange(e.target.value);},value:value,inputProps:{name:'domain-selector',id:inputId},style:{width:'100%'},classes:{root:classes.selectRoot}},DOMAIN_OPTIONS.map(function(name){return/*#__PURE__*/external_react_default.a.createElement("option",{key:name,value:name},name);}));}/**
 * Wrapper for the slider that chooses global selections (z, t etc.).
 * @prop {string} field The dimension this selects for (z, t etc.).
 * @prop {number} value Currently selected index (1, 4, etc.).
 * @prop {function} handleChange Callback for every change in selection.
 * @prop {function} possibleValues All available values for the field.
 */function GlobalSelectionSlider(_ref8){var field=_ref8.field,value=_ref8.value,handleChange=_ref8.handleChange,possibleValues=_ref8.possibleValues;return/*#__PURE__*/external_react_default.a.createElement(styles["e" /* StyledSelectionSlider */],{value:value// See https://github.com/hms-dbmi/viv/issues/176 for why
// we have the two handlers.
,onChange:function onChange(event,newValue){handleChange({selection:Object(defineProperty["a" /* default */])({},field,newValue),event:event});},onChangeCommitted:function onChangeCommitted(event,newValue){handleChange({selection:Object(defineProperty["a" /* default */])({},field,newValue),event:event});},valueLabelDisplay:"auto",getAriaLabel:function getAriaLabel(){return"".concat(field," slider");},marks:possibleValues.map(function(val){return{value:val};}),min:Number(possibleValues[0]),max:Number(possibleValues.slice(-1)),orientation:"horizontal",step:null});}/**
 * Wrapper for each of the options to show its name and then its UI component.
 * @prop {string} name Display name for option.
 * @prop {number} opacity Current opacity value.
 * @prop {string} inputId An id for css.
 * @prop {object} children Components to be rendered next to the name (slider, dropdown etc.).
 */function LayerOption(_ref9){var name=_ref9.name,inputId=_ref9.inputId,children=_ref9.children;return/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{container:true,direction:"row",alignItems:"center",justifyContent:"center"},/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true,xs:6},/*#__PURE__*/external_react_default.a.createElement(InputLabel_default.a,{htmlFor:inputId},name,":")),/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true,xs:6},children));}/**
 * Gloabl options for all channels (opacity, colormap, etc.).
 * @prop {string} colormap What colormap is currently selected (None, viridis etc.).
 * @prop {number} opacity Current opacity value.
 * @prop {function} handleColormapChange Callback for when colormap changes.
 * @prop {function} handleOpacityChange Callback for when opacity changes.
 * @prop {object} globalControlLabels All available options for global control (z and t).
 * @prop {function} handleGlobalChannelsSelectionChange Callback for global selection changes.
 * @prop {function} handleDomainChange Callback for domain type changes (full or min/max).
 * @prop {array} channels Current channel object for inferring the current global selection.
 * @prop {array} dimensions Currently available dimensions (channel, z, t etc.).
 * @prop {string} domainType One of Max/Min or Full (soon presets as well).
 * @prop {boolean} disableChannelsIfRgbDetected Whether or not we need colormap controllers if RGB.
 */function LayerOptions(_ref10){var colormap=_ref10.colormap,opacity=_ref10.opacity,handleColormapChange=_ref10.handleColormapChange,handleOpacityChange=_ref10.handleOpacityChange,handleTransparentColorChange=_ref10.handleTransparentColorChange,globalControlLabels=_ref10.globalControlLabels,globalLabelValues=_ref10.globalLabelValues,handleGlobalChannelsSelectionChange=_ref10.handleGlobalChannelsSelectionChange,handleSliderChange=_ref10.handleSliderChange,handleDomainChange=_ref10.handleDomainChange,transparentColor=_ref10.transparentColor,channels=_ref10.channels,domainType=_ref10.domainType,disableChannelsIfRgbDetected=_ref10.disableChannelsIfRgbDetected,shouldShowTransparentColor=_ref10.shouldShowTransparentColor,shouldShowDomain=_ref10.shouldShowDomain,shouldShowColormap=_ref10.shouldShowColormap,use3d=_ref10.use3d,loader=_ref10.loader,handleMultiPropertyChange=_ref10.handleMultiPropertyChange,resolution=_ref10.resolution,disable3d=_ref10.disable3d,setRasterLayerCallback=_ref10.setRasterLayerCallback,setAreAllChannelsLoading=_ref10.setAreAllChannelsLoading,setViewState=_ref10.setViewState,spatialHeight=_ref10.spatialHeight,spatialWidth=_ref10.spatialWidth,modelMatrix=_ref10.modelMatrix;var _ref11=Array.isArray(loader.data)?loader.data[0]:loader.data,labels=_ref11.labels,shape=_ref11.shape;var hasDimensionsAndChannels=labels.length>0&&channels.length>0;var hasZStack=shape[labels.indexOf('z')]>1;// Only show volume button if we can actually view resolutions.
var hasViewableResolutions=Boolean(Array.from({length:loader.data.length}).filter(function(_,res){return Object(components_utils["f" /* canLoadResolution */])(loader.data,res);}).length);return/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{container:true,direction:"column",style:{width:'100%'}},hasZStack&&!disable3d&&hasViewableResolutions&&/*#__PURE__*/external_react_default.a.createElement(VolumeDropdown,{loader:loader,handleSliderChange:handleSliderChange,handleDomainChange:handleDomainChange,channels:channels,handleMultiPropertyChange:handleMultiPropertyChange,resolution:resolution,disable3d:disable3d,setRasterLayerCallback:setRasterLayerCallback,setAreAllChannelsLoading:setAreAllChannelsLoading,setViewState:setViewState,spatialHeight:spatialHeight,spatialWidth:spatialWidth,use3d:use3d,modelMatrix:modelMatrix}),hasDimensionsAndChannels&&!use3d&&globalControlLabels.map(function(field){return shape[labels.indexOf(field)]>1&&/*#__PURE__*/external_react_default.a.createElement(LayerOption,{name:field,inputId:"".concat(field,"-slider"),key:field},/*#__PURE__*/external_react_default.a.createElement(GlobalSelectionSlider,{field:field,value:globalLabelValues[field],handleChange:handleGlobalChannelsSelectionChange,possibleValues:range_default()(shape[labels.indexOf(field)])}));}),!disableChannelsIfRgbDetected?/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,shouldShowColormap&&/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true},/*#__PURE__*/external_react_default.a.createElement(LayerOption,{name:"Colormap",inputId:"colormap-select"},/*#__PURE__*/external_react_default.a.createElement(ColormapSelect,{value:colormap||'',inputId:"colormap-select",handleChange:handleColormapChange}))),shouldShowDomain&&/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true},/*#__PURE__*/external_react_default.a.createElement(LayerOption,{name:"Domain",inputId:"domain-selector"},/*#__PURE__*/external_react_default.a.createElement(SliderDomainSelector,{value:domainType||constants["e" /* DEFAULT_RASTER_DOMAIN_TYPE */],handleChange:function handleChange(value){handleDomainChange(value);}})))):null,!use3d&&/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true},/*#__PURE__*/external_react_default.a.createElement(LayerOption,{name:"Opacity",inputId:"opacity-slider"},/*#__PURE__*/external_react_default.a.createElement(OpacitySlider,{value:opacity,handleChange:handleOpacityChange}))),shouldShowTransparentColor&&!use3d&&/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true},/*#__PURE__*/external_react_default.a.createElement(LayerOption,{name:"Zero Transparent",inputId:"transparent-color-selector"},/*#__PURE__*/external_react_default.a.createElement(TransparentColorCheckbox,{value:transparentColor,handleChange:handleTransparentColorChange}))));}/* harmony default export */ var layer_controller_LayerOptions = (LayerOptions);
// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(117);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(19);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__(172);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// CONCATENATED MODULE: ./src/components/layer-controller/VolumeOptions.js
var useSlicerStyles=Object(styles_["makeStyles"])(function(theme){return Object(styles_["createStyles"])({enabled:{},disabled:{color:theme.palette.text.disabled,// Because of the .5 opacity of the disabled color in the theme, and the fact
// that there are multiple overlaid parts to the slider,
// this needs to be set manually for the desired effect.
'& .MuiSlider-thumb':{color:'rgb(100, 100, 100, 1.0)'},'&  .MuiSlider-track':{color:'rgb(100, 100, 100, 1.0)'}}});});var VolumeOptions_Slicer=function Slicer(_ref){var xSlice=_ref.xSlice,ySlice=_ref.ySlice,zSlice=_ref.zSlice,handleSlicerSetting=_ref.handleSlicerSetting,loader=_ref.loader,use3d=_ref.use3d;var _getBoundingCube=Object(utils["b" /* getBoundingCube */])(loader.data),_getBoundingCube2=Object(slicedToArray["a" /* default */])(_getBoundingCube,3),xSliceInit=_getBoundingCube2[0],ySliceInit=_getBoundingCube2[1],zSliceInit=_getBoundingCube2[2];var sliceValuesAndSetSliceFunctions=[[xSlice,function(xSliceNew){return handleSlicerSetting('x',xSliceNew);},'x',xSliceInit],[ySlice,function(ySliceNew){return handleSlicerSetting('y',ySliceNew);},'y',ySliceInit],[zSlice,function(zSliceNew){return handleSlicerSetting('z',zSliceNew);},'z',zSliceInit]];var classes=useSlicerStyles();var Slicers=sliceValuesAndSetSliceFunctions.map(function(_ref2){var _ref3=Object(slicedToArray["a" /* default */])(_ref2,4),val=_ref3[0],setVal=_ref3[1],label=_ref3[2],_ref3$=Object(slicedToArray["a" /* default */])(_ref3[3],2),min=_ref3$[0],max=_ref3$[1];return/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{container:true,direction:"row",justifyContent:"flex-start",alignItems:"center",key:label},/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true,xs:1},/*#__PURE__*/external_react_default.a.createElement(Typography_default.a,{className:!use3d?classes.disabled:classes.enabled,style:{marginBottom:0}},label,":")),/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true,xs:11},/*#__PURE__*/external_react_default.a.createElement(Slider_default.a,{disabled:!use3d,className:!use3d?classes.disabled:classes.enabled,value:val,onChange:function onChange(e,v){return setVal(v);},valueLabelDisplay:"auto",valueLabelFormat:function valueLabelFormat(v){return Object(utils["a" /* abbreviateNumber */])(v);},getAriaLabel:function getAriaLabel(){return"".concat(label," slider");},min:min,max:max,step:0.005,orientation:"horizontal"})));});return/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,/*#__PURE__*/external_react_default.a.createElement(Typography_default.a,{className:!use3d?classes.disabled:classes.enabled,style:{marginTop:16,marginBottom:0}},"Clipping Planes:",' '),' ',Slicers);};var renderingOptions=Object.values(viv_["RENDERING_MODES"]);function RenderingModeSelect(_ref4){var handleRenderingModeChange=_ref4.handleRenderingModeChange,renderingMode=_ref4.renderingMode,use3d=_ref4.use3d;var classes=Object(styles["g" /* useSelectStyles */])();// Empty option allows for displaying the title of the dropdown fully in the UI.
var options=!use3d?[].concat(Object(toConsumableArray["a" /* default */])(renderingOptions),['']):renderingOptions;return/*#__PURE__*/external_react_default.a.createElement(FormControl_default.a,{fullWidth:true},/*#__PURE__*/external_react_default.a.createElement(InputLabel_default.a,{htmlFor:"rendering-mode-select"},"Rendering Mode"),/*#__PURE__*/external_react_default.a.createElement(Select_default.a,{native:true,onChange:function onChange(e){return handleRenderingModeChange(e.target.value);},value:use3d?renderingMode:'',inputProps:{name:'rendering-mode',id:'rendering-mode-select'},disabled:!use3d,classes:{root:classes.selectRoot}},options.map(function(name){return/*#__PURE__*/external_react_default.a.createElement("option",{key:name,value:name},name);})));}var VolumeOptions_ReCenterButton=function ReCenterButton(_ref5){var setViewState=_ref5.setViewState,use3d=_ref5.use3d,spatialHeight=_ref5.spatialHeight,spatialWidth=_ref5.spatialWidth,loader=_ref5.loader,modelMatrix=_ref5.modelMatrix;return/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true,xs:"auto",key:"recenter"},/*#__PURE__*/external_react_default.a.createElement(Button_default.a,{onClick:function onClick(){var defaultViewState=Object(viv_["getDefaultInitialViewState"])(loader.data,{height:spatialHeight,width:spatialWidth},1.5,use3d,new external_math_gl_["Matrix4"](modelMatrix));setViewState(Object(objectSpread2["a" /* default */])({},defaultViewState,{rotationX:0,rotationOrbit:0}));},disabled:!use3d,style:{padding:0,marginBottom:6}},"Re-Center"));};var VolumeOptions_VolumeOptions=function VolumeOptions(_ref6){var handleSlicerSetting=_ref6.handleSlicerSetting,handleRenderingModeChange=_ref6.handleRenderingModeChange,renderingMode=_ref6.renderingMode,xSlice=_ref6.xSlice,ySlice=_ref6.ySlice,zSlice=_ref6.zSlice,use3d=_ref6.use3d,loader=_ref6.loader,setViewState=_ref6.setViewState,spatialHeight=_ref6.spatialHeight,spatialWidth=_ref6.spatialWidth,modelMatrix=_ref6.modelMatrix;return/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,/*#__PURE__*/external_react_default.a.createElement(RenderingModeSelect,{handleRenderingModeChange:handleRenderingModeChange,renderingMode:renderingMode,use3d:use3d}),/*#__PURE__*/external_react_default.a.createElement(VolumeOptions_Slicer,{xSlice:xSlice,ySlice:ySlice,zSlice:zSlice,handleSlicerSetting:handleSlicerSetting,use3d:use3d,loader:loader}),/*#__PURE__*/external_react_default.a.createElement(VolumeOptions_ReCenterButton,{setViewState:setViewState,use3d:use3d,spatialHeight:spatialHeight,spatialWidth:spatialWidth,loader:loader,modelMatrix:modelMatrix}));};/* harmony default export */ var layer_controller_VolumeOptions = (VolumeOptions_VolumeOptions);
// EXTERNAL MODULE: ./src/utils.js
var src_utils = __webpack_require__(6);

// EXTERNAL MODULE: ./src/components/layer-controller/constants.js
var layer_controller_constants = __webpack_require__(116);

// CONCATENATED MODULE: ./src/components/layer-controller/LayerController.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerController; });
function TabPanel(props){var children=props.children,value=props.value,index=props.index,other=Object(objectWithoutProperties["a" /* default */])(props,["children","value","index"]);return/*#__PURE__*/external_react_default.a.createElement("div",Object.assign({role:"tabpanel",hidden:value!==index,id:"simple-tabpanel-".concat(index),"aria-labelledby":"simple-tab-".concat(index)},other),value===index&&children);}// Set the domain of the sliders based on either a full range or min/max.
function getDomainsAndSliders(_x,_x2,_x3,_x4){return _getDomainsAndSliders.apply(this,arguments);}function _getDomainsAndSliders(){_getDomainsAndSliders=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee6(loader,selections,domainType,use3d){var domains,stats,sliders,source;return regenerator_default.a.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.next=2;return Object(utils["c" /* getMultiSelectionStats */])({loader:loader.data,selections:selections,use3d:use3d});case 2:stats=_context6.sent;sliders=stats.sliders;if(domainType==='Min/Max'){// eslint-disable-next-line prefer-destructuring
domains=stats.domains;}if(domainType==='Full'){source=Object(src_utils["e" /* getSourceFromLoader */])(loader);domains=selections.map(function(){return layer_controller_constants["a" /* DOMAINS */][source.dtype];});}return _context6.abrupt("return",{domains:domains,sliders:sliders});case 7:case"end":return _context6.stop();}}},_callee6);}));return _getDomainsAndSliders.apply(this,arguments);}var buttonStyles={borderStyle:'dashed',marginTop:'10px',fontWeight:400};/**
 * Controller for the various imaging options (color, opactiy, sliders etc.)
 * @prop {object} imageData Image config object, one of the `images` in the raster schema.
 * @prop {object} layerId Randomly generated id for the image layer that this controller handles.
 * @prop {function} handleLayerRemove Callback for handling the removal of a layer.
 * @prop {object} loader Loader object for the current imaging layer.
 * @prop {function} handleLayerChange Callback for handling the changing of layer properties.
 */function LayerController(props){var _channels$;var layer=props.layer,name=props.name,loader=props.loader,theme=props.theme,handleLayerRemove=props.handleLayerRemove,handleLayerChange=props.handleLayerChange,shouldShowTransparentColor=props.shouldShowTransparentColor,shouldShowDomain=props.shouldShowDomain,shouldShowColormap=props.shouldShowColormap,ChannelController=props.ChannelController,setViewState=props.setViewState,disable3d=props.disable3d,setRasterLayerCallback=props.setRasterLayerCallback,setAreLayerChannelsLoading=props.setAreLayerChannelsLoading,areLayerChannelsLoading=props.areLayerChannelsLoading,disabled=props.disabled,spatialHeight=props.spatialHeight,spatialWidth=props.spatialWidth,disableChannelsIfRgbDetected=props.disableChannelsIfRgbDetected,shouldShowRemoveLayerButton=props.shouldShowRemoveLayerButton;var colormap=layer.colormap,opacity=layer.opacity,channels=layer.channels,transparentColor=layer.transparentColor,renderingMode=layer.renderingMode,xSlice=layer.xSlice,ySlice=layer.ySlice,zSlice=layer.zSlice,resolution=layer.resolution,use3d=layer.use3d,modelMatrix=layer.modelMatrix;// Channels are used in a lot of callbacks and change handlers
// so ensuring they have an up to date copy of the data ensures consistency.
// See: https://github.com/vitessce/vitessce/issues/1036
var channelRef=Object(external_react_["useRef"])(channels);Object(external_react_["useEffect"])(function(){channelRef.current=channels;return undefined;},[channels]);var firstSelection=((_channels$=channels[0])===null||_channels$===void 0?void 0:_channels$.selection)||{};var data=loader.data,channelOptions=loader.channels;var _useState=Object(external_react_["useState"])(0),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),tab=_useState2[0],setTab=_useState2[1];var handleTabChange=function handleTabChange(event,newTab){setTab(newTab);};var _ref=Array.isArray(data)?data[data.length-1]:data,labels=_ref.labels,shape=_ref.shape;var _useState3=Object(external_react_["useState"])(layer.domainType),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),domainType=_useState4[0],setDomainType=_useState4[1];var _useState5=Object(external_react_["useState"])(true),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),isExpanded=_useState6[0],setIsExpanded=_useState6[1];var _useState7=Object(external_react_["useState"])(constants["g" /* GLOBAL_LABELS */].filter(function(field){return typeof firstSelection[field]==='number';}).reduce(function(o,key){return Object(objectSpread2["a" /* default */])({},o,Object(defineProperty["a" /* default */])({},key,firstSelection[key]));},{})),_useState8=Object(slicedToArray["a" /* default */])(_useState7,2),globalLabelValues=_useState8[0],setGlobalLabelValues=_useState8[1];function setVisible(v){handleLayerChange(Object(objectSpread2["a" /* default */])({},layer,{visible:v}));}function setColormap(v){handleLayerChange(Object(objectSpread2["a" /* default */])({},layer,{colormap:v}));}function setOpacity(v){handleLayerChange(Object(objectSpread2["a" /* default */])({},layer,{opacity:v}));}function setChannels(v){handleLayerChange(Object(objectSpread2["a" /* default */])({},layer,{channels:v}));}function setTransparentColor(v){handleLayerChange(Object(objectSpread2["a" /* default */])({},layer,{transparentColor:v}));}function setRenderingMode(v){handleLayerChange(Object(objectSpread2["a" /* default */])({},layer,{renderingMode:v}));}function handleMultiPropertyChange(obj){handleLayerChange(Object(objectSpread2["a" /* default */])({},layer,{},obj));}function handleSlicerSetting(slice,val){handleLayerChange(Object(objectSpread2["a" /* default */])({},layer,Object(defineProperty["a" /* default */])({},"".concat(slice,"Slice"),val)));}function setChannelsAndDomainType(newChannels,newDomainType){handleLayerChange(Object(objectSpread2["a" /* default */])({},layer,{channels:newChannels,domainType:newDomainType}));}function setChannel(v,i){var newChannels=Object(toConsumableArray["a" /* default */])(channelRef.current);newChannels[i]=v;handleLayerChange(Object(objectSpread2["a" /* default */])({},layer,{channels:newChannels}));}function addChannel(v){var newChannels=[].concat(Object(toConsumableArray["a" /* default */])(channelRef.current),[v]);handleLayerChange(Object(objectSpread2["a" /* default */])({},layer,{channels:newChannels}));}function removeChannel(i){var newChannels=Object(toConsumableArray["a" /* default */])(channelRef.current);newChannels.splice(i,1);handleLayerChange(Object(objectSpread2["a" /* default */])({},layer,{channels:newChannels}));}var setAreAllChannelsLoading=function setAreAllChannelsLoading(val){var newAreLayerChannelsLoading=channelRef.current.map(function(){return val;});setAreLayerChannelsLoading(newAreLayerChannelsLoading);};// Handles adding a channel, creating a default selection
// for the current global settings and domain type.
var handleChannelAdd=/*#__PURE__*/function(){var _ref2=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var selection,_yield$getDomainsAndS,domains,sliders,domain,slider,color,visible,newChannelId,newAreLayerChannelsLoading,channel;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:selection={};labels.forEach(function(label){// Set new image to default selection for non-global selections (0)
// and use current global selection otherwise.
selection[label]=constants["g" /* GLOBAL_LABELS */].includes(label)?globalLabelValues[label]||0:0;});_context.next=4;return getDomainsAndSliders(loader,[selection],domainType,use3d);case 4:_yield$getDomainsAndS=_context.sent;domains=_yield$getDomainsAndS.domains;sliders=_yield$getDomainsAndS.sliders;domain=domains[0];slider=domain;color=[255,255,255];visible=true;newChannelId=channels.length;newAreLayerChannelsLoading=Object(toConsumableArray["a" /* default */])(areLayerChannelsLoading);newAreLayerChannelsLoading[newChannelId]=true;setAreLayerChannelsLoading(newAreLayerChannelsLoading);channel={selection:selection,slider:slider,visible:visible,color:color};setRasterLayerCallback(function(){setChannel(Object(objectSpread2["a" /* default */])({},channel,{slider:sliders[0]}),newChannelId);var areLayerChannelsLoadingCallback=Object(toConsumableArray["a" /* default */])(newAreLayerChannelsLoading);areLayerChannelsLoadingCallback[newChannelId]=false;setAreLayerChannelsLoading(areLayerChannelsLoadingCallback);setRasterLayerCallback(null);});addChannel(channel);case 18:case"end":return _context.stop();}}},_callee);}));return function handleChannelAdd(){return _ref2.apply(this,arguments);};}();var handleDomainChange=/*#__PURE__*/function(){var _ref3=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(value){var selections,sliders,_yield$getDomainsAndS2,domains,newChannels;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:setDomainType(value);selections=channels.map(function(channel){return channel.selection;});sliders=channels.map(function(channel){return channel.slider;});_context2.next=5;return getDomainsAndSliders(loader,selections,value,use3d);case 5:_yield$getDomainsAndS2=_context2.sent;domains=_yield$getDomainsAndS2.domains;// If it's the right-most slider, we take the minimum of that and the new value.
// Otherwise, we use the maximum of the left-hand side and the new value.
sliders=sliders.map(function(slider,i){var _slider=Object(slicedToArray["a" /* default */])(slider,2),left=_slider[0],right=_slider[1];return[Math.max(left,domains[i][0]),Math.min(right,domains[i][1])];});newChannels=channels.map(function(c,i){return Object(objectSpread2["a" /* default */])({},c,{slider:sliders[i]});});setChannelsAndDomainType(newChannels,value);case 10:case"end":return _context2.stop();}}},_callee2);}));return function handleDomainChange(_x5){return _ref3.apply(this,arguments);};}();// This call updates all channel selections with new global selection from the UI.
var handleGlobalChannelsSelectionChange=/*#__PURE__*/function(){var _ref5=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee3(_ref4){var selection,event,selections,canUpdateChannels;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:selection=_ref4.selection,event=_ref4.event;selections=channels.map(function(channel){return Object(objectSpread2["a" /* default */])({},channel.selection,{},selection);});canUpdateChannels=event.type==='mouseup'||event.type==='keydown';// Only update domains on a mouseup event for the same reason as above.
if(canUpdateChannels){setAreAllChannelsLoading(true);getDomainsAndSliders(loader,selections,domainType,use3d).then(function(_ref6){var sliders=_ref6.sliders;var newChannelsWithSelection=channels.map(function(c){return Object(objectSpread2["a" /* default */])({},c,{selection:Object(objectSpread2["a" /* default */])({},c.selection,{},selection)});});// Set the callback before changing the selection
// so the callback is used when the layer (re)loads its data.
setRasterLayerCallback(function(){setRasterLayerCallback(null);setAreAllChannelsLoading(false);var newChannelsWithSliders=Object(toConsumableArray["a" /* default */])(newChannelsWithSelection).map(function(c,i){return Object(objectSpread2["a" /* default */])({},c,{slider:sliders[i]});});setChannels(newChannelsWithSliders);});setChannels(newChannelsWithSelection);});}setGlobalLabelValues(function(prev){return Object(objectSpread2["a" /* default */])({},prev,{},selection);});case 5:case"end":return _context3.stop();}}},_callee3);}));return function handleGlobalChannelsSelectionChange(_x6){return _ref5.apply(this,arguments);};}();var channelControllers=[];if(labels.length>0){var channelLabel=labels.find(function(c){return c==='channel'||c==='c';})||labels[0];// Create the channel controllers for each channel.
channelControllers=channels.map(// c is an object like { color, selection, slider, visible }.
function(c,channelId){// Update the auxiliary store with the current loading state of a channel.
var setIsLoading=function setIsLoading(val){var newAreLayerChannelsLoading=Object(toConsumableArray["a" /* default */])(areLayerChannelsLoading);newAreLayerChannelsLoading[channelId]=val;setAreLayerChannelsLoading(newAreLayerChannelsLoading);};// Change one property of a channel (for now - soon
// nested structures allowing for multiple z/t selecitons at once, for example).
var handleChannelPropertyChange=function handleChannelPropertyChange(property,value){// property is something like "selection" or "slider."
// value is the actual change, like { channel: "DAPI" }.
var update=Object(defineProperty["a" /* default */])({},property,value);if(property==='selection'){// Channel is loading until the layer callback is called
// by the layer, which fetches the raster data.
setIsLoading(true);update.selection=Object(objectSpread2["a" /* default */])({},globalLabelValues,{},update.selection);setChannel(Object(objectSpread2["a" /* default */])({},c,{},update),channelId);// Call back for raster layer handles update of UI
// like sliders and the loading state of the channel.
setRasterLayerCallback(/*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee4(){var selections,_yield$getDomainsAndS3,sliders,_sliders;return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:selections=[Object(objectSpread2["a" /* default */])({},channels[channelId][property],{},value)];_context4.next=3;return getDomainsAndSliders(loader,selections,domainType,use3d);case 3:_yield$getDomainsAndS3=_context4.sent;sliders=_yield$getDomainsAndS3.sliders;_sliders=Object(slicedToArray["a" /* default */])(sliders,1);update.slider=_sliders[0];setChannel(Object(objectSpread2["a" /* default */])({},c,{},update),channelId);setRasterLayerCallback(null);setIsLoading(false);case 10:case"end":return _context4.stop();}}},_callee4);})));}else{setChannel(Object(objectSpread2["a" /* default */])({},c,{},update),channelId);}};var handleChannelRemove=function handleChannelRemove(){removeChannel(channelId);};var handleIQRUpdate=/*#__PURE__*/function(){var _ref8=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee5(){var loaderData,source,raster,stats,q1,q3;return regenerator_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:loaderData=loader.data;source=Array.isArray(loaderData)?loaderData[loaderData.length-1]:loaderData;_context5.next=4;return source.getRaster({selection:channels[channelId].selection});case 4:raster=_context5.sent;stats=Object(viv_["getChannelStats"])(raster.data);q1=stats.q1,q3=stats.q3;setChannel(Object(objectSpread2["a" /* default */])({},c,{slider:[q1,q3]}),channelId);case 8:case"end":return _context5.stop();}}},_callee5);}));return function handleIQRUpdate(){return _ref8.apply(this,arguments);};}();return/*#__PURE__*/external_react_default.a.createElement(ChannelController// eslint-disable-next-line react/no-array-index-key
,{key:"channel-controller-".concat(channelId),dimName:channelLabel,visibility:c.visible,selectionIndex:c.selection[channelLabel],slider:c.slider,color:c.color,channels:channels,channelId:channelId,domainType:domainType,loader:loader,globalLabelValues:globalLabelValues,theme:theme,channelOptions:channelOptions,colormapOn:Boolean(colormap),handlePropertyChange:handleChannelPropertyChange,handleChannelRemove:handleChannelRemove,handleIQRUpdate:handleIQRUpdate,setRasterLayerCallback:setRasterLayerCallback,isLoading:areLayerChannelsLoading[channelId],use3d:use3d});});}var controllerSectionClasses=Object(styles["f" /* useControllerSectionStyles */])();var visible=layer.visible;var visibleSetting=typeof visible==='boolean'?visible:true;var Visibility=visibleSetting?Visibility_default.a:VisibilityOff_default.a;// Only show Volume tabs if 3D is available.
var hasViewableResolutions=Boolean(Array.from({length:loader.data.length}).filter(function(_,res){return Object(components_utils["f" /* canLoadResolution */])(loader.data,res);}).length);var useVolumeTabs=!disable3d&&shape[labels.indexOf('z')]>1&&hasViewableResolutions;var FullController=/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,/*#__PURE__*/external_react_default.a.createElement(layer_controller_LayerOptions,{channels:channels,opacity:opacity,colormap:colormap,transparentColor:transparentColor,domainType:domainType// Only allow for global dimension controllers that
// exist in the `dimensions` part of the loader.
,globalControlLabels:labels.filter(function(label){return constants["g" /* GLOBAL_LABELS */].includes(label);}),globalLabelValues:globalLabelValues,handleOpacityChange:setOpacity,handleColormapChange:setColormap,handleGlobalChannelsSelectionChange:handleGlobalChannelsSelectionChange,handleTransparentColorChange:setTransparentColor,disableChannelsIfRgbDetected:Object(src_utils["f" /* isRgb */])(loader)&&disableChannelsIfRgbDetected,handleDomainChange:handleDomainChange,shouldShowTransparentColor:shouldShowTransparentColor,shouldShowDomain:shouldShowDomain,shouldShowColormap:shouldShowColormap,use3d:use3d,loader:loader,handleMultiPropertyChange:handleMultiPropertyChange,resolution:resolution,disable3d:disable3d,setRasterLayerCallback:setRasterLayerCallback,setAreAllChannelsLoading:setAreAllChannelsLoading,setViewState:setViewState,spatialHeight:spatialHeight,spatialWidth:spatialWidth,modelMatrix:modelMatrix}),Object(src_utils["f" /* isRgb */])(loader)&&disableChannelsIfRgbDetected?null:channelControllers,Object(src_utils["f" /* isRgb */])(loader)&&disableChannelsIfRgbDetected?null:/*#__PURE__*/external_react_default.a.createElement(Button_default.a,{disabled:channels.length===viv_["MAX_CHANNELS"],onClick:handleChannelAdd,fullWidth:true,variant:"outlined",style:buttonStyles,startIcon:/*#__PURE__*/external_react_default.a.createElement(Add_default.a,null),size:"small"},"Add Channel"));return/*#__PURE__*/external_react_default.a.createElement(Accordion_default.a,{className:controllerSectionClasses.root,onChange:function onChange(e,expanded){var _e$target,_e$target$attributes,_e$target$attributes$;return!disabled&&setIsExpanded(expanded&&(e===null||e===void 0?void 0:(_e$target=e.target)===null||_e$target===void 0?void 0:(_e$target$attributes=_e$target.attributes)===null||_e$target$attributes===void 0?void 0:(_e$target$attributes$=_e$target$attributes.role)===null||_e$target$attributes$===void 0?void 0:_e$target$attributes$.value)==='presentation');},TransitionProps:{enter:false},expanded:!disabled&&isExpanded},/*#__PURE__*/external_react_default.a.createElement(styles["c" /* StyledAccordionSummary */],{expandIcon:/*#__PURE__*/external_react_default.a.createElement(ExpandMore_default.a,{role:"presentation"}),"aria-controls":"layer-".concat(name,"-controls")},/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{container:true,direction:"column",m:1,justifyContent:"center"},/*#__PURE__*/external_react_default.a.createElement(styles["a" /* OverflowEllipsisGrid */],{item:true},/*#__PURE__*/external_react_default.a.createElement(Button_default.a,{onClick:function onClick(e){if(!disabled){// Needed to prevent affecting the expansion panel from changing
e.stopPropagation();var nextVisible=typeof visible==='boolean'?!visible:false;setVisible(nextVisible);}},style:{marginRight:8,marginBottom:2,padding:0,minWidth:0}},/*#__PURE__*/external_react_default.a.createElement(Visibility,null)),name),!disabled&&!isExpanded&&!use3d&&/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{container:true,direction:"row",alignItems:"center",justifyContent:"center"},/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true,xs:6},/*#__PURE__*/external_react_default.a.createElement(styles["d" /* StyledInputLabel */],{htmlFor:"layer-".concat(name,"-opacity-closed")},"Opacity:")),/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true,xs:6},/*#__PURE__*/external_react_default.a.createElement(Slider_default.a,{id:"layer-".concat(name,"-opacity-closed"),value:opacity,onChange:function onChange(e,v){return setOpacity(v);},valueLabelDisplay:"auto",getAriaLabel:function getAriaLabel(){return'opacity slider';},min:0,max:1,step:0.01,orientation:"horizontal"}))))),/*#__PURE__*/external_react_default.a.createElement(styles["b" /* StyledAccordionDetails */],null,useVolumeTabs?/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,/*#__PURE__*/external_react_default.a.createElement(Tabs_default.a,{value:tab,onChange:handleTabChange,"aria-label":"simple tabs example",style:{height:'24px',minHeight:'24px'}},/*#__PURE__*/external_react_default.a.createElement(Tab_default.a,{label:"Channels",style:{fontSize:'.75rem',bottom:12,width:'50%',minWidth:'50%'},disableRipple:true}),/*#__PURE__*/external_react_default.a.createElement(Tab_default.a,{label:"Volume",style:{fontSize:'.75rem',bottom:12,width:'50%',minWidth:'50%'}})),/*#__PURE__*/external_react_default.a.createElement(TabPanel,{value:tab,index:0},FullController),/*#__PURE__*/external_react_default.a.createElement(TabPanel,{value:tab,index:1,style:{marginTop:4}},/*#__PURE__*/external_react_default.a.createElement(layer_controller_VolumeOptions,{loader:loader,handleSlicerSetting:handleSlicerSetting,handleRenderingModeChange:setRenderingMode,renderingMode:renderingMode,xSlice:xSlice,ySlice:ySlice,zSlice:zSlice,use3d:use3d,setViewState:setViewState,spatialHeight:spatialHeight,spatialWidth:spatialWidth,modelMatrix:modelMatrix}))):FullController,shouldShowRemoveLayerButton?/*#__PURE__*/external_react_default.a.createElement(Button_default.a,{onClick:handleLayerRemove,fullWidth:true,variant:"outlined",style:buttonStyles,size:"small"},"Remove Image Layer"):null));}

/***/ }),
/* 144 */,
/* 145 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(9);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(28);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: ./src/components/TitleInfo.js + 1 modules
var TitleInfo = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2);

// EXTERNAL MODULE: external "@material-ui/core/Slider"
var Slider_ = __webpack_require__(45);
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider_);

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(36);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: external "lodash/isEqual"
var isEqual_ = __webpack_require__(16);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(19);

// EXTERNAL MODULE: external "@material-ui/icons/MoreVert"
var MoreVert_ = __webpack_require__(162);
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(56);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: ./src/components/shared-mui/components.js
var components = __webpack_require__(49);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(46);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Lens"
var Lens_ = __webpack_require__(163);
var Lens_default = /*#__PURE__*/__webpack_require__.n(Lens_);

// EXTERNAL MODULE: ./src/components/utils.js
var utils = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/layer-controller/ColorPalette.js
var useStyles=Object(styles_["makeStyles"])(function(theme){return{container:{width:'70px',height:'40px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'},button:{padding:'3px',width:'16px'},icon:{width:'17px',height:'17px',stroke:theme.palette.action.selected,'stroke-width':'1px'}};});var ColorPalette_ColorPalette=function ColorPalette(_ref){var handleChange=_ref.handleChange;var classes=useStyles();return/*#__PURE__*/external_react_default.a.createElement("div",{className:classes.container,"aria-label":"color-swatch"},utils["d" /* VIEWER_PALETTE */].map(function(color){return/*#__PURE__*/external_react_default.a.createElement(IconButton_default.a,{className:classes.button,key:color,onClick:function onClick(){return handleChange(color);}},/*#__PURE__*/external_react_default.a.createElement(Lens_default.a,{fontSize:"small",style:{color:"rgb(".concat(color,")")},className:classes.icon}));}));};/* harmony default export */ var layer_controller_ColorPalette = (ColorPalette_ColorPalette);
// CONCATENATED MODULE: ./src/components/layer-controller/ChannelOptions.js
var ChannelOptions_useStyles=Object(styles_["makeStyles"])(function(){return{menuButton:{backgroundColor:'transparent'},colors:{'&:hover':{backgroundColor:'transparent'},paddingLeft:'2px',paddingRight:'2px'}};});/**
 * Dropdown for options for a channel on the three dots button.
 * @prop {function} handlePropertyChange Callback for changing property (color, IQR of sliders).
 * @prop {function} handleChannelRemove Callback for channel removal.
 * @prop {function} handleIQRUpdate Callback for IQR slider update.
 */function ChannelOptions(_ref){var handlePropertyChange=_ref.handlePropertyChange,handleChannelRemove=_ref.handleChannelRemove,handleIQRUpdate=_ref.handleIQRUpdate;var _useState=Object(external_react_["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),open=_useState2[0],setOpen=_useState2[1];var classes=ChannelOptions_useStyles();var handleColorSelect=function handleColorSelect(color){handlePropertyChange('color',color);};var handleRemove=function handleRemove(){setOpen(false);handleChannelRemove();};return/*#__PURE__*/external_react_default.a.createElement(components["b" /* PopperMenu */],{open:open,setOpen:setOpen,buttonIcon:/*#__PURE__*/external_react_default.a.createElement(MoreVert_default.a,{fontSize:"small"}),buttonClassName:classes.menuButton},/*#__PURE__*/external_react_default.a.createElement(MenuItem_default.a,{dense:true,disableGutters:true,onClick:handleRemove},/*#__PURE__*/external_react_default.a.createElement(components["a" /* MuiSpan */],null,"Remove")),/*#__PURE__*/external_react_default.a.createElement(MenuItem_default.a,{dense:true,disableGutters:true,onClick:handleIQRUpdate},/*#__PURE__*/external_react_default.a.createElement(components["a" /* MuiSpan */],null,"Use IQR")),/*#__PURE__*/external_react_default.a.createElement(MenuItem_default.a,{dense:true,disableGutters:true,className:classes.colors},/*#__PURE__*/external_react_default.a.createElement(layer_controller_ColorPalette,{handleChange:handleColorSelect})));}/* harmony default export */ var layer_controller_ChannelOptions = (ChannelOptions);
// EXTERNAL MODULE: ./src/components/layer-controller/constants.js
var constants = __webpack_require__(116);

// EXTERNAL MODULE: ./src/utils.js
var src_utils = __webpack_require__(6);

// EXTERNAL MODULE: ./src/components/layer-controller/utils.js
var layer_controller_utils = __webpack_require__(68);

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__(74);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__(72);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// EXTERNAL MODULE: ./src/components/layer-controller/styles.js
var styles = __webpack_require__(58);

// CONCATENATED MODULE: ./src/components/layer-controller/shared-channel-controls.js
/**
 * Dropdown for selecting a channel.
 * @prop {function} handleChange Callback for each new selection.
 * @prop {array} channelOptions List of available selections, like ['DAPI', 'FITC', ...].
 * @prop {boolean} disabled Whether or not the component is disabled.
 * @prop {number} selectionIndex Current numeric index of a selection.
 */function ChannelSelectionDropdown(_ref){var handleChange=_ref.handleChange,disabled=_ref.disabled,channelOptions=_ref.channelOptions,selectionIndex=_ref.selectionIndex;var classes=Object(styles["g" /* useSelectStyles */])();return/*#__PURE__*/external_react_default.a.createElement(Select_default.a,{classes:{root:classes.selectRoot},native:true,value:selectionIndex,onChange:function onChange(e){return handleChange(Number(e.target.value));}},channelOptions.map(function(opt,i){return/*#__PURE__*/external_react_default.a.createElement("option",{disabled:disabled,key:opt,value:i},opt);}));}/**
 * Checkbox for toggling on/off of a channel.
 * @prop {string} color Current color for this channel.
 * @prop {boolean} checked Whether or not this channel is "on".
 * @prop {boolean} disabled Whether or not the component is disabled.
 * @prop {function} toggle Callback for toggling on/off.
 */function ChannelVisibilityCheckbox(_ref2){var color=_ref2.color,checked=_ref2.checked,toggle=_ref2.toggle,disabled=_ref2.disabled;return/*#__PURE__*/external_react_default.a.createElement(Checkbox_default.a,{onChange:toggle,checked:checked,disabled:disabled,style:{color:color,'&$checked':{color:color}}});}
// CONCATENATED MODULE: ./src/components/layer-controller/RasterChannelController.js
// Returns an rgb string for display, and changes the color (arr)
// to use a grey for light theme + white color or if the colormap is on.
var toRgbUIString=function toRgbUIString(on,arr,theme){var color=on||theme==='light'&&arr.every(function(i){return i===255;})?[220,220,220]:arr;return"rgb(".concat(color,")");};function abbreviateNumber(value){// Return an abbreviated representation of value, in 5 characters or less.
var maxLength=5;var maxNaiveDigits=maxLength;/* eslint-disable no-plusplus */if(!Number.isInteger(value)){--maxNaiveDigits;}// Wasted on "."
if(value<1){--maxNaiveDigits;}// Wasted on "0."
/* eslint-disable no-plusplus */var naive=Intl.NumberFormat('en-US',{maximumSignificantDigits:maxNaiveDigits,useGrouping:false}).format(value);if(naive.length<=maxLength)return naive;// "e+9" consumes 3 characters, so if we even had two significant digits,
// it would take take us to six characters, including the decimal point.
return value.toExponential(0);}/**
 * Slider for controlling current colormap.
 * @prop {string} color Current color for this channel.
 * @prop {arry} slider Current value of the slider.
 * @prop {function} handleChange Callback for each slider change.
 * @prop {array} domain Current max/min allowable slider values.
 */function ChannelSlider(_ref){var color=_ref.color,_ref$slider=_ref.slider,slider=_ref$slider===void 0?[0,0]:_ref$slider,handleChange=_ref.handleChange,_ref$domain=_ref.domain,domain=_ref$domain===void 0?[0,0]:_ref$domain,dtype=_ref.dtype,disabled=_ref.disabled;var _domain=Object(slicedToArray["a" /* default */])(domain,2),min=_domain[0],max=_domain[1];var sliderCopy=slider.slice();if(slider[0]<min){sliderCopy[0]=min;}if(slider[1]>max){sliderCopy[1]=max;}var handleChangeDebounced=Object(external_react_["useCallback"])(debounce_default()(handleChange,3,{trailing:true}),[handleChange]);var step=max-min<500&&dtype==='Float32'?(max-min)/500:1;return/*#__PURE__*/external_react_default.a.createElement(Slider_default.a,{value:slider,valueLabelFormat:abbreviateNumber,onChange:function onChange(e,v){return handleChangeDebounced(v);},valueLabelDisplay:"auto",getAriaLabel:function getAriaLabel(){return"".concat(color,"-").concat(slider);},min:min,max:max,step:step,orientation:"horizontal",style:{color:color,marginTop:'7px'},disabled:disabled});}/**
 * Controller for the handling the colormapping sliders.
 * @prop {boolean} visibility Whether or not this channel is "on"
 * @prop {array} slider Current slider range.
 * @prop {array} color Current color for this channel.
 * @prop {array} domain Current max/min for this channel.
 * @prop {string} dimName Name of the dimensions this slider controls (usually "channel").
 * @prop {boolean} colormapOn Whether or not the colormap (viridis, magma etc.) is on.
 * @prop {object} channelOptions All available options for this dimension (i.e channel names).
 * @prop {function} handlePropertyChange Callback for when a property (color, slider etc.) changes.
 * @prop {function} handleChannelRemove When a channel is removed, this is called.
 * @prop {function} handleIQRUpdate When the IQR button is clicked, this is called.
 * @prop {number} selectionIndex The current numeric index of the selection.
 */function RasterChannelController(_ref2){var _ref2$visibility=_ref2.visibility,visibility=_ref2$visibility===void 0?false:_ref2$visibility,slider=_ref2.slider,color=_ref2.color,channels=_ref2.channels,channelId=_ref2.channelId,newDomainType=_ref2.domainType,dimName=_ref2.dimName,theme=_ref2.theme,loader=_ref2.loader,colormapOn=_ref2.colormapOn,channelOptions=_ref2.channelOptions,handlePropertyChange=_ref2.handlePropertyChange,handleChannelRemove=_ref2.handleChannelRemove,handleIQRUpdate=_ref2.handleIQRUpdate,selectionIndex=_ref2.selectionIndex,isLoading=_ref2.isLoading,newUse3d=_ref2.use3d;var _getSourceFromLoader=Object(src_utils["e" /* getSourceFromLoader */])(loader),dtype=_getSourceFromLoader.dtype;var _useState=Object(external_react_["useState"])(null),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),domain=_useState2[0],setDomain=_useState2[1];var _useState3=Object(external_react_["useState"])(null),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),domainType=_useState4[0],setDomainType=_useState4[1];var _useState5=Object(external_react_["useState"])(null),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),use3d=_useState6[0],setUse3d=_useState6[1];var _useState7=Object(external_react_["useState"])([Object(objectSpread2["a" /* default */])({},channels[channelId].selection)]),_useState8=Object(slicedToArray["a" /* default */])(_useState7,2),selection=_useState8[0],setSelection=_useState8[1];var rgbColor=toRgbUIString(colormapOn,color,theme);Object(external_react_["useEffect"])(function(){// Use mounted to prevent state updates/re-renders after the component has been unmounted.
// All state updates should happen within the mounted check.
var mounted=true;if(dtype&&loader&&channels){var selections=[Object(objectSpread2["a" /* default */])({},channels[channelId].selection)];var domains;var hasDomainChanged=newDomainType!==domainType;var has3dChanged=use3d!==newUse3d;var hasSelectionChanged=!isEqual_default()(selections,selection);if(hasDomainChanged||hasSelectionChanged||has3dChanged){if(newDomainType==='Full'){domains=[constants["a" /* DOMAINS */][dtype]];var _domains=domains,_domains2=Object(slicedToArray["a" /* default */])(_domains,1),newDomain=_domains2[0];if(mounted){setDomain(newDomain);setDomainType(newDomainType);if(hasSelectionChanged){setSelection(selections);}if(has3dChanged){setUse3d(newUse3d);}}}else{Object(layer_controller_utils["c" /* getMultiSelectionStats */])({loader:loader.data,selections:selections,use3d:newUse3d}).then(function(stats){// eslint-disable-next-line prefer-destructuring
domains=stats.domains;var _domains3=domains,_domains4=Object(slicedToArray["a" /* default */])(_domains3,1),newDomain=_domains4[0];if(mounted){setDomain(newDomain);setDomainType(newDomainType);if(hasSelectionChanged){setSelection(selections);}if(has3dChanged){setUse3d(newUse3d);}}});}}}return function(){mounted=false;};},[domainType,channels,channelId,loader,dtype,newDomainType,selection,newUse3d,use3d]);/* A valid selection is defined by an object where the keys are
   *  the name of a dimension of the data, and the values are the
   *  index of the image along that particular dimension.
   *
   *  Since we currently only support making a selection along one
   *  addtional dimension (i.e. the dropdown just has channels or mz)
   *  we have a helper function to create the selection.
   *
   *  e.g { channel: 2 } // channel dimension, third channel
   */var createSelection=function createSelection(index){return Object(defineProperty["a" /* default */])({},dimName,index);};return/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{container:true,direction:"column",m:1,justifyContent:"center"},/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{container:true,direction:"row",justifyContent:"space-between"},/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true,xs:10},/*#__PURE__*/external_react_default.a.createElement(ChannelSelectionDropdown,{handleChange:function handleChange(v){return handlePropertyChange('selection',createSelection(v));},selectionIndex:selectionIndex,channelOptions:channelOptions,disabled:isLoading})),/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true,xs:1,style:{marginTop:'4px'}},/*#__PURE__*/external_react_default.a.createElement(layer_controller_ChannelOptions,{handlePropertyChange:handlePropertyChange,handleChannelRemove:handleChannelRemove,handleIQRUpdate:handleIQRUpdate,disabled:isLoading}))),/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{container:true,direction:"row",justifyContent:"space-between"},/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true,xs:2},/*#__PURE__*/external_react_default.a.createElement(ChannelVisibilityCheckbox,{color:rgbColor,checked:visibility,toggle:function toggle(){return handlePropertyChange('visible',!visibility);},disabled:isLoading})),/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true,xs:9},/*#__PURE__*/external_react_default.a.createElement(ChannelSlider,{color:rgbColor,slider:slider,domain:domain||constants["a" /* DOMAINS */][dtype],dtype:dtype,handleChange:function handleChange(v){return handlePropertyChange('slider',v);},disabled:isLoading}))));}/* harmony default export */ var layer_controller_RasterChannelController = (RasterChannelController);
// EXTERNAL MODULE: external "@material-ui/icons/RemoveCircle"
var RemoveCircle_ = __webpack_require__(166);
var RemoveCircle_default = /*#__PURE__*/__webpack_require__.n(RemoveCircle_);

// CONCATENATED MODULE: ./src/components/layer-controller/BitmaskChannelController.js
/**
 * Controller for the handling the bitmask channels.
 * @prop {boolean} visibility Whether or not this channel is "on"
 * @prop {string} dimName Name of the dimensions this slider controls (usually "channel").
 * @prop {object} channelOptions All available options for this dimension (i.e channel names).
 * @prop {function} handlePropertyChange Callback for when a property (color, slider etc.) changes.
 * @prop {function} handleChannelRemove When a channel is removed, this is called.
 * @prop {number} selectionIndex The current numeric index of the selection.
 * @prop {boolean} disableOptions Whether or not channel options are be disabled (default: false).
 */function BitmaskChannelController(_ref){var _ref$visibility=_ref.visibility,visibility=_ref$visibility===void 0?false:_ref$visibility,dimName=_ref.dimName,channelOptions=_ref.channelOptions,handlePropertyChange=_ref.handlePropertyChange,handleChannelRemove=_ref.handleChannelRemove,selectionIndex=_ref.selectionIndex,_ref$disableOptions=_ref.disableOptions,disableOptions=_ref$disableOptions===void 0?false:_ref$disableOptions;/* A valid selection is defined by an object where the keys are
  *  the name of a dimension of the data, and the values are the
  *  index of the image along that particular dimension.
  *
  *  Since we currently only support making a selection along one
  *  addtional dimension (i.e. the dropdown just has channels or mz)
  *  we have a helper function to create the selection.
  *
  *  e.g { channel: 2 } // channel dimension, third channel
  */var createSelection=function createSelection(index){return Object(defineProperty["a" /* default */])({},dimName,index);};return/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{container:true,direction:"row",justify:"space-between"},/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true,xs:2},/*#__PURE__*/external_react_default.a.createElement(ChannelVisibilityCheckbox,{color:[220,220,220],checked:visibility,toggle:function toggle(){return handlePropertyChange('visible',!visibility);}})),/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true,xs:9},/*#__PURE__*/external_react_default.a.createElement(ChannelSelectionDropdown,{handleChange:function handleChange(v){return handlePropertyChange('selection',createSelection(v));},selectionIndex:selectionIndex,disableOptions:disableOptions,channelOptions:channelOptions})),/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true,xs:1},/*#__PURE__*/external_react_default.a.createElement(IconButton_default.a,{onClick:handleChannelRemove,style:{padding:'6px 6px 6px 0px'}},/*#__PURE__*/external_react_default.a.createElement(RemoveCircle_default.a,null))));}/* harmony default export */ var layer_controller_BitmaskChannelController = (BitmaskChannelController);
// EXTERNAL MODULE: ./src/components/layer-controller/VectorLayerController.js
var VectorLayerController = __webpack_require__(126);

// EXTERNAL MODULE: ./src/components/layer-controller/LayerController.js + 2 modules
var LayerController = __webpack_require__(143);

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(127);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);

// CONCATENATED MODULE: ./src/components/layer-controller/ImageAddButton.js
var ImageAddButton_useStyles=Object(styles_["makeStyles"])(function(){return{addButton:{marginTop:'10px',marginBottom:'10px',fontWeight:400}};});function ImageAddIcon(){return/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,/*#__PURE__*/external_react_default.a.createElement(Add_default.a,null),"Add Image Layer");}function ImageAddButton(_ref){var imageOptions=_ref.imageOptions,handleImageAdd=_ref.handleImageAdd;var _useState=Object(external_react_["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),open=_useState2[0],setOpen=_useState2[1];var classes=ImageAddButton_useStyles();var handleAdd=function handleAdd(imgData){setOpen(function(prev){return!prev;});handleImageAdd(imgData);};if(!imageOptions)return null;return/*#__PURE__*/external_react_default.a.createElement(components["b" /* PopperMenu */],{open:open,setOpen:setOpen,buttonIcon:/*#__PURE__*/external_react_default.a.createElement(ImageAddIcon,null),buttonClassName:classes.addButton,placement:"bottom-start"},imageOptions.map(function(imgData,i){return/*#__PURE__*/external_react_default.a.createElement(MenuItem_default.a,{dense:true,key:imgData.name,onClick:function onClick(){return handleAdd(i);}},/*#__PURE__*/external_react_default.a.createElement("span",null,imgData.name));}));}/* harmony default export */ var layer_controller_ImageAddButton = (ImageAddButton);
// EXTERNAL MODULE: ./src/components/hooks.js
var hooks = __webpack_require__(18);

// EXTERNAL MODULE: ./src/components/data-hooks.js
var data_hooks = __webpack_require__(26);

// EXTERNAL MODULE: ./src/app/state/hooks.js
var state_hooks = __webpack_require__(7);

// EXTERNAL MODULE: ./src/app/state/coordination.js
var coordination = __webpack_require__(30);

// EXTERNAL MODULE: ./src/components/spatial/utils.js + 2 modules
var spatial_utils = __webpack_require__(76);

// EXTERNAL MODULE: ./src/components/spatial/constants.js
var spatial_constants = __webpack_require__(34);

// CONCATENATED MODULE: ./src/components/layer-controller/LayerControllerSubscriber.js
/* eslint-disable dot-notation */var LAYER_CONTROLLER_DATA_TYPES=['raster'];// LayerController is memoized to prevent updates from prop changes that
// are caused by view state updates i.e zooming and panning within
// the actual Spatial component.  Re-rendering this component is very
// expensive so we have to be careful with props in this file in general.
var LayerControllerMemoized=external_react_default.a.memo(Object(external_react_["forwardRef"])(function(props,ref){var title=props.title,removeGridComponent=props.removeGridComponent,theme=props.theme,isReady=props.isReady,moleculesLayer=props.moleculesLayer,dataset=props.dataset,setMoleculesLayer=props.setMoleculesLayer,cellsLayer=props.cellsLayer,canShowCellVecmask=props.canShowCellVecmask,setCellsLayer=props.setCellsLayer,rasterLayers=props.rasterLayers,imageLayerLoaders=props.imageLayerLoaders,imageLayerMeta=props.imageLayerMeta,rasterLayersCallbacks=props.rasterLayersCallbacks,setRasterLayersCallbacks=props.setRasterLayersCallbacks,areLoadingRasterChannnels=props.areLoadingRasterChannnels,setAreLoadingRasterChannnels=props.setAreLoadingRasterChannnels,handleRasterLayerChange=props.handleRasterLayerChange,handleRasterLayerRemove=props.handleRasterLayerRemove,disable3d=props.disable3d,globalDisable3d=props.globalDisable3d,disableChannelsIfRgbDetected=props.disableChannelsIfRgbDetected,layerIs3DIndex=props.layerIs3DIndex,setZoom=props.setZoom,setTargetX=props.setTargetX,setTargetY=props.setTargetY,setTargetZ=props.setTargetZ,setRotationX=props.setRotationX,setRotationOrbit=props.setRotationOrbit,componentHeight=props.componentHeight,componentWidth=props.componentWidth,spatialLayout=props.spatialLayout,handleImageAdd=props.handleImageAdd,enableLayerButtonsWithOneLayer=props.enableLayerButtonsWithOneLayer;var shouldShowImageLayerButton=Boolean(enableLayerButtonsWithOneLayer||(imageLayerLoaders===null||imageLayerLoaders===void 0?void 0:imageLayerLoaders.length)>1);return/*#__PURE__*/external_react_default.a.createElement(TitleInfo["a" /* default */],{title:title,isScroll:true,removeGridComponent:removeGridComponent,theme:theme,isReady:isReady},/*#__PURE__*/external_react_default.a.createElement("div",{className:"layer-controller-container",ref:ref},moleculesLayer&&/*#__PURE__*/external_react_default.a.createElement(VectorLayerController["a" /* default */],{key:"".concat(dataset,"-molecules"),label:"Molecules",layerType:"molecules",layer:moleculesLayer,handleLayerChange:setMoleculesLayer}),cellsLayer&&canShowCellVecmask&&/*#__PURE__*/external_react_default.a.createElement(VectorLayerController["a" /* default */],{key:"".concat(dataset,"-cells"),label:"Cell Segmentations",layerType:"cells",layer:cellsLayer,handleLayerChange:setCellsLayer}),rasterLayers&&rasterLayers.map(function(layer,i){var _layerMeta$metadata;var index=layer.index;var loader=imageLayerLoaders[index];var layerMeta=imageLayerMeta[index];// Could also be bitmask at the moment.
var isRaster=!(layerMeta===null||layerMeta===void 0?void 0:(_layerMeta$metadata=layerMeta.metadata)===null||_layerMeta$metadata===void 0?void 0:_layerMeta$metadata.isBitmask);var ChannelController=isRaster?layer_controller_RasterChannelController:layer_controller_BitmaskChannelController;// Set up the call back mechanism so that each layer manages
// callbacks/loading state for itself and its channels.
var setRasterLayerCallback=function setRasterLayerCallback(cb){var newRasterLayersCallbacks=Object(toConsumableArray["a" /* default */])(rasterLayersCallbacks||[]);newRasterLayersCallbacks[i]=cb;setRasterLayersCallbacks(newRasterLayersCallbacks);};var areLayerChannelsLoading=(areLoadingRasterChannnels||[])[i]||[];var setAreLayerChannelsLoading=function setAreLayerChannelsLoading(v){var newAreLoadingRasterChannnels=Object(toConsumableArray["a" /* default */])(areLoadingRasterChannnels||[]);newAreLoadingRasterChannnels[i]=v;setAreLoadingRasterChannnels(newAreLoadingRasterChannnels);};return loader&&layerMeta?/*#__PURE__*/external_react_default.a.createElement(Grid_default.a// eslint-disable-next-line react/no-array-index-key
,{key:"".concat(dataset,"-raster-").concat(index,"-").concat(i),item:true,style:{marginTop:'10px'}},/*#__PURE__*/external_react_default.a.createElement(LayerController["a" /* default */],{name:layerMeta.name,layer:layer,loader:loader,theme:theme,handleLayerChange:function handleLayerChange(v){return handleRasterLayerChange(v,i);},handleLayerRemove:function handleLayerRemove(){return handleRasterLayerRemove(i);},ChannelController:ChannelController,shouldShowTransparentColor:isRaster,shouldShowDomain:isRaster,shouldShowColormap:isRaster// Disable 3D if given explicit instructions to do so
// or if another layer is using 3D mode.
,disable3d:globalDisable3d||(disable3d||[]).indexOf(layerMeta.name)>=0||typeof layerIs3DIndex==='number'&&layerIs3DIndex!==-1&&layerIs3DIndex!==i,disabled:typeof layerIs3DIndex==='number'&&layerIs3DIndex!==-1&&layerIs3DIndex!==i,disableChannelsIfRgbDetected:disableChannelsIfRgbDetected,rasterLayersCallbacks:rasterLayersCallbacks,setRasterLayerCallback:setRasterLayerCallback,setViewState:function setViewState(_ref){var newZoom=_ref.zoom,target=_ref.target,newRotationX=_ref.rotationX,newRotationOrbit=_ref.rotationOrbit;setZoom(newZoom);setTargetX(target[0]);setTargetY(target[1]);setTargetZ(target[2]);setRotationX(newRotationX);setRotationOrbit(newRotationOrbit);},setAreLayerChannelsLoading:setAreLayerChannelsLoading,areLayerChannelsLoading:areLayerChannelsLoading,spatialHeight:componentHeight*(spatialLayout?spatialLayout.h:1)/12,spatialWidth:componentWidth*(spatialLayout?spatialLayout.w:1)/12,shouldShowRemoveLayerButton:shouldShowImageLayerButton})):null;}),shouldShowImageLayerButton?/*#__PURE__*/external_react_default.a.createElement(Grid_default.a,{item:true},/*#__PURE__*/external_react_default.a.createElement(layer_controller_ImageAddButton,{imageOptions:imageLayerMeta,handleImageAdd:handleImageAdd})):null));}));/**
 * A subscriber component for the spatial layer controller.
 * @param {object} props
 * @param {string} props.theme The current theme name.
 * @param {object} props.coordinationScopes The mapping from coordination types to coordination
 * scopes.
 * @param {function} props.removeGridComponent The callback function to pass to TitleInfo,
 * to call when the component has been removed from the grid.
 * @param {string} props.title The component title.
 * @param {Object} props.disable3d Which layers should have 3D disabled (from `raster.json` names).
 * @param {boolean} props.globalDisable3d Disable 3D for all layers. Overrides the `disable3d` prop.
 * @param {boolean} props.disableChannelsIfRgbDetected Disable channel controls if an
 * RGB image is detected i.e 3 channel 8 bit.
 * @param {boolean} props.enableLayerButtonsWithOneLayer If there is only one layer,
 * show the the layer add/remove buttons.
 */function LayerControllerSubscriber(props){var coordinationScopes=props.coordinationScopes,removeGridComponent=props.removeGridComponent,theme=props.theme,_props$title=props.title,title=_props$title===void 0?'Spatial Layers':_props$title,disable3d=props.disable3d,globalDisable3d=props.globalDisable3d,disableChannelsIfRgbDetected=props.disableChannelsIfRgbDetected,enableLayerButtonsWithOneLayer=props.enableLayerButtonsWithOneLayer;var loaders=Object(state_hooks["o" /* useLoaders */])();// Get "props" from the coordination space.
var _useCoordination=Object(state_hooks["j" /* useCoordination */])(coordination["b" /* COMPONENT_COORDINATION_TYPES */].layerController,coordinationScopes),_useCoordination2=Object(slicedToArray["a" /* default */])(_useCoordination,2),_useCoordination2$=_useCoordination2[0],dataset=_useCoordination2$.dataset,rasterLayers=_useCoordination2$.spatialImageLayer,cellsLayer=_useCoordination2$.spatialSegmentationLayer,moleculesLayer=_useCoordination2$.spatialPointLayer,_useCoordination2$2=_useCoordination2[1],setRasterLayers=_useCoordination2$2.setSpatialImageLayer,setCellsLayer=_useCoordination2$2.setSpatialSegmentationLayer,setMoleculesLayer=_useCoordination2$2.setSpatialPointLayer,setTargetX=_useCoordination2$2.setSpatialTargetX,setTargetY=_useCoordination2$2.setSpatialTargetY,setTargetZ=_useCoordination2$2.setSpatialTargetZ,setRotationX=_useCoordination2$2.setSpatialRotationX,setRotationOrbit=_useCoordination2$2.setSpatialRotationOrbit,setZoom=_useCoordination2$2.setSpatialZoom;var _useAuxiliaryCoordina=Object(state_hooks["e" /* useAuxiliaryCoordination */])(coordination["b" /* COMPONENT_COORDINATION_TYPES */].layerController,coordinationScopes),_useAuxiliaryCoordina2=Object(slicedToArray["a" /* default */])(_useAuxiliaryCoordina,2),_useAuxiliaryCoordina3=_useAuxiliaryCoordina2[0],rasterLayersCallbacks=_useAuxiliaryCoordina3.rasterLayersCallbacks,areLoadingRasterChannnels=_useAuxiliaryCoordina3.areLoadingRasterChannnels,_useAuxiliaryCoordina4=_useAuxiliaryCoordina2[1],setRasterLayersCallbacks=_useAuxiliaryCoordina4.setRasterLayersCallbacks,setAreLoadingRasterChannnels=_useAuxiliaryCoordina4.setAreLoadingRasterChannnels;// Spatial layout + window size is needed for the "re-center" button to work properly.
// Dimensions of the Spatial component can be inferred and used for resetting view state to
// a nice, centered view.
var _useComponentLayout=Object(state_hooks["h" /* useComponentLayout */])('spatial',['spatialImageLayer'],coordinationScopes),_useComponentLayout2=Object(slicedToArray["a" /* default */])(_useComponentLayout,1),spatialLayout=_useComponentLayout2[0];var layerControllerRef=Object(external_react_["useRef"])();var _useClosestVitessceCo=Object(hooks["a" /* useClosestVitessceContainerSize */])(layerControllerRef),_useClosestVitessceCo2=Object(slicedToArray["a" /* default */])(_useClosestVitessceCo,2),componentWidth=_useClosestVitessceCo2[0],componentHeight=_useClosestVitessceCo2[1];var _useWindowDimensions=Object(hooks["h" /* useWindowDimensions */])(),windowHeight=_useWindowDimensions.height,windowWidth=_useWindowDimensions.width;var _useReady=Object(hooks["e" /* useReady */])(LAYER_CONTROLLER_DATA_TYPES),_useReady2=Object(slicedToArray["a" /* default */])(_useReady,4),isReady=_useReady2[0],setItemIsReady=_useReady2[1],setItemIsNotReady=_useReady2[2],// eslint-disable-line no-unused-vars
resetReadyItems=_useReady2[3];// Reset loader progress when the dataset has changed.
Object(external_react_["useEffect"])(function(){resetReadyItems();// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);// Get data from loaders using the data hooks.
// eslint-disable-next-line no-unused-vars
var _useRasterData=Object(data_hooks["j" /* useRasterData */])(loaders,dataset,setItemIsReady,function(){},false,{setSpatialImageLayer:setRasterLayers},{spatialImageLayer:rasterLayers}),_useRasterData2=Object(slicedToArray["a" /* default */])(_useRasterData,3),raster=_useRasterData2[0],imageLayerLoaders=_useRasterData2[1],imageLayerMeta=_useRasterData2[2];Object(data_hooks["b" /* useCellsData */])(loaders,dataset,setItemIsReady,function(){},false,{setSpatialSegmentationLayer:setCellsLayer},{spatialSegmentationLayer:cellsLayer});Object(data_hooks["h" /* useMoleculesData */])(loaders,dataset,setItemIsReady,function(){},false,{setSpatialPointLayer:setMoleculesLayer},{spatialPointLayer:moleculesLayer});// useCallback prevents new functions from propogating
// changes to the underlying component.
var handleImageAdd=Object(external_react_["useCallback"])(/*#__PURE__*/function(){var _ref2=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(index){var _imageLayerMeta$index,_imageLayerMeta$index2,_imageLayerMeta$index3,_imageLayerMeta$index4,_imageLayerMeta$index5;var loader,newChannels,newLayer,newLayers;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:loader=imageLayerLoaders[index];_context.next=3;return Object(spatial_utils["c" /* initializeLayerChannels */])(loader,(rasterLayers[index]||{}).use3d);case 3:newChannels=_context.sent;newLayer=Object(objectSpread2["a" /* default */])({index:index,modelMatrix:(_imageLayerMeta$index=imageLayerMeta[index])===null||_imageLayerMeta$index===void 0?void 0:(_imageLayerMeta$index2=_imageLayerMeta$index.metadata)===null||_imageLayerMeta$index2===void 0?void 0:(_imageLayerMeta$index3=_imageLayerMeta$index2.transform)===null||_imageLayerMeta$index3===void 0?void 0:_imageLayerMeta$index3.matrix},spatial_constants["f" /* DEFAULT_RASTER_LAYER_PROPS */],{channels:newChannels,type:((_imageLayerMeta$index4=imageLayerMeta[index])===null||_imageLayerMeta$index4===void 0?void 0:(_imageLayerMeta$index5=_imageLayerMeta$index4.metadata)===null||_imageLayerMeta$index5===void 0?void 0:_imageLayerMeta$index5.isBitmask)?'bitmask':'raster'});newLayers=[].concat(Object(toConsumableArray["a" /* default */])(rasterLayers),[newLayer]);setRasterLayers(newLayers);case 7:case"end":return _context.stop();}}},_callee);}));return function(_x){return _ref2.apply(this,arguments);};}(),[imageLayerLoaders,imageLayerMeta,rasterLayers,setRasterLayers]);var handleRasterLayerChange=Object(external_react_["useCallback"])(function(newLayer,i){var newLayers=Object(toConsumableArray["a" /* default */])(rasterLayers);newLayers[i]=newLayer;setRasterLayers(newLayers);},[rasterLayers,setRasterLayers]);var handleRasterLayerRemove=Object(external_react_["useCallback"])(function(i){var newLayers=Object(toConsumableArray["a" /* default */])(rasterLayers);newLayers.splice(i,1);setRasterLayers(newLayers);},[rasterLayers,setRasterLayers]);var hasNoBitmask=(imageLayerMeta.length?imageLayerMeta:[{metadata:{isBitmask:true}}]).every(function(l){var _l$metadata;return!(l===null||l===void 0?void 0:(_l$metadata=l.metadata)===null||_l$metadata===void 0?void 0:_l$metadata.isBitmask);});// Only want to show vector cells controller if there is no bitmask
var canShowCellVecmask=hasNoBitmask;var layerIs3DIndex=(rasterLayers===null||rasterLayers===void 0?void 0:rasterLayers.findIndex)&&rasterLayers.findIndex(function(layer){return layer.use3d;});return/*#__PURE__*/external_react_default.a.createElement(LayerControllerMemoized,{ref:layerControllerRef,title:title,removeGridComponent:removeGridComponent,theme:theme,isReady:isReady,moleculesLayer:moleculesLayer,dataset:dataset,setMoleculesLayer:setMoleculesLayer,cellsLayer:cellsLayer,canShowCellVecmask:canShowCellVecmask,setCellsLayer:setCellsLayer,rasterLayers:rasterLayers,imageLayerLoaders:imageLayerLoaders,imageLayerMeta:imageLayerMeta,rasterLayersCallbacks:rasterLayersCallbacks,setRasterLayersCallbacks:setRasterLayersCallbacks,areLoadingRasterChannnels:areLoadingRasterChannnels,setAreLoadingRasterChannnels:setAreLoadingRasterChannnels,handleRasterLayerChange:handleRasterLayerChange,handleRasterLayerRemove:handleRasterLayerRemove,disable3d:disable3d,globalDisable3d:globalDisable3d,layerIs3DIndex:layerIs3DIndex,disableChannelsIfRgbDetected:disableChannelsIfRgbDetected,enableLayerButtonsWithOneLayer:enableLayerButtonsWithOneLayer,setZoom:setZoom,setTargetX:setTargetX,setTargetY:setTargetY,setTargetZ:setTargetZ,setRotationX:setRotationX,setRotationOrbit:setRotationOrbit// Fall back to window for height and width.
,componentHeight:componentHeight||windowHeight,componentWidth:componentWidth||windowWidth,spatialLayout:spatialLayout,handleImageAdd:handleImageAdd});}/* harmony default export */ var layer_controller_LayerControllerSubscriber = __webpack_exports__["a"] = (LayerControllerSubscriber);

/***/ }),
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Lens");

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionSummary");

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionDetails");

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RemoveCircle");

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Accordion");

/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
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
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayerControllerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerControllerSubscriber", function() { return _LayerControllerSubscriber__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _LayerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(143);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerController", function() { return _LayerController__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _VectorLayerController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(126);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VectorLayerController", function() { return _VectorLayerController__WEBPACK_IMPORTED_MODULE_2__["a"]; });



/***/ })
/******/ ]);
//# sourceMappingURL=layer-controller.js.map