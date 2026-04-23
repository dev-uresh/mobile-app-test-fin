import { DarkTheme, NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { useAuth } from '@/hooks/useAuth';

const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#08131f',
    card: '#0f2233',
    border: '#284661',
    primary: '#3ea9f5',
    text: '#e8f1fb',
    notification: '#de6464',
  },
};

export default function AppNavigator() {
  const auth = useAuth();

  return (
    <NavigationContainer theme={navigationTheme}>
      {auth.isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
