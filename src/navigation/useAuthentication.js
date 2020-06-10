import React from "react";

/**
 * `AuthContext` provide a context for retrieved a `signIn()` and `signOut()`
 */
export const AuthContext = React.createContext();

/**
 * useAuthentication() returns `state` and `authContext`
 * @returns `state` is `{ isSignin: boolean }`
 * @returns `authContext` provide a `signIn()` and `signOut()`
 */
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
      signIn: () => dispatch({ type: "SIGN_IN" }),
      signOut: () => dispatch({ type: "SIGN_OUT" }),
    }),
    []
  );

  return {
    state,
    authContext,
  };
}
