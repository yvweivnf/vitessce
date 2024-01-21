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
/******/ 	return __webpack_require__(__webpack_require__.s = 174);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return TILE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DATA_TEXTURE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MIN_ROW_AGG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return MAX_ROW_AGG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return COLOR_BAR_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AXIS_LABEL_TEXT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return AXIS_TITLE_TEXT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AXIS_MIN_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AXIS_MAX_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AXIS_MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AXIS_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return THEME_TO_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AXIS_FONT_FAMILY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return PIXELATED_TEXTURE_PARAMETERS; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1__);
var _PIXELATED_TEXTURE_PA;// eslint-disable-line import/no-extraneous-dependencies
// Image texture dimensions
var TILE_SIZE=4096;// Reshaped data texture dimensions
var DATA_TEXTURE_SIZE=4096;var MIN_ROW_AGG=1;var MAX_ROW_AGG=16;var COLOR_BAR_SIZE=20;var AXIS_LABEL_TEXT_SIZE=11;var AXIS_TITLE_TEXT_SIZE=15;var AXIS_MIN_SIZE=12;var AXIS_MAX_SIZE=120;var AXIS_MARGIN=3;var AXIS_PADDING=10;var THEME_TO_TEXT_COLOR={dark:[224,224,224],light:[64,64,64]};var AXIS_FONT_FAMILY="-apple-system, 'Helvetica Neue', Arial, sans-serif";var PIXELATED_TEXTURE_PARAMETERS=(_PIXELATED_TEXTURE_PA={},Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_PIXELATED_TEXTURE_PA,_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TEXTURE_MIN_FILTER,_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.NEAREST),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_PIXELATED_TEXTURE_PA,_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TEXTURE_MAG_FILTER,_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.NEAREST),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_PIXELATED_TEXTURE_PA,_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TEXTURE_WRAP_S,_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.CLAMP_TO_EDGE),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_PIXELATED_TEXTURE_PA,_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.TEXTURE_WRAP_T,_luma_gl_constants__WEBPACK_IMPORTED_MODULE_1___default.a.CLAMP_TO_EDGE),_PIXELATED_TEXTURE_PA);

/***/ }),
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return callbackOnKeyPress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return colorArrayToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return colorStringToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getLevelTooltipText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isEqualOrPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return tryRenamePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PATH_SEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return pathToKey; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Execute a callback function based on a keypress event.
 * @param {object} event The event from onKeyPress
 * @param {string} key The key identifier to match.
 * @param {Function} callback The function to execute.
 */function callbackOnKeyPress(event,key,callback){if(event.key===key){event.preventDefault();callback();}}/**
 * Convert an array of [r, g, b] numbers to a hex color.
 * @param {number[]} rgbArray The color [r, g, b] array.
 * @returns {string} The hex color as a string.
 */function colorArrayToString(rgbArray){return tinycolor2__WEBPACK_IMPORTED_MODULE_1___default()({r:rgbArray[0],g:rgbArray[1],b:rgbArray[2]}).toHexString();}/**
 * Convert a string color representation to an array of [r,g,b].
 * @param {string} colorString The color as a string.
 * @returns {number[]} The color as an array.
 */function colorStringToArray(colorString){var colorObj=tinycolor2__WEBPACK_IMPORTED_MODULE_1___default()(colorString).toRgb();return[colorObj.r,colorObj.g,colorObj.b];}/**
 * Get a string of help text for coloring a particular hierarchy level.
 * @param {integer} i The level. 1 for cluster, 2 for subcluster, etc.
 * @returns {string} The tooltip text for coloring the level.
 */function getLevelTooltipText(i){if(i===0)return'Color by hierarchy';if(i<=2){var subs=function subs(j){return'sub'.repeat(j);};return"Color by ".concat(subs(i-1),"cluster");}return"Color by cluster level ".concat(i);}function isEqualOrPrefix(targetPath,testPath){if(targetPath.length<=testPath.length){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(targetPath,testPath.slice(0,targetPath.length));}return false;}function tryRenamePath(targetPath,testPath,nextTargetPath){if(isEqualOrPrefix(targetPath,testPath)){return[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nextTargetPath),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(testPath.slice(nextTargetPath.length)));}return testPath;}var PATH_SEP='___';function pathToKey(path){return path.join(PATH_SEP);}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export nodeToSet */
/* unused harmony export nodeToHeight */
/* unused harmony export getNodeLength */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return treeFindNodeByNamePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return nodeTransform; });
/* unused harmony export nodeTransformAll */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return nodeAppendChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return nodePrependChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return nodeInsertChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return treeToUnion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return treeToIntersection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return treeToComplement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return nodeToLevelDescendantNamePaths; });
/* unused harmony export treeExport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return treeExportLevelZeroNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return treeExportSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return treeInitialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return nodeToRenderProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return treeToCellColorsBySetNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return treeToObjectsBySetNames; });
/* unused harmony export treeToCellPolygonsBySetNames */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return treeToSetSizesBySetNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filterNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return treeToExpectedCheckedLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return treesConflict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initializeCellSetColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCellSetPolygons; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67);
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_turf_helpers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _turf_centroid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(100);
/* harmony import */ var _turf_centroid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_turf_centroid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var concaveman__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(101);
/* harmony import */ var concaveman__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(concaveman__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24);
/* eslint-disable no-underscore-dangle *//**
 * Alias for the uuidv4 function to make code more readable.
 * @returns {string} UUID.
 */function generateKey(){return uuid_v4__WEBPACK_IMPORTED_MODULE_3___default()();}/**
 * Get the set associated with a particular node.
 * Recursive.
 * @param {object} currNode A node object.
 * @returns {array} The array representing the set associated with the node.
 */function nodeToSet(currNode){if(!currNode){return[];}if(!currNode.children){return currNode.set||[];}return currNode.children.flatMap(function(c){return nodeToSet(c);});}/**
 * Get the height of a node (the number of levels to reach a leaf).
 * @param {object} currNode A node object.
 * @param {number} level The level that the height will be computed relative to. By default, 0.
 * @returns {number} The height. If the node has a .children property,
 * then the minimum value returned is 1.
 */function nodeToHeight(currNode){var level=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;if(!currNode.children){return level;}var newLevel=level+1;var childrenHeights=currNode.children.map(function(c){return nodeToHeight(c,newLevel);});return Math.max.apply(Math,Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(childrenHeights).concat([newLevel]));}/**
 * Get the size associated with a particular node.
 * Recursive.
 * @param {object} currNode A node object.
 * @returns {number} The length of all the node's children
 */function getNodeLength(currNode){if(!currNode){return 0;}if(!currNode.children){var _currNode$set;return((_currNode$set=currNode.set)===null||_currNode$set===void 0?void 0:_currNode$set.length)||0;}return currNode.children.reduce(function(acc,curr){return acc+getNodeLength(curr);},0);}/**
 * Find a node with a matching name path, relative to a particular node.
 * @param {object} node A node object.
 * @param {string[]} path The name path for the node of interest.
 * @param {number} currLevelIndex The index of the current hierarchy level.
 * @returns {object|null} A matching node object, or null if none is found.
 */function nodeFindNodeByNamePath(node,path,currLevelIndex){var currNodeName=path[currLevelIndex];if(node.name===currNodeName){if(currLevelIndex===path.length-1){return node;}if(node.children){var foundNodes=node.children.map(function(child){return nodeFindNodeByNamePath(child,path,currLevelIndex+1);}).filter(Boolean);if(foundNodes.length===1){return foundNodes[0];}}}return null;}/**
 * Find a node with a matching name path, relative to the whole tree.
 * @param {object} currTree A tree object.
 * @param {string[]} targetNamePath The name path for the node of interest.
 * @returns {object|null} A matching node object, or null if none is found.
 */function treeFindNodeByNamePath(currTree,targetNamePath){var foundNodes=currTree.tree.map(function(levelZeroNode){return nodeFindNodeByNamePath(levelZeroNode,targetNamePath,0);}).filter(Boolean);if(foundNodes.length===1){return foundNodes[0];}return null;}/**
 * Transform a node object using a transform function.
 * @param {object} node A node object.
 * @param {function} predicate Returns true if a node matches a condition of interest.
 * @param {function} transform Takes the node matching the predicate as input, returns
 * a transformed version of the node.
 * @param {array} transformedPaths This array parameter is mutated. The path of
 * each transformed node is appended to this array.
 * @param {string[]} The current path of the node being updated, used internally
 * during recursion.
 * @returns {object} The updated node.
 */function nodeTransform(node,predicate,transform,transformedPaths,currPath){var newPath;if(!currPath){newPath=[node.name];}else{newPath=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(currPath);}if(predicate(node,newPath)){transformedPaths.push(newPath);return transform(node,newPath);}if(node.children){return Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},node,{children:node.children.map(function(child){return nodeTransform(child,predicate,transform,transformedPaths,newPath.concat([child.name]));})});}return node;}/**
 * Transform many node objects using a transform function.
 * @param {object} node A node object.
 * @param {function} predicate Returns true if a node matches a condition of interest.
 * @param {function} transform Takes the node matching the predicate as input, returns
 * a transformed version of the node.
 * @param {array} transformedPaths This array parameter is mutated. The path of
 * each transformed node is appended to this array.
 * @param {string[]} The current path of the node being updated, used internally
 * during recursion.
 * @returns {object} The updated node.
 */function nodeTransformAll(node,predicate,transform,transformedPaths,currPath){var newPath;if(!currPath){newPath=[node.name];}else{newPath=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(currPath);}var newNode=node;if(predicate(node,newPath)){transformedPaths.push(newPath);newNode=transform(node,newPath);}if(node.children){return Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},newNode,{children:newNode.children.map(function(child){return nodeTransformAll(child,predicate,transform,transformedPaths,newPath.concat([child.name]));})});}return newNode;}/**
 * Append a child to a parent node.
 * @param {object} currNode A node object.
 * @param {object} newChild The child node object.
 * @returns {object} The updated node.
 */function nodeAppendChild(currNode,newChild){return Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},currNode,{children:[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(currNode.children),[newChild])});}/**
 * Prepend a child to a parent node.
 * @param {object} currNode A node object.
 * @param {object} newChild The child node object.
 * @returns {object} The updated node.
 */function nodePrependChild(currNode,newChild){return Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},currNode,{children:[newChild].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(currNode.children))});}/**
 * Insert a child to a parent node.
 * @param {object} currNode A node object.
 * @param {*} newChild The child node object.
 * @param {*} insertIndex The index at which to insert the child.
 * @returns {object} The updated node.
 */function nodeInsertChild(currNode,newChild,insertIndex){var newChildren=Array.from(currNode.children);newChildren.splice(insertIndex,0,newChild);return Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},currNode,{children:newChildren});}/**
 * Get an array representing the union of the sets of checked nodes.
 * @param {object} currTree A tree object.
 * @returns {array} An array representing the union of the sets of checked nodes.
 */function treeToUnion(currTree,checkedPaths){var nodes=checkedPaths.map(function(path){return treeFindNodeByNamePath(currTree,path);});var nodeSets=nodes.map(function(node){return nodeToSet(node).map(function(_ref){var _ref2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref,1),cellId=_ref2[0];return cellId;});});return nodeSets.reduce(function(a,h){return a.concat(h.filter(function(hEl){return!a.includes(hEl);}));},nodeSets[0]||[]);}/**
 * Get an array representing the intersection of the sets of checked nodes.
 * @param {object} currTree A tree object.
 * @returns {array} An array representing the intersection of the sets of checked nodes.
 */function treeToIntersection(currTree,checkedPaths){var nodes=checkedPaths.map(function(path){return treeFindNodeByNamePath(currTree,path);});var nodeSets=nodes.map(function(node){return nodeToSet(node).map(function(_ref3){var _ref4=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref3,1),cellId=_ref4[0];return cellId;});});return nodeSets.reduce(function(a,h){return h.filter(function(hEl){return a.includes(hEl);});},nodeSets[0]||[]);}/**
 * Get an array representing the complement of the union of the sets of checked nodes.
 * @param {object} currTree
 * @returns {array} An array representing the complement of the
 * union of the sets of checked nodes.
 */function treeToComplement(currTree,checkedPaths,items){var primaryUnion=treeToUnion(currTree,checkedPaths);return items.filter(function(el){return!primaryUnion.includes(el);});}/**
 * Get an flattened array of descendants at a particular relative
 * level of interest.
 * @param {object} node A node object.
 * @param {number} level The relative level of interest.
 * 0 for this node's children, 1 for grandchildren, etc.
 * @param {boolean} stopEarly Should a node be returned early if no children exist?
 * @returns {object[]} An array of descendants at the specified level,
 * where the level is relative to the node.
 */function nodeToLevelDescendantNamePaths(node,level,prevPath){var stopEarly=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;if(!node.children){if(!stopEarly){return null;}return[[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(prevPath),[node.name])];}if(level===0){return[[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(prevPath),[node.name])];}return node.children.flatMap(function(c){return nodeToLevelDescendantNamePaths(c,level-1,[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(prevPath),[node.name]),stopEarly);}).filter(Boolean);}/**
 * Export the tree by clearing tree state and all node states.
 * @param {object} currTree A tree object.
 * @returns {object} Tree object with tree and node state removed.
 */function treeExport(currTree,datatype){return{version:_constants__WEBPACK_IMPORTED_MODULE_10__[/* HIERARCHICAL_SCHEMAS */ "c"][datatype].latestVersion,datatype:datatype,tree:currTree.tree};}/**
 * Export the tree by clearing tree state and all node states,
 * and filter so that only the level zero node of interest is included.
 * @param {object} currTree A tree object.
 * @param {string} nodePath The path of the node of interest.
 * @param {string} dataType Datatype (i.e cell sets)
 * @param {Array} cellSetColors Array of objects of cell set colors and paths
 * @param {string} theme "light" or "dark" for the vitessce theme
 * @returns {object} { treeToExport, nodeName }
 * Tree with one level zero node, and with state removed.
 */function treeExportLevelZeroNode(currTree,nodePath,datatype,cellSetColors,theme){var node=treeFindNodeByNamePath(currTree,nodePath);var nodeWithColors=nodeTransformAll(node,function(){return true;},function(n,nPath){var _cellSetColors$find$c,_cellSetColors$find;var nodeColor=(_cellSetColors$find$c=cellSetColors===null||cellSetColors===void 0?void 0:(_cellSetColors$find=cellSetColors.find(function(c){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(c.path,nPath);}))===null||_cellSetColors$find===void 0?void 0:_cellSetColors$find.color)!==null&&_cellSetColors$find$c!==void 0?_cellSetColors$find$c:Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* getDefaultColor */ "o"])(theme);return Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},n,{color:nodeColor.slice(0,3)});},[]);var treeWithOneLevelZeroNode=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},currTree,{tree:[nodeWithColors]});return{treeToExport:treeExport(treeWithOneLevelZeroNode,datatype),nodeName:node.name};}/**
 * Prepare the set of a node of interest for export.
 * @param {object} currTree A tree object.
 * @param {string} nodeKey The key of the node of interest.
 * @returns {object} { setToExport, nodeName } The set as an array.
 */function treeExportSet(currTree,nodePath){var node=treeFindNodeByNamePath(currTree,nodePath);return{setToExport:nodeToSet(node),nodeName:node.name};}/**
 * Get an empty tree, with a default tree state.
 * @param {string} datatype The type of sets that this tree contains.
 * @returns {object} Empty tree.
 */function treeInitialize(datatype){return{version:_constants__WEBPACK_IMPORTED_MODULE_10__[/* HIERARCHICAL_SCHEMAS */ "c"][datatype].latestVersion,datatype:datatype,tree:[]};}/**
 * For convenience, get an object with information required
 * to render a node as a component.
 * @param {object} node A node to be rendered.
 * @returns {object} An object containing properties required
 * by the TreeNode render functions.
 */function nodeToRenderProps(node,path,cellSetColor){var _cellSetColor$find;var level=path.length-1;return{title:node.name,nodeKey:Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* pathToKey */ "g"])(path),path:path,size:getNodeLength(node),color:cellSetColor===null||cellSetColor===void 0?void 0:(_cellSetColor$find=cellSetColor.find(function(d){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(d.path,path);}))===null||_cellSetColor$find===void 0?void 0:_cellSetColor$find.color,level:level,isLeaf:(!node.children||node.children.length===0)&&Boolean(node.set),height:nodeToHeight(node)};}/**
 * Using a color and a probability, mix the color with an "uncertainty" color,
 * for example, gray.
 * Reference: https://github.com/bgrins/TinyColor/blob/80f7225029c428c0de0757f7d98ac15f497bee57/tinycolor.js#L701
 * @param {number[]} originalColor The color assignment for the class.
 * @param {number} p The mixing amount, or level certainty in the originalColor classification,
 * between 0 and 1.
 * @param {number[]} mixingColor The color with which to mix. By default, [128, 128, 128] gray.
 * @returns {number[]} Returns the color after mixing.
 */function colorMixWithUncertainty(originalColor,p){var mixingColor=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[128,128,128];return[(originalColor[0]-mixingColor[0])*p+mixingColor[0],(originalColor[1]-mixingColor[1])*p+mixingColor[1],(originalColor[2]-mixingColor[2])*p+mixingColor[2]];}/**
 * Given a tree with state, get the cellIds and cellColors,
 * based on the nodes currently marked as "visible".
 * @param {object} currTree A tree object.
 *  @param {array} selectedNamePaths Array of arrays of strings,
 * representing set "paths".
 * @param {object[]} cellSetColor Array of objects with the
 * properties `path` and `color`.
 * @param {string} theme "light" or "dark" for the vitessce theme
 * @returns {array} Tuple of [cellIds, cellColors]
 * where cellIds is an array of strings,
 * and cellColors is an object mapping cellIds to color [r,g,b] arrays.
 */function treeToCellColorsBySetNames(currTree,selectedNamePaths,cellSetColor,theme){var cellColorsArray=[];selectedNamePaths.forEach(function(setNamePath){var node=treeFindNodeByNamePath(currTree,setNamePath);if(node){var _cellSetColor$find2;var nodeSet=nodeToSet(node);var nodeColor=(cellSetColor===null||cellSetColor===void 0?void 0:(_cellSetColor$find2=cellSetColor.find(function(d){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(d.path,setNamePath);}))===null||_cellSetColor$find2===void 0?void 0:_cellSetColor$find2.color)||Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* getDefaultColor */ "o"])(theme);cellColorsArray=[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(cellColorsArray),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nodeSet.map(function(_ref5){var _ref6=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref5,2),cellId=_ref6[0],prob=_ref6[1];return[cellId,lodash_isNil__WEBPACK_IMPORTED_MODULE_4___default()(prob)?nodeColor:colorMixWithUncertainty(nodeColor,prob)];})));}});return new Map(cellColorsArray);}/**
 * Given a tree with state, get an array of
 * objects with cellIds and cellColors,
 * based on the nodes currently marked as "visible".
 * @param {object} currTree A tree object.
 * @param {array} selectedNamePaths Array of arrays of strings,
 * representing set "paths".
 * @param {object[]} setColor Array of objects with the
 * properties `path` and `color`
 * @param {string} theme "light" or "dark" for the vitessce theme.
 * @returns {object[]} Array of objects with properties
 * `obsId`, `name`, and `color`.
 */function treeToObjectsBySetNames(currTree,selectedNamePaths,setColor,theme){var cellsArray=[];var _loop=function _loop(i){var setNamePath=selectedNamePaths[i];var node=treeFindNodeByNamePath(currTree,setNamePath);if(node){var _setColor$find;var nodeSet=nodeToSet(node);var nodeColor=(setColor===null||setColor===void 0?void 0:(_setColor$find=setColor.find(function(d){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(d.path,setNamePath);}))===null||_setColor$find===void 0?void 0:_setColor$find.color)||Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* getDefaultColor */ "o"])(theme);cellsArray=cellsArray.concat(nodeSet.map(function(_ref7){var _ref8=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref7,1),cellId=_ref8[0];return{obsId:cellId,name:node.name,color:nodeColor};}));}};for(var i=0;i<selectedNamePaths.length;i+=1){_loop(i);}return cellsArray;}function treeToCellPolygonsBySetNames(currTree,cells,mapping,selectedNamePaths,cellSetColor,theme){var cellSetPolygons=[];selectedNamePaths.forEach(function(setNamePath){var node=treeFindNodeByNamePath(currTree,setNamePath);if(node){var _cellSetColor$find3;var nodeSet=nodeToSet(node);var nodeColor=(cellSetColor===null||cellSetColor===void 0?void 0:(_cellSetColor$find3=cellSetColor.find(function(d){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(d.path,setNamePath);}))===null||_cellSetColor$find3===void 0?void 0:_cellSetColor$find3.color)||Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* getDefaultColor */ "o"])(theme);var cellPositions=nodeSet.map(function(_ref9){var _cells$cellId,_cells$cellId2;var _ref10=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref9,1),cellId=_ref10[0];return[(_cells$cellId=cells[cellId])===null||_cells$cellId===void 0?void 0:_cells$cellId.mappings[mapping][0],-((_cells$cellId2=cells[cellId])===null||_cells$cellId2===void 0?void 0:_cells$cellId2.mappings[mapping][1])];}).filter(function(cell){return cell.every(function(i){return typeof i==='number';});});if(cellPositions.length>2){var points=Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_7__["featureCollection"])(cellPositions.map(_turf_helpers__WEBPACK_IMPORTED_MODULE_7__["point"]));var concavity=Infinity;var hullCoords=concaveman__WEBPACK_IMPORTED_MODULE_9___default()(cellPositions,concavity);if(hullCoords){var centroidCoords=_turf_centroid__WEBPACK_IMPORTED_MODULE_8___default()(points).geometry.coordinates;cellSetPolygons.push({path:setNamePath,name:setNamePath[setNamePath.length-1],hull:hullCoords,color:nodeColor,centroid:centroidCoords});}}}});return cellSetPolygons;}/**
 * Given a tree with state, get the sizes of the
 * sets currently marked as "visible".
 * @param {object} currTree A tree object.
 * @param {array} selectedNamePaths Array of arrays of strings,
 * representing set "paths".
 * @param {object[]} setColor Array of objects with the
 * properties `path` and `color`.
 * @param {string} theme "light" or "dark" for the vitessce theme
 * @returns {object[]} Array of objects
 * with the properties `name`, `size`, `key`,
 * and `color`.
 */function treeToSetSizesBySetNames(currTree,selectedNamePaths,setColor,theme){var sizes=[];selectedNamePaths.forEach(function(setNamePath){var node=treeFindNodeByNamePath(currTree,setNamePath);if(node){var _setColor$find2;var nodeSet=nodeToSet(node);var nodeColor=(setColor===null||setColor===void 0?void 0:(_setColor$find2=setColor.find(function(d){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(d.path,setNamePath);}))===null||_setColor$find2===void 0?void 0:_setColor$find2.color)||Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* getDefaultColor */ "o"])(theme);sizes.push({key:generateKey(),name:node.name,size:nodeSet.length,color:nodeColor});}});return sizes;}/**
 * Find and remove a node from the descendants of the current node.
 * @param {object} node A node to search on.
 * @param {array} prevPath Path of the current node to be searched.
 * @param {array} filterPath The path sought.
 * @returns {object} A new node without a node at filterPath.
 */function filterNode(node,prevPath,filterPath){if(lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()([].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(prevPath),[node.name]),filterPath)){return null;}if(!node.children){return node;}return Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},node,{children:node.children.map(function(c){return filterNode(c,[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(prevPath),[node.name]),filterPath);}).filter(Boolean)});}function treeToExpectedCheckedLevel(currTree,checkedPaths){var result=null;if(currTree){currTree.tree.forEach(function(lzn){var levelZeroPath=[lzn.name];var height=nodeToHeight(lzn);lodash_range__WEBPACK_IMPORTED_MODULE_6___default()(height).forEach(function(i){var levelIndex=i+1;var levelNodePaths=nodeToLevelDescendantNamePaths(lzn,levelIndex,[],true);if(lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(levelNodePaths,checkedPaths)){result={levelZeroPath:levelZeroPath,levelIndex:levelIndex};}});});}return result;}function treesConflict(cellSets,testCellSets){var paths=[];var testPaths=[];var hasConflict=false;function getPaths(node,prevPath){paths.push([].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(prevPath),[node.name]));if(node.children){node.children.forEach(function(c){return getPaths(c,[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(prevPath),[node.name]));});}}cellSets.tree.forEach(function(lzn){return getPaths(lzn,[]);});function getTestPaths(node,prevPath){testPaths.push([].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(prevPath),[node.name]));if(node.children){node.children.forEach(function(c){return getPaths(c,[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(prevPath),[node.name]));});}}testCellSets.tree.forEach(function(lzn){return getTestPaths(lzn,[]);});testPaths.forEach(function(testPath){if(paths.find(function(p){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(p,testPath);})){hasConflict=true;}});return hasConflict;}function initializeCellSetColor(cellSets,cellSetColor){var nextCellSetColor=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(cellSetColor||[]);var nodeCountPerTreePerLevel=cellSets.tree.map(function(tree){return Array.from({length:nodeToHeight(tree)+1// Need to add one because its an array.
}).fill(0);});function processNode(node,prevPath,hierarchyLevel,treeIndex){var index=nodeCountPerTreePerLevel[treeIndex][hierarchyLevel];var nodePath=[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(prevPath),[node.name]);var nodeColor=nextCellSetColor.find(function(d){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(d.path,nodePath);});if(!nodeColor){// If there is a color for the node specified via the cell set tree,
// then use it. Otherwise, use a color from the default color palette.
var nodeColorArray=node.color?node.color:_utils__WEBPACK_IMPORTED_MODULE_11__[/* PALETTE */ "c"][index%_utils__WEBPACK_IMPORTED_MODULE_11__[/* PALETTE */ "c"].length];nextCellSetColor.push({path:nodePath,color:nodeColorArray});}nodeCountPerTreePerLevel[treeIndex][hierarchyLevel]+=1;if(node.children){node.children.forEach(function(c){return processNode(c,nodePath,hierarchyLevel+1,treeIndex);});}}cellSets.tree.forEach(function(lzn,treeIndex){return processNode(lzn,[],0,treeIndex);});return nextCellSetColor;}function getCellSetPolygons(params){var cells=params.cells,mapping=params.mapping,cellSets=params.cellSets,cellSetSelection=params.cellSetSelection,cellSetColor=params.cellSetColor,theme=params.theme;if(cellSetSelection&&cellSetSelection.length>0&&cellSets&&cells){return treeToCellPolygonsBySetNames(cellSets,cells,mapping,cellSetSelection,cellSetColor,theme);}return[];}

/***/ }),
/* 28 */,
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
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@deck.gl/layers");

/***/ }),
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
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),
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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useStyles; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
var useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function(theme){return{box:{boxSizing:'border-box'},checkbox:{padding:'3px',color:theme.palette.primaryForeground,'&:checked':{color:theme.palette.primaryForeground},'& input':{height:'100%'}},slider:{color:theme.palette.primaryForeground,minWidth:'60px',padding:'10px 0 10px 0'},sliderValueLabel:{'& span':{'& span':{color:theme.palette.primaryBackground}}},tableContainer:{overflow:'hidden',overflowX:'hidden !important'},labelCell:{padding:'2px 8px 2px 16px'},inputCell:{padding:'2px 16px 2px 8px',overflow:'visible'},select:{'& select':{fontSize:'.875rem'}},selectRoot:{padding:0,height:'auto'}};});

/***/ }),
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
/* 55 */
/***/ (function(module, exports) {

module.exports = require("lodash/clamp");

/***/ }),
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
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionSelect; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
function OptionSelect(props){var _props$classes=props.classes,classesProp=_props$classes===void 0?{}:_props$classes;var classes=Object(_styles__WEBPACK_IMPORTED_MODULE_3__[/* useStyles */ "a"])();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_2___default.a,Object.assign({native:true,disableUnderline:true},props,{classes:Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({root:classes.selectRoot},classesProp)}));}

/***/ }),
/* 64 */,
/* 65 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDropDown");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDropUp");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("@turf/helpers");

/***/ }),
/* 68 */,
/* 69 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("deck.gl");

/***/ }),
/* 71 */,
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),
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
/* 86 */
/***/ (function(module, exports) {

module.exports = require("lodash/isNil");

/***/ }),
/* 87 */,
/* 88 */
/***/ (function(module, exports) {

module.exports = require("tinycolor2");

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tooltip2D; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/**
 * A tooltip component that also incorporates a crosshair element.
 * @param {object} props
 * @param {string} props.parentUuid A unique identifier corresponding to the plot
 * with which this scatterplot is associated.
 * @param {string} props.sourceUuid A unique identifier corresponding to the plot
 * from which this tooltip originated.
 * @param {number} props.x The x coordinate for the tooltip.
 * @param {number} props.y The y coordinate for the tooltip.
 * @param {number} props.parentWidth The width of the parent plot container element.
 * @param {number} props.parentHeight The height of the parent plot container element.
 * @param {React.Component} props.children The tooltip contents as a react component.
 */function Tooltip2D(props){var parentUuid=props.parentUuid,sourceUuid=props.sourceUuid,x=props.x,y=props.y,parentWidth=props.parentWidth,parentHeight=props.parentHeight,children=props.children;// Check if out of bounds.
if(x<0||x>parentWidth||y<0||y>parentHeight){return null;}// Show tooltip or crosshair?
var isTooltipVisible=parentUuid===sourceUuid;var crosshairWidth=1;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,isTooltipVisible?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{x:x,y:y,parentWidth:parentWidth,parentHeight:parentHeight},children):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,x!==null?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"cell-emphasis-crosshair",style:{left:"".concat(x-crosshairWidth/2,"px"),top:0,width:"".concat(crosshairWidth,"px"),height:"".concat(parentHeight,"px")}}):null,y!==null?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"cell-emphasis-crosshair",style:{left:0,top:"".concat(y-crosshairWidth/2,"px"),width:"".concat(parentWidth,"px"),height:"".concat(crosshairWidth,"px")}}):null));}

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipContent; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function TooltipContent(props){var info=props.info;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody",null,Object.entries(info).map(function(_ref){var _ref2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref,2),key=_ref2[0],value=_ref2[1];return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr",{key:key},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th",null,key),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td",null,value));})));}

