import { useEffect } from 'react';
import { Image, StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/hooks/useTheme';

export default function OpeningScreen() {
  const navigation = useNavigation<any>();
  const { theme } = useTheme();
  const palette = theme.colors;
  const logoSource = theme.name === 'light' ? require('../../assets/images/logoDark.png') : require('../../assets/images/logofin-light.png');

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 1800);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center" style={{ backgroundColor: palette.appBackground }}>
      <StatusBar barStyle={theme.statusBarStyle === 'dark' ? 'dark-content' : 'light-content'} backgroundColor={palette.appBackground} />

      <View
        className="items-center justify-center"
        style={{
          width: 250,
          height: 250,
          borderRadius: 48,
          backgroundColor: theme.name === 'light' ? 'rgba(255,255,255,0.92)' : 'rgba(7,26,51,0.9)',
          shadowColor: '#000',
          shadowOpacity: 0.12,
          shadowRadius: 28,
          shadowOffset: { width: 0, height: 14 },
          elevation: 8,
        }}
      >
        <Image source={logoSource} className="h-20 w-64" resizeMode="contain" />
      </View>
    </View>
  );
}
