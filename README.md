# koop-output-geojson

[![npm](https://img.shields.io/npm/v/koop-output-geojson.svg)](https://www.npmjs.com/package/koop-output-geojson)

A simple [Koop output plugin](https://koopjs.github.io/docs/usage/output) that filters data from [providers](https://koopjs.github.io/docs/available-plugins/providers) and returns in [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) or [TopoJSON](https://github.com/topojson/topojson) format.

## Installation

```
$ npm install koop-output-geojson
```

## Usage

Register the output plugin before any provider:

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

This output provides two routes:

```
"GeoJSON" output routes for the "dev-provider" provider  Methods
-------------------------------------------------------  ---------
/dev-provider/geojson                                    GET, POST
/dev-provider/topojson                                   GET, POST
```

Both routes support on-the-fly filtering with [winnow](https://github.com/koopjs/winnow) using SQL query in the `where` query parameter. For example,

```
GET /dev-provider/geojson?where='count'>0
```

or add the query in the body of the `POST` request.

## Development

### Dev Server

Run the dev server using the command

```
$ npm start
```

The server will be running at `http://localhost:8080` and serving the test data file `test/data.geojson` by default (see [Koop CLI docs](https://github.com/koopjs/koop-cli#serve) for more details).

## License

MIT
