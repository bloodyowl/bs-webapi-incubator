'use strict';

var NodeRe                     = require("./nodeRe.js");
var ChildNodeRe                = require("./childNodeRe.js");
var EventTargetRe              = require("../events/eventTargetRe.js");
var NonDocumentTypeChildNodeRe = require("./nonDocumentTypeChildNodeRe.js");

EventTargetRe.Impl(/* module */[]);

var include = NodeRe.Impl(/* module */[]);

NonDocumentTypeChildNodeRe.Impl(/* module */[]);

ChildNodeRe.Impl(/* module */[]);

var nodeType = include[0];

exports.nodeType = nodeType;
/*  Not a pure module */
