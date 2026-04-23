import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import './global.css';

import AppNavigator from '@/navigation/AppNavigator';
import { store } from '@/store';
import { useTheme } from '@/hooks/useTheme';

export default function App() {
  const { theme } = useTheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <StatusBar style={theme.statusBarStyle} backgroundColor={theme.statusBarBackground} />
          <AppNavigator />
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
