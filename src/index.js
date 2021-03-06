const packageInfo = require("../package.json");
const serveGeoJSON = require("./serve-geojson");
const serveTopoJSON = require("./serve-topojson");

function GeoJSON() {}

GeoJSON.prototype.serveGeoJSON = serveGeoJSON;

GeoJSON.prototype.serveTopoJSON = serveTopoJSON;

GeoJSON.version = packageInfo.version;

GeoJSON.type = "output";

GeoJSON.routes = [
  {
    path: "$namespace/$providerParams/geojson",
    methods: ["get", "post"],
    handler: "serveGeoJSON"
  },
  {
    path: "$namespace/$providerParams/topojson",
    methods: ["get", "post"],
    handler: "serveTopoJSON"
  }
];

module.exports = GeoJSON;
