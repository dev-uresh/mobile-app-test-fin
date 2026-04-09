import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#040E1D]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View className="flex-1 px-6 pt-10 pb-8">
          <View className="absolute inset-0">
            <View className="absolute -top-16 -left-20 h-72 w-72 rounded-full bg-[#0B2B4B]/70" />
            <View className="absolute top-72 -right-24 h-80 w-80 rounded-full bg-[#11436F]/40" />
          </View>

          <View className="items-center pt-6">
            <Image
              source={require('../../assets/logofin.png')}
              className="h-16 w-56"
              // resizeMode="contain"
            />
            {/* <Text className="mt-2 text-sm tracking-[4px] text-[#7D96AE]" style={{ fontSize: 20 }}>
              ADMIN APPROVER PORTAL
            </Text> */}
          </View>

          <View className="mt-10 items-center">
            <Text className="text-4xl font-semibold tracking-[2px] text-[#8CB2D9]" style={{ fontSize: 34 }}>
              WELCOME BACK
            </Text>
            <Text className="mt-4 text-base text-[#7FA1C3]" style={{ fontSize: 20 }}>
              Secure access to your approval workspace
            </Text>
          </View>

          <View className="mt-12 gap-10">
            <View>
              <Text
                className="mb-2 text-base font-medium leading-6 text-[#8CA7C2]"
                style={{ fontSize: 16, lineHeight: 24 }}
              >
                User Name
              </Text>
              <TextInput
                className="h-14 rounded-xl border border-[#2A4E74] bg-[#0A2240]/85 px-4 text-lg text-white"
                placeholder=""
                placeholderTextColor="#6F88A2"
                autoCapitalize="none"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View>
              <Text
                className="mb-2 text-base font-medium leading-6 text-[#8CA7C2]"
                style={{ fontSize: 16, lineHeight: 24 }}
              >
                Password
              </Text>
              <View className="h-14 flex-row items-center rounded-xl border border-[#2A4E74] bg-[#0A2240]/85 px-4">
                <TextInput
                  className="flex-1 text-lg text-white"
                  placeholder=""
                  placeholderTextColor="#6F88A2"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <Pressable onPress={() => setShowPassword((value) => !value)} hitSlop={8}>
                  <Ionicons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={18}
                    color="#9AB7D5"
                  />
                </Pressable>
              </View>
            </View>
          </View>

          <Pressable
            className="mt-8 h-14 items-center justify-center rounded-xl bg-[#0B71BE]"
            onPress={handleSignIn}
          >
            <Text className="text-base font-semibold text-[#DDEEFF]" style={{ fontSize: 20 }}>Sign in to portal</Text>
          </Pressable>

          {/* <View className="mt-10 items-center">
            <Text className="text-sm tracking-[4px] text-[#6788AA]">ALTERNATIVE</Text>
          </View> */}

          {/* <Pressable className="mt-6 h-14 flex-row items-center justify-center rounded-xl border border-[#2A4E74] bg-[#0A2240]/65">
            <Ionicons name="finger-print-outline" size={22} color="#AEC7E1" />
            <Text className="ml-3 text-base text-[#B4CBE3]">Biometric Authentication</Text>
          </Pressable> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}