import * as path from 'path';
import * as fs from 'fs';

const recursiveReadSync = require('recursive-readdir-sync');

const ontologyDir = path.join(__dirname, '../ontology');
const ontologyPaths = recursiveReadSync(ontologyDir).sort((x, y) => x.toLowerCase().localeCompare(y.toLowerCase()));
const ontologyFiles = ontologyPaths.map(file => {
  return fs.readFileSync(file);
});

export const turtle = ontologyFiles.reduce((memo, data) => {
  return memo + '\n' + data;
}, '');

export * from './classes';
export * from './iris';
export * from './prefixes';
