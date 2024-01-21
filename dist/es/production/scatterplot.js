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
/******/ 	return __webpack_require__(__webpack_require__.s = 176);
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
/* 71 */
/***/ (function(module, exports) {

module.exports = require("nebula.gl");

/***/ }),
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
/* 102 */
/***/ (function(module, exports) {

module.exports = require("@nebula.gl/edit-modes");

/***/ }),
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
/* 109 */
/***/ (function(module, exports) {

module.exports = require("d3-quadtree");

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(13);

// EXTERNAL MODULE: external "@luma.gl/constants"
var constants_ = __webpack_require__(15);
var constants_default = /*#__PURE__*/__webpack_require__.n(constants_);

// EXTERNAL MODULE: external "@deck.gl/core"
var core_ = __webpack_require__(17);

// EXTERNAL MODULE: ./src/layers/constants.js
var constants = __webpack_require__(29);

// CONCATENATED MODULE: ./src/layer-extensions/ScaledExpressionExtension/shader-module.js
/**
 *
 * Reference: https://github.com/visgl/deck.gl/blob/8.4-release/modules/layers/src/scatterplot-layer/scatterplot-layer-vertex.glsl.js
 * Reference: https://observablehq.com/@rreusser/selecting-the-right-opacity-for-2d-point-clouds
 * Reference: https://github.com/flekschas/regl-scatterplot/blob/5e3b03e/src/point.vs
 */var vs="\nvec4 plasma (float x_1648624884) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.050980392156862744,0.03137254901960784,0.5294117647058824,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.29411764705882354,0.011764705882352941,0.6313725490196078,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.49019607843137253,0.011764705882352941,0.6588235294117647,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.6588235294117647,0.13333333333333333,0.5882352941176471,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.796078431372549,0.27450980392156865,0.4745098039215686,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8980392156862745,0.4196078431372549,0.36470588235294116,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.9725490196078431,0.5803921568627451,0.2549019607843137,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.9921568627450981,0.7647058823529411,0.1568627450980392,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9411764705882353,0.9764705882352941,0.12941176470588237,1);\n  float a0 = smoothstep(e0,e1,x_1648624884);\n  float a1 = smoothstep(e1,e2,x_1648624884);\n  float a2 = smoothstep(e2,e3,x_1648624884);\n  float a3 = smoothstep(e3,e4,x_1648624884);\n  float a4 = smoothstep(e4,e5,x_1648624884);\n  float a5 = smoothstep(e5,e6,x_1648624884);\n  float a6 = smoothstep(e6,e7,x_1648624884);\n  float a7 = smoothstep(e7,e8,x_1648624884);\n  return max(mix(v0,v1,a0)*step(e0,x_1648624884)*step(x_1648624884,e1),\n    max(mix(v1,v2,a1)*step(e1,x_1648624884)*step(x_1648624884,e2),\n    max(mix(v2,v3,a2)*step(e2,x_1648624884)*step(x_1648624884,e3),\n    max(mix(v3,v4,a3)*step(e3,x_1648624884)*step(x_1648624884,e4),\n    max(mix(v4,v5,a4)*step(e4,x_1648624884)*step(x_1648624884,e5),\n    max(mix(v5,v6,a5)*step(e5,x_1648624884)*step(x_1648624884,e6),\n    max(mix(v6,v7,a6)*step(e6,x_1648624884)*step(x_1648624884,e7),mix(v7,v8,a7)*step(e7,x_1648624884)*step(x_1648624884,e8)\n  )))))));\n}\n\nvec4 viridis (float x_686877309) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.26666666666666666,0.00392156862745098,0.32941176470588235,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.2784313725490196,0.17254901960784313,0.47843137254901963,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.23137254901960785,0.3176470588235294,0.5450980392156862,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.17254901960784313,0.44313725490196076,0.5568627450980392,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.12941176470588237,0.5647058823529412,0.5529411764705883,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.15294117647058825,0.6784313725490196,0.5058823529411764,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.3607843137254902,0.7843137254901961,0.38823529411764707,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.6666666666666666,0.8627450980392157,0.19607843137254902,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9921568627450981,0.9058823529411765,0.1450980392156863,1);\n  float a0 = smoothstep(e0,e1,x_686877309);\n  float a1 = smoothstep(e1,e2,x_686877309);\n  float a2 = smoothstep(e2,e3,x_686877309);\n  float a3 = smoothstep(e3,e4,x_686877309);\n  float a4 = smoothstep(e4,e5,x_686877309);\n  float a5 = smoothstep(e5,e6,x_686877309);\n  float a6 = smoothstep(e6,e7,x_686877309);\n  float a7 = smoothstep(e7,e8,x_686877309);\n  return max(mix(v0,v1,a0)*step(e0,x_686877309)*step(x_686877309,e1),\n    max(mix(v1,v2,a1)*step(e1,x_686877309)*step(x_686877309,e2),\n    max(mix(v2,v3,a2)*step(e2,x_686877309)*step(x_686877309,e3),\n    max(mix(v3,v4,a3)*step(e3,x_686877309)*step(x_686877309,e4),\n    max(mix(v4,v5,a4)*step(e4,x_686877309)*step(x_686877309,e5),\n    max(mix(v5,v6,a5)*step(e5,x_686877309)*step(x_686877309,e6),\n    max(mix(v6,v7,a6)*step(e6,x_686877309)*step(x_686877309,e7),mix(v7,v8,a7)*step(e7,x_686877309)*step(x_686877309,e8)\n  )))))));\n}\n\nvec4 greys (float x_3692066534) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_3692066534);\n  return mix(v0,v1,a0)*step(e0,x_3692066534)*step(x_3692066534,e1);\n}\n\nvec4 magma (float x_652973032) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.01568627450980392,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.10980392156862745,0.06274509803921569,0.26666666666666666,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.30980392156862746,0.07058823529411765,0.4823529411764706,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.5058823529411764,0.1450980392156863,0.5058823529411764,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.7098039215686275,0.21176470588235294,0.47843137254901963,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8980392156862745,0.3137254901960784,0.39215686274509803,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.984313725490196,0.5294117647058824,0.3803921568627451,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.996078431372549,0.7607843137254902,0.5294117647058824,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9882352941176471,0.9921568627450981,0.7490196078431373,1);\n  float a0 = smoothstep(e0,e1,x_652973032);\n  float a1 = smoothstep(e1,e2,x_652973032);\n  float a2 = smoothstep(e2,e3,x_652973032);\n  float a3 = smoothstep(e3,e4,x_652973032);\n  float a4 = smoothstep(e4,e5,x_652973032);\n  float a5 = smoothstep(e5,e6,x_652973032);\n  float a6 = smoothstep(e6,e7,x_652973032);\n  float a7 = smoothstep(e7,e8,x_652973032);\n  return max(mix(v0,v1,a0)*step(e0,x_652973032)*step(x_652973032,e1),\n    max(mix(v1,v2,a1)*step(e1,x_652973032)*step(x_652973032,e2),\n    max(mix(v2,v3,a2)*step(e2,x_652973032)*step(x_652973032,e3),\n    max(mix(v3,v4,a3)*step(e3,x_652973032)*step(x_652973032,e4),\n    max(mix(v4,v5,a4)*step(e4,x_652973032)*step(x_652973032,e5),\n    max(mix(v5,v6,a5)*step(e5,x_652973032)*step(x_652973032,e6),\n    max(mix(v6,v7,a6)*step(e6,x_652973032)*step(x_652973032,e7),mix(v7,v8,a7)*step(e7,x_652973032)*step(x_652973032,e8)\n  )))))));\n}\n\nvec4 jet (float x_799389509) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.5137254901960784,1);\n  const float e1 = 0.125;\n  const vec4 v1 = vec4(0,0.23529411764705882,0.6666666666666666,1);\n  const float e2 = 0.375;\n  const vec4 v2 = vec4(0.0196078431372549,1,1,1);\n  const float e3 = 0.625;\n  const vec4 v3 = vec4(1,1,0,1);\n  const float e4 = 0.875;\n  const vec4 v4 = vec4(0.9803921568627451,0,0,1);\n  const float e5 = 1.0;\n  const vec4 v5 = vec4(0.5019607843137255,0,0,1);\n  float a0 = smoothstep(e0,e1,x_799389509);\n  float a1 = smoothstep(e1,e2,x_799389509);\n  float a2 = smoothstep(e2,e3,x_799389509);\n  float a3 = smoothstep(e3,e4,x_799389509);\n  float a4 = smoothstep(e4,e5,x_799389509);\n  return max(mix(v0,v1,a0)*step(e0,x_799389509)*step(x_799389509,e1),\n    max(mix(v1,v2,a1)*step(e1,x_799389509)*step(x_799389509,e2),\n    max(mix(v2,v3,a2)*step(e2,x_799389509)*step(x_799389509,e3),\n    max(mix(v3,v4,a3)*step(e3,x_799389509)*step(x_799389509,e4),mix(v4,v5,a4)*step(e4,x_799389509)*step(x_799389509,e5)\n  ))));\n}\n\nvec4 bone (float x_1404936397) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.376;\n  const vec4 v1 = vec4(0.32941176470588235,0.32941176470588235,0.4549019607843137,1);\n  const float e2 = 0.753;\n  const vec4 v2 = vec4(0.6627450980392157,0.7843137254901961,0.7843137254901961,1);\n  const float e3 = 1.0;\n  const vec4 v3 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_1404936397);\n  float a1 = smoothstep(e1,e2,x_1404936397);\n  float a2 = smoothstep(e2,e3,x_1404936397);\n  return max(mix(v0,v1,a0)*step(e0,x_1404936397)*step(x_1404936397,e1),\n    max(mix(v1,v2,a1)*step(e1,x_1404936397)*step(x_1404936397,e2),mix(v2,v3,a2)*step(e2,x_1404936397)*step(x_1404936397,e3)\n  ));\n}\n\nvec4 copper (float x_41650866) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.804;\n  const vec4 v1 = vec4(1,0.6274509803921569,0.4,1);\n  const float e2 = 1.0;\n  const vec4 v2 = vec4(1,0.7803921568627451,0.4980392156862745,1);\n  float a0 = smoothstep(e0,e1,x_41650866);\n  float a1 = smoothstep(e1,e2,x_41650866);\n  return max(mix(v0,v1,a0)*step(e0,x_41650866)*step(x_41650866,e1),mix(v1,v2,a1)*step(e1,x_41650866)*step(x_41650866,e2)\n  );\n}\n\nvec4 density (float x_681601952) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.21176470588235294,0.054901960784313725,0.1411764705882353,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.34901960784313724,0.09019607843137255,0.3137254901960784,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.43137254901960786,0.17647058823529413,0.5176470588235295,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.47058823529411764,0.30196078431372547,0.6980392156862745,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.47058823529411764,0.44313725490196076,0.8352941176470589,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.45098039215686275,0.592156862745098,0.8941176470588236,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.5254901960784314,0.7254901960784313,0.8901960784313725,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.6941176470588235,0.8392156862745098,0.8901960784313725,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9019607843137255,0.9450980392156862,0.9450980392156862,1);\n  float a0 = smoothstep(e0,e1,x_681601952);\n  float a1 = smoothstep(e1,e2,x_681601952);\n  float a2 = smoothstep(e2,e3,x_681601952);\n  float a3 = smoothstep(e3,e4,x_681601952);\n  float a4 = smoothstep(e4,e5,x_681601952);\n  float a5 = smoothstep(e5,e6,x_681601952);\n  float a6 = smoothstep(e6,e7,x_681601952);\n  float a7 = smoothstep(e7,e8,x_681601952);\n  return max(mix(v0,v1,a0)*step(e0,x_681601952)*step(x_681601952,e1),\n    max(mix(v1,v2,a1)*step(e1,x_681601952)*step(x_681601952,e2),\n    max(mix(v2,v3,a2)*step(e2,x_681601952)*step(x_681601952,e3),\n    max(mix(v3,v4,a3)*step(e3,x_681601952)*step(x_681601952,e4),\n    max(mix(v4,v5,a4)*step(e4,x_681601952)*step(x_681601952,e5),\n    max(mix(v5,v6,a5)*step(e5,x_681601952)*step(x_681601952,e6),\n    max(mix(v6,v7,a6)*step(e6,x_681601952)*step(x_681601952,e7),mix(v7,v8,a7)*step(e7,x_681601952)*step(x_681601952,e8)\n  )))))));\n}\n\nvec4 inferno (float x_902288871) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0.01568627450980392,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.12156862745098039,0.047058823529411764,0.2823529411764706,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.3333333333333333,0.058823529411764705,0.42745098039215684,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.5333333333333333,0.13333333333333333,0.41568627450980394,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0.7294117647058823,0.21176470588235294,0.3333333333333333,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0.8901960784313725,0.34901960784313724,0.2,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0.9764705882352941,0.5490196078431373,0.0392156862745098,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.9764705882352941,0.788235294117647,0.19607843137254902,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.9882352941176471,1,0.6431372549019608,1);\n  float a0 = smoothstep(e0,e1,x_902288871);\n  float a1 = smoothstep(e1,e2,x_902288871);\n  float a2 = smoothstep(e2,e3,x_902288871);\n  float a3 = smoothstep(e3,e4,x_902288871);\n  float a4 = smoothstep(e4,e5,x_902288871);\n  float a5 = smoothstep(e5,e6,x_902288871);\n  float a6 = smoothstep(e6,e7,x_902288871);\n  float a7 = smoothstep(e7,e8,x_902288871);\n  return max(mix(v0,v1,a0)*step(e0,x_902288871)*step(x_902288871,e1),\n    max(mix(v1,v2,a1)*step(e1,x_902288871)*step(x_902288871,e2),\n    max(mix(v2,v3,a2)*step(e2,x_902288871)*step(x_902288871,e3),\n    max(mix(v3,v4,a3)*step(e3,x_902288871)*step(x_902288871,e4),\n    max(mix(v4,v5,a4)*step(e4,x_902288871)*step(x_902288871,e5),\n    max(mix(v5,v6,a5)*step(e5,x_902288871)*step(x_902288871,e6),\n    max(mix(v6,v7,a6)*step(e6,x_902288871)*step(x_902288871,e7),mix(v7,v8,a7)*step(e7,x_902288871)*step(x_902288871,e8)\n  )))))));\n}\n\nvec4 cool (float x_2444426143) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0.49019607843137253,0,0.7019607843137254,1);\n  const float e1 = 0.13;\n  const vec4 v1 = vec4(0.4549019607843137,0,0.8549019607843137,1);\n  const float e2 = 0.25;\n  const vec4 v2 = vec4(0.3843137254901961,0.2901960784313726,0.9294117647058824,1);\n  const float e3 = 0.38;\n  const vec4 v3 = vec4(0.26666666666666666,0.5725490196078431,0.9058823529411765,1);\n  const float e4 = 0.5;\n  const vec4 v4 = vec4(0,0.8,0.7725490196078432,1);\n  const float e5 = 0.63;\n  const vec4 v5 = vec4(0,0.9686274509803922,0.5725490196078431,1);\n  const float e6 = 0.75;\n  const vec4 v6 = vec4(0,1,0.34509803921568627,1);\n  const float e7 = 0.88;\n  const vec4 v7 = vec4(0.1568627450980392,1,0.03137254901960784,1);\n  const float e8 = 1.0;\n  const vec4 v8 = vec4(0.5764705882352941,1,0,1);\n  float a0 = smoothstep(e0,e1,x_2444426143);\n  float a1 = smoothstep(e1,e2,x_2444426143);\n  float a2 = smoothstep(e2,e3,x_2444426143);\n  float a3 = smoothstep(e3,e4,x_2444426143);\n  float a4 = smoothstep(e4,e5,x_2444426143);\n  float a5 = smoothstep(e5,e6,x_2444426143);\n  float a6 = smoothstep(e6,e7,x_2444426143);\n  float a7 = smoothstep(e7,e8,x_2444426143);\n  return max(mix(v0,v1,a0)*step(e0,x_2444426143)*step(x_2444426143,e1),\n    max(mix(v1,v2,a1)*step(e1,x_2444426143)*step(x_2444426143,e2),\n    max(mix(v2,v3,a2)*step(e2,x_2444426143)*step(x_2444426143,e3),\n    max(mix(v3,v4,a3)*step(e3,x_2444426143)*step(x_2444426143,e4),\n    max(mix(v4,v5,a4)*step(e4,x_2444426143)*step(x_2444426143,e5),\n    max(mix(v5,v6,a5)*step(e5,x_2444426143)*step(x_2444426143,e6),\n    max(mix(v6,v7,a6)*step(e6,x_2444426143)*step(x_2444426143,e7),mix(v7,v8,a7)*step(e7,x_2444426143)*step(x_2444426143,e8)\n  )))))));\n}\n\nvec4 hot (float x_1123650753) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,0,1);\n  const float e1 = 0.3;\n  const vec4 v1 = vec4(0.9019607843137255,0,0,1);\n  const float e2 = 0.6;\n  const vec4 v2 = vec4(1,0.8235294117647058,0,1);\n  const float e3 = 1.0;\n  const vec4 v3 = vec4(1,1,1,1);\n  float a0 = smoothstep(e0,e1,x_1123650753);\n  float a1 = smoothstep(e1,e2,x_1123650753);\n  float a2 = smoothstep(e2,e3,x_1123650753);\n  return max(mix(v0,v1,a0)*step(e0,x_1123650753)*step(x_1123650753,e1),\n    max(mix(v1,v2,a1)*step(e1,x_1123650753)*step(x_1123650753,e2),mix(v2,v3,a2)*step(e2,x_1123650753)*step(x_1123650753,e3)\n  ));\n}\n\nvec4 spring (float x_3460271019) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(1,0,1,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0,1);\n  float a0 = smoothstep(e0,e1,x_3460271019);\n  return mix(v0,v1,a0)*step(e0,x_3460271019)*step(x_3460271019,e1);\n}\n\nvec4 summer (float x_1787574999) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0.5019607843137255,0.4,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0.4,1);\n  float a0 = smoothstep(e0,e1,x_1787574999);\n  return mix(v0,v1,a0)*step(e0,x_1787574999)*step(x_1787574999,e1);\n}\n\nvec4 autumn (float x_204634793) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(1,0,0,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(1,1,0,1);\n  float a0 = smoothstep(e0,e1,x_204634793);\n  return mix(v0,v1,a0)*step(e0,x_204634793)*step(x_204634793,e1);\n}\n\nvec4 winter (float x_4071283602) {\n  const float e0 = 0.0;\n  const vec4 v0 = vec4(0,0,1,1);\n  const float e1 = 1.0;\n  const vec4 v1 = vec4(0,1,0.5019607843137255,1);\n  float a0 = smoothstep(e0,e1,x_4071283602);\n  return mix(v0,v1,a0)*step(e0,x_4071283602)*step(x_4071283602,e1);\n}\n\n// Custom attributes for Vitessce:\nattribute float expressionValue;\n\n// Custom uniforms for Vitessce:\nuniform vec2 uColorScaleRange;\nuniform bool uIsExpressionMode;\n\n";var inject={'vs:DECKGL_FILTER_COLOR':"\n    if(uIsExpressionMode) {\n      float normalizedExpressionValue = expressionValue / 255.0;\n      float scaledExpressionValue = (normalizedExpressionValue - uColorScaleRange[0]) / max(0.005, (uColorScaleRange[1] - uColorScaleRange[0]));\n      color.rgb = COLORMAP_FUNC(clamp(scaledExpressionValue, 0.0, 1.0)).rgb;\n    }\n  "};/* harmony default export */ var shader_module = ({name:'scaled-expression',vs:vs,inject:inject});
// CONCATENATED MODULE: ./src/layer-extensions/ScaledExpressionExtension/ScaledExpressionExtension.js
/* eslint-disable no-underscore-dangle */ /* eslint-disable import/no-extraneous-dependencies */var defaultProps={colormap:{type:'string',value:constants["c" /* GLSL_COLORMAP_DEFAULT */],compare:true},colorScaleLo:{type:'number',value:0.0,compare:true},colorScaleHi:{type:'number',value:1.0,compare:true},isExpressionMode:false,getExpressionValue:{type:'accessor',value:0},getSelectionState:{type:'accessor',value:0.0}};var ScaledExpressionExtension_ScaledExpressionExtension=/*#__PURE__*/function(_LayerExtension){Object(inherits["a" /* default */])(ScaledExpressionExtension,_LayerExtension);var _super=Object(createSuper["a" /* default */])(ScaledExpressionExtension);function ScaledExpressionExtension(){Object(classCallCheck["a" /* default */])(this,ScaledExpressionExtension);return _super.apply(this,arguments);}Object(createClass["a" /* default */])(ScaledExpressionExtension,[{key:"getShaders",value:function getShaders(){var colormap=this.props.colormap;return{modules:[shader_module],defines:Object(defineProperty["a" /* default */])({},constants["a" /* COLORMAP_SHADER_PLACEHOLDER */],constants["b" /* GLSL_COLORMAPS */].includes(colormap)?colormap:constants["c" /* GLSL_COLORMAP_DEFAULT */])};}},{key:"updateState",value:function updateState(_ref){var props=_ref.props,oldProps=_ref.oldProps;if(props.colormap!==oldProps.colormap){var gl=this.context.gl;// Normal single model layers, like ScatterplotLayer
if(this.state.model){var _this$state$model;// eslint-disable-next-line no-unused-expressions
(_this$state$model=this.state.model)===null||_this$state$model===void 0?void 0:_this$state$model.delete();this.state.model=this._getModel(gl);}else{// Special handling for PolygonLayer sublayer models.
if(this.state.models){var _this$state$models;// eslint-disable-next-line no-unused-expressions
(_this$state$models=this.state.models)===null||_this$state$models===void 0?void 0:_this$state$models.forEach(function(model){return model===null||model===void 0?void 0:model.delete();});}if(this.state.topModel){var _this$state$topModel;// eslint-disable-next-line no-unused-expressions
(_this$state$topModel=this.state.topModel)===null||_this$state$topModel===void 0?void 0:_this$state$topModel.delete();}if(this.state.sideModel){var _this$state$sideModel;// eslint-disable-next-line no-unused-expressions
(_this$state$sideModel=this.state.sideModel)===null||_this$state$sideModel===void 0?void 0:_this$state$sideModel.delete();}if(this._getModels){this.setState(this._getModels(this.context.gl));}}var attributeManager=this.getAttributeManager();if(attributeManager){this.getAttributeManager().invalidateAll();}}}},{key:"initializeState",value:function initializeState(){var layer=this.getCurrentLayer();// No need to run this on layers that don't have a `draw` call.
if(layer.isComposite){return;}var attributeManager=this.getAttributeManager();if(attributeManager){// This attributes is the array of expression data needed for
// coloring cells against the colormap.
attributeManager.add({expressionValue:{type:constants_default.a.FLOAT,size:1,transition:true,accessor:'getExpressionValue',defaultValue:1,// PolygonLayer fill needs not-intsanced attribute but
// ScatterplotLayer and the PolygonLayer stroke needs instanced.
// So use another attribute's divisor property as a proxy for this divisor.
divisor:Object.values(attributeManager.attributes)[0].settings.divisor}});}}},{key:"draw",value:function draw(){var _this$props=this.props,colorScaleLo=_this$props.colorScaleLo,colorScaleHi=_this$props.colorScaleHi,isExpressionMode=_this$props.isExpressionMode;var _this$state=this.state,topModel=_this$state.topModel,sideModel=_this$state.sideModel,models=_this$state.models,model=_this$state.model;var uniforms={uColorScaleRange:[colorScaleLo,colorScaleHi],uIsExpressionMode:isExpressionMode};// ScatterplotLayer model
// eslint-disable-next-line no-unused-expressions
model===null||model===void 0?void 0:model.setUniforms(uniforms);// PolygonLayer models from sublayers
// eslint-disable-next-line no-unused-expressions
models===null||models===void 0?void 0:models.forEach(function(m){return m.setUniforms(uniforms);});// eslint-disable-next-line no-unused-expressions
topModel===null||topModel===void 0?void 0:topModel.setUniforms(uniforms);// eslint-disable-next-line no-unused-expressions
sideModel===null||sideModel===void 0?void 0:sideModel.setUniforms(uniforms);}}]);return ScaledExpressionExtension;}(core_["LayerExtension"]);ScaledExpressionExtension_ScaledExpressionExtension.extensionName='ScaledExpressionExtension';ScaledExpressionExtension_ScaledExpressionExtension.defaultProps=defaultProps;
// CONCATENATED MODULE: ./src/layer-extensions/ScaledExpressionExtension/index.js
/* harmony default export */ var layer_extensions_ScaledExpressionExtension = (ScaledExpressionExtension_ScaledExpressionExtension);
// CONCATENATED MODULE: ./src/layer-extensions/SelectionExtension/shader-module.js
var shader_module_vs="\nattribute float isSelected;\n";var shader_module_inject={'vs:DECKGL_FILTER_GL_POSITION':"\n    position.z += (1. - isSelected) * .00005; // Add a small z offset for unselected points in the positive direction i.e into the screen.\n  ",'fs:#main-start':" // Gets rid of bad border effects (active after deck.gl 8.5): https://github.com/visgl/deck.gl/pull/6081\n    float distToCenterNew = length(unitPosition) * outerRadiusPixels;\n    float inCircleNew = step(distToCenterNew, outerRadiusPixels);\n    if (inCircleNew == 0.0) {\n      discard;\n    }\n  "};/* harmony default export */ var SelectionExtension_shader_module = ({name:'selection',vs:shader_module_vs,inject:shader_module_inject});
// CONCATENATED MODULE: ./src/layer-extensions/SelectionExtension/SelectionExtension.js
/* eslint-disable no-underscore-dangle */ /* eslint-disable import/no-extraneous-dependencies */var SelectionExtension_SelectionExtension=/*#__PURE__*/function(_LayerExtension){Object(inherits["a" /* default */])(SelectionExtension,_LayerExtension);var _super=Object(createSuper["a" /* default */])(SelectionExtension);function SelectionExtension(){Object(classCallCheck["a" /* default */])(this,SelectionExtension);return _super.apply(this,arguments);}Object(createClass["a" /* default */])(SelectionExtension,[{key:"getShaders",// eslint-disable-next-line class-methods-use-this
value:function getShaders(){return{modules:[SelectionExtension_shader_module]};}},{key:"initializeState",value:function initializeState(context,extension){var attributeManager=this.getAttributeManager();if(attributeManager){attributeManager.add({isSelected:{type:constants_default.a.FLOAT,size:1,transition:true,accessor:'getCellIsSelected',defaultValue:1,// PolygonLayer needs not-intsanced attribute but
// ScatterplotLayer needs instanced.
divisor:Number(extension.opts.instanced)}});}}}]);return SelectionExtension;}(core_["LayerExtension"]);SelectionExtension_SelectionExtension.extensionName='SelectionExtension';
// CONCATENATED MODULE: ./src/layer-extensions/SelectionExtension/index.js
/* harmony default export */ var layer_extensions_SelectionExtension = (SelectionExtension_SelectionExtension);
// CONCATENATED MODULE: ./src/layer-extensions/index.js
/* concated harmony reexport ScaledExpressionExtension */__webpack_require__.d(__webpack_exports__, "a", function() { return layer_extensions_ScaledExpressionExtension; });
/* concated harmony reexport SelectionExtension */__webpack_require__.d(__webpack_exports__, "b", function() { return layer_extensions_SelectionExtension; });


/***/ }),
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
/* 115 */
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

