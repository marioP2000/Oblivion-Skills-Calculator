/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/scripts/majorAbilities/agility.js":
/*!***********************************************!*\
  !*** ./src/scripts/majorAbilities/agility.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function agility() {
  var AGIvalue = document.getElementById("AGI-value");
  var plusAgilityButtons = document.querySelectorAll(".plus-minorAGI-button");
  var minusAgilityButtons = document.querySelectorAll(".minus-minorAGI-button");

  //Plus Major
  plusAgilityButtons.forEach(function (plusAgilityButton) {
    plusAgilityButton.addEventListener("click", increaseValueAGI);
  });
  function increaseValueAGI() {
    var value = parseFloat(AGIvalue.value);
    AGIvalue.value = value + 0.5;
  }

  //Minus Major
  minusAgilityButtons.forEach(function (minusAgilityButton) {
    minusAgilityButton.addEventListener("click", decreaseValueAGI);
  });
  function decreaseValueAGI() {
    var value = parseFloat(AGIvalue.value);
    AGIvalue.value = value - 0.5;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (agility);

/***/ }),

/***/ "./src/scripts/majorAbilities/endurance.js":
/*!*************************************************!*\
  !*** ./src/scripts/majorAbilities/endurance.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function endurance() {
  var ENDvalue = document.getElementById("END-value");
  var plusEnduranceButtons = document.querySelectorAll(".plus-minorEND-button");
  var minusEnduranceButtons = document.querySelectorAll(".minus-minorEND-button");

  //Plus Major
  plusEnduranceButtons.forEach(function (plusEnduranceButton) {
    plusEnduranceButton.addEventListener("click", increaseValueEND);
  });
  function increaseValueEND() {
    var value = parseFloat(ENDvalue.value);
    ENDvalue.value = value + 0.5;
  }

  //Minus Major
  minusEnduranceButtons.forEach(function (minusEnduranceButton) {
    minusEnduranceButton.addEventListener("click", decreaseValueEND);
  });
  function decreaseValueEND() {
    var value = parseFloat(ENDvalue.value);
    ENDvalue.value = value - 0.5;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endurance);

/***/ }),

/***/ "./src/scripts/majorAbilities/intelligence.js":
/*!****************************************************!*\
  !*** ./src/scripts/majorAbilities/intelligence.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function intelligence() {
  var INTvalue = document.getElementById("INT-value");
  var plusIntelligenceButtons = document.querySelectorAll(".plus-minorINT-button");
  var minusIntelligenceButtons = document.querySelectorAll(".minus-minorINT-button");

  //Plus Major
  plusIntelligenceButtons.forEach(function (plusIntelligenceButton) {
    plusIntelligenceButton.addEventListener("click", increaseValueINT);
  });
  function increaseValueINT() {
    var value = parseFloat(INTvalue.value);
    INTvalue.value = value + 0.5;
  }

  //Minus Major
  minusIntelligenceButtons.forEach(function (minusIntelligenceButton) {
    minusIntelligenceButton.addEventListener("click", decreaseValueINT);
  });
  function decreaseValueINT() {
    var value = parseFloat(INTvalue.value);
    INTvalue.value = value - 0.5;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intelligence);

/***/ }),

/***/ "./src/scripts/majorAbilities/personality.js":
/*!***************************************************!*\
  !*** ./src/scripts/majorAbilities/personality.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function personality() {
  var PERvalue = document.getElementById("PER-value");
  var plusPersonalityButtons = document.querySelectorAll(".plus-minorPER-button");
  var minusPersonalityButtons = document.querySelectorAll(".minus-minorPER-button");

  //Plus Major
  plusPersonalityButtons.forEach(function (plusPersonalityButton) {
    plusPersonalityButton.addEventListener("click", increaseValuePER);
  });
  function increaseValuePER() {
    var value = parseFloat(PERvalue.value);
    PERvalue.value = value + 0.5;
  }

  //Minus Major
  minusPersonalityButtons.forEach(function (minusPersonalityButton) {
    minusPersonalityButton.addEventListener("click", decreaseValuePER);
  });
  function decreaseValuePER() {
    var value = parseFloat(PERvalue.value);
    PERvalue.value = value - 0.5;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (personality);

/***/ }),

/***/ "./src/scripts/majorAbilities/speed.js":
/*!*********************************************!*\
  !*** ./src/scripts/majorAbilities/speed.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function speed() {
  var SPEvalue = document.getElementById("SPE-value");
  var plusSpeedButtons = document.querySelectorAll(".plus-minorSPE-button");
  var minusSpeedButtons = document.querySelectorAll(".minus-minorSPE-button");

  //Plus Major
  plusSpeedButtons.forEach(function (plusSpeedButton) {
    plusSpeedButton.addEventListener("click", increaseValueSPE);
  });
  function increaseValueSPE() {
    var value = parseFloat(SPEvalue.value);
    SPEvalue.value = value + 0.5;
  }

  //Minus Major
  minusSpeedButtons.forEach(function (minusSpeedButton) {
    minusSpeedButton.addEventListener("click", decreaseValueSPE);
  });
  function decreaseValueSPE() {
    var value = parseFloat(SPEvalue.value);
    SPEvalue.value = value - 0.5;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speed);

/***/ }),

