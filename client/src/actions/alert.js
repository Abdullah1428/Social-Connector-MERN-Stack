import { SET_ALERT, REMOVE_ALERT } from "./types";
import uuid from "react-uuid";

// dispatch comes from thunk middleware
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  let id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