// EXTERNAL MODULE: external "d3-array"
var external_d3_array_ = __webpack_require__(64);

// EXTERNAL MODULE: external "lodash/isEqual"
var isEqual_ = __webpack_require__(16);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_);

// EXTERNAL MODULE: ./src/components/TitleInfo.js + 1 modules
var TitleInfo = __webpack_require__(39);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(6);

// EXTERNAL MODULE: ./src/components/hooks.js
var hooks = __webpack_require__(18);

// EXTERNAL MODULE: ./src/components/utils.js
var components_utils = __webpack_require__(12);

// EXTERNAL MODULE: ./src/components/sets/cell-set-utils.js
var cell_set_utils = __webpack_require__(27);

// EXTERNAL MODULE: ./src/components/data-hooks.js
var data_hooks = __webpack_require__(26);

// EXTERNAL MODULE: ./src/components/interpolate-colors.js
var interpolate_colors = __webpack_require__(99);

// EXTERNAL MODULE: ./src/components/scatterplot/Scatterplot.js + 1 modules
var Scatterplot = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5);

// EXTERNAL MODULE: ./src/components/tooltip/Tooltip2D.js
var Tooltip2D = __webpack_require__(89);

// EXTERNAL MODULE: ./src/components/tooltip/TooltipContent.js
var TooltipContent = __webpack_require__(90);

// EXTERNAL MODULE: ./src/app/state/hooks.js
var state_hooks = __webpack_require__(7);

