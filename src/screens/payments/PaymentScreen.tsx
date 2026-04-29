import { Text, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export default function PaymentScreen() {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="flex-1 p-6" style={{ backgroundColor: palette.screenBackground }}>
      <Text className="text-3xl font-bold" style={{ color: palette.textPrimary }}>
        All leads
      </Text>
      <Text className="mt-2" style={{ color: palette.textMuted }}>
        Manage all leads and their associated information.
      </Text>
    </View>
  );
}
