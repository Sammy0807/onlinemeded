/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  YellowBox,
} from 'react-native';

import Main from './components/main';
import Item from './components/Items';
import {Subheading} from 'react-native-paper';
import {Read} from './RUD';
const App = ({navigation}) => {
  YellowBox.ignoreWarnings(['Require cycle:']);
  const [values, setValues] = useState([]);
  useEffect(() => {
    const func = async () => {
      setValues(await Read());
    };
    func();
  }, [setValues]);

  return (
    <View>
      <Main />
      <Button title="Add Item" onPress={() => navigation.navigate('AddItem')} />
      <ScrollView style={styles.scroll}>
        {values.length > 0 ? (
          values.map((item, ind) => <Item key={ind} item={item} index={ind} />)
        ) : (
          <Subheading>Nothing to do</Subheading>
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scroll: {
    padding: 6,
  },
});
export default App;
