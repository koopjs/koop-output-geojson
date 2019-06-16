const Koop = require("koop");
const provider = require("@koopjs/provider-file-geojson");
const output = require("../../src/index");

const koop = new Koop();

koop.register(output);
koop.register(provider);

koop.server.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`);
});
