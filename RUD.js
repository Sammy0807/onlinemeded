import AsyncStorage from '@react-native-community/async-storage';

export const Read = async () => {
  try {
    return await AsyncStorage.getItem('data')
      .then((res) => JSON.parse(res))
      .then((data) => data);
  } catch (e) {
    console.log(e.message);
  }
};

export const Update = async (index, data) => {
  const arr = await AsyncStorage.getItem('data')
    .then((res) => JSON.parse(res))
    .then((deets) => deets);
  return (arr[index] = data);
};
export const Delete = async (index) => {
  try {
    const arr = await AsyncStorage.getItem('data')
      .then((res) => JSON.parse(res))
      .then((data) => data);
    AsyncStorage.setItem('data', JSON.stringify(arr.splice(index, 1)));
  } catch (error) {
    throw error;
  }
};
