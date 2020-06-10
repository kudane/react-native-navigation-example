import React from "react";

/**
 * `LoadingContext` provide a context for retrieved a `loadingStart()` and `loadingEnd()`
 */
export const LoadingContext = React.createContext();

/**
 * useLoading() returns `loading` and `loadingContext`
 * @returns `loading` is `boolean`
 * @returns `loadingContext` provide a `loadingStart()` and `loadingEnd()`
 */
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
