import { ScrollView, Text, View } from 'react-native';

const reportCards = [
  { title: 'Daily Approvals', value: '126', insight: '+18% vs yesterday' },
  { title: 'Average Processing Time', value: '2.4h', insight: '-0.6h this week' },
  { title: 'Risk Alerts', value: '8', insight: '3 require immediate review' },
];

export default function StatementScreen() {
  return (
    <ScrollView className="flex-1 bg-[#020b1a]" contentContainerStyle={{ padding: 16, paddingTop: 20, paddingBottom: 28 }}>
      <Text className="text-3xl font-bold text-[#eef5ff]">Statements</Text>
      <Text className="mt-1 text-sm text-[#8ea2bc]">Executive analytics for account operations.</Text>

      <View className="mt-6 gap-3">
        {reportCards.map((card) => (
          <View key={card.title} className="rounded-2xl border border-[#1f3552] bg-[#0b1f39] p-4">
            <Text className="text-sm text-[#8ea2bc]">{card.title}</Text>
            <Text className="mt-1 text-4xl font-bold text-[#eef5ff]">{card.value}</Text>
            <Text className="mt-1 text-xs text-[#6f8fb2]">{card.insight}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
