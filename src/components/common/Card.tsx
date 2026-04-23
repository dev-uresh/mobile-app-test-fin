import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PriorityBadge, { Priority } from './PriorityBadge';
import { useTheme } from '@/hooks/useTheme';

export interface ApprovalCardItem {
  id: string;
  appNumber: string;
  loanType: string;
  customerName: string;
  amount: string;
  dueDate: string;
  createdDate: string;
  priority: Priority;
  relationshipManager: string;
  requestedAt: string;
}

interface CardProps {
  item: ApprovalCardItem;
  onPress?: (item: ApprovalCardItem) => void;
}

export default function Card({ item, onPress }: CardProps) {
  const { theme } = useTheme();
  const palette = theme.colors;
  const topAccent =
    item.priority === 'HIGH'
      ? palette.statusDanger
      : item.priority === 'LOW'
        ? palette.statusSuccess
        : palette.statusWarning;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress?.(item)}
      className="mb-3 overflow-hidden rounded-2xl border border-t-2 px-4 pb-3 pt-3.5"
      style={{ borderColor: palette.border, borderTopColor: topAccent, backgroundColor: palette.surface }}
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-[22px] font-semibold tracking-wide" style={{ color: palette.textPrimary }}>
          {item.appNumber}
        </Text>
        <PriorityBadge priority={item.priority} />
      </View>

      <Text className="mt-0.5 text-[15px]" style={{ color: palette.textMuted }}>
        {item.loanType}
      </Text>

      <View className="mt-2.5 flex-row items-center gap-x-2">
        <Ionicons name="person" size={12} color={palette.iconPrimary} />
        <Text className="text-[15px]" style={{ color: palette.textSecondary }}>
          {item.customerName}
        </Text>
      </View>

      <View className="mt-1.5 flex-row items-center gap-x-2">
        <Ionicons name="card-outline" size={13} color={palette.iconPrimary} />
        <Text className="text-[28px] font-bold" style={{ color: palette.amountAccent }}>
          {item.amount}
        </Text>
      </View>

      <View className="my-2.5 h-px" style={{ backgroundColor: palette.border }} />

      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-x-1.5">
          <Ionicons name="calendar-outline" size={11} color={palette.textMuted} />
          <Text className="text-[11px]" style={{ color: palette.textMuted }}>
            Due : {item.dueDate}
          </Text>
        </View>
        <Text className="text-[11px]" style={{ color: palette.textMuted }}>
          {item.createdDate}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