// CONCATENATED MODULE: ./src/components/scatterplot/ScatterplotTooltipSubscriber.js
function ScatterplotTooltipSubscriber(props){var parentUuid=props.parentUuid,cellHighlight=props.cellHighlight,width=props.width,height=props.height,getCellInfo=props.getCellInfo;var sourceUuid=Object(state_hooks["g" /* useComponentHover */])();var viewInfo=Object(state_hooks["i" /* useComponentViewInfo */])(parentUuid);var _ref=cellHighlight&&getCellInfo?[getCellInfo(cellHighlight)].concat(Object(toConsumableArray["a" /* default */])(viewInfo&&viewInfo.project?viewInfo.project(cellHighlight):[null,null])):[null,null,null],_ref2=Object(slicedToArray["a" /* default */])(_ref,3),cellInfo=_ref2[0],x=_ref2[1],y=_ref2[2];return cellInfo?/*#__PURE__*/external_react_default.a.createElement(Tooltip2D["a" /* default */],{x:x,y:y,parentUuid:parentUuid,sourceUuid:sourceUuid,parentWidth:width,parentHeight:height},/*#__PURE__*/external_react_default.a.createElement(TooltipContent["a" /* default */],{info:cellInfo})):null;}
// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(36);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__(74);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

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

// EXTERNAL MODULE: ./src/components/shared-plot-options/CellColorEncodingOption.js
var CellColorEncodingOption = __webpack_require__(119);

// EXTERNAL MODULE: ./src/layers/constants.js
var constants = __webpack_require__(29);

// CONCATENATED MODULE: ./src/components/scatterplot/ScatterplotOptions.js
function ScatterplotOptions(props){var children=props.children,observationsLabel=props.observationsLabel,cellRadius=props.cellRadius,setCellRadius=props.setCellRadius,cellRadiusMode=props.cellRadiusMode,setCellRadiusMode=props.setCellRadiusMode,cellOpacity=props.cellOpacity,setCellOpacity=props.setCellOpacity,cellOpacityMode=props.cellOpacityMode,setCellOpacityMode=props.setCellOpacityMode,cellSetLabelsVisible=props.cellSetLabelsVisible,setCellSetLabelsVisible=props.setCellSetLabelsVisible,cellSetLabelSize=props.cellSetLabelSize,setCellSetLabelSize=props.setCellSetLabelSize,cellSetPolygonsVisible=props.cellSetPolygonsVisible,setCellSetPolygonsVisible=props.setCellSetPolygonsVisible,cellColorEncoding=props.cellColorEncoding,setCellColorEncoding=props.setCellColorEncoding,geneExpressionColormap=props.geneExpressionColormap,setGeneExpressionColormap=props.setGeneExpressionColormap,geneExpressionColormapRange=props.geneExpressionColormapRange,setGeneExpressionColormapRange=props.setGeneExpressionColormapRange;var observationsLabelNice=Object(utils["a" /* capitalize */])(observationsLabel);var classes=Object(styles["a" /* useStyles */])();function handleCellRadiusModeChange(event){setCellRadiusMode(event.target.value);}function handleCellOpacityModeChange(event){setCellOpacityMode(event.target.value);}function handleRadiusChange(event,value){setCellRadius(value);}function handleOpacityChange(event,value){setCellOpacity(value);}function handleLabelVisibilityChange(event){setCellSetLabelsVisible(event.target.checked);}function handleLabelSizeChange(event,value){setCellSetLabelSize(value);}function handlePolygonVisibilityChange(event){setCellSetPolygonsVisible(event.target.checked);}function handleGeneExpressionColormapChange(event){setGeneExpressionColormap(event.target.value);}function handleColormapRangeChange(event,value){setGeneExpressionColormapRange(value);}var handleColormapRangeChangeDebounced=Object(external_react_["useCallback"])(debounce_default()(handleColormapRangeChange,5,{trailing:true}),[handleColormapRangeChange]);return/*#__PURE__*/external_react_default.a.createElement(OptionsContainer["a" /* default */],null,children,/*#__PURE__*/external_react_default.a.createElement(CellColorEncodingOption["a" /* default */],{observationsLabel:observationsLabel,cellColorEncoding:cellColorEncoding,setCellColorEncoding:setCellColorEncoding}),/*#__PURE__*/external_react_default.a.createElement(TableRow_default.a,null,/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.labelCell},observationsLabelNice," Set Labels Visible"),/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.inputCell},/*#__PURE__*/external_react_default.a.createElement(Checkbox_default.a,{className:classes.checkbox,checked:cellSetLabelsVisible,onChange:handleLabelVisibilityChange,name:"scatterplot-option-cell-set-labels",color:"default"}))),/*#__PURE__*/external_react_default.a.createElement(TableRow_default.a,null,/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.labelCell},observationsLabelNice," Set Label Size"),/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.inputCell},/*#__PURE__*/external_react_default.a.createElement(Slider_default.a,{disabled:!cellSetLabelsVisible,classes:{root:classes.slider,valueLabel:classes.sliderValueLabel},value:cellSetLabelSize,onChange:handleLabelSizeChange,"aria-labelledby":"cell-set-label-size-slider",valueLabelDisplay:"auto",step:1,min:8,max:36}))),/*#__PURE__*/external_react_default.a.createElement(TableRow_default.a,null,/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.labelCell},observationsLabelNice," Set Polygons Visible"),/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.inputCell},/*#__PURE__*/external_react_default.a.createElement(Checkbox_default.a,{className:classes.checkbox,checked:cellSetPolygonsVisible,onChange:handlePolygonVisibilityChange,name:"scatterplot-option-cell-set-polygons",color:"default"}))),/*#__PURE__*/external_react_default.a.createElement(TableRow_default.a,null,/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.labelCell,htmlFor:"cell-radius-mode-select"},observationsLabelNice," Radius Mode"),/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.inputCell},/*#__PURE__*/external_react_default.a.createElement(OptionSelect["a" /* default */],{className:classes.select,value:cellRadiusMode,onChange:handleCellRadiusModeChange,inputProps:{id:'cell-radius-mode-select'}},/*#__PURE__*/external_react_default.a.createElement("option",{value:"auto"},"Auto"),/*#__PURE__*/external_react_default.a.createElement("option",{value:"manual"},"Manual")))),/*#__PURE__*/external_react_default.a.createElement(TableRow_default.a,null,/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.labelCell},observationsLabelNice," Radius"),/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.inputCell},/*#__PURE__*/external_react_default.a.createElement(Slider_default.a,{disabled:cellRadiusMode!=='manual',classes:{root:classes.slider,valueLabel:classes.sliderValueLabel},value:cellRadius,onChange:handleRadiusChange,"aria-labelledby":"cell-radius-slider",valueLabelDisplay:"auto",step:0.01,min:0.01,max:10}))),/*#__PURE__*/external_react_default.a.createElement(TableRow_default.a,null,/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.labelCell,htmlFor:"cell-opacity-mode-select"},observationsLabelNice," Opacity Mode"),/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.inputCell},/*#__PURE__*/external_react_default.a.createElement(OptionSelect["a" /* default */],{className:classes.select,value:cellOpacityMode,onChange:handleCellOpacityModeChange,inputProps:{id:'cell-opacity-mode-select'}},/*#__PURE__*/external_react_default.a.createElement("option",{value:"auto"},"Auto"),/*#__PURE__*/external_react_default.a.createElement("option",{value:"manual"},"Manual")))),/*#__PURE__*/external_react_default.a.createElement(TableRow_default.a,null,/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.labelCell},observationsLabelNice," Opacity"),/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.inputCell},/*#__PURE__*/external_react_default.a.createElement(Slider_default.a,{disabled:cellOpacityMode!=='manual',classes:{root:classes.slider,valueLabel:classes.sliderValueLabel},value:cellOpacity,onChange:handleOpacityChange,"aria-labelledby":"cell-opacity-slider",valueLabelDisplay:"auto",step:0.05,min:0.0,max:1.0}))),/*#__PURE__*/external_react_default.a.createElement(TableRow_default.a,null,/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.labelCell,htmlFor:"gene-expression-colormap-select"},"Gene Expression Colormap"),/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.inputCell},/*#__PURE__*/external_react_default.a.createElement(OptionSelect["a" /* default */],{className:classes.select,value:geneExpressionColormap,onChange:handleGeneExpressionColormapChange,inputProps:{id:'gene-expression-colormap-select'}},constants["b" /* GLSL_COLORMAPS */].map(function(cmap){return/*#__PURE__*/external_react_default.a.createElement("option",{key:cmap,value:cmap},cmap);})))),/*#__PURE__*/external_react_default.a.createElement(TableRow_default.a,null,/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.labelCell},"Gene Expression Colormap Range"),/*#__PURE__*/external_react_default.a.createElement(TableCell_default.a,{className:classes.inputCell},/*#__PURE__*/external_react_default.a.createElement(Slider_default.a,{classes:{root:classes.slider,valueLabel:classes.sliderValueLabel},value:geneExpressionColormapRange,onChange:handleColormapRangeChangeDebounced,"aria-labelledby":"gene-expression-colormap-range-slider",valueLabelDisplay:"auto",step:0.005,min:0.0,max:1.0}))));}
// EXTERNAL MODULE: external "deck.gl"
var external_deck_gl_ = __webpack_require__(70);

// EXTERNAL MODULE: external "lodash/clamp"
var clamp_ = __webpack_require__(55);
var clamp_default = /*#__PURE__*/__webpack_require__.n(clamp_);

// CONCATENATED MODULE: ./src/components/shared-spatial-scatterplot/dynamic-opacity.js
// Reference: https://observablehq.com/@rreusser/selecting-the-right-opacity-for-2d-point-clouds
// Reference: https://observablehq.com/@bmschmidt/dot-density-election-maps-with-webgl
function getPointSizeDevicePixels(devicePixelRatio,zoom,xRange,yRange,width,height){// Size of a point, in units of the diagonal axis.
var pointSize=0.001;// Point size maximum, in screen pixels.
var pointScreenSizeMax=10;// Point size minimum, in screen pixels.
var pointScreenSizeMin=1/devicePixelRatio;var scaleFactor=Math.pow(2,zoom);var xAxisRange=2.0/(xRange*scaleFactor/width);var yAxisRange=2.0/(yRange*scaleFactor/height);// The diagonal screen size as a fraction of the current diagonal axis range,
// then converted to device pixels.
var diagonalScreenSize=Math.sqrt(Math.pow(width,2)+Math.pow(height,2));var diagonalAxisRange=Math.sqrt(Math.pow(xAxisRange,2)+Math.pow(yAxisRange,2));var diagonalFraction=pointSize/diagonalAxisRange;var deviceSize=diagonalFraction*diagonalScreenSize;var pointSizeDevicePixels=clamp_default()(deviceSize,pointScreenSizeMin,pointScreenSizeMax);return pointSizeDevicePixels;}// Reference: https://observablehq.com/@rreusser/selecting-the-right-opacity-for-2d-point-clouds
function getPointOpacity(zoom,xRange,yRange,width,height,numCells,avgFillDensity){var N=numCells;var _OrthographicView$mak=new external_deck_gl_["OrthographicView"]({zoom:zoom}).makeViewport({height:height,width:width,viewState:{zoom:zoom,target:[0,0,0]}}).getBounds(),_OrthographicView$mak2=Object(slicedToArray["a" /* default */])(_OrthographicView$mak,4),minX=_OrthographicView$mak2[0],minY=_OrthographicView$mak2[1],maxX=_OrthographicView$mak2[2],maxY=_OrthographicView$mak2[3];var X=maxY-minY;var Y=maxX-minX;var X0=xRange;var Y0=yRange;var W=width;var H=height;var rho=avgFillDensity;if(!rho){rho=Math.min(1,1/Math.pow(10,Math.log10(N)-3));}// p in the calculation is the pixel length/width of a given point, which for us is 1
// so it does not factor into our calculation here.
var alpha=rho*W*H/N*(Y0/Y)*(X0/X);var pointOpacity=clamp_default()(alpha,1.01/255,1.0);return pointOpacity;}
// EXTERNAL MODULE: ./src/app/state/coordination.js
var coordination = __webpack_require__(30);

