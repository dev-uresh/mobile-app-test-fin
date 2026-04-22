import { View, Text } from 'react-native';
import TaskInput from '../components/TaskInput';

export default function Add() {
  return (
    <View className="app-bg flex-1 p-6">
      <Text className="app-title mb-6 text-3xl font-bold"
        style={{ marginTop: 16, marginBottom: 16, fontSize: 24 }}
      >
        Add New Task
      </Text>

      <Text className="app-body mb-4 text-base">
        Create a new task by entering the details below:
      </Text>

      <TaskInput />

      <View className="app-panel mt-8 p-4">
        <Text className="text-sm text-industrial-text">
          Tip: You can also add tasks from the Home screen.
        </Text>
      </View>
    </View>
  );
}
