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
              className="h-14 w-56"
            //   resizeMode="contain"
            />
            <Text className="mt-3 text-[10px] tracking-[3px] text-[#7D96AE]">
              ADMIN APPROVER PORTAL
            </Text>
          </View>

          <View className="mt-16 items-center">
            <Text className="text-3xl font-semibold tracking-[2px] text-[#8CB2D9]">WELCOME BACK</Text>
            <Text className="mt-1 text-sm text-[#7FA1C3]">Secure access to your approval workspace</Text>
          </View>

          <View className="mt-12 gap-5">
            <View>
              <Text className="mb-2 text-xs text-[#8CA7C2]">User Name</Text>
              <TextInput
                className="h-12 rounded-xl border border-[#2A4E74] bg-[#0A2240]/85 px-4 text-white"
                placeholder=""
                placeholderTextColor="#6F88A2"
                autoCapitalize="none"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View>
              <Text className="mb-2 text-xs text-[#8CA7C2]">Password</Text>
              <View className="h-12 flex-row items-center rounded-xl border border-[#2A4E74] bg-[#0A2240]/85 px-4">
                <TextInput
                  className="flex-1 text-white"
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
            className="mt-8 h-12 items-center justify-center rounded-xl bg-[#0B71BE]"
            onPress={handleSignIn}
          >
            <Text className="text-sm font-medium text-[#DDEEFF]">Sign in to portal</Text>
          </Pressable>

          <View className="mt-10 items-center">
            <Text className="text-xs tracking-[3px] text-[#6788AA]">ALTERNATIVE</Text>
          </View>

          <Pressable className="mt-6 h-12 flex-row items-center justify-center rounded-xl border border-[#2A4E74] bg-[#0A2240]/65">
            <Ionicons name="finger-print-outline" size={20} color="#AEC7E1" />
            <Text className="ml-3 text-sm text-[#B4CBE3]">Biometric Authentication</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}