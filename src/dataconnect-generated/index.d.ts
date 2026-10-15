import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CollectItemData {
  inventory_insert: Inventory_Key;
}

export interface CollectItemVariables {
  itemId: UUIDString;
}

export interface CreateItemData {
  item_insert: Item_Key;
}

export interface CreateItemVariables {
  name: string;
  latitude: number;
  longitude: number;
  rarity: string;
  description?: string | null;
  imageUrl?: string | null;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  username: string;
  email: string;
  avatarUrl?: string | null;
  bio?: string | null;
}

export interface DeleteItemData {
  item_delete?: Item_Key | null;
}

export interface DeleteItemVariables {
  id: UUIDString;
}

export interface DeleteLocationLogData {
  locationLog_delete?: LocationLog_Key | null;
}

export interface DeleteLocationLogVariables {
  id: UUIDString;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface GetItemData {
  item?: {
    name: string;
    rarity: string;
    description?: string | null;
  };
}

export interface GetItemLogsData {
  locationLogs: ({
    latitude: number;
    longitude: number;
  })[];
}

export interface GetItemLogsVariables {
  itemId: UUIDString;
}

export interface GetItemVariables {
  id: UUIDString;
}

export interface GetUserData {
  user?: {
    username: string;
    email: string;
    avatarUrl?: string | null;
    bio?: string | null;
  };
}

export interface Inventory_Key {
  id: UUIDString;
  __typename?: 'Inventory_Key';
}

export interface Item_Key {
  id: UUIDString;
  __typename?: 'Item_Key';
}

export interface ListItemsData {
  items: ({
    id: UUIDString;
    name: string;
  } & Item_Key)[];
}

export interface ListUsersData {
  users: ({
    id: UUIDString;
    username: string;
  } & User_Key)[];
}

export interface LocationLog_Key {
  id: UUIDString;
  __typename?: 'LocationLog_Key';
}

export interface LogLocationData {
  locationLog_insert: LocationLog_Key;
}

export interface LogLocationVariables {
  itemId: UUIDString;
  latitude: number;
  longitude: number;
}

export interface MyInventoryData {
  inventories: ({
    item: {
      name: string;
      rarity: string;
    };
    dateCollected: TimestampString;
  })[];
}

export interface RemoveItemFromInventoryData {
  inventory_delete?: Inventory_Key | null;
}

export interface RemoveItemFromInventoryVariables {
  id: UUIDString;
}

export interface UpdateItemData {
  item_update?: Item_Key | null;
}

export interface UpdateItemVariables {
  id: UUIDString;
  description?: string | null;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface UpdateUserVariables {
  username?: string | null;
  email?: string | null;
  avatarUrl?: string | null;
  bio?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(vars?: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;
export function updateUser(dc: DataConnect, vars?: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(): MutationPromise<DeleteUserData, undefined>;
export function deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface CreateItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateItemVariables): MutationRef<CreateItemData, CreateItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateItemVariables): MutationRef<CreateItemData, CreateItemVariables>;
  operationName: string;
}
export const createItemRef: CreateItemRef;

export function createItem(vars: CreateItemVariables): MutationPromise<CreateItemData, CreateItemVariables>;
export function createItem(dc: DataConnect, vars: CreateItemVariables): MutationPromise<CreateItemData, CreateItemVariables>;

interface UpdateItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateItemVariables): MutationRef<UpdateItemData, UpdateItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateItemVariables): MutationRef<UpdateItemData, UpdateItemVariables>;
  operationName: string;
}
export const updateItemRef: UpdateItemRef;

export function updateItem(vars: UpdateItemVariables): MutationPromise<UpdateItemData, UpdateItemVariables>;
export function updateItem(dc: DataConnect, vars: UpdateItemVariables): MutationPromise<UpdateItemData, UpdateItemVariables>;

interface DeleteItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteItemVariables): MutationRef<DeleteItemData, DeleteItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteItemVariables): MutationRef<DeleteItemData, DeleteItemVariables>;
  operationName: string;
}
export const deleteItemRef: DeleteItemRef;

export function deleteItem(vars: DeleteItemVariables): MutationPromise<DeleteItemData, DeleteItemVariables>;
export function deleteItem(dc: DataConnect, vars: DeleteItemVariables): MutationPromise<DeleteItemData, DeleteItemVariables>;

