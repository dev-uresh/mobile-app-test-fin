import { Appearance } from 'react-native';
import { useEffect, useMemo, useState } from 'react';
import { MMKV } from 'react-native-mmkv';

import { darkTheme, lightTheme, Theme } from '@/config/theme';

const storage = new MMKV();
const THEME_KEY = 'app-theme';

export function useTheme() {
  const systemTheme = Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;
  const [override, setOverride] = useState<'dark' | 'light' | null>(storage.getString(THEME_KEY) as 'dark' | 'light' | null);

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      if (!storage.getString(THEME_KEY)) {
        setOverride(colorScheme === 'dark' ? 'dark' : 'light');
      }
    });

    return () => listener.remove();
  }, []);

  const theme: Theme = useMemo(() => {
    const selected = override ?? (Appearance.getColorScheme() === 'dark' ? 'dark' : 'light');
    return selected === 'dark' ? darkTheme : lightTheme;
  }, [override]);

  const setTheme = (value: 'dark' | 'light') => {
    storage.set(THEME_KEY, value);
    setOverride(value);
  };

  return { theme, systemTheme, setTheme };
}
