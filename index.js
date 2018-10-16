const fs = require('fs');
const {join} = require('path');
const {promisify} = require('util');
const acorn = require('acorn');
const acornWalk = require('acorn-walk');
const dynamicImport = require('acorn-dynamic-import').default;
const inject = require('acorn-dynamic-import/lib/walk').default;

const walk = inject(acornWalk);
const readFile = promisify(fs.readFile);

(async function() {
  const source = await readFile(join('fixtures', 'base.mjs'));
  const program = acorn.Parser.extend(dynamicImport).parse(source, { sourceType: 'module', ranges: true });

  walk.simple(program, {
    'Import': function(node) {
      console.log('import', node);
    }
  });
}());