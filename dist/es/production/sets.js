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
/******/ 	return __webpack_require__(__webpack_require__.s = 215);
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
/* 15 */,
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
/* 67 */
/***/ (function(module, exports) {

module.exports = require("@turf/helpers");

/***/ }),
/* 68 */,
/* 69 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports) {

module.exports = require("ajv");

/***/ }),
/* 74 */,
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return tryUpgradeTreeToLatestSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleImportJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return handleImportTabular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleExportJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleExportTabular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return downloadForUser; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ajv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(154);
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_dsv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var json2csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(155);
/* harmony import */ var json2csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(json2csv__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
/* harmony import */ var _cell_set_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/**
 * Check if an imported tree has an old schema version that we know how to
 * "upgrade" to the latest schema version.  Validate against the schema.
 * @param {object} currTree A hierarchical tree object with a .version property,
 * which has already passed schema validation, but may not have the latest schema version.
 * @param {string} datatype The data type of the items in the schema.
 */function tryUpgradeTreeToLatestSchema(currTree,datatype){var validate=new ajv__WEBPACK_IMPORTED_MODULE_2___default.a().compile(_constants__WEBPACK_IMPORTED_MODULE_9__[/* HIERARCHICAL_SCHEMAS */ "c"][datatype].schema);var valid=validate(currTree);if(!valid){var failureReason=JSON.stringify(validate.errors,null,2);throw new Error("Tree validation failed: ".concat(failureReason));}else if(currTree.datatype!==datatype){throw new Error("The data type does not match the expected data type of '".concat(datatype,"'."));}if(currTree.version==='0.1.2'){// To upgrade from cell-sets schema 0.1.2 to 0.1.3,
// add a confidence value of null for each cell ID.
return Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},currTree,{version:_constants__WEBPACK_IMPORTED_MODULE_9__[/* HIERARCHICAL_SCHEMAS */ "c"][datatype].latestVersion,tree:currTree.tree.map(function(levelZeroNode){return Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_7__[/* nodeTransform */ "i"])(levelZeroNode,function(n){return!n.children&&Array.isArray(n.set);},function(n){return Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({},n,{set:n.set.map(function(itemId){return[itemId,null];})});},[]);})});}return currTree;}/**
 * Handler for JSON imports. Validates and upgrades against the hierarchical sets schema.
 * @param {string} result The data passed from the FileReader as a string.
 * @param {string} datatype The data type to validate against.
 * @param {string} theme "light" or "dark" for the vitessce theme
 * @returns {object} The imported tree object.
 * @throws {Error} Throws error if validation fails or if the datatype does not match.
 */ // eslint-disable-next-line no-unused-vars
function handleImportJSON(result,datatype,theme){var importData=JSON.parse(result);// Validate the imported file.
importData=tryUpgradeTreeToLatestSchema(importData,datatype);return importData;}/**
 * Handler for tabular imports. Validates against the tabular sets schema.
 * @param {string} result The data passed from the FileReader as a string.
 * @param {string} datatype The data type to validate against.
 * @param {string} theme "light" or "dark" for the vitessce theme
 * @returns {object} The imported tree object.
 * @throws {Error} Throws error if validation fails or if the datatype does not match.
 */function handleImportTabular(result,datatype,theme){var dsvParser=Object(d3_dsv__WEBPACK_IMPORTED_MODULE_4__["dsvFormat"])(_constants__WEBPACK_IMPORTED_MODULE_9__[/* SEPARATOR_TABULAR */ "g"]);var importData=dsvParser.parse(result,function(row){return{groupName:row.groupName,setName:row.setName,setColor:row.setColor?Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* colorStringToArray */ "d"])(row.setColor):Object(_utils__WEBPACK_IMPORTED_MODULE_8__[/* getDefaultColor */ "o"])(theme),obsId:row.obsId,predictionScore:lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(row.predictionScore)||row.predictionScore===_constants__WEBPACK_IMPORTED_MODULE_9__[/* NA_VALUE_TABULAR */ "f"]?null:+row.predictionScore};});// Validate the imported file.
var validate=new ajv__WEBPACK_IMPORTED_MODULE_2___default.a().compile(_constants__WEBPACK_IMPORTED_MODULE_9__[/* TABULAR_SCHEMAS */ "i"][datatype].schema);var valid=validate(importData);if(!valid){var failureReason=JSON.stringify(validate.errors,null,2);throw new Error("Import validation failed: ".concat(failureReason));}else{// Convert the validated array to a tree representation.
var treeToImport={version:_constants__WEBPACK_IMPORTED_MODULE_9__[/* HIERARCHICAL_SCHEMAS */ "c"][datatype].latestVersion,datatype:datatype,tree:[]};var uniqueGroupNames=Array.from(new Set(importData.map(function(d){return d.groupName;})));uniqueGroupNames.forEach(function(groupName){var levelZeroNode={name:groupName,children:[]};var groupRows=importData.filter(function(d){return d.groupName===groupName;});var uniqueSetNames=Array.from(new Set(groupRows.map(function(d){return d.setName;})));uniqueSetNames.forEach(function(setName){var setRows=groupRows.filter(function(d){return d.setName===setName;});var setColor=setRows[0].setColor;var levelOneNode={name:setName,color:setColor,set:setRows.map(function(d){return[d.obsId,d.predictionScore];})};levelZeroNode.children.push(levelOneNode);});treeToImport.tree.push(levelZeroNode);});return treeToImport;}}/**
 * Convert a tree object to a JSON representation.
 * @param {object} result The object to export.
 * @returns {string} The data in a string representation.
 */function handleExportJSON(result){var jsonString=JSON.stringify(result);var dataString="data:".concat(_constants__WEBPACK_IMPORTED_MODULE_9__[/* MIME_TYPE_JSON */ "d"],";charset=utf-8,").concat(encodeURIComponent(jsonString));return dataString;}/**
 * Convert a tree object with one level (height === 1) to a tabular representation.
 * @param {object} result The object to export.
 * @returns {string} The data in a string representation.
 */function handleExportTabular(result){// Convert a tree object to an array of JSON objects.
var exportData=[];result.tree.forEach(function(levelZeroNode){levelZeroNode.children.forEach(function(levelOneNode){if(levelOneNode.set){levelOneNode.set.forEach(function(_ref){var _ref2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref,2),obsId=_ref2[0],prob=_ref2[1];exportData.push({groupName:levelZeroNode.name,setName:levelOneNode.name,setColor:Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* colorArrayToString */ "c"])(levelOneNode.color),obsId:obsId,predictionScore:lodash_isNil__WEBPACK_IMPORTED_MODULE_3___default()(prob)?_constants__WEBPACK_IMPORTED_MODULE_9__[/* NA_VALUE_TABULAR */ "f"]:prob});});}});});var csvString=Object(json2csv__WEBPACK_IMPORTED_MODULE_5__["parse"])(exportData,{fields:['groupName','setName','setColor','obsId','predictionScore'],delimiter:_constants__WEBPACK_IMPORTED_MODULE_9__[/* SEPARATOR_TABULAR */ "g"]});var dataString="data:".concat(_constants__WEBPACK_IMPORTED_MODULE_9__[/* MIME_TYPE_TABULAR */ "e"],";charset=utf-8,").concat(encodeURIComponent(csvString));return dataString;}/**
 * Download a file. Appends and removes an anchor node in the DOM.
 * @param {string} dataString The function that converts the data to a string.
 * @param {string} fileName The name of the file to be downloaded.
 */function downloadForUser(dataString,fileName){var downloadAnchorNode=document.createElement('a');downloadAnchorNode.setAttribute('href',dataString);downloadAnchorNode.setAttribute('download',fileName);document.body.appendChild(downloadAnchorNode);// required for firefox
downloadAnchorNode.click();downloadAnchorNode.remove();}

/***/ }),
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
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(4);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "vega-tooltip"
var external_vega_tooltip_ = __webpack_require__(173);

// EXTERNAL MODULE: external "react-vega"
var external_react_vega_ = __webpack_require__(146);

// CONCATENATED MODULE: ./src/components/vega/ReactVega.js
// See https://reactjs.org/docs/code-splitting.html#named-exports

// CONCATENATED MODULE: ./src/components/vega/VegaPlot.js
// TODO: React.lazy is not working with Vitessce in the portal-ui.
// For now, we can work around this by not using React.lazy,
// but for performance benefits that come with lazy-loading
// we should eventually try to resolve this issue.
// const ReactVega = React.lazy(() => import('./ReactVega'));
var DATASET_NAME='table';function isVega(spec){return spec.$schema==='https://vega.github.io/schema/vega/v5.json';}/**
 * A wrapper around the react-vega Vega component.
 * @param {object} props
 * @param {object} spec A vega or vega-lite spec.
 * @param {object[]} data The plot data as an array of objects.
 * @param {object} signalListeners Vega signal listeners. Optional.
 */function VegaPlot(props){var partialSpec=props.spec,data=props.data,signalListeners=props.signalListeners;var spec=Object(objectSpread2["a" /* default */])({},partialSpec,{data:isVega(partialSpec)?[{name:DATASET_NAME}].concat(Object(toConsumableArray["a" /* default */])(partialSpec.data)):{name:DATASET_NAME}});var vegaComponent=Object(external_react_["useMemo"])(function(){return/*#__PURE__*/external_react_default.a.createElement(external_react_vega_["Vega"],{spec:spec,data:Object(defineProperty["a" /* default */])({},DATASET_NAME,data),signalListeners:signalListeners,tooltip:new external_vega_tooltip_["Handler"]().call,renderer:"canvas",scaleFactor:3});},[spec,data,signalListeners]);return spec&&data&&data.length>0?/*#__PURE__*/external_react_default.a.createElement(external_react_["Suspense"],{fallback:/*#__PURE__*/external_react_default.a.createElement("div",null,"Loading...")},vegaComponent):null;}
// CONCATENATED MODULE: ./src/components/vega/utils.js
/**
 * Vega-Lite themes that can be passed to the `config` property
 * of the vega-lite spec.
 */var VEGA_THEMES={dark:{// The vega-themes dark theme.
// Reference: https://github.com/vega/vega-themes/blob/master/src/theme-dark.ts
background:null,title:{color:'#fff'},style:{'guide-label':{fill:'#fff'},'guide-title':{fill:'#fff'}},axis:{domainColor:'#fff',gridColor:'#888',tickColor:'#fff'}},light:{// The default vega theme.
background:null}};
// CONCATENATED MODULE: ./src/components/vega/index.js
/* concated harmony reexport VegaPlot */__webpack_require__.d(__webpack_exports__, "c", function() { return VegaPlot; });
/* concated harmony reexport DATASET_NAME */__webpack_require__.d(__webpack_exports__, "a", function() { return DATASET_NAME; });
/* concated harmony reexport VEGA_THEMES */__webpack_require__.d(__webpack_exports__, "b", function() { return VEGA_THEMES; });