/***/ }),
/* 91 */,
/* 92 */,
/* 93 */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"$id\":\"https://github.com/vitessce/vitessce/#cell-sets-tabular\",\"title\":\"Vitessce cell sets data, tabular format\",\"definitions\":{\"colorArray\":{\"type\":\"array\",\"items\":{\"type\":\"integer\",\"minimum\":0,\"maximum\":255},\"minItems\":3,\"maxItems\":3}},\"type\":\"array\",\"items\":{\"type\":\"object\",\"additionalProperties\":false,\"required\":[\"groupName\",\"setName\",\"obsId\"],\"properties\":{\"groupName\":{\"type\":\"string\"},\"setName\":{\"type\":\"string\"},\"setColor\":{\"$ref\":\"#/definitions/colorArray\"},\"obsId\":{\"type\":\"string\"},\"predictionScore\":{\"oneOf\":[{\"type\":\"number\",\"minimum\":0,\"maximum\":1},{\"type\":\"null\"}]}}}}");

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatmapCompositeTextLayer; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31);
/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_layers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _heatmap_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* eslint-disable no-underscore-dangle */// eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-line import/no-extraneous-dependencies
var HeatmapCompositeTextLayer=/*#__PURE__*/function(_CompositeLayer){Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(HeatmapCompositeTextLayer,_CompositeLayer);var _super=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(HeatmapCompositeTextLayer);function HeatmapCompositeTextLayer(){Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this,HeatmapCompositeTextLayer);return _super.apply(this,arguments);}Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(HeatmapCompositeTextLayer,[{key:"_renderAxisTopLayers",value:function _renderAxisTopLayers(){var _this$props=this.props,axisTopLabelData=_this$props.axisTopLabelData,matrixLeft=_this$props.matrixLeft,width=_this$props.width,matrixWidth=_this$props.matrixWidth,viewWidth=_this$props.viewWidth,theme=_this$props.theme,targetX=_this$props.targetX,targetY=_this$props.targetY,axisTopTitle=_this$props.axisTopTitle,cellWidth=_this$props.cellWidth,axisOffsetTop=_this$props.axisOffsetTop,scaleFactor=_this$props.scaleFactor,hideTopLabels=_this$props.hideTopLabels;var showAxisTopLabels=cellWidth>=_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_LABEL_TEXT_SIZE */ "b"];var axisLabelTop=targetY+(axisOffsetTop-_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_MARGIN */ "c"])/2/scaleFactor;return hideTopLabels?[]:[new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_5__["TextLayer"]({id:'axisTopLabels',coordinateSystem:_deck_gl_core__WEBPACK_IMPORTED_MODULE_4__["COORDINATE_SYSTEM"].CARTESIAN,data:axisTopLabelData,getText:function getText(d){return d[1];},getPosition:function getPosition(d){return[matrixLeft+(d[0]+0.5)/width*matrixWidth,axisLabelTop];},getTextAnchor:'start',getColor:function getColor(){return _heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* THEME_TO_TEXT_COLOR */ "m"][theme];},getSize:showAxisTopLabels?_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_LABEL_TEXT_SIZE */ "b"]:0,getAngle:75,fontFamily:_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_FONT_FAMILY */ "a"],updateTriggers:{getPosition:[axisLabelTop,matrixLeft,matrixWidth,viewWidth],getSize:[showAxisTopLabels],getColor:[theme]}}),new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_5__["TextLayer"]({id:'axisTopTitle',coordinateSystem:_deck_gl_core__WEBPACK_IMPORTED_MODULE_4__["COORDINATE_SYSTEM"].CARTESIAN,data:[{title:axisTopTitle}],getText:function getText(d){return d.title;},getPosition:[targetX,targetY],getTextAnchor:'middle',getColor:function getColor(){return _heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* THEME_TO_TEXT_COLOR */ "m"][theme];},getSize:!showAxisTopLabels?_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_TITLE_TEXT_SIZE */ "g"]:0,getAngle:0,fontFamily:_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_FONT_FAMILY */ "a"],updateTriggers:{getSize:[showAxisTopLabels],getColor:[theme]}})];}},{key:"_renderCornerLayers",value:function _renderCornerLayers(){var _this$props2=this.props,theme=_this$props2.theme,targetX=_this$props2.targetX,targetY=_this$props2.targetY,axisOffsetTop=_this$props2.axisOffsetTop,scaleFactor=_this$props2.scaleFactor,cellColorLabelsData=_this$props2.cellColorLabelsData,axisOffsetLeft=_this$props2.axisOffsetLeft,transpose=_this$props2.transpose;var axisLabelTop=targetY+(axisOffsetTop-_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_MARGIN */ "c"])/2/scaleFactor;var axisLabelLeft=targetX+(axisOffsetLeft-_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_MARGIN */ "c"])/2/scaleFactor;return cellColorLabelsData.map(function(data){return new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_5__["TextLayer"]({id:"cellColorLabel-".concat(data[0]),coordinateSystem:_deck_gl_core__WEBPACK_IMPORTED_MODULE_4__["COORDINATE_SYSTEM"].CARTESIAN,data:[data],getText:function getText(d){return d[1];},getTextAnchor:transpose?'end':'start',getAlignmentBaseline:'top',getColor:function getColor(){return _heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* THEME_TO_TEXT_COLOR */ "m"][theme];},getSize:_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_LABEL_TEXT_SIZE */ "b"],getPosition:function getPosition(d){return[transpose?axisLabelLeft:targetX+((-cellColorLabelsData.length+d[0]*2)*_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* COLOR_BAR_SIZE */ "h"]+_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_MARGIN */ "c"])/2/scaleFactor,transpose?targetY+((-cellColorLabelsData.length+d[0]*2)*_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* COLOR_BAR_SIZE */ "h"]+_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_MARGIN */ "c"])/2/scaleFactor:axisLabelTop];},getAngle:transpose?0:90,fontFamily:_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_FONT_FAMILY */ "a"]});});}},{key:"_renderAxisLeftLayers",value:function _renderAxisLeftLayers(){var _this$props3=this.props,axisLeftLabelData=_this$props3.axisLeftLabelData,matrixTop=_this$props3.matrixTop,height=_this$props3.height,matrixHeight=_this$props3.matrixHeight,viewHeight=_this$props3.viewHeight,theme=_this$props3.theme,axisLeftTitle=_this$props3.axisLeftTitle,targetX=_this$props3.targetX,targetY=_this$props3.targetY,cellHeight=_this$props3.cellHeight,axisOffsetLeft=_this$props3.axisOffsetLeft,scaleFactor=_this$props3.scaleFactor,hideLeftLabels=_this$props3.hideLeftLabels;var showAxisLeftLabels=cellHeight>=_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_LABEL_TEXT_SIZE */ "b"];var axisLabelLeft=targetX+(axisOffsetLeft-_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_MARGIN */ "c"])/2/scaleFactor;return hideLeftLabels?[]:[new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_5__["TextLayer"]({id:'axisLeftLabels',coordinateSystem:_deck_gl_core__WEBPACK_IMPORTED_MODULE_4__["COORDINATE_SYSTEM"].CARTESIAN,data:axisLeftLabelData,getText:function getText(d){return d[1];},getPosition:function getPosition(d){return[axisLabelLeft,matrixTop+(d[0]+0.5)/height*matrixHeight];},getTextAnchor:'end',getColor:function getColor(){return _heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* THEME_TO_TEXT_COLOR */ "m"][theme];},getSize:showAxisLeftLabels?_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_LABEL_TEXT_SIZE */ "b"]:0,getAngle:0,fontFamily:_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_FONT_FAMILY */ "a"],updateTriggers:{getPosition:[axisLabelLeft,matrixTop,matrixHeight,viewHeight],getSize:[showAxisLeftLabels],getColor:[theme]}}),new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_5__["TextLayer"]({id:'axisLeftTitle',coordinateSystem:_deck_gl_core__WEBPACK_IMPORTED_MODULE_4__["COORDINATE_SYSTEM"].CARTESIAN,data:[{title:axisLeftTitle}],getText:function getText(d){return d.title;},getPosition:[targetX,targetY],getTextAnchor:'middle',getColor:function getColor(){return _heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* THEME_TO_TEXT_COLOR */ "m"][theme];},getSize:!showAxisLeftLabels?_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_TITLE_TEXT_SIZE */ "g"]:0,getAngle:90,fontFamily:_heatmap_constants__WEBPACK_IMPORTED_MODULE_6__[/* AXIS_FONT_FAMILY */ "a"],updateTriggers:{getSize:[showAxisLeftLabels],getColor:[theme]}})];}},{key:"renderLayers",value:function renderLayers(){var axis=this.props.axis;if(axis==='left'){return this._renderAxisLeftLayers();}if(axis==='top'){return this._renderAxisTopLayers();}if(axis==='corner'){return this._renderCornerLayers();}return[];}}]);return HeatmapCompositeTextLayer;}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_4__["CompositeLayer"]);HeatmapCompositeTextLayer.layerName='HeatmapCompositeTextLayer';

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(111);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(112);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(114);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
function OptionsContainer(props){var children=props.children;var classes=Object(_styles__WEBPACK_IMPORTED_MODULE_5__[/* useStyles */ "a"])();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default.a,{className:classes.box},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_4___default.a,{className:classes.tableContainer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2___default.a,{className:classes.table,size:"small"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3___default.a,null,children))));}

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(3);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(51);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Popper"
var Popper_ = __webpack_require__(60);
var Popper_default = /*#__PURE__*/__webpack_require__.n(Popper_);

// EXTERNAL MODULE: ./src/components/hooks.js
var hooks = __webpack_require__(18);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(19);

// CONCATENATED MODULE: ./src/components/tooltip/styles.js
var styles=Object(styles_["makeStyles"])(function(){return{tooltipAnchor:{position:'relative',width:'0px',height:'0px',pointerEvents:'none',userSelect:'none'},tooltipContent:{opacity:0.9,padding:'5px',pointerEvents:'none','& table > tbody > tr > th, & table > tbody > tr > td':{fontSize:'80%',opacity:0.8,outline:0,padding:'0 2px'},'& table':{borderCollapse:'collapse'}}};});
// CONCATENATED MODULE: ./src/components/tooltip/Tooltip.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tooltip; });
function Tooltip(props){var x=props.x,y=props.y,parentWidth=props.parentWidth,parentHeight=props.parentHeight,children=props.children;var ref=Object(external_react_["useRef"])();var classes=styles();var _useState=Object(external_react_["useState"])('start'),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),placementX=_useState2[0],setPlacementX=_useState2[1];var _useState3=Object(external_react_["useState"])('bottom'),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),placementY=_useState4[0],setPlacementY=_useState4[1];var getTooltipContainer=Object(hooks["g" /* useVitessceContainer */])(ref);// Do collision detection based on the bounds of the tooltip ancestor element.
Object(external_react_["useEffect"])(function(){if(ref&&ref.current){var flipX=x>parentWidth/2;var flipY=y>parentHeight/2;setPlacementX(flipX?'end':'start');setPlacementY(flipY?'top':'bottom');ref.current.style.left="".concat(x+(flipX?-20:5),"px");ref.current.style.top="".concat(y+(flipY?-20:5),"px");}},[x,y,parentWidth,parentHeight]);return/*#__PURE__*/external_react_default.a.createElement("div",{ref:ref,className:classes.tooltipAnchor},ref&&ref.current?/*#__PURE__*/external_react_default.a.createElement(Popper_default.a,{open:true,anchorEl:ref.current,container:getTooltipContainer,transition:true,placement:"".concat(placementY,"-").concat(placementX)},/*#__PURE__*/external_react_default.a.createElement(Paper_default.a,{elevation:4,className:classes.tooltipContent},children)):null);}

/***/ }),
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export interpolateRdBu */
/* unused harmony export interpolatePlasma */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCellColors; });
/* harmony import */ var _sets_cell_set_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* eslint-disable no-nested-ternary */ /* eslint-disable no-param-reassign */// The functions defined here have been adapted from d3-interpolate,
// d3-color, and d3-scale-chromatic.
// Color string "rgb(r,g,b)" representations are replaced by color array [r, g, b]
// representations, to allow them to work nicely with deck.gl,
// without the need to converting back and forth between string and array formats.
// Reference: https://github.com/d3/d3-scale-chromatic/blob/431d21da776f97c632f53a855bd822edfbbcd56e/src/diverging/RdBu.js
// eslint-disable-next-line max-len
var schemeRdBu=[[103,0,31],[178,24,43],[214,96,77],[244,165,130],[253,219,199],[247,247,247],[209,229,240],[146,197,222],[67,147,195],[33,102,172],[5,48,97]];// eslint-disable-next-line max-len
var schemePlasma=[[13,8,135],[16,7,136],[19,7,137],[22,7,138],[25,6,140],[27,6,141],[29,6,142],[32,6,143],[34,6,144],[36,6,145],[38,5,145],[40,5,146],[42,5,147],[44,5,148],[46,5,149],[47,5,150],[49,5,151],[51,5,151],[53,4,152],[55,4,153],[56,4,154],[58,4,154],[60,4,155],[62,4,156],[63,4,156],[65,4,157],[67,3,158],[68,3,158],[70,3,159],[72,3,159],[73,3,160],[75,3,161],[76,2,161],[78,2,162],[80,2,162],[81,2,163],[83,2,163],[85,2,164],[86,1,164],[88,1,164],[89,1,165],[91,1,165],[92,1,166],[94,1,166],[96,1,166],[97,0,167],[99,0,167],[100,0,167],[102,0,167],[103,0,168],[105,0,168],[106,0,168],[108,0,168],[110,0,168],[111,0,168],[113,0,168],[114,1,168],[116,1,168],[117,1,168],[119,1,168],[120,1,168],[122,2,168],[123,2,168],[125,3,168],[126,3,168],[128,4,168],[129,4,167],[131,5,167],[132,5,167],[134,6,166],[135,7,166],[136,8,166],[138,9,165],[139,10,165],[141,11,165],[142,12,164],[143,13,164],[145,14,163],[146,15,163],[148,16,162],[149,17,161],[150,19,161],[152,20,160],[153,21,159],[154,22,159],[156,23,158],[157,24,157],[158,25,157],[160,26,156],[161,27,155],[162,29,154],[163,30,154],[165,31,153],[166,32,152],[167,33,151],[168,34,150],[170,35,149],[171,36,148],[172,38,148],[173,39,147],[174,40,146],[176,41,145],[177,42,144],[178,43,143],[179,44,142],[180,46,141],[181,47,140],[182,48,139],[183,49,138],[184,50,137],[186,51,136],[187,52,136],[188,53,135],[189,55,134],[190,56,133],[191,57,132],[192,58,131],[193,59,130],[194,60,129],[195,61,128],[196,62,127],[197,64,126],[198,65,125],[199,66,124],[200,67,123],[201,68,122],[202,69,122],[203,70,121],[204,71,120],[204,73,119],[205,74,118],[206,75,117],[207,76,116],[208,77,115],[209,78,114],[210,79,113],[211,81,113],[212,82,112],[213,83,111],[213,84,110],[214,85,109],[215,86,108],[216,87,107],[217,88,106],[218,90,106],[218,91,105],[219,92,104],[220,93,103],[221,94,102],[222,95,101],[222,97,100],[223,98,99],[224,99,99],[225,100,98],[226,101,97],[226,102,96],[227,104,95],[228,105,94],[229,106,93],[229,107,93],[230,108,92],[231,110,91],[231,111,90],[232,112,89],[233,113,88],[233,114,87],[234,116,87],[235,117,86],[235,118,85],[236,119,84],[237,121,83],[237,122,82],[238,123,81],[239,124,81],[239,126,80],[240,127,79],[240,128,78],[241,129,77],[241,131,76],[242,132,75],[243,133,75],[243,135,74],[244,136,73],[244,137,72],[245,139,71],[245,140,70],[246,141,69],[246,143,68],[247,144,68],[247,145,67],[247,147,66],[248,148,65],[248,149,64],[249,151,63],[249,152,62],[249,154,62],[250,155,61],[250,156,60],[250,158,59],[251,159,58],[251,161,57],[251,162,56],[252,163,56],[252,165,55],[252,166,54],[252,168,53],[252,169,52],[253,171,51],[253,172,51],[253,174,50],[253,175,49],[253,177,48],[253,178,47],[253,180,47],[253,181,46],[254,183,45],[254,184,44],[254,186,44],[254,187,43],[254,189,42],[254,190,42],[254,192,41],[253,194,41],[253,195,40],[253,197,39],[253,198,39],[253,200,39],[253,202,38],[253,203,38],[252,205,37],[252,206,37],[252,208,37],[252,210,37],[251,211,36],[251,213,36],[251,215,36],[250,216,36],[250,218,36],[249,220,36],[249,221,37],[248,223,37],[248,225,37],[247,226,37],[247,228,37],[246,230,38],[246,232,38],[245,233,38],[245,235,39],[244,237,39],[243,238,39],[243,240,39],[242,242,39],[241,244,38],[241,245,37],[240,247,36],[240,249,33]];// Reference: https://github.com/d3/d3-interpolate/blob/96d54051d1c2fec55f240edd0ec5401715b10390/src/rgb.js
function rgbSpline(spline){return function(colors){var n=colors.length;var r=new Array(n);var g=new Array(n);var b=new Array(n);var i;var color;// eslint-disable-next-line no-plusplus
for(i=0;i<n;++i){color=[colors[i][0],colors[i][1],colors[i][2]];r[i]=color[0]||0;g[i]=color[1]||0;b[i]=color[2]||0;}r=spline(r);g=spline(g);b=spline(b);return function(t){return[r(t),g(t),b(t)];};};}// Reference: https://github.com/d3/d3-interpolate/blob/594a32af1fe1118812b439012c2cb742e907c0c0/src/basis.js
function basis(values){function innerBasis(t1,v0,v1,v2,v3){var t2=t1*t1;var t3=t2*t1;return((1-3*t1+3*t2-t3)*v0+(4-6*t2+3*t3)*v1+(1+3*t1+3*t2-3*t3)*v2+t3*v3)/6;}var n=values.length-1;return function(t){var i=t<=0?t=0:t>=1?(t=1,n-1):Math.floor(t*n);var v1=values[i];var v2=values[i+1];var v0=i>0?values[i-1]:2*v1-v2;var v3=i<n-1?values[i+2]:2*v2-v1;return innerBasis((t-i/n)*n,v0,v1,v2,v3);};}// Reference: https://github.com/d3/d3-scale-chromatic/blob/ade54c13e8dfdb9807801a794eaec1a37f926b8a/src/ramp.js
var interpolateRgbBasis=rgbSpline(basis);function interpolateSequentialMulti(range){var n=range.length;return function(t){return range[Math.max(0,Math.min(n-1,Math.floor(t*n)))];};}var interpolateRdBu=interpolateRgbBasis(schemeRdBu);var interpolatePlasma=interpolateSequentialMulti(schemePlasma);/**
 * Get a mapping of cell IDs to cell colors based on
 * gene / cell set selection coordination state.
 * @param {object} params
 * @param {object} params.expressionMatrix { rows, cols, matrix }
 * @param {array} params.geneSelection Array of selected gene IDs.
 * @param {object} params.cellSets The cell sets tree.
 * @param {object} params.cellSetSelection Selected cell sets.
 * @param {string} params.cellColorEncoding Which to use for
 * coloring: gene expression or cell sets?
 * @returns {Map} Mapping from cell IDs to [r, g, b] color arrays.
 */function getCellColors(params){var cellColorEncoding=params.cellColorEncoding,expressionData=params.expressionData,cellSets=params.cellSets,cellSetSelection=params.cellSetSelection,cellSetColor=params.cellSetColor,expressionDataAttrs=params.expressionDataAttrs,theme=params.theme;if(cellColorEncoding==='geneSelection'&&expressionData&&expressionDataAttrs){// TODO: allow other color maps.
var geneExpColormap=interpolatePlasma;var colors=new Map();for(var i=0;i<expressionData.length;i+=1){var value=expressionData[i];var cellColor=geneExpColormap(value/255);colors.set(expressionDataAttrs.rows[i],cellColor);}return colors;}if(cellColorEncoding==='cellSetSelection'&&cellSetSelection&&cellSets){// Cell sets can potentially lack set colors since the color property
// is not a required part of the schema.
// The `initializeSets` function fills in any empty colors
// with defaults and returns the processed tree object.
return Object(_sets_cell_set_utils__WEBPACK_IMPORTED_MODULE_0__[/* treeToCellColorsBySetNames */ "n"])(cellSets,cellSetSelection,cellSetColor,theme);}return new Map();}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("@turf/centroid");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("concaveman");

/***/ }),
/* 102 */,
/* 103 */,
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PixelatedBitmapLayer; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31);
/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_layers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _heatmap_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
// eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-line import/no-extraneous-dependencies
// These are the same defaultProps as for BitmapLayer.
var defaultProps=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({},_deck_gl_layers__WEBPACK_IMPORTED_MODULE_5__["BitmapLayer"].defaultProps,{image:{type:'object',value:null,async:true},bounds:{type:'array',value:[1,0,0,1],compare:true},desaturate:{type:'number',min:0,max:1,value:0},transparentColor:{type:'color',value:[0,0,0,0]},tintColor:{type:'color',value:[255,255,255]}});var PixelatedBitmapLayer=/*#__PURE__*/function(_CompositeLayer){Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(PixelatedBitmapLayer,_CompositeLayer);var _super=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(PixelatedBitmapLayer);function PixelatedBitmapLayer(){Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this,PixelatedBitmapLayer);return _super.apply(this,arguments);}Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PixelatedBitmapLayer,[{key:"renderLayers",value:function renderLayers(){var image=this.props.image;return new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_5__["BitmapLayer"](this.props,{id:"".concat(this.props.id,"-wrapped"),image:image,textureParameters:_heatmap_constants__WEBPACK_IMPORTED_MODULE_7__[/* PIXELATED_TEXTURE_PARAMETERS */ "l"]});}}]);return PixelatedBitmapLayer;}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["CompositeLayer"]);PixelatedBitmapLayer.layerName='PixelatedBitmapLayer';PixelatedBitmapLayer.defaultProps=defaultProps;

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

// EXTERNAL MODULE: external "@deck.gl/layers"
var layers_ = __webpack_require__(31);

// EXTERNAL MODULE: external "@luma.gl/core"
var external_luma_gl_core_ = __webpack_require__(53);

// EXTERNAL MODULE: ./src/layers/heatmap-constants.js
var heatmap_constants = __webpack_require__(8);

// EXTERNAL MODULE: ./src/layers/constants.js
var constants = __webpack_require__(29);

