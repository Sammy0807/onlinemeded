import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Card, Paragraph} from 'react-native-paper';
import {Update, Delete} from '../RUD';

const Item = (props) => {
  useEffect(() => {}, []);
  return (
    <Card style={styles.card}>
      <Card.Title title={props.item.Name} />
      <Card.Content>
        <Paragraph>{props.item.Description}</Paragraph>
        <View>
          <Text>
            Completion Status:
            {props.item.Completed ? 'Finished' : 'Working On it'}{' '}
          </Text>

          <Text>Target completion date: {' ' + props.item.ChosenDate}</Text>
        </View>
      </Card.Content>
      <Card.Actions style={styles.buts}>
        <Button mode="contained" onPress={() => console.log(props.index)}>
          {' '}
          edit
        </Button>
        <Button mode="contained"> Done</Button>
        <Button
          mode="contained"
          onPress={async () => await Delete(props.index)}>
          {' '}
          delete
        </Button>
      </Card.Actions>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    margin: 2,
  },
  buts: {
    justifyContent: 'space-between',
  },
});
export default Item;
