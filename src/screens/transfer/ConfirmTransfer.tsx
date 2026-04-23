import { Text, View } from 'react-native';

export default function ConfirmTransfer() {
  return (
    <View className="app-bg flex-1 p-6">
      <Text className="app-title text-3xl font-bold">Confirm Transfer</Text>
      <Text className="app-body mt-2">Review beneficiary, amount, and fees before submission.</Text>
    </View>
  );
}