// CONCATENATED MODULE: ./src/layers/heatmap-bitmap-layer-shaders.js
/**
 * No change to the vertex shader from the base BitmapLayer.
 * Reference: https://github.com/visgl/deck.gl/blob/8.2-release/modules/layers/src/bitmap-layer/bitmap-layer-vertex.js
 */var vertexShader="\n#define SHADER_NAME heatmap-bitmap-layer-vertex-shader\n\nattribute vec2 texCoords;\nattribute vec3 positions;\nattribute vec3 positions64Low;\n\nvarying vec2 vTexCoord;\n\nconst vec3 pickingColor = vec3(1.0, 0.0, 0.0);\n\nvoid main(void) {\n  geometry.worldPosition = positions;\n  geometry.uv = texCoords;\n  geometry.pickingColor = pickingColor;\n\n  gl_Position = project_position_to_clipspace(positions, positions64Low, vec3(0.0), geometry.position);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n\n  vTexCoord = texCoords;\n\n  vec4 color = vec4(0.0);\n  DECKGL_FILTER_COLOR(color, geometry);\n}\n";/**
 * Fragment shader adapted to perform aggregation and
 * take color scale functions + sliders into account.
 * Reference: https://github.com/visgl/deck.gl/blob/8.2-release/modules/layers/src/bitmap-layer/bitmap-layer-fragment.js
 * Reference: https://github.com/hms-dbmi/viv/blob/06231ae02cac1ff57ba458c71e9bc59ed2fc4f8b/src/layers/XRLayer/xr-layer-fragment-colormap.webgl1.glsl
 */var fragmentShader="\n#define SHADER_NAME heatmap-bitmap-layer-fragment-shader\n\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvec4 rdbu (float x_2865134303) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.0196078431372549,0.0392156862745098,0.6745098039215687,1);\n  const float e1 = 0.35;\n  const vec4 v1 = vec4(0.41568627450980394,0.5372549019607843,0.9686274509803922,1);\n  const float e2 = 0.5;\n  const vec4 v2 = vec4(0.7450980392156863,0.7450980392156863,0.7450980392156863,1);\n  const float e3 = 0.6;\n  const vec4 v3 = vec4(0.8627450980392157,0.6666666666666666,0.5176470588235295,1);\n  const float e4 = 0.7;\n  const vec4 v4 = vec4(0.9019607843137255,0.5686274509803921,0.35294117647058826,1);\n  const float e5 = 1.0;\n  const vec4 v5 = vec4(0.6980392156862745,0.0392156862745098,0.10980392156862745,1);\n  float a0 = smoothstep(e0,e1,x_2865134303);\n  float a1 = smoothstep(e1,e2,x_2865134303);\n  float a2 = smoothstep(e2,e3,x_2865134303);\n  float a3 = smoothstep(e3,e4,x_2865134303);\n  float a4 = smoothstep(e4,e5,x_2865134303);\n  return max(mix(v0,v1,a0)*step(e0,x_2865134303)*step(x_2865134303,e1),\n    max(mix(v1,v2,a1)*step(e1,x_2865134303)*step(x_2865134303,e2),\n    max(mix(v2,v3,a2)*step(e2,x_2865134303)*step(x_2865134303,e3),\n    max(mix(v3,v4,a3)*step(e3,x_2865134303)*step(x_2865134303,e4),mix(v4,v5,a4)*step(e4,x_2865134303)*step(x_2865134303,e5)\n  ))));\n}\n\nvec4 plasma (float x_4113959278) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.050980392156862744,0.03137254901960784,0.5294117647058824,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.29411764705882354,0.011764705882352941,0.6313725490196078,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.49019607843137253,0.011764705882352941,0.6588235294117647,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.6588235294117647,0.13333333333333333,0.5882352941176471,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.796078431372549,0.27450980392156865,0.4745098039215686,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8980392156862745,0.4196078431372549,0.36470588235294116,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.9725490196078431,0.5803921568627451,0.2549019607843137,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.9921568627450981,0.7647058823529411,0.1568627450980392,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9411764705882353,0.9764705882352941,0.12941176470588237,1);\n  float a0 = smoothstep(e0,e1,x_4113959278);\n  float a1 = smoothstep(e1,e2,x_4113959278);\n  float a2 = smoothstep(e2,e3,x_4113959278);\n  float a3 = smoothstep(e3,e4,x_4113959278);\n  float a4 = smoothstep(e4,e5,x_4113959278);\n  float a5 = smoothstep(e5,e6,x_4113959278);\n  float a6 = smoothstep(e6,e7,x_4113959278);\n  float a7 = smoothstep(e7,e8,x_4113959278);\n  return max(mix(v0,v1,a0)*step(e0,x_4113959278)*step(x_4113959278,e1),\n    max(mix(v1,v2,a1)*step(e1,x_4113959278)*step(x_4113959278,e2),\n    max(mix(v2,v3,a2)*step(e2,x_4113959278)*step(x_4113959278,e3),\n    max(mix(v3,v4,a3)*step(e3,x_4113959278)*step(x_4113959278,e4),\n    max(mix(v4,v5,a4)*step(e4,x_4113959278)*step(x_4113959278,e5),\n    max(mix(v5,v6,a5)*step(e5,x_4113959278)*step(x_4113959278,e6),\n    max(mix(v6,v7,a6)*step(e6,x_4113959278)*step(x_4113959278,e7),mix(v7,v8,a7)*step(e7,x_4113959278)*step(x_4113959278,e8)\n  )))))));\n}\n\nvec4 viridis (float x_1156145534) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.26666666666666666,0.00392156862745098,0.32941176470588235,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.2784313725490196,0.17254901960784313,0.47843137254901963,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.23137254901960785,0.3176470588235294,0.5450980392156862,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.17254901960784313,0.44313725490196076,0.5568627450980392,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.12941176470588237,0.5647058823529412,0.5529411764705883,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.15294117647058825,0.6784313725490196,0.5058823529411764,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.3607843137254902,0.7843137254901961,0.38823529411764707,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.6666666666666666,0.8627450980392157,0.19607843137254902,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9921568627450981,0.9058823529411765,0.1450980392156863,1);\n  float a0 = smoothstep(e0,e1,x_1156145534);\n  float a1 = smoothstep(e1,e2,x_1156145534);\n  float a2 = smoothstep(e2,e3,x_1156145534);\n  float a3 = smoothstep(e3,e4,x_1156145534);\n  float a4 = smoothstep(e4,e5,x_1156145534);\n  float a5 = smoothstep(e5,e6,x_1156145534);\n  float a6 = smoothstep(e6,e7,x_1156145534);\n  float a7 = smoothstep(e7,e8,x_1156145534);\n  return max(mix(v0,v1,a0)*step(e0,x_1156145534)*step(x_1156145534,e1),\n    max(mix(v1,v2,a1)*step(e1,x_1156145534)*step(x_1156145534,e2),\n    max(mix(v2,v3,a2)*step(e2,x_1156145534)*step(x_1156145534,e3),\n    max(mix(v3,v4,a3)*step(e3,x_1156145534)*step(x_1156145534,e4),\n    max(mix(v4,v5,a4)*step(e4,x_1156145534)*step(x_1156145534,e5),\n    max(mix(v5,v6,a5)*step(e5,x_1156145534)*step(x_1156145534,e6),\n    max(mix(v6,v7,a6)*step(e6,x_1156145534)*step(x_1156145534,e7),mix(v7,v8,a7)*step(e7,x_1156145534)*step(x_1156145534,e8)\n  )))))));\n}\n\nvec4 greys (float x_2073311089) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_2073311089);\n  return mix(v0,v1,a0)*step(e0,x_2073311089)*step(x_2073311089,e1);\n}\n\nvec4 magma (float x_2664132035) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.01568627450980392,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.10980392156862745,0.06274509803921569,0.26666666666666666,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.30980392156862746,0.07058823529411765,0.4823529411764706,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.5058823529411764,0.1450980392156863,0.5058823529411764,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.7098039215686275,0.21176470588235294,0.47843137254901963,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8980392156862745,0.3137254901960784,0.39215686274509803,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.984313725490196,0.5294117647058824,0.3803921568627451,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.996078431372549,0.7607843137254902,0.5294117647058824,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9882352941176471,0.9921568627450981,0.7490196078431373,1);\n  float a0 = smoothstep(e0,e1,x_2664132035);\n  float a1 = smoothstep(e1,e2,x_2664132035);\n  float a2 = smoothstep(e2,e3,x_2664132035);\n  float a3 = smoothstep(e3,e4,x_2664132035);\n  float a4 = smoothstep(e4,e5,x_2664132035);\n  float a5 = smoothstep(e5,e6,x_2664132035);\n  float a6 = smoothstep(e6,e7,x_2664132035);\n  float a7 = smoothstep(e7,e8,x_2664132035);\n  return max(mix(v0,v1,a0)*step(e0,x_2664132035)*step(x_2664132035,e1),\n    max(mix(v1,v2,a1)*step(e1,x_2664132035)*step(x_2664132035,e2),\n    max(mix(v2,v3,a2)*step(e2,x_2664132035)*step(x_2664132035,e3),\n    max(mix(v3,v4,a3)*step(e3,x_2664132035)*step(x_2664132035,e4),\n    max(mix(v4,v5,a4)*step(e4,x_2664132035)*step(x_2664132035,e5),\n    max(mix(v5,v6,a5)*step(e5,x_2664132035)*step(x_2664132035,e6),\n    max(mix(v6,v7,a6)*step(e6,x_2664132035)*step(x_2664132035,e7),mix(v7,v8,a7)*step(e7,x_2664132035)*step(x_2664132035,e8)\n  )))))));\n}\n\nvec4 jet (float x_2485945205) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.5137254901960784,1);\n  const float e1 = 0.125;\n  const vec4 v1 = vec4(0,0.23529411764705882,0.6666666666666666,1);\n  const float e2 = 0.375;\n  const vec4 v2 = vec4(0.0196078431372549,1,1,1);\n  const float e3 = 0.625;\n  const vec4 v3 = vec4(1,1,0,1);\n  const float e4 = 0.875;\n  const vec4 v4 = vec4(0.9803921568627451,0,0,1);\n  const float e5 = 1.0;\n  const vec4 v5 = vec4(0.5019607843137255,0,0,1);\n  float a0 = smoothstep(e0,e1,x_2485945205);\n  float a1 = smoothstep(e1,e2,x_2485945205);\n  float a2 = smoothstep(e2,e3,x_2485945205);\n  float a3 = smoothstep(e3,e4,x_2485945205);\n  float a4 = smoothstep(e4,e5,x_2485945205);\n  return max(mix(v0,v1,a0)*step(e0,x_2485945205)*step(x_2485945205,e1),\n    max(mix(v1,v2,a1)*step(e1,x_2485945205)*step(x_2485945205,e2),\n    max(mix(v2,v3,a2)*step(e2,x_2485945205)*step(x_2485945205,e3),\n    max(mix(v3,v4,a3)*step(e3,x_2485945205)*step(x_2485945205,e4),mix(v4,v5,a4)*step(e4,x_2485945205)*step(x_2485945205,e5)\n  ))));\n}\n\nvec4 bone (float x_2693572714) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.376;\n  const vec4 v1 = vec4(0.32941176470588235,0.32941176470588235,0.4549019607843137,1);\n  const float e2 = 0.753;\n  const vec4 v2 = vec4(0.6627450980392157,0.7843137254901961,0.7843137254901961,1);\n  const float e3 = 1.0;\n  const vec4 v3 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_2693572714);\n  float a1 = smoothstep(e1,e2,x_2693572714);\n  float a2 = smoothstep(e2,e3,x_2693572714);\n  return max(mix(v0,v1,a0)*step(e0,x_2693572714)*step(x_2693572714,e1),\n    max(mix(v1,v2,a1)*step(e1,x_2693572714)*step(x_2693572714,e2),mix(v2,v3,a2)*step(e2,x_2693572714)*step(x_2693572714,e3)\n  ));\n}\n\nvec4 copper (float x_2606013778) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.804;\n  const vec4 v1 = vec4(1,0.6274509803921569,0.4,1);\n  const float e2 = 1.0;\n  const vec4 v2 = vec4(1,0.7803921568627451,0.4980392156862745,1);\n  float a0 = smoothstep(e0,e1,x_2606013778);\n  float a1 = smoothstep(e1,e2,x_2606013778);\n  return max(mix(v0,v1,a0)*step(e0,x_2606013778)*step(x_2606013778,e1),mix(v1,v2,a1)*step(e1,x_2606013778)*step(x_2606013778,e2)\n  );\n}\n\nvec4 density (float x_4072297271) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.21176470588235294,0.054901960784313725,0.1411764705882353,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.34901960784313724,0.09019607843137255,0.3137254901960784,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.43137254901960786,0.17647058823529413,0.5176470588235295,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.47058823529411764,0.30196078431372547,0.6980392156862745,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.47058823529411764,0.44313725490196076,0.8352941176470589,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.45098039215686275,0.592156862745098,0.8941176470588236,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.5254901960784314,0.7254901960784313,0.8901960784313725,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.6941176470588235,0.8392156862745098,0.8901960784313725,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9019607843137255,0.9450980392156862,0.9450980392156862,1);\n  float a0 = smoothstep(e0,e1,x_4072297271);\n  float a1 = smoothstep(e1,e2,x_4072297271);\n  float a2 = smoothstep(e2,e3,x_4072297271);\n  float a3 = smoothstep(e3,e4,x_4072297271);\n  float a4 = smoothstep(e4,e5,x_4072297271);\n  float a5 = smoothstep(e5,e6,x_4072297271);\n  float a6 = smoothstep(e6,e7,x_4072297271);\n  float a7 = smoothstep(e7,e8,x_4072297271);\n  return max(mix(v0,v1,a0)*step(e0,x_4072297271)*step(x_4072297271,e1),\n    max(mix(v1,v2,a1)*step(e1,x_4072297271)*step(x_4072297271,e2),\n    max(mix(v2,v3,a2)*step(e2,x_4072297271)*step(x_4072297271,e3),\n    max(mix(v3,v4,a3)*step(e3,x_4072297271)*step(x_4072297271,e4),\n    max(mix(v4,v5,a4)*step(e4,x_4072297271)*step(x_4072297271,e5),\n    max(mix(v5,v6,a5)*step(e5,x_4072297271)*step(x_4072297271,e6),\n    max(mix(v6,v7,a6)*step(e6,x_4072297271)*step(x_4072297271,e7),mix(v7,v8,a7)*step(e7,x_4072297271)*step(x_4072297271,e8)\n  )))))));\n}\n\nvec4 inferno (float x_524681000) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.01568627450980392,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.12156862745098039,0.047058823529411764,0.2823529411764706,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.3333333333333333,0.058823529411764705,0.42745098039215684,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.5333333333333333,0.13333333333333333,0.41568627450980394,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.7294117647058823,0.21176470588235294,0.3333333333333333,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8901960784313725,0.34901960784313724,0.2,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.9764705882352941,0.5490196078431373,0.0392156862745098,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.9764705882352941,0.788235294117647,0.19607843137254902,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9882352941176471,1,0.6431372549019608,1);\n  float a0 = smoothstep(e0,e1,x_524681000);\n  float a1 = smoothstep(e1,e2,x_524681000);\n  float a2 = smoothstep(e2,e3,x_524681000);\n  float a3 = smoothstep(e3,e4,x_524681000);\n  float a4 = smoothstep(e4,e5,x_524681000);\n  float a5 = smoothstep(e5,e6,x_524681000);\n  float a6 = smoothstep(e6,e7,x_524681000);\n  float a7 = smoothstep(e7,e8,x_524681000);\n  return max(mix(v0,v1,a0)*step(e0,x_524681000)*step(x_524681000,e1),\n    max(mix(v1,v2,a1)*step(e1,x_524681000)*step(x_524681000,e2),\n    max(mix(v2,v3,a2)*step(e2,x_524681000)*step(x_524681000,e3),\n    max(mix(v3,v4,a3)*step(e3,x_524681000)*step(x_524681000,e4),\n    max(mix(v4,v5,a4)*step(e4,x_524681000)*step(x_524681000,e5),\n    max(mix(v5,v6,a5)*step(e5,x_524681000)*step(x_524681000,e6),\n    max(mix(v6,v7,a6)*step(e6,x_524681000)*step(x_524681000,e7),mix(v7,v8,a7)*step(e7,x_524681000)*step(x_524681000,e8)\n  )))))));\n}\n\nvec4 cool (float x_3050536724) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.49019607843137253,0,0.7019607843137254,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.4549019607843137,0,0.8549019607843137,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.3843137254901961,0.2901960784313726,0.9294117647058824,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.26666666666666666,0.5725490196078431,0.9058823529411765,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0,0.8,0.7725490196078432,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0,0.9686274509803922,0.5725490196078431,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0,1,0.34509803921568627,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.1568627450980392,1,0.03137254901960784,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.5764705882352941,1,0,1);\n  float a0 = smoothstep(e0,e1,x_3050536724);\n  float a1 = smoothstep(e1,e2,x_3050536724);\n  float a2 = smoothstep(e2,e3,x_3050536724);\n  float a3 = smoothstep(e3,e4,x_3050536724);\n  float a4 = smoothstep(e4,e5,x_3050536724);\n  float a5 = smoothstep(e5,e6,x_3050536724);\n  float a6 = smoothstep(e6,e7,x_3050536724);\n  float a7 = smoothstep(e7,e8,x_3050536724);\n  return max(mix(v0,v1,a0)*step(e0,x_3050536724)*step(x_3050536724,e1),\n    max(mix(v1,v2,a1)*step(e1,x_3050536724)*step(x_3050536724,e2),\n    max(mix(v2,v3,a2)*step(e2,x_3050536724)*step(x_3050536724,e3),\n    max(mix(v3,v4,a3)*step(e3,x_3050536724)*step(x_3050536724,e4),\n    max(mix(v4,v5,a4)*step(e4,x_3050536724)*step(x_3050536724,e5),\n    max(mix(v5,v6,a5)*step(e5,x_3050536724)*step(x_3050536724,e6),\n    max(mix(v6,v7,a6)*step(e6,x_3050536724)*step(x_3050536724,e7),mix(v7,v8,a7)*step(e7,x_3050536724)*step(x_3050536724,e8)\n  )))))));\n}\n\nvec4 hot (float x_4009354686) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.3;\n  const vec4 v1 = vec4(0.9019607843137255,0,0,1);\n  const float e2 = 0.6;\n  const vec4 v2 = vec4(1,0.8235294117647058,0,1);\n  const float e3 = 1.0;\n  const vec4 v3 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_4009354686);\n  float a1 = smoothstep(e1,e2,x_4009354686);\n  float a2 = smoothstep(e2,e3,x_4009354686);\n  return max(mix(v0,v1,a0)*step(e0,x_4009354686)*step(x_4009354686,e1),\n    max(mix(v1,v2,a1)*step(e1,x_4009354686)*step(x_4009354686,e2),mix(v2,v3,a2)*step(e2,x_4009354686)*step(x_4009354686,e3)\n  ));\n}\n\nvec4 spring (float x_2270446359) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(1,0,1,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0,1);\n  float a0 = smoothstep(e0,e1,x_2270446359);\n  return mix(v0,v1,a0)*step(e0,x_2270446359)*step(x_2270446359,e1);\n}\n\nvec4 summer (float x_1101081466) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0.5019607843137255,0.4,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0.4,1);\n  float a0 = smoothstep(e0,e1,x_1101081466);\n  return mix(v0,v1,a0)*step(e0,x_1101081466)*step(x_1101081466,e1);\n}\n\nvec4 autumn (float x_3652770500) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(1,0,0,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0,1);\n  float a0 = smoothstep(e0,e1,x_3652770500);\n  return mix(v0,v1,a0)*step(e0,x_3652770500)*step(x_3652770500,e1);\n}\n\nvec4 winter (float x_1155565894) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,1,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(0,1,0.5019607843137255,1);\n  float a0 = smoothstep(e0,e1,x_1155565894);\n  return mix(v0,v1,a0)*step(e0,x_1155565894)*step(x_1155565894,e1);\n}\n\n// The texture (GL.LUMINANCE & Uint8Array).\nuniform sampler2D uBitmapTexture;\n\n// What are the dimensions of the texture (width, height)?\nuniform vec2 uTextureSize;\n\n// How many consecutive pixels should be aggregated together along each axis?\nuniform vec2 uAggSize;\n\n// What are the values of the color scale sliders?\nuniform vec2 uColorScaleRange;\n\n// The texture coordinate, varying (interpolated between values set by the vertex shader).\nvarying vec2 vTexCoord;\n\nvoid main(void) {\n  // Compute 1 pixel in texture coordinates\n  vec2 onePixel = vec2(1.0, 1.0) / uTextureSize;\n  \n  vec2 viewCoord = vec2(floor(vTexCoord.x * uTextureSize.x), floor(vTexCoord.y * uTextureSize.y));\n\n  // Compute (x % aggSizeX, y % aggSizeY).\n  // These values will be the number of values to the left / above the current position to consider.\n  vec2 modAggSize = vec2(-1.0 * mod(viewCoord.x, uAggSize.x), -1.0 * mod(viewCoord.y, uAggSize.y));\n\n  // Take the sum of values along each axis.\n  float intensitySum = 0.0;\n  vec2 offsetPixels = vec2(0.0, 0.0);\n\n  for(int i = 0; i < 16; i++) {\n    // Check to break outer loop early.\n    // Uniforms cannot be used as conditions in GLSL for loops.\n    if(float(i) >= uAggSize.y) {\n      // Done in the y direction.\n      break;\n    }\n\n    offsetPixels = vec2(offsetPixels.x, (modAggSize.y + float(i)) * onePixel.y);\n\n    for(int j = 0; j < 16; j++) {\n      // Check to break inner loop early.\n      // Uniforms cannot be used as conditions in GLSL for loops.\n      if(float(j) >= uAggSize.x) {\n        // Done in the x direction.\n        break;\n      }\n\n      offsetPixels = vec2((modAggSize.x + float(j)) * onePixel.x, offsetPixels.y);\n      intensitySum += texture2D(uBitmapTexture, vTexCoord + offsetPixels).r;\n    }\n  }\n  \n  // Compute the mean value.\n  float intensityMean = intensitySum / (uAggSize.x * uAggSize.y);\n  \n  // Re-scale using the color scale slider values.\n  float scaledIntensityMean = (intensityMean - uColorScaleRange[0]) / max(0.005, (uColorScaleRange[1] - uColorScaleRange[0]));\n\n  gl_FragColor = COLORMAP_FUNC(clamp(scaledIntensityMean, 0.0, 1.0));\n\n  geometry.uv = vTexCoord;\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n";
// CONCATENATED MODULE: ./src/layers/HeatmapBitmapLayer.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatmapBitmapLayer_HeatmapBitmapLayer; });
// eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-line import/no-extraneous-dependencies
var defaultProps={image:{type:'object',value:null,async:true},colormap:{type:'string',value:constants["c" /* GLSL_COLORMAP_DEFAULT */],compare:true},bounds:{type:'array',value:[1,0,0,1],compare:true},aggSizeX:{type:'number',value:8.0,compare:true},aggSizeY:{type:'number',value:8.0,compare:true},colorScaleLo:{type:'number',value:0.0,compare:true},colorScaleHi:{type:'number',value:1.0,compare:true}};/**
 * A BitmapLayer that performs aggregation in the fragment shader,
 * and renders its texture from a Uint8Array rather than an ImageData.
 */var HeatmapBitmapLayer_HeatmapBitmapLayer=/*#__PURE__*/function(_BitmapLayer){Object(inherits["a" /* default */])(HeatmapBitmapLayer,_BitmapLayer);var _super=Object(createSuper["a" /* default */])(HeatmapBitmapLayer);function HeatmapBitmapLayer(){Object(classCallCheck["a" /* default */])(this,HeatmapBitmapLayer);return _super.apply(this,arguments);}Object(createClass["a" /* default */])(HeatmapBitmapLayer,[{key:"_getShaders",/**
   * Copy of getShaders from Layer (grandparent, parent of BitmapLayer).
   * Reference: https://github.com/visgl/deck.gl/blob/0afd4e99a6199aeec979989e0c361c97e6c17a16/modules/core/src/lib/layer.js#L302
   * @param {object} shaders
   * @returns {object} Merged shaders.
   */ // eslint-disable-next-line no-underscore-dangle
value:function _getShaders(shaders){var _this=this;this.props.extensions.forEach(function(extension){// eslint-disable-next-line no-param-reassign
shaders=Object(core_["_mergeShaders"])(shaders,extension.getShaders.call(_this,extension));});return shaders;}/**
   * Need to override to provide custom shaders.
   */},{key:"getShaders",value:function getShaders(){var colormap=this.props.colormap;var fragmentShaderWithColormap=constants["b" /* GLSL_COLORMAPS */].includes(colormap)?fragmentShader.replace(constants["a" /* COLORMAP_SHADER_PLACEHOLDER */],colormap):fragmentShader.replace(constants["a" /* COLORMAP_SHADER_PLACEHOLDER */],constants["c" /* GLSL_COLORMAP_DEFAULT */]);// eslint-disable-next-line no-underscore-dangle
return this._getShaders({vs:vertexShader,fs:fragmentShaderWithColormap,modules:[core_["project32"],core_["picking"]]});}},{key:"updateState",value:function updateState(args){Object(get["a" /* default */])(Object(getPrototypeOf["a" /* default */])(HeatmapBitmapLayer.prototype),"updateState",this).call(this,args);this.loadTexture(this.props.image);var props=args.props,oldProps=args.oldProps;if(props.colormap!==oldProps.colormap){var _this$state$model;var gl=this.context.gl;// eslint-disable-next-line no-unused-expressions
(_this$state$model=this.state.model)===null||_this$state$model===void 0?void 0:_this$state$model.delete();// eslint-disable-next-line no-underscore-dangle
this.state.model=this._getModel(gl);this.getAttributeManager().invalidateAll();}}/**
   * Need to override to provide additional uniform values.
   * Simplified by removing video-related code.
   * Reference: https://github.com/visgl/deck.gl/blob/0afd4e99a6199aeec979989e0c361c97e6c17a16/modules/layers/src/bitmap-layer/bitmap-layer.js#L173
   * @param {*} opts
   */},{key:"draw",value:function draw(opts){var uniforms=opts.uniforms;var _this$state=this.state,bitmapTexture=_this$state.bitmapTexture,model=_this$state.model;var _this$props=this.props,aggSizeX=_this$props.aggSizeX,aggSizeY=_this$props.aggSizeY,colorScaleLo=_this$props.colorScaleLo,colorScaleHi=_this$props.colorScaleHi;// Render the image
if(bitmapTexture&&model){model.setUniforms(Object.assign({},uniforms,{uBitmapTexture:bitmapTexture,uTextureSize:[heatmap_constants["n" /* TILE_SIZE */],heatmap_constants["n" /* TILE_SIZE */]],uAggSize:[aggSizeX,aggSizeY],uColorScaleRange:[colorScaleLo,colorScaleHi]})).draw();}}/**
   * Need to override to provide the custom DEFAULT_TEXTURE_PARAMETERS
   * object.
   * Simplified by removing video-related code.
   * Reference: https://github.com/visgl/deck.gl/blob/0afd4e99a6199aeec979989e0c361c97e6c17a16/modules/layers/src/bitmap-layer/bitmap-layer.js#L218
   * @param {Uint8Array} image
   */},{key:"loadTexture",value:function loadTexture(image){var gl=this.context.gl;if(this.state.bitmapTexture){this.state.bitmapTexture.delete();}if(image instanceof external_luma_gl_core_["Texture2D"]){this.setState({bitmapTexture:image});}else if(image){this.setState({bitmapTexture:new external_luma_gl_core_["Texture2D"](gl,{data:image,mipmaps:false,parameters:heatmap_constants["l" /* PIXELATED_TEXTURE_PARAMETERS */],// Each color contains a single luminance value.
// When sampled, rgb are all set to this luminance, alpha is 1.0.
// Reference: https://luma.gl/docs/api-reference/webgl/texture#texture-formats
format:constants_default.a.LUMINANCE,dataFormat:constants_default.a.LUMINANCE,type:constants_default.a.UNSIGNED_BYTE,width:heatmap_constants["n" /* TILE_SIZE */],height:heatmap_constants["n" /* TILE_SIZE */]})});}}}]);return HeatmapBitmapLayer;}(layers_["BitmapLayer"]);HeatmapBitmapLayer_HeatmapBitmapLayer.layerName='HeatmapBitmapLayer';HeatmapBitmapLayer_HeatmapBitmapLayer.defaultProps=defaultProps;

/***/ }),
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(9);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(4);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "uuid/v4"
var v4_ = __webpack_require__(69);
var v4_default = /*#__PURE__*/__webpack_require__.n(v4_);

// EXTERNAL MODULE: external "deck.gl"
var external_deck_gl_ = __webpack_require__(70);
var external_deck_gl_default = /*#__PURE__*/__webpack_require__.n(external_deck_gl_);

// EXTERNAL MODULE: external "@luma.gl/constants"
var constants_ = __webpack_require__(15);
var constants_default = /*#__PURE__*/__webpack_require__.n(constants_);

// EXTERNAL MODULE: external "@luma.gl/core"
var core_ = __webpack_require__(53);

// EXTERNAL MODULE: external "@deck.gl/core"
var external_deck_gl_core_ = __webpack_require__(17);

// EXTERNAL MODULE: external "lodash/range"
var range_ = __webpack_require__(38);
var range_default = /*#__PURE__*/__webpack_require__.n(range_);

// EXTERNAL MODULE: external "lodash/clamp"
var clamp_ = __webpack_require__(55);
var clamp_default = /*#__PURE__*/__webpack_require__.n(clamp_);

// EXTERNAL MODULE: external "lodash/isEqual"
var isEqual_ = __webpack_require__(16);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(6);

// EXTERNAL MODULE: ./src/layers/HeatmapCompositeTextLayer.js
var HeatmapCompositeTextLayer = __webpack_require__(94);

// EXTERNAL MODULE: ./src/layers/PixelatedBitmapLayer.js
var PixelatedBitmapLayer = __webpack_require__(104);

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

// EXTERNAL MODULE: external "@deck.gl/layers"
var layers_ = __webpack_require__(31);

// EXTERNAL MODULE: ./src/layers/heatmap-constants.js
var heatmap_constants = __webpack_require__(8);

// EXTERNAL MODULE: ./src/layers/constants.js
var constants = __webpack_require__(29);

