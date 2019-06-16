# koop-output-geojson

[![npm](https://img.shields.io/npm/v/koop-output-geojson.svg)](https://www.npmjs.com/package/koop-output-geojson)

A simple [Koop output plugin](https://koopjs.github.io/docs/usage/output) that collects and filters GeoJSON from [providers](https://koopjs.github.io/docs/available-plugins/providers).

## Installation

```
$ npm install koop-output-geojson
```

## Usage

Register the output plugin before any provider.

```javascript
const Koop = require("koop");

// an example data provider
const provider = require("@koopjs/provider-file-geojson");
const output = require("koop-output-geojson");

const koop = new Koop();

koop.register(output);
koop.register(provider);

koop.server.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`);
});
```

The GeoJSON output provides two new routes that returns GeoJSON from registered providers:

```
GET /{provider-name}/geojson
```

or

```
POST /{provider-name}/geojson
```

This output uses [winnow](https://github.com/koopjs/winnow) to provide result filtering with SQL query. For example,

```
GET /{provider-name}/geojson?where='count'>0
```

## Development

### Dev Server

Run the dev server using the command

```
$ npm start
```

and the server will be running at `http://localhost:3000`. The dev server uses the [@koopjs/provider-file-geojson](https://github.com/koopjs/koop-provider-file-geojson) as the data provider and all test data should be located in `/data`.

## License

MIT