// CONCATENATED MODULE: ./src/components/scatterplot/ScatterplotSubscriber.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SCATTERPLOT_DATA_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScatterplotSubscriber; });
var SCATTERPLOT_DATA_TYPES=['cells','expression-matrix','cell-sets'];/**
   * A subscriber component for a base scatterplot to be used by other subscriber components.
   * @param {object} props
   * @param {number} props.uuid The unique identifier for this component.
   * @param {string} props.theme The current theme name.
   * @param {object} props.coordinationScopes The mapping from coordination types to coordination
   * scopes.
   * @param {object} props.loaders The return values from loaders to keep the hooks from the parent
   * subscriber component and this subscriber in sync.
   * @param {object} props.useReadyData The return values from useReadyData to keep the hooks from
   * the parent subscriber component and this subscriber in sync.
   * @param {object} props.urlsData The return values from useUrls to keep the hooks from the parent
   * subscriber component and this subscriber in sync.
   * @param {object} props.cellsData [cells, cellsCount] either from useCellsData or another source.
   * @param {string} props.mapping The name of the mapping to plot from the cells data.
   * @param {object} props.customOptions Custom options to be rendered in the component's options.
   * @param {object} props.hideTools Should the DeckGL tools be hidden?
   * @param {object} props.cellsEmptyMessage Message to display if no cells are present.
   * @param {object} props.getCellInfoOverride Function to override the getCellInfo callback
   * for the scatterplot info tooltip.
   * @param {object} props.cellSetsPolygonCacheId An identifier for cell sets polygon cache.
   * Change this when something modifies the values of the cell mappings (e.g. log transform)
   * or for any other case that warrants a new cellSetsPolygonCache.
   * @param {boolean} props.disableTooltip Should the tooltip be disabled?
   * @param {function} props.removeGridComponent The callback function to pass to TitleInfo,
   * to call when the component has been removed from the grid.
   * @param {string} props.title The component title.
   * @param {number} props.averageFillDensity Override the average fill density calculation
   * when using dynamic opacity mode.
   */function ScatterplotSubscriber(props){var uuid=props.uuid,coordinationScopes=props.coordinationScopes,removeGridComponent=props.removeGridComponent,theme=props.theme,_props$disableTooltip=props.disableTooltip,disableTooltip=_props$disableTooltip===void 0?false:_props$disableTooltip,_props$observationsLa=props.observationsLabelOverride,observationsLabel=_props$observationsLa===void 0?'cell':_props$observationsLa,_props$observationsPl=props.observationsPluralLabelOverride,observationsPluralLabel=_props$observationsPl===void 0?"".concat(observationsLabel,"s"):_props$observationsPl,title=props.title,averageFillDensity=props.averageFillDensity,loaders=props.loaders,useReadyData=props.useReadyData,urlsData=props.urlsData,cellsData=props.cellsData,mapping=props.mapping,customOptions=props.customOptions,_props$hideTools=props.hideTools,hideTools=_props$hideTools===void 0?false:_props$hideTools,cellsEmptyMessage=props.cellsEmptyMessage,getCellInfoOverride=props.getCellInfoOverride,_props$cellSetsPolygo=props.cellSetsPolygonCacheId,cellSetsPolygonCacheId=_props$cellSetsPolygo===void 0?'':_props$cellSetsPolygo;var _setComponentHover=Object(state_hooks["r" /* useSetComponentHover */])();var setComponentViewInfo=Object(state_hooks["s" /* useSetComponentViewInfo */])(uuid);// Get "props" from the coordination space.
var _useCoordination=Object(state_hooks["j" /* useCoordination */])(coordination["b" /* COMPONENT_COORDINATION_TYPES */].scatterplot,coordinationScopes),_useCoordination2=Object(slicedToArray["a" /* default */])(_useCoordination,2),_useCoordination2$=_useCoordination2[0],dataset=_useCoordination2$.dataset,zoom=_useCoordination2$.embeddingZoom,targetX=_useCoordination2$.embeddingTargetX,targetY=_useCoordination2$.embeddingTargetY,targetZ=_useCoordination2$.embeddingTargetZ,cellFilter=_useCoordination2$.obsFilter,cellHighlight=_useCoordination2$.obsHighlight,geneSelection=_useCoordination2$.featureSelection,cellSetSelection=_useCoordination2$.obsSetSelection,cellSetColor=_useCoordination2$.obsSetColor,cellColorEncoding=_useCoordination2$.obsColorEncoding,additionalCellSets=_useCoordination2$.additionalObsSets,cellSetPolygonsVisible=_useCoordination2$.embeddingObsSetPolygonsVisible,cellSetLabelsVisible=_useCoordination2$.embeddingObsSetLabelsVisible,cellSetLabelSize=_useCoordination2$.embeddingObsSetLabelSize,cellRadiusFixed=_useCoordination2$.embeddingObsRadius,cellRadiusMode=_useCoordination2$.embeddingObsRadiusMode,cellOpacityFixed=_useCoordination2$.embeddingObsOpacity,cellOpacityMode=_useCoordination2$.embeddingObsOpacityMode,geneExpressionColormap=_useCoordination2$.featureValueColormap,geneExpressionColormapRange=_useCoordination2$.featureValueColormapRange,_useCoordination2$2=_useCoordination2[1],setZoom=_useCoordination2$2.setEmbeddingZoom,setTargetX=_useCoordination2$2.setEmbeddingTargetX,setTargetY=_useCoordination2$2.setEmbeddingTargetY,setTargetZ=_useCoordination2$2.setEmbeddingTargetZ,setCellFilter=_useCoordination2$2.setObsFilter,setCellSetSelection=_useCoordination2$2.setObsSetSelection,setCellHighlight=_useCoordination2$2.setObsHighlight,setCellSetColor=_useCoordination2$2.setObsSetColor,setCellColorEncoding=_useCoordination2$2.setObsColorEncoding,setAdditionalCellSets=_useCoordination2$2.setAdditionalObsSets,setCellSetPolygonsVisible=_useCoordination2$2.setEmbeddingObsSetPolygonsVisible,setCellSetLabelsVisible=_useCoordination2$2.setEmbeddingObsSetLabelsVisible,setCellSetLabelSize=_useCoordination2$2.setEmbeddingObsSetLabelSize,setCellRadiusFixed=_useCoordination2$2.setEmbeddingObsRadius,setCellRadiusMode=_useCoordination2$2.setEmbeddingObsRadiusMode,setCellOpacityFixed=_useCoordination2$2.setEmbeddingObsOpacity,setCellOpacityMode=_useCoordination2$2.setEmbeddingObsOpacityMode,setGeneExpressionColormap=_useCoordination2$2.setFeatureValueColormap,setGeneExpressionColormapRange=_useCoordination2$2.setFeatureValueColormapRange;// Get data from parent loaders via the props.
var _urlsData=Object(slicedToArray["a" /* default */])(urlsData,3),urls=_urlsData[0],addUrl=_urlsData[1],resetUrls=_urlsData[2];var _useReadyData=Object(slicedToArray["a" /* default */])(useReadyData,4),isReady=_useReadyData[0],setItemIsReady=_useReadyData[1],setItemIsNotReady=_useReadyData[2],resetReadyItems=_useReadyData[3];var _cellsData=Object(slicedToArray["a" /* default */])(cellsData,2),cells=_cellsData[0],cellsCount=_cellsData[1];// Reset file URLs and loader progress when the dataset has changed.
Object(external_react_["useEffect"])(function(){resetUrls();resetReadyItems();// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);var _useDeckCanvasSize=Object(hooks["b" /* useDeckCanvasSize */])(),_useDeckCanvasSize2=Object(slicedToArray["a" /* default */])(_useDeckCanvasSize,3),width=_useDeckCanvasSize2[0],height=_useDeckCanvasSize2[1],deckRef=_useDeckCanvasSize2[2];// Get data from loaders using the data hooks.
var _useCellSetsData=Object(data_hooks["a" /* useCellSetsData */])(loaders,dataset,setItemIsReady,addUrl,false,{setObsSetSelection:setCellSetSelection,setObsSetColor:setCellSetColor},{obsSetSelection:cellSetSelection,obsSetColor:cellSetColor}),_useCellSetsData2=Object(slicedToArray["a" /* default */])(_useCellSetsData,1),cellSets=_useCellSetsData2[0];var _useGeneSelection=Object(data_hooks["f" /* useGeneSelection */])(loaders,dataset,setItemIsReady,false,geneSelection,setItemIsNotReady),_useGeneSelection2=Object(slicedToArray["a" /* default */])(_useGeneSelection,1),expressionData=_useGeneSelection2[0];var _useExpressionAttrs=Object(data_hooks["d" /* useExpressionAttrs */])(loaders,dataset,setItemIsReady,addUrl,false),_useExpressionAttrs2=Object(slicedToArray["a" /* default */])(_useExpressionAttrs,1),attrs=_useExpressionAttrs2[0];var _useState=Object(external_react_["useState"])(cellRadiusFixed),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),dynamicCellRadius=_useState2[0],setDynamicCellRadius=_useState2[1];var _useState3=Object(external_react_["useState"])(cellOpacityFixed),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),dynamicCellOpacity=_useState4[0],setDynamicCellOpacity=_useState4[1];var mergedCellSets=Object(external_react_["useMemo"])(function(){return Object(components_utils["r" /* mergeCellSets */])(cellSets,additionalCellSets);},[cellSets,additionalCellSets]);var setCellSelectionProp=Object(external_react_["useCallback"])(function(v){Object(components_utils["s" /* setCellSelection */])(v,additionalCellSets,cellSetColor,setCellSetSelection,setAdditionalCellSets,setCellSetColor,setCellColorEncoding);},[additionalCellSets,cellSetColor,setCellColorEncoding,setAdditionalCellSets,setCellSetColor,setCellSetSelection]);var cellColors=Object(external_react_["useMemo"])(function(){return Object(interpolate_colors["a" /* getCellColors */])({cellColorEncoding:cellColorEncoding,expressionData:expressionData&&expressionData[0],geneSelection:geneSelection,cellSets:mergedCellSets,cellSetSelection:cellSetSelection,cellSetColor:cellSetColor,expressionDataAttrs:attrs,theme:theme});},[cellColorEncoding,geneSelection,mergedCellSets,theme,cellSetSelection,cellSetColor,expressionData,attrs]);// cellSetPolygonCache is map of a namespace string to an array of tuples
// like [(key0, val0), (key1, val1), ...] where the keys are cellSetSelection arrays.
// We use different cache namespaces so that we don't return the same polygon when the
// mapping changes or anything used to compose the cellSetsPolygonCacheId changes.
var _useState5=Object(external_react_["useState"])({}),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),cellSetPolygonCache=_useState6[0],setCellSetPolygonCache=_useState6[1];var cacheHas=function cacheHas(cache,namespace,key){return cache[namespace]&&cache[namespace].findIndex(function(el){return isEqual_default()(el[0],key);})!==-1;};var cacheGet=function cacheGet(cache,namespace,key){var _cache$namespace$find;return cache[namespace]&&((_cache$namespace$find=cache[namespace].find(function(el){return isEqual_default()(el[0],key);}))===null||_cache$namespace$find===void 0?void 0:_cache$namespace$find[1]);};var cellSetPolygons=Object(external_react_["useMemo"])(function(){var _mergedCellSets$tree;var polygonCacheNamespace="".concat(mapping).concat(cellSetsPolygonCacheId);if(mapping&&(cellSetLabelsVisible||cellSetPolygonsVisible)&&!cacheHas(cellSetPolygonCache,polygonCacheNamespace,cellSetSelection)&&(mergedCellSets===null||mergedCellSets===void 0?void 0:(_mergedCellSets$tree=mergedCellSets.tree)===null||_mergedCellSets$tree===void 0?void 0:_mergedCellSets$tree.length)&&Object.values(cells).length&&(cellSetColor===null||cellSetColor===void 0?void 0:cellSetColor.length)){var newCellSetPolygons=Object(cell_set_utils["b" /* getCellSetPolygons */])({cells:cells,mapping:mapping,cellSets:mergedCellSets,cellSetSelection:cellSetSelection,cellSetColor:cellSetColor,theme:theme});setCellSetPolygonCache(function(cache){var modifyingCache=cache;modifyingCache[polygonCacheNamespace]=[cache,[cellSetSelection,newCellSetPolygons]];return modifyingCache;});return newCellSetPolygons;}return cacheGet(cellSetPolygonCache,polygonCacheNamespace,cellSetSelection)||[];},[cellSetLabelsVisible,cellSetPolygonsVisible,cellSetPolygonCache,cellSetsPolygonCacheId,cellSetSelection,mergedCellSets,cells,cellSetColor,mapping,theme]);var cellSelection=Object(external_react_["useMemo"])(function(){return Array.from(cellColors.keys());},[cellColors]);var _useMemo=Object(external_react_["useMemo"])(function(){var cellValues=cells&&Object.values(cells);if(mapping&&(cellValues===null||cellValues===void 0?void 0:cellValues.length)){var cellCoordinates=Object.values(cells).map(function(c){return c.mappings[mapping];});var xE=Object(external_d3_array_["extent"])(cellCoordinates,function(c){return c[0];});var yE=Object(external_d3_array_["extent"])(cellCoordinates,function(c){return c[1];});var xR=xE[1]-xE[0];var yR=yE[1]-yE[0];return[xR,yR,xE,yE,cellValues.length];}return[null,null,null,null,null];},[cells,mapping]),_useMemo2=Object(slicedToArray["a" /* default */])(_useMemo,5),xRange=_useMemo2[0],yRange=_useMemo2[1],xExtent=_useMemo2[2],yExtent=_useMemo2[3],numCells=_useMemo2[4];// Reset the zoom and recenter the view with the new extent and range.
// Makes sense to do this if the data set or the mapping has changed
// as the new zoom and center could be very different.
Object(external_react_["useEffect"])(function(){if(xRange&&yRange){var newTargetX=xExtent[0]+xRange/2;var newTargetY=yExtent[0]+yRange/2;var newZoom=Math.log2(Math.min(width/xRange,height/yRange));setTargetX(newTargetX);// Graphics rendering has the y-axis going south so we need to multiply by negative one.
setTargetY(-newTargetY);setZoom(newZoom);}},// eslint-disable-next-line react-hooks/exhaustive-deps
[cells,mapping]);// After cells have loaded or changed,
// compute the cell radius scale based on the
// extents of the cell coordinates on the x/y axes.
Object(external_react_["useEffect"])(function(){if(xRange&&yRange){var pointSizeDevicePixels=getPointSizeDevicePixels(window.devicePixelRatio,zoom,xRange,yRange,width,height);setDynamicCellRadius(pointSizeDevicePixels);var nextCellOpacityScale=getPointOpacity(zoom,xRange,yRange,width,height,numCells,averageFillDensity);setDynamicCellOpacity(nextCellOpacityScale);}// eslint-disable-next-line react-hooks/exhaustive-deps
},[xRange,yRange,xExtent,yExtent,numCells,cells,mapping,width,height,zoom,averageFillDensity]);var getCellInfo=Object(external_react_["useCallback"])(function(cellId){if(getCellInfoOverride)return getCellInfoOverride(cellId);var cellInfo=cells[cellId];return Object(objectSpread2["a" /* default */])(Object(defineProperty["a" /* default */])({},"".concat(Object(utils["a" /* capitalize */])(observationsLabel)," ID"),cellId),cellInfo?cellInfo.factors:{});},[cells,getCellInfoOverride,observationsLabel]);var cellSelectionSet=Object(external_react_["useMemo"])(function(){return new Set(cellSelection);},[cellSelection]);var getCellIsSelected=Object(external_react_["useCallback"])(function(cellEntry){return(cellSelectionSet||new Set([])).has(cellEntry[0])?1.0:0.0;},[cellSelectionSet]);var cellRadius=cellRadiusMode==='manual'?cellRadiusFixed:dynamicCellRadius;var cellOpacity=cellOpacityMode==='manual'?cellOpacityFixed:dynamicCellOpacity;// Set up a getter function for gene expression values, to be used
// by the DeckGL layer to obtain values for instanced attributes.
var getExpressionValue=Object(hooks["c" /* useExpressionValueGetter */])({attrs:attrs,expressionData:expressionData});var emptyMessage;if((numCells===0||!mapping)&&cellsEmptyMessage){emptyMessage=/*#__PURE__*/external_react_default.a.createElement("div",null,cellsEmptyMessage);}return/*#__PURE__*/external_react_default.a.createElement(TitleInfo["a" /* default */],{title:title,info:"".concat(cellsCount," ").concat(Object(utils["g" /* pluralize */])(observationsLabel,observationsPluralLabel,cellsCount)),removeGridComponent:removeGridComponent,urls:urls,theme:theme,isReady:isReady,options:/*#__PURE__*/external_react_default.a.createElement(ScatterplotOptions,{observationsLabel:observationsLabel,cellRadius:cellRadiusFixed,setCellRadius:setCellRadiusFixed,cellRadiusMode:cellRadiusMode,setCellRadiusMode:setCellRadiusMode,cellOpacity:cellOpacityFixed,setCellOpacity:setCellOpacityFixed,cellOpacityMode:cellOpacityMode,setCellOpacityMode:setCellOpacityMode,cellSetLabelsVisible:cellSetLabelsVisible,setCellSetLabelsVisible:setCellSetLabelsVisible,cellSetLabelSize:cellSetLabelSize,setCellSetLabelSize:setCellSetLabelSize,cellSetPolygonsVisible:cellSetPolygonsVisible,setCellSetPolygonsVisible:setCellSetPolygonsVisible,cellColorEncoding:cellColorEncoding,setCellColorEncoding:setCellColorEncoding,geneExpressionColormap:geneExpressionColormap,setGeneExpressionColormap:setGeneExpressionColormap,geneExpressionColormapRange:geneExpressionColormapRange,setGeneExpressionColormapRange:setGeneExpressionColormapRange},customOptions)},emptyMessage,/*#__PURE__*/external_react_default.a.createElement(Scatterplot["a" /* default */],{ref:deckRef,uuid:uuid,theme:theme,viewState:{zoom:zoom,target:[targetX,targetY,targetZ]},setViewState:function setViewState(_ref){var newZoom=_ref.zoom,target=_ref.target;setZoom(newZoom);setTargetX(target[0]);setTargetY(target[1]);setTargetZ(target[2]||0);},cells:cells,mapping:mapping,cellFilter:cellFilter,cellSelection:cellSelection,cellHighlight:cellHighlight,cellColors:cellColors,cellSetPolygons:cellSetPolygons,cellSetLabelSize:cellSetLabelSize,cellSetLabelsVisible:cellSetLabelsVisible,cellSetPolygonsVisible:cellSetPolygonsVisible,setCellFilter:setCellFilter,setCellSelection:setCellSelectionProp,setCellHighlight:setCellHighlight,cellRadius:cellRadius,cellOpacity:cellOpacity,cellColorEncoding:cellColorEncoding,geneExpressionColormap:geneExpressionColormap,geneExpressionColormapRange:geneExpressionColormapRange,setComponentHover:function setComponentHover(){_setComponentHover(uuid);},updateViewInfo:setComponentViewInfo,getExpressionValue:getExpressionValue,getCellIsSelected:getCellIsSelected,hideTools:hideTools}),!disableTooltip&&/*#__PURE__*/external_react_default.a.createElement(ScatterplotTooltipSubscriber,{parentUuid:uuid,cellHighlight:cellHighlight,width:width,height:height,getCellInfo:getCellInfo}));}

