export interface IOperation {
  id: string
  date: string
  value: number
  writingDateTime: Date
  editBtnLoading: boolean
  delBtnLoading: boolean
  total: number | null
}

export interface OperationState {
  operations: IOperation[]
  loading: boolean
  error: null | string
}

export enum OperationActionTypes {
  FETCH_OPERATIONS = 'FETCH_OPERATIONS',
  FETCH_OPERATIONS_SUCCESS = 'FETCH_OPERATIONS_SUCCESS',
  FETCH_OPERATIONS_ERROR = 'FETCH_OPERATIONS_ERROR',
  // ADD_OPERATION = 'ADD_OPERATION',
  // DEL_OPERATION = 'DEL_OPERATION',
  // OPERATIONS_LOADING = 'OPERATIONS_LOADING',
  // EDIT_BTN_LOADING = 'EDIT_BTN_LOADING_LOADING',
  // DEL_BTN_LOADING = 'DEL_BTN_LOADING',
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
// }
//
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
// }
//
// interface DelBtnLoading {
//   type: OperationActionTypes.DEL_BTN_LOADING
// }

export type OperationAction =
  FetchOperations
  | FetchOperationsSuccess
  | FetchOperationsError
  // | AddOperation
  // | DelOperation
  // | OperationsLoading
  // | EditBtnLoading
  // | DelBtnLoading
