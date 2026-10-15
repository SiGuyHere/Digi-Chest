import { CreateUserData, CreateUserVariables, UpdateUserData, UpdateUserVariables, DeleteUserData, GetUserData, ListUsersData, CreateItemData, CreateItemVariables, UpdateItemData, UpdateItemVariables, DeleteItemData, DeleteItemVariables, GetItemData, GetItemVariables, ListItemsData, CollectItemData, CollectItemVariables, RemoveItemFromInventoryData, RemoveItemFromInventoryVariables, MyInventoryData, LogLocationData, LogLocationVariables, DeleteLocationLogData, DeleteLocationLogVariables, GetItemLogsData, GetItemLogsVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useUpdateUser(options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables | void>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;
export function useUpdateUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables | void>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;

export function useDeleteUser(options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;
export function useDeleteUser(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;

export function useGetUser(options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;
export function useGetUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;

export function useCreateItem(options?: useDataConnectMutationOptions<CreateItemData, FirebaseError, CreateItemVariables>): UseDataConnectMutationResult<CreateItemData, CreateItemVariables>;
export function useCreateItem(dc: DataConnect, options?: useDataConnectMutationOptions<CreateItemData, FirebaseError, CreateItemVariables>): UseDataConnectMutationResult<CreateItemData, CreateItemVariables>;

export function useUpdateItem(options?: useDataConnectMutationOptions<UpdateItemData, FirebaseError, UpdateItemVariables>): UseDataConnectMutationResult<UpdateItemData, UpdateItemVariables>;
export function useUpdateItem(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateItemData, FirebaseError, UpdateItemVariables>): UseDataConnectMutationResult<UpdateItemData, UpdateItemVariables>;

export function useDeleteItem(options?: useDataConnectMutationOptions<DeleteItemData, FirebaseError, DeleteItemVariables>): UseDataConnectMutationResult<DeleteItemData, DeleteItemVariables>;
export function useDeleteItem(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteItemData, FirebaseError, DeleteItemVariables>): UseDataConnectMutationResult<DeleteItemData, DeleteItemVariables>;

export function useGetItem(vars: GetItemVariables, options?: useDataConnectQueryOptions<GetItemData>): UseDataConnectQueryResult<GetItemData, GetItemVariables>;
export function useGetItem(dc: DataConnect, vars: GetItemVariables, options?: useDataConnectQueryOptions<GetItemData>): UseDataConnectQueryResult<GetItemData, GetItemVariables>;

export function useListItems(options?: useDataConnectQueryOptions<ListItemsData>): UseDataConnectQueryResult<ListItemsData, undefined>;
export function useListItems(dc: DataConnect, options?: useDataConnectQueryOptions<ListItemsData>): UseDataConnectQueryResult<ListItemsData, undefined>;

export function useCollectItem(options?: useDataConnectMutationOptions<CollectItemData, FirebaseError, CollectItemVariables>): UseDataConnectMutationResult<CollectItemData, CollectItemVariables>;
export function useCollectItem(dc: DataConnect, options?: useDataConnectMutationOptions<CollectItemData, FirebaseError, CollectItemVariables>): UseDataConnectMutationResult<CollectItemData, CollectItemVariables>;

export function useRemoveItemFromInventory(options?: useDataConnectMutationOptions<RemoveItemFromInventoryData, FirebaseError, RemoveItemFromInventoryVariables>): UseDataConnectMutationResult<RemoveItemFromInventoryData, RemoveItemFromInventoryVariables>;
export function useRemoveItemFromInventory(dc: DataConnect, options?: useDataConnectMutationOptions<RemoveItemFromInventoryData, FirebaseError, RemoveItemFromInventoryVariables>): UseDataConnectMutationResult<RemoveItemFromInventoryData, RemoveItemFromInventoryVariables>;

export function useMyInventory(options?: useDataConnectQueryOptions<MyInventoryData>): UseDataConnectQueryResult<MyInventoryData, undefined>;
export function useMyInventory(dc: DataConnect, options?: useDataConnectQueryOptions<MyInventoryData>): UseDataConnectQueryResult<MyInventoryData, undefined>;

export function useLogLocation(options?: useDataConnectMutationOptions<LogLocationData, FirebaseError, LogLocationVariables>): UseDataConnectMutationResult<LogLocationData, LogLocationVariables>;
export function useLogLocation(dc: DataConnect, options?: useDataConnectMutationOptions<LogLocationData, FirebaseError, LogLocationVariables>): UseDataConnectMutationResult<LogLocationData, LogLocationVariables>;

export function useDeleteLocationLog(options?: useDataConnectMutationOptions<DeleteLocationLogData, FirebaseError, DeleteLocationLogVariables>): UseDataConnectMutationResult<DeleteLocationLogData, DeleteLocationLogVariables>;
export function useDeleteLocationLog(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteLocationLogData, FirebaseError, DeleteLocationLogVariables>): UseDataConnectMutationResult<DeleteLocationLogData, DeleteLocationLogVariables>;

export function useGetItemLogs(vars: GetItemLogsVariables, options?: useDataConnectQueryOptions<GetItemLogsData>): UseDataConnectQueryResult<GetItemLogsData, GetItemLogsVariables>;
export function useGetItemLogs(dc: DataConnect, vars: GetItemLogsVariables, options?: useDataConnectQueryOptions<GetItemLogsData>): UseDataConnectQueryResult<GetItemLogsData, GetItemLogsVariables>;
