/**
 * @flow
 * @relayHash 88a8c2d3601efc8dfc73bdd8b0f4f4e4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Details_product$ref = any;
export type ProductWhereUniqueInput = {|
  id?: ?string
|};
export type DetailsRefetchQueryVariables = {|
  productId: ProductWhereUniqueInput
|};
export type DetailsRefetchQueryResponse = {|
  +product: ?{|
    +$fragmentRefs: Details_product$ref
  |}
|};
export type DetailsRefetchQuery = {|
  variables: DetailsRefetchQueryVariables,
  response: DetailsRefetchQueryResponse,
|};
*/


/*
query DetailsRefetchQuery(
  $productId: ProductWhereUniqueInput!
) {
  product(where: $productId) {
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
    "name": "productId",
    "type": "ProductWhereUniqueInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "productId"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DetailsRefetchQuery",
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
    "name": "DetailsRefetchQuery",
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
    "name": "DetailsRefetchQuery",
    "id": null,
    "text": "query DetailsRefetchQuery(\n  $productId: ProductWhereUniqueInput!\n) {\n  product(where: $productId) {\n    ...Details_product\n    id\n  }\n}\n\nfragment Details_product on Product {\n  id\n  title\n  img\n  price\n  subTotal\n  count\n  company\n  info\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '610d41dc09ae373419b86d869223e0c0';
module.exports = node;
