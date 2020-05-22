import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

const Main = () => <Title style={styles.main}>List of things todo</Title>;

const styles = StyleSheet.create({
  main: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Main;