/***/ "./src/scripts/majorAbilities/strength.js":
/*!************************************************!*\
  !*** ./src/scripts/majorAbilities/strength.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function strength() {
  var STRvalue = document.getElementById("STR-value");
  var plusStrengthButtons = document.querySelectorAll(".plus-minorSTR-button");
  var minusStrengthButtons = document.querySelectorAll(".minus-minorSTR-button");

  //Plus Major
  plusStrengthButtons.forEach(function (plusStrengthButton) {
    plusStrengthButton.addEventListener("click", increaseValueSTR);
  });
  function increaseValueSTR() {
    var value = parseFloat(STRvalue.value);
    STRvalue.value = value + 0.5;
  }

  //Minus Major
  minusStrengthButtons.forEach(function (minusStrengthButton) {
    minusStrengthButton.addEventListener("click", decreaseValueSTR);
  });
  function decreaseValueSTR() {
    var value = parseFloat(STRvalue.value);
    STRvalue.value = value - 0.5;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strength);

/***/ }),

/***/ "./src/scripts/majorAbilities/willpower.js":
/*!*************************************************!*\
  !*** ./src/scripts/majorAbilities/willpower.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function willpower() {
  var WILvalue = document.getElementById("WIL-value");
  var plusWillpowerButtons = document.querySelectorAll(".plus-minorWIL-button");
  var minusWillpowerButtons = document.querySelectorAll(".minus-minorWIL-button");

  //Plus Major
  plusWillpowerButtons.forEach(function (plusWillpowerButton) {
    plusWillpowerButton.addEventListener("click", increaseValueWIL);
  });
  function increaseValueWIL() {
    var value = parseFloat(WILvalue.value);
    WILvalue.value = value + 0.5;
  }

  //Minus Major
  minusWillpowerButtons.forEach(function (minusWillpowerButton) {
    minusWillpowerButton.addEventListener("click", decreaseValueWIL);
  });
  function decreaseValueWIL() {
    var value = parseFloat(WILvalue.value);
    WILvalue.value = value - 0.5;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (willpower);

/***/ }),

/***/ "./src/scripts/minorAbilities/minorAGI.js":
/*!************************************************!*\
  !*** ./src/scripts/minorAbilities/minorAGI.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function minorAGI() {
  // MARKSMAN
  var MARKSMANvalue = document.getElementById("MARKSMAN-value");
  var MARKSMANplus = document.getElementById("MARKSMAN-plus");
  var MARKSMANminus = document.getElementById("MARKSMAN-minus");
  function increaseValueMARKSMAN() {
    MARKSMANvalue.value++;
  }
  function decreaseValueMARKSMAN() {
    MARKSMANvalue.value--;
  }
  MARKSMANplus.addEventListener("click", increaseValueMARKSMAN);
  MARKSMANminus.addEventListener("click", decreaseValueMARKSMAN);

  // SECURITY
  var SECURITYvalue = document.getElementById("SECURITY-value");
  var SECURITYplus = document.getElementById("SECURITY-plus");
  var SECURITYminus = document.getElementById("SECURITY-minus");
  function increaseValueSECURITY() {
    SECURITYvalue.value++;
  }
  function decreaseValueSECURITY() {
    SECURITYvalue.value--;
  }
  SECURITYplus.addEventListener("click", increaseValueSECURITY);
  SECURITYminus.addEventListener("click", decreaseValueSECURITY);

  // SNEAK
  var SNEAKvalue = document.getElementById("SNEAK-value");
  var SNEAKplus = document.getElementById("SNEAK-plus");
  var SNEAKminus = document.getElementById("SNEAK-minus");
  function increaseValueSNEAK() {
    SNEAKvalue.value++;
  }
  function decreaseValueSNEAK() {
    SNEAKvalue.value--;
  }
  SNEAKplus.addEventListener("click", increaseValueSNEAK);
  SNEAKminus.addEventListener("click", decreaseValueSNEAK);

  // Save minor and major stats
  var AGIvalue = document.getElementById("AGI-value");
  function saveStats() {
    localStorage.setItem("AGIvalue", AGIvalue.value);
    localStorage.setItem("MARKSMANvalue", MARKSMANvalue.value);
    localStorage.setItem("SECURITYvalue", SECURITYvalue.value);
    localStorage.setItem("SNEAKvalue", SNEAKvalue.value);
    if (isNaN(AGIvalue.value)) {
      AGIvalue.value = 0.5;
    }
    ;
  }
  MARKSMANplus.addEventListener("click", saveStats);
  MARKSMANminus.addEventListener("click", saveStats);
  SECURITYplus.addEventListener("click", saveStats);
  SECURITYminus.addEventListener("click", saveStats);
  SNEAKplus.addEventListener("click", saveStats);
  SNEAKminus.addEventListener("click", saveStats);
  function getStats() {
    AGIvalue.value = localStorage.getItem("AGIvalue");
    MARKSMANvalue.value = localStorage.getItem("MARKSMANvalue");
    SECURITYvalue.value = localStorage.getItem("SECURITYvalue");
    SNEAKvalue.value = localStorage.getItem("SNEAKvalue");
  }
  document.addEventListener("DOMContentLoaded", getStats);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (minorAGI);

/***/ }),

