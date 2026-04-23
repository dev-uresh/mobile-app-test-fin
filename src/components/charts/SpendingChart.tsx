import { Text, View } from 'react-native';

export default function SpendingChart() {
  return (
    <View className="rounded-2xl border border-[#1f3552] bg-[#0b1f39] p-4">
      <Text className="text-lg font-semibold text-[#e4f2ff]">Spending Chart</Text>
      <View className="mt-4 h-32 items-center justify-center rounded-xl bg-[#102541]">
        <Text className="text-sm text-[#87a0c0]">Chart placeholder</Text>
      </View>
    </View>
  );
}
