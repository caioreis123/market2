/**
 * @flow
 * @relayHash f326be9bb5f28db6a08f61eaad3c4449
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductWhereUniqueInput = {|
  id?: ?string
|};
export type ProductUpdateInput = {|
  title?: ?string,
  img?: ?string,
  company?: ?string,
  info?: ?string,
  price?: ?number,
  subTotal?: ?number,
  count?: ?number,
  stock?: ?number,
  inCart?: ?boolean,
|};
export type ContextMutationVariables = {|
  ID: ProductWhereUniqueInput,
  changedData: ProductUpdateInput,
|};
export type ContextMutationResponse = {|
  +updateProduct: ?{|
    +id: string,
    +title: string,
    +stock: number,
  |}
|};
export type ContextMutation = {|
  variables: ContextMutationVariables,
  response: ContextMutationResponse,
|};
*/


/*
mutation ContextMutation(
  $ID: ProductWhereUniqueInput!
  $changedData: ProductUpdateInput!
) {
  updateProduct(where: $ID, data: $changedData) {
    id
    title
    stock
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
  },
  {
    "kind": "LocalArgument",
    "name": "changedData",
    "type": "ProductUpdateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateProduct",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "changedData"
      },
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
        "name": "stock",
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
    "name": "ContextMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ContextMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ContextMutation",
    "id": null,
    "text": "mutation ContextMutation(\n  $ID: ProductWhereUniqueInput!\n  $changedData: ProductUpdateInput!\n) {\n  updateProduct(where: $ID, data: $changedData) {\n    id\n    title\n    stock\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5718df91ff1429085295c86ae84ae42f';
module.exports = node;
