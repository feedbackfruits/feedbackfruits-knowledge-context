import * as path from 'path';
import * as fs from 'fs';

const ontologyDir = path.join(__dirname, '../ontology');
const ontologyFiles = fs.readdirSync(ontologyDir).filter(name => name.endsWith('.ttl')).map(name => path.join(ontologyDir, name));

export const turtle = ontologyFiles.map(file => {
  return fs.readFileSync(file);
}).reduce((memo, data) => {
  return memo + '\n' + data;
}, '');
