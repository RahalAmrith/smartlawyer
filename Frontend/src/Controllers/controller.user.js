// redux actions
// import { setSignIn, setSignOut } from "../actions/auth";
// import { useSelector, useDispatch } from "react-redux";

class User {
  constructor() {
    this.api = {
        signIn : "/api/user/signin"
    }
  }

  //   ============================================
  //   =============== User Sign In ===============
  //   ============================================
  signIn() {}

  //   ============================================
  //   =============== User Sign In ===============
  //   ============================================
  signOut() {
    // dispatch(setSignOut());
  }
}

const obj = new User();

export default obj;
