import { Pressable, Text, View } from 'react-native';

export default function BiometricScreen() {
  return (
    <View className="app-bg flex-1 items-center justify-center p-6">
      <Text className="app-title text-3xl font-bold">Biometric Login</Text>
      <Text className="app-body mt-2 text-center">Use Face ID or fingerprint to continue.</Text>
      <Pressable className="mt-8 rounded-xl bg-blue-500 px-6 py-3">
        <Text className="font-semibold text-white">Authenticate</Text>
      </Pressable>
    </View>
  );
}
