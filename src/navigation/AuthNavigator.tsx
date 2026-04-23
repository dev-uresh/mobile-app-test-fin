import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OpeningScreen from '@/screens/auth/OpeningScreen';
import LoginScreen from '@/screens/auth/LoginScreen';
import OTPScreen from '@/screens/auth/OTPScreen';
import BiometricScreen from '@/screens/auth/BiometricScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Opening" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Opening" component={OpeningScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="Biometric" component={BiometricScreen} />
    </Stack.Navigator>
  );
}
