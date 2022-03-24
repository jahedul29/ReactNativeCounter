/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [count, setCount] = useState(0);

  const handleCount = amnt => {
    if (amnt > 0) {
      setCount(count + amnt);
    } else {
      if (count > 0) {
        setCount(count + amnt);
      }
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Text style={styles.counter}>{count}</Text>
        <Button title="Add" onPress={() => handleCount(1)} />
        <View style={styles.separator} />
        <Button
          color="#f194ff"
          title="Remove"
          onPress={() => handleCount(-1)}
        />
        <Text style={styles.counter}>You clicked {count} times</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ff4455',
    alginItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
  },
  counter: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  separator: {
    marginVertical: 8,
    marginTop: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: 2,
  },
});

export default App;
