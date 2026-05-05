import { Image, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { typography } from '@/config/typography';
import { useTheme } from '@/hooks/useTheme';

interface DashboardHeaderProps {
  name?: string;
  subtitle?: string;
  onMenuPress: () => void;
  onAlertsPress?: () => void;
}

export default function Header({ name = 'Admin', subtitle = "Here's what is happening today", onMenuPress, onAlertsPress }: DashboardHeaderProps) {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View>
      <View className="flex-row items-center justify-between">
        <Pressable
          onPress={onMenuPress}
          className="h-10 w-10 items-center justify-center rounded-xl"
          style={{ backgroundColor: palette.surface }}
          hitSlop={8}
        >
          <Ionicons name="menu" size={20} color={palette.iconPrimary} />
        </Pressable>

        <Pressable
          onPress={onAlertsPress}
          className="h-10 w-10 items-center justify-center rounded-xl"
          style={{ backgroundColor: palette.surface }}
          hitSlop={8}
        >
          <Ionicons name="notifications-outline" size={19} color={palette.iconPrimary} />
          <View className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full" style={{ backgroundColor: theme.raw.status.danger }} />
        </Pressable>
      </View>

      <Image source={theme.name === 'light' ? require('../../assets/images/logofin-light.png') : require('../../assets/images/logofin.png')} className="mt-4 h-10 w-20" />
      <Text className="mt-1 font-bold" style={[typography.styles.hero, { color: palette.textPrimary }]}>
        Welcome Back,{name}
      </Text>
      <Text className="mt-2" style={[typography.styles.subtitle, { color: palette.textMuted }]}>
        {subtitle}
      </Text>
    </View>
  );
}
