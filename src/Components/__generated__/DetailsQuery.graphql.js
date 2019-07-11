/**
 * @flow
 * @relayHash 9cb05aa5c815478f6b45fcbc8053ebf8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Details_product$ref = any;
export type ProductWhereUniqueInput = {|
  id?: ?string
|};
export type DetailsQueryVariables = {|
  ID: ProductWhereUniqueInput
|};
export type DetailsQueryResponse = {|
  +product: ?{|
    +$fragmentRefs: Details_product$ref
  |}
|};
export type DetailsQuery = {|
  variables: DetailsQueryVariables,
  response: DetailsQueryResponse,
|};
*/


/*
query DetailsQuery(
  $ID: ProductWhereUniqueInput!
) {
  product(where: $ID) {
    ...Details_product
    id
  }
}

fragment Details_product on Product {
  id
  title
  img
  price
  subTotal
  count
  company
  info
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "ID",
    "type": "ProductWhereUniqueInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "ID"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "product",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Product",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Details_product",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "product",
        "storageKey": null,
        "args": (v1/*: any*/),
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
  },
  "params": {
    "operationKind": "query",
    "name": "DetailsQuery",
    "id": null,
    "text": "query DetailsQuery(\n  $ID: ProductWhereUniqueInput!\n) {\n  product(where: $ID) {\n    ...Details_product\n    id\n  }\n}\n\nfragment Details_product on Product {\n  id\n  title\n  img\n  price\n  subTotal\n  count\n  company\n  info\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9ea03524fcce42c1883c8641c8d9f46a';
module.exports = node;