// CONCATENATED MODULE: ./src/layers/padded-expression-heatmap-bitmap-layer-shaders.js
/**
 * No change to the vertex shader from the base BitmapLayer.
 * Reference: https://github.com/visgl/deck.gl/blob/8.2-release/modules/layers/src/bitmap-layer/bitmap-layer-vertex.js
 */var vertexShader="\n#define SHADER_NAME heatmap-bitmap-layer-vertex-shader\n\nattribute vec2 texCoords;\nattribute vec3 positions;\nattribute vec3 positions64Low;\n\nvarying vec2 vTexCoord;\n\nconst vec3 pickingColor = vec3(1.0, 0.0, 0.0);\n\nvoid main(void) {\n  geometry.worldPosition = positions;\n  geometry.uv = texCoords;\n  geometry.pickingColor = pickingColor;\n\n  gl_Position = project_position_to_clipspace(positions, positions64Low, vec3(0.0), geometry.position);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n\n  vTexCoord = texCoords;\n\n  vec4 color = vec4(0.0);\n  DECKGL_FILTER_COLOR(color, geometry);\n}\n";/**
 * Fragment shader adapted to perform aggregation and
 * take color scale functions + sliders into account.
 * Reference: https://github.com/visgl/deck.gl/blob/8.2-release/modules/layers/src/bitmap-layer/bitmap-layer-fragment.js
 * Reference: https://github.com/hms-dbmi/viv/blob/06231ae02cac1ff57ba458c71e9bc59ed2fc4f8b/src/layers/XRLayer/xr-layer-fragment-colormap.webgl1.glsl
 */var fragmentShader="\n#define SHADER_NAME heatmap-bitmap-layer-fragment-shader\n\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvec4 rdbu (float x_3554215156) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.0196078431372549,0.0392156862745098,0.6745098039215687,1);\n  const float e1 = 0.35;\n  const vec4 v1 = vec4(0.41568627450980394,0.5372549019607843,0.9686274509803922,1);\n  const float e2 = 0.5;\n  const vec4 v2 = vec4(0.7450980392156863,0.7450980392156863,0.7450980392156863,1);\n  const float e3 = 0.6;\n  const vec4 v3 = vec4(0.8627450980392157,0.6666666666666666,0.5176470588235295,1);\n  const float e4 = 0.7;\n  const vec4 v4 = vec4(0.9019607843137255,0.5686274509803921,0.35294117647058826,1);\n  const float e5 = 1.0;\n  const vec4 v5 = vec4(0.6980392156862745,0.0392156862745098,0.10980392156862745,1);\n  float a0 = smoothstep(e0,e1,x_3554215156);\n  float a1 = smoothstep(e1,e2,x_3554215156);\n  float a2 = smoothstep(e2,e3,x_3554215156);\n  float a3 = smoothstep(e3,e4,x_3554215156);\n  float a4 = smoothstep(e4,e5,x_3554215156);\n  return max(mix(v0,v1,a0)*step(e0,x_3554215156)*step(x_3554215156,e1),\n    max(mix(v1,v2,a1)*step(e1,x_3554215156)*step(x_3554215156,e2),\n    max(mix(v2,v3,a2)*step(e2,x_3554215156)*step(x_3554215156,e3),\n    max(mix(v3,v4,a3)*step(e3,x_3554215156)*step(x_3554215156,e4),mix(v4,v5,a4)*step(e4,x_3554215156)*step(x_3554215156,e5)\n  ))));\n}\n\nvec4 plasma (float x_965077949) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.050980392156862744,0.03137254901960784,0.5294117647058824,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.29411764705882354,0.011764705882352941,0.6313725490196078,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.49019607843137253,0.011764705882352941,0.6588235294117647,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.6588235294117647,0.13333333333333333,0.5882352941176471,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.796078431372549,0.27450980392156865,0.4745098039215686,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8980392156862745,0.4196078431372549,0.36470588235294116,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.9725490196078431,0.5803921568627451,0.2549019607843137,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.9921568627450981,0.7647058823529411,0.1568627450980392,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9411764705882353,0.9764705882352941,0.12941176470588237,1);\n  float a0 = smoothstep(e0,e1,x_965077949);\n  float a1 = smoothstep(e1,e2,x_965077949);\n  float a2 = smoothstep(e2,e3,x_965077949);\n  float a3 = smoothstep(e3,e4,x_965077949);\n  float a4 = smoothstep(e4,e5,x_965077949);\n  float a5 = smoothstep(e5,e6,x_965077949);\n  float a6 = smoothstep(e6,e7,x_965077949);\n  float a7 = smoothstep(e7,e8,x_965077949);\n  return max(mix(v0,v1,a0)*step(e0,x_965077949)*step(x_965077949,e1),\n    max(mix(v1,v2,a1)*step(e1,x_965077949)*step(x_965077949,e2),\n    max(mix(v2,v3,a2)*step(e2,x_965077949)*step(x_965077949,e3),\n    max(mix(v3,v4,a3)*step(e3,x_965077949)*step(x_965077949,e4),\n    max(mix(v4,v5,a4)*step(e4,x_965077949)*step(x_965077949,e5),\n    max(mix(v5,v6,a5)*step(e5,x_965077949)*step(x_965077949,e6),\n    max(mix(v6,v7,a6)*step(e6,x_965077949)*step(x_965077949,e7),mix(v7,v8,a7)*step(e7,x_965077949)*step(x_965077949,e8)\n  )))))));\n}\n\nvec4 viridis (float x_2028846312) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.26666666666666666,0.00392156862745098,0.32941176470588235,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.2784313725490196,0.17254901960784313,0.47843137254901963,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.23137254901960785,0.3176470588235294,0.5450980392156862,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.17254901960784313,0.44313725490196076,0.5568627450980392,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.12941176470588237,0.5647058823529412,0.5529411764705883,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.15294117647058825,0.6784313725490196,0.5058823529411764,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.3607843137254902,0.7843137254901961,0.38823529411764707,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.6666666666666666,0.8627450980392157,0.19607843137254902,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9921568627450981,0.9058823529411765,0.1450980392156863,1);\n  float a0 = smoothstep(e0,e1,x_2028846312);\n  float a1 = smoothstep(e1,e2,x_2028846312);\n  float a2 = smoothstep(e2,e3,x_2028846312);\n  float a3 = smoothstep(e3,e4,x_2028846312);\n  float a4 = smoothstep(e4,e5,x_2028846312);\n  float a5 = smoothstep(e5,e6,x_2028846312);\n  float a6 = smoothstep(e6,e7,x_2028846312);\n  float a7 = smoothstep(e7,e8,x_2028846312);\n  return max(mix(v0,v1,a0)*step(e0,x_2028846312)*step(x_2028846312,e1),\n    max(mix(v1,v2,a1)*step(e1,x_2028846312)*step(x_2028846312,e2),\n    max(mix(v2,v3,a2)*step(e2,x_2028846312)*step(x_2028846312,e3),\n    max(mix(v3,v4,a3)*step(e3,x_2028846312)*step(x_2028846312,e4),\n    max(mix(v4,v5,a4)*step(e4,x_2028846312)*step(x_2028846312,e5),\n    max(mix(v5,v6,a5)*step(e5,x_2028846312)*step(x_2028846312,e6),\n    max(mix(v6,v7,a6)*step(e6,x_2028846312)*step(x_2028846312,e7),mix(v7,v8,a7)*step(e7,x_2028846312)*step(x_2028846312,e8)\n  )))))));\n}\n\nvec4 greys (float x_3015742898) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_3015742898);\n  return mix(v0,v1,a0)*step(e0,x_3015742898)*step(x_3015742898,e1);\n}\n\nvec4 magma (float x_3178904169) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.01568627450980392,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.10980392156862745,0.06274509803921569,0.26666666666666666,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.30980392156862746,0.07058823529411765,0.4823529411764706,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.5058823529411764,0.1450980392156863,0.5058823529411764,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.7098039215686275,0.21176470588235294,0.47843137254901963,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8980392156862745,0.3137254901960784,0.39215686274509803,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.984313725490196,0.5294117647058824,0.3803921568627451,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.996078431372549,0.7607843137254902,0.5294117647058824,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9882352941176471,0.9921568627450981,0.7490196078431373,1);\n  float a0 = smoothstep(e0,e1,x_3178904169);\n  float a1 = smoothstep(e1,e2,x_3178904169);\n  float a2 = smoothstep(e2,e3,x_3178904169);\n  float a3 = smoothstep(e3,e4,x_3178904169);\n  float a4 = smoothstep(e4,e5,x_3178904169);\n  float a5 = smoothstep(e5,e6,x_3178904169);\n  float a6 = smoothstep(e6,e7,x_3178904169);\n  float a7 = smoothstep(e7,e8,x_3178904169);\n  return max(mix(v0,v1,a0)*step(e0,x_3178904169)*step(x_3178904169,e1),\n    max(mix(v1,v2,a1)*step(e1,x_3178904169)*step(x_3178904169,e2),\n    max(mix(v2,v3,a2)*step(e2,x_3178904169)*step(x_3178904169,e3),\n    max(mix(v3,v4,a3)*step(e3,x_3178904169)*step(x_3178904169,e4),\n    max(mix(v4,v5,a4)*step(e4,x_3178904169)*step(x_3178904169,e5),\n    max(mix(v5,v6,a5)*step(e5,x_3178904169)*step(x_3178904169,e6),\n    max(mix(v6,v7,a6)*step(e6,x_3178904169)*step(x_3178904169,e7),mix(v7,v8,a7)*step(e7,x_3178904169)*step(x_3178904169,e8)\n  )))))));\n}\n\nvec4 jet (float x_4253652836) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.5137254901960784,1);\n  const float e1 = 0.125;\n  const vec4 v1 = vec4(0,0.23529411764705882,0.6666666666666666,1);\n  const float e2 = 0.375;\n  const vec4 v2 = vec4(0.0196078431372549,1,1,1);\n  const float e3 = 0.625;\n  const vec4 v3 = vec4(1,1,0,1);\n  const float e4 = 0.875;\n  const vec4 v4 = vec4(0.9803921568627451,0,0,1);\n  const float e5 = 1.0;\n  const vec4 v5 = vec4(0.5019607843137255,0,0,1);\n  float a0 = smoothstep(e0,e1,x_4253652836);\n  float a1 = smoothstep(e1,e2,x_4253652836);\n  float a2 = smoothstep(e2,e3,x_4253652836);\n  float a3 = smoothstep(e3,e4,x_4253652836);\n  float a4 = smoothstep(e4,e5,x_4253652836);\n  return max(mix(v0,v1,a0)*step(e0,x_4253652836)*step(x_4253652836,e1),\n    max(mix(v1,v2,a1)*step(e1,x_4253652836)*step(x_4253652836,e2),\n    max(mix(v2,v3,a2)*step(e2,x_4253652836)*step(x_4253652836,e3),\n    max(mix(v3,v4,a3)*step(e3,x_4253652836)*step(x_4253652836,e4),mix(v4,v5,a4)*step(e4,x_4253652836)*step(x_4253652836,e5)\n  ))));\n}\n\nvec4 bone (float x_4050060651) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.376;\n  const vec4 v1 = vec4(0.32941176470588235,0.32941176470588235,0.4549019607843137,1);\n  const float e2 = 0.753;\n  const vec4 v2 = vec4(0.6627450980392157,0.7843137254901961,0.7843137254901961,1);\n  const float e3 = 1.0;\n  const vec4 v3 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_4050060651);\n  float a1 = smoothstep(e1,e2,x_4050060651);\n  float a2 = smoothstep(e2,e3,x_4050060651);\n  return max(mix(v0,v1,a0)*step(e0,x_4050060651)*step(x_4050060651,e1),\n    max(mix(v1,v2,a1)*step(e1,x_4050060651)*step(x_4050060651,e2),mix(v2,v3,a2)*step(e2,x_4050060651)*step(x_4050060651,e3)\n  ));\n}\n\nvec4 copper (float x_2733118543) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.804;\n  const vec4 v1 = vec4(1,0.6274509803921569,0.4,1);\n  const float e2 = 1.0;\n  const vec4 v2 = vec4(1,0.7803921568627451,0.4980392156862745,1);\n  float a0 = smoothstep(e0,e1,x_2733118543);\n  float a1 = smoothstep(e1,e2,x_2733118543);\n  return max(mix(v0,v1,a0)*step(e0,x_2733118543)*step(x_2733118543,e1),mix(v1,v2,a1)*step(e1,x_2733118543)*step(x_2733118543,e2)\n  );\n}\n\nvec4 density (float x_1154134787) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.21176470588235294,0.054901960784313725,0.1411764705882353,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.34901960784313724,0.09019607843137255,0.3137254901960784,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.43137254901960786,0.17647058823529413,0.5176470588235295,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.47058823529411764,0.30196078431372547,0.6980392156862745,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.47058823529411764,0.44313725490196076,0.8352941176470589,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.45098039215686275,0.592156862745098,0.8941176470588236,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.5254901960784314,0.7254901960784313,0.8901960784313725,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.6941176470588235,0.8392156862745098,0.8901960784313725,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9019607843137255,0.9450980392156862,0.9450980392156862,1);\n  float a0 = smoothstep(e0,e1,x_1154134787);\n  float a1 = smoothstep(e1,e2,x_1154134787);\n  float a2 = smoothstep(e2,e3,x_1154134787);\n  float a3 = smoothstep(e3,e4,x_1154134787);\n  float a4 = smoothstep(e4,e5,x_1154134787);\n  float a5 = smoothstep(e5,e6,x_1154134787);\n  float a6 = smoothstep(e6,e7,x_1154134787);\n  float a7 = smoothstep(e7,e8,x_1154134787);\n  return max(mix(v0,v1,a0)*step(e0,x_1154134787)*step(x_1154134787,e1),\n    max(mix(v1,v2,a1)*step(e1,x_1154134787)*step(x_1154134787,e2),\n    max(mix(v2,v3,a2)*step(e2,x_1154134787)*step(x_1154134787,e3),\n    max(mix(v3,v4,a3)*step(e3,x_1154134787)*step(x_1154134787,e4),\n    max(mix(v4,v5,a4)*step(e4,x_1154134787)*step(x_1154134787,e5),\n    max(mix(v5,v6,a5)*step(e5,x_1154134787)*step(x_1154134787,e6),\n    max(mix(v6,v7,a6)*step(e6,x_1154134787)*step(x_1154134787,e7),mix(v7,v8,a7)*step(e7,x_1154134787)*step(x_1154134787,e8)\n  )))))));\n}\n\nvec4 inferno (float x_123648472) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.01568627450980392,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.12156862745098039,0.047058823529411764,0.2823529411764706,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.3333333333333333,0.058823529411764705,0.42745098039215684,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.5333333333333333,0.13333333333333333,0.41568627450980394,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.7294117647058823,0.21176470588235294,0.3333333333333333,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8901960784313725,0.34901960784313724,0.2,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.9764705882352941,0.5490196078431373,0.0392156862745098,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.9764705882352941,0.788235294117647,0.19607843137254902,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9882352941176471,1,0.6431372549019608,1);\n  float a0 = smoothstep(e0,e1,x_123648472);\n  float a1 = smoothstep(e1,e2,x_123648472);\n  float a2 = smoothstep(e2,e3,x_123648472);\n  float a3 = smoothstep(e3,e4,x_123648472);\n  float a4 = smoothstep(e4,e5,x_123648472);\n  float a5 = smoothstep(e5,e6,x_123648472);\n  float a6 = smoothstep(e6,e7,x_123648472);\n  float a7 = smoothstep(e7,e8,x_123648472);\n  return max(mix(v0,v1,a0)*step(e0,x_123648472)*step(x_123648472,e1),\n    max(mix(v1,v2,a1)*step(e1,x_123648472)*step(x_123648472,e2),\n    max(mix(v2,v3,a2)*step(e2,x_123648472)*step(x_123648472,e3),\n    max(mix(v3,v4,a3)*step(e3,x_123648472)*step(x_123648472,e4),\n    max(mix(v4,v5,a4)*step(e4,x_123648472)*step(x_123648472,e5),\n    max(mix(v5,v6,a5)*step(e5,x_123648472)*step(x_123648472,e6),\n    max(mix(v6,v7,a6)*step(e6,x_123648472)*step(x_123648472,e7),mix(v7,v8,a7)*step(e7,x_123648472)*step(x_123648472,e8)\n  )))))));\n}\n\nvec4 cool (float x_2109465733) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.49019607843137253,0,0.7019607843137254,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.4549019607843137,0,0.8549019607843137,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.3843137254901961,0.2901960784313726,0.9294117647058824,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.26666666666666666,0.5725490196078431,0.9058823529411765,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0,0.8,0.7725490196078432,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0,0.9686274509803922,0.5725490196078431,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0,1,0.34509803921568627,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.1568627450980392,1,0.03137254901960784,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.5764705882352941,1,0,1);\n  float a0 = smoothstep(e0,e1,x_2109465733);\n  float a1 = smoothstep(e1,e2,x_2109465733);\n  float a2 = smoothstep(e2,e3,x_2109465733);\n  float a3 = smoothstep(e3,e4,x_2109465733);\n  float a4 = smoothstep(e4,e5,x_2109465733);\n  float a5 = smoothstep(e5,e6,x_2109465733);\n  float a6 = smoothstep(e6,e7,x_2109465733);\n  float a7 = smoothstep(e7,e8,x_2109465733);\n  return max(mix(v0,v1,a0)*step(e0,x_2109465733)*step(x_2109465733,e1),\n    max(mix(v1,v2,a1)*step(e1,x_2109465733)*step(x_2109465733,e2),\n    max(mix(v2,v3,a2)*step(e2,x_2109465733)*step(x_2109465733,e3),\n    max(mix(v3,v4,a3)*step(e3,x_2109465733)*step(x_2109465733,e4),\n    max(mix(v4,v5,a4)*step(e4,x_2109465733)*step(x_2109465733,e5),\n    max(mix(v5,v6,a5)*step(e5,x_2109465733)*step(x_2109465733,e6),\n    max(mix(v6,v7,a6)*step(e6,x_2109465733)*step(x_2109465733,e7),mix(v7,v8,a7)*step(e7,x_2109465733)*step(x_2109465733,e8)\n  )))))));\n}\n\nvec4 hot (float x_409246039) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.3;\n  const vec4 v1 = vec4(0.9019607843137255,0,0,1);\n  const float e2 = 0.6;\n  const vec4 v2 = vec4(1,0.8235294117647058,0,1);\n  const float e3 = 1.0;\n  const vec4 v3 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_409246039);\n  float a1 = smoothstep(e1,e2,x_409246039);\n  float a2 = smoothstep(e2,e3,x_409246039);\n  return max(mix(v0,v1,a0)*step(e0,x_409246039)*step(x_409246039,e1),\n    max(mix(v1,v2,a1)*step(e1,x_409246039)*step(x_409246039,e2),mix(v2,v3,a2)*step(e2,x_409246039)*step(x_409246039,e3)\n  ));\n}\n\nvec4 spring (float x_449505064) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(1,0,1,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0,1);\n  float a0 = smoothstep(e0,e1,x_449505064);\n  return mix(v0,v1,a0)*step(e0,x_449505064)*step(x_449505064,e1);\n}\n\nvec4 summer (float x_1382014568) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0.5019607843137255,0.4,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0.4,1);\n  float a0 = smoothstep(e0,e1,x_1382014568);\n  return mix(v0,v1,a0)*step(e0,x_1382014568)*step(x_1382014568,e1);\n}\n\nvec4 autumn (float x_471540983) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(1,0,0,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0,1);\n  float a0 = smoothstep(e0,e1,x_471540983);\n  return mix(v0,v1,a0)*step(e0,x_471540983)*step(x_471540983,e1);\n}\n\nvec4 winter (float x_662449073) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,1,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(0,1,0.5019607843137255,1);\n  float a0 = smoothstep(e0,e1,x_662449073);\n  return mix(v0,v1,a0)*step(e0,x_662449073)*step(x_662449073,e1);\n}\n\n// The texture (GL.LUMINANCE & Uint8Array).\nuniform sampler2D uBitmapTexture;\n\n// height x width of the data matrix (i.e x and y are flipped compared to the graphics convention)\nuniform vec2 uOrigDataSize;\nuniform vec2 uReshapedDataSize;\n\nuniform vec2 tileIJ;\nuniform vec2 dataIJ;\nuniform vec2 numTiles;\n\n// What are the dimensions of the texture (width, height)?\nuniform vec2 uTextureSize;\n\n// How many consecutive pixels should be aggregated together along each axis?\nuniform vec2 uAggSize;\n\n// What are the values of the color scale sliders?\nuniform vec2 uColorScaleRange;\n\n// The texture coordinate, varying (interpolated between values set by the vertex shader).\nvarying vec2 vTexCoord;\n\nvec2 offsetvTexcoord(vec2 coord) {\n  float xTileToDataRatio = uTextureSize.x / uOrigDataSize.y;\n  float yTileToDataRatio = uTextureSize.y / uOrigDataSize.x;\n  vec2 vTexCoordOffset = vec2(\n    (tileIJ.y * xTileToDataRatio) + (coord.x * xTileToDataRatio),\n    (tileIJ.x * yTileToDataRatio) + ((1. - coord.y) * yTileToDataRatio)\n  );\n  return vTexCoordOffset;\n}\n\nvec2 dataCoordinateFromvTexCoordOffset(vec2 vTexCoordOffset) {\n  \n  // True pixel coordinate on scale of uOrigDataSize\n  vec2 viewCoord = vec2(floor(vTexCoordOffset.x * uOrigDataSize.y), floor(vTexCoordOffset.y * uOrigDataSize.x));\n  return viewCoord;\n}\n\nfloat getIndexFromViewCoord(vec2 viewCoord) {\n  return viewCoord.y * uOrigDataSize.y + viewCoord.x;\n}\n\nvec2 transformDataCoordinate(float index) {\n  float textureX = (floor( index / uReshapedDataSize.x )) / uReshapedDataSize.x;\n  float textureY = (index - (floor( index / uReshapedDataSize.x ) * uReshapedDataSize.x)) / uReshapedDataSize.y;\n  vec2 texturedCoord = vec2(textureY, textureX);\n  return texturedCoord;\n}\n\nvoid main(void) {\n  // Compute 1 pixel in texture coordinates\n  vec2 onePixel = vec2(1.0, 1.0) / uTextureSize;\n  vec2 vTexCoordOffset = offsetvTexcoord(vTexCoord);\n  vec2 viewCoordTransformed = dataCoordinateFromvTexCoordOffset(vTexCoordOffset);\n  // Compute (x % aggSizeX, y % aggSizeY).\n  // These values will be the number of values to the left / above the current position to consider.\n  vec2 modAggSize = vec2(-1.0 * mod(viewCoordTransformed.x, uAggSize.x), -1.0 * mod(viewCoordTransformed.y, uAggSize.y));\n  // Take the sum of values along each axis.\n  float intensitySum = 0.0;\n  vec2 offsetPixels = vec2(0.0, 0.0);\n  for(int i = 0; i < 16; i++) {\n    // Check to break outer loop early.\n    // Uniforms cannot be used as conditions in GLSL for loops.\n    if(float(i) >= uAggSize.y) {\n      // Done in the y direction.\n      break;\n    }\n\n    offsetPixels = vec2(offsetPixels.x, (modAggSize.y + float(i)));\n\n    for(int j = 0; j < 16; j++) {\n      // Check to break inner loop early.\n      // Uniforms cannot be used as conditions in GLSL for loops.\n      if(float(j) >= uAggSize.x) {\n        // Done in the x direction.\n        break;\n      }\n      offsetPixels = vec2((modAggSize.x + float(j)), offsetPixels.y);\n      float indexFull = getIndexFromViewCoord(viewCoordTransformed + offsetPixels);\n      float index = indexFull - (floor(indexFull / (uReshapedDataSize.x * uReshapedDataSize.y)) * (uReshapedDataSize.x * uReshapedDataSize.y));\n      vec2 vTexCoordTransformed = transformDataCoordinate(index);\n      intensitySum += texture2D(uBitmapTexture, vTexCoordTransformed).r;\n    }\n  }\n  \n  // Compute the mean value.\n  float intensityMean = intensitySum / (uAggSize.x * uAggSize.y);\n  // Re-scale using the color scale slider values.\n  float scaledIntensityMean = (intensityMean - uColorScaleRange[0]) / max(0.005, (uColorScaleRange[1] - uColorScaleRange[0]));\n\n  gl_FragColor = COLORMAP_FUNC(clamp(scaledIntensityMean, 0.0, 1.0));\n\n  geometry.uv = vTexCoord;\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n";
// CONCATENATED MODULE: ./src/layers/PaddedExpressionHeatmapBitmapLayer.js
/* eslint-disable no-underscore-dangle */// eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-line import/no-extraneous-dependencies
var defaultProps={image:{type:'object',value:null,async:true},colormap:{type:'string',value:constants["c" /* GLSL_COLORMAP_DEFAULT */],compare:true},bounds:{type:'array',value:[1,0,0,1],compare:true},aggSizeX:{type:'number',value:8.0,compare:true},aggSizeY:{type:'number',value:8.0,compare:true},colorScaleLo:{type:'number',value:0.0,compare:true},colorScaleHi:{type:'number',value:1.0,compare:true}};/**
 * A BitmapLayer that performs aggregation in the fragment shader,
 * and renders its texture from a Uint8Array rather than an ImageData.
 */var PaddedExpressionHeatmapBitmapLayer_PaddedExpressionHeatmapBitmapLayer=/*#__PURE__*/function(_BitmapLayer){Object(inherits["a" /* default */])(PaddedExpressionHeatmapBitmapLayer,_BitmapLayer);var _super=Object(createSuper["a" /* default */])(PaddedExpressionHeatmapBitmapLayer);function PaddedExpressionHeatmapBitmapLayer(){Object(classCallCheck["a" /* default */])(this,PaddedExpressionHeatmapBitmapLayer);return _super.apply(this,arguments);}Object(createClass["a" /* default */])(PaddedExpressionHeatmapBitmapLayer,[{key:"_getShaders",/**
   * Copy of getShaders from Layer (grandparent, parent of BitmapLayer).
   * Reference: https://github.com/visgl/deck.gl/blob/0afd4e99a6199aeec979989e0c361c97e6c17a16/modules/core/src/lib/layer.js#L302
   * @param {object} shaders
   * @returns {object} Merged shaders.
   */value:function _getShaders(shaders){var _this=this;this.props.extensions.forEach(function(extension){// eslint-disable-next-line no-param-reassign
shaders=Object(external_deck_gl_core_["_mergeShaders"])(shaders,extension.getShaders.call(_this,extension));});return shaders;}/**
   * Need to override to provide custom shaders.
   */},{key:"getShaders",value:function getShaders(){var colormap=this.props.colormap;var fragmentShaderWithColormap=constants["b" /* GLSL_COLORMAPS */].includes(colormap)?fragmentShader.replace(constants["a" /* COLORMAP_SHADER_PLACEHOLDER */],colormap):fragmentShader.replace(constants["a" /* COLORMAP_SHADER_PLACEHOLDER */],constants["c" /* GLSL_COLORMAP_DEFAULT */]);return this._getShaders({vs:vertexShader,fs:fragmentShaderWithColormap,modules:[external_deck_gl_core_["project32"],external_deck_gl_core_["picking"]]});}},{key:"updateState",value:function updateState(args){Object(get["a" /* default */])(Object(getPrototypeOf["a" /* default */])(PaddedExpressionHeatmapBitmapLayer.prototype),"updateState",this).call(this,args);var props=args.props,oldProps=args.oldProps;if(props.colormap!==oldProps.colormap){var _this$state$model;var gl=this.context.gl;// eslint-disable-next-line no-unused-expressions
(_this$state$model=this.state.model)===null||_this$state$model===void 0?void 0:_this$state$model.delete();this.state.model=this._getModel(gl);this.getAttributeManager().invalidateAll();}if(props.image!==oldProps.image){this.loadTexture(this.props.image);}}/**
   * Need to override to provide additional uniform values.
   * Simplified by removing video-related code.
   * Reference: https://github.com/visgl/deck.gl/blob/0afd4e99a6199aeec979989e0c361c97e6c17a16/modules/layers/src/bitmap-layer/bitmap-layer.js#L173
   * @param {*} opts
   */},{key:"draw",value:function draw(opts){var uniforms=opts.uniforms;var _this$state=this.state,bitmapTexture=_this$state.bitmapTexture,model=_this$state.model;var _this$props=this.props,aggSizeX=_this$props.aggSizeX,aggSizeY=_this$props.aggSizeY,colorScaleLo=_this$props.colorScaleLo,colorScaleHi=_this$props.colorScaleHi,origDataSize=_this$props.origDataSize,tileI=_this$props.tileI,tileJ=_this$props.tileJ,numXTiles=_this$props.numXTiles,numYTiles=_this$props.numYTiles;// Render the image
if(bitmapTexture&&model){model.setUniforms(Object.assign({},uniforms,{uBitmapTexture:bitmapTexture,uOrigDataSize:origDataSize,uReshapedDataSize:[heatmap_constants["i" /* DATA_TEXTURE_SIZE */],heatmap_constants["i" /* DATA_TEXTURE_SIZE */]],uTextureSize:[heatmap_constants["n" /* TILE_SIZE */],heatmap_constants["n" /* TILE_SIZE */]],uAggSize:[aggSizeX,aggSizeY],uColorScaleRange:[colorScaleLo,colorScaleHi],tileIJ:[tileI,tileJ],dataIJ:[0,0],numTiles:[numXTiles,numYTiles],numData:[1,1]})).draw();}}/**
   * Need to override to provide the custom DEFAULT_TEXTURE_PARAMETERS
   * object.
   * Simplified by removing video-related code.
   * Reference: https://github.com/visgl/deck.gl/blob/0afd4e99a6199aeec979989e0c361c97e6c17a16/modules/layers/src/bitmap-layer/bitmap-layer.js#L218
   * @param {Array<Uint8Array>} images
   */},{key:"loadTexture",value:function loadTexture(image){var gl=this.context.gl;if(this.state.bitmapTexture){this.state.bitmapTexture.delete();}if(image&&image instanceof core_["Texture2D"]){this.setState({bitmapTexture:image});}else if(image){this.setState({bitmapTexture:new core_["Texture2D"](gl,{data:image,mipmaps:false,parameters:heatmap_constants["l" /* PIXELATED_TEXTURE_PARAMETERS */],// Each color contains a single luminance value.
// When sampled, rgb are all set to this luminance, alpha is 1.0.
// Reference: https://luma.gl/docs/api-reference/webgl/texture#texture-formats
format:constants_default.a.LUMINANCE,dataFormat:constants_default.a.LUMINANCE,type:constants_default.a.UNSIGNED_BYTE,width:heatmap_constants["i" /* DATA_TEXTURE_SIZE */],height:heatmap_constants["i" /* DATA_TEXTURE_SIZE */]})});}}}]);return PaddedExpressionHeatmapBitmapLayer;}(layers_["BitmapLayer"]);PaddedExpressionHeatmapBitmapLayer_PaddedExpressionHeatmapBitmapLayer.layerName='PaddedExpressionHeatmapBitmapLayer';PaddedExpressionHeatmapBitmapLayer_PaddedExpressionHeatmapBitmapLayer.defaultProps=defaultProps;
// EXTERNAL MODULE: ./src/layers/HeatmapBitmapLayer.js + 1 modules
var HeatmapBitmapLayer = __webpack_require__(105);

// EXTERNAL MODULE: ./src/components/utils.js
var components_utils = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/heatmap/utils.js
function getGeneByCellTile(view,_ref){var tileSize=_ref.tileSize,tileI=_ref.tileI,tileJ=_ref.tileJ,numCells=_ref.numCells,numGenes=_ref.numGenes,cellOrdering=_ref.cellOrdering,expressionRowLookUp=_ref.expressionRowLookUp;var tileData=new Uint8Array(tileSize*tileSize);var offset;var value;var cellI;var geneI;var sortedCellI;var tileSizeRange=range_default()(tileSize);tileSizeRange.forEach(function(j){// Need to iterate over cells in the outer loop.
cellI=tileJ*tileSize+j;if(cellI<numCells){sortedCellI=expressionRowLookUp.get(cellOrdering[cellI]);if(sortedCellI>=-1){tileSizeRange.forEach(function(i){geneI=tileI*tileSize+i;value=view[sortedCellI*numGenes+geneI];offset=(tileSize-i-1)*tileSize+j;tileData[offset]=value;});}}});return tileData;}function getCellByGeneTile(view,_ref2){var tileSize=_ref2.tileSize,tileI=_ref2.tileI,tileJ=_ref2.tileJ,numCells=_ref2.numCells,numGenes=_ref2.numGenes,cellOrdering=_ref2.cellOrdering,expressionRowLookUp=_ref2.expressionRowLookUp;var tileData=new Uint8Array(tileSize*tileSize);var offset;var value;var cellI;var geneI;var sortedCellI;var tileSizeRange=range_default()(tileSize);tileSizeRange.forEach(function(i){// Need to iterate over cells in the outer loop.
cellI=tileI*tileSize+i;if(cellI<numCells){sortedCellI=expressionRowLookUp.get(cellOrdering[cellI]);if(sortedCellI>=-1){tileSizeRange.forEach(function(j){geneI=tileJ*tileSize+j;if(geneI<numGenes){value=view[sortedCellI*numGenes+geneI];}else{value=0;}offset=(tileSize-i-1)*tileSize+j;tileData[offset]=value;});}}});return tileData;}/**
 * Called before a layer is drawn to determine whether it should be rendered.
 * Reference: https://deck.gl/docs/api-reference/core/deck#layerfilter
 * @param {object} params A viewport, layer pair.
 * @param {object} params.layer The layer to check.
 * @param {object} params.viewport The viewport to check.
 * @returns {boolean} Should this layer be rendered in this viewport?
 */function layerFilter(_ref3){var layer=_ref3.layer,viewport=_ref3.viewport;if(viewport.id==='axisLeft'){return layer.id.startsWith('axisLeft');}if(viewport.id==='axisTop'){return layer.id.startsWith('axisTop');}if(viewport.id==='cellColorLabel'){return layer.id.startsWith('cellColorLabel');}if(viewport.id==='heatmap'){return layer.id.startsWith('heatmap');}if(viewport.id.startsWith('colorsLeft')){var matches=viewport.id.match(/-(\d)/);if(matches)return layer.id.startsWith("colorsLeftLayer-".concat(matches[1]));}if(viewport.id.startsWith('colorsTop')){var _matches=viewport.id.match(/-(\d)/);if(_matches)return layer.id.startsWith("colorsTopLayer-".concat(_matches[1]));}return false;}/**
 * Uses canvas.measureText to compute and return the width of the given text
 * of given font in pixels.
 *
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered
 * with (e.g. "bold 14px verdana").
 *
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */function getTextWidth(text,font){// re-use canvas object for better performance
var canvas=getTextWidth.canvas||(getTextWidth.canvas=document.createElement('canvas'));var context=canvas.getContext('2d');context.font=font;var metrics=context.measureText(text);return metrics.width;}/**
 * Get the size of the left and top heatmap axes,
 * taking into account the maximum label string lengths.
 * @param {boolean} transpose Is the heatmap transposed?
 * @param {String} longestGeneLabel longest gene label
 * @param {String} longestCellLabel longest cell label
 * @param {boolean} hideObservationLabels are cell labels hidden?
 * @param {boolean} hideVariableLabels are gene labels hidden?
 * Increases vertical space for heatmap
 * @returns {number[]} [axisOffsetLeft, axisOffsetTop]
 */function getAxisSizes(transpose,longestGeneLabel,longestCellLabel,hideObservationLabels,hideVariableLabels){var font="".concat(heatmap_constants["b" /* AXIS_LABEL_TEXT_SIZE */],"pt ").concat(heatmap_constants["a" /* AXIS_FONT_FAMILY */]);var geneLabelMaxWidth=hideVariableLabels?0:getTextWidth(longestGeneLabel,font)+heatmap_constants["f" /* AXIS_PADDING */];var cellLabelMaxWidth=hideObservationLabels?0:getTextWidth(longestCellLabel,font)+heatmap_constants["f" /* AXIS_PADDING */];var axisOffsetLeft=clamp_default()(transpose?geneLabelMaxWidth:cellLabelMaxWidth,heatmap_constants["e" /* AXIS_MIN_SIZE */],heatmap_constants["d" /* AXIS_MAX_SIZE */]);var axisOffsetTop=clamp_default()(transpose?cellLabelMaxWidth:geneLabelMaxWidth,heatmap_constants["e" /* AXIS_MIN_SIZE */],heatmap_constants["d" /* AXIS_MAX_SIZE */]);return[axisOffsetLeft,axisOffsetTop];}/**
 * Convert a mouse coordinate (x, y) to a heatmap coordinate (col index, row index).
 * @param {number} mouseX The mouse X of interest.
 * @param {number} mouseY The mouse Y of interest.
 * @param {object} param2 An object containing current sizes and scale factors.
 * @returns {number[]} [colI, rowI]
 */function mouseToHeatmapPosition(mouseX,mouseY,_ref4){var offsetLeft=_ref4.offsetLeft,offsetTop=_ref4.offsetTop,targetX=_ref4.targetX,targetY=_ref4.targetY,scaleFactor=_ref4.scaleFactor,matrixWidth=_ref4.matrixWidth,matrixHeight=_ref4.matrixHeight,numRows=_ref4.numRows,numCols=_ref4.numCols;// TODO: use linear algebra
var viewMouseX=mouseX-offsetLeft;var viewMouseY=mouseY-offsetTop;if(viewMouseX<0||viewMouseY<0){// The mouse is outside the heatmap.
return[null,null];}// Determine the rowI and colI values based on the current viewState.
var bboxTargetX=targetX*scaleFactor+matrixWidth*scaleFactor/2;var bboxTargetY=targetY*scaleFactor+matrixHeight*scaleFactor/2;var bboxLeft=bboxTargetX-matrixWidth/2;var bboxTop=bboxTargetY-matrixHeight/2;var zoomedOffsetLeft=bboxLeft/(matrixWidth*scaleFactor);var zoomedOffsetTop=bboxTop/(matrixHeight*scaleFactor);var zoomedViewMouseX=viewMouseX/(matrixWidth*scaleFactor);var zoomedViewMouseY=viewMouseY/(matrixHeight*scaleFactor);var zoomedMouseX=zoomedOffsetLeft+zoomedViewMouseX;var zoomedMouseY=zoomedOffsetTop+zoomedViewMouseY;var rowI=Math.floor(zoomedMouseY*numRows);var colI=Math.floor(zoomedMouseX*numCols);return[colI,rowI];}/**
 * Convert a heatmap coordinate (col index, row index) to a mouse coordinate (x, y).
 * @param {number} colI The column index of interest.
 * @param {number} rowI The row index of interest.
 * @param {object} param2 An object containing current sizes and scale factors.
 * @returns {number[]} [x, y]
 */function heatmapToMousePosition(colI,rowI,_ref5){var offsetLeft=_ref5.offsetLeft,offsetTop=_ref5.offsetTop,targetX=_ref5.targetX,targetY=_ref5.targetY,scaleFactor=_ref5.scaleFactor,matrixWidth=_ref5.matrixWidth,matrixHeight=_ref5.matrixHeight,numRows=_ref5.numRows,numCols=_ref5.numCols;// TODO: use linear algebra
var zoomedMouseY=null;var zoomedMouseX=null;if(rowI!==null){var minY=-matrixHeight*scaleFactor/2;var maxY=matrixHeight*scaleFactor/2;var totalHeight=maxY-minY;var minInViewY=targetY*scaleFactor-matrixHeight/2;var maxInViewY=targetY*scaleFactor+matrixHeight/2;var inViewHeight=maxInViewY-minInViewY;var normalizedRowY=(rowI+0.5)/numRows;var globalRowY=minY+normalizedRowY*totalHeight;if(minInViewY<=globalRowY&&globalRowY<=maxInViewY){zoomedMouseY=offsetTop+(globalRowY-minInViewY)/inViewHeight*matrixHeight;}}if(colI!==null){var minX=-matrixWidth*scaleFactor/2;var maxX=matrixWidth*scaleFactor/2;var totalWidth=maxX-minX;var minInViewX=targetX*scaleFactor-matrixWidth/2;var maxInViewX=targetX*scaleFactor+matrixWidth/2;var inViewWidth=maxInViewX-minInViewX;var normalizedRowX=(colI+0.5)/numCols;var globalRowX=minX+normalizedRowX*totalWidth;if(minInViewX<=globalRowX&&globalRowX<=maxInViewX){zoomedMouseX=offsetLeft+(globalRowX-minInViewX)/inViewWidth*matrixWidth;}}return[zoomedMouseX,zoomedMouseY];}/**
 * Convert a mouse coordinate (x, y) to a heatmap color bar coordinate (cell index, track index).
 * @param {number} mouseX The mouse X of interest.
 * @param {number} mouseY The mouse Y of interest.
 * @param {object} param2 An object containing current sizes and scale factors.
 * @returns {number[]} [cellI, trackI]
 */function mouseToCellColorPosition(mouseX,mouseY,_ref6){var axisOffsetTop=_ref6.axisOffsetTop,axisOffsetLeft=_ref6.axisOffsetLeft,offsetTop=_ref6.offsetTop,offsetLeft=_ref6.offsetLeft,colorBarSize=_ref6.colorBarSize,numCellColorTracks=_ref6.numCellColorTracks,transpose=_ref6.transpose,targetX=_ref6.targetX,targetY=_ref6.targetY,scaleFactor=_ref6.scaleFactor,matrixWidth=_ref6.matrixWidth,matrixHeight=_ref6.matrixHeight,numRows=_ref6.numRows,numCols=_ref6.numCols;var cellPosition=transpose?mouseX-offsetLeft:mouseY-offsetTop;var trackPosition=transpose?mouseY-axisOffsetTop:mouseX-axisOffsetLeft;var tracksWidth=numCellColorTracks*colorBarSize;// outside of cell color tracks
if(cellPosition<0||trackPosition<0||trackPosition>=tracksWidth){return[null,null];}// Determine the trackI and cellI values based on the current viewState.
var trackI=Math.floor(trackPosition/colorBarSize);var cellI;if(transpose){var viewMouseX=mouseX-offsetLeft;var bboxTargetX=targetX*scaleFactor+matrixWidth*scaleFactor/2;var bboxLeft=bboxTargetX-matrixWidth/2;var zoomedOffsetLeft=bboxLeft/(matrixWidth*scaleFactor);var zoomedViewMouseX=viewMouseX/(matrixWidth*scaleFactor);var zoomedMouseX=zoomedOffsetLeft+zoomedViewMouseX;cellI=Math.floor(zoomedMouseX*numCols);return[cellI,trackI];}// Not transposed
var viewMouseY=mouseY-axisOffsetTop;var bboxTargetY=targetY*scaleFactor+matrixHeight*scaleFactor/2;var bboxTop=bboxTargetY-matrixHeight/2;var zoomedOffsetTop=bboxTop/(matrixHeight*scaleFactor);var zoomedViewMouseY=viewMouseY/(matrixHeight*scaleFactor);var zoomedMouseY=zoomedOffsetTop+zoomedViewMouseY;cellI=Math.floor(zoomedMouseY*numRows);return[cellI,trackI];}
// EXTERNAL MODULE: ./src/components/heatmap/heatmap.worker.js
var heatmap_worker = __webpack_require__(152);
var heatmap_worker_default = /*#__PURE__*/__webpack_require__.n(heatmap_worker);

