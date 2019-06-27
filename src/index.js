const winnow = require("winnow");
const packageInfo = require("../package.json");

function Output() {}

Output.prototype.serve = function handleRequest(req, res) {
  this.model.pull(req, (error, geojson) => {
    if (error) {
      return res.status(error.code || 500).json({ message: error.message });
    }

    // send data to winnow; filter the data according to query
    const query = req.method === "POST" ? req.body : req.query;
    const options = Object.assign({ toEsri: false }, query);
    let result;

    try {
      result = winnow.query(geojson, options);
      res.status(200).json(result);
    } catch (error) {
      res.status(error.code || 500).json({ message: error.message });
    }
  });
};

Output.version = packageInfo.version;

Output.type = "output";

Output.routes = [
  {
    path: "geojson",
    methods: ["get", "post"],
    handler: "serve"
  }
];

module.exports = Output;
