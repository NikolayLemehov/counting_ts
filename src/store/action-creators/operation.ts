import {Dispatch} from "redux";
import axios from "axios";
import {OperationAction, OperationActionTypes} from "../../types/operation";
import {URL_API} from "../../config";
import Operation, {IRawOperation} from "../../apapters/Operation";

interface IGetFetchOperations {
  message: string
  operations: IRawOperation[]
}

interface IDeleteOperationOperation {
  message: string
  operation: IRawOperation
}

export const fetchOperations = () => {
  return async (dispatch: Dispatch<OperationAction>) => {
    try {
      dispatch({type: OperationActionTypes.FETCH_OPERATIONS})
      const response = await axios.get<IGetFetchOperations>(`${URL_API}api/operation/list`)
      setTimeout(() => {
        dispatch({
          type: OperationActionTypes.FETCH_OPERATIONS_SUCCESS,
          payload: Operation.getAdoptedList(response.data.operations)
        })
      }, 500)
    } catch (e) {
      dispatch({
        type: OperationActionTypes.FETCH_OPERATIONS_ERROR,
        payload: 'Error by operation loading'
      })
    }
  }
}

// export const addOperation = (data: IOperation) => {
//   return async (dispatch: Dispatch<OperationAction>) => {
//     try {
//       dispatch({type: OperationActionTypes.ADD_OPERATION, payload: data})
//       const response = await axios.post<IGetFetchOperations>(
//         `${URL_API}api/operation/item`, Operation.getRawItem(data))
//       setTimeout(() => {
//         dispatch({
//           type: OperationActionTypes.FETCH_OPERATIONS_SUCCESS,
//           payload: Operation.getAdoptedList(response.data.operations)
//         })
//         dispatch({type: OperationActionTypes.ADD_OPERATION_SUCCESS, payload: data})
//       }, 500)
//     } catch (e) {
//       dispatch({
//         type: OperationActionTypes.FETCH_OPERATIONS_ERROR,
//         payload: 'Error by operation loading with new item'
//       })
//     }
//   }
// }

export const updateOperation = (id: string) => {
  return (dispatch: Dispatch<OperationAction>) => {
    dispatch({type: OperationActionTypes.EDIT_OPERATION, payload: id})
    axios.patch<IGetFetchOperations>(`${URL_API}api/operation/item/id`, {data: {id}})
      .then(res => {
        dispatch({
          type: OperationActionTypes.EDIT_OPERATION_SUCCESS,
          payload: Operation.getAdoptedList(res.data.operations)
        })
      })
      .catch(e => {
        dispatch({type: OperationActionTypes.EDIT_OPERATION_ERROR, payload: e})
        console.log('error', e)
      })
  }
}

export const deleteOperation = (id: string) => {
  return (dispatch: Dispatch<OperationAction>) => {
    dispatch({type: OperationActionTypes.DELETE_OPERATION, payload: id})
    axios.delete<IDeleteOperationOperation>(`${URL_API}api/operation/id`, {data: {id}})
      .then(res => {
        dispatch({
          type: OperationActionTypes.DELETE_OPERATION_SUCCESS,
          payload: Operation.getAdoptedItem(res.data.operation)
        })
      })
      .catch(e => {
        dispatch({type: OperationActionTypes.DELETE_OPERATION_ERROR, payload: {error: e, id: id}})
        console.log('error', e)
      })
  }
}

export const resetError = () => ({type: OperationActionTypes.RESET_ERROR})
