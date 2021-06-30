# neo-n3-dapi
A standalone bundle for interfacing with the NEO N3 blockchain

## Installation

In a browser - cdn [![](https://data.jsdelivr.com/v1/package/npm/neo-n3-dapi/badge)](https://www.jsdelivr.com/package/npm/neo-n3-dapi)
```
<script src="https://cdn.jsdelivr.net/npm/neo-n3-dapi@1.0.1/lib/neo-n3-dapi.min.js"></script>
```
```
window.neoN3Dapi
```

Install via npm [![npm version](https://badge.fury.io/js/neo-n3-dapi.svg)](https://badge.fury.io/js/neo-n3-dapi)
```
npm i --save neo-n3-dapi

or

yarn add neo-n3-dapi
```

```
var neoN3Dapi = require('neo-n3-dapi');

import neoN3Dapi from 'neo-n3-dapi';
```

## Usage Example

The following is an example of requesting the balances for a specific address.
```
import neoN3Dapi from 'neo-n3-dapi';

neoN3Dapi.getBalance([{
  address: 'NfuwpaQ1A2xaeVbxWe8FRtaRgaMa8yF3YM',
  contracts: ['NEO'],
}])
.then(balances => console.log(balances));
```

## Documentation



