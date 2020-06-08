import React from "react";

export const LoadingContext = React.createContext();

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
