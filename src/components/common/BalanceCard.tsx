import { ReactNode } from 'react';
import { Text, View } from 'react-native';

interface BalanceCardProps {
  icon: ReactNode;
  label: string;
  value: number | string;
  subText?: string;
  iconBg?: string;
}

export default function BalanceCard({ icon, label, value, subText = '+3 today', iconBg = '#0b5ca6' }: BalanceCardProps) {
  return (
    <View className="w-[48%] rounded-2xl border border-[#214467] bg-[#0b1f39] p-4">
      <View className="h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: iconBg }}>
        {icon}
      </View>
      <Text className="mt-4 text-sm text-[#89a0bf]" style={{ fontSize: 18 }}>
        {label}
      </Text>
      <Text className="mt-2 text-4xl font-bold text-[#eaf3ff]" style={{ fontSize: 32 }}>
        {value}
      </Text>
      {subText ? <Text className="mt-4 text-sm text-[#5578a1]" style={{ fontSize: 16 }}>{subText}</Text> : null}
    </View>
  );
}
