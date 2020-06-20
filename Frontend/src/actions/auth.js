import { signIn, signOut } from "./types";

export const setSignIn = (_token, _userName) => {
  return {
    type: signIn,
    token: _token,
    userName: _userName,
  };
};
export const setSignOut = () => {
  return {
    type: signOut,
  };
};
