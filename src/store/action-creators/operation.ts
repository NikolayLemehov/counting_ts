import {Dispatch} from "redux";
import axios from "axios";
import {OperationAction, OperationActionTypes} from "../../types/operation";
import {URL_API} from "../../config";
import Operation, {IRawOperation} from "../../apapters/Operation";

interface IGetFetchOperations {
  message: string
  operations: IRawOperation[]
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