/***/ }),
/* 116 */,
/* 117 */,
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createCellsQuadTree; });
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_quadtree__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Create a d3-quadtree object for cells data points.
 * @param {array} cellsEntries Array of [cellId, cell] tuples,
 * resulting from running Object.entries on the cells object.
 * @param {function} getCellCoords Given a cell object, return the
 * spatial/scatterplot coordinates [x, y].
 * @returns {object} Quadtree instance.
 */function createCellsQuadTree(cellsEntries,getCellCoords){// Use the cellsEntries variable since it is already
// an array, converted by Object.entries().
// Only use cellsEntries in quadtree calculation if there is
// centroid data in the cells (i.e not just ids).
// eslint-disable-next-line no-unused-vars
if(!cellsEntries||!cellsEntries.length||!getCellCoords(cellsEntries[0][1])){// Abort if the cells data is not yet available.
return null;}var tree=Object(d3_quadtree__WEBPACK_IMPORTED_MODULE_0__["quadtree"])().x(function(d){return getCellCoords(d[1])[0];}).y(function(d){return getCellCoords(d[1])[1];}).addAll(cellsEntries);return tree;}

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellColorEncodingOption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _OptionSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
function CellColorEncodingOption(props){var observationsLabel=props.observationsLabel,cellColorEncoding=props.cellColorEncoding,setCellColorEncoding=props.setCellColorEncoding;var classes=Object(_styles__WEBPACK_IMPORTED_MODULE_5__[/* useStyles */ "a"])();var observationsLabelNice=Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* capitalize */ "a"])(observationsLabel);function handleColorEncodingChange(event){setCellColorEncoding(event.target.value);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2___default.a,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1___default.a,{className:classes.labelCell,htmlFor:"cell-color-encoding-select"},observationsLabelNice," Color Encoding"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1___default.a,{className:classes.inputCell},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OptionSelect__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],{className:classes.select,value:cellColorEncoding,onChange:handleColorEncodingChange,inputProps:{id:'cell-color-encoding-select'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{value:"cellSetSelection"},"Cell Sets"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{value:"geneSelection"},"Gene Expression"))));}

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(13);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "deck.gl"
var external_deck_gl_ = __webpack_require__(70);
var external_deck_gl_default = /*#__PURE__*/__webpack_require__.n(external_deck_gl_);

// EXTERNAL MODULE: external "nebula.gl"
var external_nebula_gl_ = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/assets/tools/near_me.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
});

var _ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"
});

function SvgNearMe(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["svgRef", "title", "titleId"]);

  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2, _ref3);
}

var ForwardRef = external_react_["forwardRef"](function (props, ref) {
  return /*#__PURE__*/external_react_["createElement"](SvgNearMe, _extends({
    svgRef: ref
  }, props));
});
/* harmony default export */ var near_me = (__webpack_require__.p + "static/media/near_me.2a308adc.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/assets/tools/selection_rectangle.svg
function selection_rectangle_extends() { selection_rectangle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return selection_rectangle_extends.apply(this, arguments); }

function selection_rectangle_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = selection_rectangle_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function selection_rectangle_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var selection_rectangle_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "       M19 19h2v2h-2v-2zm0-2h2v-2h-2v2z       M3 13h2v-2H3v2zm0 4h2v-2H3v2z       m0-8h2V7H3v2zm0-4h2V3H3v2z       m4 0h2V3H7v2zm8 16h2v-2h-2v2z       m-4 0h2v-2h-2v2z       m4 0h2v-2h-2v2z       m-8 0h2v-2H7v2z       m-4 0h2v-2H3v2z       M11 5h2v-2h-2v2z       M15 5h2v-2h-2v2z       M19 5h2v-2h-2v2z       M19 9h2v-2h-2v2z       M19 13h2v-2h-2v2z     "
});

function SvgSelectionRectangle(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      titleId = _ref.titleId,
      props = selection_rectangle_objectWithoutProperties(_ref, ["svgRef", "title", "titleId"]);

  return /*#__PURE__*/external_react_["createElement"]("svg", selection_rectangle_extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_["createElement"]("title", {
    id: titleId
  }, title) : null, selection_rectangle_ref2);
}

var selection_rectangle_ForwardRef = external_react_["forwardRef"](function (props, ref) {
  return /*#__PURE__*/external_react_["createElement"](SvgSelectionRectangle, selection_rectangle_extends({
    svgRef: ref
  }, props));
});
/* harmony default export */ var selection_rectangle = (__webpack_require__.p + "static/media/selection_rectangle.aa477261.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/assets/tools/selection_lasso.svg
function selection_lasso_extends() { selection_lasso_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return selection_lasso_extends.apply(this, arguments); }

function selection_lasso_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = selection_lasso_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function selection_lasso_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgSelectionLasso(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      titleId = _ref.titleId,
      props = selection_lasso_objectWithoutProperties(_ref, ["svgRef", "title", "titleId"]);

  return /*#__PURE__*/external_react_["createElement"]("svg", selection_lasso_extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_["createElement"]("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/external_react_["createElement"]("g", {
    transform: "translate(0,3)"
  }, /*#__PURE__*/external_react_["createElement"]("path", {
    style: {
      strokeWidth: 0.343565
    },
    d: "M 23.942314,4.6958443 C 23.446206,1.8868581 19.727461,0 14.687364,0 13.437819,0 12.150138,0.11543779 10.859708,0.34287772 4.1629423,1.5250844 -0.58168816,5.2884937 0.05768601,8.911385 c 0.25355086,1.439193 1.35605049,2.63583 3.04638949,3.461072 -0.2569865,0.387198 -0.4074679,0.826617 -0.4074679,1.29524 0,1.337498 1.1863293,2.457176 2.7639791,2.728248 l -1.3615475,2.333149 c -0.1576963,0.271073 -0.066308,0.61876 0.2047647,0.776457 0.090014,0.05291 0.1886171,0.07799 0.2858459,0.07799 0.1951448,0 0.3851362,-0.100665 0.4912977,-0.281723 l 1.6803757,-2.88148 C 8.41868,16.20561 9.6895264,15.063601 9.6998333,13.683844 c 6.872e-4,-0.0055 0.00137,-0.01065 0.00137,-0.01615 0,-0.02336 -0.00344,-0.04569 -0.00481,-0.06837 1.1292977,-0.0213 2.2847067,-0.130211 3.4435507,-0.334975 6.69711,-1.181863 11.44174,-4.9456164 10.802366,-8.5685077 z M 3.83312,13.667353 c 0,-0.30749 0.1281497,-0.59849 0.3470005,-0.848261 0.1219655,0.04295 0.2456489,0.08383 0.3717372,0.123339 l 1.2234344,2.352045 C 4.6865351,15.149835 3.83312,14.46408 3.83312,13.667353 Z M 7.0141869,15.216144 6.0223152,13.309702 5.4008064,12.114097 c 0.121622,-0.03161 0.2477103,-0.05634 0.3772342,-0.07387 0.1367388,-0.0189 0.2772568,-0.02886 0.420867,-0.02886 0.5067581,0 0.980534,0.11956 1.3701366,0.317454 0.5696305,0.289968 0.9554538,0.750345 0.9904974,1.262944 0.00137,0.02542 0.0055,0.05016 0.0055,0.07593 0,0.698124 -0.6562089,1.310356 -1.5508518,1.548447 z m 5.9185921,-3.126441 c -1.217251,0.214728 -2.429691,0.323982 -3.6060571,0.324669 -0.5765018,-0.911821 -1.7614569,-1.53917 -3.1278143,-1.53917 -0.4717146,0 -0.921441,0.07593 -1.332001,0.211292 -0.3061162,0.100665 -0.5878394,0.237403 -0.8427645,0.39991 C 2.4598914,10.828133 1.4360682,9.8579062 1.2319907,8.7035283 0.72660678,5.8381974 5.2307418,2.5475333 11.067221,1.5175259 c 1.222061,-0.2161023 2.439998,-0.3246688 3.620143,-0.3246688 4.371863,0 7.694479,1.5250844 8.080645,3.7101568 0.505041,2.8653309 -3.998751,6.1566821 -9.83523,7.1866891 z",
    id: "path10"
  })));
}

var selection_lasso_ForwardRef = external_react_["forwardRef"](function (props, ref) {
  return /*#__PURE__*/external_react_["createElement"](SvgSelectionLasso, selection_lasso_extends({
    svgRef: ref
  }, props));
});
/* harmony default export */ var selection_lasso = (__webpack_require__.p + "static/media/selection_lasso.00e80a33.svg");

