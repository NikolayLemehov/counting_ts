import {OperationAction, OperationActionTypes, OperationState} from "../../types/operation";

const initialState: OperationState = {
  operations: [],
  loading: false,
  error: null
}

export const operationReducer = (state: OperationState = initialState, action: OperationAction): OperationState => {
  switch (action.type) {
    case OperationActionTypes.FETCH_OPERATIONS:
      return {...state, loading: true, error: null, operations: []}
    case OperationActionTypes.FETCH_OPERATIONS_SUCCESS:
      return {...state, loading: false, error: null, operations: action.payload}
    case OperationActionTypes.FETCH_OPERATIONS_ERROR:
      return {...state, loading: false, error: action.payload, operations: []}
    default:
      return state
  }
}