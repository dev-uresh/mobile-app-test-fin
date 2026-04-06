import { View, Text } from 'react-native';
import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: number | string;
  subText?: string;
}

export default function StatCard({ icon, label, value, subText = '+3 today' }: StatCardProps) {
  return (
    <View className="w-[48%] rounded-2xl border border-[#1f3552] bg-[#0b1f39] p-4">
      <View className="h-8 w-8 items-center justify-center rounded-full bg-[#0b5ca6]">
        {icon}
      </View>
      <Text className="mt-3 text-xs text-[#89a0bf]">{label}</Text>
      <Text className="mt-1 text-3xl font-bold text-[#eaf3ff]">{value}</Text>
      {subText ? (
        <Text className="mt-1 text-xs text-[#5578a1]">{subText}</Text>
      ) : null}
    </View>
  );
}