/***/ "./src/scripts/minorAbilities/minorEND.js":
/*!************************************************!*\
  !*** ./src/scripts/minorAbilities/minorEND.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function minorEND() {
  // BLOCK
  var BLOCKvalue = document.getElementById("BLOCK-value");
  var BLOCKplus = document.getElementById("BLOCK-plus");
  var BLOCKminus = document.getElementById("BLOCK-minus");
  function increaseValueBLOCK() {
    BLOCKvalue.value++;
  }
  function decreaseValueBLOCK() {
    BLOCKvalue.value--;
  }
  BLOCKplus.addEventListener("click", increaseValueBLOCK);
  BLOCKminus.addEventListener("click", decreaseValueBLOCK);

  // ARMORER
  var ARMORERvalue = document.getElementById("ARMORER-value");
  var ARMORERplus = document.getElementById("ARMORER-plus");
  var ARMORERminus = document.getElementById("ARMORER-minus");
  function increaseValueARMORER() {
    ARMORERvalue.value++;
  }
  function decreaseValueARMORER() {
    ARMORERvalue.value--;
  }
  ARMORERplus.addEventListener("click", increaseValueARMORER);
  ARMORERminus.addEventListener("click", decreaseValueARMORER);

  // HEAVYARMOR
  var HEAVYARMORvalue = document.getElementById("HEAVYARMOR-value");
  var HEAVYARMORplus = document.getElementById("HEAVYARMOR-plus");
  var HEAVYARMORminus = document.getElementById("HEAVYARMOR-minus");
  function increaseValueHEAVYARMOR() {
    HEAVYARMORvalue.value++;
  }
  function decreaseValueHEAVYARMOR() {
    HEAVYARMORvalue.value--;
  }
  HEAVYARMORplus.addEventListener("click", increaseValueHEAVYARMOR);
  HEAVYARMORminus.addEventListener("click", decreaseValueHEAVYARMOR);

  // Save minor and major stats
  var ENDvalue = document.getElementById("END-value");
  function saveStats() {
    localStorage.setItem("ENDvalue", ENDvalue.value);
    localStorage.setItem("BLOCKvalue", BLOCKvalue.value);
    localStorage.setItem("ARMORERvalue", ARMORERvalue.value);
    localStorage.setItem("HEAVYARMORvalue", HEAVYARMORvalue.value);
    if (isNaN(ENDvalue.value)) {
      ENDvalue.value = 0.5;
    }
    ;
  }
  BLOCKplus.addEventListener("click", saveStats);
  BLOCKminus.addEventListener("click", saveStats);
  ARMORERplus.addEventListener("click", saveStats);
  ARMORERminus.addEventListener("click", saveStats);
  HEAVYARMORplus.addEventListener("click", saveStats);
  HEAVYARMORminus.addEventListener("click", saveStats);
  function getStats() {
    ENDvalue.value = localStorage.getItem("ENDvalue");
    BLOCKvalue.value = localStorage.getItem("BLOCKvalue");
    ARMORERvalue.value = localStorage.getItem("ARMORERvalue");
    HEAVYARMORvalue.value = localStorage.getItem("HEAVYARMORvalue");
  }
  document.addEventListener("DOMContentLoaded", getStats);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (minorEND);

/***/ }),

