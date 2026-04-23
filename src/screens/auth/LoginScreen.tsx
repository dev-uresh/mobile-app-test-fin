import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const { theme } = useTheme();
  const palette = theme.colors;

  const handleSignIn = () => {
    signIn({
      token: `demo-token-${username || 'admin'}`,
      user: {
        id: 'demo-user',
        username: username || 'admin',
      },
    });
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: palette.screenBackground }}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View className="flex-1 px-6 pb-8 pt-10" style={{ backgroundColor: palette.screenBackground }}>
          <View className="absolute inset-0">
            <View className="absolute -left-20 -top-16 h-72 w-72 rounded-full" style={{ backgroundColor: palette.surfaceRaised, opacity: 0.7 }} />
            <View className="absolute right-[-24px] top-72 h-80 w-80 rounded-full" style={{ backgroundColor: palette.surface, opacity: 0.4 }} />
          </View>

          <View className="items-center pt-6">
            <Image source={require('../../assets/images/logofin.png')} className="h-16 w-56" />
          </View>

          <View className="mt-10 items-center">
            <Text className="text-4xl font-semibold tracking-[2px]" style={{ fontSize: 34, color: palette.textSecondary }}>
              WELCOME BACK
            </Text>
            <Text className="mt-4 text-base" style={{ fontSize: 20, color: palette.textMuted }}>
              Secure access to your approval workspace
            </Text>
          </View>

          <View className="mt-12 gap-10">
            <View>
              <Text className="mb-2 text-base font-medium leading-6" style={{ fontSize: 16, lineHeight: 24, color: palette.textMuted }}>
                User Name
              </Text>
              <TextInput
                className="h-14 rounded-xl border px-4 text-lg"
                style={{ borderColor: palette.inputBorder, backgroundColor: palette.inputBackground, color: palette.textPrimary }}
                placeholder=""
                placeholderTextColor={palette.textMuted}
                autoCapitalize="none"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View>
              <Text className="mb-2 text-base font-medium leading-6" style={{ fontSize: 16, lineHeight: 24, color: palette.textMuted }}>
                Password
              </Text>
              <View
                className="h-14 flex-row items-center rounded-xl border px-4"
                style={{ borderColor: palette.inputBorder, backgroundColor: palette.inputBackground }}
              >
                <TextInput
                  className="flex-1 text-lg"
                  style={{ color: palette.textPrimary }}
                  placeholder=""
                  placeholderTextColor={palette.textMuted}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <Pressable onPress={() => setShowPassword((value) => !value)} hitSlop={8}>
                  <Ionicons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={18}
                    color={palette.textSecondary}
                  />
                </Pressable>
              </View>
            </View>
          </View>

          <Pressable className="mt-8 h-14 items-center justify-center rounded-xl" style={{ backgroundColor: palette.amountAccent }} onPress={handleSignIn}>
            <Text className="text-base font-semibold" style={{ fontSize: 20, color: theme.raw.neutral.white }}>
              Sign in to portal
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