/***/ }),
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, exports) {

module.exports = require("@turf/centroid");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("concaveman");

/***/ }),
/* 102 */,
/* 103 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"vitessce\",\"version\":\"1.2.2\",\"description\":\"Vitessce app and React component library\",\"author\":\"C McCallum\",\"homepage\":\"http://vitessce.io/\",\"license\":\"MIT\",\"repository\":\"https://github.com/vitessce/vitessce/\",\"keywords\":[\"react-component\"],\"files\":[\"dist\",\"src\"],\"main\":\"dist/umd/production/index.min.js\",\"module\":\"dist/esm/index.js\",\"peerDependencies\":{\"react\":\">=16.14.0\",\"react-dom\":\">=16.14.0\"},\"dependencies\":{\"@babel/runtime\":\"7.8.7\",\"@hms-dbmi/viv\":\"~0.12.6\",\"@loaders.gl/3d-tiles\":\"^3.0.0\",\"@loaders.gl/core\":\"^3.0.0\",\"@loaders.gl/images\":\"^3.0.0\",\"@loaders.gl/loader-utils\":\"^3.0.0\",\"@luma.gl/core\":\"~8.5.10\",\"@material-ui/core\":\"~4.12.3\",\"@material-ui/icons\":\"~4.11.2\",\"@math.gl/core\":\"^3.5.6\",\"@turf/area\":\"^6.5.0\",\"@turf/boolean-contains\":\"^6.0.1\",\"@turf/boolean-overlap\":\"^6.0.1\",\"@turf/boolean-point-in-polygon\":\"^6.0.1\",\"@turf/boolean-within\":\"^6.0.1\",\"@turf/centroid\":\"^6.0.2\",\"@turf/helpers\":\"^6.1.4\",\"ajv\":\"^6.10.0\",\"bowser\":\"^2.11.0\",\"classnames\":\"^2.2.6\",\"clsx\":\"^1.1.1\",\"concaveman\":\"^1.2.1\",\"d3-array\":\"^2.4.0\",\"d3-dsv\":\"^1.1.1\",\"d3-force\":\"^2.1.1\",\"d3-quadtree\":\"^1.0.7\",\"d3-scale-chromatic\":\"^1.3.3\",\"deck.gl\":\"~8.6.7\",\"dynamic-import-polyfill\":\"^0.1.1\",\"fast-deep-equal\":\"^3.1.3\",\"glslify\":\"^7.0.0\",\"higlass\":\"1.11.4\",\"higlass-register\":\"^0.3.0\",\"higlass-zarr-datafetchers\":\"^0.2.1\",\"internmap\":\"^2.0.3\",\"json2csv\":\"^4.5.2\",\"lodash\":\"^4.17.21\",\"lz-string\":\"^1.4.4\",\"math.gl\":\"^3.5.6\",\"mathjs\":\"^9.2.0\",\"nebula.gl\":\"^0.23.8\",\"prop-types\":\"^15.7.2\",\"rc-tooltip\":\"^4.0.3\",\"rc-tree\":\"2.1.0\",\"react-color\":\"^2.18.0\",\"react-grid-layout\":\"^1.3.4\",\"react-vega\":\"^7.4.4\",\"react-virtualized\":\"^9.22.2\",\"short-number\":\"^1.0.6\",\"store\":\"^2.0.12\",\"tinycolor2\":\"^1.4.1\",\"uuid\":\"^3.3.2\",\"vega\":\"^5.21.0\",\"vega-lite\":\"^5.1.1\",\"vega-tooltip\":\"^0.27.0\",\"whatwg-fetch\":\"^3.0.0\",\"window-pixi\":\"5.3.3\",\"zarr\":\"0.5.1\",\"zustand\":\"^3.5.10\"},\"devDependencies\":{\"@babel/core\":\"7.9.0\",\"@babel/plugin-proposal-class-properties\":\"7.14.5\",\"@svgr/webpack\":\"5.3.1\",\"@typescript-eslint/eslint-plugin\":\"^2.10.0\",\"@typescript-eslint/parser\":\"^2.10.0\",\"babel-eslint\":\"10.0.3\",\"babel-loader\":\"8.1.0\",\"babel-plugin-glsl\":\"^1.0.0\",\"babel-plugin-named-asset-import\":\"^0.3.6\",\"babel-preset-react-app\":\"9.1.2\",\"camelcase\":\"^5.3.1\",\"case-sensitive-paths-webpack-plugin\":\"2.3.0\",\"concurrently\":\"^5.3.0\",\"cors\":\"^2.8.5\",\"css-loader\":\"3.4.2\",\"cypress\":\"^3.6.1\",\"cypress-fail-on-console-error\":\"^2.0.6\",\"dotenv\":\"8.2.0\",\"dotenv-expand\":\"5.1.0\",\"enzyme\":\"^3.9.0\",\"enzyme-adapter-react-16\":\"^1.11.2\",\"esbuild\":\"^0.12.28\",\"esbuild-plugin-babel\":\"^0.2.3\",\"esbuild-plugin-sass\":\"^0.6.0\",\"eslint\":\"^6.6.0\",\"eslint-config-airbnb\":\"^17.1.0\",\"eslint-config-react-app\":\"^5.2.0\",\"eslint-loader\":\"3.0.3\",\"eslint-plugin-cypress\":\"^2.2.1\",\"eslint-plugin-flowtype\":\"4.6.0\",\"eslint-plugin-import\":\"2.20.0\",\"eslint-plugin-jsx-a11y\":\"6.2.3\",\"eslint-plugin-react\":\"7.18.0\",\"eslint-plugin-react-hooks\":\"^1.6.1\",\"eslint-plugin-vitessce-rules\":\"file:eslint\",\"expect\":\"^24.5.0\",\"express\":\"^4.17.2\",\"file-loader\":\"4.3.0\",\"fs-extra\":\"^8.1.0\",\"glsl-colormap\":\"^1.0.1\",\"html-webpack-plugin\":\"4.0.0-beta.11\",\"http-server\":\"^14.0.0\",\"identity-obj-proxy\":\"3.0.0\",\"js-yaml\":\"^3.13.1\",\"karma\":\"4.4.1\",\"karma-chrome-launcher\":\"3.1.0\",\"karma-mocha\":\"1.3.0\",\"karma-mocha-reporter\":\"2.2.5\",\"karma-sourcemap-loader\":\"0.3.7\",\"karma-webpack\":\"4.0.2\",\"mini-css-extract-plugin\":\"0.9.0\",\"mocha\":\"7.1.0\",\"object.fromentries\":\"^2.0.2\",\"optimize-css-assets-webpack-plugin\":\"5.0.3\",\"pnp-webpack-plugin\":\"1.6.0\",\"postcss-flexbugs-fixes\":\"4.1.0\",\"postcss-loader\":\"3.0.0\",\"postcss-normalize\":\"8.0.1\",\"postcss-preset-env\":\"6.7.0\",\"postcss-safe-parser\":\"4.0.1\",\"react\":\"^16.14.0\",\"react-app-polyfill\":\"^1.0.6\",\"react-dev-utils\":\"^10.2.0\",\"react-dom\":\"^16.14.0\",\"resolve\":\"1.15.0\",\"resolve-url-loader\":\"3.1.1\",\"sass\":\"^1.53.0\",\"sass-loader\":\"^10.0.1\",\"semver\":\"6.3.0\",\"style-loader\":\"0.23.1\",\"terser-webpack-plugin\":\"2.3.4\",\"url-loader\":\"2.3.0\",\"wait-on\":\"^3.2.0\",\"webpack\":\"4.41.5\",\"webpack-dev-server\":\"3.10.2\",\"webpack-node-externals\":\"^2.5.2\",\"workbox-webpack-plugin\":\"4.3.1\",\"worker-loader\":\"^2.0.0\"},\"resolutions\":{\"@turf/difference\":\"6.0.1\"},\"scripts\":{\"build-demo:prod\":\"node scripts/build-demo.js production\",\"build-lib:prod\":\"NODE_ENV=production node scripts/build-esm.mjs && node scripts/build-lib.js production\",\"build-demo:dev\":\"node scripts/build-demo.js development\",\"build-lib:dev\":\"NODE_ENV=development node scripts/build-esm.mjs && node scripts/build-lib.js development\",\"build:prod\":\"npm run build-demo:prod && npm run build-lib:prod\",\"build:dev\":\"npm run build-demo:dev && npm run build-lib:dev\",\"build-lib:esm\":\"NODE_ENV=production node scripts/build-esm.mjs\",\"prepublishOnly\":\"npm run build-lib:prod\",\"clean\":\"rm -r dist-demo dist\",\"start\":\"node scripts/start-demo.js\",\"start:nolint\":\"node scripts/start-demo.js --disable-linting\",\"start:fixtures\":\"http-server src/loaders/fixtures/ --cors=\\\"*\\\" -s\",\"start:fixtures-concurrently\":\"concurrently --kill-others \\\"npm run start:fixtures\\\"\",\"test\":\"node scripts/karma.run.js\",\"test:watch\":\"node scripts/karma.run.js --auto-watch\",\"cypress:open\":\"npm run start:fixtures-concurrently -- \\\"cypress open\\\"\",\"cypress:run\":\"npm run start:fixtures-concurrently -- --success first --kill-others \\\"cypress run\\\"\",\"lint-fix\":\"eslint -c .eslintrc.yml --ext .js --fix src/\"},\"browserslist\":{\"production\":[\">0.2%\",\"not dead\",\"not op_mini all\"],\"development\":[\"last 1 chrome version\",\"last 1 firefox version\",\"last 1 safari version\"]},\"babel\":{\"presets\":[\"react-app\"],\"plugins\":[\"glsl\"]}}");

/***/ }),
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
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
/* 125 */
/***/ (function(module, exports) {

module.exports = require("rc-tree");

/***/ }),
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
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellSetSizesPlot; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_clamp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vega__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/**
 * Cell set sizes displayed as a bar chart,
 * implemented with the VegaPlot component.
 * @param {object} props
 * @param {object[]} props.data The set size data, an array
 * of objects with properties `name`, `key`, `color`, and `size`.
 * @param {string} props.theme The name of the current Vitessce theme.
 * @param {number} props.width The container width.
 * @param {number} props.height The container height.
 * @param {number} props.marginRight The size of the margin
 * on the right side of the plot, to account for the vega menu button.
 * By default, 90.
 * @param {number} props.marginBottom The size of the margin
 * on the bottom of the plot, to account for long x-axis labels.
 * By default, 120.
 * @param {number} props.keyLength The length of the `key` property of
 * each data point. Assumes all key strings have the same length.
 * By default, 36.
 */function CellSetSizesPlot(props){var rawData=props.data,theme=props.theme,width=props.width,height=props.height,_props$marginRight=props.marginRight,marginRight=_props$marginRight===void 0?90:_props$marginRight,_props$marginBottom=props.marginBottom,marginBottom=_props$marginBottom===void 0?120:_props$marginBottom,_props$keyLength=props.keyLength,keyLength=_props$keyLength===void 0?36:_props$keyLength;// Add a property `keyName` which concatenates the key and the name,
// which is both unique and can easily be converted
// back to the name by taking a substring.
// Add a property `colorString` which contains the `[r, g, b]` color
// after converting to a color hex string.
var data=rawData.map(function(d){return Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},d,{keyName:d.key+d.name,colorString:Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* colorArrayToString */ "c"])(d.color)});});// Manually set the color scale so that Vega-Lite does
// not choose the colors automatically.
var colors={domain:data.map(function(d){return d.key;}),range:data.map(function(d){return d.colorString;})};// Get an array of keys for sorting purposes.
var keys=data.map(function(d){return d.keyName;});var spec={mark:{type:'bar'},encoding:{x:{field:'keyName',type:'nominal',axis:{labelExpr:"substring(datum.label, ".concat(keyLength,")")},title:'Cell Set',sort:keys},y:{field:'size',type:'quantitative',title:'Cell Set Size'},color:{field:'key',type:'nominal',scale:colors,legend:null},tooltip:{field:'size',type:'quantitative'}},width:lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default()(width-marginRight,10,Infinity),height:lodash_clamp__WEBPACK_IMPORTED_MODULE_2___default()(height-marginBottom,10,Infinity),config:_vega__WEBPACK_IMPORTED_MODULE_3__[/* VEGA_THEMES */ "b"][theme]};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vega__WEBPACK_IMPORTED_MODULE_3__[/* VegaPlot */ "c"],{data:data,spec:spec});}

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "lodash/isEqual"
var isEqual_ = __webpack_require__(16);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2);

// EXTERNAL MODULE: external "rc-tree"
var external_rc_tree_ = __webpack_require__(125);
var external_rc_tree_default = /*#__PURE__*/__webpack_require__.n(external_rc_tree_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(107);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./src/components/sets/Tree.js
/**
 * A helper component around the rc-tree
 * library's tree component, to set
 * default props.
 */var Tree=external_react_default.a.forwardRef(function(props,ref){var _classNames;var prefixCls=props.prefixCls,className=props.className,showIcon=props.showIcon,blockNode=props.blockNode,children=props.children,checkable=props.checkable;return/*#__PURE__*/external_react_default.a.createElement(external_rc_tree_default.a,Object.assign({itemHeight:32,ref:ref},props,{className:external_classnames_default()(className,(_classNames={},Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-icon-hide"),!showIcon),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-block-node"),blockNode),_classNames)),checkable:checkable?/*#__PURE__*/external_react_default.a.createElement("span",{className:"".concat(prefixCls,"-checkbox-inner")}):checkable}),children);});Tree.defaultProps={virtual:false,checkable:false,showIcon:false,blockNode:true,prefixCls:'rc-tree'};/* harmony default export */ var sets_Tree = (Tree);
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);

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

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(158);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "rc-tree/es/util"
var util_ = __webpack_require__(159);

// EXTERNAL MODULE: external "lodash/range"
var range_ = __webpack_require__(38);
var range_default = /*#__PURE__*/__webpack_require__.n(range_);

// EXTERNAL MODULE: external "react-color"
var external_react_color_ = __webpack_require__(160);

// EXTERNAL MODULE: ./src/components/sets/utils.js
var utils = __webpack_require__(24);

// EXTERNAL MODULE: ./src/components/utils.js
var components_utils = __webpack_require__(12);

// EXTERNAL MODULE: external "rc-tooltip"
var external_rc_tooltip_ = __webpack_require__(161);
var external_rc_tooltip_default = /*#__PURE__*/__webpack_require__.n(external_rc_tooltip_);

// EXTERNAL MODULE: ./src/components/hooks.js
var hooks = __webpack_require__(18);

// CONCATENATED MODULE: ./src/components/sets/HelpTooltip.js
/**
 * This is a small wrapper around the Tooltip component from the rc-tooltip library,
 * which is required to be able to apply theme styles to the tooltip.
 * The default `getTooltipContainer` function used by rc-tooltip
 * just returns `document.body` (see https://github.com/react-component/tooltip#props),
 * We want theme styles to be applied relative to the closest `.vitessce-container`
 * ancestor element.
 * https://github.com/vitessce/vitessce/pull/494#discussion_r395957914
 * @param {object} props Props are passed through to the <RcTooltip/> from the library.
 */function HelpTooltip(props){var title=props.title,content=props.content,overlayClassName=props.overlayClassName;var spanRef=Object(external_react_["useRef"])();var getTooltipContainer=Object(hooks["g" /* useVitessceContainer */])(spanRef);var overlay=title||content;return/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,/*#__PURE__*/external_react_default.a.createElement("span",{ref:spanRef}),/*#__PURE__*/external_react_default.a.createElement(external_rc_tooltip_default.a,Object.assign({getTooltipContainer:getTooltipContainer,overlayClassName:overlayClassName,overlay:overlay},props)));}HelpTooltip.defaultProps={overlayClassName:'help-tooltip',placement:'top',trigger:'hover',mouseEnterDelay:0.2,mouseLeaveDelay:0};
