import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useMemo } from 'react';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';

export default function AppNavigator() {
  const auth = useAuth();
  const { theme } = useTheme();

  const navigationTheme = useMemo(() => {
    const base = theme.name === 'dark' ? DarkTheme : DefaultTheme;

    return {
      ...base,
      colors: {
        ...base.colors,
        ...theme.navigation,
      },
    };
  }, [theme]);

  return (
    <NavigationContainer theme={navigationTheme}>
      {auth.isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
