"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var graphql_1 = require("graphql");
var typescript_definitions_1 = require("../../generators/typescript-definitions");
var ava_1 = require("ava");
var fixtures_1 = require("./fixtures");
var typeDefs = fs.readFileSync(path.join(fixtures_1.fixturesPath, 'schema.graphql'), 'utf-8');
ava_1.test('typescript definitions generator', function (t) {
    var schema = graphql_1.buildSchema(typeDefs);
    var generator = new typescript_definitions_1.TypescriptDefinitionsGenerator({
        schema: schema,
        internalTypes: [],
    });
    var result = generator.render();
    t.snapshot(result);
});
//# sourceMappingURL=typescript-definitions.test.js.map