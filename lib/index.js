/**
 * Quick generator for log, banner, favicon, etc...
 * @version 2.1.2
 * @license MIT
 * @author Taka Okunishi
 * @module fur
 */

"use strict";

var Fur = require('./fur');

/** @lends module:fur */
var fur = new Fur({});

fur.Fur = Fur;

module.exports = fur;