/***/ "./src/scripts/minorAbilities/minorINT.js":
/*!************************************************!*\
  !*** ./src/scripts/minorAbilities/minorINT.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function minorINT() {
  // ALCHEMY
  var ALCHEMYvalue = document.getElementById("ALCHEMY-value");
  var ALCHEMYplus = document.getElementById("ALCHEMY-plus");
  var ALCHEMYminus = document.getElementById("ALCHEMY-minus");
  function increaseValueALCHEMY() {
    ALCHEMYvalue.value++;
  }
  function decreaseValueALCHEMY() {
    ALCHEMYvalue.value--;
  }
  ALCHEMYplus.addEventListener("click", increaseValueALCHEMY);
  ALCHEMYminus.addEventListener("click", decreaseValueALCHEMY);

  // CONJURATION
  var CONJURATIONvalue = document.getElementById("CONJURATION-value");
  var CONJURATIONplus = document.getElementById("CONJURATION-plus");
  var CONJURATIONminus = document.getElementById("CONJURATION-minus");
  function increaseValueCONJURATION() {
    CONJURATIONvalue.value++;
  }
  function decreaseValueCONJURATION() {
    CONJURATIONvalue.value--;
  }
  CONJURATIONplus.addEventListener("click", increaseValueCONJURATION);
  CONJURATIONminus.addEventListener("click", decreaseValueCONJURATION);

  // MYSTICISM
  var MYSTICISMvalue = document.getElementById("MYSTICISM-value");
  var MYSTICISMplus = document.getElementById("MYSTICISM-plus");
  var MYSTICISMminus = document.getElementById("MYSTICISM-minus");
  function increaseValueMYSTICISM() {
    MYSTICISMvalue.value++;
  }
  function decreaseValueMYSTICISM() {
    MYSTICISMvalue.value--;
  }
  MYSTICISMplus.addEventListener("click", increaseValueMYSTICISM);
  MYSTICISMminus.addEventListener("click", decreaseValueMYSTICISM);

  // Save minor and major stats
  var INTvalue = document.getElementById("INT-value");
  function saveStats() {
    localStorage.setItem("INTvalue", INTvalue.value);
    localStorage.setItem("ALCHEMYvalue", ALCHEMYvalue.value);
    localStorage.setItem("CONJURATIONvalue", CONJURATIONvalue.value);
    localStorage.setItem("MYSTICISMvalue", MYSTICISMvalue.value);
    if (isNaN(INTvalue.value)) {
      INTvalue.value = 0.5;
    }
    ;
  }
  ALCHEMYplus.addEventListener("click", saveStats);
  ALCHEMYminus.addEventListener("click", saveStats);
  CONJURATIONplus.addEventListener("click", saveStats);
  CONJURATIONminus.addEventListener("click", saveStats);
  MYSTICISMplus.addEventListener("click", saveStats);
  MYSTICISMminus.addEventListener("click", saveStats);
  function getStats() {
    INTvalue.value = localStorage.getItem("INTvalue");
    ALCHEMYvalue.value = localStorage.getItem("ALCHEMYvalue");
    CONJURATIONvalue.value = localStorage.getItem("CONJURATIONvalue");
    MYSTICISMvalue.value = localStorage.getItem("MYSTICISMvalue");
  }
  document.addEventListener("DOMContentLoaded", getStats);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (minorINT);

/***/ }),

/***/ "./src/scripts/minorAbilities/minorPER.js":
/*!************************************************!*\
  !*** ./src/scripts/minorAbilities/minorPER.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function minorPER() {
  // MERCANTILE
  var MERCANTILEvalue = document.getElementById("MERCANTILE-value");
  var MERCANTILEplus = document.getElementById("MERCANTILE-plus");
  var MERCANTILEminus = document.getElementById("MERCANTILE-minus");
  function increaseValueMERCANTILE() {
    MERCANTILEvalue.value++;
  }
  function decreaseValueMERCANTILE() {
    MERCANTILEvalue.value--;
  }
  MERCANTILEplus.addEventListener("click", increaseValueMERCANTILE);
  MERCANTILEminus.addEventListener("click", decreaseValueMERCANTILE);

  // SPEECHCRAFT
  var SPEECHCRAFTvalue = document.getElementById("SPEECHCRAFT-value");
  var SPEECHCRAFTplus = document.getElementById("SPEECHCRAFT-plus");
  var SPEECHCRAFTminus = document.getElementById("SPEECHCRAFT-minus");
  function increaseValueSPEECHCRAFT() {
    SPEECHCRAFTvalue.value++;
  }
  function decreaseValueSPEECHCRAFT() {
    SPEECHCRAFTvalue.value--;
  }
  SPEECHCRAFTplus.addEventListener("click", increaseValueSPEECHCRAFT);
  SPEECHCRAFTminus.addEventListener("click", decreaseValueSPEECHCRAFT);

  // ILLUSION
  var ILLUSIONvalue = document.getElementById("ILLUSION-value");
  var ILLUSIONplus = document.getElementById("ILLUSION-plus");
  var ILLUSIONminus = document.getElementById("ILLUSION-minus");
  function increaseValueILLUSION() {
    ILLUSIONvalue.value++;
  }
  function decreaseValueILLUSION() {
    ILLUSIONvalue.value--;
  }
  ILLUSIONplus.addEventListener("click", increaseValueILLUSION);
  ILLUSIONminus.addEventListener("click", decreaseValueILLUSION);

  // Save minor and major stats
  var PERvalue = document.getElementById("PER-value");
  function saveStats() {
    localStorage.setItem("PERvalue", PERvalue.value);
    localStorage.setItem("MERCANTILEvalue", MERCANTILEvalue.value);
    localStorage.setItem("SPEECHCRAFTvalue", SPEECHCRAFTvalue.value);
    localStorage.setItem("ILLUSIONvalue", ILLUSIONvalue.value);
    if (isNaN(PERvalue.value)) {
      PERvalue.value = 0.5;
    }
    ;
  }
  MERCANTILEplus.addEventListener("click", saveStats);
  MERCANTILEminus.addEventListener("click", saveStats);
  SPEECHCRAFTplus.addEventListener("click", saveStats);
  SPEECHCRAFTminus.addEventListener("click", saveStats);
  ILLUSIONplus.addEventListener("click", saveStats);
  ILLUSIONminus.addEventListener("click", saveStats);
  function getStats() {
    PERvalue.value = localStorage.getItem("PERvalue");
    MERCANTILEvalue.value = localStorage.getItem("MERCANTILEvalue");
    SPEECHCRAFTvalue.value = localStorage.getItem("SPEECHCRAFTvalue");
    ILLUSIONvalue.value = localStorage.getItem("ILLUSIONvalue");
  }
  document.addEventListener("DOMContentLoaded", getStats);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (minorPER);

/***/ }),

