import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFromStorage = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);

    return data;
  } catch (err) {
    // error reading here
  }
};

export const setToStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    // saving error
  }
};

export const removeFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    // saving error
  }
};
