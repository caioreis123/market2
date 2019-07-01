/**
 * @flow
 * @relayHash 5523fd80f14c6198f5fb2259bd74c491
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Details_product$ref = any;
type ProductList_products$ref = any;
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
  +products: $ReadOnlyArray<?{|
    +$fragmentRefs: ProductList_products$ref
  |}>,
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
  products {
    ...ProductList_products
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

fragment ProductList_products on Product {
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
],
v2 = [
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
        "name": "products",
        "storageKey": null,
        "args": null,
        "concreteType": "Product",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProductList_products",
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
        "selections": (v2/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "products",
        "storageKey": null,
        "args": null,
        "concreteType": "Product",
        "plural": true,
        "selections": (v2/*: any*/)
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery(\n  $ID: ProductWhereUniqueInput!\n) {\n  product(where: $ID) {\n    ...Details_product\n    id\n  }\n  products {\n    ...ProductList_products\n    id\n  }\n}\n\nfragment Details_product on Product {\n  id\n  title\n  img\n  price\n  subTotal\n  count\n  company\n  info\n}\n\nfragment ProductList_products on Product {\n  id\n  title\n  img\n  price\n  subTotal\n  count\n  company\n  info\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '88d1a682a57b0c7a3426d865a5810d51';
module.exports = node;
