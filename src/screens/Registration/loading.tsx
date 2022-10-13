import React from 'react';
import { Text, View } from 'react-native';

function LoadingPage(): JSX.Element {
  return (
    <View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    </View>
  );
}

export default LoadingPage;