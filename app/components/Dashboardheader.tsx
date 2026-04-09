import { Image, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DashboardHeaderProps {
  name?: string;
  subtitle?: string;
  onMenuPress: () => void;
  onAlertsPress?: () => void;
}

export default function DashboardHeader({
  name = 'Admin',
  subtitle = "Here's what is happening today",
  onMenuPress,
  onAlertsPress,
}: DashboardHeaderProps) {
  return (
    <View>
      <View className="flex-row items-center justify-between">
        <Pressable
          onPress={onMenuPress}
          className="h-10 w-10 items-center justify-center rounded-xl bg-[#0b2b4b]"
          hitSlop={8}
        >
          <Ionicons name="menu" size={20} color="#d6e8ff" />
        </Pressable>

        <Pressable
          onPress={onAlertsPress}
          className="h-10 w-10 items-center justify-center rounded-xl bg-[#0b2b4b]"
          hitSlop={8}
        >
          <Ionicons name="notifications-outline" size={19} color="#d6e8ff" />
          <View className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#f84e4e]" />
        </Pressable>
      </View>

      <Image
        source={require('../../assets/logofin.png')}
        className="mt-4 h-10 w-20"
        // resizeMode="contain"
      />
      <Text className="mt-1 text-4xl font-bold text-[#f0f6ff]">Welcome Back,{name}</Text>
      <Text className="mt-2 text-sm text-[#8ea2bc]" style={{ fontSize: 18 }}>
        {subtitle}
      </Text>
    </View>
  );
}