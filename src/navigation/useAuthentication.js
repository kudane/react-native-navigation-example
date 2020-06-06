import { useMemo, useReducer } from "react";

export default function useAuthentication() {
  const [state, dispatch] = useReducer(
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

  const context = useMemo(
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
    context,
  };
}