interface GetItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetItemVariables): QueryRef<GetItemData, GetItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetItemVariables): QueryRef<GetItemData, GetItemVariables>;
  operationName: string;
}
export const getItemRef: GetItemRef;

export function getItem(vars: GetItemVariables, options?: ExecuteQueryOptions): QueryPromise<GetItemData, GetItemVariables>;
export function getItem(dc: DataConnect, vars: GetItemVariables, options?: ExecuteQueryOptions): QueryPromise<GetItemData, GetItemVariables>;

interface ListItemsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListItemsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListItemsData, undefined>;
  operationName: string;
}
export const listItemsRef: ListItemsRef;

export function listItems(options?: ExecuteQueryOptions): QueryPromise<ListItemsData, undefined>;
export function listItems(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListItemsData, undefined>;

interface CollectItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CollectItemVariables): MutationRef<CollectItemData, CollectItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CollectItemVariables): MutationRef<CollectItemData, CollectItemVariables>;
  operationName: string;
}
export const collectItemRef: CollectItemRef;

export function collectItem(vars: CollectItemVariables): MutationPromise<CollectItemData, CollectItemVariables>;
export function collectItem(dc: DataConnect, vars: CollectItemVariables): MutationPromise<CollectItemData, CollectItemVariables>;

interface RemoveItemFromInventoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemoveItemFromInventoryVariables): MutationRef<RemoveItemFromInventoryData, RemoveItemFromInventoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RemoveItemFromInventoryVariables): MutationRef<RemoveItemFromInventoryData, RemoveItemFromInventoryVariables>;
  operationName: string;
}
export const removeItemFromInventoryRef: RemoveItemFromInventoryRef;

export function removeItemFromInventory(vars: RemoveItemFromInventoryVariables): MutationPromise<RemoveItemFromInventoryData, RemoveItemFromInventoryVariables>;
export function removeItemFromInventory(dc: DataConnect, vars: RemoveItemFromInventoryVariables): MutationPromise<RemoveItemFromInventoryData, RemoveItemFromInventoryVariables>;

interface MyInventoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<MyInventoryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<MyInventoryData, undefined>;
  operationName: string;
}
export const myInventoryRef: MyInventoryRef;

export function myInventory(options?: ExecuteQueryOptions): QueryPromise<MyInventoryData, undefined>;
export function myInventory(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<MyInventoryData, undefined>;

interface LogLocationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: LogLocationVariables): MutationRef<LogLocationData, LogLocationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: LogLocationVariables): MutationRef<LogLocationData, LogLocationVariables>;
  operationName: string;
}
export const logLocationRef: LogLocationRef;

export function logLocation(vars: LogLocationVariables): MutationPromise<LogLocationData, LogLocationVariables>;
export function logLocation(dc: DataConnect, vars: LogLocationVariables): MutationPromise<LogLocationData, LogLocationVariables>;

interface DeleteLocationLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteLocationLogVariables): MutationRef<DeleteLocationLogData, DeleteLocationLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteLocationLogVariables): MutationRef<DeleteLocationLogData, DeleteLocationLogVariables>;
  operationName: string;
}
export const deleteLocationLogRef: DeleteLocationLogRef;

export function deleteLocationLog(vars: DeleteLocationLogVariables): MutationPromise<DeleteLocationLogData, DeleteLocationLogVariables>;
export function deleteLocationLog(dc: DataConnect, vars: DeleteLocationLogVariables): MutationPromise<DeleteLocationLogData, DeleteLocationLogVariables>;

interface GetItemLogsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetItemLogsVariables): QueryRef<GetItemLogsData, GetItemLogsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetItemLogsVariables): QueryRef<GetItemLogsData, GetItemLogsVariables>;
  operationName: string;
}
export const getItemLogsRef: GetItemLogsRef;

export function getItemLogs(vars: GetItemLogsVariables, options?: ExecuteQueryOptions): QueryPromise<GetItemLogsData, GetItemLogsVariables>;
export function getItemLogs(dc: DataConnect, vars: GetItemLogsVariables, options?: ExecuteQueryOptions): QueryPromise<GetItemLogsData, GetItemLogsVariables>;

