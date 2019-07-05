/**
 * @flow
 * @relayHash 16df35598a201842d4e0d83d4a9fb588
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Details_product$ref = any;
type ProductList_productsConnection$ref = any;
export type ProductWhereUniqueInput = {|
  id?: ?string
|};
export type AppQueryVariables = {|
  ID: ProductWhereUniqueInput
|};
export type AppQueryResponse = {|
  +product: ?{|
    +$fragmentRefs: Details_product$ref
  |},
  +productsConnection: {|
    +$fragmentRefs: ProductList_productsConnection$ref
  |},
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery(
  $ID: ProductWhereUniqueInput!
) {
  product(where: $ID) {
    ...Details_product
    id
  }
  productsConnection(first: 100) {
    ...ProductList_productsConnection
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

fragment ProductList_productsConnection on ProductConnection {
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
],
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
],
v3 = [
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "productsConnection",
        "storageKey": "productsConnection(first:100)",
        "args": (v2/*: any*/),
        "concreteType": "ProductConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProductList_productsConnection",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
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
        "selections": (v3/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "productsConnection",
        "storageKey": "productsConnection(first:100)",
        "args": (v2/*: any*/),
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
                "selections": (v3/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery(\n  $ID: ProductWhereUniqueInput!\n) {\n  product(where: $ID) {\n    ...Details_product\n    id\n  }\n  productsConnection(first: 100) {\n    ...ProductList_productsConnection\n  }\n}\n\nfragment Details_product on Product {\n  id\n  title\n  img\n  price\n  subTotal\n  count\n  company\n  info\n}\n\nfragment ProductList_productsConnection on ProductConnection {\n  edges {\n    node {\n      id\n      title\n      img\n      price\n      subTotal\n      count\n      company\n      info\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'da96979824b70f4a78eb07ab72668543';
module.exports = node;
