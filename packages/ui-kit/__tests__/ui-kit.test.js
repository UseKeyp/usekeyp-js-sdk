'use strict';

const uiLibrary = require('..');
const assert = require('assert').strict;

assert.strictEqual(uiLibrary(), 'Hello from uiLibrary');
console.info("uiLibrary tests passed");
