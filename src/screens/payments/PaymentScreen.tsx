import { Text, View } from 'react-native';

export default function PaymentScreen() {
  return (
    <View className="app-bg flex-1 p-6">
      <Text className="app-title text-3xl font-bold">Payments</Text>
      <Text className="app-body mt-2">Manage bill payments and scheduled payments.</Text>
    </View>
  );
}
