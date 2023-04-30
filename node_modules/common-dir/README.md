[![view on npm](https://badgen.net/npm/v/common-dir)](https://www.npmjs.org/package/common-dir)
[![npm module downloads](https://badgen.net/npm/dt/common-dir)](https://www.npmjs.org/package/common-dir)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/75lb/common-dir)](https://github.com/75lb/common-dir/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/75lb/common-dir)](https://github.com/75lb/common-dir/network/dependents?dependent_type=PACKAGE)
[![Build Status](https://travis-ci.org/75lb/common-dir.svg?branch=master)](https://travis-ci.org/75lb/common-dir)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

<a name="module_common-dir"></a>

## common-dir
<a name="exp_module_common-dir--commonDir"></a>

### commonDir(files) ⇒ <code>string</code> ⏏
Returns the parent directory common to each path.

**Kind**: Exported function  
**Returns**: <code>string</code> - A single path ending with the path separator, e.g. '/user/some/folder/'  

| Param | Type | Description |
| --- | --- | --- |
| files | <code>Array</code> | An array of file paths to inspect |

**Example**  
```js
> const commonDir = require('common-dir')
> files = [
  '/Users/75lb/one/package.json',
  '/Users/75lb/one/test',
  '/Users/75lb/two/test/main.js'
]
> commonDir(files)
'/Users/75lb/'
```

* * *

&copy; 2014-21 Lloyd Brookes <75pound@gmail.com>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
