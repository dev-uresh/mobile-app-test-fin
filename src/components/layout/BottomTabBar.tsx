import { View, Text } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export default function BottomTabBar() {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="border-t px-4 py-3" style={{ borderColor: palette.border, backgroundColor: palette.appBackground }}>
      <Text className="text-center text-sm" style={{ color: palette.textMuted }}>
        Bottom tab bar placeholder
      </Text>
    </View>
  );
}
