import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import DatePicker from 'react-native-datepicker';
import {TextInput, Subheading, Button} from 'react-native-paper';

const AddItem = ({navigation}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [chosenDate, setChosenDate] = useState(new Date());
  const [completed, setCompleted] = useState(false);
  const [errMess, setErrMess] = useState('');

  const _storeData = async () => {
    let todo = {
      Name: name,
      Description: description,
      ChosenDate: chosenDate,
      Completed: completed,
    };

    try {
      const data = await AsyncStorage.getItem('data');
      let newData = JSON.parse(data);
      if (!newData) {
        newData = [];
      }
      newData.push(todo);
      await AsyncStorage.setItem('data', JSON.stringify(newData))
        .then(() => {
          console.log(newData);
        })
        .catch(() => {
          console.log('There was an error saving the product');
        });
    } catch (error) {
      throw error;
    }
  };
  const don = () => {
    if (name.trim() == '' || description.trim() == '') {
      setErrMess('This Box is required');
    } else {
      _storeData();
      // navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.content}>
      <TextInput
        style={styles.mb}
        label="Name"
        type="outlined"
        value={name}
        onChangeText={setName}
      />
      {!!errMess && <Text style={styles.err}>{errMess}</Text>}
      <TextInput
        style={styles.mb}
        label="Description"
        type="outlined"
        value={description}
        onChangeText={setDescription}
      />
      {!!errMess && <Text style={styles.err}>{errMess}</Text>}
      <View style={styles.date}>
        <Subheading>Target Completion Date: </Subheading>
        <DatePicker
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2020"
          maxDate="01-01-2040"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              width: 100,
              marginLeft: 36,
            },
          }}
          date={chosenDate}
          onDateChange={setChosenDate}
        />
      </View>
      <Button mode="contained" onPress={don}>
        Add
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    padding: 10,
  },
  date: {
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  err: {color: 'red'},
  mb: {
    marginBottom: 5,
  },
});
export default AddItem;
