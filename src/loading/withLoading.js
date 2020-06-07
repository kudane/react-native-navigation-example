import React from "react";
import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";
import useLoading, { LoadingContext } from "./useLoading";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "background: rgba(40, 44, 52, 0.175);",
  },
});

export default function withLoading(WrappedComponent) {
  const { loading, loadingContext } = useLoading();

  const modalProps = {
    animationType: "fade",
    transparent: true,
    visible: loading,
  };

  return (
    <View style={styles.container}>
      <LoadingContext.Provider value={loadingContext}>
        <Modal {...modalProps}>
          <View style={styles.modal}>
            <ActivityIndicator size="large" />
          </View>
        </Modal>
        <WrappedComponent />
      </LoadingContext.Provider>
    </View>
  );
}
