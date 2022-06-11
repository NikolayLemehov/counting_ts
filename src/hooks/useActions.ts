import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {ActionCreators} from "../store/action-creators"

export const useActions = () => {
  const dispatch = useDispatch()
  return {
    operation: bindActionCreators(ActionCreators.operation, dispatch),
    rating: bindActionCreators(ActionCreators.rating, dispatch),
    user: bindActionCreators(ActionCreators.user, dispatch),
    todo: bindActionCreators(ActionCreators.todo, dispatch),
  }
}