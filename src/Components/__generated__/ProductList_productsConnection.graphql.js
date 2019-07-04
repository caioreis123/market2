/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductList_productsConnection$ref: FragmentReference;
declare export opaque type ProductList_productsConnection$fragmentType: ProductList_productsConnection$ref;
export type ProductList_productsConnection = {|
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
  |}>,
  +$refType: ProductList_productsConnection$ref,
|};
export type ProductList_productsConnection$data = ProductList_productsConnection;
export type ProductList_productsConnection$key = {
  +$data?: ProductList_productsConnection$data,
  +$fragmentRefs: ProductList_productsConnection$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProductList_productsConnection",
  "type": "ProductConnection",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = 'e3c8b10e5d18df8dc1aabfa61bee003e';
module.exports = node;
