import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

export class SecureStorage {
  getString(key: string) {
    return storage.getString(key) ?? null;
  }

  setString(key: string, value: string) {
    storage.set(key, value);
  }

  remove(key: string) {
    storage.delete(key);
  }
}

export const secureStorage = new SecureStorage();
