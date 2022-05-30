export interface IOperation {
  id: string
  date: string
  value: number
  writingDateTime: Date
  editBtnLoading: boolean
  delBtnLoading: boolean
  total: number | null
}

export interface IOperationState {
  operations: IOperation[]
  loading: boolean
  error: null | string
}

export enum OperationActionTypes {
  FETCH_OPERATIONS = 'FETCH_OPERATIONS',
  FETCH_OPERATIONS_SUCCESS = 'FETCH_OPERATIONS_SUCCESS',
  FETCH_OPERATIONS_ERROR = 'FETCH_OPERATIONS_ERROR',
  // ADD_OPERATION = 'ADD_OPERATION',
  // ADD_OPERATION_SUCCESS = 'ADD_OPERATION_SUCCESS',
  // ADD_OPERATION_ERROR = 'ADD_OPERATION_ERROR',
  // DEL_OPERATION = 'DEL_OPERATION',
  // OPERATIONS_LOADING = 'OPERATIONS_LOADING',
  // EDIT_BTN_LOADING = 'EDIT_BTN_LOADING_LOADING',
  EDIT_OPERATION = 'EDIT_OPERATION',
  EDIT_OPERATION_SUCCESS = 'EDIT_OPERATION_SUCCESS',
  EDIT_OPERATION_ERROR = 'EDIT_OPERATION_ERROR',
  DELETE_OPERATION = 'DELETE_OPERATION',
  DELETE_OPERATION_SUCCESS = 'DELETE_OPERATION_SUCCESS',
  DELETE_OPERATION_ERROR = 'DELETE_OPERATION_ERROR',
  RESET_ERROR = 'RESET_ERROR',
}

interface FetchOperations {
  type: OperationActionTypes.FETCH_OPERATIONS
}

interface FetchOperationsSuccess {
  type: OperationActionTypes.FETCH_OPERATIONS_SUCCESS
  payload: IOperation[]
}

interface FetchOperationsError {
  type: OperationActionTypes.FETCH_OPERATIONS_ERROR
  payload: string
}

// interface AddOperation {
//   type: OperationActionTypes.ADD_OPERATION
//   payload: IOperation
// }
//
// interface AddOperationSuccess {
//   type: OperationActionTypes.ADD_OPERATION_SUCCESS
//   payload: IOperation
// }

// interface AddOperationError {
//   type: OperationActionTypes.ADD_OPERATION
// }

// interface DelOperation {
//   type: OperationActionTypes.DEL_OPERATION
// }
//
// interface OperationsLoading {
//   type: OperationActionTypes.OPERATIONS_LOADING
// }
//
// interface EditBtnLoading {
//   type: OperationActionTypes.EDIT_BTN_LOADING
//   payload: {operation: IOperation, loading: boolean}
// }
interface EditOperation {
  type: OperationActionTypes.EDIT_OPERATION
  payload: string
}
interface EditOperationSuccess {
  type: OperationActionTypes.EDIT_OPERATION_SUCCESS
  payload: IOperation[]
}
interface EditOperationError {
  type: OperationActionTypes.EDIT_OPERATION_ERROR
  payload: string
}

interface DeleteOperation {
  type: OperationActionTypes.DELETE_OPERATION
  payload: string
}

interface DeleteOperationSuccess {
  type: OperationActionTypes.DELETE_OPERATION_SUCCESS
  payload: IOperation
}

interface DeleteOperationError {
  type: OperationActionTypes.DELETE_OPERATION_ERROR
  payload: { error: string, id: string }
}

interface ResetError {
  type: OperationActionTypes.RESET_ERROR
}

export type OperationAction =
  FetchOperations
  | FetchOperationsSuccess
  | FetchOperationsError
  // | AddOperation
  // | AddOperationSuccess
  // | AddOperationError
  // | DelOperation
  // | OperationsLoading
  // | EditBtnLoading
  | EditOperation
  | EditOperationSuccess
  | EditOperationError
  | DeleteOperation
  | DeleteOperationSuccess
  | DeleteOperationError
  | ResetError
