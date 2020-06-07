import React from "react";

const AuthContext = React.createContext();

function useAuthentication() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "SIGN_IN":
          return { isSignin: true };
        case "SIGN_OUT":
          return { isSignin: false };
      }
    },
    { isSignin: false }
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
    }),
    []
  );

  return {
    state,
    authContext,
  };
}

export default useAuthentication;
export { AuthContext };
