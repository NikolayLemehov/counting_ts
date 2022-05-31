import {IRating, RatingAction, RatingActionTypes} from "../../types/rating";

const initialState: IRating = {
  rating: 1,
  error: null,
  loading: false,
}

export const ratingReducer = (state = initialState, action: RatingAction): IRating => {
  switch (action.type) {
    case RatingActionTypes.FETCH_RATING:
      return {...state, error: null, loading: true}
    case RatingActionTypes.FETCH_RATING_SUCCESS:
      return {...state, error: null, loading: false, rating: action.payload}
    case RatingActionTypes.FETCH_RATING_ERROR:
      return {...state, error: action.payload, loading: false}
    default: return state
  }
}