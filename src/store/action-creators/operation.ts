import {Dispatch} from "redux";
import axios from "axios";
import {OperationAction, OperationActionTypes} from "../../types/operation";
import {URL_API} from "../../config";
import Operation, {IRawOperation} from "../../apapters/Operation";

interface IGetFetchOperationsSuccess {
  message: string
  operations: IRawOperation[]
}

interface IAddOperation {
  date: string
  value: number
}

interface IAddOperationSuccess {
  message: string
  operation: IRawOperation
  operations: IRawOperation[]
}

interface IDeleteOperationSuccess {
  message: string
  operation: IRawOperation
}

export const fetchOperations = () => {
  return async (dispatch: Dispatch<OperationAction>) => {
    try {
      dispatch({type: OperationActionTypes.FETCH_OPERATIONS})
      const response = await axios.get<IGetFetchOperationsSuccess>(`${URL_API}api/operations`)
      setTimeout(() => {
        dispatch({
          type: OperationActionTypes.FETCH_OPERATIONS_SUCCESS,
          payload: Operation.getAdoptedList(response.data.operations)
        })
      }, 200)
    } catch (e) {
      dispatch({
        type: OperationActionTypes.FETCH_OPERATIONS_ERROR,
        payload: `Error by operations loading: ${e}`
      })
    }
  }
}

export const addOperation = (data: IAddOperation) => {
  return async (dispatch: Dispatch<OperationAction>) => {
    try {
      dispatch({type: OperationActionTypes.ADD_OPERATION})
      const response = await axios.post<IAddOperationSuccess>(
        `${URL_API}api/operations`, data)
      setTimeout(() => {
        dispatch({
          type: OperationActionTypes.ADD_OPERATION_SUCCESS,
          payload: {
            operations: Operation.getAdoptedList(response.data.operations),
            operation: Operation.getAdoptedItem(response.data.operation)
          }
        })
      }, 200)
    } catch (e) {
      dispatch({
        type: OperationActionTypes.ADD_OPERATION_ERROR,
        payload: `Error while loading addition operation: ${e}`
      })
    }
  }
}

export const updateOperation = (id: string) => {
  return (dispatch: Dispatch<OperationAction>) => {
    dispatch({type: OperationActionTypes.EDIT_OPERATION, payload: id})
    axios.patch<IGetFetchOperationsSuccess>(`${URL_API}api/operations/${id}`, {data: {id}})
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
    axios.delete<IDeleteOperationSuccess>(`${URL_API}api/operations/${id}`, {data: {id}})
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
