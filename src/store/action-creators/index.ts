import * as UserActionCreators from "./user"
import * as TodoActionCreators from "./todo"
import * as OperationActionCreators from "./operation"

export const ActionCreators = {
  ...UserActionCreators,
  ...TodoActionCreators,
  ...OperationActionCreators
}
