/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/ragna-runes.otf */ "./src/assets/ragna-runes.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Poppins-Regular.ttf */ "./src/assets/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'ragna-runes';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('opentype');
}

@font-face {
    font-family: 'poppins';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

p {
    font-family: var(--secondary-font);
    font-size: 22px;
    line-height: 2.5em;
}

.container {
    --box-shadow: 6px 6px 15px 2px rgba(0, 0, 0, 0.5);
    --text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    --background-color: rgba(255, 255, 255, 0.8);
    --border-radius: 15px;
    --primary-font: 'ragna-runes';
    --secondary-font: 'poppins';
    box-sizing: border-box;
    background-attachment: fixed;
    margin: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    padding: 50px;
    overflow-y: scroll;
}

.name-header {
    margin: 0;
    padding: 0;
    font-family: 'ragna-runes';
    font-size: 80px;
    letter-spacing: 15px;
    color: white;
    text-shadow: var(--text-shadow);
}

.content-tile {
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    width: 60%;
}

.nav-bar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.nav-button {
    width: 20%;
    padding: 20px;
    font-family: 'ragna-runes';
    font-weight: bold;
    letter-spacing: 10px;
    border: none;
    outline: none;
    background: none;
    font-size: 34px;
    transition: text-shadow .25s ease;
}

.nav-button:hover {
    text-shadow: var(--text-shadow);
}

.home-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-sizing: border-box;
    padding: 15px 50px;

}

.home-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2;
    gap: 50px;
}

.home-title {
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: center;
    font-family: var(--primary-font);
    text-shadow: var(--text-shadow);
    font-size: 50px;
    letter-spacing: 15px;
    line-height: 2.5em;
}

.intro-paragraph{ 
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    align-self: center;
    justify-self: center;
}

.home-image {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    height: auto;
    width: 80%;
    align-self: center;
    justify-self: center;
}

.beer-tile {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    justify-content: space-between;
    align-items: center;
}

.beer-abv,
.beer-description,
.intro-paragraph {
    font-family: var(--secondary-font);
}

.beer-name {
    font-family: var(--primary-font);
    letter-spacing: 7px;
    font-size: 30px;
    font-weight: 600;
}

.beer-abv {
    text-align: end;
    font-size: 26px;
    font-weight: 600;

}

.beer-description {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
}

hr {
    width: 100%;
}

.contact-container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2;
}

.contact-title {
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: center;
    font-family: var(--primary-font);
    text-shadow: var(--text-shadow);
    font-size: 60px;
    letter-spacing: 15px;
}

.contact-image {
    justify-self: start;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
}

.contact-description {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    padding-top: 50px;
    padding-right: 50px;
}