/***/ "./src/scripts/minorAbilities/minorSPE.js":
/*!************************************************!*\
  !*** ./src/scripts/minorAbilities/minorSPE.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function minorSPE() {
  // ATHLETICS
  var ATHLETICSvalue = document.getElementById("ATHLETICS-value");
  var ATHLETICSplus = document.getElementById("ATHLETICS-plus");
  var ATHLETICSminus = document.getElementById("ATHLETICS-minus");
  function increaseValueATHLETICS() {
    ATHLETICSvalue.value++;
  }
  function decreaseValueATHLETICS() {
    ATHLETICSvalue.value--;
  }
  ATHLETICSplus.addEventListener("click", increaseValueATHLETICS);
  ATHLETICSminus.addEventListener("click", decreaseValueATHLETICS);

  // ACROBATICS
  var ACROBATICSvalue = document.getElementById("ACROBATICS-value");
  var ACROBATICSplus = document.getElementById("ACROBATICS-plus");
  var ACROBATICSminus = document.getElementById("ACROBATICS-minus");
  function increaseValueACROBATICS() {
    ACROBATICSvalue.value++;
  }
  function decreaseValueACROBATICS() {
    ACROBATICSvalue.value--;
  }
  ACROBATICSplus.addEventListener("click", increaseValueACROBATICS);
  ACROBATICSminus.addEventListener("click", decreaseValueACROBATICS);

  // LIGHTARMOR
  var LIGHTARMORvalue = document.getElementById("LIGHTARMOR-value");
  var LIGHTARMORplus = document.getElementById("LIGHTARMOR-plus");
  var LIGHTARMORminus = document.getElementById("LIGHTARMOR-minus");
  function increaseValueLIGHTARMOR() {
    LIGHTARMORvalue.value++;
  }
  function decreaseValueLIGHTARMOR() {
    LIGHTARMORvalue.value--;
  }
  LIGHTARMORplus.addEventListener("click", increaseValueLIGHTARMOR);
  LIGHTARMORminus.addEventListener("click", decreaseValueLIGHTARMOR);

  // Save minor and major stats
  var SPEvalue = document.getElementById("SPE-value");
  function saveStats() {
    localStorage.setItem("SPEvalue", SPEvalue.value);
    localStorage.setItem("ATHLETICSvalue", ATHLETICSvalue.value);
    localStorage.setItem("ACROBATICSvalue", ACROBATICSvalue.value);
    localStorage.setItem("LIGHTARMORvalue", LIGHTARMORvalue.value);
    if (isNaN(SPEvalue.value)) {
      SPEvalue.value = 0.5;
    }
    ;
  }
  ATHLETICSplus.addEventListener("click", saveStats);
  ATHLETICSminus.addEventListener("click", saveStats);
  ACROBATICSplus.addEventListener("click", saveStats);
  ACROBATICSminus.addEventListener("click", saveStats);
  LIGHTARMORplus.addEventListener("click", saveStats);
  LIGHTARMORminus.addEventListener("click", saveStats);
  function getStats() {
    SPEvalue.value = localStorage.getItem("SPEvalue");
    ATHLETICSvalue.value = localStorage.getItem("ATHLETICSvalue");
    ACROBATICSvalue.value = localStorage.getItem("ACROBATICSvalue");
    LIGHTARMORvalue.value = localStorage.getItem("LIGHTARMORvalue");
  }
  document.addEventListener("DOMContentLoaded", getStats);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (minorSPE);

/***/ }),