// CONCATENATED MODULE: ./src/components/sets/Popover.js
/**
 * This is a wrapper around the HelpTooltip component, to style it as a popover,
 * and change the trigger to "click" rather than "hover".
 * @param {*} props Props are passed through to the HelpTooltip component.
 */function Popover(props){return/*#__PURE__*/external_react_default.a.createElement(HelpTooltip,props);}Popover.defaultProps={overlayClassName:'popover',placement:'top',trigger:'click',mouseEnterDelay:0,mouseLeaveDelay:0};
// CONCATENATED MODULE: ./src/components/sets/PopoverMenu.js
/**
 * Wrapper around a button element that supports asking for confirmation.
 * @param {object} props
 * @param {string} props.title The main button text.
 * @param {string} props.subtitle Smaller text on a line beneath the main text. Optional.
 * @param {function} props.onClick A "clean up" handler passed from the parent,
 * to alert the parent Popover component that it should close the popover after the button has
 * fired its handler.
 * @param {function} props.handler A function to call on button click (or after confirmation).
 * @param {string} props.handlerKey A key associated with the button, to support accessibility.
 * @param {boolean} props.confirm Does the user need to press the button again to confirm?
 * By default, false.
 * @param {boolean} props.visible The visibility state from the parent popover,
 * so that on visibility change, the button can clear its confirmation state.
 */function PopoverMenuListButton(props){var title=props.title,subtitle=props.subtitle,onClick=props.onClick,handler=props.handler,handlerKey=props.handlerKey,confirm=props.confirm,visible=props.visible;var _useState=Object(external_react_["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),isConfirming=_useState2[0],setIsConfirming=_useState2[1];Object(external_react_["useEffect"])(function(){// Want to clear the "confirming",
// state if the user hides the popover.
setIsConfirming(false);},[visible]);function handleOrRequireConfirm(){if(!confirm||isConfirming){onClick();handler();}else{setIsConfirming(true);}}var titleWithConfirm="".concat(isConfirming?'Confirm ':'').concat(title);return/*#__PURE__*/external_react_default.a.createElement("button",{title:titleWithConfirm,type:"button",onClick:handleOrRequireConfirm,onKeyPress:function onKeyPress(e){return Object(utils["b" /* callbackOnKeyPress */])(e,handlerKey,handleOrRequireConfirm);}},titleWithConfirm,subtitle&&/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,/*#__PURE__*/external_react_default.a.createElement("br",null),/*#__PURE__*/external_react_default.a.createElement("span",{className:"small"},subtitle)));}/**
 * Helper component to create a list of buttons for the body of a popover.
 * If the color, setColor, and palette props are provided then a color picker
 * will be rendered at the top of the button list.
 * @param {object} props
 * @param {object[]} props.menuConfig The list of button definition objects.
 * `{ title, subtitle, confirm, handler, handlerKey }`
 * @param {function} props.onClick A "clean up" handler passed from the parent,
 * to alert the parent Popover component that it should close the popover after the button has
 * fired its handler.
 * @param {number[]} props.color The current color. Optional.
 * @param {string} props.palette The color palette for the color picker. Optional.
 * @param {boolean} props.setColor The handler to call when a color has been selected. Optional.
 * @param {boolean} props.visible The visibility state from the parent popover,
 * so that on visibility change, buttons can clear confirmation states.
 */function PopoverMenuList(props){var menuConfig=props.menuConfig,onClick=props.onClick,_props$color=props.color,color=_props$color===void 0?null:_props$color,_props$palette=props.palette,palette=_props$palette===void 0?null:_props$palette,_props$setColor=props.setColor,setColor=_props$setColor===void 0?null:_props$setColor,visible=props.visible;function handleColorChange(_ref){var rgb=_ref.rgb;if(rgb&&setColor){setColor([rgb.r,rgb.g,rgb.b]);}}var defaultPalette=palette?palette.map(utils["c" /* colorArrayToString */]):components_utils["c" /* PALETTE */].concat([[255,255,255],[128,128,128],[0,0,0]]).map(utils["c" /* colorArrayToString */]);return/*#__PURE__*/external_react_default.a.createElement("div",null,color&&setColor&&defaultPalette&&/*#__PURE__*/external_react_default.a.createElement(external_react_color_["TwitterPicker"],{className:"popover-menu-color",disableAlpha:true,width:108,triangle:"hide",colors:defaultPalette,color:Object(utils["c" /* colorArrayToString */])(color),onChangeComplete:handleColorChange}),/*#__PURE__*/external_react_default.a.createElement("ul",{className:"popover-menu-list"},menuConfig.map(function(item){return/*#__PURE__*/external_react_default.a.createElement("li",{key:item.title+item.subtitle},/*#__PURE__*/external_react_default.a.createElement(PopoverMenuListButton,Object.assign({},item,{onClick:onClick,visible:visible})));})));}/**
 * Helper component to create a popover component with a list of buttons.
 * If the color, setColor, and palette props are provided then a color picker
 * will be rendered at the top of the button list.
 * @param {object} props
 * @param {object[]} props.menuConfig The list of button definition objects.
 * `{ title, subtitle, confirm, handler, handlerKey }`
 * @param {string} placement Where to place the popover (top, bottom, left, right).
 * @param {number[]} props.color The current color. Optional.
 * @param {string} props.palette The color palette for the color picker. Optional.
 * @param {boolean} props.setColor The handler to call when a color has been selected. Optional.
 * @param {Element|React.Component} props.children Children to render,
 * which will trigger the popover on click.
 */function PopoverMenu(props){var menuConfig=props.menuConfig,placement=props.placement,children=props.children,_props$color2=props.color,color=_props$color2===void 0?null:_props$color2,_props$setColor2=props.setColor,setColor=_props$setColor2===void 0?null:_props$setColor2,_props$palette2=props.palette,palette=_props$palette2===void 0?null:_props$palette2;var _useState3=Object(external_react_["useState"])(false),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),visible=_useState4[0],setVisible=_useState4[1];return/*#__PURE__*/external_react_default.a.createElement(Popover,{content:/*#__PURE__*/external_react_default.a.createElement(PopoverMenuList,{menuConfig:menuConfig,onClick:function onClick(){return setVisible(false);},color:color,setColor:setColor,palette:palette,visible:visible}),placement:placement,visible:visible,onVisibleChange:setVisible},children);}
// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/assets/menu.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"
});

function SvgMenu(_ref) {
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
  }, title) : null, _ref2);
}

var ForwardRef = external_react_["forwardRef"](function (props, ref) {
  return /*#__PURE__*/external_react_["createElement"](SvgMenu, _extends({
    svgRef: ref
  }, props));
});
/* harmony default export */ var menu = (__webpack_require__.p + "static/media/menu.bc56e94a.svg");

// CONCATENATED MODULE: ./src/components/sets/TreeNode.js
/**
 * Construct a `menuConfig` array for the PopoverMenu component.
 * @param {object} props The props for the TreeNode component.
 * @returns {object[]} An array of menu items to pass to PopoverMenu.
 */function makeNodeViewMenuConfig(props){var path=props.path,level=props.level,height=props.height,onCheckNode=props.onCheckNode,onNodeRemove=props.onNodeRemove,onNodeSetIsEditing=props.onNodeSetIsEditing,onExportLevelZeroNodeJSON=props.onExportLevelZeroNodeJSON,onExportLevelZeroNodeTabular=props.onExportLevelZeroNodeTabular,onExportSetJSON=props.onExportSetJSON,checkable=props.checkable,editable=props.editable,exportable=props.exportable,checked=props.checked;return[].concat(Object(toConsumableArray["a" /* default */])(editable?[{title:'Rename',handler:function handler(){onNodeSetIsEditing(path,true);},handlerKey:'r'},{title:'Delete',confirm:true,handler:function handler(){onNodeRemove(path);},handlerKey:'d'}]:[]),Object(toConsumableArray["a" /* default */])(level===0&&exportable?[{title:'Export hierarchy',subtitle:'(to JSON file)',handler:function handler(){onExportLevelZeroNodeJSON(path);},handlerKey:'j'}].concat(Object(toConsumableArray["a" /* default */])(height<=1?[{title:'Export hierarchy',subtitle:'(to CSV file)',handler:function handler(){onExportLevelZeroNodeTabular(path);},handlerKey:'t'}]:[])):[]),Object(toConsumableArray["a" /* default */])(level>0?[].concat(Object(toConsumableArray["a" /* default */])(checkable?[{title:checked?'Uncheck':'Check',handler:function handler(){onCheckNode(path,!checked);},handlerKey:'s'}]:[]),Object(toConsumableArray["a" /* default */])(exportable?[{title:'Export set',subtitle:'(to JSON file)',handler:function handler(){onExportSetJSON(path);},handlerKey:'e'}]:[])):[]));}/**
 * The "static" node component to render when the user is not renaming.
 * @param {object} props The props for the TreeNode component.
 */function NamedSetNodeStatic(props){var title=props.title,path=props.path,nodeKey=props.nodeKey,level=props.level,height=props.height,color=props.color,checkbox=props.checkbox,isChecking=props.isChecking,isLeaf=props.isLeaf,onNodeSetColor=props.onNodeSetColor,onNodeView=props.onNodeView,expanded=props.expanded,onCheckLevel=props.onCheckLevel,checkedLevelPath=props.checkedLevelPath,checkedLevelIndex=props.checkedLevelIndex,disableTooltip=props.disableTooltip,size=props.size,datatype=props.datatype,editable=props.editable,theme=props.theme;var shouldCheckNextLevel=level===0&&!expanded;var nextLevelToCheck=checkedLevelIndex&&isEqual_default()(path,checkedLevelPath)&&checkedLevelIndex<height?checkedLevelIndex+1:1;var numberFormatter=new Intl.NumberFormat('en-US');var niceSize=numberFormatter.format(size);var tooltipText;if(shouldCheckNextLevel){tooltipText=Object(utils["e" /* getLevelTooltipText */])(nextLevelToCheck);}else if(isLeaf||!expanded){tooltipText="Color individual set (".concat(niceSize," ").concat(datatype).concat(size===1?'':'s',")");}else{tooltipText='Color by expanded descendants';}// If this is a level zero node and is _not_ expanded, then upon click,
// the behavior should be to color by the first or next cluster level.
// If this is a level zero node and _is_ expanded, or if any other node,
// click should trigger onNodeView.
var onClick=level===0&&!expanded?function(){return onCheckLevel(nodeKey,nextLevelToCheck);}:function(){return onNodeView(path);};var tooltipProps=disableTooltip?{visible:false}:{};var popoverMenuConfig=makeNodeViewMenuConfig(props);return/*#__PURE__*/external_react_default.a.createElement("span",null,/*#__PURE__*/external_react_default.a.createElement(HelpTooltip,Object.assign({title:tooltipText},tooltipProps),/*#__PURE__*/external_react_default.a.createElement("button",{type:"button",onClick:onClick,onKeyPress:function onKeyPress(e){return Object(utils["b" /* callbackOnKeyPress */])(e,'v',function(){return onNodeView(path);});},className:"title-button"},title)),popoverMenuConfig.length>0?/*#__PURE__*/external_react_default.a.createElement(PopoverMenu,{menuConfig:makeNodeViewMenuConfig(props),color:level>0&&editable?color||Object(components_utils["o" /* getDefaultColor */])(theme):null,setColor:function setColor(c){return onNodeSetColor(path,c);}},/*#__PURE__*/external_react_default.a.createElement(ForwardRef,{className:"node-menu-icon"})):null,level>0&&isChecking?checkbox:null,level>0&&/*#__PURE__*/external_react_default.a.createElement("span",{className:"node-size-label"},niceSize));}/**
 * The "editing" node component to render when the user is renaming,
 * containing a text input field and a save button.
 * @param {object} props The props for the TreeNode component.
 */function NamedSetNodeEditing(props){var title=props.title,path=props.path,onNodeSetName=props.onNodeSetName,onNodeCheckNewName=props.onNodeCheckNewName;var _useState=Object(external_react_["useState"])(title),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),currentTitle=_useState2[0],setCurrentTitle=_useState2[1];// Do not allow the user to save a potential name if it conflicts with
