import React, {useEffect} from 'react';
import {Federated} from '@callstack/repack/client';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import ErrorBoundary from '../components/ErrorBoundary';
import * as Sentry from "@sentry/react-native";

const MiniAppNavigator = React.lazy(() =>
  Federated.importModule('MiniApp', './MiniAppNavigator')
);
const FallbackComponent = () => (

  <View style={styles.container}>
    <ActivityIndicator color="rgba(56, 30, 114, 1)" size="large" />
  </View>
);

const MiniAppScreen = () => {
    useEffect(
        ()=>
        {
            Sentry.captureException(new Error('"this is a debug message"'), );

        }, []
    )
  return (
    <ErrorBoundary name="Mini App Screen">
      <React.Suspense fallback={<FallbackComponent />}>
        <MiniAppNavigator />
      </React.Suspense>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MiniAppScreen;
