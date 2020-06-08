import React from "react";

export const AuthContext = React.createContext();

export default function useAuthentication() {
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