// another name in the hierarchy.
var hasConflicts=onNodeCheckNewName(path,currentTitle);function trySetName(){if(!hasConflicts){onNodeSetName(path,currentTitle,true);}}return/*#__PURE__*/external_react_default.a.createElement("span",{className:"title-button-with-input"},/*#__PURE__*/external_react_default.a.createElement("input",{// eslint-disable-next-line jsx-a11y/no-autofocus
autoFocus:true,className:"title-input",type:"text",value:currentTitle,onChange:function onChange(e){setCurrentTitle(e.target.value);},onKeyPress:function onKeyPress(e){return Object(utils["b" /* callbackOnKeyPress */])(e,'Enter',trySetName);},onFocus:function onFocus(e){return e.target.select();}}),!hasConflicts&&/*#__PURE__*/external_react_default.a.createElement("button",{type:"button",className:"title-save-button",onClick:trySetName},"Save"));}/**
 * A "delegation" component, to decide whether to render
 * an "editing" vs. "static" node component.
 * @param {object} props The props for the TreeNode component.
 */function NamedSetNode(props){var isEditing=props.isEditing,isCurrentSet=props.isCurrentSet;return isEditing||isCurrentSet?/*#__PURE__*/external_react_default.a.createElement(NamedSetNodeEditing,props):/*#__PURE__*/external_react_default.a.createElement(NamedSetNodeStatic,props);}/**
 * Buttons for viewing each hierarchy level,
 * rendered below collapsed level zero nodes.
 * @param {object} props The props for the (level zero) TreeNode component.
 */function LevelsButtons(props){var nodeKey=props.nodeKey,path=props.path,height=props.height,onCheckLevel=props.onCheckLevel,checkedLevelPath=props.checkedLevelPath,checkedLevelIndex=props.checkedLevelIndex,hasColorEncoding=props.hasColorEncoding;function onCheck(event){if(event.target.checked){var newLevel=parseInt(event.target.value,10);onCheckLevel(nodeKey,newLevel);}}return/*#__PURE__*/external_react_default.a.createElement("div",{className:"level-buttons-container"},range_default()(1,height+1).map(function(i){var isChecked=isEqual_default()(path,checkedLevelPath)&&i===checkedLevelIndex;return/*#__PURE__*/external_react_default.a.createElement("div",{className:"level-buttons",key:i},/*#__PURE__*/external_react_default.a.createElement(HelpTooltip,{title:Object(utils["e" /* getLevelTooltipText */])(i)},/*#__PURE__*/external_react_default.a.createElement("input",{className:external_clsx_default()('level-radio-button',{checked:isChecked&&!hasColorEncoding}),type:"checkbox",value:i,checked:isChecked&&hasColorEncoding,onChange:onCheck})));}));}/**
 * Render the "switcher" icon.
 * Arrow for collapsed/expanded non-leaf nodes,
 * or square for leaf nodes.
 * @param {object} props The props for the TreeNode component.
 */function SwitcherIcon(props){var isLeaf=props.isLeaf,isOpen=props.isOpen,color=props.color;var hexColor=color?Object(utils["c" /* colorArrayToString */])(color):undefined;if(isLeaf){return/*#__PURE__*/external_react_default.a.createElement("i",{className:"anticon anticon-circle rc-tree-switcher-icon"},/*#__PURE__*/external_react_default.a.createElement("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"caret-down",width:"1em",height:"1em","aria-hidden":"true"},/*#__PURE__*/external_react_default.a.createElement("rect",{fill:hexColor,x:600/2,y:600/2,width:1024-600,height:1024-600})));}return/*#__PURE__*/external_react_default.a.createElement("i",{className:"anticon anticon-caret-down rc-tree-switcher-icon"},/*#__PURE__*/external_react_default.a.createElement("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"caret-down",width:"1em",height:"1em","aria-hidden":"true"},/*#__PURE__*/external_react_default.a.createElement("path",{fill:isOpen?'#444':hexColor,d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"})));}/**
 * A custom TreeNode component.
 * @extends {RcTreeNode} TreeNode from the rc-tree library.
 */var TreeNode_TreeNode=/*#__PURE__*/function(_RcTreeNode){Object(inherits["a" /* default */])(TreeNode,_RcTreeNode);var _super=Object(createSuper["a" /* default */])(TreeNode);function TreeNode(){var _this;Object(classCallCheck["a" /* default */])(this,TreeNode);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.renderSelector=function(){var _this$props=_this.props,title=_this$props.title,isCurrentSet=_this$props.isCurrentSet,isSelected=_this$props.isSelected,isEditing=_this$props.isEditing,onDragStartProp=_this$props.onDragStart;var _this$context$rcTree=_this.context.rcTree,prefixClass=_this$context$rcTree.prefixCls,draggable=_this$context$rcTree.draggable;var onDragStart=function onDragStart(e){onDragStartProp();_this.onDragStart(e);};var wrapClass="".concat(prefixClass,"-node-content-wrapper");var isDraggable=!isCurrentSet&&!isEditing&&draggable;return/*#__PURE__*/external_react_default.a.createElement("span",{ref:_this.setSelectHandle,title:title,className:external_classnames_default()(wrapClass,"".concat(wrapClass,"-").concat(_this.getNodeState()||'normal'),isSelected&&"".concat(prefixClass,"-node-selected"),isDraggable&&'draggable'),draggable:isDraggable,"aria-grabbed":isDraggable,onDragStart:isDraggable?onDragStart:undefined},/*#__PURE__*/external_react_default.a.createElement(NamedSetNode,Object.assign({},_this.props,{prefixClass:prefixClass,checkbox:_this.renderCheckbox()})),_this.renderLevels());};_this.renderLevels=function(){var _this$props2=_this.props,level=_this$props2.level,expanded=_this$props2.expanded;if(level!==0||expanded){return null;}return/*#__PURE__*/external_react_default.a.createElement(LevelsButtons,_this.props);};_this.renderSwitcher=function(){var _this$props3=_this.props,expanded=_this$props3.expanded,isLeaf=_this$props3.isLeaf,color=_this$props3.color;var _this$context$rcTree2=_this.context.rcTree,prefixClass=_this$context$rcTree2.prefixCls,onNodeExpand=_this$context$rcTree2.onNodeExpand;var onNodeExpandWrapper=function onNodeExpandWrapper(e){// Do not call onNodeExpand if the node is a leaf node.
if(!isLeaf){onNodeExpand(e,Object(assertThisInitialized["a" /* default */])(_this));}};var switcherClass=external_classnames_default()("".concat(prefixClass,"-switcher"),Object(defineProperty["a" /* default */])({},"".concat(prefixClass,"-switcher_").concat(expanded?'open':'close'),!isLeaf));return/*#__PURE__*/external_react_default.a.createElement("span",{className:switcherClass,onClick:onNodeExpandWrapper,onKeyPress:function onKeyPress(e){return Object(utils["b" /* callbackOnKeyPress */])(e,'d',onNodeExpandWrapper);},role:"button",tabIndex:"0"},/*#__PURE__*/external_react_default.a.createElement(SwitcherIcon,{isLeaf:isLeaf,isOpen:expanded,color:color}));};return _this;}Object(createClass["a" /* default */])(TreeNode,[{key:"render",/**
   * Override main render function,
   * to enable overriding the sub-render functions
   * for switcher, selector, etc.
   */value:function render(){var _this2=this,_classNames2;var _this$props4=this.props,style=_this$props4.style,loading=_this$props4.loading,level=_this$props4.level,dragOver=_this$props4.dragOver,dragOverGapTop=_this$props4.dragOverGapTop,dragOverGapBottom=_this$props4.dragOverGapBottom,isLeaf=_this$props4.isLeaf,expanded=_this$props4.expanded,selected=_this$props4.selected,checked=_this$props4.checked,halfChecked=_this$props4.halfChecked,onDragEndProp=_this$props4.onDragEnd,expandable=_this$props4.expandable,otherProps=Object(objectWithoutProperties["a" /* default */])(_this$props4,["style","loading","level","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","expanded","selected","checked","halfChecked","onDragEnd","expandable"]);var _this$context$rcTree3=this.context.rcTree,prefixClass=_this$context$rcTree3.prefixCls,filterTreeNode=_this$context$rcTree3.filterTreeNode,draggable=_this$context$rcTree3.draggable;var disabled=this.isDisabled();var dataAndAriaAttributeProps=Object(util_["getDataAndAria"])(otherProps);var onDragEnd=function onDragEnd(e){onDragEndProp();_this2.onDragEnd(e);};return/*#__PURE__*/external_react_default.a.createElement("li",Object.assign({className:external_classnames_default()('rc-tree-treenode',"level-".concat(level,"-treenode"),(_classNames2={},Object(defineProperty["a" /* default */])(_classNames2,"".concat(prefixClass,"-treenode-disabled"),disabled),Object(defineProperty["a" /* default */])(_classNames2,"".concat(prefixClass,"-treenode-switcher-").concat(expanded?'open':'close'),!isLeaf),Object(defineProperty["a" /* default */])(_classNames2,"".concat(prefixClass,"-treenode-checkbox-checked"),checked),Object(defineProperty["a" /* default */])(_classNames2,"".concat(prefixClass,"-treenode-checkbox-indeterminate"),halfChecked),Object(defineProperty["a" /* default */])(_classNames2,"".concat(prefixClass,"-treenode-selected"),selected),Object(defineProperty["a" /* default */])(_classNames2,"".concat(prefixClass,"-treenode-loading"),loading),Object(defineProperty["a" /* default */])(_classNames2,'drag-over',!disabled&&dragOver),Object(defineProperty["a" /* default */])(_classNames2,'drag-over-gap-top',!disabled&&dragOverGapTop),Object(defineProperty["a" /* default */])(_classNames2,'drag-over-gap-bottom',!disabled&&dragOverGapBottom),Object(defineProperty["a" /* default */])(_classNames2,'filter-node',filterTreeNode&&filterTreeNode(this)),_classNames2)),style:style,role:"treeitem",onDragEnter:draggable?this.onDragEnter:undefined,onDragOver:draggable?this.onDragOver:undefined,onDragLeave:draggable?this.onDragLeave:undefined,onDrop:draggable?this.onDrop.bind(this):undefined,onDragEnd:draggable?onDragEnd:undefined},dataAndAriaAttributeProps),expandable?this.renderSwitcher():null,this.renderSelector(),this.renderChildren());}}]);return TreeNode;}(external_rc_tree_["TreeNode"]);
// EXTERNAL MODULE: ./src/components/sets/io.js
var io = __webpack_require__(75);

// EXTERNAL MODULE: ./src/components/sets/constants.js
var constants = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/assets/sets/union.svg
function union_extends() { union_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return union_extends.apply(this, arguments); }

function union_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = union_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function union_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgUnion(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      titleId = _ref.titleId,
      props = union_objectWithoutProperties(_ref, ["svgRef", "title", "titleId"]);

  return /*#__PURE__*/external_react_["createElement"]("svg", union_extends({
    viewBox: "0 0 16.433999 10.234",
    height: 12,
    width: 18,
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_["createElement"]("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/external_react_["createElement"]("g", {
    transform: "translate(0.117,-2.883)"
  }, /*#__PURE__*/external_react_["createElement"]("path", {
    d: "m 11.467471,11.811278 c 0.198237,-0.322177 0.508,-1.011333 0.653661,-1.454255 0.659343,-2.0049141 0.44323,-4.2620847 -0.577734,-6.0340822 l -0.168844,-0.2930481 0.105744,0.017887 c 0.759902,0.1285441 1.368762,0.3699553 1.856675,0.7361658 1.988296,1.4923476 2.192477,4.3353549 0.434717,6.0529895 -0.641216,0.626581 -1.299647,0.94683 -2.294136,1.115833 l -0.108488,0.01844 z M 4.3162122,11.919169 C 1.9278944,11.487872 0.46692382,9.0323123 1.234873,6.7401372 1.5621727,5.763213 2.2610593,4.9489746 3.1840041,4.4693005 3.5978035,4.2542401 3.9427842,4.145371 4.5197023,4.0477802 L 4.6254464,4.0298927 4.4571836,4.3223069 C 3.4332707,6.1017061 3.2180432,8.3476022 3.878868,10.357023 c 0.1458466,0.443487 0.4554716,1.132155 0.6542959,1.455285 0.054471,0.08853 0.087814,0.159599 0.074096,0.157937 -0.013718,-0.0017 -0.1446898,-0.02465 -0.2910477,-0.05108 z M 5.0000001,3 C 2.2,3 0,5.2 0,8 c 0,2.8 2.2,5 5.0000001,5 0.6,0 1.1,-0.1 1.6,-0.3 C 5.3000001,11.6 4.5,9.7999998 4.5,8 4.5,6.2 5.3000001,4.5 6.6000001,3.3 c -0.5,-0.2 -1,-0.3 -1.6,-0.3 z M 4.65,4.02 C 3.92,5.17 3.51,6.54 3.51,8 c 0,1.4599998 0.42,2.83 1.14,3.98 C 2.61,11.8 1.01,10.08 1.01,8 1.01,5.92 2.61,4.2 4.65,4.02 Z M 8,4 C 6.8,4.9 6,6.4 6,8 6,9.6 6.8,11.1 8,12 9.2,11.1 10,9.7 10,8 10,6.3 9.2,4.9 8,4 Z m 3,-1 c 2.8,0 5,2.2 5,5 0,2.8 -2.2,5 -5,5 C 10.4,13 9.9,12.9 9.4,12.7 10.7,11.6 11.5,9.8 11.5,8 11.5,6.2 10.7,4.5 9.4,3.3 9.9,3.1 10.4,3 11,3 Z m 0.35,1.02 c 0.73,1.15 1.14,2.52 1.14,3.98 0,1.46 -0.42,2.83 -1.14,3.98 2.04,-0.18 3.64,-1.9 3.64,-3.98 0,-2.08 -1.6,-3.8 -3.64,-3.98 z",
    style: {
      strokeWidth: 0.234,
      strokeMiterlimit: 4,
      strokeDasharray: "none",
      strokeOpacity: 1
    }
  })));
}

var union_ForwardRef = external_react_["forwardRef"](function (props, ref) {
  return /*#__PURE__*/external_react_["createElement"](SvgUnion, union_extends({
    svgRef: ref
  }, props));
});
/* harmony default export */ var union = (__webpack_require__.p + "static/media/union.de5168c6.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/assets/sets/intersection.svg
function intersection_extends() { intersection_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return intersection_extends.apply(this, arguments); }

function intersection_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = intersection_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function intersection_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgIntersection(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      titleId = _ref.titleId,
      props = intersection_objectWithoutProperties(_ref, ["svgRef", "title", "titleId"]);

  return /*#__PURE__*/external_react_["createElement"]("svg", intersection_extends({
    width: 18,
    height: 12,
    viewBox: "0 0 16 10",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_["createElement"]("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/external_react_["createElement"]("g", {
    transform: "translate(0,-3)"
  }, /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M 5.0000001,3 C 2.2,3 0,5.2 0,8 c 0,2.8 2.2,5 5.0000001,5 0.6,0 1.1,-0.1 1.6,-0.3 C 5.3000001,11.6 4.5,9.7999998 4.5,8 4.5,6.2 5.3000001,4.5 6.6000001,3.3 c -0.5,-0.2 -1,-0.3 -1.6,-0.3 z M 4.65,4.02 C 3.92,5.17 3.51,6.54 3.51,8 c 0,1.4599998 0.42,2.83 1.14,3.98 C 2.61,11.8 1.01,10.08 1.01,8 1.01,5.92 2.61,4.2 4.65,4.02 Z M 8,4 C 6.8,4.9 6,6.4 6,8 6,9.6 6.8,11.1 8,12 9.2,11.1 10,9.7 10,8 10,6.3 9.2,4.9 8,4 Z m 3,-1 c 2.8,0 5,2.2 5,5 0,2.8 -2.2,5 -5,5 C 10.4,13 9.9,12.9 9.4,12.7 10.7,11.6 11.5,9.8 11.5,8 11.5,6.2 10.7,4.5 9.4,3.3 9.9,3.1 10.4,3 11,3 Z m 0.35,1.02 c 0.73,1.15 1.14,2.52 1.14,3.98 0,1.46 -0.42,2.83 -1.14,3.98 2.04,-0.18 3.64,-1.9 3.64,-3.98 0,-2.08 -1.6,-3.8 -3.64,-3.98 z",
    style: {
      strokeWidth: 0.234,
      strokeMiterlimit: 4,
      strokeDasharray: "none",
      strokeOpacity: 1
    }
  })));
}

var intersection_ForwardRef = external_react_["forwardRef"](function (props, ref) {
  return /*#__PURE__*/external_react_["createElement"](SvgIntersection, intersection_extends({
    svgRef: ref
  }, props));
});
/* harmony default export */ var intersection = (__webpack_require__.p + "static/media/intersection.b0003109.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/assets/sets/complement.svg
function complement_extends() { complement_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return complement_extends.apply(this, arguments); }

function complement_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = complement_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function complement_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var complement_ref2 = /*#__PURE__*/external_react_["createElement"]("rect", {
  x: "5%",
  width: "90%",
  height: "100%",
  fill: "white"
});

var _ref3 = /*#__PURE__*/external_react_["createElement"]("g", null, /*#__PURE__*/external_react_["createElement"]("rect", {
  x: 0,
  y: 0,
  width: 25.3804963846,
  height: 16,
  mask: "url(#union-mask)"
}));

function SvgComplement(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      titleId = _ref.titleId,
      props = complement_objectWithoutProperties(_ref, ["svgRef", "title", "titleId"]);

  return /*#__PURE__*/external_react_["createElement"]("svg", complement_extends({
    id: "svg14",
    viewBox: "0 0 25.3804963846 16",
    height: 16,
    width: 25.3804963846,
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/external_react_["createElement"]("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/external_react_["createElement"]("defs", null, /*#__PURE__*/external_react_["createElement"]("mask", {
    id: "union-mask",
    x: 0,
    y: 0,
    width: 25.3804963846,
    height: 16
  }, complement_ref2, /*#__PURE__*/external_react_["createElement"]("g", {
    transform: "translate(4.69,0)"
  }, /*#__PURE__*/external_react_["createElement"]("path", {
    d: "m 11.467471,11.811278 c 0.198237,-0.322177 0.508,-1.011333 0.653661,-1.454255 0.659343,-2.0049141 0.44323,-4.2620847 -0.577734,-6.0340822 l -0.168844,-0.2930481 0.105744,0.017887 c 0.759902,0.1285441 1.368762,0.3699553 1.856675,0.7361658 1.988296,1.4923476 2.192477,4.3353549 0.434717,6.0529895 -0.641216,0.626581 -1.299647,0.94683 -2.294136,1.115833 l -0.108488,0.01844 z M 4.3162122,11.919169 C 1.9278944,11.487872 0.46692382,9.0323123 1.234873,6.7401372 1.5621727,5.763213 2.2610593,4.9489746 3.1840041,4.4693005 3.5978035,4.2542401 3.9427842,4.145371 4.5197023,4.0477802 L 4.6254464,4.0298927 4.4571836,4.3223069 C 3.4332707,6.1017061 3.2180432,8.3476022 3.878868,10.357023 c 0.1458466,0.443487 0.4554716,1.132155 0.6542959,1.455285 0.054471,0.08853 0.087814,0.159599 0.074096,0.157937 -0.013718,-0.0017 -0.1446898,-0.02465 -0.2910477,-0.05108 z M 5.0000001,3 C 2.2,3 0,5.2 0,8 c 0,2.8 2.2,5 5.0000001,5 0.6,0 1.1,-0.1 1.6,-0.3 C 5.3000001,11.6 4.5,9.7999998 4.5,8 4.5,6.2 5.3000001,4.5 6.6000001,3.3 c -0.5,-0.2 -1,-0.3 -1.6,-0.3 z M 4.65,4.02 C 3.92,5.17 3.51,6.54 3.51,8 c 0,1.4599998 0.42,2.83 1.14,3.98 C 2.61,11.8 1.01,10.08 1.01,8 1.01,5.92 2.61,4.2 4.65,4.02 Z M 8,4 C 6.8,4.9 6,6.4 6,8 6,9.6 6.8,11.1 8,12 9.2,11.1 10,9.7 10,8 10,6.3 9.2,4.9 8,4 Z m 3,-1 c 2.8,0 5,2.2 5,5 0,2.8 -2.2,5 -5,5 C 10.4,13 9.9,12.9 9.4,12.7 10.7,11.6 11.5,9.8 11.5,8 11.5,6.2 10.7,4.5 9.4,3.3 9.9,3.1 10.4,3 11,3 Z m 0.35,1.02 c 0.73,1.15 1.14,2.52 1.14,3.98 0,1.46 -0.42,2.83 -1.14,3.98 2.04,-0.18 3.64,-1.9 3.64,-3.98 0,-2.08 -1.6,-3.8 -3.64,-3.98 z",
    style: {
      strokeWidth: 0.234,
      strokeMiterlimit: 4,
      strokeDasharray: "none",
      strokeOpacity: 1
    },
    fill: "black"
  })))), _ref3);
}

var complement_ForwardRef = external_react_["forwardRef"](function (props, ref) {
  return /*#__PURE__*/external_react_["createElement"](SvgComplement, complement_extends({
    svgRef: ref
  }, props));
});
/* harmony default export */ var complement = (__webpack_require__.p + "static/media/complement.c220ca8c.svg");

// CONCATENATED MODULE: ./src/components/sets/SetsManagerButtons.js
/**
 * A plus button for creating or importing set hierarchies.
 * @param {object} props
 * @param {string} props.datatype The data type to validate imported hierarchies against.
 * @param {function} props.onError A callback to pass error message strings.
 * @param {function} props.onImportTree A callback to pass successfully-validated tree objects.
 * @param {function} props.onCreateLevelZeroNode A callback to create a new empty
 * level zero node.
 * @param {boolean} props.importable Is importing allowed?
 * If not, the import button will not be rendered.
 * @param {boolean} props.editable Is editing allowed?
 * If not, the create button will not be rendered.
 */function PlusButton(props){var datatype=props.datatype,onError=props.onError,onImportTree=props.onImportTree,onCreateLevelZeroNode=props.onCreateLevelZeroNode,importable=props.importable,editable=props.editable;/**
   * Import a file, then process the imported data via the supplied handler function.
   * @param {Function} importHandler The function to process the imported data.
   * @param {string} mimeType The accepted mime type for the file upload input.
   * @returns {Function} An import function corresponding to the supplied parameters.
   */var onImport=Object(external_react_["useCallback"])(function(importHandler,mimeType){return function(){var uploadInputNode=document.createElement('input');uploadInputNode.setAttribute('type','file');uploadInputNode.setAttribute('accept',mimeType);document.body.appendChild(uploadInputNode);// required for firefox
uploadInputNode.click();uploadInputNode.addEventListener('change',function(event){if(!(window.File&&window.FileReader&&window.FileList&&window.Blob)){onError('Local file reading APIs are not fully supported in this browser.');return;}var files=event.target.files;if(!files||files.length!==1){onError('Incorrect number of files selected.');return;}var reader=new FileReader();reader.addEventListener('load',function(){var result=reader.result;try{var treeToImport=importHandler(result,datatype);onError(false);// Clear any previous import error.
onImportTree(treeToImport);}catch(e){onError(e.message);}},false);reader.readAsText(files[0]);});uploadInputNode.remove();};},[datatype,onError,onImportTree]);var menuConfig=[].concat(Object(toConsumableArray["a" /* default */])(editable?[{title:'Create hierarchy',handler:onCreateLevelZeroNode,handlerKey:'n'}]:[]),Object(toConsumableArray["a" /* default */])(importable?[{title:'Import hierarchy',subtitle:'(from CSV file)',handler:onImport(io["e" /* handleImportTabular */],constants["e" /* MIME_TYPE_TABULAR */]),handlerKey:'c'},{title:'Import hierarchy',subtitle:'(from JSON file)',handler:onImport(io["d" /* handleImportJSON */],constants["d" /* MIME_TYPE_JSON */]),handlerKey:'j'}]:[]));return menuConfig.length>0?/*#__PURE__*/external_react_default.a.createElement(PopoverMenu,{menuConfig:menuConfig},/*#__PURE__*/external_react_default.a.createElement("button",{className:"plus-button",type:"submit"},"+")):null;}/**
 * Set operations buttons (union, intersection, complement)
 * and a view checked sets button.
 * @param {object} props
 * @param {function} props.onUnion A callback for the union button.
 * @param {function} props.onIntersection A callback for the intersection button.
 * @param {function} props.onComplement A callback for the complement button.
 * @param {boolean} props.operatable Are set operations allowed?
 * If not, the union, intersection, and complement buttons will not be rendered.
 */function SetOperationButtons(props){var onUnion=props.onUnion,onIntersection=props.onIntersection,onComplement=props.onComplement,operatable=props.operatable,hasCheckedSetsToUnion=props.hasCheckedSetsToUnion,hasCheckedSetsToIntersect=props.hasCheckedSetsToIntersect,hasCheckedSetsToComplement=props.hasCheckedSetsToComplement;return/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,operatable&&/*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment,null,/*#__PURE__*/external_react_default.a.createElement("button",{onClick:onUnion,title:"New set from union of checked sets",type:"submit",disabled:!hasCheckedSetsToUnion},/*#__PURE__*/external_react_default.a.createElement(union_ForwardRef,null)),/*#__PURE__*/external_react_default.a.createElement("button",{onClick:onIntersection,title:"New set from intersection of checked sets",type:"submit",disabled:!hasCheckedSetsToIntersect},/*#__PURE__*/external_react_default.a.createElement(intersection_ForwardRef,null)),/*#__PURE__*/external_react_default.a.createElement("button",{onClick:onComplement,title:"New set from complement of checked sets",type:"submit",disabled:!hasCheckedSetsToComplement},/*#__PURE__*/external_react_default.a.createElement(complement_ForwardRef,null))));}
// EXTERNAL MODULE: ./src/components/sets/cell-set-utils.js
var cell_set_utils = __webpack_require__(27);

// CONCATENATED MODULE: ./src/components/sets/SetsManager.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetsManager; });
/* eslint-disable no-underscore-dangle */function processNode(node,prevPath,setColor,theme){var _setColor$find;var nodePath=[].concat(Object(toConsumableArray["a" /* default */])(prevPath),[node.name]);return Object(objectSpread2["a" /* default */])({},node,{},node.children?{children:node.children.map(function(c){return processNode(c,nodePath,setColor);})}:{},{color:(setColor===null||setColor===void 0?void 0:(_setColor$find=setColor.find(function(d){return isEqual_default()(d.path,nodePath);}))===null||_setColor$find===void 0?void 0:_setColor$find.color)||Object(components_utils["o" /* getDefaultColor */])(theme)});}function processSets(sets,setColor,theme){return Object(objectSpread2["a" /* default */])({},sets,{tree:sets?sets.tree.map(function(lzn){return processNode(lzn,[],setColor,theme);}):[]});}function getAllKeys(node){var path=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];if(!node){return null;}var newPath=[].concat(Object(toConsumableArray["a" /* default */])(path),[node.name]);if(node.children){return[Object(utils["g" /* pathToKey */])(newPath)].concat(Object(toConsumableArray["a" /* default */])(node.children.flatMap(function(v){return getAllKeys(v,newPath);})));}return Object(utils["g" /* pathToKey */])(newPath);}/**
 * A generic hierarchical set manager component.
 * @prop {object} tree An object representing set hierarchies.
 * @prop {string} datatype The data type for sets (e.g. "cell")
 * @prop {function} clearPleaseWait A callback to signal that loading is complete.
 * @prop {boolean} draggable Whether tree nodes can be rearranged via drag-and-drop.
 * By default, true.
 * @prop {boolean} checkable Whether to show the "Check" menu button
 * and checkboxes for selecting multiple sets. By default, true.
 * @prop {boolean} editable Whether to show rename, delete, color, or create options.
 * By default, true.
 * @prop {boolean} expandable Whether to allow hierarchies to be expanded
 * to show the list or tree of sets contained. By default, true.
 * @prop {boolean} operatable Whether to enable union, intersection,
 * and complement operations on checked sets. By default, true.
 * @prop {boolean} exportable Whether to enable exporting hierarchies and sets to files.
 * By default, true.
 * @prop {boolean} importable Whether to enable importing hierarchies from files.
 * By default, true.
 * @prop {function} onError Function to call with error messages (failed import validation, etc).
 * @prop {function} onCheckNode Function to call when a single node has been checked or un-checked.
 * @prop {function} onExpandNode Function to call when a node has been expanded.
 * @prop {function} onDropNode Function to call when a node has been dragged-and-dropped.
 * @prop {function} onCheckLevel Function to call when an entire hierarchy level has been selected,
 * via the "Color by cluster" and "Color by subcluster" buttons below collapsed level zero nodes.
 * @prop {function} onNodeSetColor Function to call when a new node color has been selected.
 * @prop {function} onNodeSetName Function to call when a node has been renamed.
 * @prop {function} onNodeRemove Function to call when the user clicks the "Delete" menu button
 * to remove a node.
 * @prop {function} onNodeView Function to call when the user wants to view the set associated
 * with a particular node.
 * @prop {function} onImportTree Function to call when a tree has been imported
 * using the "plus" button.
 * @prop {function} onCreateLevelZeroNode Function to call when a user clicks the "Create hierarchy"
 * menu option using the "plus" button.
 * @prop {function} onExportLevelZeroNode Function to call when a user wants to
 * export an entire hierarchy via the "Export hierarchy" menu button for a
 * particular level zero node.
 * @prop {function} onExportSet Function to call when a user wants to export a set associated with
 * a particular node via the "Export set" menu button.
 * @prop {function} onUnion Function to call when a user wants to create a new set from the union
 * of the sets associated with the currently-checked nodes.
 * @prop {function} onIntersection Function to call when a user wants to create a new set from the
 * intersection of the sets associated with the currently-checked nodes.
 * @prop {function} onComplement Function to call when a user wants to create a new set from the
 * complement of the (union of the) sets associated with the currently-checked nodes.
 * @prop {function} onView Function to call when a user wants to view the sets
 * associated with the currently-checked nodes.
 * @prop {string} theme "light" or "dark" for the vitessce theme
 */function SetsManager(props){var theme=props.theme,sets=props.sets,additionalSets=props.additionalSets,setColor=props.setColor,checkedLevel=props.levelSelection,setSelection=props.setSelection,setExpansion=props.setExpansion,hasColorEncoding=props.hasColorEncoding,datatype=props.datatype,_props$draggable=props.draggable,draggable=_props$draggable===void 0?true:_props$draggable,_props$checkable=props.checkable,checkable=_props$checkable===void 0?true:_props$checkable,_props$editable=props.editable,editable=_props$editable===void 0?true:_props$editable,_props$expandable=props.expandable,expandable=_props$expandable===void 0?true:_props$expandable,_props$operatable=props.operatable,operatable=_props$operatable===void 0?true:_props$operatable,_props$exportable=props.exportable,exportable=_props$exportable===void 0?true:_props$exportable,_props$importable=props.importable,importable=_props$importable===void 0?true:_props$importable,onError=props.onError,onCheckNode=props.onCheckNode,onExpandNode=props.onExpandNode,onDropNode=props.onDropNode,onCheckLevel=props.onCheckLevel,onNodeSetColor=props.onNodeSetColor,_onNodeSetName=props.onNodeSetName,onNodeCheckNewName=props.onNodeCheckNewName,onNodeRemove=props.onNodeRemove,onNodeView=props.onNodeView,onImportTree=props.onImportTree,onCreateLevelZeroNode=props.onCreateLevelZeroNode,onExportLevelZeroNodeJSON=props.onExportLevelZeroNodeJSON,onExportLevelZeroNodeTabular=props.onExportLevelZeroNodeTabular,onExportSetJSON=props.onExportSetJSON,onUnion=props.onUnion,onIntersection=props.onIntersection,onComplement=props.onComplement,hasCheckedSetsToUnion=props.hasCheckedSetsToUnion,hasCheckedSetsToIntersect=props.hasCheckedSetsToIntersect,hasCheckedSetsToComplement=props.hasCheckedSetsToComplement;var isChecking=true;var autoExpandParent=true;var _useState=Object(external_react_["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),isDragging=_useState2[0],setIsDragging=_useState2[1];var _useState3=Object(external_react_["useState"])(null),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),isEditingNodeName=_useState4[0],setIsEditingNodeName=_useState4[1];var processedSets=Object(external_react_["useMemo"])(function(){return processSets(sets,setColor,theme);},[sets,setColor,theme]);var processedAdditionalSets=Object(external_react_["useMemo"])(function(){return processSets(additionalSets,setColor,theme);},[additionalSets,setColor,theme]);var additionalSetKeys=processedAdditionalSets?processedAdditionalSets.tree.flatMap(function(v){return getAllKeys(v,[]);}):[];var allSetSelectionKeys=(setSelection||[]).map(utils["g" /* pathToKey */]);var allSetExpansionKeys=(setExpansion||[]).map(utils["g" /* pathToKey */]);var setSelectionKeys=allSetSelectionKeys.filter(function(k){return!additionalSetKeys.includes(k);});var setExpansionKeys=allSetExpansionKeys.filter(function(k){return!additionalSetKeys.includes(k);});var additionalSetSelectionKeys=allSetSelectionKeys.filter(function(k){return additionalSetKeys.includes(k);});var additionalSetExpansionKeys=allSetExpansionKeys.filter(function(k){return additionalSetKeys.includes(k);});/**
   * Recursively render TreeNode components.
   * @param {object[]} nodes An array of node objects.
   * @returns {TreeNode[]|null} Array of TreeNode components or null.
   */function renderTreeNodes(nodes,readOnly,currPath){if(!nodes){return null;}return nodes.map(function(node){var newPath=[].concat(Object(toConsumableArray["a" /* default */])(currPath),[node.name]);return/*#__PURE__*/external_react_default.a.createElement(TreeNode_TreeNode,Object.assign({theme:theme,key:Object(utils["g" /* pathToKey */])(newPath)},Object(cell_set_utils["h" /* nodeToRenderProps */])(node,newPath,setColor),{isEditing:isEqual_default()(isEditingNodeName,newPath),datatype:datatype,draggable:draggable&&!readOnly,editable:editable&&!readOnly,checkable:checkable,expandable:expandable,exportable:exportable,hasColorEncoding:hasColorEncoding,isChecking:isChecking,checkedLevelPath:checkedLevel?checkedLevel.levelZeroPath:null,checkedLevelIndex:checkedLevel?checkedLevel.levelIndex:null,onCheckNode:onCheckNode,onCheckLevel:onCheckLevel,onNodeView:onNodeView,onNodeSetColor:onNodeSetColor,onNodeSetName:function onNodeSetName(targetPath,name){_onNodeSetName(targetPath,name);setIsEditingNodeName(null);},onNodeCheckNewName:onNodeCheckNewName,onNodeSetIsEditing:setIsEditingNodeName,onNodeRemove:onNodeRemove,onExportLevelZeroNodeJSON:onExportLevelZeroNodeJSON,onExportLevelZeroNodeTabular:onExportLevelZeroNodeTabular,onExportSetJSON:onExportSetJSON,disableTooltip:isDragging,onDragStart:function onDragStart(){return setIsDragging(true);},onDragEnd:function onDragEnd(){return setIsDragging(false);}}),renderTreeNodes(node.children,readOnly,newPath,theme));});}return/*#__PURE__*/external_react_default.a.createElement("div",{className:"sets-manager"},/*#__PURE__*/external_react_default.a.createElement("div",{className:"sets-manager-tree"},/*#__PURE__*/external_react_default.a.createElement(sets_Tree,{draggable:false,checkable:checkable,checkedKeys:setSelectionKeys,expandedKeys:setExpansionKeys,autoExpandParent:autoExpandParent,onCheck:function onCheck(checkedKeys,info){return onCheckNode(info.node.props.nodeKey,info.checked);},onExpand:function onExpand(expandedKeys,info){return onExpandNode(expandedKeys,info.node.props.nodeKey,info.expanded);}},renderTreeNodes(processedSets.tree,true,[],theme)),/*#__PURE__*/external_react_default.a.createElement(sets_Tree,{draggable:true/* TODO */,checkable:checkable,checkedKeys:additionalSetSelectionKeys,expandedKeys:additionalSetExpansionKeys,autoExpandParent:autoExpandParent,onCheck:function onCheck(checkedKeys,info){return onCheckNode(info.node.props.nodeKey,info.checked);},onExpand:function onExpand(expandedKeys,info){return onExpandNode(expandedKeys,info.node.props.nodeKey,info.expanded);},onDrop:function onDrop(info){var dropKey=info.node.props.eventKey;var dragKey=info.dragNode.props.eventKey;var dropToGap=info.dropToGap,dropPosition=info.dropPosition;onDropNode(dropKey,dragKey,dropPosition,dropToGap);}},renderTreeNodes(processedAdditionalSets.tree,false,[],theme)),/*#__PURE__*/external_react_default.a.createElement(PlusButton,{datatype:datatype,onError:onError,onImportTree:onImportTree,onCreateLevelZeroNode:onCreateLevelZeroNode,importable:importable,editable:editable})),isChecking?/*#__PURE__*/external_react_default.a.createElement("div",{className:"set-operation-buttons"},/*#__PURE__*/external_react_default.a.createElement(SetOperationButtons,{onUnion:onUnion,onIntersection:onIntersection,onComplement:onComplement,operatable:operatable,hasCheckedSetsToUnion:hasCheckedSetsToUnion,hasCheckedSetsToIntersect:hasCheckedSetsToIntersect,hasCheckedSetsToComplement:hasCheckedSetsToComplement})):null);}

/***/ }),
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/***/ (function(module, exports) {

module.exports = require("react-vega");

/***/ }),
/* 147 */,
/* 148 */,
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellSetsManagerSubscriber; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(103);
var _package_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(103, 1);
/* harmony import */ var _app_state_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _app_state_coordination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30);
/* harmony import */ var _SetsManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(141);
/* harmony import */ var _TitleInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39);
/* harmony import */ var _cell_set_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24);
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(12);
/* harmony import */ var _data_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(26);
var CELL_SETS_DATA_TYPES=['cells','cell-sets'];/**
 * A subscriber wrapper around the SetsManager component
 * for the 'cell' datatype.
 * @param {object} props
 * @param {string} props.theme The current theme name.
 * @param {object} props.coordinationScopes The mapping from coordination types to coordination
 * scopes.
 * @param {function} props.removeGridComponent The callback function to pass to TitleInfo,
 * to call when the component has been removed from the grid.
 * @param {string} props.title The component title.
 */function CellSetsManagerSubscriber(props){var coordinationScopes=props.coordinationScopes,removeGridComponent=props.removeGridComponent,theme=props.theme,_props$title=props.title,title=_props$title===void 0?'Cell Sets':_props$title;var loaders=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_6__[/* useLoaders */ "o"])();var setWarning=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_6__[/* useSetWarning */ "v"])();// Get "props" from the coordination space.
