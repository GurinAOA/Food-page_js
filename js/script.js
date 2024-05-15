"use strict";

// window.addEventListener("DOMContentLoaded", () => {
//   const tabs = require("./modules/tabs"),
//     calc = require("./modules/calc"),
//     cards = require("./modules/card"),
//     forms = require("./modules/forms"),
//     modal = require("./modules/modal"),
//     timer = require("./modules/timer"),
//     slider = require("./modules/slider");
// });
// tabs();
// calc();
// cards();
// forms();
// modal();
// timer();
// slider();
window.addEventListener('DOMContentLoaded', function() {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          calc = require('./modules/calc'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider');

    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    slider();
});