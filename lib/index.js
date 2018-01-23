"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const recursiveReadSync = require('recursive-readdir-sync');
const ontologyDir = path.join(__dirname, '../ontology');
const ontologyPaths = recursiveReadSync(ontologyDir).sort((x, y) => x.toLowerCase().localeCompare(y.toLowerCase()));
const ontologyFiles = ontologyPaths.map(file => {
    return fs.readFileSync(file);
});
exports.turtle = ontologyFiles.reduce((memo, data) => {
    return memo + '\n' + data;
}, '');
__export(require("./jsonld"));
__export(require("./typescript"));
