import * as UserActionCreators from "./user"
import * as TodoActionCreators from "./todo"
import * as OperationActionCreators from "./operation"

export default {
  ...UserActionCreators,
  ...TodoActionCreators,
  ...OperationActionCreators
}