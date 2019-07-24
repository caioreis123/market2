"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var graphql_1 = require("graphql");
var typescript_client_1 = require("../typescript-client");
var ava_1 = require("ava");
var fixtures_1 = require("./fixtures");
var typeDefs = fs.readFileSync(path.join(fixtures_1.fixturesPath, 'airbnb.graphql'), 'utf-8');
ava_1.test('typescript generator', function (t) {
    var schema = graphql_1.buildSchema(typeDefs);
    var generator = new typescript_client_1.TypescriptGenerator({
        schema: schema,
        internalTypes: [],
    });
    var result = generator.render();
    t.snapshot(result);
});
//# sourceMappingURL=typescript-client.airbnb.test.js.map