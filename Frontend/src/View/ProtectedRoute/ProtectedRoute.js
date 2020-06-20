import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


function ProtectedRoute({ component: Component, ...rest }) {
  const auth = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;