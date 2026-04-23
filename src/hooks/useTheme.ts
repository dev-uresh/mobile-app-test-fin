import { Appearance } from 'react-native';
import { useEffect, useMemo, useState } from 'react';

import { darkTheme, lightTheme, Theme } from '@/config/theme';
import { secureStorage } from '@/services/storage/SecureStorage';

const THEME_KEY = 'app-theme';

export function useTheme() {
  const systemTheme = Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;
  const [override, setOverride] = useState<'dark' | 'light' | null>(null);

  useEffect(() => {
    let mounted = true;

    secureStorage.getString(THEME_KEY).then((storedTheme) => {
      if (!mounted) {
        return;
      }

      if (storedTheme === 'dark' || storedTheme === 'light') {
        setOverride(storedTheme);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      secureStorage.getString(THEME_KEY).then((storedTheme) => {
        if (!mounted || storedTheme) {
          return;
        }

        setOverride(colorScheme === 'dark' ? 'dark' : 'light');
      });
    });

    return () => {
      mounted = false;
      listener.remove();
    };
  }, []);

  const theme: Theme = useMemo(() => {
    const selected = override ?? (Appearance.getColorScheme() === 'dark' ? 'dark' : 'light');
    return selected === 'dark' ? darkTheme : lightTheme;
  }, [override]);

  const setTheme = (value: 'dark' | 'light') => {
    setOverride(value);
    void secureStorage.setString(THEME_KEY, value);
  };

  return { theme, systemTheme, setTheme };
}