// CONCATENATED MODULE: ./src/Pool.js
// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency
// We need to give a different way of getting this for safari, so 4 is probably a safe bet
// for parallel processing in the meantime.  More can't really hurt since they'll just block
// each other and not the UI thread, which is the real benefit.
var defaultPoolSize=typeof navigator!=='undefined'?navigator.hardwareConcurrency||4:null;/**
 * Pool for workers to decode chunks of the images.
 * This is a line-for-line copy of GeoTIFFs old implementation: https://github.com/geotiffjs/geotiff.js/blob/v1.0.0-beta.6/src/pool.js
 */var Pool_Pool=/*#__PURE__*/function(){/**
   * @constructor
   * @param {object} Worker The worker class to be used for processing.
   */function Pool(Worker){Object(classCallCheck["a" /* default */])(this,Pool);this.workers=[];this.idleWorkers=[];this.waitQueue=[];this.decoder=null;// eslint-disable-next-line no-plusplus
for(var i=0;i<defaultPoolSize;++i){var w=new Worker();this.workers.push(w);this.idleWorkers.push(w);}}// eslint-disable-next-line class-methods-use-this
Object(createClass["a" /* default */])(Pool,[{key:"process",value:function(){var _process=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:throw new Error('Pool needs to implement "process" method');case 1:case"end":return _context.stop();}}},_callee);}));function process(){return _process.apply(this,arguments);}return process;}()},{key:"waitForWorker",value:function(){var _waitForWorker=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(){var idleWorker,waiter,promise;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:idleWorker=this.idleWorkers.pop();if(!idleWorker){_context2.next=3;break;}return _context2.abrupt("return",idleWorker);case 3:waiter={};promise=new Promise(function(resolve){waiter.resolve=resolve;});this.waitQueue.push(waiter);return _context2.abrupt("return",promise);case 7:case"end":return _context2.stop();}}},_callee2,this);}));function waitForWorker(){return _waitForWorker.apply(this,arguments);}return waitForWorker;}()},{key:"finishTask",value:function(){var _finishTask=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee3(currentWorker){var waiter;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:waiter=this.waitQueue.pop();if(waiter){waiter.resolve(currentWorker);}else{this.idleWorkers.push(currentWorker);}case 2:case"end":return _context3.stop();}}},_callee3,this);}));function finishTask(_x){return _finishTask.apply(this,arguments);}return finishTask;}()},{key:"destroy",value:function destroy(){// eslint-disable-next-line no-plusplus
for(var i=0;i<this.workers.length;++i){this.workers[i].terminate();}}}]);return Pool;}();
// CONCATENATED MODULE: ./src/components/heatmap/HeatmapWorkerPool.js
// eslint-disable-line import/no-unresolved
/**
 * Pool for workers to decode chunks of the images.
 * This is a line-for-line copy of GeoTIFFs old implementation: https://github.com/geotiffjs/geotiff.js/blob/v1.0.0-beta.6/src/pool.js
 */var HeatmapWorkerPool_HeatmapPool=/*#__PURE__*/function(_Pool){Object(inherits["a" /* default */])(HeatmapPool,_Pool);var _super=Object(createSuper["a" /* default */])(HeatmapPool);function HeatmapPool(){Object(classCallCheck["a" /* default */])(this,HeatmapPool);return _super.call(this,heatmap_worker_default.a);}/**
   * Process each heatmap tile
   * @param {object} params The arguments passed to the heatmap worker.
   * @param {string} params.curr The current task uuid.
   * @param {number} params.xTiles How many tiles required in the x direction?
   * @param {number} params.yTiles How many tiles required in the y direction?
   * @param {number} params.tileSize How many entries along each tile axis?
   * @param {string[]} params.cellOrdering The current ordering of cells.
   * @param {string[]} params.rows The name of each row (cell ID).
   * Does not take transpose into account (always cells).
   * @param {string[]} params.cols The name of each column (gene ID).
   * Does not take transpose into account (always genes).
   * @param {ArrayBuffer} params.data The array buffer.
   * Need to transfer back to main thread when done.
   * @param {boolean} params.transpose Is the heatmap transposed?
   * @returns {array} [message, transfers]
   * @returns {Promise.<ArrayBuffer>} the decoded result as a `Promise`
   */Object(createClass["a" /* default */])(HeatmapPool,[{key:"process",value:function(){var _process=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(args){var _this=this;var currentWorker;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return this.waitForWorker();case 2:currentWorker=_context.sent;return _context.abrupt("return",new Promise(function(resolve,reject){currentWorker.onmessage=function(event){// this.workers.push(currentWorker);
_this.finishTask(currentWorker);resolve(event.data);};currentWorker.onerror=function(error){// this.workers.push(currentWorker);
_this.finishTask(currentWorker);reject(error);};currentWorker.postMessage(['getTile',args],[args.data]);}));case 4:case"end":return _context.stop();}}},_callee,this);}));function process(_x){return _process.apply(this,arguments);}return process;}()}]);return HeatmapPool;}(Pool_Pool);
// CONCATENATED MODULE: ./src/components/heatmap/Heatmap.js
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-line import/no-extraneous-dependencies
// Only allocate the memory once for the container
var paddedExpressionContainer=new Uint8Array(heatmap_constants["i" /* DATA_TEXTURE_SIZE */]*heatmap_constants["i" /* DATA_TEXTURE_SIZE */]);/**
 * Should the "padded" implementation
 * be used? Only works if the number of heatmap values is
 * <=  4096^2 = ~16 million.
 * @param {number|null} dataLength The number of heatmap values.
 * @returns {boolean} Whether the more efficient implementation should be used.
 */function shouldUsePaddedImplementation(dataLength){return dataLength<=Math.pow(heatmap_constants["i" /* DATA_TEXTURE_SIZE */],2);}/**
 * A heatmap component for cell x gene matrices.
 * @param {object} props
 * @param {string} props.uuid The uuid of this component,
 * used by tooltips to determine whether to render a tooltip or
 * a crosshair.
 * @param {string} props.theme The current theme name.
 * @param {object} props.viewState The viewState for
 * DeckGL.
 * @param {function} props.setViewState The viewState setter
 * for DeckGL.
 * @param {number} props.width The width of the canvas.
 * @param {number} props.height The height of the canvas.
 * @param {object} props.expressionMatrix An object { rows, cols, matrix },
 * where matrix is a flat Uint8Array, rows is a list of cell ID strings,
 * and cols is a list of gene ID strings.
 * @param {Map} props.cellColors Map of cell ID to color. Optional.
 * If defined, the key ordering is used to order the cell axis of the heatmap.
 * @param {array} props.cellColorLabels array of labels to place beside cell color
 * tracks. Only works for transpose=true.
 * @param {function} props.clearPleaseWait The clear please wait callback,
 * called when the expression matrix has loaded (is not null).
 * @param {function} props.setCellHighlight Callback function called on
 * hover with the cell ID. Optional.
 * @param {function} props.setGeneHighlight Callback function called on
 * hover with the gene ID. Optional.
 * @param {function} props.updateViewInfo Callback function that gets called with an
 * object { uuid, project() } where project is a function that maps (cellId, geneId)
 * to canvas (x,y) coordinates. Used to show tooltips. Optional.
 * @param {boolean} props.transpose By default, false.
 * @param {string} props.variablesTitle By default, 'Genes'.
 * @param {string} props.observationsTitle By default, 'Cells'.
 * @param {number} props.useDevicePixels By default, 1. Higher values
 * e.g. 2 increase text sharpness.
 * @param {boolean} props.hideObservationLabels By default false.
 * @param {boolean} props.hideVariableLabels By default false.
 * @param {string} props.colormap The name of the colormap function to use.
 * @param {array} props.colormapRange A tuple [lower, upper] to adjust the color scale.
 * @param {function} props.setColormapRange The setter function for colormapRange.
 */var Heatmap=Object(external_react_["forwardRef"])(function(props,deckRef){var _heatmapLayers$concat;var uuid=props.uuid,theme=props.theme,rawViewState=props.viewState,setViewState=props.setViewState,viewWidth=props.width,viewHeight=props.height,expression=props.expressionMatrix,cellColors=props.cellColors,_props$cellColorLabel=props.cellColorLabels,cellColorLabels=_props$cellColorLabel===void 0?['']:_props$cellColorLabel,colormap=props.colormap,colormapRange=props.colormapRange,clearPleaseWait=props.clearPleaseWait,setComponentHover=props.setComponentHover,_props$setCellHighlig=props.setCellHighlight,setCellHighlight=_props$setCellHighlig===void 0?Object(components_utils["i" /* createDefaultUpdateCellsHover */])('Heatmap'):_props$setCellHighlig,_props$setGeneHighlig=props.setGeneHighlight,setGeneHighlight=_props$setGeneHighlig===void 0?Object(components_utils["j" /* createDefaultUpdateGenesHover */])('Heatmap'):_props$setGeneHighlig,_props$setTrackHighli=props.setTrackHighlight,setTrackHighlight=_props$setTrackHighli===void 0?Object(components_utils["k" /* createDefaultUpdateTracksHover */])('Heatmap'):_props$setTrackHighli,_props$updateViewInfo=props.updateViewInfo,updateViewInfo=_props$updateViewInfo===void 0?Object(components_utils["l" /* createDefaultUpdateViewInfo */])('Heatmap'):_props$updateViewInfo,_props$setIsRendering=props.setIsRendering,setIsRendering=_props$setIsRendering===void 0?function(){}:_props$setIsRendering,_props$transpose=props.transpose,transpose=_props$transpose===void 0?false:_props$transpose,_props$variablesTitle=props.variablesTitle,variablesTitle=_props$variablesTitle===void 0?'Genes':_props$variablesTitle,_props$observationsTi=props.observationsTitle,observationsTitle=_props$observationsTi===void 0?'Cells':_props$observationsTi,_props$variablesDashe=props.variablesDashes,variablesDashes=_props$variablesDashe===void 0?true:_props$variablesDashe,_props$observationsDa=props.observationsDashes,observationsDashes=_props$observationsDa===void 0?true:_props$observationsDa,_props$useDevicePixel=props.useDevicePixels,useDevicePixels=_props$useDevicePixel===void 0?1:_props$useDevicePixel,_props$hideObservatio=props.hideObservationLabels,hideObservationLabels=_props$hideObservatio===void 0?false:_props$hideObservatio,_props$hideVariableLa=props.hideVariableLabels,hideVariableLabels=_props$hideVariableLa===void 0?false:_props$hideVariableLa;var viewState=Object(objectSpread2["a" /* default */])({},rawViewState,{target:transpose?[rawViewState.target[1],rawViewState.target[0]]:rawViewState.target,minZoom:0});var axisLeftTitle=transpose?variablesTitle:observationsTitle;var axisTopTitle=transpose?observationsTitle:variablesTitle;var workerPool=Object(external_react_["useMemo"])(function(){return new HeatmapWorkerPool_HeatmapPool();},[]);Object(external_react_["useEffect"])(function(){if(clearPleaseWait&&expression){clearPleaseWait('expression-matrix');}},[clearPleaseWait,expression]);var tilesRef=Object(external_react_["useRef"])();var dataRef=Object(external_react_["useRef"])();var _useState=Object(external_react_["useState"])([]),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),axisLeftLabels=_useState2[0],setAxisLeftLabels=_useState2[1];var _useState3=Object(external_react_["useState"])([]),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),axisTopLabels=_useState4[0],setAxisTopLabels=_useState4[1];var _useState5=Object(external_react_["useState"])([]),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),numCellColorTracks=_useState6[0],setNumCellColorTracks=_useState6[1];// Since we are storing the tile data in a ref,
