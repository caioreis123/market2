/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductList_products$ref: FragmentReference;
declare export opaque type ProductList_products$fragmentType: ProductList_products$ref;
export type ProductList_products = {|
  +id: string,
  +title: string,
  +img: string,
  +price: number,
  +subTotal: number,
  +count: number,
  +company: string,
  +info: string,
  +$refType: ProductList_products$ref,
|};
export type ProductList_products$data = ProductList_products;
export type ProductList_products$key = {
  +$data?: ProductList_products$data,
  +$fragmentRefs: ProductList_products$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProductList_products",
  "type": "Product",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '7ed7b56c28673509fb6c9c7e34737195';
module.exports = node;