/***/ "./src/scripts/minorAbilities/minorSTR.js":
/*!************************************************!*\
  !*** ./src/scripts/minorAbilities/minorSTR.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function minorSTR() {
  // Blade
  var BLADEvalue = document.getElementById("BLADE-value");
  var BLADEplus = document.getElementById("BLADE-plus");
  var BLADEminus = document.getElementById("BLADE-minus");
  function increaseValueBLADE() {
    BLADEvalue.value++;
  }
  function decreaseValueBLADE() {
    BLADEvalue.value--;
  }
  BLADEplus.addEventListener("click", increaseValueBLADE);
  BLADEminus.addEventListener("click", decreaseValueBLADE);

  // Blunt
  var BLUNTvalue = document.getElementById("BLUNT-value");
  var BLUNTplus = document.getElementById("BLUNT-plus");
  var BLUNTminus = document.getElementById("BLUNT-minus");
  function increaseValueBLUNT() {
    BLUNTvalue.value++;
  }
  function decreaseValueBLUNT() {
    BLUNTvalue.value--;
  }
  BLUNTplus.addEventListener("click", increaseValueBLUNT);
  BLUNTminus.addEventListener("click", decreaseValueBLUNT);

  // Hand to Hand
  var HANDTOHANDvalue = document.getElementById("HANDTOHAND-value");
  var HANDTOHANDplus = document.getElementById("HANDTOHAND-plus");
  var HANDTOHANDminus = document.getElementById("HANDTOHAND-minus");
  function increaseValueHANDTOHAND() {
    HANDTOHANDvalue.value++;
  }
  function decreaseValueHANDTOHAND() {
    HANDTOHANDvalue.value--;
  }
  HANDTOHANDplus.addEventListener("click", increaseValueHANDTOHAND);
  HANDTOHANDminus.addEventListener("click", decreaseValueHANDTOHAND);

  // Save minor and major stats
  var STRvalue = document.getElementById("STR-value");
  function saveStats() {
    localStorage.setItem("STRvalue", STRvalue.value);
    localStorage.setItem("BLADEvalue", BLADEvalue.value);
    localStorage.setItem("BLUNTvalue", BLUNTvalue.value);
    localStorage.setItem("HANDTOHANDvalue", HANDTOHANDvalue.value);
    if (isNaN(STRvalue.value)) {
      STRvalue.value = 0.5;
    }
    ;
  }
  BLADEplus.addEventListener("click", saveStats);
  BLADEminus.addEventListener("click", saveStats);
  BLUNTplus.addEventListener("click", saveStats);
  BLUNTminus.addEventListener("click", saveStats);
  HANDTOHANDplus.addEventListener("click", saveStats);
  HANDTOHANDminus.addEventListener("click", saveStats);
  function getStats() {
    STRvalue.value = localStorage.getItem("STRvalue");
    BLADEvalue.value = localStorage.getItem("BLADEvalue");
    BLUNTvalue.value = localStorage.getItem("BLUNTvalue");
    HANDTOHANDvalue.value = localStorage.getItem("HANDTOHANDvalue");
  }
  document.addEventListener("DOMContentLoaded", getStats);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (minorSTR);

/***/ }),

/***/ "./src/scripts/minorAbilities/minorWIL.js":
/*!************************************************!*\
  !*** ./src/scripts/minorAbilities/minorWIL.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function minorWIL() {
  // ALTERATION
  var ALTERATIONvalue = document.getElementById("ALTERATION-value");
  var ALTERATIONplus = document.getElementById("ALTERATION-plus");
  var ALTERATIONminus = document.getElementById("ALTERATION-minus");
  function increaseValueALTERATION() {
    ALTERATIONvalue.value++;
  }
  function decreaseValueALTERATION() {
    ALTERATIONvalue.value--;
  }
  ALTERATIONplus.addEventListener("click", increaseValueALTERATION);
  ALTERATIONminus.addEventListener("click", decreaseValueALTERATION);

  // DESTRUCTION
  var DESTRUCTIONvalue = document.getElementById("DESTRUCTION-value");
  var DESTRUCTIONplus = document.getElementById("DESTRUCTION-plus");
  var DESTRUCTIONminus = document.getElementById("DESTRUCTION-minus");
  function increaseValueDESTRUCTION() {
    DESTRUCTIONvalue.value++;
  }
  function decreaseValueDESTRUCTION() {
    DESTRUCTIONvalue.value--;
  }
  DESTRUCTIONplus.addEventListener("click", increaseValueDESTRUCTION);
  DESTRUCTIONminus.addEventListener("click", decreaseValueDESTRUCTION);

  // RESTORATION
  var RESTORATIONvalue = document.getElementById("RESTORATION-value");
  var RESTORATIONplus = document.getElementById("RESTORATION-plus");
  var RESTORATIONminus = document.getElementById("RESTORATION-minus");
  function increaseValueRESTORATION() {
    RESTORATIONvalue.value++;
  }
  function decreaseValueRESTORATION() {
    RESTORATIONvalue.value--;
  }
  RESTORATIONplus.addEventListener("click", increaseValueRESTORATION);
  RESTORATIONminus.addEventListener("click", decreaseValueRESTORATION);

  // Save minor and major stats
  var WILvalue = document.getElementById("WIL-value");
  function saveStats() {
    localStorage.setItem("WILvalue", WILvalue.value);
    localStorage.setItem("ALTERATIONvalue", ALTERATIONvalue.value);
    localStorage.setItem("DESTRUCTIONvalue", DESTRUCTIONvalue.value);
    localStorage.setItem("RESTORATIONvalue", RESTORATIONvalue.value);
    if (isNaN(WILvalue.value)) {
      WILvalue.value = 0.5;
    }
    ;
  }
  ALTERATIONplus.addEventListener("click", saveStats);
  ALTERATIONminus.addEventListener("click", saveStats);
  DESTRUCTIONplus.addEventListener("click", saveStats);
  DESTRUCTIONminus.addEventListener("click", saveStats);
  RESTORATIONplus.addEventListener("click", saveStats);
  RESTORATIONminus.addEventListener("click", saveStats);
  function getStats() {
    WILvalue.value = localStorage.getItem("WILvalue");
    ALTERATIONvalue.value = localStorage.getItem("ALTERATIONvalue");
    DESTRUCTIONvalue.value = localStorage.getItem("DESTRUCTIONvalue");
    RESTORATIONvalue.value = localStorage.getItem("RESTORATIONvalue");
  }
  document.addEventListener("DOMContentLoaded", getStats);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (minorWIL);

/***/ }),

