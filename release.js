const p = require('./package.json');
const util = require('util');
const { exec } = require("child_process");

console.log('Building release');
console.log('Current version', p.version);

const execp = util.promisify(exec);
