import { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OpeningScreen() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 1800);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center bg-[#08131f] px-6">
      <View className="absolute left-[-60px] top-[-40px] h-48 w-48 rounded-full bg-[#0f2233] opacity-70" />
      <View className="absolute bottom-[-50px] right-[-40px] h-60 w-60 rounded-full bg-[#153147] opacity-60" />

      <View className="items-center">
        <View className="items-center justify-center rounded-3xl border border-[#284661] bg-[#0f2233] px-8 py-10 shadow-steel">
          <Image source={require('../../assets/images/logofin.png')} className="h-20 w-64" resizeMode="contain" />
          <Text className="mt-6 text-base tracking-[6px] text-[#9fb2c7]">
            BANKING WORKSPACE
          </Text>
        </View>

        <Text className="mt-8 text-center text-sm leading-6 text-[#728ba6]">
          Secure approvals, accounts, and transfers in one industrial-grade workspace.
        </Text>
      </View>
    </View>
  );
}
