import { ScrollView, Text, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

const reportCards = [
  { title: 'Daily Approvals', value: '126', insight: '+18% vs yesterday' },
  { title: 'Average Processing Time', value: '2.4h', insight: '-0.6h this week' },
  { title: 'Risk Alerts', value: '8', insight: '3 require immediate review' },
];

export default function StatementScreen() {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <ScrollView className="flex-1" style={{ backgroundColor: palette.screenBackground }} contentContainerStyle={{ padding: 16, paddingTop: 20, paddingBottom: 28 }}>
      <Text className="text-3xl font-bold" style={{ color: palette.textPrimary }}>
        Statements
      </Text>
      <Text className="mt-1 text-sm" style={{ color: palette.textMuted }}>
        Executive analytics for account operations.
      </Text>

      <View className="mt-6 gap-3">
        {reportCards.map((card) => (
          <View key={card.title} className="rounded-2xl border p-4" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
            <Text className="text-sm" style={{ color: palette.textMuted }}>
              {card.title}
            </Text>
            <Text className="mt-1 text-4xl font-bold" style={{ color: palette.textPrimary }}>
              {card.value}
            </Text>
            <Text className="mt-1 text-xs" style={{ color: palette.textSecondary }}>
              {card.insight}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
