import { Pressable, Text, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export default function BiometricScreen() {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="flex-1 items-center justify-center p-6" style={{ backgroundColor: palette.screenBackground }}>
      <Text className="text-3xl font-bold" style={{ color: palette.textPrimary }}>
        Biometric Login
      </Text>
      <Text className="mt-2 text-center" style={{ color: palette.textMuted }}>
        Use Face ID or fingerprint to continue.
      </Text>
      <Pressable className="mt-8 rounded-xl px-6 py-3" style={{ backgroundColor: palette.amountAccent }}>
        <Text className="font-semibold" style={{ color: theme.raw.neutral.white }}>Authenticate</Text>
      </Pressable>
    </View>
  );
}
