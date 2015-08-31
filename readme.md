# us-dollars [![Build Status](https://travis-ci.org/bendrucker/us-dollars.svg?branch=master)](https://travis-ci.org/bendrucker/us-dollars)

> Format US dollars ($)


## Install

```
$ npm install --save us-dollars
```


## Usage

```js
var dollars = require('us-dollars')

dollars(5)
//=> $5.00

dollars(5, 0)
//=> $5

dollars(5.1234)
//=> $5.1234
```

## API

#### `dollars(value, [decimals])` -> `string`

##### value

*Required*  
Type: `value`

A number to format.

##### decimals

Type: `number`

A number of decimal places to use. When omitted, this defaults to 2 or the precision of `value`, whichever is greatest.


## License

MIT © [Ben Drucker](http://bendrucker.me)
