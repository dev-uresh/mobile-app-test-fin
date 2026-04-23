import { View, Text } from 'react-native';
import TaskInput from '@/components/common/Input';

export default function TransferScreen() {
  return (
    <View className="app-bg flex-1 p-6">
      <Text className="app-title mb-6 text-3xl font-bold" style={{ marginTop: 16, marginBottom: 16, fontSize: 24 }}>
        Initiate Transfer
      </Text>

      <Text className="app-body mb-4 text-base">
        Enter transfer details below to prepare a payment or internal transfer.
      </Text>

      <TaskInput />

      <View className="app-panel mt-8 p-4">
        <Text className="text-sm text-industrial-text">
          Tip: Review beneficiary details before confirming.
        </Text>
      </View>
    </View>
  );
}
