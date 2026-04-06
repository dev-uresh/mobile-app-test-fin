import { Image, Text, View } from 'react-native';

interface DashboardHeaderProps {
  name?: string;
  subtitle?: string;
}

export default function DashboardHeader({
  name = 'Admin',
  subtitle = "Here's what is happening today",
}: DashboardHeaderProps) {
  return (
    <View
    >
      <Image
        source={require('../../assets/logofin.png')}
        className="h-14 w-56 ml-0"
        resizeMode="contain"
        style={{ marginLeft: -50 }}
      />
      <Text className="text-4xl font-bold text-[#f0f6ff]">Welcome Back, {name}</Text>
      <Text className="mt-1 text-sm text-[#8ea2bc]">{subtitle}</Text>
    </View>
  );
}