import { View, Text } from 'react-native';
import TaskInput from '@/components/common/Input';
import { useTheme } from '@/hooks/useTheme';

export default function TransferScreen() {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="flex-1 p-6" style={{ backgroundColor: palette.screenBackground }}>
      <Text className="mb-6 text-3xl font-bold" style={{ marginTop: 16, marginBottom: 16, fontSize: 24, color: palette.textPrimary }}>
        Initiate Transfer
      </Text>

      <Text className="mb-4 text-base" style={{ color: palette.textMuted }}>
        Enter transfer details below to prepare a payment or internal transfer.
      </Text>

      <TaskInput />

      <View className="mt-8 rounded-2xl border p-4" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
        <Text className="text-sm" style={{ color: palette.textSecondary }}>
          Tip: Review beneficiary details before confirming.
        </Text>
      </View>
    </View>
  );
}
