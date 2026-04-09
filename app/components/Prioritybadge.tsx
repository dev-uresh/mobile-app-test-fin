import { View, Text } from 'react-native';

export type Priority = 'HIGH' | 'MEDIUM' | 'LOW';

interface PriorityBadgeProps {
  priority: Priority;
}

const PRIORITY_STYLES: Record<Priority, { bg: string; text: string }> = {
  HIGH: { bg: 'bg-[#57161e]', text: 'text-[#f26f7d]' },
  MEDIUM: { bg: 'bg-[#564126]', text: 'text-[#e7b47a]' },
  LOW: { bg: 'bg-[#11502f]', text: 'text-[#74d69c]' },
};

export default function PriorityBadge({ priority }: PriorityBadgeProps) {
  const style = PRIORITY_STYLES[priority] ?? PRIORITY_STYLES.MEDIUM;
  return (
    <View className={`rounded-full px-3 py-1.5 ${style.bg}`}>
      <Text className={`text-xs font-semibold tracking-wide ${style.text}`}>
        {priority}
      </Text>
    </View>
  );
}