export interface IRating {
  rating: number
  error: string | null
  loading: boolean
}

export enum RatingActionTypes {
  FETCH_RATING = 'FETCH_RATING',
  FETCH_RATING_SUCCESS = 'FETCH_RATING_SUCCESS',
  FETCH_RATING_ERROR = 'FETCH_RATING_ERROR',
}

interface FetchRating {
  type: RatingActionTypes.FETCH_RATING
}

interface FetchRatingSuccess {
  type: RatingActionTypes.FETCH_RATING_SUCCESS
  payload: number
}

interface FetchRatingError {
  type: RatingActionTypes.FETCH_RATING_ERROR
  payload: string
}

export type RatingAction = FetchRating | FetchRatingSuccess | FetchRatingError