// and updating it asynchronously when the worker finishes,
// we need to tie it to a piece of state through this iteration value.
var _useReducer=Object(external_react_["useReducer"])(function(i){return i+1;},0),_useReducer2=Object(slicedToArray["a" /* default */])(_useReducer,2),tileIteration=_useReducer2[0],incTileIteration=_useReducer2[1];// We need to keep a backlog of the tasks for the worker thread,
// since the array buffer can only be held by one thread at a time.
var _useState7=Object(external_react_["useState"])([]),_useState8=Object(slicedToArray["a" /* default */])(_useState7,2),backlog=_useState8[0],setBacklog=_useState8[1];// Store a reference to the matrix Uint8Array in the dataRef,
// since we need to access its array buffer to transfer
// it back and forth from the worker thread.
Object(external_react_["useEffect"])(function(){// Store the expression matrix Uint8Array in the dataRef.
if(expression&&expression.matrix&&!shouldUsePaddedImplementation(expression.matrix.length)){dataRef.current=Object(components_utils["h" /* copyUint8Array */])(expression.matrix);}},[dataRef,expression]);// Check if the ordering of axis labels needs to be changed,
// for example if the cells "selected" (technically just colored)
// have changed.
Object(external_react_["useEffect"])(function(){if(!expression){return;}var newCellOrdering=!cellColors||cellColors.size===0?expression.rows:Array.from(cellColors.keys());var oldCellOrdering=transpose?axisTopLabels:axisLeftLabels;if(!isEqual_default()(oldCellOrdering,newCellOrdering)){if(transpose){setAxisTopLabels(newCellOrdering);}else{setAxisLeftLabels(newCellOrdering);}}},[expression,cellColors,axisTopLabels,axisLeftLabels,transpose]);// Set the genes ordering.
Object(external_react_["useEffect"])(function(){if(!expression){return;}if(transpose){setAxisLeftLabels(expression.cols);}else{setAxisTopLabels(expression.cols);}},[expression,transpose]);var _useMemo=Object(external_react_["useMemo"])(function(){if(!expression){return['',''];}return[Object(utils["c" /* getLongestString */])(expression.rows),Object(utils["c" /* getLongestString */])([].concat(Object(toConsumableArray["a" /* default */])(expression.cols),Object(toConsumableArray["a" /* default */])(cellColorLabels)))];},[expression,cellColorLabels]),_useMemo2=Object(slicedToArray["a" /* default */])(_useMemo,2),longestCellLabel=_useMemo2[0],longestGeneLabel=_useMemo2[1];// Creating a look up dictionary once is faster than calling indexOf many times
// i.e when cell ordering changes.
var expressionRowLookUp=Object(external_react_["useMemo"])(function(){var lookUp=new Map();if(expression===null||expression===void 0?void 0:expression.rows){// eslint-disable-next-line no-return-assign
expression.rows.forEach(function(cell,j){return lookUp.set(cell,j);});}return lookUp;},[expression]);var width=axisTopLabels.length;var height=axisLeftLabels.length;var _getAxisSizes=getAxisSizes(transpose,longestGeneLabel,longestCellLabel,hideObservationLabels,hideVariableLabels),_getAxisSizes2=Object(slicedToArray["a" /* default */])(_getAxisSizes,2),axisOffsetLeft=_getAxisSizes2[0],axisOffsetTop=_getAxisSizes2[1];var _useState9=Object(external_react_["useState"])(null),_useState10=Object(slicedToArray["a" /* default */])(_useState9,2),gl=_useState10[0],setGlContext=_useState10[1];var offsetTop=axisOffsetTop+heatmap_constants["h" /* COLOR_BAR_SIZE */]*(transpose?numCellColorTracks:0);var offsetLeft=axisOffsetLeft+heatmap_constants["h" /* COLOR_BAR_SIZE */]*(transpose?0:numCellColorTracks);var matrixWidth=viewWidth-offsetLeft;var matrixHeight=viewHeight-offsetTop;var matrixLeft=-matrixWidth/2;var matrixRight=matrixWidth/2;var matrixTop=-matrixHeight/2;var matrixBottom=matrixHeight/2;var xTiles=Math.ceil(width/heatmap_constants["n" /* TILE_SIZE */]);var yTiles=Math.ceil(height/heatmap_constants["n" /* TILE_SIZE */]);var widthRatio=1-(heatmap_constants["n" /* TILE_SIZE */]-width%heatmap_constants["n" /* TILE_SIZE */])/(xTiles*heatmap_constants["n" /* TILE_SIZE */]);var heightRatio=1-(heatmap_constants["n" /* TILE_SIZE */]-height%heatmap_constants["n" /* TILE_SIZE */])/(yTiles*heatmap_constants["n" /* TILE_SIZE */]);var tileWidth=matrixWidth/widthRatio/xTiles;var tileHeight=matrixHeight/heightRatio/yTiles;var scaleFactor=Math.pow(2,viewState.zoom);var cellHeight=matrixHeight*scaleFactor/height;var cellWidth=matrixWidth*scaleFactor/width;// Get power of 2 between 1 and 16,
// for number of cells to aggregate together in each direction.
var aggSizeX=clamp_default()(Math.pow(2,Math.ceil(Math.log2(1/cellWidth))),heatmap_constants["k" /* MIN_ROW_AGG */],heatmap_constants["j" /* MAX_ROW_AGG */]);var aggSizeY=clamp_default()(Math.pow(2,Math.ceil(Math.log2(1/cellHeight))),heatmap_constants["k" /* MIN_ROW_AGG */],heatmap_constants["j" /* MAX_ROW_AGG */]);var _viewState$target=Object(slicedToArray["a" /* default */])(viewState.target,2),targetX=_viewState$target[0],targetY=_viewState$target[1];// Emit the viewInfo object on viewState updates
// (used by tooltips / crosshair elements).
Object(external_react_["useEffect"])(function(){updateViewInfo({uuid:uuid,project:function project(cellId,geneId){var colI=transpose?axisTopLabels.indexOf(cellId):axisTopLabels.indexOf(geneId);var rowI=transpose?axisLeftLabels.indexOf(geneId):axisLeftLabels.indexOf(cellId);return heatmapToMousePosition(colI,rowI,{offsetLeft:offsetLeft,offsetTop:offsetTop,targetX:viewState.target[0],targetY:viewState.target[1],scaleFactor:scaleFactor,matrixWidth:matrixWidth,matrixHeight:matrixHeight,numRows:height,numCols:width});}});},[uuid,updateViewInfo,transpose,axisTopLabels,axisLeftLabels,offsetLeft,offsetTop,viewState,scaleFactor,matrixWidth,matrixHeight,height,width]);// Listen for viewState changes.
// Do not allow the user to zoom and pan outside of the initial window.
var onViewStateChange=Object(external_react_["useCallback"])(function(_ref){var nextViewState=_ref.viewState;var nextZoom=nextViewState.zoom;var nextScaleFactor=Math.pow(2,nextZoom);var minTargetX=nextZoom===0?0:-(matrixRight-matrixRight/nextScaleFactor);var maxTargetX=-1*minTargetX;var minTargetY=nextZoom===0?0:-(matrixBottom-matrixBottom/nextScaleFactor);var maxTargetY=-1*minTargetY;// Manipulate view state if necessary to keep the user in the window.
var nextTarget=[clamp_default()(nextViewState.target[0],minTargetX,maxTargetX),clamp_default()(nextViewState.target[1],minTargetY,maxTargetY)];setViewState({zoom:nextZoom,target:transpose?[nextTarget[1],nextTarget[0]]:nextTarget});},[matrixRight,matrixBottom,transpose,setViewState]);// If `expression` or `cellOrdering` have changed,
// then new tiles need to be generated,
// so add a new task to the backlog.
Object(external_react_["useEffect"])(function(){if(!expression||!expression.matrix||expression.matrix.length<Math.pow(heatmap_constants["i" /* DATA_TEXTURE_SIZE */],2)){return;}// Use a uuid to give the task a unique ID,
// to help identify where in the list it is located
// after the worker thread asynchronously sends the data back
// to this thread.
if(axisTopLabels&&axisLeftLabels&&xTiles&&yTiles){setBacklog(function(prev){return[].concat(Object(toConsumableArray["a" /* default */])(prev),[v4_default()()]);});}},[dataRef,expression,axisTopLabels,axisLeftLabels,xTiles,yTiles]);// When the backlog has updated, a new worker job can be submitted if:
// - the backlog has length >= 1 (at least one job is waiting), and
// - buffer.byteLength is not zero, so the worker does not currently "own" the buffer.
Object(external_react_["useEffect"])(function(){if(backlog.length<1||shouldUsePaddedImplementation(dataRef.current.length)){return;}var curr=backlog[backlog.length-1];if(dataRef.current&&dataRef.current.buffer.byteLength&&expressionRowLookUp.size>0&&!shouldUsePaddedImplementation(dataRef.current.length)){var cols=expression.cols,matrix=expression.matrix;var promises=range_default()(yTiles).map(function(i){return range_default()(xTiles).map(/*#__PURE__*/function(){var _ref2=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(j){return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",workerPool.process({curr:curr,tileI:i,tileJ:j,tileSize:heatmap_constants["n" /* TILE_SIZE */],cellOrdering:transpose?axisTopLabels:axisLeftLabels,cols:cols,transpose:transpose,data:matrix.buffer.slice(),expressionRowLookUp:expressionRowLookUp}));case 1:case"end":return _context.stop();}}},_callee);}));return function(_x){return _ref2.apply(this,arguments);};}());});var process=/*#__PURE__*/function(){var _ref3=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(){var tiles,currWork;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return Promise.all(promises.flat());case 2:tiles=_context2.sent;tilesRef.current=tiles.map(function(i){return i.tile;});incTileIteration();dataRef.current=new Uint8Array(tiles[0].buffer);currWork=tiles[0].curr;setBacklog(function(prev){var currIndex=prev.indexOf(currWork);return prev.slice(currIndex+1,prev.length);});case 8:case"end":return _context2.stop();}}},_callee2);}));return function process(){return _ref3.apply(this,arguments);};}();process();}},[axisLeftLabels,axisTopLabels,backlog,expression,transpose,xTiles,yTiles,workerPool,expressionRowLookUp]);Object(external_react_["useEffect"])(function(){setIsRendering(backlog.length>0);},[backlog,setIsRendering]);// Create the padded expression matrix for holding data which can then be bound to the GPU.
var paddedExpressions=Object(external_react_["useMemo"])(function(){var cellOrdering=transpose?axisTopLabels:axisLeftLabels;if((expression===null||expression===void 0?void 0:expression.matrix)&&cellOrdering.length&&gl&&shouldUsePaddedImplementation(expression.matrix.length)){var newIndex=0;for(var cellOrderingIndex=0;cellOrderingIndex<cellOrdering.length;cellOrderingIndex+=1){var cell=cellOrdering[cellOrderingIndex];newIndex=transpose?cellOrderingIndex:newIndex;var cellIndex=expressionRowLookUp.get(cell);for(var geneIndex=0;geneIndex<expression.cols.length;geneIndex+=1){var index=cellIndex*expression.cols.length+geneIndex;paddedExpressionContainer[newIndex%(heatmap_constants["i" /* DATA_TEXTURE_SIZE */]*heatmap_constants["i" /* DATA_TEXTURE_SIZE */])]=expression.matrix[index];newIndex=transpose?newIndex+cellOrdering.length:newIndex+1;}}}return gl?new core_["Texture2D"](gl,{data:paddedExpressionContainer,mipmaps:false,parameters:heatmap_constants["l" /* PIXELATED_TEXTURE_PARAMETERS */],// Each color contains a single luminance value.
// When sampled, rgb are all set to this luminance, alpha is 1.0.
// Reference: https://luma.gl/docs/api-reference/webgl/texture#texture-formats
format:constants_default.a.LUMINANCE,dataFormat:constants_default.a.LUMINANCE,type:constants_default.a.UNSIGNED_BYTE,width:heatmap_constants["i" /* DATA_TEXTURE_SIZE */],height:heatmap_constants["i" /* DATA_TEXTURE_SIZE */]}):paddedExpressionContainer;},[transpose,axisTopLabels,axisLeftLabels,expression,expressionRowLookUp,gl]);// Update the heatmap tiles if:
// - new tiles are available (`tileIteration` has changed), or
// - the matrix bounds have changed, or
// - the `aggSizeX` or `aggSizeY` have changed, or
// - the cell ordering has changed.
var heatmapLayers=Object(external_react_["useMemo"])(function(){var usePaddedExpressions=(expression===null||expression===void 0?void 0:expression.matrix)&&shouldUsePaddedImplementation(expression===null||expression===void 0?void 0:expression.matrix.length);if((!tilesRef.current||backlog.length)&&!usePaddedExpressions){return[];}if(usePaddedExpressions){var cellOrdering=transpose?axisTopLabels:axisLeftLabels;// eslint-disable-next-line no-inner-declarations, no-shadow
function _getLayer(i,j){var cols=expression.cols;return new PaddedExpressionHeatmapBitmapLayer_PaddedExpressionHeatmapBitmapLayer({id:"heatmapLayer-".concat(i,"-").concat(j),image:paddedExpressions,bounds:[matrixLeft+j*tileWidth,matrixTop+i*tileHeight,matrixLeft+(j+1)*tileWidth,matrixTop+(i+1)*tileHeight],tileI:i,tileJ:j,numXTiles:xTiles,numYTiles:yTiles,origDataSize:transpose?[cols.length,cellOrdering.length]:[cellOrdering.length,cols.length],aggSizeX:aggSizeX,aggSizeY:aggSizeY,colormap:colormap,colorScaleLo:colormapRange[0],colorScaleHi:colormapRange[1],updateTriggers:{image:[axisLeftLabels,axisTopLabels],bounds:[tileHeight,tileWidth]}});}var _layers=range_default()(yTiles*xTiles).map(function(index){return _getLayer(Math.floor(index/xTiles),index%xTiles);});return _layers;}function getLayer(i,j,tile){return new HeatmapBitmapLayer["a" /* default */]({id:"heatmapLayer-".concat(tileIteration,"-").concat(i,"-").concat(j),image:tile,bounds:[matrixLeft+j*tileWidth,matrixTop+i*tileHeight,matrixLeft+(j+1)*tileWidth,matrixTop+(i+1)*tileHeight],aggSizeX:aggSizeX,aggSizeY:aggSizeY,colormap:colormap,colorScaleLo:colormapRange[0],colorScaleHi:colormapRange[1],updateTriggers:{image:[axisLeftLabels,axisTopLabels],bounds:[tileHeight,tileWidth]}});}var layers=tilesRef.current.map(function(tile,index){return getLayer(Math.floor(index/xTiles),index%xTiles,tile);});return layers;},[expression,backlog.length,transpose,axisTopLabels,axisLeftLabels,yTiles,xTiles,paddedExpressions,matrixLeft,tileWidth,matrixTop,tileHeight,aggSizeX,aggSizeY,colormap,colormapRange,tileIteration]);var axisLeftDashes=transpose?variablesDashes:observationsDashes;var axisTopDashes=transpose?observationsDashes:variablesDashes;// Map cell and gene names to arrays with indices,
// to prepare to render the names in TextLayers.
var axisTopLabelData=Object(external_react_["useMemo"])(function(){return axisTopLabels.map(function(d,i){return[i,axisTopDashes?"- ".concat(d):d];});},[axisTopLabels,axisTopDashes]);var axisLeftLabelData=Object(external_react_["useMemo"])(function(){return axisLeftLabels.map(function(d,i){return[i,axisLeftDashes?"".concat(d," -"):d];});},[axisLeftLabels,axisLeftDashes]);var cellColorLabelsData=Object(external_react_["useMemo"])(function(){return cellColorLabels.map(function(d,i){return[i,d&&(transpose?"".concat(d," -"):"- ".concat(d))];});},[cellColorLabels,transpose]);var hideTopLabels=transpose?hideObservationLabels:hideVariableLabels;var hideLeftLabels=transpose?hideVariableLabels:hideObservationLabels;// Generate the axis label, axis title, and loading indicator text layers.
var textLayers=[new HeatmapCompositeTextLayer["a" /* default */]({axis:'left',id:'axisLeftCompositeTextLayer',targetX:targetX,targetY:targetY,scaleFactor:scaleFactor,axisLeftLabelData:axisLeftLabelData,matrixTop:matrixTop,height:height,matrixHeight:matrixHeight,cellHeight:cellHeight,cellWidth:cellWidth,axisTopLabelData:axisTopLabelData,matrixLeft:matrixLeft,width:width,matrixWidth:matrixWidth,viewHeight:viewHeight,viewWidth:viewWidth,theme:theme,axisLeftTitle:axisLeftTitle,axisTopTitle:axisTopTitle,axisOffsetLeft:axisOffsetLeft,axisOffsetTop:axisOffsetTop,hideTopLabels:hideTopLabels,hideLeftLabels:hideLeftLabels,transpose:transpose}),new HeatmapCompositeTextLayer["a" /* default */]({axis:'top',id:'axisTopCompositeTextLayer',targetX:targetX,targetY:targetY,scaleFactor:scaleFactor,axisLeftLabelData:axisLeftLabelData,matrixTop:matrixTop,height:height,matrixHeight:matrixHeight,cellHeight:cellHeight,cellWidth:cellWidth,axisTopLabelData:axisTopLabelData,matrixLeft:matrixLeft,width:width,matrixWidth:matrixWidth,viewHeight:viewHeight,viewWidth:viewWidth,theme:theme,axisLeftTitle:axisLeftTitle,axisTopTitle:axisTopTitle,axisOffsetLeft:axisOffsetLeft,axisOffsetTop:axisOffsetTop,cellColorLabelsData:cellColorLabelsData,hideTopLabels:hideTopLabels,hideLeftLabels:hideLeftLabels,transpose:transpose}),new HeatmapCompositeTextLayer["a" /* default */]({axis:'corner',id:'cellColorLabelCompositeTextLayer',targetX:targetX,targetY:targetY,scaleFactor:scaleFactor,axisLeftLabelData:axisLeftLabelData,matrixTop:matrixTop,height:height,matrixHeight:matrixHeight,cellHeight:cellHeight,cellWidth:cellWidth,axisTopLabelData:axisTopLabelData,matrixLeft:matrixLeft,width:width,matrixWidth:matrixWidth,viewHeight:viewHeight,viewWidth:viewWidth,theme:theme,axisLeftTitle:axisLeftTitle,axisTopTitle:axisTopTitle,axisOffsetLeft:axisOffsetLeft,axisOffsetTop:axisOffsetTop,cellColorLabelsData:cellColorLabelsData,hideTopLabels:hideTopLabels,hideLeftLabels:hideLeftLabels,transpose:transpose})];Object(external_react_["useEffect"])(function(){setNumCellColorTracks(cellColorLabels.length);},[cellColorLabels]);// Create the left color bar with a BitmapLayer.
// TODO: find a way to do aggregation for this as well.
var cellColorsTilesList=Object(external_react_["useMemo"])(function(){if(!cellColors){return null;}var cellId;var offset;var color;var rowI;var cellOrdering=transpose?axisTopLabels:axisLeftLabels;var colorBarTileWidthPx=transpose?heatmap_constants["n" /* TILE_SIZE */]:1;var colorBarTileHeightPx=transpose?1:heatmap_constants["n" /* TILE_SIZE */];var result=range_default()(numCellColorTracks).map(function(track){var trackResult=range_default()(transpose?xTiles:yTiles).map(function(i){var tileData=new Uint8ClampedArray(heatmap_constants["n" /* TILE_SIZE */]*1*4);range_default()(heatmap_constants["n" /* TILE_SIZE */]).forEach(function(tileY){rowI=i*heatmap_constants["n" /* TILE_SIZE */]+tileY;// the row / cell index
if(rowI<cellOrdering.length){cellId=cellOrdering[rowI];color=cellColors.get(cellId);offset=(transpose?tileY:heatmap_constants["n" /* TILE_SIZE */]-tileY-1)*4;if(color){var _color$track;// allows color to be [R, G, B] or array of arrays of [R, G, B]
if(typeof color[0]!=='number')color=(_color$track=color[track])!==null&&_color$track!==void 0?_color$track:Object(components_utils["o" /* getDefaultColor */])(theme);var _color=color,_color2=Object(slicedToArray["a" /* default */])(_color,3),rValue=_color2[0],gValue=_color2[1],bValue=_color2[2];tileData[offset+0]=rValue;tileData[offset+1]=gValue;tileData[offset+2]=bValue;tileData[offset+3]=255;}}});return new ImageData(tileData,colorBarTileWidthPx,colorBarTileHeightPx);});return trackResult;});return result;},[cellColors,transpose,axisTopLabels,axisLeftLabels,numCellColorTracks,xTiles,yTiles,theme]);var cellColorsLayersList=Object(external_react_["useMemo"])(function(){if(!cellColorsTilesList){return[];}var result=cellColorsTilesList.map(function(cellColorsTiles,track){return cellColorsTiles?cellColorsTiles.map(function(tile,i){return new PixelatedBitmapLayer["a" /* default */]({id:"".concat(transpose?'colorsTopLayer':'colorsLeftLayer',"-").concat(track,"-").concat(i,"-").concat(v4_default()()),image:tile,bounds:transpose?[matrixLeft+i*tileWidth,-matrixHeight/2,matrixLeft+(i+1)*tileWidth,matrixHeight/2]:[-matrixWidth/2,matrixTop+i*tileHeight,matrixWidth/2,matrixTop+(i+1)*tileHeight]});}):[];});return result;},[cellColorsTilesList,matrixTop,matrixLeft,matrixHeight,matrixWidth,tileWidth,tileHeight,transpose]);var layers=(_heatmapLayers$concat=heatmapLayers.concat(textLayers)).concat.apply(_heatmapLayers$concat,Object(toConsumableArray["a" /* default */])(cellColorsLayersList));// Set up the onHover function.
function onHover(info,event){if(!expression){return;}var _event$offsetCenter=event.offsetCenter,mouseX=_event$offsetCenter.x,mouseY=_event$offsetCenter.y;var _mouseToCellColorPosi=mouseToCellColorPosition(mouseX,mouseY,{axisOffsetTop:axisOffsetTop,axisOffsetLeft:axisOffsetLeft,offsetTop:offsetTop,offsetLeft:offsetLeft,colorBarSize:heatmap_constants["h" /* COLOR_BAR_SIZE */],numCellColorTracks:numCellColorTracks,transpose:transpose,targetX:targetX,targetY:targetY,scaleFactor:scaleFactor,matrixWidth:matrixWidth,matrixHeight:matrixHeight,numRows:height,numCols:width}),_mouseToCellColorPosi2=Object(slicedToArray["a" /* default */])(_mouseToCellColorPosi,2),trackColI=_mouseToCellColorPosi2[0],trackI=_mouseToCellColorPosi2[1];if(trackI===null||trackColI===null){setTrackHighlight(null);}else{var _obsI=expression.rows.indexOf(axisTopLabels[trackColI]);var cellIndex=expression.rows[_obsI];setTrackHighlight([cellIndex,trackI,mouseX,mouseY]);}var _mouseToHeatmapPositi=mouseToHeatmapPosition(mouseX,mouseY,{offsetLeft:offsetLeft,offsetTop:offsetTop,targetX:targetX,targetY:targetY,scaleFactor:scaleFactor,matrixWidth:matrixWidth,matrixHeight:matrixHeight,numRows:height,numCols:width}),_mouseToHeatmapPositi2=Object(slicedToArray["a" /* default */])(_mouseToHeatmapPositi,2),colI=_mouseToHeatmapPositi2[0],rowI=_mouseToHeatmapPositi2[1];if(colI===null){if(transpose){setCellHighlight(null);}else{setGeneHighlight(null);}}if(rowI===null){if(transpose){setGeneHighlight(null);}else{setCellHighlight(null);}}var obsI=expression.rows.indexOf(transpose?axisTopLabels[colI]:axisLeftLabels[rowI]);var varI=expression.cols.indexOf(transpose?axisLeftLabels[rowI]:axisTopLabels[colI]);var obsId=expression.rows[obsI];var varId=expression.cols[varI];if(setComponentHover){setComponentHover();}setCellHighlight(obsId||null);setGeneHighlight(varId||null);}var cellColorsViews=Object(external_react_["useMemo"])(function(){var result=range_default()(numCellColorTracks).map(function(track){var view;if(transpose){view=new external_deck_gl_core_["OrthographicView"]({id:"colorsTop-".concat(track),controller:true,x:offsetLeft,y:axisOffsetTop+track*heatmap_constants["h" /* COLOR_BAR_SIZE */],width:matrixWidth,height:heatmap_constants["h" /* COLOR_BAR_SIZE */]-heatmap_constants["c" /* AXIS_MARGIN */]});}else{view=new external_deck_gl_core_["OrthographicView"]({id:"colorsLeft-".concat(track),controller:true,x:axisOffsetLeft+track*heatmap_constants["h" /* COLOR_BAR_SIZE */],y:offsetTop,width:heatmap_constants["h" /* COLOR_BAR_SIZE */]-heatmap_constants["c" /* AXIS_MARGIN */],height:matrixHeight});}return view;});return result;},[numCellColorTracks,transpose,offsetLeft,axisOffsetTop,matrixWidth,axisOffsetLeft,offsetTop,matrixHeight]);return/*#__PURE__*/external_react_default.a.createElement(external_deck_gl_default.a,{id:"deckgl-overlay-".concat(uuid),ref:deckRef,onWebGLInitialized:setGlContext,views:[// Note that there are multiple views here,
// but only one viewState.
new external_deck_gl_core_["OrthographicView"]({id:'heatmap',controller:true,x:offsetLeft,y:offsetTop,width:matrixWidth,height:matrixHeight}),new external_deck_gl_core_["OrthographicView"]({id:'axisLeft',controller:false,x:0,y:offsetTop,width:axisOffsetLeft,height:matrixHeight}),new external_deck_gl_core_["OrthographicView"]({id:'axisTop',controller:false,x:offsetLeft,y:0,width:matrixWidth,height:axisOffsetTop}),new external_deck_gl_core_["OrthographicView"]({id:'cellColorLabel',controller:false,x:transpose?0:axisOffsetLeft,y:transpose?axisOffsetTop:0,width:transpose?axisOffsetLeft:heatmap_constants["h" /* COLOR_BAR_SIZE */]*numCellColorTracks,height:transpose?heatmap_constants["h" /* COLOR_BAR_SIZE */]*numCellColorTracks:axisOffsetTop})].concat(Object(toConsumableArray["a" /* default */])(cellColorsViews)),layers:layers,layerFilter:layerFilter,getCursor:function getCursor(interactionState){return interactionState.isDragging?'grabbing':'default';},glOptions:components_utils["b" /* DEFAULT_GL_OPTIONS */],onViewStateChange:onViewStateChange,viewState:viewState,onHover:onHover,useDevicePixels:useDevicePixels});});/* harmony default export */ var heatmap_Heatmap = __webpack_exports__["a"] = (Heatmap);

/***/ }),
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(3);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/TitleInfo.js + 1 modules
var TitleInfo = __webpack_require__(39);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(6);

// EXTERNAL MODULE: ./src/components/hooks.js
var hooks = __webpack_require__(18);

// EXTERNAL MODULE: ./src/components/utils.js
var components_utils = __webpack_require__(12);

// EXTERNAL MODULE: ./src/components/data-hooks.js
var data_hooks = __webpack_require__(26);

// EXTERNAL MODULE: ./src/components/interpolate-colors.js
var interpolate_colors = __webpack_require__(99);

// EXTERNAL MODULE: ./src/app/state/hooks.js
var state_hooks = __webpack_require__(7);

// EXTERNAL MODULE: ./src/app/state/coordination.js
var coordination = __webpack_require__(30);

// EXTERNAL MODULE: ./src/components/heatmap/Heatmap.js + 5 modules
var Heatmap = __webpack_require__(122);

// EXTERNAL MODULE: ./src/components/tooltip/Tooltip2D.js
var Tooltip2D = __webpack_require__(89);

// EXTERNAL MODULE: ./src/components/tooltip/TooltipContent.js
var TooltipContent = __webpack_require__(90);

// CONCATENATED MODULE: ./src/components/heatmap/HeatmapTooltipSubscriber.js
function HeatmapTooltipSubscriber(props){var parentUuid=props.parentUuid,width=props.width,height=props.height,transpose=props.transpose,getCellInfo=props.getCellInfo,getGeneInfo=props.getGeneInfo,cellHighlight=props.cellHighlight,geneHighlight=props.geneHighlight;var sourceUuid=Object(state_hooks["g" /* useComponentHover */])();var viewInfo=Object(state_hooks["i" /* useComponentViewInfo */])(parentUuid);var _ref=cellHighlight&&getCellInfo?[getCellInfo(cellHighlight),viewInfo&&viewInfo.project?viewInfo.project(cellHighlight,null)[transpose?0:1]:null]:[null,null],_ref2=Object(slicedToArray["a" /* default */])(_ref,2),cellInfo=_ref2[0],cellCoord=_ref2[1];var _ref3=geneHighlight&&getGeneInfo?[getGeneInfo(geneHighlight),viewInfo&&viewInfo.project?viewInfo.project(null,geneHighlight)[transpose?1:0]:null]:[null,null],_ref4=Object(slicedToArray["a" /* default */])(_ref3,2),geneInfo=_ref4[0],geneCoord=_ref4[1];var x=transpose?cellCoord:geneCoord;var y=transpose?geneCoord:cellCoord;return cellInfo||geneInfo?/*#__PURE__*/external_react_default.a.createElement(Tooltip2D["a" /* default */],{x:x,y:y,parentUuid:parentUuid,parentWidth:width,parentHeight:height,sourceUuid:sourceUuid},/*#__PURE__*/external_react_default.a.createElement(TooltipContent["a" /* default */],{info:Object(objectSpread2["a" /* default */])({},geneInfo,{},cellInfo)})):null;}
// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(36);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: external "@material-ui/core/Slider"
var Slider_ = __webpack_require__(45);
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider_);

// EXTERNAL MODULE: external "@material-ui/core/TableCell"
var TableCell_ = __webpack_require__(25);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);

// EXTERNAL MODULE: external "@material-ui/core/TableRow"
var TableRow_ = __webpack_require__(42);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);

// EXTERNAL MODULE: ./src/components/shared-plot-options/styles.js
var styles = __webpack_require__(48);

// EXTERNAL MODULE: ./src/components/shared-plot-options/OptionsContainer.js
var OptionsContainer = __webpack_require__(95);

// EXTERNAL MODULE: ./src/components/shared-plot-options/OptionSelect.js
var OptionSelect = __webpack_require__(63);

// EXTERNAL MODULE: ./src/layers/constants.js
var constants = __webpack_require__(29);

// CONCATENATED MODULE: ./src/components/heatmap/HeatmapOptions.js
function HeatmapOptions(props){var geneExpressionColormap=props.geneExpressionColormap,setGeneExpressionColormap=props.setGeneExpressionColormap,geneExpressionColormapRange=props.geneExpressionColormapRange,setGeneExpressionColormapRange=props.setGeneExpressionColormapRange;var classes=Object(styles["a" /* useStyles */])();function handleGeneExpressionColormapChange(event){setGeneExpressionColormap(event.target.value);}function handleColormapRangeChange(event,value){setGeneExpressionColormapRange(value);}var handleColormapRangeChangeDebounced=Object(external_react_["useCallback"])(debounce_default()(handleColormapRangeChange,5,{trailing:true}),[handleColormapRangeChange]);return/*#__PURE__*/external_react_default.a.createElement(OptionsContainer["a" /* default */],null,/*#__PURE__*/external_react_default.a.createElement(TableRow_default.a,null,/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.labelCell,htmlFor:"gene-expression-colormap-select"},"Gene Expression Colormap"),/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.inputCell},/*#__PURE__*/external_react_default.a.createElement(OptionSelect["a" /* default */],{className:classes.select,value:geneExpressionColormap,onChange:handleGeneExpressionColormapChange,inputProps:{id:'gene-expression-colormap-select'}},constants["b" /* GLSL_COLORMAPS */].map(function(cmap){return/*#__PURE__*/external_react_default.a.createElement("option",{key:cmap,value:cmap},cmap);})))),/*#__PURE__*/external_react_default.a.createElement(TableRow_default.a,null,/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.labelCell},"Gene Expression Colormap Range"),/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.inputCell},/*#__PURE__*/external_react_default.a.createElement(Slider_default.a,{classes:{root:classes.slider,valueLabel:classes.sliderValueLabel},value:geneExpressionColormapRange,onChange:handleColormapRangeChangeDebounced,"aria-labelledby":"gene-expression-colormap-range-slider",valueLabelDisplay:"auto",step:0.005,min:0.0,max:1.0}))));}
// CONCATENATED MODULE: ./src/components/heatmap/HeatmapSubscriber.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatmapSubscriber; });
var HEATMAP_DATA_TYPES=['cells','cell-sets','expression-matrix'];/**
 * @param {object} props
 * @param {number} props.uuid The unique identifier for this component.
 * @param {object} props.coordinationScopes The mapping from coordination types to coordination
 * scopes.
 * @param {function} props.removeGridComponent The callback function to pass to TitleInfo,
 * to call when the component has been removed from the grid.
 * @param {string} props.title The component title.
 * @param {boolean} props.transpose Whether to
 * render as cell-by-gene or gene-by-cell.
 * @param {string} props.observationsLabelOverride The singular
 * form of the name of the observation.
 * @param {string} props.observationsPluralLabelOverride The
 * plural form of the name of the observation.
 * @param {string} props.variablesLabelOverride The singular
 * form of the name of the variable.
 * @param {string} props.variablesPluralLabelOverride The plural
 * form of the name of the variable.
 * @param {boolean} props.disableTooltip Whether to disable the
 * tooltip on mouse hover.
 */function HeatmapSubscriber(props){var uuid=props.uuid,coordinationScopes=props.coordinationScopes,removeGridComponent=props.removeGridComponent,theme=props.theme,transpose=props.transpose,_props$observationsLa=props.observationsLabelOverride,observationsLabel=_props$observationsLa===void 0?'cell':_props$observationsLa,_props$observationsPl=props.observationsPluralLabelOverride,observationsPluralLabel=_props$observationsPl===void 0?"".concat(observationsLabel,"s"):_props$observationsPl,_props$variablesLabel=props.variablesLabelOverride,variablesLabel=_props$variablesLabel===void 0?'gene':_props$variablesLabel,_props$variablesPlura=props.variablesPluralLabelOverride,variablesPluralLabel=_props$variablesPlura===void 0?"".concat(variablesLabel,"s"):_props$variablesPlura,_props$disableTooltip=props.disableTooltip,disableTooltip=_props$disableTooltip===void 0?false:_props$disableTooltip,_props$title=props.title,title=_props$title===void 0?'Heatmap':_props$title;var loaders=Object(state_hooks["o" /* useLoaders */])();var _setComponentHover=Object(state_hooks["r" /* useSetComponentHover */])();var setComponentViewInfo=Object(state_hooks["s" /* useSetComponentViewInfo */])(uuid);// Get "props" from the coordination space.
var _useCoordination=Object(state_hooks["j" /* useCoordination */])(coordination["b" /* COMPONENT_COORDINATION_TYPES */].heatmap,coordinationScopes),_useCoordination2=Object(slicedToArray["a" /* default */])(_useCoordination,2),_useCoordination2$=_useCoordination2[0],dataset=_useCoordination2$.dataset,zoomX=_useCoordination2$.heatmapZoomX,targetX=_useCoordination2$.heatmapTargetX,targetY=_useCoordination2$.heatmapTargetY,geneSelection=_useCoordination2$.featureSelection,cellHighlight=_useCoordination2$.obsHighlight,geneHighlight=_useCoordination2$.featureHighlight,cellSetSelection=_useCoordination2$.obsSetSelection,cellSetColor=_useCoordination2$.obsSetColor,additionalCellSets=_useCoordination2$.additionalObsSets,geneExpressionColormap=_useCoordination2$.featureValueColormap,geneExpressionColormapRange=_useCoordination2$.featureValueColormapRange,_useCoordination2$2=_useCoordination2[1],setZoomX=_useCoordination2$2.setHeatmapZoomX,setZoomY=_useCoordination2$2.setHeatmapZoomY,setTargetX=_useCoordination2$2.setHeatmapTargetX,setTargetY=_useCoordination2$2.setHeatmapTargetY,setCellHighlight=_useCoordination2$2.setObsHighlight,setGeneHighlight=_useCoordination2$2.setFeatureHighlight,setCellSetSelection=_useCoordination2$2.setObsSetSelection,setCellSetColor=_useCoordination2$2.setObsSetColor,setGeneExpressionColormapRange=_useCoordination2$2.setFeatureValueColormapRange,setGeneExpressionColormap=_useCoordination2$2.setFeatureValueColormap;var observationsTitle=Object(utils["a" /* capitalize */])(observationsPluralLabel);var variablesTitle=Object(utils["a" /* capitalize */])(variablesPluralLabel);var _useState=Object(external_react_["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),isRendering=_useState2[0],setIsRendering=_useState2[1];var _useReady=Object(hooks["e" /* useReady */])(HEATMAP_DATA_TYPES),_useReady2=Object(slicedToArray["a" /* default */])(_useReady,4),isReady=_useReady2[0],setItemIsReady=_useReady2[1],setItemIsNotReady=_useReady2[2],// eslint-disable-line no-unused-vars
resetReadyItems=_useReady2[3];var _useUrls=Object(hooks["f" /* useUrls */])(),_useUrls2=Object(slicedToArray["a" /* default */])(_useUrls,3),urls=_useUrls2[0],addUrl=_useUrls2[1],resetUrls=_useUrls2[2];var _useDeckCanvasSize=Object(hooks["b" /* useDeckCanvasSize */])(),_useDeckCanvasSize2=Object(slicedToArray["a" /* default */])(_useDeckCanvasSize,3),width=_useDeckCanvasSize2[0],height=_useDeckCanvasSize2[1],deckRef=_useDeckCanvasSize2[2];// Reset file URLs and loader progress when the dataset has changed.
Object(external_react_["useEffect"])(function(){resetUrls();resetReadyItems();// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);// Get data from loaders using the data hooks.
var _useCellsData=Object(data_hooks["b" /* useCellsData */])(loaders,dataset,setItemIsReady,addUrl,false),_useCellsData2=Object(slicedToArray["a" /* default */])(_useCellsData,1),cells=_useCellsData2[0];var _useExpressionMatrixD=Object(data_hooks["e" /* useExpressionMatrixData */])(loaders,dataset,setItemIsReady,addUrl,true),_useExpressionMatrixD2=Object(slicedToArray["a" /* default */])(_useExpressionMatrixD,1),expressionMatrix=_useExpressionMatrixD2[0];var _useCellSetsData=Object(data_hooks["a" /* useCellSetsData */])(loaders,dataset,setItemIsReady,addUrl,false,{setObsSetSelection:setCellSetSelection,setObsSetColor:setCellSetColor},{obsSetSelection:cellSetSelection,obsSetColor:cellSetColor}),_useCellSetsData2=Object(slicedToArray["a" /* default */])(_useCellSetsData,1),cellSets=_useCellSetsData2[0];var mergedCellSets=Object(external_react_["useMemo"])(function(){return Object(components_utils["r" /* mergeCellSets */])(cellSets,additionalCellSets);},[cellSets,additionalCellSets]);var cellColors=Object(external_react_["useMemo"])(function(){return Object(interpolate_colors["a" /* getCellColors */])({// Only show cell set selection on heatmap labels.
cellColorEncoding:'cellSetSelection',geneSelection:geneSelection,cellSets:mergedCellSets,cellSetSelection:cellSetSelection,cellSetColor:cellSetColor,expressionDataAttrs:expressionMatrix,theme:theme});},[mergedCellSets,geneSelection,theme,cellSetColor,cellSetSelection,expressionMatrix]);var getCellInfo=Object(external_react_["useCallback"])(function(cellId){if(cellId){var cellInfo=cells[cellId];return Object(objectSpread2["a" /* default */])(Object(defineProperty["a" /* default */])({},"".concat(Object(utils["a" /* capitalize */])(observationsLabel)," ID"),cellId),cellInfo?cellInfo.factors:{});}return null;},[cells,observationsLabel]);var getGeneInfo=Object(external_react_["useCallback"])(function(geneId){if(geneId){return Object(defineProperty["a" /* default */])({},"".concat(Object(utils["a" /* capitalize */])(variablesLabel)," ID"),geneId);}return null;},[variablesLabel]);var setTrackHighlight=Object(external_react_["useCallback"])(function(){// No-op, since the default handler
// logs in the console on every hover event.
},[]);var cellColorLabels=Object(external_react_["useMemo"])(function(){return["".concat(Object(utils["a" /* capitalize */])(observationsLabel)," Set")];},[observationsLabel]);var cellsCount=expressionMatrix&&expressionMatrix.rows?expressionMatrix.rows.length:0;var genesCount=expressionMatrix&&expressionMatrix.cols?expressionMatrix.cols.length:0;var selectedCount=cellColors.size;return/*#__PURE__*/external_react_default.a.createElement(TitleInfo["a" /* default */],{title:title,info:"".concat(cellsCount," ").concat(Object(utils["g" /* pluralize */])(observationsLabel,observationsPluralLabel,cellsCount)," \xD7 ").concat(genesCount," ").concat(Object(utils["g" /* pluralize */])(variablesLabel,variablesPluralLabel,genesCount),",\n             with ").concat(selectedCount," ").concat(Object(utils["g" /* pluralize */])(observationsLabel,observationsPluralLabel,selectedCount)," selected"),urls:urls,theme:theme,removeGridComponent:removeGridComponent,isReady:isReady&&!isRendering,options:/*#__PURE__*/external_react_default.a.createElement(HeatmapOptions,{geneExpressionColormap:geneExpressionColormap,setGeneExpressionColormap:setGeneExpressionColormap,geneExpressionColormapRange:geneExpressionColormapRange,setGeneExpressionColormapRange:setGeneExpressionColormapRange})},/*#__PURE__*/external_react_default.a.createElement(Heatmap["a" /* default */],{ref:deckRef,transpose:transpose,viewState:{zoom:zoomX,target:[targetX,targetY]},setViewState:function setViewState(_ref2){var zoom=_ref2.zoom,target=_ref2.target;setZoomX(zoom);setZoomY(zoom);setTargetX(target[0]);setTargetY(target[1]);},colormapRange:geneExpressionColormapRange,setColormapRange:setGeneExpressionColormapRange,height:height,width:width,theme:theme,uuid:uuid,expressionMatrix:expressionMatrix,cellColors:cellColors,colormap:geneExpressionColormap,setIsRendering:setIsRendering,setCellHighlight:setCellHighlight,setGeneHighlight:setGeneHighlight,setTrackHighlight:setTrackHighlight,setComponentHover:function setComponentHover(){_setComponentHover(uuid);},updateViewInfo:setComponentViewInfo,observationsTitle:observationsTitle,variablesTitle:variablesTitle,variablesDashes:false,observationsDashes:false,cellColorLabels:cellColorLabels,useDevicePixels:true}),!disableTooltip&&/*#__PURE__*/external_react_default.a.createElement(HeatmapTooltipSubscriber,{parentUuid:uuid,width:width,height:height,transpose:transpose,getCellInfo:getCellInfo,getGeneInfo:getGeneInfo,cellHighlight:cellHighlight,geneHighlight:geneHighlight}));}

/***/ }),
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(){return __webpack_require__(179)("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"./\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 25);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, exports) {\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n/***/ }),\n/* 1 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar baseClamp = __webpack_require__(6),\n    toNumber = __webpack_require__(3);\n/**\n * Clamps `number` within the inclusive `lower` and `upper` bounds.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Number\n * @param {number} number The number to clamp.\n * @param {number} [lower] The lower bound.\n * @param {number} upper The upper bound.\n * @returns {number} Returns the clamped number.\n * @example\n *\n * _.clamp(-10, -5, 5);\n * // => -5\n *\n * _.clamp(10, -5, 5);\n * // => 5\n */\n\n\nfunction clamp(number, lower, upper) {\n  if (upper === undefined) {\n    upper = lower;\n    lower = undefined;\n  }\n\n  if (upper !== undefined) {\n    upper = toNumber(upper);\n    upper = upper === upper ? upper : 0;\n  }\n\n  if (lower !== undefined) {\n    lower = toNumber(lower);\n    lower = lower === lower ? lower : 0;\n  }\n\n  return baseClamp(toNumber(number), lower, upper);\n}\n\nmodule.exports = clamp;\n\n/***/ }),\n/* 2 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar createRange = __webpack_require__(16);\n/**\n * Creates an array of numbers (positive and/or negative) progressing from\n * `start` up to, but not including, `end`. A step of `-1` is used if a negative\n * `start` is specified without an `end` or `step`. If `end` is not specified,\n * it's set to `start` with `start` then set to `0`.\n *\n * **Note:** JavaScript follows the IEEE-754 standard for resolving\n * floating-point values which can produce unexpected results.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {number} [start=0] The start of the range.\n * @param {number} end The end of the range.\n * @param {number} [step=1] The value to increment or decrement by.\n * @returns {Array} Returns the range of numbers.\n * @see _.inRange, _.rangeRight\n * @example\n *\n * _.range(4);\n * // => [0, 1, 2, 3]\n *\n * _.range(-4);\n * // => [0, -1, -2, -3]\n *\n * _.range(1, 5);\n * // => [1, 2, 3, 4]\n *\n * _.range(0, 20, 5);\n * // => [0, 5, 10, 15]\n *\n * _.range(0, -4, -1);\n * // => [0, -1, -2, -3]\n *\n * _.range(1, 4, 0);\n * // => [1, 1, 1]\n *\n * _.range(0);\n * // => []\n */\n\n\nvar range = createRange();\nmodule.exports = range;\n\n/***/ }),\n/* 3 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar baseTrim = __webpack_require__(7),\n    isObject = __webpack_require__(0),\n    isSymbol = __webpack_require__(9);\n/** Used as references for various `Number` constants. */\n\n\nvar NAN = 0 / 0;\n/** Used to detect bad signed hexadecimal string values. */\n\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n/** Used to detect binary string values. */\n\nvar reIsBinary = /^0b[01]+$/i;\n/** Used to detect octal string values. */\n\nvar reIsOctal = /^0o[0-7]+$/i;\n/** Built-in method references without a dependency on `root`. */\n\nvar freeParseInt = parseInt;\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\n\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n\n  if (isSymbol(value)) {\n    return NAN;\n  }\n\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? other + '' : other;\n  }\n\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n\n  value = baseTrim(value);\n  var isBinary = reIsBinary.test(value);\n  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;\n}\n\nmodule.exports = toNumber;\n\n/***/ }),\n/* 4 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar Symbol = __webpack_require__(5),\n    getRawTag = __webpack_require__(13),\n    objectToString = __webpack_require__(14);\n/** `Object#toString` result references. */\n\n\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n/** Built-in value references. */\n\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\n\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n\n  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n/***/ }),\n/* 5 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar root = __webpack_require__(10);\n/** Built-in value references. */\n\n\nvar Symbol = root.Symbol;\nmodule.exports = Symbol;\n\n/***/ }),\n/* 6 */\n/***/ (function(module, exports) {\n\n/**\n * The base implementation of `_.clamp` which doesn't coerce arguments.\n *\n * @private\n * @param {number} number The number to clamp.\n * @param {number} [lower] The lower bound.\n * @param {number} upper The upper bound.\n * @returns {number} Returns the clamped number.\n */\nfunction baseClamp(number, lower, upper) {\n  if (number === number) {\n    if (upper !== undefined) {\n      number = number <= upper ? number : upper;\n    }\n\n    if (lower !== undefined) {\n      number = number >= lower ? number : lower;\n    }\n  }\n\n  return number;\n}\n\nmodule.exports = baseClamp;\n\n/***/ }),\n/* 7 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar trimmedEndIndex = __webpack_require__(8);\n/** Used to match leading whitespace. */\n\n\nvar reTrimStart = /^\\s+/;\n/**\n * The base implementation of `_.trim`.\n *\n * @private\n * @param {string} string The string to trim.\n * @returns {string} Returns the trimmed string.\n */\n\nfunction baseTrim(string) {\n  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;\n}\n\nmodule.exports = baseTrim;\n\n/***/ }),\n/* 8 */\n/***/ (function(module, exports) {\n\n/** Used to match a single whitespace character. */\nvar reWhitespace = /\\s/;\n/**\n * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace\n * character of `string`.\n *\n * @private\n * @param {string} string The string to inspect.\n * @returns {number} Returns the index of the last non-whitespace character.\n */\n\nfunction trimmedEndIndex(string) {\n  var index = string.length;\n\n  while (index-- && reWhitespace.test(string.charAt(index))) {}\n\n  return index;\n}\n\nmodule.exports = trimmedEndIndex;\n\n/***/ }),\n/* 9 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar baseGetTag = __webpack_require__(4),\n    isObjectLike = __webpack_require__(15);\n/** `Object#toString` result references. */\n\n\nvar symbolTag = '[object Symbol]';\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\n\nfunction isSymbol(value) {\n  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;\n}\n\nmodule.exports = isSymbol;\n\n/***/ }),\n/* 10 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar freeGlobal = __webpack_require__(11);\n/** Detect free variable `self`. */\n\n\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n/** Used as a reference to the global object. */\n\nvar root = freeGlobal || freeSelf || Function('return this')();\nmodule.exports = root;\n\n/***/ }),\n/* 11 */\n/***/ (function(module, exports, __webpack_require__) {\n\n/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\nmodule.exports = freeGlobal;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))\n\n/***/ }),\n/* 12 */\n/***/ (function(module, exports) {\n\nvar g; // This works in non-strict mode\n\ng = function () {\n  return this;\n}();\n\ntry {\n  // This works if eval is allowed (see CSP)\n  g = g || new Function(\"return this\")();\n} catch (e) {\n  // This works if the window reference is available\n  if (typeof window === \"object\") g = window;\n} // g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\n\nmodule.exports = g;\n\n/***/ }),\n/* 13 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar Symbol = __webpack_require__(5);\n/** Used for built-in method references. */\n\n\nvar objectProto = Object.prototype;\n/** Used to check objects for own properties. */\n\nvar hasOwnProperty = objectProto.hasOwnProperty;\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\n\nvar nativeObjectToString = objectProto.toString;\n/** Built-in value references. */\n\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\n\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n/***/ }),\n/* 14 */\n/***/ (function(module, exports) {\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\n\nvar nativeObjectToString = objectProto.toString;\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\n\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n/***/ }),\n/* 15 */\n/***/ (function(module, exports) {\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n/***/ }),\n/* 16 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar baseRange = __webpack_require__(17),\n    isIterateeCall = __webpack_require__(18),\n    toFinite = __webpack_require__(24);\n/**\n * Creates a `_.range` or `_.rangeRight` function.\n *\n * @private\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new range function.\n */\n\n\nfunction createRange(fromRight) {\n  return function (start, end, step) {\n    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {\n      end = step = undefined;\n    } // Ensure the sign of `-0` is preserved.\n\n\n    start = toFinite(start);\n\n    if (end === undefined) {\n      end = start;\n      start = 0;\n    } else {\n      end = toFinite(end);\n    }\n\n    step = step === undefined ? start < end ? 1 : -1 : toFinite(step);\n    return baseRange(start, end, step, fromRight);\n  };\n}\n\nmodule.exports = createRange;\n\n/***/ }),\n/* 17 */\n/***/ (function(module, exports) {\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeCeil = Math.ceil,\n    nativeMax = Math.max;\n/**\n * The base implementation of `_.range` and `_.rangeRight` which doesn't\n * coerce arguments.\n *\n * @private\n * @param {number} start The start of the range.\n * @param {number} end The end of the range.\n * @param {number} step The value to increment or decrement by.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Array} Returns the range of numbers.\n */\n\nfunction baseRange(start, end, step, fromRight) {\n  var index = -1,\n      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),\n      result = Array(length);\n\n  while (length--) {\n    result[fromRight ? length : ++index] = start;\n    start += step;\n  }\n\n  return result;\n}\n\nmodule.exports = baseRange;\n\n/***/ }),\n/* 18 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar eq = __webpack_require__(19),\n    isArrayLike = __webpack_require__(20),\n    isIndex = __webpack_require__(23),\n    isObject = __webpack_require__(0);\n/**\n * Checks if the given arguments are from an iteratee call.\n *\n * @private\n * @param {*} value The potential iteratee value argument.\n * @param {*} index The potential iteratee index or key argument.\n * @param {*} object The potential iteratee object argument.\n * @returns {boolean} Returns `true` if the arguments are from an iteratee call,\n *  else `false`.\n */\n\n\nfunction isIterateeCall(value, index, object) {\n  if (!isObject(object)) {\n    return false;\n  }\n\n  var type = typeof index;\n\n  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {\n    return eq(object[index], value);\n  }\n\n  return false;\n}\n\nmodule.exports = isIterateeCall;\n\n/***/ }),\n/* 19 */\n/***/ (function(module, exports) {\n\n/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || value !== value && other !== other;\n}\n\nmodule.exports = eq;\n\n/***/ }),\n/* 20 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar isFunction = __webpack_require__(21),\n    isLength = __webpack_require__(22);\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\n\n\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\nmodule.exports = isArrayLike;\n\n/***/ }),\n/* 21 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar baseGetTag = __webpack_require__(4),\n    isObject = __webpack_require__(0);\n/** `Object#toString` result references. */\n\n\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\n\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  } // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n\n\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n/***/ }),\n/* 22 */\n/***/ (function(module, exports) {\n\n/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\n\nfunction isLength(value) {\n  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n/***/ }),\n/* 23 */\n/***/ (function(module, exports) {\n\n/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n/** Used to detect unsigned integer values. */\n\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\n\nfunction isIndex(value, length) {\n  var type = typeof value;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;\n}\n\nmodule.exports = isIndex;\n\n/***/ }),\n/* 24 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar toNumber = __webpack_require__(3);\n/** Used as references for various `Number` constants. */\n\n\nvar INFINITY = 1 / 0,\n    MAX_INTEGER = 1.7976931348623157e+308;\n/**\n * Converts `value` to a finite number.\n *\n * @static\n * @memberOf _\n * @since 4.12.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted number.\n * @example\n *\n * _.toFinite(3.2);\n * // => 3.2\n *\n * _.toFinite(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toFinite(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toFinite('3.2');\n * // => 3.2\n */\n\nfunction toFinite(value) {\n  if (!value) {\n    return value === 0 ? value : 0;\n  }\n\n  value = toNumber(value);\n\n  if (value === INFINITY || value === -INFINITY) {\n    var sign = value < 0 ? -1 : 1;\n    return sign * MAX_INTEGER;\n  }\n\n  return value === value ? value : 0;\n}\n\nmodule.exports = toFinite;\n\n/***/ }),\n/* 25 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/lodash/clamp.js\nvar clamp = __webpack_require__(1);\nvar clamp_default = /*#__PURE__*/__webpack_require__.n(clamp);\n\n// EXTERNAL MODULE: ./node_modules/lodash/range.js\nvar range = __webpack_require__(2);\nvar range_default = /*#__PURE__*/__webpack_require__.n(range);\n\n// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n// CONCATENATED MODULE: ./node_modules/@luma.gl/constants/dist/esm/index.js\n/* harmony default export */ var esm = ({\n  DEPTH_BUFFER_BIT: 0x00000100,\n  STENCIL_BUFFER_BIT: 0x00000400,\n  COLOR_BUFFER_BIT: 0x00004000,\n  POINTS: 0x0000,\n  LINES: 0x0001,\n  LINE_LOOP: 0x0002,\n  LINE_STRIP: 0x0003,\n  TRIANGLES: 0x0004,\n  TRIANGLE_STRIP: 0x0005,\n  TRIANGLE_FAN: 0x0006,\n  ZERO: 0,\n  ONE: 1,\n  SRC_COLOR: 0x0300,\n  ONE_MINUS_SRC_COLOR: 0x0301,\n  SRC_ALPHA: 0x0302,\n  ONE_MINUS_SRC_ALPHA: 0x0303,\n  DST_ALPHA: 0x0304,\n  ONE_MINUS_DST_ALPHA: 0x0305,\n  DST_COLOR: 0x0306,\n  ONE_MINUS_DST_COLOR: 0x0307,\n  SRC_ALPHA_SATURATE: 0x0308,\n  CONSTANT_COLOR: 0x8001,\n  ONE_MINUS_CONSTANT_COLOR: 0x8002,\n  CONSTANT_ALPHA: 0x8003,\n  ONE_MINUS_CONSTANT_ALPHA: 0x8004,\n  FUNC_ADD: 0x8006,\n  FUNC_SUBTRACT: 0x800a,\n  FUNC_REVERSE_SUBTRACT: 0x800b,\n  BLEND_EQUATION: 0x8009,\n  BLEND_EQUATION_RGB: 0x8009,\n  BLEND_EQUATION_ALPHA: 0x883d,\n  BLEND_DST_RGB: 0x80c8,\n  BLEND_SRC_RGB: 0x80c9,\n  BLEND_DST_ALPHA: 0x80ca,\n  BLEND_SRC_ALPHA: 0x80cb,\n  BLEND_COLOR: 0x8005,\n  ARRAY_BUFFER_BINDING: 0x8894,\n  ELEMENT_ARRAY_BUFFER_BINDING: 0x8895,\n  LINE_WIDTH: 0x0b21,\n  ALIASED_POINT_SIZE_RANGE: 0x846d,\n  ALIASED_LINE_WIDTH_RANGE: 0x846e,\n  CULL_FACE_MODE: 0x0b45,\n  FRONT_FACE: 0x0b46,\n  DEPTH_RANGE: 0x0b70,\n  DEPTH_WRITEMASK: 0x0b72,\n  DEPTH_CLEAR_VALUE: 0x0b73,\n  DEPTH_FUNC: 0x0b74,\n  STENCIL_CLEAR_VALUE: 0x0b91,\n  STENCIL_FUNC: 0x0b92,\n  STENCIL_FAIL: 0x0b94,\n  STENCIL_PASS_DEPTH_FAIL: 0x0b95,\n  STENCIL_PASS_DEPTH_PASS: 0x0b96,\n  STENCIL_REF: 0x0b97,\n  STENCIL_VALUE_MASK: 0x0b93,\n  STENCIL_WRITEMASK: 0x0b98,\n  STENCIL_BACK_FUNC: 0x8800,\n  STENCIL_BACK_FAIL: 0x8801,\n  STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802,\n  STENCIL_BACK_PASS_DEPTH_PASS: 0x8803,\n  STENCIL_BACK_REF: 0x8ca3,\n  STENCIL_BACK_VALUE_MASK: 0x8ca4,\n  STENCIL_BACK_WRITEMASK: 0x8ca5,\n  VIEWPORT: 0x0ba2,\n  SCISSOR_BOX: 0x0c10,\n  COLOR_CLEAR_VALUE: 0x0c22,\n  COLOR_WRITEMASK: 0x0c23,\n  UNPACK_ALIGNMENT: 0x0cf5,\n  PACK_ALIGNMENT: 0x0d05,\n  MAX_TEXTURE_SIZE: 0x0d33,\n  MAX_VIEWPORT_DIMS: 0x0d3a,\n  SUBPIXEL_BITS: 0x0d50,\n  RED_BITS: 0x0d52,\n  GREEN_BITS: 0x0d53,\n  BLUE_BITS: 0x0d54,\n  ALPHA_BITS: 0x0d55,\n  DEPTH_BITS: 0x0d56,\n  STENCIL_BITS: 0x0d57,\n  POLYGON_OFFSET_UNITS: 0x2a00,\n  POLYGON_OFFSET_FACTOR: 0x8038,\n  TEXTURE_BINDING_2D: 0x8069,\n  SAMPLE_BUFFERS: 0x80a8,\n  SAMPLES: 0x80a9,\n  SAMPLE_COVERAGE_VALUE: 0x80aa,\n  SAMPLE_COVERAGE_INVERT: 0x80ab,\n  COMPRESSED_TEXTURE_FORMATS: 0x86a3,\n  VENDOR: 0x1f00,\n  RENDERER: 0x1f01,\n  VERSION: 0x1f02,\n  IMPLEMENTATION_COLOR_READ_TYPE: 0x8b9a,\n  IMPLEMENTATION_COLOR_READ_FORMAT: 0x8b9b,\n  BROWSER_DEFAULT_WEBGL: 0x9244,\n  STATIC_DRAW: 0x88e4,\n  STREAM_DRAW: 0x88e0,\n  DYNAMIC_DRAW: 0x88e8,\n  ARRAY_BUFFER: 0x8892,\n  ELEMENT_ARRAY_BUFFER: 0x8893,\n  BUFFER_SIZE: 0x8764,\n  BUFFER_USAGE: 0x8765,\n  CURRENT_VERTEX_ATTRIB: 0x8626,\n  VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622,\n  VERTEX_ATTRIB_ARRAY_SIZE: 0x8623,\n  VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624,\n  VERTEX_ATTRIB_ARRAY_TYPE: 0x8625,\n  VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886a,\n  VERTEX_ATTRIB_ARRAY_POINTER: 0x8645,\n  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889f,\n  CULL_FACE: 0x0b44,\n  FRONT: 0x0404,\n  BACK: 0x0405,\n  FRONT_AND_BACK: 0x0408,\n  BLEND: 0x0be2,\n  DEPTH_TEST: 0x0b71,\n  DITHER: 0x0bd0,\n  POLYGON_OFFSET_FILL: 0x8037,\n  SAMPLE_ALPHA_TO_COVERAGE: 0x809e,\n  SAMPLE_COVERAGE: 0x80a0,\n  SCISSOR_TEST: 0x0c11,\n  STENCIL_TEST: 0x0b90,\n  NO_ERROR: 0,\n  INVALID_ENUM: 0x0500,\n  INVALID_VALUE: 0x0501,\n  INVALID_OPERATION: 0x0502,\n  OUT_OF_MEMORY: 0x0505,\n  CONTEXT_LOST_WEBGL: 0x9242,\n  CW: 0x0900,\n  CCW: 0x0901,\n  DONT_CARE: 0x1100,\n  FASTEST: 0x1101,\n  NICEST: 0x1102,\n  GENERATE_MIPMAP_HINT: 0x8192,\n  BYTE: 0x1400,\n  UNSIGNED_BYTE: 0x1401,\n  SHORT: 0x1402,\n  UNSIGNED_SHORT: 0x1403,\n  INT: 0x1404,\n  UNSIGNED_INT: 0x1405,\n  FLOAT: 0x1406,\n  DOUBLE: 0x140a,\n  DEPTH_COMPONENT: 0x1902,\n  ALPHA: 0x1906,\n  RGB: 0x1907,\n  RGBA: 0x1908,\n  LUMINANCE: 0x1909,\n  LUMINANCE_ALPHA: 0x190a,\n  UNSIGNED_SHORT_4_4_4_4: 0x8033,\n  UNSIGNED_SHORT_5_5_5_1: 0x8034,\n  UNSIGNED_SHORT_5_6_5: 0x8363,\n  FRAGMENT_SHADER: 0x8b30,\n  VERTEX_SHADER: 0x8b31,\n  COMPILE_STATUS: 0x8b81,\n  DELETE_STATUS: 0x8b80,\n  LINK_STATUS: 0x8b82,\n  VALIDATE_STATUS: 0x8b83,\n  ATTACHED_SHADERS: 0x8b85,\n  ACTIVE_ATTRIBUTES: 0x8b89,\n  ACTIVE_UNIFORMS: 0x8b86,\n  MAX_VERTEX_ATTRIBS: 0x8869,\n  MAX_VERTEX_UNIFORM_VECTORS: 0x8dfb,\n  MAX_VARYING_VECTORS: 0x8dfc,\n  MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8b4d,\n  MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8b4c,\n  MAX_TEXTURE_IMAGE_UNITS: 0x8872,\n  MAX_FRAGMENT_UNIFORM_VECTORS: 0x8dfd,\n  SHADER_TYPE: 0x8b4f,\n  SHADING_LANGUAGE_VERSION: 0x8b8c,\n  CURRENT_PROGRAM: 0x8b8d,\n  NEVER: 0x0200,\n  ALWAYS: 0x0207,\n  LESS: 0x0201,\n  EQUAL: 0x0202,\n  LEQUAL: 0x0203,\n  GREATER: 0x0204,\n  GEQUAL: 0x0206,\n  NOTEQUAL: 0x0205,\n  KEEP: 0x1e00,\n  REPLACE: 0x1e01,\n  INCR: 0x1e02,\n  DECR: 0x1e03,\n  INVERT: 0x150a,\n  INCR_WRAP: 0x8507,\n  DECR_WRAP: 0x8508,\n  NEAREST: 0x2600,\n  LINEAR: 0x2601,\n  NEAREST_MIPMAP_NEAREST: 0x2700,\n  LINEAR_MIPMAP_NEAREST: 0x2701,\n  NEAREST_MIPMAP_LINEAR: 0x2702,\n  LINEAR_MIPMAP_LINEAR: 0x2703,\n  TEXTURE_MAG_FILTER: 0x2800,\n  TEXTURE_MIN_FILTER: 0x2801,\n  TEXTURE_WRAP_S: 0x2802,\n  TEXTURE_WRAP_T: 0x2803,\n  TEXTURE_2D: 0x0de1,\n  TEXTURE: 0x1702,\n  TEXTURE_CUBE_MAP: 0x8513,\n  TEXTURE_BINDING_CUBE_MAP: 0x8514,\n  TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515,\n  TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516,\n  TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517,\n  TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518,\n  TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519,\n  TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851a,\n  MAX_CUBE_MAP_TEXTURE_SIZE: 0x851c,\n  TEXTURE0: 0x84c0,\n  ACTIVE_TEXTURE: 0x84e0,\n  REPEAT: 0x2901,\n  CLAMP_TO_EDGE: 0x812f,\n  MIRRORED_REPEAT: 0x8370,\n  TEXTURE_WIDTH: 0x1000,\n  TEXTURE_HEIGHT: 0x1001,\n  FLOAT_VEC2: 0x8b50,\n  FLOAT_VEC3: 0x8b51,\n  FLOAT_VEC4: 0x8b52,\n  INT_VEC2: 0x8b53,\n  INT_VEC3: 0x8b54,\n  INT_VEC4: 0x8b55,\n  BOOL: 0x8b56,\n  BOOL_VEC2: 0x8b57,\n  BOOL_VEC3: 0x8b58,\n  BOOL_VEC4: 0x8b59,\n  FLOAT_MAT2: 0x8b5a,\n  FLOAT_MAT3: 0x8b5b,\n  FLOAT_MAT4: 0x8b5c,\n  SAMPLER_2D: 0x8b5e,\n  SAMPLER_CUBE: 0x8b60,\n  LOW_FLOAT: 0x8df0,\n  MEDIUM_FLOAT: 0x8df1,\n  HIGH_FLOAT: 0x8df2,\n  LOW_INT: 0x8df3,\n  MEDIUM_INT: 0x8df4,\n  HIGH_INT: 0x8df5,\n  FRAMEBUFFER: 0x8d40,\n  RENDERBUFFER: 0x8d41,\n  RGBA4: 0x8056,\n  RGB5_A1: 0x8057,\n  RGB565: 0x8d62,\n  DEPTH_COMPONENT16: 0x81a5,\n  STENCIL_INDEX: 0x1901,\n  STENCIL_INDEX8: 0x8d48,\n  DEPTH_STENCIL: 0x84f9,\n  RENDERBUFFER_WIDTH: 0x8d42,\n  RENDERBUFFER_HEIGHT: 0x8d43,\n  RENDERBUFFER_INTERNAL_FORMAT: 0x8d44,\n  RENDERBUFFER_RED_SIZE: 0x8d50,\n  RENDERBUFFER_GREEN_SIZE: 0x8d51,\n  RENDERBUFFER_BLUE_SIZE: 0x8d52,\n  RENDERBUFFER_ALPHA_SIZE: 0x8d53,\n  RENDERBUFFER_DEPTH_SIZE: 0x8d54,\n  RENDERBUFFER_STENCIL_SIZE: 0x8d55,\n  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8cd0,\n  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8cd1,\n  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8cd2,\n  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8cd3,\n  COLOR_ATTACHMENT0: 0x8ce0,\n  DEPTH_ATTACHMENT: 0x8d00,\n  STENCIL_ATTACHMENT: 0x8d20,\n  DEPTH_STENCIL_ATTACHMENT: 0x821a,\n  NONE: 0,\n  FRAMEBUFFER_COMPLETE: 0x8cd5,\n  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8cd6,\n  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8cd7,\n  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8cd9,\n  FRAMEBUFFER_UNSUPPORTED: 0x8cdd,\n  FRAMEBUFFER_BINDING: 0x8ca6,\n  RENDERBUFFER_BINDING: 0x8ca7,\n  READ_FRAMEBUFFER: 0x8ca8,\n  DRAW_FRAMEBUFFER: 0x8ca9,\n  MAX_RENDERBUFFER_SIZE: 0x84e8,\n  INVALID_FRAMEBUFFER_OPERATION: 0x0506,\n  UNPACK_FLIP_Y_WEBGL: 0x9240,\n  UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241,\n  UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243,\n  READ_BUFFER: 0x0c02,\n  UNPACK_ROW_LENGTH: 0x0cf2,\n  UNPACK_SKIP_ROWS: 0x0cf3,\n  UNPACK_SKIP_PIXELS: 0x0cf4,\n  PACK_ROW_LENGTH: 0x0d02,\n  PACK_SKIP_ROWS: 0x0d03,\n  PACK_SKIP_PIXELS: 0x0d04,\n  TEXTURE_BINDING_3D: 0x806a,\n  UNPACK_SKIP_IMAGES: 0x806d,\n  UNPACK_IMAGE_HEIGHT: 0x806e,\n  MAX_3D_TEXTURE_SIZE: 0x8073,\n  MAX_ELEMENTS_VERTICES: 0x80e8,\n  MAX_ELEMENTS_INDICES: 0x80e9,\n  MAX_TEXTURE_LOD_BIAS: 0x84fd,\n  MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8b49,\n  MAX_VERTEX_UNIFORM_COMPONENTS: 0x8b4a,\n  MAX_ARRAY_TEXTURE_LAYERS: 0x88ff,\n  MIN_PROGRAM_TEXEL_OFFSET: 0x8904,\n  MAX_PROGRAM_TEXEL_OFFSET: 0x8905,\n  MAX_VARYING_COMPONENTS: 0x8b4b,\n  FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8b8b,\n  RASTERIZER_DISCARD: 0x8c89,\n  VERTEX_ARRAY_BINDING: 0x85b5,\n  MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122,\n  MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125,\n  MAX_SERVER_WAIT_TIMEOUT: 0x9111,\n  MAX_ELEMENT_INDEX: 0x8d6b,\n  RED: 0x1903,\n  RGB8: 0x8051,\n  RGBA8: 0x8058,\n  RGB10_A2: 0x8059,\n  TEXTURE_3D: 0x806f,\n  TEXTURE_WRAP_R: 0x8072,\n  TEXTURE_MIN_LOD: 0x813a,\n  TEXTURE_MAX_LOD: 0x813b,\n  TEXTURE_BASE_LEVEL: 0x813c,\n  TEXTURE_MAX_LEVEL: 0x813d,\n  TEXTURE_COMPARE_MODE: 0x884c,\n  TEXTURE_COMPARE_FUNC: 0x884d,\n  SRGB: 0x8c40,\n  SRGB8: 0x8c41,\n  SRGB8_ALPHA8: 0x8c43,\n  COMPARE_REF_TO_TEXTURE: 0x884e,\n  RGBA32F: 0x8814,\n  RGB32F: 0x8815,\n  RGBA16F: 0x881a,\n  RGB16F: 0x881b,\n  TEXTURE_2D_ARRAY: 0x8c1a,\n  TEXTURE_BINDING_2D_ARRAY: 0x8c1d,\n  R11F_G11F_B10F: 0x8c3a,\n  RGB9_E5: 0x8c3d,\n  RGBA32UI: 0x8d70,\n  RGB32UI: 0x8d71,\n  RGBA16UI: 0x8d76,\n  RGB16UI: 0x8d77,\n  RGBA8UI: 0x8d7c,\n  RGB8UI: 0x8d7d,\n  RGBA32I: 0x8d82,\n  RGB32I: 0x8d83,\n  RGBA16I: 0x8d88,\n  RGB16I: 0x8d89,\n  RGBA8I: 0x8d8e,\n  RGB8I: 0x8d8f,\n  RED_INTEGER: 0x8d94,\n  RGB_INTEGER: 0x8d98,\n  RGBA_INTEGER: 0x8d99,\n  R8: 0x8229,\n  RG8: 0x822b,\n  R16F: 0x822d,\n  R32F: 0x822e,\n  RG16F: 0x822f,\n  RG32F: 0x8230,\n  R8I: 0x8231,\n  R8UI: 0x8232,\n  R16I: 0x8233,\n  R16UI: 0x8234,\n  R32I: 0x8235,\n  R32UI: 0x8236,\n  RG8I: 0x8237,\n  RG8UI: 0x8238,\n  RG16I: 0x8239,\n  RG16UI: 0x823a,\n  RG32I: 0x823b,\n  RG32UI: 0x823c,\n  R8_SNORM: 0x8f94,\n  RG8_SNORM: 0x8f95,\n  RGB8_SNORM: 0x8f96,\n  RGBA8_SNORM: 0x8f97,\n  RGB10_A2UI: 0x906f,\n  TEXTURE_IMMUTABLE_FORMAT: 0x912f,\n  TEXTURE_IMMUTABLE_LEVELS: 0x82df,\n  UNSIGNED_INT_2_10_10_10_REV: 0x8368,\n  UNSIGNED_INT_10F_11F_11F_REV: 0x8c3b,\n  UNSIGNED_INT_5_9_9_9_REV: 0x8c3e,\n  FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8dad,\n  UNSIGNED_INT_24_8: 0x84fa,\n  HALF_FLOAT: 0x140b,\n  RG: 0x8227,\n  RG_INTEGER: 0x8228,\n  INT_2_10_10_10_REV: 0x8d9f,\n  CURRENT_QUERY: 0x8865,\n  QUERY_RESULT: 0x8866,\n  QUERY_RESULT_AVAILABLE: 0x8867,\n  ANY_SAMPLES_PASSED: 0x8c2f,\n  ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8d6a,\n  MAX_DRAW_BUFFERS: 0x8824,\n  DRAW_BUFFER0: 0x8825,\n  DRAW_BUFFER1: 0x8826,\n  DRAW_BUFFER2: 0x8827,\n  DRAW_BUFFER3: 0x8828,\n  DRAW_BUFFER4: 0x8829,\n  DRAW_BUFFER5: 0x882a,\n  DRAW_BUFFER6: 0x882b,\n  DRAW_BUFFER7: 0x882c,\n  DRAW_BUFFER8: 0x882d,\n  DRAW_BUFFER9: 0x882e,\n  DRAW_BUFFER10: 0x882f,\n  DRAW_BUFFER11: 0x8830,\n  DRAW_BUFFER12: 0x8831,\n  DRAW_BUFFER13: 0x8832,\n  DRAW_BUFFER14: 0x8833,\n  DRAW_BUFFER15: 0x8834,\n  MAX_COLOR_ATTACHMENTS: 0x8cdf,\n  COLOR_ATTACHMENT1: 0x8ce1,\n  COLOR_ATTACHMENT2: 0x8ce2,\n  COLOR_ATTACHMENT3: 0x8ce3,\n  COLOR_ATTACHMENT4: 0x8ce4,\n  COLOR_ATTACHMENT5: 0x8ce5,\n  COLOR_ATTACHMENT6: 0x8ce6,\n  COLOR_ATTACHMENT7: 0x8ce7,\n  COLOR_ATTACHMENT8: 0x8ce8,\n  COLOR_ATTACHMENT9: 0x8ce9,\n  COLOR_ATTACHMENT10: 0x8cea,\n  COLOR_ATTACHMENT11: 0x8ceb,\n  COLOR_ATTACHMENT12: 0x8cec,\n  COLOR_ATTACHMENT13: 0x8ced,\n  COLOR_ATTACHMENT14: 0x8cee,\n  COLOR_ATTACHMENT15: 0x8cef,\n  SAMPLER_3D: 0x8b5f,\n  SAMPLER_2D_SHADOW: 0x8b62,\n  SAMPLER_2D_ARRAY: 0x8dc1,\n  SAMPLER_2D_ARRAY_SHADOW: 0x8dc4,\n  SAMPLER_CUBE_SHADOW: 0x8dc5,\n  INT_SAMPLER_2D: 0x8dca,\n  INT_SAMPLER_3D: 0x8dcb,\n  INT_SAMPLER_CUBE: 0x8dcc,\n  INT_SAMPLER_2D_ARRAY: 0x8dcf,\n  UNSIGNED_INT_SAMPLER_2D: 0x8dd2,\n  UNSIGNED_INT_SAMPLER_3D: 0x8dd3,\n  UNSIGNED_INT_SAMPLER_CUBE: 0x8dd4,\n  UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8dd7,\n  MAX_SAMPLES: 0x8d57,\n  SAMPLER_BINDING: 0x8919,\n  PIXEL_PACK_BUFFER: 0x88eb,\n  PIXEL_UNPACK_BUFFER: 0x88ec,\n  PIXEL_PACK_BUFFER_BINDING: 0x88ed,\n  PIXEL_UNPACK_BUFFER_BINDING: 0x88ef,\n  COPY_READ_BUFFER: 0x8f36,\n  COPY_WRITE_BUFFER: 0x8f37,\n  COPY_READ_BUFFER_BINDING: 0x8f36,\n  COPY_WRITE_BUFFER_BINDING: 0x8f37,\n  FLOAT_MAT2x3: 0x8b65,\n  FLOAT_MAT2x4: 0x8b66,\n  FLOAT_MAT3x2: 0x8b67,\n  FLOAT_MAT3x4: 0x8b68,\n  FLOAT_MAT4x2: 0x8b69,\n  FLOAT_MAT4x3: 0x8b6a,\n  UNSIGNED_INT_VEC2: 0x8dc6,\n  UNSIGNED_INT_VEC3: 0x8dc7,\n  UNSIGNED_INT_VEC4: 0x8dc8,\n  UNSIGNED_NORMALIZED: 0x8c17,\n  SIGNED_NORMALIZED: 0x8f9c,\n  VERTEX_ATTRIB_ARRAY_INTEGER: 0x88fd,\n  VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88fe,\n  TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8c7f,\n  MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8c80,\n  TRANSFORM_FEEDBACK_VARYINGS: 0x8c83,\n  TRANSFORM_FEEDBACK_BUFFER_START: 0x8c84,\n  TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8c85,\n  TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8c88,\n  MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8c8a,\n  MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8c8b,\n  INTERLEAVED_ATTRIBS: 0x8c8c,\n  SEPARATE_ATTRIBS: 0x8c8d,\n  TRANSFORM_FEEDBACK_BUFFER: 0x8c8e,\n  TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8c8f,\n  TRANSFORM_FEEDBACK: 0x8e22,\n  TRANSFORM_FEEDBACK_PAUSED: 0x8e23,\n  TRANSFORM_FEEDBACK_ACTIVE: 0x8e24,\n  TRANSFORM_FEEDBACK_BINDING: 0x8e25,\n  FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210,\n  FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211,\n  FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212,\n  FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213,\n  FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214,\n  FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215,\n  FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216,\n  FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217,\n  FRAMEBUFFER_DEFAULT: 0x8218,\n  DEPTH24_STENCIL8: 0x88f0,\n  DRAW_FRAMEBUFFER_BINDING: 0x8ca6,\n  READ_FRAMEBUFFER_BINDING: 0x8caa,\n  RENDERBUFFER_SAMPLES: 0x8cab,\n  FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8cd4,\n  FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8d56,\n  UNIFORM_BUFFER: 0x8a11,\n  UNIFORM_BUFFER_BINDING: 0x8a28,\n  UNIFORM_BUFFER_START: 0x8a29,\n  UNIFORM_BUFFER_SIZE: 0x8a2a,\n  MAX_VERTEX_UNIFORM_BLOCKS: 0x8a2b,\n  MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8a2d,\n  MAX_COMBINED_UNIFORM_BLOCKS: 0x8a2e,\n  MAX_UNIFORM_BUFFER_BINDINGS: 0x8a2f,\n  MAX_UNIFORM_BLOCK_SIZE: 0x8a30,\n  MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8a31,\n  MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8a33,\n  UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8a34,\n  ACTIVE_UNIFORM_BLOCKS: 0x8a36,\n  UNIFORM_TYPE: 0x8a37,\n  UNIFORM_SIZE: 0x8a38,\n  UNIFORM_BLOCK_INDEX: 0x8a3a,\n  UNIFORM_OFFSET: 0x8a3b,\n  UNIFORM_ARRAY_STRIDE: 0x8a3c,\n  UNIFORM_MATRIX_STRIDE: 0x8a3d,\n  UNIFORM_IS_ROW_MAJOR: 0x8a3e,\n  UNIFORM_BLOCK_BINDING: 0x8a3f,\n  UNIFORM_BLOCK_DATA_SIZE: 0x8a40,\n  UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8a42,\n  UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8a43,\n  UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8a44,\n  UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8a46,\n  OBJECT_TYPE: 0x9112,\n  SYNC_CONDITION: 0x9113,\n  SYNC_STATUS: 0x9114,\n  SYNC_FLAGS: 0x9115,\n  SYNC_FENCE: 0x9116,\n  SYNC_GPU_COMMANDS_COMPLETE: 0x9117,\n  UNSIGNALED: 0x9118,\n  SIGNALED: 0x9119,\n  ALREADY_SIGNALED: 0x911a,\n  TIMEOUT_EXPIRED: 0x911b,\n  CONDITION_SATISFIED: 0x911c,\n  WAIT_FAILED: 0x911d,\n  SYNC_FLUSH_COMMANDS_BIT: 0x00000001,\n  COLOR: 0x1800,\n  DEPTH: 0x1801,\n  STENCIL: 0x1802,\n  MIN: 0x8007,\n  MAX: 0x8008,\n  DEPTH_COMPONENT24: 0x81a6,\n  STREAM_READ: 0x88e1,\n  STREAM_COPY: 0x88e2,\n  STATIC_READ: 0x88e5,\n  STATIC_COPY: 0x88e6,\n  DYNAMIC_READ: 0x88e9,\n  DYNAMIC_COPY: 0x88ea,\n  DEPTH_COMPONENT32F: 0x8cac,\n  DEPTH32F_STENCIL8: 0x8cad,\n  INVALID_INDEX: 0xffffffff,\n  TIMEOUT_IGNORED: -1,\n  MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247,\n  VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: 0x88fe,\n  UNMASKED_VENDOR_WEBGL: 0x9245,\n  UNMASKED_RENDERER_WEBGL: 0x9246,\n  MAX_TEXTURE_MAX_ANISOTROPY_EXT: 0x84ff,\n  TEXTURE_MAX_ANISOTROPY_EXT: 0x84fe,\n  COMPRESSED_RGB_S3TC_DXT1_EXT: 0x83f0,\n  COMPRESSED_RGBA_S3TC_DXT1_EXT: 0x83f1,\n  COMPRESSED_RGBA_S3TC_DXT3_EXT: 0x83f2,\n  COMPRESSED_RGBA_S3TC_DXT5_EXT: 0x83f3,\n  COMPRESSED_R11_EAC: 0x9270,\n  COMPRESSED_SIGNED_R11_EAC: 0x9271,\n  COMPRESSED_RG11_EAC: 0x9272,\n  COMPRESSED_SIGNED_RG11_EAC: 0x9273,\n  COMPRESSED_RGB8_ETC2: 0x9274,\n  COMPRESSED_RGBA8_ETC2_EAC: 0x9275,\n  COMPRESSED_SRGB8_ETC2: 0x9276,\n  COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 0x9277,\n  COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9278,\n  COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9279,\n  COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 0x8c00,\n  COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 0x8c02,\n  COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 0x8c01,\n  COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 0x8c03,\n  COMPRESSED_RGB_ETC1_WEBGL: 0x8d64,\n  COMPRESSED_RGB_ATC_WEBGL: 0x8c92,\n  COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: 0x8c92,\n  COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: 0x87ee,\n  UNSIGNED_INT_24_8_WEBGL: 0x84fa,\n  HALF_FLOAT_OES: 0x8d61,\n  RGBA32F_EXT: 0x8814,\n  RGB32F_EXT: 0x8815,\n  FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 0x8211,\n  UNSIGNED_NORMALIZED_EXT: 0x8c17,\n  MIN_EXT: 0x8007,\n  MAX_EXT: 0x8008,\n  SRGB_EXT: 0x8c40,\n  SRGB_ALPHA_EXT: 0x8c42,\n  SRGB8_ALPHA8_EXT: 0x8c43,\n  FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: 0x8210,\n  FRAGMENT_SHADER_DERIVATIVE_HINT_OES: 0x8b8b,\n  COLOR_ATTACHMENT0_WEBGL: 0x8ce0,\n  COLOR_ATTACHMENT1_WEBGL: 0x8ce1,\n  COLOR_ATTACHMENT2_WEBGL: 0x8ce2,\n  COLOR_ATTACHMENT3_WEBGL: 0x8ce3,\n  COLOR_ATTACHMENT4_WEBGL: 0x8ce4,\n  COLOR_ATTACHMENT5_WEBGL: 0x8ce5,\n  COLOR_ATTACHMENT6_WEBGL: 0x8ce6,\n  COLOR_ATTACHMENT7_WEBGL: 0x8ce7,\n  COLOR_ATTACHMENT8_WEBGL: 0x8ce8,\n  COLOR_ATTACHMENT9_WEBGL: 0x8ce9,\n  COLOR_ATTACHMENT10_WEBGL: 0x8cea,\n  COLOR_ATTACHMENT11_WEBGL: 0x8ceb,\n  COLOR_ATTACHMENT12_WEBGL: 0x8cec,\n  COLOR_ATTACHMENT13_WEBGL: 0x8ced,\n  COLOR_ATTACHMENT14_WEBGL: 0x8cee,\n  COLOR_ATTACHMENT15_WEBGL: 0x8cef,\n  DRAW_BUFFER0_WEBGL: 0x8825,\n  DRAW_BUFFER1_WEBGL: 0x8826,\n  DRAW_BUFFER2_WEBGL: 0x8827,\n  DRAW_BUFFER3_WEBGL: 0x8828,\n  DRAW_BUFFER4_WEBGL: 0x8829,\n  DRAW_BUFFER5_WEBGL: 0x882a,\n  DRAW_BUFFER6_WEBGL: 0x882b,\n  DRAW_BUFFER7_WEBGL: 0x882c,\n  DRAW_BUFFER8_WEBGL: 0x882d,\n  DRAW_BUFFER9_WEBGL: 0x882e,\n  DRAW_BUFFER10_WEBGL: 0x882f,\n  DRAW_BUFFER11_WEBGL: 0x8830,\n  DRAW_BUFFER12_WEBGL: 0x8831,\n  DRAW_BUFFER13_WEBGL: 0x8832,\n  DRAW_BUFFER14_WEBGL: 0x8833,\n  DRAW_BUFFER15_WEBGL: 0x8834,\n  MAX_COLOR_ATTACHMENTS_WEBGL: 0x8cdf,\n  MAX_DRAW_BUFFERS_WEBGL: 0x8824,\n  VERTEX_ARRAY_BINDING_OES: 0x85b5,\n  QUERY_COUNTER_BITS_EXT: 0x8864,\n  CURRENT_QUERY_EXT: 0x8865,\n  QUERY_RESULT_EXT: 0x8866,\n  QUERY_RESULT_AVAILABLE_EXT: 0x8867,\n  TIME_ELAPSED_EXT: 0x88bf,\n  TIMESTAMP_EXT: 0x8e28,\n  GPU_DISJOINT_EXT: 0x8fbb\n});\n// CONCATENATED MODULE: ./src/layers/heatmap-constants.js\nvar _PIXELATED_TEXTURE_PA;// eslint-disable-line import/no-extraneous-dependencies\n// Image texture dimensions\nvar TILE_SIZE=4096;// Reshaped data texture dimensions\nvar DATA_TEXTURE_SIZE=4096;var MIN_ROW_AGG=1;var MAX_ROW_AGG=16;var COLOR_BAR_SIZE=20;var AXIS_LABEL_TEXT_SIZE=11;var AXIS_TITLE_TEXT_SIZE=15;var AXIS_MIN_SIZE=12;var AXIS_MAX_SIZE=120;var AXIS_MARGIN=3;var AXIS_PADDING=10;var THEME_TO_TEXT_COLOR={dark:[224,224,224],light:[64,64,64]};var AXIS_FONT_FAMILY=\"-apple-system, 'Helvetica Neue', Arial, sans-serif\";var PIXELATED_TEXTURE_PARAMETERS=(_PIXELATED_TEXTURE_PA={},_defineProperty(_PIXELATED_TEXTURE_PA,esm.TEXTURE_MIN_FILTER,esm.NEAREST),_defineProperty(_PIXELATED_TEXTURE_PA,esm.TEXTURE_MAG_FILTER,esm.NEAREST),_defineProperty(_PIXELATED_TEXTURE_PA,esm.TEXTURE_WRAP_S,esm.CLAMP_TO_EDGE),_defineProperty(_PIXELATED_TEXTURE_PA,esm.TEXTURE_WRAP_T,esm.CLAMP_TO_EDGE),_PIXELATED_TEXTURE_PA);\n// CONCATENATED MODULE: ./src/components/heatmap/utils.js\nfunction getGeneByCellTile(view,_ref){var tileSize=_ref.tileSize,tileI=_ref.tileI,tileJ=_ref.tileJ,numCells=_ref.numCells,numGenes=_ref.numGenes,cellOrdering=_ref.cellOrdering,expressionRowLookUp=_ref.expressionRowLookUp;var tileData=new Uint8Array(tileSize*tileSize);var offset;var value;var cellI;var geneI;var sortedCellI;var tileSizeRange=range_default()(tileSize);tileSizeRange.forEach(function(j){// Need to iterate over cells in the outer loop.\ncellI=tileJ*tileSize+j;if(cellI<numCells){sortedCellI=expressionRowLookUp.get(cellOrdering[cellI]);if(sortedCellI>=-1){tileSizeRange.forEach(function(i){geneI=tileI*tileSize+i;value=view[sortedCellI*numGenes+geneI];offset=(tileSize-i-1)*tileSize+j;tileData[offset]=value;});}}});return tileData;}function getCellByGeneTile(view,_ref2){var tileSize=_ref2.tileSize,tileI=_ref2.tileI,tileJ=_ref2.tileJ,numCells=_ref2.numCells,numGenes=_ref2.numGenes,cellOrdering=_ref2.cellOrdering,expressionRowLookUp=_ref2.expressionRowLookUp;var tileData=new Uint8Array(tileSize*tileSize);var offset;var value;var cellI;var geneI;var sortedCellI;var tileSizeRange=range_default()(tileSize);tileSizeRange.forEach(function(i){// Need to iterate over cells in the outer loop.\ncellI=tileI*tileSize+i;if(cellI<numCells){sortedCellI=expressionRowLookUp.get(cellOrdering[cellI]);if(sortedCellI>=-1){tileSizeRange.forEach(function(j){geneI=tileJ*tileSize+j;if(geneI<numGenes){value=view[sortedCellI*numGenes+geneI];}else{value=0;}offset=(tileSize-i-1)*tileSize+j;tileData[offset]=value;});}}});return tileData;}/**\n * Called before a layer is drawn to determine whether it should be rendered.\n * Reference: https://deck.gl/docs/api-reference/core/deck#layerfilter\n * @param {object} params A viewport, layer pair.\n * @param {object} params.layer The layer to check.\n * @param {object} params.viewport The viewport to check.\n * @returns {boolean} Should this layer be rendered in this viewport?\n */function layerFilter(_ref3){var layer=_ref3.layer,viewport=_ref3.viewport;if(viewport.id==='axisLeft'){return layer.id.startsWith('axisLeft');}if(viewport.id==='axisTop'){return layer.id.startsWith('axisTop');}if(viewport.id==='cellColorLabel'){return layer.id.startsWith('cellColorLabel');}if(viewport.id==='heatmap'){return layer.id.startsWith('heatmap');}if(viewport.id.startsWith('colorsLeft')){var matches=viewport.id.match(/-(\\d)/);if(matches)return layer.id.startsWith(\"colorsLeftLayer-\".concat(matches[1]));}if(viewport.id.startsWith('colorsTop')){var _matches=viewport.id.match(/-(\\d)/);if(_matches)return layer.id.startsWith(\"colorsTopLayer-\".concat(_matches[1]));}return false;}/**\n * Uses canvas.measureText to compute and return the width of the given text\n * of given font in pixels.\n *\n * @param {String} text The text to be rendered.\n * @param {String} font The css font descriptor that text is to be rendered\n * with (e.g. \"bold 14px verdana\").\n *\n * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393\n */function getTextWidth(text,font){// re-use canvas object for better performance\nvar canvas=getTextWidth.canvas||(getTextWidth.canvas=document.createElement('canvas'));var context=canvas.getContext('2d');context.font=font;var metrics=context.measureText(text);return metrics.width;}/**\n * Get the size of the left and top heatmap axes,\n * taking into account the maximum label string lengths.\n * @param {boolean} transpose Is the heatmap transposed?\n * @param {String} longestGeneLabel longest gene label\n * @param {String} longestCellLabel longest cell label\n * @param {boolean} hideObservationLabels are cell labels hidden?\n * @param {boolean} hideVariableLabels are gene labels hidden?\n * Increases vertical space for heatmap\n * @returns {number[]} [axisOffsetLeft, axisOffsetTop]\n */function getAxisSizes(transpose,longestGeneLabel,longestCellLabel,hideObservationLabels,hideVariableLabels){var font=\"\".concat(AXIS_LABEL_TEXT_SIZE,\"pt \").concat(AXIS_FONT_FAMILY);var geneLabelMaxWidth=hideVariableLabels?0:getTextWidth(longestGeneLabel,font)+AXIS_PADDING;var cellLabelMaxWidth=hideObservationLabels?0:getTextWidth(longestCellLabel,font)+AXIS_PADDING;var axisOffsetLeft=clamp_default()(transpose?geneLabelMaxWidth:cellLabelMaxWidth,AXIS_MIN_SIZE,AXIS_MAX_SIZE);var axisOffsetTop=clamp_default()(transpose?cellLabelMaxWidth:geneLabelMaxWidth,AXIS_MIN_SIZE,AXIS_MAX_SIZE);return[axisOffsetLeft,axisOffsetTop];}/**\n * Convert a mouse coordinate (x, y) to a heatmap coordinate (col index, row index).\n * @param {number} mouseX The mouse X of interest.\n * @param {number} mouseY The mouse Y of interest.\n * @param {object} param2 An object containing current sizes and scale factors.\n * @returns {number[]} [colI, rowI]\n */function mouseToHeatmapPosition(mouseX,mouseY,_ref4){var offsetLeft=_ref4.offsetLeft,offsetTop=_ref4.offsetTop,targetX=_ref4.targetX,targetY=_ref4.targetY,scaleFactor=_ref4.scaleFactor,matrixWidth=_ref4.matrixWidth,matrixHeight=_ref4.matrixHeight,numRows=_ref4.numRows,numCols=_ref4.numCols;// TODO: use linear algebra\nvar viewMouseX=mouseX-offsetLeft;var viewMouseY=mouseY-offsetTop;if(viewMouseX<0||viewMouseY<0){// The mouse is outside the heatmap.\nreturn[null,null];}// Determine the rowI and colI values based on the current viewState.\nvar bboxTargetX=targetX*scaleFactor+matrixWidth*scaleFactor/2;var bboxTargetY=targetY*scaleFactor+matrixHeight*scaleFactor/2;var bboxLeft=bboxTargetX-matrixWidth/2;var bboxTop=bboxTargetY-matrixHeight/2;var zoomedOffsetLeft=bboxLeft/(matrixWidth*scaleFactor);var zoomedOffsetTop=bboxTop/(matrixHeight*scaleFactor);var zoomedViewMouseX=viewMouseX/(matrixWidth*scaleFactor);var zoomedViewMouseY=viewMouseY/(matrixHeight*scaleFactor);var zoomedMouseX=zoomedOffsetLeft+zoomedViewMouseX;var zoomedMouseY=zoomedOffsetTop+zoomedViewMouseY;var rowI=Math.floor(zoomedMouseY*numRows);var colI=Math.floor(zoomedMouseX*numCols);return[colI,rowI];}/**\n * Convert a heatmap coordinate (col index, row index) to a mouse coordinate (x, y).\n * @param {number} colI The column index of interest.\n * @param {number} rowI The row index of interest.\n * @param {object} param2 An object containing current sizes and scale factors.\n * @returns {number[]} [x, y]\n */function heatmapToMousePosition(colI,rowI,_ref5){var offsetLeft=_ref5.offsetLeft,offsetTop=_ref5.offsetTop,targetX=_ref5.targetX,targetY=_ref5.targetY,scaleFactor=_ref5.scaleFactor,matrixWidth=_ref5.matrixWidth,matrixHeight=_ref5.matrixHeight,numRows=_ref5.numRows,numCols=_ref5.numCols;// TODO: use linear algebra\nvar zoomedMouseY=null;var zoomedMouseX=null;if(rowI!==null){var minY=-matrixHeight*scaleFactor/2;var maxY=matrixHeight*scaleFactor/2;var totalHeight=maxY-minY;var minInViewY=targetY*scaleFactor-matrixHeight/2;var maxInViewY=targetY*scaleFactor+matrixHeight/2;var inViewHeight=maxInViewY-minInViewY;var normalizedRowY=(rowI+0.5)/numRows;var globalRowY=minY+normalizedRowY*totalHeight;if(minInViewY<=globalRowY&&globalRowY<=maxInViewY){zoomedMouseY=offsetTop+(globalRowY-minInViewY)/inViewHeight*matrixHeight;}}if(colI!==null){var minX=-matrixWidth*scaleFactor/2;var maxX=matrixWidth*scaleFactor/2;var totalWidth=maxX-minX;var minInViewX=targetX*scaleFactor-matrixWidth/2;var maxInViewX=targetX*scaleFactor+matrixWidth/2;var inViewWidth=maxInViewX-minInViewX;var normalizedRowX=(colI+0.5)/numCols;var globalRowX=minX+normalizedRowX*totalWidth;if(minInViewX<=globalRowX&&globalRowX<=maxInViewX){zoomedMouseX=offsetLeft+(globalRowX-minInViewX)/inViewWidth*matrixWidth;}}return[zoomedMouseX,zoomedMouseY];}/**\n * Convert a mouse coordinate (x, y) to a heatmap color bar coordinate (cell index, track index).\n * @param {number} mouseX The mouse X of interest.\n * @param {number} mouseY The mouse Y of interest.\n * @param {object} param2 An object containing current sizes and scale factors.\n * @returns {number[]} [cellI, trackI]\n */function mouseToCellColorPosition(mouseX,mouseY,_ref6){var axisOffsetTop=_ref6.axisOffsetTop,axisOffsetLeft=_ref6.axisOffsetLeft,offsetTop=_ref6.offsetTop,offsetLeft=_ref6.offsetLeft,colorBarSize=_ref6.colorBarSize,numCellColorTracks=_ref6.numCellColorTracks,transpose=_ref6.transpose,targetX=_ref6.targetX,targetY=_ref6.targetY,scaleFactor=_ref6.scaleFactor,matrixWidth=_ref6.matrixWidth,matrixHeight=_ref6.matrixHeight,numRows=_ref6.numRows,numCols=_ref6.numCols;var cellPosition=transpose?mouseX-offsetLeft:mouseY-offsetTop;var trackPosition=transpose?mouseY-axisOffsetTop:mouseX-axisOffsetLeft;var tracksWidth=numCellColorTracks*colorBarSize;// outside of cell color tracks\nif(cellPosition<0||trackPosition<0||trackPosition>=tracksWidth){return[null,null];}// Determine the trackI and cellI values based on the current viewState.\nvar trackI=Math.floor(trackPosition/colorBarSize);var cellI;if(transpose){var viewMouseX=mouseX-offsetLeft;var bboxTargetX=targetX*scaleFactor+matrixWidth*scaleFactor/2;var bboxLeft=bboxTargetX-matrixWidth/2;var zoomedOffsetLeft=bboxLeft/(matrixWidth*scaleFactor);var zoomedViewMouseX=viewMouseX/(matrixWidth*scaleFactor);var zoomedMouseX=zoomedOffsetLeft+zoomedViewMouseX;cellI=Math.floor(zoomedMouseX*numCols);return[cellI,trackI];}// Not transposed\nvar viewMouseY=mouseY-axisOffsetTop;var bboxTargetY=targetY*scaleFactor+matrixHeight*scaleFactor/2;var bboxTop=bboxTargetY-matrixHeight/2;var zoomedOffsetTop=bboxTop/(matrixHeight*scaleFactor);var zoomedViewMouseY=viewMouseY/(matrixHeight*scaleFactor);var zoomedMouseY=zoomedOffsetTop+zoomedViewMouseY;cellI=Math.floor(zoomedMouseY*numRows);return[cellI,trackI];}\n// CONCATENATED MODULE: ./node_modules/eslint-loader/dist/cjs.js??ref--5-0!./src/components/heatmap/heatmap.worker.js\n/* eslint-disable no-restricted-globals */\n\n\n/**\n * Map a gene expression matrix onto multiple square array tiles,\n * taking into account the ordering/selection of cells.\n * @param {object} params\n * @param {string} params.curr The current task uuid.\n * @param {number} params.xTiles How many tiles required in the x direction?\n * @param {number} params.yTiles How many tiles required in the y direction?\n * @param {number} params.tileSize How many entries along each tile axis?\n * @param {string[]} params.cellOrdering The current ordering of cells.\n * @param {string[]} params.cols The name of each column (gene ID).\n * Does not take transpose into account (always genes).\n * @param {ArrayBuffer} params.data The array buffer.\n * Need to transfer back to main thread when done.\n * @param {boolean} params.transpose Is the heatmap transposed?\n * @param {boolean} params.expressionRowLookUp A lookup table for the array index of a given cell.\n * This is needed for performance reasons instead of calling `indexOf` repeatedly.\n * @returns {array} [message, transfers]\n */\nfunction getTile({\n  curr,\n  tileI,\n  tileJ,\n  tileSize,\n  cellOrdering,\n  cols,\n  data,\n  transpose,\n  expressionRowLookUp,\n}) {\n  const view = new Uint8Array(data);\n\n  const numGenes = cols.length;\n  const numCells = cellOrdering.length;\n\n  const getTileFunction = (transpose ? getGeneByCellTile : getCellByGeneTile);\n\n  const result = getTileFunction(\n    view,\n    {\n      tileSize,\n      tileI,\n      tileJ,\n      numCells,\n      numGenes,\n      cellOrdering,\n      expressionRowLookUp,\n    },\n  );\n  return [{ tile: result, buffer: data, curr }, [data]];\n}\n\n/**\n * Worker message passing logic.\n */\nif (typeof self !== 'undefined') {\n  const nameToFunction = {\n    getTile,\n  };\n\n  self.addEventListener('message', (event) => {\n    try {\n      const [name, args] = event.data;\n      const [message, transfers] = nameToFunction[name](args);\n      self.postMessage(message, transfers);\n    } catch (e) {\n      console.warn(e);\n    }\n  });\n}\n\n\n/***/ })\n/******/ ]);\n//# sourceMappingURL=c5deb388dbf2584adb32.worker.js.map",null);};

/***/ }),
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
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
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeatmapSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeatmapSubscriber", function() { return _HeatmapSubscriber__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _Heatmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(122);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heatmap", function() { return _Heatmap__WEBPACK_IMPORTED_MODULE_1__["a"]; });



/***/ }),
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;

module.exports = function (content, url) {
  try {
    try {
      var blob;

      try {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

        blob = new BlobBuilder();

        blob.append(content);

        blob = blob.getBlob();
      } catch (e) {
        // The proposed API
        blob = new Blob([content]);
      }

      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (!url) {
      throw Error('Inline worker is not supported');
    }

    return new Worker(url);
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=heatmap.js.map