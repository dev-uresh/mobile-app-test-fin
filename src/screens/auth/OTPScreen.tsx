import { View, Text } from 'react-native';
import OTPInput from '@/components/common/OTPInput';

export default function OTPScreen() {
  return (
    <View className="app-bg flex-1 items-center justify-center p-6">
      <Text className="app-title text-3xl font-bold">Verify Code</Text>
      <Text className="app-body mt-2 text-center">Enter the one-time passcode sent to your device.</Text>
      <View className="mt-8 w-full max-w-md">
        <OTPInput value="" onChangeText={() => undefined} />
      </View>
    </View>
  );
}
