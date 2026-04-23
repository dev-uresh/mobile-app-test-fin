import { View, Text } from 'react-native';

export default function AccountSummary() {
  return (
    <View className="mt-6 rounded-2xl border border-[#1f3552] bg-[#0b1f39] p-4">
      <Text className="text-2xl font-bold text-[#d8e6f7]">Account Summary</Text>
      <Text className="mt-2 text-sm text-[#87a0c0]">
        Snapshot of balances, activity, and pending actions.
      </Text>
    </View>
  );
}
