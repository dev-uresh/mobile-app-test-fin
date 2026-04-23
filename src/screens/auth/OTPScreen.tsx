import { View, Text } from 'react-native';
import OTPInput from '@/components/common/OTPInput';
import { useTheme } from '@/hooks/useTheme';

export default function OTPScreen() {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="flex-1 items-center justify-center p-6" style={{ backgroundColor: palette.screenBackground }}>
      <Text className="text-3xl font-bold" style={{ color: palette.textPrimary }}>
        Verify Code
      </Text>
      <Text className="mt-2 text-center" style={{ color: palette.textMuted }}>
        Enter the one-time passcode sent to your device.
      </Text>
      <View className="mt-8 w-full max-w-md">
        <OTPInput value="" onChangeText={() => undefined} />
      </View>
    </View>
  );
}