// CONCATENATED MODULE: ./src/components/shared-spatial-scatterplot/ToolMenu.js
function IconButton(props){var alt=props.alt,onClick=props.onClick,isActive=props.isActive,children=props.children;var inactive='btn btn-outline-secondary mr-2 icon';var active="".concat(inactive," active");return/*#__PURE__*/external_react_default.a.createElement("button",{className:isActive?active:inactive,onClick:onClick,type:"button",title:alt},children);}function ToolMenu(props){var setActiveTool=props.setActiveTool,activeTool=props.activeTool,_props$visibleTools=props.visibleTools,visibleTools=_props$visibleTools===void 0?{pan:true,selectRectangle:true,selectLasso:true}:_props$visibleTools;return/*#__PURE__*/external_react_default.a.createElement("div",{className:"tool"},visibleTools.pan&&/*#__PURE__*/external_react_default.a.createElement(IconButton,{alt:"pointer tool",onClick:function onClick(){return setActiveTool(null);},isActive:activeTool===null},/*#__PURE__*/external_react_default.a.createElement(ForwardRef,null)),visibleTools.selectRectangle?/*#__PURE__*/external_react_default.a.createElement(IconButton,{alt:"select rectangle",onClick:function onClick(){return setActiveTool(external_nebula_gl_["SELECTION_TYPE"].RECTANGLE);},isActive:activeTool===external_nebula_gl_["SELECTION_TYPE"].RECTANGLE},/*#__PURE__*/external_react_default.a.createElement(selection_rectangle_ForwardRef,null)):null,visibleTools.selectLasso?/*#__PURE__*/external_react_default.a.createElement(IconButton,{alt:"select lasso",onClick:function onClick(){return setActiveTool(external_nebula_gl_["SELECTION_TYPE"].POLYGON);},isActive:activeTool===external_nebula_gl_["SELECTION_TYPE"].POLYGON},/*#__PURE__*/external_react_default.a.createElement(selection_lasso_ForwardRef,null)):null);}
// EXTERNAL MODULE: ./src/components/utils.js
var utils = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/shared-spatial-scatterplot/cursor.js
var getCursorWithTool=function getCursorWithTool(){return'crosshair';};var getCursor=function getCursor(interactionState){return interactionState.isDragging?'grabbing':'default';};
// CONCATENATED MODULE: ./src/components/shared-spatial-scatterplot/AbstractSpatialOrScatterplot.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractSpatialOrScatterplot_AbstractSpatialOrScatterplot; });
/**
 * Abstract class component intended to be inherited by
 * the Spatial and Scatterplot class components.
 * Contains a common constructor, common DeckGL callbacks,
 * and common render function.
 */var AbstractSpatialOrScatterplot_AbstractSpatialOrScatterplot=/*#__PURE__*/function(_PureComponent){Object(inherits["a" /* default */])(AbstractSpatialOrScatterplot,_PureComponent);var _super=Object(createSuper["a" /* default */])(AbstractSpatialOrScatterplot);function AbstractSpatialOrScatterplot(props){var _this;Object(classCallCheck["a" /* default */])(this,AbstractSpatialOrScatterplot);_this=_super.call(this,props);_this.state={gl:null,tool:null};_this.viewport=null;_this.onViewStateChange=_this.onViewStateChange.bind(Object(assertThisInitialized["a" /* default */])(_this));_this.onInitializeViewInfo=_this.onInitializeViewInfo.bind(Object(assertThisInitialized["a" /* default */])(_this));_this.onWebGLInitialized=_this.onWebGLInitialized.bind(Object(assertThisInitialized["a" /* default */])(_this));_this.onToolChange=_this.onToolChange.bind(Object(assertThisInitialized["a" /* default */])(_this));_this.onHover=_this.onHover.bind(Object(assertThisInitialized["a" /* default */])(_this));return _this;}/**
   * Called by DeckGL upon a viewState change,
   * for example zoom or pan interaction.
   * Emit the new viewState to the `setViewState`
   * handler prop.
   * @param {object} params
   * @param {object} params.viewState The next deck.gl viewState.
   */Object(createClass["a" /* default */])(AbstractSpatialOrScatterplot,[{key:"onViewStateChange",value:function onViewStateChange(_ref){var nextViewState=_ref.viewState;var _this$props=this.props,setViewState=_this$props.setViewState,viewState=_this$props.viewState,layers=_this$props.layers,spatialAxisFixed=_this$props.spatialAxisFixed;var use3d=layers===null||layers===void 0?void 0:layers.some(function(l){return l.use3d;});setViewState(Object(objectSpread2["a" /* default */])({},nextViewState,{// If the axis is fixed, just use the current target in state i.e don't change target.
target:spatialAxisFixed&&use3d?viewState.target:nextViewState.target}));}/**
   * Called by DeckGL upon viewport
   * initialization.
   * @param {object} viewState
   * @param {object} viewState.viewport
   */},{key:"onInitializeViewInfo",value:function onInitializeViewInfo(_ref2){var viewport=_ref2.viewport;this.viewport=viewport;}/**
   * Called by DeckGL upon initialization,
   * helps to understand when to pass layers
   * to the DeckGL component.
   * @param {object} gl The WebGL context object.
   */},{key:"onWebGLInitialized",value:function onWebGLInitialized(gl){this.setState({gl:gl});}/**
   * Called by the ToolMenu buttons.
   * Emits the new tool value to the
   * `onToolChange` prop.
   * @param {string} tool Name of tool.
   */},{key:"onToolChange",value:function onToolChange(tool){var onToolChangeProp=this.props.onToolChange;this.setState({tool:tool});if(onToolChangeProp){onToolChangeProp(tool);}}/**
   * Create the DeckGL layers.
   * @returns {object[]} Array of
   * DeckGL layer objects.
   * Intended to be overriden by descendants.
   */ // eslint-disable-next-line class-methods-use-this
},{key:"getLayers",value:function getLayers(){return[];}// eslint-disable-next-line consistent-return
},{key:"onHover",value:function onHover(info){var coordinate=info.coordinate,layer=info.sourceLayer,tile=info.tile;var _this$props2=this.props,setCellHighlight=_this$props2.setCellHighlight,cellHighlight=_this$props2.cellHighlight,setComponentHover=_this$props2.setComponentHover,layers=_this$props2.layers;var hasBitmask=(layers||[]).some(function(l){return l.type==='bitmask';});if(!setCellHighlight||!tile){return null;}if(!layer||!coordinate){if(cellHighlight&&hasBitmask){setCellHighlight(null);}return null;}var content=tile.content,bbox=tile.bbox,z=tile.z;if(!content){if(cellHighlight&&hasBitmask){setCellHighlight(null);}return null;}var data=content.data,width=content.width,height=content.height;var left=bbox.left,right=bbox.right,top=bbox.top,bottom=bbox.bottom;var bounds=[left,data.height<layer.tileSize?height:bottom,data.width<layer.tileSize?width:right,top];if(!data){if(cellHighlight&&hasBitmask){setCellHighlight(null);}return null;}// Tiled layer needs a custom layerZoomScale.
if(layer.id.includes('bitmask')){// The zoomed out layer needs to use the fixed zoom at which it is rendered.
var layerZoomScale=Math.max(1,Math.pow(2,Math.round(-z)));var dataCoords=[Math.floor((coordinate[0]-bounds[0])/layerZoomScale),Math.floor((coordinate[1]-bounds[3])/layerZoomScale)];var coords=dataCoords[1]*width+dataCoords[0];var hoverData=data.map(function(d){return d[coords];});var cellId=hoverData.find(function(i){return i>0;});if(cellId!==Number(cellHighlight)){if(setComponentHover){setComponentHover();}// eslint-disable-next-line no-unused-expressions
setCellHighlight(cellId?String(cellId):null);}}}/**
   * Emits a function to project from the
   * cell ID space to the scatterplot or
   * spatial coordinate space, via the
   * `updateViewInfo` prop.
   */},{key:"viewInfoDidUpdate",value:function viewInfoDidUpdate(getCellCoords){var _this$props3=this.props,updateViewInfo=_this$props3.updateViewInfo,cells=_this$props3.cells,uuid=_this$props3.uuid;var viewport=this.viewport;if(updateViewInfo&&viewport){updateViewInfo({uuid:uuid,project:function project(cellId){var cell=cells[cellId];try{var _getCellCoords=getCellCoords(cell),_getCellCoords2=Object(slicedToArray["a" /* default */])(_getCellCoords,2),positionX=_getCellCoords2[0],positionY=_getCellCoords2[1];return viewport.project([positionX,positionY]);}catch(e){return[null,null];}}});}}/**
   * Intended to be overriden by descendants.
   */},{key:"componentDidUpdate",value:function componentDidUpdate(){}/**
   * A common render function for both Spatial
   * and Scatterplot components.
   */},{key:"render",value:function render(){var _this$props4=this.props,deckRef=_this$props4.deckRef,viewState=_this$props4.viewState,uuid=_this$props4.uuid,layerProps=_this$props4.layers,hideTools=_this$props4.hideTools;var _this$state=this.state,gl=_this$state.gl,tool=_this$state.tool;var layers=this.getLayers();var use3d=(layerProps||[]).some(function(l){return l.use3d;});var showCellSelectionTools=this.cellsLayer!==null||this.cellsEntries.length&&this.cellsEntries[0][1].xy;var showPanTool=this.cellsLayer!==null||layerProps.findIndex(function(l){return l.type==='bitmask'||l.type==='raster';})>=0;// For large datasets or ray casting, the visual quality takes only a small
// hit in exchange for much better performance by setting this to false:
// https://deck.gl/docs/api-reference/core/deck#usedevicepixels
var useDevicePixels=this.cellsEntries.length<100000&&!use3d;return/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,/*#__PURE__*/external_react_default.a.createElement(ToolMenu,{activeTool:tool,setActiveTool:this.onToolChange,visibleTools:{pan:showPanTool&&!hideTools,selectRectangle:showCellSelectionTools&&!hideTools,selectLasso:showCellSelectionTools&&!hideTools}}),/*#__PURE__*/external_react_default.a.createElement(external_deck_gl_default.a,{id:"deckgl-overlay-".concat(uuid),ref:deckRef,views:[use3d?new external_deck_gl_["OrbitView"]({id:'orbit',controller:true,orbitAxis:'Y'}):new external_deck_gl_["OrthographicView"]({id:'ortho'})]// id is a fix for https://github.com/uber/deck.gl/issues/3259
,layers:gl&&viewState.target.slice(0,2).every(function(i){return typeof i==='number';})?layers:[],glOptions:utils["b" /* DEFAULT_GL_OPTIONS */],onWebGLInitialized:this.onWebGLInitialized,onViewStateChange:this.onViewStateChange,viewState:viewState,useDevicePixels:useDevicePixels,controller:tool?{dragPan:false}:true,getCursor:tool?getCursorWithTool:getCursor,onHover:this.onHover},this.onInitializeViewInfo));}}]);return AbstractSpatialOrScatterplot;}(external_react_["PureComponent"]);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);

// EXTERNAL MODULE: external "@deck.gl/core"
var core_ = __webpack_require__(17);

// EXTERNAL MODULE: external "@deck.gl/extensions"
var extensions_ = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(13);

// EXTERNAL MODULE: external "deck.gl"
var external_deck_gl_ = __webpack_require__(70);

// EXTERNAL MODULE: external "@turf/helpers"
var helpers_ = __webpack_require__(67);

// EXTERNAL MODULE: external "@turf/boolean-within"
var boolean_within_ = __webpack_require__(130);
var boolean_within_default = /*#__PURE__*/__webpack_require__.n(boolean_within_);

// EXTERNAL MODULE: external "@turf/boolean-contains"
var boolean_contains_ = __webpack_require__(131);
var boolean_contains_default = /*#__PURE__*/__webpack_require__.n(boolean_contains_);

// EXTERNAL MODULE: external "@turf/boolean-overlap"
var boolean_overlap_ = __webpack_require__(132);
var boolean_overlap_default = /*#__PURE__*/__webpack_require__.n(boolean_overlap_);

// EXTERNAL MODULE: external "@turf/boolean-point-in-polygon"
var boolean_point_in_polygon_ = __webpack_require__(133);
var boolean_point_in_polygon_default = /*#__PURE__*/__webpack_require__.n(boolean_point_in_polygon_);

// EXTERNAL MODULE: external "@deck.gl/layers"
var layers_ = __webpack_require__(31);

// EXTERNAL MODULE: external "nebula.gl"
var external_nebula_gl_ = __webpack_require__(71);

// EXTERNAL MODULE: external "@nebula.gl/layers"
var external_nebula_gl_layers_ = __webpack_require__(134);

// EXTERNAL MODULE: external "@nebula.gl/edit-modes"
var edit_modes_ = __webpack_require__(102);

