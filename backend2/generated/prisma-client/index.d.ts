// Code generated by Prisma (prisma@1.32.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  product: (where?: ProductWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  product: (where: ProductWhereUniqueInput) => ProductNullablePromise;
  products: (args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Product>;
  productsConnection: (args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProductConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createProduct: (data: ProductCreateInput) => ProductPromise;
  updateProduct: (args: {
    data: ProductUpdateInput;
    where: ProductWhereUniqueInput;
  }) => ProductPromise;
  updateManyProducts: (args: {
    data: ProductUpdateManyMutationInput;
    where?: ProductWhereInput;
  }) => BatchPayloadPromise;
  upsertProduct: (args: {
    where: ProductWhereUniqueInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
  }) => ProductPromise;
  deleteProduct: (where: ProductWhereUniqueInput) => ProductPromise;
  deleteManyProducts: (where?: ProductWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  product: (
    where?: ProductSubscriptionWhereInput
  ) => ProductSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ProductOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "img_ASC"
  | "img_DESC"
  | "company_ASC"
  | "company_DESC"
  | "info_ASC"
  | "info_DESC"
  | "price_ASC"
  | "price_DESC"
  | "total_ASC"
  | "total_DESC"
  | "count_ASC"
  | "count_DESC"
  | "stock_ASC"
  | "stock_DESC"
  | "inCart_ASC"
  | "inCart_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ProductWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  img?: Maybe<String>;
  img_not?: Maybe<String>;
  img_in?: Maybe<String[] | String>;
  img_not_in?: Maybe<String[] | String>;
  img_lt?: Maybe<String>;
  img_lte?: Maybe<String>;
  img_gt?: Maybe<String>;
  img_gte?: Maybe<String>;
  img_contains?: Maybe<String>;
  img_not_contains?: Maybe<String>;
  img_starts_with?: Maybe<String>;
  img_not_starts_with?: Maybe<String>;
  img_ends_with?: Maybe<String>;
  img_not_ends_with?: Maybe<String>;
  company?: Maybe<String>;
  company_not?: Maybe<String>;
  company_in?: Maybe<String[] | String>;
  company_not_in?: Maybe<String[] | String>;
  company_lt?: Maybe<String>;
  company_lte?: Maybe<String>;
  company_gt?: Maybe<String>;
  company_gte?: Maybe<String>;
  company_contains?: Maybe<String>;
  company_not_contains?: Maybe<String>;
  company_starts_with?: Maybe<String>;
  company_not_starts_with?: Maybe<String>;
  company_ends_with?: Maybe<String>;
  company_not_ends_with?: Maybe<String>;
  info?: Maybe<String>;
  info_not?: Maybe<String>;
  info_in?: Maybe<String[] | String>;
  info_not_in?: Maybe<String[] | String>;
  info_lt?: Maybe<String>;
  info_lte?: Maybe<String>;
  info_gt?: Maybe<String>;
  info_gte?: Maybe<String>;
  info_contains?: Maybe<String>;
  info_not_contains?: Maybe<String>;
  info_starts_with?: Maybe<String>;
  info_not_starts_with?: Maybe<String>;
  info_ends_with?: Maybe<String>;
  info_not_ends_with?: Maybe<String>;
  price?: Maybe<Float>;
  price_not?: Maybe<Float>;
  price_in?: Maybe<Float[] | Float>;
  price_not_in?: Maybe<Float[] | Float>;
  price_lt?: Maybe<Float>;
  price_lte?: Maybe<Float>;
  price_gt?: Maybe<Float>;
  price_gte?: Maybe<Float>;
  total?: Maybe<Float>;
  total_not?: Maybe<Float>;
  total_in?: Maybe<Float[] | Float>;
  total_not_in?: Maybe<Float[] | Float>;
  total_lt?: Maybe<Float>;
  total_lte?: Maybe<Float>;
  total_gt?: Maybe<Float>;
  total_gte?: Maybe<Float>;
  count?: Maybe<Int>;
  count_not?: Maybe<Int>;
  count_in?: Maybe<Int[] | Int>;
  count_not_in?: Maybe<Int[] | Int>;
  count_lt?: Maybe<Int>;
  count_lte?: Maybe<Int>;
  count_gt?: Maybe<Int>;
  count_gte?: Maybe<Int>;
  stock?: Maybe<Int>;
  stock_not?: Maybe<Int>;
  stock_in?: Maybe<Int[] | Int>;
  stock_not_in?: Maybe<Int[] | Int>;
  stock_lt?: Maybe<Int>;
  stock_lte?: Maybe<Int>;
  stock_gt?: Maybe<Int>;
  stock_gte?: Maybe<Int>;
  inCart?: Maybe<Boolean>;
  inCart_not?: Maybe<Boolean>;
  AND?: Maybe<ProductWhereInput[] | ProductWhereInput>;
  OR?: Maybe<ProductWhereInput[] | ProductWhereInput>;
  NOT?: Maybe<ProductWhereInput[] | ProductWhereInput>;
}

export interface ProductCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  img: String;
  company: String;
  info: String;
  price: Float;
  total: Float;
  count: Int;
  stock: Int;
  inCart: Boolean;
}

export interface ProductUpdateInput {
  title?: Maybe<String>;
  img?: Maybe<String>;
  company?: Maybe<String>;
  info?: Maybe<String>;
  price?: Maybe<Float>;
  total?: Maybe<Float>;
  count?: Maybe<Int>;
  stock?: Maybe<Int>;
  inCart?: Maybe<Boolean>;
}

export interface ProductUpdateManyMutationInput {
  title?: Maybe<String>;
  img?: Maybe<String>;
  company?: Maybe<String>;
  info?: Maybe<String>;
  price?: Maybe<Float>;
  total?: Maybe<Float>;
  count?: Maybe<Int>;
  stock?: Maybe<Int>;
  inCart?: Maybe<Boolean>;
}

export interface ProductSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProductWhereInput>;
  AND?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
  OR?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
  NOT?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
}

