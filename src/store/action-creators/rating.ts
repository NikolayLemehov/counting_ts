// import {Dispatch} from "redux";
// import {OperationAction, OperationActionTypes} from "../../types/operation";
// import axios from "axios";
// import {NBU_COURSE_API} from "../../config";
// import Operation from "../../apapters/Operation";
// import {formatDate} from "../../utils/formatDate";

export const fetchOperations = (date: Date, ) => {
  // return async (dispatch: Dispatch<OperationAction>) => {
  //   try {
  //     dispatch({type: OperationActionTypes.FETCH_OPERATIONS})
  //     const response = await axios.get<IGetFetchOperationsSuccess>(
  //       `${NBU_COURSE_API}?valcode=USD&date=${formatDate(debouncedDate)}&json`)
  //     dispatch({
  //       type: OperationActionTypes.FETCH_OPERATIONS_SUCCESS,
  //       payload: Operation.getAdoptedList(response.data.operations)
  //     })
  //   } catch (e) {
  //     dispatch({
  //       type: OperationActionTypes.FETCH_OPERATIONS_ERROR,
  //       payload: `Error by operations loading: ${e}`
  //     })
  //   }
  // }
}
