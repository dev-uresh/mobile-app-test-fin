import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

import PriorityBadge, { Priority } from '@/components/Prioritybadge';

interface DetailCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value?: string;
  subValue?: string;
  valueTone?: 'default' | 'success';
  rightLinkText?: string;
  onRightPress?: () => void;
  priority?: Priority;
  showChevron?: boolean;
  onPress?: () => void;
}

export default function DetailCard({
  icon,
  title,
  value,
  subValue,
  valueTone = 'default',
  rightLinkText,
  onRightPress,
  priority,
  showChevron,
  onPress,
}: DetailCardProps) {
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper
      {...(onPress ? { activeOpacity: 0.9, onPress } : {})}
      className="rounded-2xl border border-[#1f3d61] bg-[#102944] px-4 py-3"
    >
      <View className="flex-row items-start justify-between gap-x-3">
        <View className="flex-1">
          <View className="flex-row items-center gap-x-2">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-[#073f6a]">
              <Ionicons name={icon} size={16} color="#37bbff" />
            </View>
            <Text className="text-base text-[#8ea5bf]">{title}</Text>
          </View>

          {!!value && (
            <Text
              className={`mt-2 text-lg font-semibold ${valueTone === 'success' ? 'text-[#00f0a0]' : 'text-[#d7e6f7]'}`}
            >
              {value}
            </Text>
          )}

          {!!subValue && <Text className="mt-1 text-sm text-[#7f98b7]">{subValue}</Text>}
        </View>

        <View className="items-end">
          {!!rightLinkText && (
            <TouchableOpacity activeOpacity={0.8} onPress={onRightPress}>
              <Text className="text-sm font-medium text-[#0caeff]">{rightLinkText}</Text>
            </TouchableOpacity>
          )}
          {!!priority && (
            <View className="mt-1">
              <PriorityBadge priority={priority} />
            </View>
          )}
          {showChevron ? <Ionicons name="chevron-down" size={18} color="#6d88aa" /> : null}
        </View>
      </View>
    </Wrapper>
  );
}