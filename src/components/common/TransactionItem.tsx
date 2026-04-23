import { Text, View } from 'react-native';

interface TransactionItemProps {
  id: string;
  text: string;
  completed: boolean;
  updatedLabel?: string;
}

export default function TransactionItem({ id, text, completed, updatedLabel = 'Updated today' }: TransactionItemProps) {
  return (
    <View className="mb-3 rounded-xl border border-[#214367] bg-[#0c2747] p-3">
      <View className="flex-row items-start justify-between">
        <View className="w-[78%]">
          <Text className="text-base font-semibold text-[#e5f0ff]" numberOfLines={1}>
            APP{id.slice(-8)}
          </Text>
          <Text className="mt-1 text-sm text-[#8ba6c8]" numberOfLines={1}>
            {text}
          </Text>
        </View>
        <View className={`rounded-full px-2.5 py-1 ${completed ? 'bg-[#124a2e]' : 'bg-[#6f1f26]'}`}>
          <Text className="text-[10px] font-bold tracking-wider text-[#f2f7ff]">{completed ? 'DONE' : 'HIGH'}</Text>
        </View>
      </View>
      <Text className="mt-2 text-xs text-[#6386ab]">{updatedLabel}</Text>
    </View>
  );
}
