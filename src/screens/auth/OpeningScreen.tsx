import { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/hooks/useTheme';

export default function OpeningScreen() {
  const navigation = useNavigation<any>();
  const { theme } = useTheme();
  const palette = theme.colors;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 1800);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center px-6" style={{ backgroundColor: palette.appBackground }}>
      <View className="absolute left-[-60px] top-[-40px] h-48 w-48 rounded-full" style={{ backgroundColor: palette.surface, opacity: 0.7 }} />
      <View className="absolute bottom-[-50px] right-[-40px] h-60 w-60 rounded-full" style={{ backgroundColor: palette.surfaceRaised, opacity: 0.6 }} />

      <View className="items-center">
          <View
            className="items-center justify-center rounded-3xl border px-8 py-10 shadow-steel"
            style={{ borderColor: palette.border, backgroundColor: palette.surface }}
          >
            <Image source={theme.name === 'light' ? require('../../assets/images/logofin-light.png') : require('../../assets/images/logofin.png')} className="h-20 w-64" resizeMode="contain" />
            <Text className="mt-6 text-base tracking-[6px]" style={{ color: palette.textSecondary }}>
              BANKING WORKSPACE
            </Text>
          </View>

        <Text className="mt-8 text-center text-sm leading-6" style={{ color: palette.textMuted }}>
          Secure approvals, accounts, and transfers in one industrial-grade workspace.
        </Text>
      </View>
    </View>
  );
}