// CONCATENATED MODULE: ./src/layers/SelectionLayer.js
var _MODE_MAP;/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable no-underscore-dangle */ // File adopted from nebula.gl's SelectionLayer
// https://github.com/uber/nebula.gl/blob/8e9c2ec8d7cf4ca7050909ed826eb847d5e2cd9c/modules/layers/src/layers/selection-layer.js
var EDIT_TYPE_ADD='addFeature';var EDIT_TYPE_CLEAR='clearFeatures';// Customize the click handlers for the rectangle and polygon tools,
// so that clicking triggers the `onEdit` callback.
var SelectionLayer_ClickableDrawRectangleMode=/*#__PURE__*/function(_DrawRectangleMode){Object(inherits["a" /* default */])(ClickableDrawRectangleMode,_DrawRectangleMode);var _super=Object(createSuper["a" /* default */])(ClickableDrawRectangleMode);function ClickableDrawRectangleMode(){Object(classCallCheck["a" /* default */])(this,ClickableDrawRectangleMode);return _super.apply(this,arguments);}Object(createClass["a" /* default */])(ClickableDrawRectangleMode,[{key:"handleClick",// eslint-disable-next-line class-methods-use-this
value:function handleClick(event,props){props.onEdit({editType:EDIT_TYPE_CLEAR});}}]);return ClickableDrawRectangleMode;}(edit_modes_["DrawRectangleMode"]);var SelectionLayer_ClickableDrawPolygonByDraggingMode=/*#__PURE__*/function(_DrawPolygonByDraggin){Object(inherits["a" /* default */])(ClickableDrawPolygonByDraggingMode,_DrawPolygonByDraggin);var _super2=Object(createSuper["a" /* default */])(ClickableDrawPolygonByDraggingMode);function ClickableDrawPolygonByDraggingMode(){Object(classCallCheck["a" /* default */])(this,ClickableDrawPolygonByDraggingMode);return _super2.apply(this,arguments);}Object(createClass["a" /* default */])(ClickableDrawPolygonByDraggingMode,[{key:"handleClick",// eslint-disable-next-line class-methods-use-this
value:function handleClick(event,props){props.onEdit({editType:EDIT_TYPE_CLEAR});}}]);return ClickableDrawPolygonByDraggingMode;}(edit_modes_["DrawPolygonByDraggingMode"]);var MODE_MAP=(_MODE_MAP={},Object(defineProperty["a" /* default */])(_MODE_MAP,external_nebula_gl_["SELECTION_TYPE"].RECTANGLE,SelectionLayer_ClickableDrawRectangleMode),Object(defineProperty["a" /* default */])(_MODE_MAP,external_nebula_gl_["SELECTION_TYPE"].POLYGON,SelectionLayer_ClickableDrawPolygonByDraggingMode),_MODE_MAP);var defaultProps={selectionType:external_nebula_gl_["SELECTION_TYPE"].RECTANGLE,layerIds:[],onSelect:function onSelect(){}};var EMPTY_DATA={type:'FeatureCollection',features:[]};var LAYER_ID_GEOJSON='selection-geojson';var PASS_THROUGH_PROPS=['lineWidthScale','lineWidthMinPixels','lineWidthMaxPixels','lineWidthUnits','lineJointRounded','lineMiterLimit','pointRadiusScale','pointRadiusMinPixels','pointRadiusMaxPixels','lineDashJustified','getLineColor','getFillColor','getPointRadius','getLineWidth','getLineDashArray','getTentativeLineDashArray','getTentativeLineColor','getTentativeFillColor','getTentativeLineWidth','editHandlePointRadiusScale','editHandlePointRadiusMinPixels','editHandlePointRadiusMaxPixels','getEditHandlePointColor','getEditHandlePointRadius','modeHandlers'];var SelectionLayer_SelectionLayer=/*#__PURE__*/function(_CompositeLayer){Object(inherits["a" /* default */])(SelectionLayer,_CompositeLayer);var _super3=Object(createSuper["a" /* default */])(SelectionLayer);function SelectionLayer(){Object(classCallCheck["a" /* default */])(this,SelectionLayer);return _super3.apply(this,arguments);}Object(createClass["a" /* default */])(SelectionLayer,[{key:"_selectPolygonObjects",value:function _selectPolygonObjects(coordinates){var _this$props=this.props,onSelect=_this$props.onSelect,getCellCoords=_this$props.getCellCoords,cellsQuadTree=_this$props.cellsQuadTree,flipY=_this$props.flipY;var flippedCoordinates=flipY?coordinates.map(function(poly){return poly.map(function(p){return[p[0],-p[1]];});}):coordinates;// Convert the selection to a turf polygon object.
var selectedPolygon=Object(helpers_["polygon"])(flippedCoordinates);// Create an array to store the results.
var pickingInfos=[];// quadtree.visit() takes a callback that returns a boolean:
// If true returned, then the children of the node are _not_ visited.
// If false returned, then the children of the node are visited.
// Reference: https://github.com/d3/d3-quadtree#quadtree_visit
cellsQuadTree.visit(function(node,x0,y0,x1,y1){var nodePoints=[[[x0,y0],[x1,y0],[x1,y1],[x0,y1],[x0,y0]]];var nodePolygon=Object(helpers_["polygon"])(nodePoints);var nodePolygonContainsSelectedPolygon=boolean_contains_default()(nodePolygon,selectedPolygon);var nodePolygonWithinSelectedPolygon=boolean_within_default()(nodePolygon,selectedPolygon);var nodePolygonOverlapsSelectedPolgyon=boolean_overlap_default()(nodePolygon,selectedPolygon);if(!nodePolygonContainsSelectedPolygon&&!nodePolygonWithinSelectedPolygon&&!nodePolygonOverlapsSelectedPolgyon){// We are not interested in anything below this node,
// so return true because we are done with this node.
return true;}// This node made it past the above return statement, so it must either
// contain, be within, or overlap with the selected polygon.
// Check if this is a leaf node.
if(node.data&&boolean_point_in_polygon_default()(Object(helpers_["point"])([].slice.call(getCellCoords(node.data[1]))),selectedPolygon)){// This node has data, so it is a leaf node representing one data point,
// and we have verified that the point is in the selected polygon.
pickingInfos.push(node.data);}// Return false because we are not done.
// We want to visit the children of this node.
return false;});onSelect({pickingInfos:pickingInfos});}},{key:"renderLayers",value:function renderLayers(){var _this=this;var onSelect=this.props.onSelect;var mode=MODE_MAP[this.props.selectionType]||edit_modes_["ViewMode"];var inheritedProps={};PASS_THROUGH_PROPS.forEach(function(p){if(_this.props[p]!==undefined)inheritedProps[p]=_this.props[p];});var layers=[new external_nebula_gl_layers_["EditableGeoJsonLayer"](this.getSubLayerProps(Object(objectSpread2["a" /* default */])({id:LAYER_ID_GEOJSON,pickable:true,mode:mode,modeConfig:{dragToDraw:true},selectedFeatureIndexes:[],data:EMPTY_DATA,onEdit:function onEdit(_ref){var updatedData=_ref.updatedData,editType=_ref.editType;if(editType===EDIT_TYPE_ADD){var coordinates=updatedData.features[0].geometry.coordinates;_this._selectPolygonObjects(coordinates);}else if(editType===EDIT_TYPE_CLEAR){// We want to select an empty array to clear any previous selection.
onSelect({pickingInfos:[]});}},_subLayerProps:{guides:{pointType:'circle',_subLayerProps:{'points-circle':{// Styling for editHandles goes here.
// Reference: https://github.com/uber/nebula.gl/issues/618#issuecomment-898466319
type:layers_["ScatterplotLayer"],radiusScale:1,stroked:true,getLineWidth:1,radiusMinPixels:1,radiusMaxPixels:3,getPointRadius:2}}}}},inheritedProps)))];return layers;}}]);return SelectionLayer;}(external_deck_gl_["CompositeLayer"]);SelectionLayer_SelectionLayer.layerName='SelectionLayer';SelectionLayer_SelectionLayer.defaultProps=defaultProps;
// CONCATENATED MODULE: ./src/layers/selection-utils.js
// eslint-disable-line import/no-extraneous-dependencies
// eslint-disable-line import/no-extraneous-dependencies
/**
 * Convert a DeckGL layer ID to a "base" layer ID for selection.
 * @param {string} layerId The layer ID to convert.
 * @returns {string} The base layer ID.
 */function getBaseLayerId(layerId){return"base-".concat(layerId);}/**
 * Convert a DeckGL layer ID to a "selected" layer ID for selection.
 * @param {string} layerId The layer ID to convert.
 * @returns {string} The base layer ID.
 */function getSelectedLayerId(layerId){return"selected-".concat(layerId);}/**
 * Construct DeckGL selection layers.
 * @param {string} tool
 * @param {number} zoom
 * @param {string} cellBaseLayerId
 * @param {function} getCellCoords
 * @param {function} updateCellsSelection
 * @returns {object[]} The array of DeckGL selection layers.
 */function getSelectionLayers(tool,zoom,layerId,getCellCoords,updateCellsSelection,cellsQuadTree){var flipY=arguments.length>6&&arguments[6]!==undefined?arguments[6]:false;if(!tool){return[];}var cellBaseLayerId=getBaseLayerId(layerId);var editHandlePointRadius=5/(zoom+16);return[new SelectionLayer_SelectionLayer({id:'selection',flipY:flipY,cellsQuadTree:cellsQuadTree,getCellCoords:getCellCoords,coordinateSystem:core_["COORDINATE_SYSTEM"].CARTESIAN,selectionType:tool,onSelect:function onSelect(_ref){var pickingInfos=_ref.pickingInfos;var cellIds=pickingInfos.map(function(cellObj){return cellObj[0];});if(updateCellsSelection){updateCellsSelection(cellIds);}},layerIds:[cellBaseLayerId],getTentativeFillColor:function getTentativeFillColor(){return[255,255,255,95];},getTentativeLineColor:function getTentativeLineColor(){return[143,143,143,255];},getTentativeLineDashArray:function getTentativeLineDashArray(){return[7,4];},lineWidthMinPixels:2,lineWidthMaxPixels:2,getEditHandlePointColor:function getEditHandlePointColor(){return[0xff,0xff,0xff,0xff];},getEditHandlePointRadius:function getEditHandlePointRadius(){return editHandlePointRadius;},editHandlePointRadiusScale:1,editHandlePointRadiusMinPixels:editHandlePointRadius,editHandlePointRadiusMaxPixels:2*editHandlePointRadius})];}/**
 * Get deck.gl layer props for selection overlays.
 * @param {object} props
 * @returns {object} Object with two properties,
 * overlay: overlayProps, base: baseProps,
 * where the values are deck.gl layer props.
 */function overlayBaseProps(props){var id=props.id,getColor=props.getColor,data=props.data,isSelected=props.isSelected,rest=Object(objectWithoutProperties["a" /* default */])(props,["id","getColor","data","isSelected"]);return{overlay:Object(objectSpread2["a" /* default */])({id:getSelectedLayerId(id),getFillColor:getColor,getLineColor:getColor,data:data,getFilterValue:isSelected,extensions:[new extensions_["DataFilterExtension"]({filterSize:1})],filterRange:[1,1]},rest),base:Object(objectSpread2["a" /* default */])({id:getBaseLayerId(id),getLineColor:getColor,getFillColor:getColor,// Alternatively: contrast outlines with solids:
// getLineColor: getColor,
// getFillColor: [255, 255, 255],
data:data.slice()},rest)};}
// EXTERNAL MODULE: ./src/layers/HeatmapBitmapLayer.js + 1 modules
var HeatmapBitmapLayer = __webpack_require__(105);

// EXTERNAL MODULE: ./src/layers/PixelatedBitmapLayer.js
var PixelatedBitmapLayer = __webpack_require__(104);

// EXTERNAL MODULE: ./src/layers/HeatmapCompositeTextLayer.js
var HeatmapCompositeTextLayer = __webpack_require__(94);

// CONCATENATED MODULE: ./src/layers/index.js
/* concated harmony reexport getSelectionLayers */__webpack_require__.d(__webpack_exports__, "a", function() { return getSelectionLayers; });
/* unused concated harmony import HeatmapBitmapLayer */
/* unused concated harmony import PixelatedBitmapLayer */
/* unused concated harmony import HeatmapCompositeTextLayer */
// Selection Layers
// Heatmap Layers


/***/ }),
/* 122 */,
/* 123 */,
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(4);

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

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(3);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@deck.gl/layers"
var layers_ = __webpack_require__(31);

// EXTERNAL MODULE: external "d3-force"
var external_d3_force_ = __webpack_require__(153);

// EXTERNAL MODULE: ./src/layers/index.js + 2 modules
var src_layers = __webpack_require__(121);

// EXTERNAL MODULE: ./src/components/utils.js
var utils = __webpack_require__(12);

// EXTERNAL MODULE: ./src/components/shared-spatial-scatterplot/quadtree.js
var quadtree = __webpack_require__(118);

// EXTERNAL MODULE: ./src/components/shared-spatial-scatterplot/AbstractSpatialOrScatterplot.js + 5 modules
var AbstractSpatialOrScatterplot = __webpack_require__(120);

// EXTERNAL MODULE: external "d3-quadtree"
var external_d3_quadtree_ = __webpack_require__(109);

// CONCATENATED MODULE: ./src/components/shared-spatial-scatterplot/force-collide-rects.js
/* eslint-disable no-plusplus */ /* eslint-disable no-param-reassign *//**
 * Returns a closure that returns a constant value.
 */function constant(v){return function(){return v;};}/**
 * Adds a tiny bit of randomness to a number.
 */function jiggle(v){return v+(Math.random()-0.5)*1e-6;}/**
 * A force function to be used with d3.forceSimulation.
 * This has been adapted for use here, with comments explaining each part.
 * Reference: https://bl.ocks.org/cmgiven/547658968d365bcc324f3e62e175709b
 */function forceCollideRects(){// D3 implements things with function prototypes rather than classes.
// Pretend these variables are the "instance members" of a class.
// Note that this function actually returns the internal force() function,
// but that the force() function is a closure with access to these instance members.
var nodes;var masses;var strength=1;var iterations=1;var sizes;var size=constant([0,0]);// Given a node, return the center point along the x-axis.
function xCenter(d){return d.x+d.vx+sizes[d.index][0]/2;}// Given a node, return the center point along the y-axis.
function yCenter(d){return d.y+d.vy+sizes[d.index][1]/2;}// Given a quadtree node, initialize its .size property.
function prepare(quad){if(quad.data){// This is a leaf node, so we set quad.size to the node's size.
// (No need to compute the max of internal nodes,
// since leaf nodes do not have any internal nodes).
quad.size=sizes[quad.data.index];}else{quad.size=[0,0];// Internal nodes of the quadtree are represented
// as four-element arrays in left-to-right, top-to-bottom order.
// Here, we are setting quad.size to [maxWidth, maxHeight]
// among the internal nodes of this current `quad` node.
for(var i=0;i<4;i++){if(quad[i]&&quad[i].size){quad.size[0]=Math.max(quad.size[0],quad[i].size[0]);quad.size[1]=Math.max(quad.size[1],quad[i].size[1]);}}}}function force(){var node;var nodeSize;var nodeMass;var xi;var yi;// Create a quadtree based on node center points.
// Initialize each quadtree node's .size property by calling
// the prepare() function on each quadtree node.
var tree=Object(external_d3_quadtree_["quadtree"])(nodes,xCenter,yCenter).visitAfter(prepare);// Update the .vx and .vy properties of both `node` and `data`
// (the current node pair).
function apply(quad,x0,y0,x1,y1){// `quad` is a quadtree node.
var data=quad.data;var xSize=(nodeSize[0]+quad.size[0])/2;var ySize=(nodeSize[1]+quad.size[1])/2;if(data&&data.index>node.index){// This is a leaf node because `data` is defined.
// `x` is the difference in x centers between `node` and `data`.
// `y` is the difference in y centers between `node` and `data`.
var x=jiggle(xi-xCenter(data));var y=jiggle(yi-yCenter(data));var xd=Math.abs(x)-xSize;var yd=Math.abs(y)-ySize;// If `xd` and `yd` is less than zero,
// then there is an overlap between the two nodes.
if(xd<0&&yd<0){var l=Math.sqrt(x*x+y*y);var m=masses[data.index]/(nodeMass+masses[data.index]);// We move the nodes either in the x or y direction.
// Nodes are moved proportionally to:
// their distance apart (`l`), their amount of overlap (`xd` or `yd`), their masses (`m`),
// and the strength parameter (`strength`).
if(Math.abs(xd)<Math.abs(yd)){node.vx-=(x*=xd/l*strength)*m;data.vx+=x*(1-m);}else{node.vy-=(y*=yd/l*strength)*m;data.vy+=y*(1-m);}}// When the quadtree.visit callback returns _true_ for a node,
// then the node's children will _not_ be visited.
return x0>xi+xSize||x1<xi-xSize||y0>yi+ySize||y1<yi-ySize;}return false;}function iterate(){// On every iteration, use the `apply` function to visit every node
// which has an index greater than the current node's index,
// (visiting every node pair).
for(var j=0;j<nodes.length;j++){node=nodes[j];nodeSize=sizes[j];nodeMass=masses[j];xi=xCenter(node);yi=yCenter(node);tree.visit(apply);}}// Do the specified number of iterations.
for(var i=0;i<iterations;i++){iterate();}}// The "constructor".
// Takes a list of nodes as input.
force.initialize=function(v){nodes=v;// Get the size [w, h] of each node using the size getter function.
sizes=nodes.map(size);// Get the mass of each node,
// which is the sum of its horizontal and vertical edge lengths.
masses=sizes.map(function(d){return d[0]+d[1];});};// Set the number of iterations.
// If no value is provided as a parameter, this acts as a getter function.
force.iterations=function(){if(arguments.length){iterations=+(arguments.length<=0?undefined:arguments[0]);return force;}return iterations;};// Set the strength value.
// If no value is provided as a parameter, this acts as a getter function.
force.strength=function(){if(arguments.length){strength=+(arguments.length<=0?undefined:arguments[0]);return force;}return strength;};// Set the size function.
// The size function takes a node as a parameter and returns its size.
// If no size function is provided as a parameter, this acts as a getter function.
force.size=function(){if(arguments.length){size=typeof(arguments.length<=0?undefined:arguments[0])==='function'?arguments.length<=0?undefined:arguments[0]:constant(arguments.length<=0?undefined:arguments[0]);return force;}return size;};// Returns the force closure.
return force;}
// EXTERNAL MODULE: ./src/layer-extensions/index.js + 6 modules
var layer_extensions = __webpack_require__(110);

