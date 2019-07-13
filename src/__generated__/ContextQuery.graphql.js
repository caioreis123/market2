/**
 * @flow
 * @relayHash 952eb1f6bc7679c712f3b41003ea1bc9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ContextQueryVariables = {||};
export type ContextQueryResponse = {|
  +productsConnection: {|
    +edges: $ReadOnlyArray<?{|
      +node: {|
        +id: string,
        +title: string,
        +img: string,
        +price: number,
        +subTotal: number,
        +count: number,
        +company: string,
        +info: string,
      |}
    |}>
  |}
|};
export type ContextQuery = {|
  variables: ContextQueryVariables,
  response: ContextQueryResponse,
|};
*/


/*
query ContextQuery {
  productsConnection {
    edges {
      node {
        id
        title
        img
        price
        subTotal
        count
        company
        info
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "productsConnection",
    "storageKey": null,
    "args": null,
    "concreteType": "ProductConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "ProductEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Product",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "img",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "price",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "subTotal",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "count",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "company",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "info",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ContextQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ContextQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ContextQuery",
    "id": null,
    "text": "query ContextQuery {\n  productsConnection {\n    edges {\n      node {\n        id\n        title\n        img\n        price\n        subTotal\n        count\n        company\n        info\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2955cb402401dd2c030bd2ba0e970400';
module.exports = node;
