import { Text, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export type Priority = 'HIGH' | 'MEDIUM' | 'LOW';

interface PriorityBadgeProps {
  priority: Priority;
}

export default function PriorityBadge({ priority }: PriorityBadgeProps) {
  const { theme } = useTheme();
  const palette = theme.colors;

  const toneColor =
    priority === 'HIGH'
      ? palette.statusDanger
      : priority === 'LOW'
        ? palette.statusSuccess
        : palette.statusWarning;

  const bgColor = theme.name === 'dark' ? palette.surfaceRaised : palette.surface;
  const textColor = toneColor;

  return (
    <View className="rounded-full px-3 py-1.5" style={{ backgroundColor: bgColor }}>
      <Text className="text-xs font-semibold tracking-wide" style={{ color: textColor }}>
        {priority}
      </Text>
    </View>
  );
}
