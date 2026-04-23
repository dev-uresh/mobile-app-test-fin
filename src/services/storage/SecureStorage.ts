import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

type MMKVLike = {
  getString: (key: string) => string | undefined;
  set: (key: string, value: string) => void;
  delete: (key: string) => void;
};

function createNativeStorage(): MMKVLike | null {
  // Expo Go cannot load react-native-mmkv.
  if (Constants.appOwnership === 'expo') {
    return null;
  }

  try {
    const { MMKV } = require('react-native-mmkv') as { MMKV: new () => MMKVLike };
    return new MMKV();
  } catch {
    return null;
  }
}

const nativeStorage = createNativeStorage();

export class SecureStorage {
  async getString(key: string) {
    if (nativeStorage) {
      return nativeStorage.getString(key) ?? null;
    }

    return AsyncStorage.getItem(key);
  }

  async setString(key: string, value: string) {
    if (nativeStorage) {
      nativeStorage.set(key, value);
      return;
    }

    await AsyncStorage.setItem(key, value);
  }

  async remove(key: string) {
    if (nativeStorage) {
      nativeStorage.delete(key);
      return;
    }

    await AsyncStorage.removeItem(key);
  }
}

export const secureStorage = new SecureStorage();