export type ProductWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface ProductEdge {
  node: Product;
  cursor: String;
}

export interface ProductEdgePromise extends Promise<ProductEdge>, Fragmentable {
  node: <T = ProductPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProductEdgeSubscription
  extends Promise<AsyncIterator<ProductEdge>>,
    Fragmentable {
  node: <T = ProductSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ProductPreviousValues {
  id: ID_Output;
  title: String;
  img: String;
  company: String;
  info: String;
  price: Float;
  total: Float;
  count: Int;
  stock: Int;
  inCart: Boolean;
}

export interface ProductPreviousValuesPromise
  extends Promise<ProductPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  img: () => Promise<String>;
  company: () => Promise<String>;
  info: () => Promise<String>;
  price: () => Promise<Float>;
  total: () => Promise<Float>;
  count: () => Promise<Int>;
  stock: () => Promise<Int>;
  inCart: () => Promise<Boolean>;
}

export interface ProductPreviousValuesSubscription
  extends Promise<AsyncIterator<ProductPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  img: () => Promise<AsyncIterator<String>>;
  company: () => Promise<AsyncIterator<String>>;
  info: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Float>>;
  total: () => Promise<AsyncIterator<Float>>;
  count: () => Promise<AsyncIterator<Int>>;
  stock: () => Promise<AsyncIterator<Int>>;
  inCart: () => Promise<AsyncIterator<Boolean>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateProduct {
  count: Int;
}

export interface AggregateProductPromise
  extends Promise<AggregateProduct>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProductSubscription
  extends Promise<AsyncIterator<AggregateProduct>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProductSubscriptionPayload {
  mutation: MutationType;
  node: Product;
  updatedFields: String[];
  previousValues: ProductPreviousValues;
}

export interface ProductSubscriptionPayloadPromise
  extends Promise<ProductSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProductPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProductPreviousValuesPromise>() => T;
}

export interface ProductSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProductSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProductSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProductPreviousValuesSubscription>() => T;
}

export interface Product {
  id: ID_Output;
  title: String;
  img: String;
  company: String;
  info: String;
  price: Float;
  total: Float;
  count: Int;
  stock: Int;
  inCart: Boolean;
}

export interface ProductPromise extends Promise<Product>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  img: () => Promise<String>;
  company: () => Promise<String>;
  info: () => Promise<String>;
  price: () => Promise<Float>;
  total: () => Promise<Float>;
  count: () => Promise<Int>;
  stock: () => Promise<Int>;
  inCart: () => Promise<Boolean>;
}

export interface ProductSubscription
  extends Promise<AsyncIterator<Product>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  img: () => Promise<AsyncIterator<String>>;
  company: () => Promise<AsyncIterator<String>>;
  info: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Float>>;
  total: () => Promise<AsyncIterator<Float>>;
  count: () => Promise<AsyncIterator<Int>>;
  stock: () => Promise<AsyncIterator<Int>>;
  inCart: () => Promise<AsyncIterator<Boolean>>;
}

export interface ProductNullablePromise
  extends Promise<Product | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  img: () => Promise<String>;
  company: () => Promise<String>;
  info: () => Promise<String>;
  price: () => Promise<Float>;
  total: () => Promise<Float>;
  count: () => Promise<Int>;
  stock: () => Promise<Int>;
  inCart: () => Promise<Boolean>;
}

export interface ProductConnection {
  pageInfo: PageInfo;
  edges: ProductEdge[];
}

export interface ProductConnectionPromise
  extends Promise<ProductConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProductEdge>>() => T;
  aggregate: <T = AggregateProductPromise>() => T;
}

export interface ProductConnectionSubscription
  extends Promise<AsyncIterator<ProductConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProductEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProductSubscription>() => T;
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Product",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
