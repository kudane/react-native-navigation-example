import React from "react";

const LoadingContext = React.createContext();
export { LoadingContext };

export default function useLoading() {
  const [loading, setLoading] = React.useState(false);

  const loadingContext = React.useMemo(
    () => ({
      loadingStart: () => setLoading(true),
      loadingEnd: () => setLoading(false),
    }),
    []
  );

  return {
    loading,
    loadingContext,
  };
}
