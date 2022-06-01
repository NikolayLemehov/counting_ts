import {Dispatch} from "redux";
import axios from "axios";
import {NBU_COURSE_API} from "../../config";
import {formatDate} from "../../utils/formatDate";
import {RatingAction, RatingActionTypes} from "../../types/rating";

interface IGetRatingSuccess {
  rate: number
  exchangedate: string
  cc: string
}

export const fetchRating = (date: Date, ) => {
  return async (dispatch: Dispatch<RatingAction>) => {
    try {
      dispatch({type: RatingActionTypes.FETCH_RATING})
      const response = await axios.get<IGetRatingSuccess[]>(
        `${NBU_COURSE_API}?valcode=USD&date=${formatDate(date, '')}&json`)
      dispatch({
        type: RatingActionTypes.FETCH_RATING_SUCCESS,
        payload: response.data[0].rate
      })
    } catch (e) {
      dispatch({
        type: RatingActionTypes.FETCH_RATING_ERROR,
        payload: `Error by loading of NBU rating: ${e}`
      })
    }
  }
}
