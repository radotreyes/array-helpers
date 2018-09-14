# array-helpers
Helper methods for JavaScript arrays.

## Examples
```js
var arr = Array.fromRange(1, 4) // output: [ 1, 2, 3, 4 ]

arr.append(5) // (pure function, does not mutate source) 
  /* output: [ 1, 2, 3, 4, 5 ] */

arr.extend(5) // (impure function, does mutate source)
  /* output: undefined
   * arr is now [ 1, 2, 3, 4, 5 ]
   */

arr.instancesOf(2) // output: 1
arr.rotateLeft() // output: [ 2, 3, 4, 5, 1 ]
arr.rotateLeft(2) // output: [ 3, 4, 5, 1, 2 ]
arr.rotateRight() // output: [ 5, 1, 2, 3, 4 ]
arr.rotateRight(5) // output: [ 1, 2, 3, 4, 5 ]
```

## Usage
1. Clone this repository

```shell
git clone https://github.com/radotreyes/array-helpers.git
```

2. In your desired source file:
```js
// Node, pre-ES6 environments:
require('path/to/array-helpers')

// ES6
import 'path/to/array-helpers'
```

