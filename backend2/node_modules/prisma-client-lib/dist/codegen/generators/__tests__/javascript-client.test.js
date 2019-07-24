"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var graphql_1 = require("graphql");
var javascript_client_1 = require("../../generators/javascript-client");
var ava_1 = require("ava");
var fixtures_1 = require("./fixtures");
var typeDefs = fs.readFileSync(path.join(fixtures_1.fixturesPath, 'schema.graphql'), 'utf-8');
ava_1.test('typescript definition generator', function (t) {
    var schema = graphql_1.buildSchema(typeDefs);
    var generator = new javascript_client_1.JavascriptGenerator({
        schema: schema,
        internalTypes: [],
    });
    var javascript = generator.renderJavascript();
    t.snapshot(javascript);
});
//# sourceMappingURL=javascript-client.test.js.map