.info-container {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    padding-left: 50px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,+DAAwD;AAC5D;;AAEA;IACI,sBAAsB;IACtB,+DAA4D;AAChE;AACA;;IAEI,SAAS;IACT,UAAU;IACV,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,kCAAkC;IAClC,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iDAAiD;IACjD,6CAA6C;IAC7C,4CAA4C;IAC5C,qBAAqB;IACrB,6BAA6B;IAC7B,2BAA2B;IAC3B,sBAAsB;IACtB,4BAA4B;IAC5B,SAAS;IACT,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,0BAA0B;IAC1B,eAAe;IACf,oBAAoB;IACpB,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,yCAAyC;IACzC,mCAAmC;IACnC,6BAA6B;IAC7B,UAAU;AACd;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,0BAA0B;IAC1B,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,gCAAgC;IAChC,+BAA+B;IAC/B,eAAe;IACf,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,6BAA6B;IAC7B,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;;;IAGI,kCAAkC;AACtC;;AAEA;IACI,gCAAgC;IAChC,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,gBAAgB;;AAEpB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,qCAAqC;IACrC,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,gCAAgC;IAChC,+BAA+B;IAC/B,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,uBAAuB;AAC3B","sourcesContent":["@font-face {\n    font-family: 'ragna-runes';\n    src: url('../assets/ragna-runes.otf') format('opentype');\n}\n\n@font-face {\n    font-family: 'poppins';\n    src: url('../assets/Poppins-Regular.ttf') format('truetype');\n}\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n}\n\np {\n    font-family: var(--secondary-font);\n    font-size: 22px;\n    line-height: 2.5em;\n}\n\n.container {\n    --box-shadow: 6px 6px 15px 2px rgba(0, 0, 0, 0.5);\n    --text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);\n    --background-color: rgba(255, 255, 255, 0.8);\n    --border-radius: 15px;\n    --primary-font: 'ragna-runes';\n    --secondary-font: 'poppins';\n    box-sizing: border-box;\n    background-attachment: fixed;\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 50px;\n    padding: 50px;\n    overflow-y: scroll;\n}\n\n.name-header {\n    margin: 0;\n    padding: 0;\n    font-family: 'ragna-runes';\n    font-size: 80px;\n    letter-spacing: 15px;\n    color: white;\n    text-shadow: var(--text-shadow);\n}\n\n.content-tile {\n    background-color: var(--background-color);\n    border-radius: var(--border-radius);\n    box-shadow: var(--box-shadow);\n    width: 60%;\n}\n\n.nav-bar {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.nav-button {\n    width: 20%;\n    padding: 20px;\n    font-family: 'ragna-runes';\n    font-weight: bold;\n    letter-spacing: 10px;\n    border: none;\n    outline: none;\n    background: none;\n    font-size: 34px;\n    transition: text-shadow .25s ease;\n}\n\n.nav-button:hover {\n    text-shadow: var(--text-shadow);\n}\n\n.home-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    -webkit-box-sizing: border-box;\n    padding: 15px 50px;\n\n}\n\n.home-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 2;\n    gap: 50px;\n}\n\n.home-title {\n    grid-column: 1/2;\n    grid-row: 1/2;\n    align-self: center;\n    font-family: var(--primary-font);\n    text-shadow: var(--text-shadow);\n    font-size: 50px;\n    letter-spacing: 15px;\n    line-height: 2.5em;\n}\n\n.intro-paragraph{ \n    grid-column: 1 / 3;\n    grid-row: 2 / 3;\n    align-self: center;\n    justify-self: center;\n}\n\n.home-image {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n    height: auto;\n    width: 80%;\n    align-self: center;\n    justify-self: center;\n}\n\n.beer-tile {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: auto auto;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.beer-abv,\n.beer-description,\n.intro-paragraph {\n    font-family: var(--secondary-font);\n}\n\n.beer-name {\n    font-family: var(--primary-font);\n    letter-spacing: 7px;\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.beer-abv {\n    text-align: end;\n    font-size: 26px;\n    font-weight: 600;\n\n}\n\n.beer-description {\n    grid-column: 1 / 3;\n    grid-row: 2 / 3;\n}\n\nhr {\n    width: 100%;\n}\n\n.contact-container {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 2;\n}\n\n.contact-title {\n    grid-column: 1/2;\n    grid-row: 1/2;\n    align-self: center;\n    font-family: var(--primary-font);\n    text-shadow: var(--text-shadow);\n    font-size: 60px;\n    letter-spacing: 15px;\n}\n\n.contact-image {\n    justify-self: start;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n.contact-description {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    padding-top: 50px;\n    padding-right: 50px;\n}\n\n.info-container {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    padding-left: 50px;\n    padding-top: 50px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderContact: () => (/* binding */ renderContact)
/* harmony export */ });
/* harmony import */ var _assets_raven_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/raven.png */ "./src/assets/raven.png");
const contactParagraph = 'To contact the Longhouse Tavern, embrace the spirit of the Vikings and send your messages with the grace of a messenger raven. Gazing towards the northern skies, release your words into the wind, and let your desires soar on the wings of our feathered emissaries. If you prefer to contact the Longhouse Tavern by more conventional means, please use the following information.'

const contactInfo = {
    email: 'Loki@longhouse-tavern.com',
    phone: '(555)-odin-son',
    address: '1869 Fjord Way, Stavanger, Norway'
}

;

const renderContact = function(parentElement) {
    const contactTitle = document.createElement('h1')
    contactTitle.classList.add('contact-title')
    contactTitle.textContent = 'Contact Us'
    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contact-container')
    parentElement.appendChild(contactContainer)
    const imageElement = document.createElement('img')
    imageElement.classList.add('contact-image')
    imageElement.src = _assets_raven_png__WEBPACK_IMPORTED_MODULE_0__
    const contactDescription = document.createElement('p')
    contactDescription.classList.add('contact-description')
    contactDescription.textContent = contactParagraph
    const infoContainer = document.createElement('div')
    infoContainer.classList.add('info-container')
    contactContainer.appendChild(contactTitle)
    contactContainer.appendChild(imageElement)
    contactContainer.appendChild(contactDescription)
    contactContainer.appendChild(infoContainer)
    for(let i = 0; i != Object.entries(contactInfo).length; i++) {
        const infoElement = document.createElement('p')
        const keys = Object.keys(contactInfo)
        const values = Object.values(contactInfo)
        infoElement.textContent = keys[i] + ': ' + values[i]
        infoContainer.appendChild(infoElement)
    }
}

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHome: () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _assets_viking_ship_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/viking-ship.png */ "./src/assets/viking-ship.png");
const introParagraph = 'Welcome to the Longhouse Tavern, a captivating refuge for those drawn to the allure of Viking lore. Step into a world where the echoes of ancient Norse legends resonate through every corner, creating an ambiance that transports you to the heart of a Viking saga. Our tap house, fashioned after the legendary longhouses of old, beckons you to embark on a journey through time. Take a seat next to the roaring fire and let the warmth envelop you as you indulge in a selection of handcrafted beers, each bearing names that echo the heroic tales of Norse mythology. The Longhouse Tavern invites you to savor the essence of Viking camaraderie and revel in a drinking adventure like no other. Skål!'