var _useCoordination=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_6__[/* useCoordination */ "j"])(_app_state_coordination__WEBPACK_IMPORTED_MODULE_7__[/* COMPONENT_COORDINATION_TYPES */ "b"].cellSets,coordinationScopes),_useCoordination2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useCoordination,2),_useCoordination2$=_useCoordination2[0],dataset=_useCoordination2$.dataset,cellSetSelection=_useCoordination2$.obsSetSelection,cellSetColor=_useCoordination2$.obsSetColor,additionalCellSets=_useCoordination2$.additionalObsSets,cellColorEncoding=_useCoordination2$.obsColorEncoding,_useCoordination2$2=_useCoordination2[1],setCellSetSelection=_useCoordination2$2.setObsSetSelection,setCellColorEncoding=_useCoordination2$2.setObsColorEncoding,setCellSetColor=_useCoordination2$2.setObsSetColor,setAdditionalCellSets=_useCoordination2$2.setAdditionalObsSets;var _useUrls=Object(_hooks__WEBPACK_IMPORTED_MODULE_14__[/* useUrls */ "f"])(),_useUrls2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useUrls,3),urls=_useUrls2[0],addUrl=_useUrls2[1],resetUrls=_useUrls2[2];var _useReady=Object(_hooks__WEBPACK_IMPORTED_MODULE_14__[/* useReady */ "e"])(CELL_SETS_DATA_TYPES),_useReady2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useReady,4),isReady=_useReady2[0],setItemIsReady=_useReady2[1],setItemIsNotReady=_useReady2[2],// eslint-disable-line no-unused-vars
resetReadyItems=_useReady2[3];var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),_useState2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState,2),cellSetExpansion=_useState2[0],setCellSetExpansion=_useState2[1];// Reset file URLs and loader progress when the dataset has changed.
Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function(){resetUrls();resetReadyItems();setCellSetExpansion([]);// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);// Get data from loaders using the data hooks.
var _useCellsData=Object(_data_hooks__WEBPACK_IMPORTED_MODULE_16__[/* useCellsData */ "b"])(loaders,dataset,setItemIsReady,addUrl,true),_useCellsData2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useCellsData,1),cells=_useCellsData2[0];var _useCellSetsData=Object(_data_hooks__WEBPACK_IMPORTED_MODULE_16__[/* useCellSetsData */ "a"])(loaders,dataset,setItemIsReady,addUrl,false,{setObsSetSelection:setCellSetSelection,setObsSetColor:setCellSetColor},{obsSetSelection:cellSetSelection,obsSetColor:cellSetColor}),_useCellSetsData2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useCellSetsData,1),cellSets=_useCellSetsData2[0];// Validate and upgrade the additionalCellSets.
Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function(){if(additionalCellSets){var upgradedCellSets;try{upgradedCellSets=Object(_io__WEBPACK_IMPORTED_MODULE_12__[/* tryUpgradeTreeToLatestSchema */ "f"])(additionalCellSets,_constants__WEBPACK_IMPORTED_MODULE_13__[/* SETS_DATATYPE_CELL */ "h"]);}catch(e){setWarning(e.message);return;}setAdditionalCellSets(upgradedCellSets);}},[additionalCellSets,setAdditionalCellSets,setWarning]);// Get an array of all cell IDs to use for set complement operations.
var allCellIds=Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function(){return cells?Object.keys(cells):[];},[cells]);// A helper function for updating the encoding for cell colors,
// which may have previously been set to 'geneSelection'.
function setCellSetColorEncoding(){setCellColorEncoding('cellSetSelection');}// Merged cell sets are only to be used for convenience when reading
// (if writing: update either `cellSets` _or_ `additionalCellSets`).
var mergedCellSets=Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function(){return Object(_utils__WEBPACK_IMPORTED_MODULE_15__[/* mergeCellSets */ "r"])(cellSets,additionalCellSets);},[cellSets,additionalCellSets]);// Infer the state of the "checked level" radio button based on the selected cell sets.
var checkedLevel=Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function(){if(cellSetSelection&&cellSetSelection.length>0&&mergedCellSets&&mergedCellSets.tree.length>0){return Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treeToExpectedCheckedLevel */ "p"])(mergedCellSets,cellSetSelection);}return null;},[cellSetSelection,mergedCellSets]);// Callback functions
// The user wants to select all nodes at a particular hierarchy level.
function onCheckLevel(levelZeroName,levelIndex){var lzn=mergedCellSets.tree.find(function(n){return n.name===levelZeroName;});if(lzn){var newCellSetSelection=Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* nodeToLevelDescendantNamePaths */ "g"])(lzn,levelIndex,[],true);setCellSetSelection(newCellSetSelection);setCellSetColorEncoding();}}// The user wants to check or uncheck a cell set node.
function onCheckNode(targetKey,checked){var targetPath=Array.isArray(targetKey)?targetKey:targetKey.split(_utils__WEBPACK_IMPORTED_MODULE_11__[/* PATH_SEP */ "a"]);if(!targetKey){return;}if(checked){setCellSetSelection([].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(cellSetSelection),[targetPath]));}else{setCellSetSelection(cellSetSelection.filter(function(d){return!lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(d,targetPath);}));}setCellSetColorEncoding();}// The user wants to expand or collapse a node in the tree.
function onExpandNode(expandedKeys,targetKey,expanded){if(expanded){setCellSetExpansion(function(prev){return[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(prev),[targetKey.split(_utils__WEBPACK_IMPORTED_MODULE_11__[/* PATH_SEP */ "a"])]);});}else{setCellSetExpansion(function(prev){return prev.filter(function(d){return!lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(d,targetKey.split(_utils__WEBPACK_IMPORTED_MODULE_11__[/* PATH_SEP */ "a"]));});});}}// The user dragged a tree node and dropped it somewhere else in the tree
// to re-arrange or re-order the nodes.
// We need to verify that their drop target is valid, and if so, complete
// the tree re-arrangement.
function onDropNode(dropKey,dragKey,dropPosition,dropToGap){var dropPath=dropKey.split(_utils__WEBPACK_IMPORTED_MODULE_11__[/* PATH_SEP */ "a"]);var dropNode=Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treeFindNodeByNamePath */ "l"])(additionalCellSets,dropPath);if(!dropNode.children&&!dropToGap){// Do not allow a node with a set (i.e. leaf) to become a child of another node with a set,
// as this will result in an internal node having a set, which we do not allow.
return;}var dropNodeLevel=dropPath.length-1;var dropNodeIsLevelZero=dropNodeLevel===0;// Get drag node.
var dragPath=dragKey.split(_utils__WEBPACK_IMPORTED_MODULE_11__[/* PATH_SEP */ "a"]);var dragNode=Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treeFindNodeByNamePath */ "l"])(additionalCellSets,dragPath);if(dropNodeIsLevelZero&&dropToGap&&!dragNode.children){// Do not allow a leaf node to become a level zero node.
return;}var dropParentNode;var dropParentPath;var dropNodeCurrIndex;if(!dropNodeIsLevelZero){dropParentPath=dropPath.slice(0,-1);dropParentNode=Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treeFindNodeByNamePath */ "l"])(additionalCellSets,dropParentPath);dropNodeCurrIndex=dropParentNode.children.findIndex(function(c){return c.name===dropNode.name;});}else{dropNodeCurrIndex=additionalCellSets.tree.findIndex(function(lzn){return lzn.name===dropNode.name;});}// Further, only allow dragging if the dragged node will have a unique
// name among its new siblings.
var hasSiblingNameConflict;var dragNodeName=dragNode.name;if(!dropNodeIsLevelZero&&dropToGap){hasSiblingNameConflict=dropParentNode.children.find(function(c){return c!==dragNode&&c.name===dragNodeName;});}else if(!dropToGap){hasSiblingNameConflict=dropNode.children.find(function(c){return c!==dragNode&&c.name===dragNodeName;});}else{hasSiblingNameConflict=additionalCellSets.tree.find(function(lzn){return lzn!==dragNode&&lzn.name===dragNodeName;});}if(hasSiblingNameConflict){return;}// Remove the dragged object from its current position.
// Recursively check whether each node path
// matches the path of the node to delete.
// If so, return null, and then always use
// .filter(Boolean) to eliminate any null array elements.
var nextAdditionalCellSets=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},additionalCellSets,{tree:additionalCellSets.tree.map(function(lzn){return Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* filterNode */ "a"])(lzn,[],dragPath);}).filter(Boolean)});// Update index values after temporarily removing the dragged node.
// Names are unique as children of their parents.
if(!dropNodeIsLevelZero){dropNodeCurrIndex=dropParentNode.children.findIndex(function(c){return c.name===dropNode.name;});}else{dropNodeCurrIndex=nextAdditionalCellSets.tree.findIndex(function(lzn){return lzn.name===dropNode.name;});}var newDragPath=[];if(!dropToGap||!dropNodeIsLevelZero){var addChildFunction;var checkPathFunction;var newPath=[];if(!dropToGap){// Append the dragNode to dropNode's children if dropping _onto_ the dropNode.
// Set dragNode as the last child of dropNode.
addChildFunction=function addChildFunction(n){return Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* nodeAppendChild */ "d"])(n,dragNode);};checkPathFunction=function checkPathFunction(path){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(path,dropPath);};}else if(!dropNodeIsLevelZero){// Prepend or insert the dragNode if dropping _between_ (above or below dropNode).
// The dropNode is at a level greater than zero,
// so it has a parent.
checkPathFunction=function checkPathFunction(path){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(path,dropParentPath);};if(dropPosition===-1){// Set dragNode as first child of dropParentNode.
addChildFunction=function addChildFunction(n){return Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* nodePrependChild */ "f"])(n,dragNode);};}else{// Set dragNode before or after dropNode.
var insertIndex=dropNodeCurrIndex+(dropPosition>dropNodeCurrIndex?1:0);addChildFunction=function addChildFunction(n){return Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* nodeInsertChild */ "e"])(n,dragNode,insertIndex);};}}nextAdditionalCellSets.tree=nextAdditionalCellSets.tree.map(function(node){return Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* nodeTransform */ "i"])(node,function(n,path){return checkPathFunction(path);},function(n){var newNode=addChildFunction(n);return newNode;},newPath);});// Done
setAdditionalCellSets(nextAdditionalCellSets);newDragPath=[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(newPath[0]),[dragNode.name]);setCellSetSelection([newDragPath]);}else if(dropPosition===-1){// We need to drop the dragNode to level zero,
// and level zero nodes do not have parents.
// Set dragNode as first level zero node of the tree.
nextAdditionalCellSets.tree.unshift(dragNode);setAdditionalCellSets(nextAdditionalCellSets);newDragPath=[dragNode.name];setCellSetSelection([newDragPath]);}else{// Set dragNode before or after dropNode in level zero.
var _insertIndex=dropNodeCurrIndex+(dropPosition>dropNodeCurrIndex?1:0);var newLevelZero=Array.from(nextAdditionalCellSets.tree);newLevelZero.splice(_insertIndex,0,dragNode);nextAdditionalCellSets.tree=newLevelZero;setAdditionalCellSets(nextAdditionalCellSets);newDragPath=[dragNode.name];setCellSetSelection([newDragPath]);}var oldColors=cellSetColor.filter(function(i){return Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* isEqualOrPrefix */ "f"])(dragPath,i.path);});var newColors=oldColors.map(function(i){return Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},i,{path:!lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(i.path,dragPath)?newDragPath.concat(i.path.slice(dragPath.length)):newDragPath});});var newCellSetColor=cellSetColor.filter(function(i){return!Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* isEqualOrPrefix */ "f"])(dragPath,i.path);});newCellSetColor.push.apply(newCellSetColor,Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(newColors));setCellSetColor(newCellSetColor);}// The user wants to change the color of a cell set node.
function onNodeSetColor(targetPath,color){// Replace the color if an array element for this path already exists.
var prevNodeColor=cellSetColor===null||cellSetColor===void 0?void 0:cellSetColor.find(function(d){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(d.path,targetPath);});if(!prevNodeColor){setCellSetColor([].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(cellSetColor||[]),[{path:targetPath,color:color}]));}else{setCellSetColor([].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(cellSetColor.filter(function(d){return!lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(d.path,targetPath);})),[{path:targetPath,color:color}]));}}// The user wants to change the name of a cell set node.
function onNodeSetName(targetPath,name){var nextNamePath=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(targetPath);nextNamePath.pop();nextNamePath.push(name);// Recursively check whether each node path
// matches the path or a prefix of the path of the node to rename.
// If so, rename the node using the new path.
function renameNode(node,prevPath){if(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()([].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(prevPath),[node.name]),targetPath)){return Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},node,{name:name});}if(!node.children){return node;}return Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},node,{children:node.children.map(function(c){return renameNode(c,[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(prevPath),[node.name]));})});}var nextAdditionalCellSets=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},additionalCellSets,{tree:additionalCellSets.tree.map(function(lzn){return renameNode(lzn,[]);})});// Change all paths that have this node as a prefix (i.e. descendants).
var nextCellSetColor=cellSetColor.map(function(d){return{path:Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* tryRenamePath */ "h"])(targetPath,d.path,nextNamePath),color:d.color};});var nextCellSetSelection=cellSetSelection.map(function(d){return Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* tryRenamePath */ "h"])(targetPath,d,nextNamePath);});var nextCellSetExpansion=cellSetExpansion.map(function(d){return Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* tryRenamePath */ "h"])(targetPath,d,nextNamePath);});// Need to update the node path everywhere it may be present.
setAdditionalCellSets(nextAdditionalCellSets);setCellSetColor(nextCellSetColor);setCellSetSelection(nextCellSetSelection);setCellSetExpansion(nextCellSetExpansion);}// Each time the user types while renaming a cell set node,
// we need to check whether the potential new name conflicts
// with any existing cell set node names.
// If there are conflicts, we want to disable the "Save" button.
function onNodeCheckNewName(targetPath,name){var nextNamePath=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(targetPath);nextNamePath.pop();nextNamePath.push(name);var hasConflicts=!lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(targetPath,nextNamePath)&&Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treeFindNodeByNamePath */ "l"])(additionalCellSets,nextNamePath);return hasConflicts;}// The user wants to delete a cell set node, and has confirmed their choice.
function onNodeRemove(targetPath){// Recursively check whether each node path
// matches the path of the node to delete.
// If so, return null, and then always use
// .filter(Boolean) to eliminate any null array elements.
var nextAdditionalCellSets=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},additionalCellSets,{tree:additionalCellSets.tree.map(function(lzn){return Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* filterNode */ "a"])(lzn,[],targetPath);}).filter(Boolean)});// Delete state for all paths that have this node
// path as a prefix (i.e. delete all descendents).
var nextCellSetColor=cellSetColor.filter(function(d){return!Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* isEqualOrPrefix */ "f"])(targetPath,d.path);});var nextCellSetSelection=cellSetSelection.filter(function(d){return!Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* isEqualOrPrefix */ "f"])(targetPath,d);});var nextCellSetExpansion=cellSetExpansion.filter(function(d){return!Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* isEqualOrPrefix */ "f"])(targetPath,d);});setAdditionalCellSets(nextAdditionalCellSets);setCellSetColor(nextCellSetColor);setCellSetSelection(nextCellSetSelection);setCellSetExpansion(nextCellSetExpansion);}// The user wants to view (i.e. select) a particular node,
// or its expanded descendents.
function onNodeView(targetPath){// If parent node is clicked, and if it is expanded,
// then select the expanded descendent nodes.
var setsToView=[];// Recursively determine which descendent nodes are currently expanded.
function viewNode(node,nodePath){if(cellSetExpansion.find(function(expandedPath){return lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(nodePath,expandedPath);})){if(node.children){node.children.forEach(function(c){viewNode(c,[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(nodePath),[c.name]));});}else{setsToView.push(nodePath);}}else{setsToView.push(nodePath);}}var targetNode=Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treeFindNodeByNamePath */ "l"])(mergedCellSets,targetPath);viewNode(targetNode,targetPath);setCellSetSelection(setsToView);setCellSetColorEncoding();}// The user wants to create a new level zero node.
function onCreateLevelZeroNode(){var nextName=Object(_utils__WEBPACK_IMPORTED_MODULE_15__[/* getNextNumberedNodeName */ "p"])(additionalCellSets===null||additionalCellSets===void 0?void 0:additionalCellSets.tree,'My hierarchy ');setAdditionalCellSets(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},additionalCellSets||Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treeInitialize */ "m"])(_constants__WEBPACK_IMPORTED_MODULE_13__[/* SETS_DATATYPE_CELL */ "h"]),{tree:[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(additionalCellSets?additionalCellSets.tree:[]),[{name:nextName,children:[]}])}));}// The user wants to create a new node corresponding to
// the union of the selected sets.
function onUnion(){var newSet=Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treeToUnion */ "t"])(mergedCellSets,cellSetSelection);Object(_utils__WEBPACK_IMPORTED_MODULE_15__[/* setCellSelection */ "s"])(newSet,additionalCellSets,cellSetColor,setCellSetSelection,setAdditionalCellSets,setCellSetColor,setCellColorEncoding,'Union ');}// The user wants to create a new node corresponding to
// the intersection of the selected sets.
function onIntersection(){var newSet=Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treeToIntersection */ "q"])(mergedCellSets,cellSetSelection);Object(_utils__WEBPACK_IMPORTED_MODULE_15__[/* setCellSelection */ "s"])(newSet,additionalCellSets,cellSetColor,setCellSetSelection,setAdditionalCellSets,setCellSetColor,setCellColorEncoding,'Intersection ');}// The user wants to create a new node corresponding to
// the complement of the selected sets.
function onComplement(){var newSet=Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treeToComplement */ "o"])(mergedCellSets,cellSetSelection,allCellIds);Object(_utils__WEBPACK_IMPORTED_MODULE_15__[/* setCellSelection */ "s"])(newSet,additionalCellSets,cellSetColor,setCellSetSelection,setAdditionalCellSets,setCellSetColor,setCellColorEncoding,'Complement ');}// The user wants to import a cell set hierarchy,
// probably from a CSV or JSON file.
function onImportTree(treeToImport){// Check for any naming conflicts with the current sets
// (both user-defined and dataset-defined) before importing.
var hasConflict=Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treesConflict */ "u"])(mergedCellSets,treeToImport);if(!hasConflict){setAdditionalCellSets(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},additionalCellSets||Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treeInitialize */ "m"])(_constants__WEBPACK_IMPORTED_MODULE_13__[/* SETS_DATATYPE_CELL */ "h"]),{tree:[].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(additionalCellSets?additionalCellSets.tree:[]),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(treeToImport.tree))}));// Automatically initialize set colors for the imported sets.
var importAutoSetColors=Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* initializeCellSetColor */ "c"])(treeToImport,cellSetColor);setCellSetColor([].concat(Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(cellSetColor),Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(importAutoSetColors)));}}// The user wants to download a particular hierarchy to a JSON file.
function onExportLevelZeroNodeJSON(nodePath){var _treeExportLevelZeroN=Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treeExportLevelZeroNode */ "j"])(mergedCellSets,nodePath,_constants__WEBPACK_IMPORTED_MODULE_13__[/* SETS_DATATYPE_CELL */ "h"],cellSetColor,theme),treeToExport=_treeExportLevelZeroN.treeToExport,nodeName=_treeExportLevelZeroN.nodeName;Object(_io__WEBPACK_IMPORTED_MODULE_12__[/* downloadForUser */ "a"])(Object(_io__WEBPACK_IMPORTED_MODULE_12__[/* handleExportJSON */ "b"])(treeToExport),"".concat(nodeName,"_").concat(_package_json__WEBPACK_IMPORTED_MODULE_5__.name,"-").concat(_constants__WEBPACK_IMPORTED_MODULE_13__[/* SETS_DATATYPE_CELL */ "h"],"-hierarchy.").concat(_constants__WEBPACK_IMPORTED_MODULE_13__[/* FILE_EXTENSION_JSON */ "a"]));}// The user wants to download a particular hierarchy to a CSV file.
function onExportLevelZeroNodeTabular(nodePath){var _treeExportLevelZeroN2=Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treeExportLevelZeroNode */ "j"])(mergedCellSets,nodePath,_constants__WEBPACK_IMPORTED_MODULE_13__[/* SETS_DATATYPE_CELL */ "h"],cellSetColor,theme),treeToExport=_treeExportLevelZeroN2.treeToExport,nodeName=_treeExportLevelZeroN2.nodeName;Object(_io__WEBPACK_IMPORTED_MODULE_12__[/* downloadForUser */ "a"])(Object(_io__WEBPACK_IMPORTED_MODULE_12__[/* handleExportTabular */ "c"])(treeToExport),"".concat(nodeName,"_").concat(_package_json__WEBPACK_IMPORTED_MODULE_5__.name,"-").concat(_constants__WEBPACK_IMPORTED_MODULE_13__[/* SETS_DATATYPE_CELL */ "h"],"-hierarchy.").concat(_constants__WEBPACK_IMPORTED_MODULE_13__[/* FILE_EXTENSION_TABULAR */ "b"]));}// The user wants to download a particular set to a JSON file.
function onExportSetJSON(nodePath){var _treeExportSet=Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_10__[/* treeExportSet */ "k"])(mergedCellSets,nodePath),setToExport=_treeExportSet.setToExport,nodeName=_treeExportSet.nodeName;Object(_io__WEBPACK_IMPORTED_MODULE_12__[/* downloadForUser */ "a"])(Object(_io__WEBPACK_IMPORTED_MODULE_12__[/* handleExportJSON */ "b"])(setToExport),"".concat(nodeName,"_").concat(_package_json__WEBPACK_IMPORTED_MODULE_5__.name,"-").concat(_constants__WEBPACK_IMPORTED_MODULE_13__[/* SETS_DATATYPE_CELL */ "h"],"-set.").concat(_constants__WEBPACK_IMPORTED_MODULE_13__[/* FILE_EXTENSION_JSON */ "a"]),_constants__WEBPACK_IMPORTED_MODULE_13__[/* FILE_EXTENSION_JSON */ "a"]);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TitleInfo__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{title:title,isScroll:true,removeGridComponent:removeGridComponent,urls:urls,theme:theme,isReady:isReady},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SetsManager__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],{setColor:cellSetColor,sets:cellSets,additionalSets:additionalCellSets,levelSelection:checkedLevel,setSelection:cellSetSelection,setExpansion:cellSetExpansion,hasColorEncoding:cellColorEncoding==='cellSetSelection',draggable:true,datatype:_constants__WEBPACK_IMPORTED_MODULE_13__[/* SETS_DATATYPE_CELL */ "h"],onError:setWarning,onCheckNode:onCheckNode,onExpandNode:onExpandNode,onDropNode:onDropNode,onCheckLevel:onCheckLevel,onNodeSetColor:onNodeSetColor,onNodeSetName:onNodeSetName,onNodeCheckNewName:onNodeCheckNewName,onNodeRemove:onNodeRemove,onNodeView:onNodeView,onImportTree:onImportTree,onCreateLevelZeroNode:onCreateLevelZeroNode,onExportLevelZeroNodeJSON:onExportLevelZeroNodeJSON,onExportLevelZeroNodeTabular:onExportLevelZeroNodeTabular,onExportSetJSON:onExportSetJSON,onUnion:onUnion,onIntersection:onIntersection,onComplement:onComplement,hasCheckedSetsToUnion:(cellSetSelection===null||cellSetSelection===void 0?void 0:cellSetSelection.length)>1,hasCheckedSetsToIntersect:(cellSetSelection===null||cellSetSelection===void 0?void 0:cellSetSelection.length)>1,hasCheckedSetsToComplement:(cellSetSelection===null||cellSetSelection===void 0?void 0:cellSetSelection.length)>0,theme:theme}));}

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellSetSizesPlotSubscriber; });
/* harmony import */ var C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TitleInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _app_state_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _app_state_coordination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _data_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);
/* harmony import */ var _cell_set_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27);
/* harmony import */ var _CellSetSizesPlot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(140);
var CELL_SET_SIZES_DATA_TYPES=['cell-sets'];/**
 * A subscriber component for `CellSetSizePlot`,
 * which listens for cell sets data updates and
 * `GRID_RESIZE` events.
 * @param {object} props
 * @param {function} props.removeGridComponent The grid component removal function.
 * @param {function} props.onReady The function to call when the subscriptions
 * have been made.
 * @param {string} props.theme The name of the current Vitessce theme.
 * @param {string} props.title The component title.
 */function CellSetSizesPlotSubscriber(props){var coordinationScopes=props.coordinationScopes,removeGridComponent=props.removeGridComponent,theme=props.theme,_props$title=props.title,title=_props$title===void 0?'Cell Set Sizes':_props$title;var loaders=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useLoaders */ "o"])();// Get "props" from the coordination space.
