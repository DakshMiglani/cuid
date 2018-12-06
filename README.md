# kuid
[![Travis-CI](https://travis-ci.org/ericelliott/cuid.svg)](https://travis-ci.org/ericelliott/cuid)

Collision-resistant ids optimized for horizontal scaling and binary search lookup performance.

Currently available for Node, browsers, Ruby, .Net, Go, PHP and Elixir (see ports below -- more ports are welcome).

`kuid()` returns a short random string with some collision-busting measures. Safe to use as HTML element ID's, and unique server-side record lookups.

## Example

ESM:

```js
import kuid from 'kuid';

kuid.initPrefix('yo')
console.log( kuid() );

// yojld2cjxh0000qzrmn831i7rn
```

Node style:

```js
var kuid = require('kuid');
console.log( kuid() );

// kjld2cyuq0000t3rmniod1foy
```


## Installing

```
$ npm install --save kuid
```


### Broken down

** c - h72gsb32 - 0000 - udoc - l363eofy **

The groups, in order, are:

* 'prefix' - identifies this as a kuid, and allows you to use it in html entity ids.
* Timestamp
* Counter - a single process might generate the same random string. The weaker the pseudo-random source, the higher the probability. That problem gets worse as processors get faster. The counter will roll over if the value gets too big.
* Client fingerprint
* Random (using cryptographically secure libraries where available).

