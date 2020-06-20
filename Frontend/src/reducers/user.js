import { signIn, signOut } from "../actions/types";

const initState = {
  loggedIn: false,
  userName: "",
  token: "",
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case signIn:
      return {
        loggedIn: true,
        userName: action.userName,
        token: action.token,
      };
    case signOut:
      return {
        loggedIn: false,
        userName: "",
        token: "",
      };

    default:
      return state;
  }
};

export default auth;
