import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PriorityBadge, { Priority } from './Prioritybadge';

const PRIORITY_ACCENT: Record<Priority, string> = {
  HIGH: 'border-t-[#c9162a]',
  MEDIUM: 'border-t-[#cc6823]',
  LOW: 'border-t-[#0a9a43]',
};

export interface Approval {
  id: string;
  appNumber: string;
  loanType: string;
  customerName: string;
  amount: string;
  dueDate: string;
  createdDate: string;
  priority: Priority;
}

interface ApprovalCardProps {
  item: Approval;
  onPress?: (item: Approval) => void;
}

export default function ApprovalCard({ item, onPress }: ApprovalCardProps) {
  const topAccent = PRIORITY_ACCENT[item.priority] ?? PRIORITY_ACCENT.MEDIUM;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress?.(item)}
      className={`mb-3 overflow-hidden rounded-2xl border border-[#1b3656] border-t-2 bg-[#0c2744] px-4 pt-3.5 pb-3 ${topAccent}`}
    >
      {/* Top Row */}
      <View className="flex-row items-center justify-between">
        <Text className="text-[22px] font-semibold tracking-wide text-[#f2f7ff]">{item.appNumber}</Text>
        <PriorityBadge priority={item.priority} />
      </View>

      {/* Loan Type */}
      <Text className="mt-0.5 text-[15px] text-[#a5bad2]">{item.loanType}</Text>

      {/* Customer */}
      <View className="mt-2.5 flex-row items-center gap-x-2">
        <Ionicons name="person" size={12} color="#e7effa" />
        <Text className="text-[15px] text-[#d6e2f0]">{item.customerName}</Text>
      </View>

      {/* Amount */}
      <View className="mt-1.5 flex-row items-center gap-x-2">
        <Ionicons name="card-outline" size={13} color="#e7effa" />
        <Text className="text-[28px] font-bold text-[#00ffa3]">{item.amount}</Text>
      </View>

      {/* Divider */}
      <View className="my-2.5 h-px bg-[#24486b]" />

      {/* Footer */}
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-x-1.5">
          <Ionicons name="calendar-outline" size={11} color="#8ea7c4" />
          <Text className="text-[11px] text-[#97adca]">Due : {item.dueDate}</Text>
        </View>
        <Text className="text-[11px] text-[#97adca]">{item.createdDate}</Text>
      </View>
    </TouchableOpacity>
  );
}