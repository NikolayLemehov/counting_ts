import {OperationAction, OperationActionTypes, IOperationState} from "../../types/operation";

const initialState: IOperationState = {
  operations: [],
  loading: false,
  error: null
}

export const operationReducer = (state: IOperationState = initialState, action: OperationAction): IOperationState => {
  switch (action.type) {
    case OperationActionTypes.FETCH_OPERATIONS:
      return {...state, loading: true, error: null, operations: []}
    case OperationActionTypes.FETCH_OPERATIONS_SUCCESS:
      return {...state, loading: false, error: null, operations: action.payload}
    case OperationActionTypes.FETCH_OPERATIONS_ERROR:
      return {...state, loading: false, error: action.payload, operations: []}

    // case OperationActionTypes.ADD_OPERATION: return addOperationCase(state, action.payload)
    // case OperationActionTypes.ADD_OPERATION_SUCCESS: return addOperationSuccessCase(state, action.payload)

    case OperationActionTypes.EDIT_OPERATION: return editOperationCase(state, action.payload)
    case OperationActionTypes.EDIT_OPERATION_SUCCESS:
      return {...state, loading: false, error: null, operations: action.payload}
    case OperationActionTypes.EDIT_OPERATION_ERROR:
      return {...state, loading: false, error: `Error while loading edition operation: ${action.payload}`}

    case OperationActionTypes.DELETE_OPERATION: return deleteOperationCase(state, action.payload)
    case OperationActionTypes.DELETE_OPERATION_SUCCESS:
      return {...state, loading: false, error: null, operations: [...state.operations].filter(it => it.id !== action.payload.id)}
    case OperationActionTypes.DELETE_OPERATION_ERROR: return deleteOperationErrorCase(state, action.payload)
    case OperationActionTypes.RESET_ERROR:
      return {...state, error: null}
    default: return state
  }
}

// function addOperationCase(state: IOperationState, payload: IOperation): IOperationState {
//   const operations = [...state.operations]
//   operations[operations.indexOf(payload)].editBtnLoading = true
//   return {...state, loading: true, error: null, operations}
// }
//
// function addOperationSuccessCase(state: IOperationState, payload: IOperation): IOperationState {
//   const operations = [...state.operations]
//   operations[operations.indexOf(payload)].editBtnLoading = false
//   return {...state, loading: false, error: null, operations}
// }

function editOperationCase(state: IOperationState, payload: string): IOperationState {
  const operations = [...state.operations]
  const operation = operations.find(operation => operation.id === payload)
  if (operation) operation.editBtnLoading = true
  return {...state, operations}
}

function deleteOperationCase(state: IOperationState, payload: string): IOperationState {
  const operations = [...state.operations]
  const operation = operations.find(operation => operation.id === payload)
  if (operation) operation.delBtnLoading = true
  return {...state, operations}
}

function deleteOperationErrorCase(state: IOperationState, payload: { id: string, error: string }): IOperationState {
  const operations = [...state.operations]
  const operation = operations.find(operation => operation.id === payload.id)
  if (operation) operation.delBtnLoading = false
  return {...state, error: `Removal was not success: ${payload.error}`, operations}
}