;

const renderHome = function(parentElement) {
    const homeContainer = document.createElement('div')
    homeContainer.classList.add('home-container')
    parentElement.appendChild(homeContainer)
    const homeTitle = document.createElement('h1')
    homeTitle.classList.add('home-title')
    homeTitle.textContent = 'Where Legends Gather, Ales Flow, and Norse Spirit Roars!'
    homeContainer.appendChild(homeTitle)
    const imageElement = document.createElement('img')
    imageElement.classList.add('home-image')
    imageElement.src = _assets_viking_ship_png__WEBPACK_IMPORTED_MODULE_0__
    homeContainer.appendChild(imageElement)
    const introElement = document.createElement('p')
    introElement.classList.add('intro-paragraph')
    introElement.textContent = introParagraph
    homeContainer.appendChild(introElement)

}

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenu: () => (/* binding */ renderMenu)
/* harmony export */ });
const menuList = [];

function Beer(name, description, abv) {
    this.name = name;
    this.description = description;
    this.abv = abv;
    menuList.push(this);
}

new Beer('Berserker Brew', 'A bold and intense ale with a kick that rivals the ferocity of a berserker in battle, leaving your taste buds awakened and invigorated.', '5.4%');
new Beer('Thor\'s Thunder Ale', 'This robust brew packs a powerful punch, echoing the strength of the mighty god of thunder. Expect a storm of flavor with every sip.', '4.7%');
new Beer('Runestone Red Ale', 'Infused with the mystique of ancient runes, this red ale is a tribute to the history of the Vikings, delivering a flavorful journey through time.', '7.8%');
new Beer('Freyja\'s Bounty Bock', 'Rich and indulgent, this bock celebrates the goddess Freyja\'s abundance, offering a delightful symphony of malt sweetness and warmth.', '6.0%');
new Beer('Longship Lager', 'Embark on a flavorful voyage with this Lager inspired by the iconic longships. Its crisp profile mirrors the smooth sailing of these legendary vessels.', '4.5%');
new Beer('Ice Giant Imperial Stout', 'Brace yourself for the bold and imposing flavors of this imperial stout, inspired by the formidable Ice Giants of Norse mythology.', '8.9%');
new Beer('Mjolnir Malt Porter', 'This porter is a force to be reckoned with, just like Thor\'s mighty hammer. Savor the complex layers of maltiness with each sip.', '14.2%');
new Beer('Mead Hall Honey Ale', 'Sweetened with the nectar of the gods, this honey ale captures the essence of a festive mead hall celebration, delivering a delightful balance of sweetness.', '5.3%');
new Beer('Fjord Frost IPA', 'Immerse yourself in the cool, refreshing taste of this IPA, reminiscent of the crisp air and frosty landscapes of the Nordic fjords.', '8.6%');
new Beer('Norse Nectar Hazy', 'Inspired by the sweetness of Norse mythology, this pale ale boasts a burst of fruity hop flavors, creating a harmonious and enjoyable experience.', '6.9%');
new Beer('Odin\'s Wisdom Wheat', 'A brew inspired by the wisdom of Odin himself, this wheat beer offers a smooth, contemplative experience with subtle notes of enlightenment.', '5.2%');

