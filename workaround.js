const fs = require('fs');
const {join} = require('path');
const {promisify} = require('util');
const acorn = require('acorn');
const walk = require('acorn-walk');
const dynamicImport = require('acorn-dynamic-import');

const DYNAMIC_IMPORT_BASEVISITOR = Object.assign({}, walk.base, {
  [dynamicImport.DynamicImportKey]: () => {},
});

const readFile = promisify(fs.readFile);

(async function() {
  const source = await readFile(join('fixtures', 'base.mjs'));
  const program = acorn.Parser.extend(dynamicImport.default).parse(source, { sourceType: 'module', ranges: true });

  walk.simple(program, {
    'Import': function(node) {
      console.log('import', node);
    }
  }, DYNAMIC_IMPORT_BASEVISITOR);
}());