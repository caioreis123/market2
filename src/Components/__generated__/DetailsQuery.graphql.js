/**
 * @flow
 * @relayHash 62da286fab151aaa0430bb6b8f6328c9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductWhereUniqueInput = {|
  id?: ?string
|};
export type DetailsQueryVariables = {|
  ID: ProductWhereUniqueInput
|};
export type DetailsQueryResponse = {|
  +product: ?{|
    +id: string,
    +title: string,
    +img: string,
    +price: number,
    +subTotal: number,
    +count: number,
    +company: string,
    +info: string,
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
    "kind": "LinkedField",
    "alias": null,
    "name": "product",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "where",
        "variableName": "ID"
      }
    ],
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "DetailsQuery",
    "id": null,
    "text": "query DetailsQuery(\n  $ID: ProductWhereUniqueInput!\n) {\n  product(where: $ID) {\n    id\n    title\n    img\n    price\n    subTotal\n    count\n    company\n    info\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2535caef710376c2e1da4c9c81baa55a';
module.exports = node;
