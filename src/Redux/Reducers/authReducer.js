//////////////////AUTH ACTION TYPES/////////////////////////
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "../Actions/types";
//////////////////END OF AUTH ACTION TYPES/////////////////////////

// Reset when storage is more than 24hours
var hours = 1;
var now = Date.now();
var setupTime = localStorage.getItem("setupTime");
if (setupTime == null) {
  localStorage.setItem("setupTime", now);
} else if (now - setupTime > hours * 60 * 60 * 1000) {
  localStorage.clear();
  localStorage.setItem("setupTime", now);
}

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, userInfo: "hey" }
  : { isLoggedIn: false, userInfo: "" };

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, userInfo: "hey", isLoggedIn: true, payload };

    case LOGOUT:
      return {
        ...state,
        userInfo: " ",
        isLoggedIn: false,
      };

    default:
      return state;
  }
}

export default authReducer;