// CONCATENATED MODULE: ./src/components/scatterplot/Scatterplot.js
// eslint-disable-line import/no-extraneous-dependencies
var CELLS_LAYER_ID='scatterplot';var LABEL_FONT_FAMILY="-apple-system, 'Helvetica Neue', Arial, sans-serif";var NUM_FORCE_SIMULATION_TICKS=100;var LABEL_UPDATE_ZOOM_DELTA=0.25;// Default getter function props.
var makeDefaultGetCellPosition=function makeDefaultGetCellPosition(mapping){return function(cellEntry){var mappings=cellEntry[1].mappings;if(!(mapping in mappings)){var available=Object.keys(mappings).map(function(s){return"\"".concat(s,"\"");}).join(', ');throw new Error("Expected to find \"".concat(mapping,"\", but available mappings are: ").concat(available));}var mappedCell=mappings[mapping];// The negative applied to the y-axis is because
// graphics rendering has the y-axis positive going south.
return[mappedCell[0],-mappedCell[1],0];};};var makeDefaultGetCellCoords=function makeDefaultGetCellCoords(mapping){return function(cell){return cell.mappings[mapping];};};var Scatterplot_makeDefaultGetCellColors=function makeDefaultGetCellColors(cellColors,theme){return function(cellEntry){var _ref=cellColors&&cellColors.get(cellEntry[0])||Object(utils["o" /* getDefaultColor */])(theme),_ref2=Object(slicedToArray["a" /* default */])(_ref,4),r=_ref2[0],g=_ref2[1],b=_ref2[2],a=_ref2[3];return[r,g,b,255*(a||1)];};};/**
 * React component which renders a scatterplot from cell data.
 * @param {object} props
 * @param {string} props.uuid A unique identifier for this component.
 * @param {string} props.theme The current vitessce theme.
 * @param {object} props.viewState The deck.gl view state.
 * @param {function} props.setViewState Function to call to update the deck.gl view state.
 * @param {object} props.cells
 * @param {string} props.mapping The name of the coordinate mapping field,
 * for each cell, for example "PCA" or "t-SNE".
 * @param {Map} props.cellColors Mapping of cell IDs to colors.
 * @param {array} props.cellSelection Array of selected cell IDs.
 * @param {array} props.cellFilter Array of filtered cell IDs. By default, null.
 * @param {number} props.cellRadius The value for `radiusScale` to pass
 * to the deck.gl cells ScatterplotLayer.
 * @param {number} props.cellOpacity The value for `opacity` to pass
 * to the deck.gl cells ScatterplotLayer.
 * @param {function} props.getCellCoords Getter function for cell coordinates
 * (used by the selection layer).
 * @param {function} props.getCellPosition Getter function for cell [x, y, z] position.
 * @param {function} props.getCellColor Getter function for cell color as [r, g, b] array.
 * @param {function} props.getExpressionValue Getter function for cell expression value.
 * @param {function} props.getCellIsSelected Getter function for cell layer isSelected.
 * @param {function} props.setCellSelection
 * @param {function} props.setCellHighlight
 * @param {function} props.updateViewInfo
 * @param {function} props.onToolChange Callback for tool changes
 * (lasso/pan/rectangle selection tools).
 * @param {function} props.onCellClick Getter function for cell layer onClick.
 */var Scatterplot_Scatterplot=/*#__PURE__*/function(_AbstractSpatialOrSca){Object(inherits["a" /* default */])(Scatterplot,_AbstractSpatialOrSca);var _super=Object(createSuper["a" /* default */])(Scatterplot);function Scatterplot(props){var _this;Object(classCallCheck["a" /* default */])(this,Scatterplot);_this=_super.call(this,props);// To avoid storing large arrays/objects
// in React state, this component
// uses instance variables.
// All instance variables used in this class:
_this.cellsEntries=[];_this.cellsQuadTree=null;_this.cellsLayer=null;_this.cellSetsForceSimulation=forceCollideRects();_this.cellSetsLabelPrevZoom=null;_this.cellSetsLayers=[];// Initialize data and layers.
_this.onUpdateCellsData();_this.onUpdateCellsLayer();_this.onUpdateCellSetsLayers();return _this;}Object(createClass["a" /* default */])(Scatterplot,[{key:"createCellsLayer",value:function createCellsLayer(){var cellsEntries=this.cellsEntries;var _this$props=this.props,theme=_this$props.theme,mapping=_this$props.mapping,_this$props$getCellPo=_this$props.getCellPosition,getCellPosition=_this$props$getCellPo===void 0?makeDefaultGetCellPosition(mapping):_this$props$getCellPo,_this$props$cellRadiu=_this$props.cellRadius,cellRadius=_this$props$cellRadiu===void 0?1.0:_this$props$cellRadiu,_this$props$cellOpaci=_this$props.cellOpacity,cellOpacity=_this$props$cellOpaci===void 0?1.0:_this$props$cellOpaci,cellFilter=_this$props.cellFilter,cellSelection=_this$props.cellSelection,setCellHighlight=_this$props.setCellHighlight,setComponentHover=_this$props.setComponentHover,getCellIsSelected=_this$props.getCellIsSelected,cellColors=_this$props.cellColors,_this$props$getCellCo=_this$props.getCellColor,getCellColor=_this$props$getCellCo===void 0?Scatterplot_makeDefaultGetCellColors(cellColors,theme):_this$props$getCellCo,getExpressionValue=_this$props.getExpressionValue,onCellClick=_this$props.onCellClick,geneExpressionColormap=_this$props.geneExpressionColormap,_this$props$geneExpre=_this$props.geneExpressionColormapRange,geneExpressionColormapRange=_this$props$geneExpre===void 0?[0.0,1.0]:_this$props$geneExpre,cellColorEncoding=_this$props.cellColorEncoding;var filteredCellsEntries=cellFilter?cellsEntries.filter(function(cellEntry){return cellFilter.includes(cellEntry[0]);}):cellsEntries;return new layers_["ScatterplotLayer"](Object(objectSpread2["a" /* default */])({id:CELLS_LAYER_ID,backgroundColor:theme==='dark'?[0,0,0]:[241,241,241],getCellIsSelected:getCellIsSelected,opacity:cellOpacity,radiusScale:cellRadius,radiusMinPixels:1,radiusMaxPixels:30,// Our radius pixel setters measure in pixels.
radiusUnits:'pixels',lineWidthUnits:'pixels',getPosition:getCellPosition,getFillColor:getCellColor,getLineColor:getCellColor,getRadius:1,getExpressionValue:getExpressionValue,getLineWidth:0,extensions:[new layer_extensions["a" /* ScaledExpressionExtension */](),new layer_extensions["b" /* SelectionExtension */]({instanced:true})],colorScaleLo:geneExpressionColormapRange[0],colorScaleHi:geneExpressionColormapRange[1],isExpressionMode:cellColorEncoding==='geneSelection',colormap:geneExpressionColormap,onClick:function onClick(info){if(onCellClick){onCellClick(info);}},updateTriggers:{getExpressionValue:getExpressionValue,getFillColor:[cellColorEncoding,cellSelection,cellColors],getLineColor:[cellColorEncoding,cellSelection,cellColors],getPosition:[mapping],getCellIsSelected:getCellIsSelected}},Object(utils["g" /* cellLayerDefaultProps */])(filteredCellsEntries,undefined,setCellHighlight,setComponentHover),{stroked:0}));}},{key:"createCellSetsLayers",value:function createCellSetsLayers(){var _this$props2=this.props,theme=_this$props2.theme,cellSetPolygons=_this$props2.cellSetPolygons,viewState=_this$props2.viewState,cellSetPolygonsVisible=_this$props2.cellSetPolygonsVisible,cellSetLabelsVisible=_this$props2.cellSetLabelsVisible,cellSetLabelSize=_this$props2.cellSetLabelSize;var result=[];if(cellSetPolygonsVisible){result.push(new layers_["PolygonLayer"]({id:'cell-sets-polygon-layer',data:cellSetPolygons,stroked:true,filled:false,wireframe:true,lineWidthMaxPixels:1,getPolygon:function getPolygon(d){return d.hull;},getLineColor:function getLineColor(d){return d.color;},getLineWidth:1}));}if(cellSetLabelsVisible){var zoom=viewState.zoom;var nodes=cellSetPolygons.map(function(p){return{x:p.centroid[0],y:p.centroid[1],label:"".concat(p.name," Input %")};});var collisionForce=this.cellSetsForceSimulation.size(function(d){return[cellSetLabelSize*1/Math.pow(2,zoom)*4*d.label.length,cellSetLabelSize*1/Math.pow(2,zoom)*1.5];});Object(external_d3_force_["forceSimulation"])().nodes(nodes).force('collision',collisionForce).tick(NUM_FORCE_SIMULATION_TICKS);result.push(new layers_["TextLayer"]({id:'cell-sets-text-layer',data:nodes,getPosition:function getPosition(d){return[d.x,d.y];},getText:function getText(d){return d.label;},getColor:theme==='dark'?[255,255,255]:[0,0,0],getSize:cellSetLabelSize,getAngle:0,getTextAnchor:'middle',getAlignmentBaseline:'center',fontFamily:LABEL_FONT_FAMILY,fontWeight:'normal'}));}return result;}},{key:"createSelectionLayers",value:function createSelectionLayers(){var _this$props3=this.props,viewState=_this$props3.viewState,mapping=_this$props3.mapping,_this$props3$getCellC=_this$props3.getCellCoords,getCellCoords=_this$props3$getCellC===void 0?makeDefaultGetCellCoords(mapping):_this$props3$getCellC,setCellSelection=_this$props3.setCellSelection;var tool=this.state.tool;var cellsQuadTree=this.cellsQuadTree;var flipYTooltip=true;return Object(src_layers["a" /* getSelectionLayers */])(tool,viewState.zoom,CELLS_LAYER_ID,getCellCoords,setCellSelection,cellsQuadTree,flipYTooltip);}},{key:"getLayers",value:function getLayers(){var cellsLayer=this.cellsLayer,cellSetsLayers=this.cellSetsLayers;return[cellsLayer].concat(Object(toConsumableArray["a" /* default */])(cellSetsLayers),Object(toConsumableArray["a" /* default */])(this.createSelectionLayers()));}},{key:"onUpdateCellsData",value:function onUpdateCellsData(){var _this$props4=this.props,_this$props4$cells=_this$props4.cells,cells=_this$props4$cells===void 0?{}:_this$props4$cells,mapping=_this$props4.mapping,_this$props4$getCellC=_this$props4.getCellCoords,getCellCoords=_this$props4$getCellC===void 0?makeDefaultGetCellCoords(mapping):_this$props4$getCellC;var cellsEntries=Object.entries(cells);this.cellsEntries=cellsEntries;this.cellsQuadTree=Object(quadtree["a" /* createCellsQuadTree */])(cellsEntries,getCellCoords);}},{key:"onUpdateCellsLayer",value:function onUpdateCellsLayer(){this.cellsLayer=this.createCellsLayer();}},{key:"onUpdateCellSetsLayers",value:function onUpdateCellSetsLayers(onlyViewStateChange){// Because the label sizes for the force simulation depend on the zoom level,
// we _could_ run the simulation every time the zoom level changes.
// However, this has a performance impact in firefox.
if(onlyViewStateChange){var _this$props5=this.props,viewState=_this$props5.viewState,cellSetLabelsVisible=_this$props5.cellSetLabelsVisible;var zoom=viewState.zoom;var cellSetsLabelPrevZoom=this.cellSetsLabelPrevZoom;// Instead, we can just check if the zoom level has changed
// by some relatively large delta, to be more conservative
// about re-running the force simulation.
if(cellSetLabelsVisible&&(cellSetsLabelPrevZoom===null||Math.abs(cellSetsLabelPrevZoom-zoom)>LABEL_UPDATE_ZOOM_DELTA)){this.cellSetsLayers=this.createCellSetsLayers();this.cellSetsLabelPrevZoom=zoom;}}else{// Otherwise, something more substantial than just
// the viewState has changed, such as the label array
// itself, so we always want to update the layer
// in this case.
this.cellSetsLayers=this.createCellSetsLayers();}}},{key:"viewInfoDidUpdate",value:function viewInfoDidUpdate(){var _this$props6=this.props,mapping=_this$props6.mapping,_this$props6$getCellP=_this$props6.getCellPosition,getCellPosition=_this$props6$getCellP===void 0?makeDefaultGetCellPosition(mapping):_this$props6$getCellP;Object(get["a" /* default */])(Object(getPrototypeOf["a" /* default */])(Scatterplot.prototype),"viewInfoDidUpdate",this).call(this,function(cell){return getCellPosition([null,cell]);});}/**
   * Here, asynchronously check whether props have
   * updated which require re-computing memoized variables,
   * followed by a re-render.
   * This function does not follow React conventions or paradigms,
   * it is only implemented this way to try to squeeze out
   * performance.
   * @param {object} prevProps The previous props to diff against.
   */},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this2=this;this.viewInfoDidUpdate();var shallowDiff=function shallowDiff(propName){return prevProps[propName]!==_this2.props[propName];};if(['cells'].some(shallowDiff)){// Cells data changed.
this.onUpdateCellsData();this.forceUpdate();}if(['cells','mapping','cellFilter','cellSelection','cellColors','cellRadius','cellOpacity','cellRadiusMode','geneExpressionColormap','geneExpressionColormapRange','geneSelection','cellColorEncoding'].some(shallowDiff)){// Cells layer props changed.
this.onUpdateCellsLayer();this.forceUpdate();}if(['cellSetPolygons','cellSetPolygonsVisible','cellSetLabelsVisible','cellSetLabelSize'].some(shallowDiff)){// Cell sets layer props changed.
this.onUpdateCellSetsLayers(false);this.forceUpdate();}if(shallowDiff('viewState')){// The viewState prop has changed (due to zoom or pan).
this.onUpdateCellSetsLayers(true);this.forceUpdate();}}// render() is implemented in the abstract parent class.
}]);return Scatterplot;}(AbstractSpatialOrScatterplot["a" /* default */]);/**
 * Need this wrapper function here,
 * since we want to pass a forwardRef
 * so that outer components can
 * access the grandchild DeckGL ref,
 * but we are using a class component.
 */var ScatterplotWrapper=Object(external_react_["forwardRef"])(function(props,deckRef){return/*#__PURE__*/external_react_default.a.createElement(Scatterplot_Scatterplot,Object.assign({},props,{deckRef:deckRef}));});/* harmony default export */ var scatterplot_Scatterplot = __webpack_exports__["a"] = (ScatterplotWrapper);

/***/ }),
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */
/***/ (function(module, exports) {

module.exports = require("@deck.gl/extensions");

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("@turf/boolean-within");

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("@turf/boolean-contains");

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = require("@turf/boolean-overlap");

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = require("@turf/boolean-point-in-polygon");

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = require("@nebula.gl/layers");

/***/ }),
/* 135 */,
/* 136 */,
/* 137 */,
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
/* 152 */,
/* 153 */
/***/ (function(module, exports) {

module.exports = require("d3-force");

/***/ }),
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
/* 174 */,
/* 175 */,
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScatterplotSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScatterplotSubscriber", function() { return _ScatterplotSubscriber__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _Scatterplot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(124);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scatterplot", function() { return _Scatterplot__WEBPACK_IMPORTED_MODULE_1__["a"]; });



/***/ })
/******/ ]);
//# sourceMappingURL=scatterplot.js.map