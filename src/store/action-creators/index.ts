import * as UserActionCreators from "./user"
import * as TodoActionCreators from "./todo"
import * as OperationActionCreators from "./operation"
import * as RatingActionCreators from "./rating"

export const ActionCreators = {
  ...UserActionCreators,
  ...TodoActionCreators,
  ...OperationActionCreators,
  ...RatingActionCreators
}