/***/ "./src/scripts/resetAbilities.js":
/*!***************************************!*\
  !*** ./src/scripts/resetAbilities.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function resetAbilities() {
  var levelupButton = document.getElementById("levelup-button");
  var abilityValues = document.querySelectorAll("input");
  function resetAll() {
    for (var i = 0; i < abilityValues.length; i++) {
      abilityValues[i].value = null;
    }
    localStorage.clear();
  }
  levelupButton.addEventListener("click", resetAll);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetAbilities);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: "PT Serif", sans-serif;
  color: #593213;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background: #E4CBA2;
}

.major-skills-row {
  position: relative;
  display: flex;
  justify-content: space-between;
  background: #E4CBA2;
  padding: 0 2.5%;
  border: solid 2px #593213;
  border-left: none;
  border-right: none;
  border-bottom: none;
}

#minor-strength {
  display: flex;
  flex-direction: column;
  width: 25%;
  font-size: 1.2rem;
  text-align: center;
}

.minor-row {
  justify-content: space-between;
  margin-top: 2%;
  width: 100%;
  border: solid 1px #593213;
  border-right: none;
  border-left: none;
  border-top: none;
}

.minor-row:nth-child(3) {
  border-bottom: none;
}

input {
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
  background: none;
  width: 25%;
  color: black;
  text-align: center;
}

#major-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  margin-right: 25%;
}

button {
  background: none;
  border: none;
  font-weight: bold;
  font-size: 3rem;
  color: #755134;
  cursor: pointer;
  transition: 0.1s;
  margin: 0 3%;
}

button:hover {
  transform: scale(1.1);
}

button:active {
  transform: scale(0.9);
}

#levelup-button {
  position: absolute;
  top: 5%;
  right: 1%;
  border-radius: 6px;
  padding: 0.25%;
  font-size: 2.5rem;
  background: #593213;
  color: #E4CBA2;
  margin-right: 0%;
}

#levelup-button:active {
  transform: scale(1);
}

@media (max-width: 1200px) {
  #major-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin-right: 10%;
  }
}
@media (max-width: 800px) {
  #major-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin-right: 5%;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA;EACI,mCAAA;EACA,cAAA;EACA,sBAAA;EACA,UAAA;EACA,SAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,UAAA;EACA,iBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,8BAAA;EACA,cAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AAEA;EACI,iBAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,kBAAA;AACJ;;AAEA;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,UAAA;EACA,iBAAA;AACJ;;AAEA;EACI,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,OAAA;EACA,SAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,gBAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AAEA;EACI;IACI,aAAA;IACA,mBAAA;IACA,8BAAA;IACA,UAAA;IACA,iBAAA;EACN;AACF;AAEA;EACI;IACI,aAAA;IACA,mBAAA;IACA,8BAAA;IACA,UAAA;IACA,gBAAA;EAAN;AACF","sourcesContent":["* {\r\n    font-family: \"PT Serif\", sans-serif;\r\n    color: #593213;\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    background: #E4CBA2;\r\n}\r\n\r\n.major-skills-row {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background: #E4CBA2;\r\n    padding: 0 2.5%;\r\n    border: solid 2px #593213;\r\n    border-left: none;\r\n    border-right: none;\r\n    border-bottom: none;\r\n}\r\n\r\n#minor-strength {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 25%;\r\n    font-size: 1.2rem;\r\n    text-align: center;\r\n}\r\n\r\n.minor-row {\r\n    justify-content: space-between;\r\n    margin-top: 2%;\r\n    width: 100%;\r\n    border: solid 1px #593213;\r\n    border-right: none;\r\n    border-left: none;\r\n    border-top: none;\r\n}\r\n\r\n.minor-row:nth-child(3) {\r\n    border-bottom: none;\r\n}\r\n\r\ninput {\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    border: none;\r\n    background: none;\r\n    width: 25%;\r\n    color: black;\r\n    text-align: center;\r\n}\r\n\r\n#major-row {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 25%;\r\n    margin-right: 25%;\r\n}\r\n\r\nbutton {\r\n    background: none;\r\n    border: none;\r\n    font-weight: bold;\r\n    font-size: 3rem;\r\n    color: #755134;\r\n    cursor: pointer;\r\n    transition: 0.1s;\r\n    margin: 0 3%;\r\n}\r\n\r\nbutton:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\nbutton:active {\r\n    transform: scale(0.9);\r\n}\r\n\r\n#levelup-button {\r\n    position: absolute;\r\n    top: 5%;\r\n    right: 1%;\r\n    border-radius: 6px;\r\n    padding: 0.25%;\r\n    font-size: 2.5rem;\r\n    background: #593213;\r\n    color: #E4CBA2;\r\n    margin-right: 0%;\r\n}\r\n\r\n#levelup-button:active {\r\n    transform: scale(1);\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    #major-row {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        width: 50%;\r\n        margin-right: 10%;\r\n    }\r\n  }\r\n\r\n@media (max-width: 800px) {\r\n    #major-row {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        width: 60%;\r\n        margin-right: 5%;\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _scripts_majorAbilities_strength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/majorAbilities/strength */ "./src/scripts/majorAbilities/strength.js");