const renderMenu = function(parentElement) {
    menuList.forEach(beer => {
        const beerTile = document.createElement('div')
        beerTile.classList.add('beer-tile')
        const nameElement = document.createElement('h2')
        nameElement.classList.add('beer-name')
        nameElement.textContent = beer.name
        const abvElement = document.createElement('h3')
        abvElement.classList.add('beer-abv')
        abvElement.textContent = beer.abv
        const descriptionElement = document.createElement('p')
        descriptionElement.classList.add('beer-description')
        descriptionElement.textContent = beer.description
        beerTile.appendChild(nameElement)
        beerTile.appendChild(abvElement)
        beerTile.appendChild(descriptionElement)
        parentElement.appendChild(beerTile)
        if(menuList.indexOf(beer) != menuList.length - 1) {
            const lineBreak = document.createElement('hr')
            parentElement.appendChild(lineBreak)
        }

    })
}

/***/ }),

/***/ "./src/assets/Poppins-Regular.ttf":
/*!****************************************!*\
  !*** ./src/assets/Poppins-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Poppins-Regular.ttf";

/***/ }),

/***/ "./src/assets/forest.jpg":
/*!*******************************!*\
  !*** ./src/assets/forest.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "forest.jpg";

/***/ }),

/***/ "./src/assets/ragna-runes.otf":
/*!************************************!*\
  !*** ./src/assets/ragna-runes.otf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ragna-runes.otf";

/***/ }),

/***/ "./src/assets/raven.png":
/*!******************************!*\
  !*** ./src/assets/raven.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "raven.png";

/***/ }),

/***/ "./src/assets/viking-ship.png":
/*!************************************!*\
  !*** ./src/assets/viking-ship.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "viking-ship.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _assets_forest_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/forest.jpg */ "./src/assets/forest.jpg");
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage.js */ "./src/homePage.js");
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuPage.js */ "./src/menuPage.js");
/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactPage.js */ "./src/contactPage.js");







const container = document.querySelector('.container')
container.style.backgroundImage = `url('${_assets_forest_jpg__WEBPACK_IMPORTED_MODULE_1__}')`

const nameHeader = document.createElement('h1')
nameHeader.classList.add('name-header')
nameHeader.textContent = 'Longhouse Tavern'
container.appendChild(nameHeader)

const navBar = document.createElement('div')
navBar.classList.add('nav-bar')
navBar.classList.add('content-tile')
container.appendChild(navBar)

const navText = ['Home', 'Menu', 'Contact']
navText.forEach(text => {
    const navButton = document.createElement('button')
    navButton.classList.add('nav-button')
    navButton.textContent = text
    navBar.appendChild(navButton)
})

const contentContainer = document.createElement('div')
contentContainer.classList.add('home-content')
contentContainer.classList.add('content-tile')
container.appendChild(contentContainer)

const removeContent = function() {
    while(contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild)
    }
}

const navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'Home') {
            removeContent()
            ;(0,_homePage_js__WEBPACK_IMPORTED_MODULE_2__.renderHome)(contentContainer)
        }
        else if(button.textContent === 'Menu') {
            removeContent()
            ;(0,_menuPage_js__WEBPACK_IMPORTED_MODULE_3__.renderMenu)(contentContainer)
        }
        else if(button.textContent === 'Contact') {
            removeContent()
            ;(0,_contactPage_js__WEBPACK_IMPORTED_MODULE_4__.renderContact)(contentContainer)
        }
    })
})

;(0,_homePage_js__WEBPACK_IMPORTED_MODULE_2__.renderHome)(contentContainer)

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map