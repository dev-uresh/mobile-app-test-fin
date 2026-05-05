import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import './global.css';

import AppNavigator from '@/navigation/AppNavigator';
import { store } from '@/store';
import { ThemeProvider } from '@/hooks/ThemeContext';
import { useTheme } from '@/hooks/useTheme';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <ThemeProvider>
            <InnerApp />
          </ThemeProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function InnerApp() {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar style={theme.statusBarStyle} backgroundColor={theme.statusBarBackground} />
      <AppNavigator />
    </>
  );
}
