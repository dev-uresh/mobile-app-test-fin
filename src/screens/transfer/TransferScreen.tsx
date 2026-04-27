import { View, Text } from 'react-native';
import { typography } from '@/config/typography';
import TaskInput from '@/components/common/Input';
import { useTheme } from '@/hooks/useTheme';

export default function TransferScreen() {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="flex-1 p-6" style={{ backgroundColor: palette.screenBackground }}>
      <Text className="mb-6 font-bold" style={[typography.styles.title, { marginTop: 16, marginBottom: 16, color: palette.textPrimary }]}>
        Initiate Transfer
      </Text>

      <Text className="mb-4" style={[typography.styles.body, { color: palette.textMuted }]}>
        Enter transfer details below to prepare a payment or internal transfer.
      </Text>

      <TaskInput />

      <View className="mt-8 rounded-2xl border p-4" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
        <Text style={[typography.styles.bodySmall, { color: palette.textSecondary }]}>
          Tip: Review beneficiary details before confirming.
        </Text>
      </View>
    </View>
  );
}
