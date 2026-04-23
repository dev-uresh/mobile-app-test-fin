import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

import PriorityBadge, { Priority } from './PriorityBadge';

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
  const { theme } = useTheme();
  const palette = theme.colors;
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper
      {...(onPress ? { activeOpacity: 0.9, onPress } : {})}
      className="rounded-2xl border px-4 py-3"
      style={{ borderColor: palette.border, backgroundColor: palette.surface }}
    >
      <View className="flex-row items-start justify-between gap-x-3">
        <View className="flex-1">
          <View className="flex-row items-center gap-x-2">
            <View className="h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: palette.surfaceRaised }}>
              <Ionicons name={icon} size={16} color={palette.amountAccent} />
            </View>
            <Text className="text-base" style={{ color: palette.textMuted }}>
              {title}
            </Text>
          </View>

          {!!value && (
            <Text
              className="mt-2 text-lg font-semibold"
              style={{ color: valueTone === 'success' ? palette.statusSuccess : palette.textPrimary }}
            >
              {value}
            </Text>
          )}

          {!!subValue && (
            <Text className="mt-1 text-sm" style={{ color: palette.textMuted }}>
              {subValue}
            </Text>
          )}
        </View>

        <View className="items-end">
          {!!rightLinkText && (
            <TouchableOpacity activeOpacity={0.8} onPress={onRightPress}>
              <Text className="text-sm font-medium" style={{ color: palette.amountAccent }}>
                {rightLinkText}
              </Text>
            </TouchableOpacity>
          )}
          {!!priority && (
            <View className="mt-1">
              <PriorityBadge priority={priority} />
            </View>
          )}
          {showChevron ? <Ionicons name="chevron-down" size={18} color={palette.textMuted} /> : null}
        </View>
      </View>
    </Wrapper>
  );
}
