import { Text, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export default function SpendingChart() {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="rounded-2xl border p-4" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
      <Text className="text-lg font-semibold" style={{ color: palette.textPrimary }}>Spending Chart</Text>
      <View className="mt-4 h-32 items-center justify-center rounded-xl" style={{ backgroundColor: palette.surfaceRaised }}>
        <Text className="text-sm" style={{ color: palette.textMuted }}>Chart placeholder</Text>
      </View>
    </View>
  );
}
