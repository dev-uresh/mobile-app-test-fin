import { View, Text } from 'react-native';
import TaskInput from '../components/TaskInput';

export default function Add() {
  return (
    <View className="flex-1 bg-white p-6">
      <Text className="mb-6 text-3xl font-bold text-gray-800"
        style={{ marginTop: 16, marginBottom: 16, fontSize: 24 }}
      >
        Add New Task
      </Text>

      <Text className="mb-4 text-base text-gray-600">
        Create a new task by entering the details below:
      </Text>

      <TaskInput />

      <View className="mt-8 bg-blue-50 p-4 rounded-lg">
        <Text className="text-sm text-blue-800">
          💡 Tip: You can also add tasks from the Home screen!
        </Text>
      </View>
    </View>
  );
}