/* harmony import */ var _scripts_majorAbilities_intelligence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/majorAbilities/intelligence */ "./src/scripts/majorAbilities/intelligence.js");
/* harmony import */ var _scripts_majorAbilities_agility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/majorAbilities/agility */ "./src/scripts/majorAbilities/agility.js");
/* harmony import */ var _scripts_majorAbilities_endurance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/majorAbilities/endurance */ "./src/scripts/majorAbilities/endurance.js");
/* harmony import */ var _scripts_majorAbilities_personality__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/majorAbilities/personality */ "./src/scripts/majorAbilities/personality.js");
/* harmony import */ var _scripts_majorAbilities_speed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/majorAbilities/speed */ "./src/scripts/majorAbilities/speed.js");
/* harmony import */ var _scripts_majorAbilities_willpower__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/majorAbilities/willpower */ "./src/scripts/majorAbilities/willpower.js");
/* harmony import */ var _scripts_minorAbilities_minorSTR__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/minorAbilities/minorSTR */ "./src/scripts/minorAbilities/minorSTR.js");
/* harmony import */ var _scripts_minorAbilities_minorINT__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/minorAbilities/minorINT */ "./src/scripts/minorAbilities/minorINT.js");
/* harmony import */ var _scripts_minorAbilities_minorWIL__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/minorAbilities/minorWIL */ "./src/scripts/minorAbilities/minorWIL.js");
/* harmony import */ var _scripts_minorAbilities_minorAGI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scripts/minorAbilities/minorAGI */ "./src/scripts/minorAbilities/minorAGI.js");
/* harmony import */ var _scripts_minorAbilities_minorSPE__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scripts/minorAbilities/minorSPE */ "./src/scripts/minorAbilities/minorSPE.js");
/* harmony import */ var _scripts_minorAbilities_minorEND__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scripts/minorAbilities/minorEND */ "./src/scripts/minorAbilities/minorEND.js");
/* harmony import */ var _scripts_minorAbilities_minorPER__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scripts/minorAbilities/minorPER */ "./src/scripts/minorAbilities/minorPER.js");
/* harmony import */ var _scripts_resetAbilities__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scripts/resetAbilities */ "./src/scripts/resetAbilities.js");
// Styles & Assets


// Major Abilities







(0,_scripts_majorAbilities_strength__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_scripts_majorAbilities_intelligence__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_scripts_majorAbilities_agility__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_scripts_majorAbilities_endurance__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_scripts_majorAbilities_personality__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_scripts_majorAbilities_speed__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_scripts_majorAbilities_willpower__WEBPACK_IMPORTED_MODULE_7__["default"])();

// Minor Abilities







(0,_scripts_minorAbilities_minorSTR__WEBPACK_IMPORTED_MODULE_8__["default"])();
(0,_scripts_minorAbilities_minorINT__WEBPACK_IMPORTED_MODULE_9__["default"])();
(0,_scripts_minorAbilities_minorWIL__WEBPACK_IMPORTED_MODULE_10__["default"])();
(0,_scripts_minorAbilities_minorAGI__WEBPACK_IMPORTED_MODULE_11__["default"])();
(0,_scripts_minorAbilities_minorSPE__WEBPACK_IMPORTED_MODULE_12__["default"])();
(0,_scripts_minorAbilities_minorEND__WEBPACK_IMPORTED_MODULE_13__["default"])();
(0,_scripts_minorAbilities_minorPER__WEBPACK_IMPORTED_MODULE_14__["default"])();

// Reset Abilities

(0,_scripts_resetAbilities__WEBPACK_IMPORTED_MODULE_15__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundlee0bec0d18a202bbd127d.js.map