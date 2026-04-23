import { View, Text } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export default function AccountSummary() {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="mt-6 rounded-2xl border p-4" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
      <Text className="text-2xl font-bold" style={{ color: palette.textPrimary }}>
        Account Summary
      </Text>
      <Text className="mt-2 text-sm" style={{ color: palette.textMuted }}>
        Snapshot of balances, activity, and pending actions.
      </Text>
    </View>
  );
}