var _useCoordination=Object(_app_state_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useCoordination */ "j"])(_app_state_coordination__WEBPACK_IMPORTED_MODULE_4__[/* COMPONENT_COORDINATION_TYPES */ "b"].cellSetSizes,coordinationScopes),_useCoordination2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useCoordination,2),_useCoordination2$=_useCoordination2[0],dataset=_useCoordination2$.dataset,cellSetSelection=_useCoordination2$.obsSetSelection,cellSetColor=_useCoordination2$.obsSetColor,additionalCellSets=_useCoordination2$.additionalObsSets,_useCoordination2$2=_useCoordination2[1],setCellSetSelection=_useCoordination2$2.setObsSetSelection,setCellSetColor=_useCoordination2$2.setObsSetColor;var _useGridItemSize=Object(_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useGridItemSize */ "d"])(),_useGridItemSize2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useGridItemSize,3),width=_useGridItemSize2[0],height=_useGridItemSize2[1],containerRef=_useGridItemSize2[2];var _useUrls=Object(_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useUrls */ "f"])(),_useUrls2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useUrls,3),urls=_useUrls2[0],addUrl=_useUrls2[1],resetUrls=_useUrls2[2];var _useReady=Object(_hooks__WEBPACK_IMPORTED_MODULE_5__[/* useReady */ "e"])(CELL_SET_SIZES_DATA_TYPES),_useReady2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useReady,4),isReady=_useReady2[0],setItemIsReady=_useReady2[1],setItemIsNotReady=_useReady2[2],// eslint-disable-line no-unused-vars
resetReadyItems=_useReady2[3];// Reset file URLs and loader progress when the dataset has changed.
Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){resetUrls();resetReadyItems();// eslint-disable-next-line react-hooks/exhaustive-deps
},[loaders,dataset]);// Get data from loaders using the data hooks.
var _useCellSetsData=Object(_data_hooks__WEBPACK_IMPORTED_MODULE_7__[/* useCellSetsData */ "a"])(loaders,dataset,setItemIsReady,addUrl,true,{setObsSetSelection:setCellSetSelection,setObsSetColor:setCellSetColor},{obsSetSelection:cellSetSelection,obsSetColor:cellSetColor}),_useCellSetsData2=Object(C_Users_wkuo_Documents_vitessce_forked_v1_2_2_vitessce_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useCellSetsData,1),cellSets=_useCellSetsData2[0];var mergedCellSets=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function(){return Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* mergeCellSets */ "r"])(cellSets,additionalCellSets);},[cellSets,additionalCellSets]);// From the cell sets hierarchy and the list of selected cell sets,
// generate the array of set sizes data points for the bar plot.
var data=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function(){return mergedCellSets&&cellSetSelection&&cellSetColor?Object(_cell_set_utils__WEBPACK_IMPORTED_MODULE_8__[/* treeToSetSizesBySetNames */ "s"])(mergedCellSets,cellSetSelection,cellSetColor,theme):[];},[mergedCellSets,cellSetSelection,cellSetColor,theme]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TitleInfo__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{title:title,removeGridComponent:removeGridComponent,urls:urls,theme:theme,isReady:isReady},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{ref:containerRef,className:"vega-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CellSetSizesPlot__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{data:data,theme:theme,width:width,height:height})));}

/***/ }),
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ (function(module, exports) {

module.exports = require("d3-dsv");

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = require("json2csv");

/***/ }),
/* 156 */,
/* 157 */,
/* 158 */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = require("rc-tree/es/util");

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = require("rc-tooltip");

/***/ }),
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
/* 173 */
/***/ (function(module, exports) {

module.exports = require("vega-tooltip");

/***/ }),
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
/* 214 */,
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CellSetsManagerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(149);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CellSetsManagerSubscriber", function() { return _CellSetsManagerSubscriber__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _SetsManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetsManager", function() { return _SetsManager__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _CellSetSizesPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(140);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CellSetSizesPlot", function() { return _CellSetSizesPlot__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _CellSetSizesPlotSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(150);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CellSetSizesPlotSubscriber", function() { return _CellSetSizesPlotSubscriber__WEBPACK_IMPORTED_MODULE_3__["a"]; });



/***/ })
/******/ ]);
//# sourceMappingURL=sets.js.map