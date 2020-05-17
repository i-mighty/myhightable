/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

const App: React.FC = () => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text testID="title">HighTable</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default App;
