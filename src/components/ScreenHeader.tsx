import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { typography } from '@/config/typography';

interface ScreenHeaderProps {
  title: string;
  subtitle: string;
  onBackPress: () => void;
  iconColor: string;
  titleColor: string;
  subtitleColor: string;
}

export default function ScreenHeader({ title, subtitle, onBackPress, iconColor, titleColor, subtitleColor }: ScreenHeaderProps) {
  return (
    <View className="flex-row items-center gap-x-3 px-4 pt-3">
      <Pressable
        onPress={onBackPress}
        accessibilityRole="button"
        accessibilityLabel="Go back"
        hitSlop={10}
        className="h-9 w-9 items-center justify-center rounded-full"
      >
        <Ionicons name="arrow-back" size={18} color={iconColor} />
      </Pressable>

      <View className="flex-1">
        <Text className="uppercase tracking-wide" style={[typography.styles.lead, { color: titleColor }]} numberOfLines={1}>
          {title}
        </Text>
        <Text className="mt-0.5" style={[typography.styles.caption, { color: subtitleColor }]} numberOfLines={1}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}
