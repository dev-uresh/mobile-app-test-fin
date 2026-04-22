import { View, TextInput, Text } from 'react-native';
import { useState } from 'react';
import { useTaskStore } from '../store/taskStore';
import { Button } from '@/components/nativewindui/Button';

export default function TaskInput() {
  const [text, setText] = useState('');
  const addTask = useTaskStore(state => state.addTask);

  const handleAddTask = () => {
    if (text.trim()) {
      addTask(text.trim());
      setText('');
    }
  };

  return (
    <View className="flex-row mb-4 gap-2 items-center">
      <TextInput
        className="flex-1 rounded-lg border border-industrial-border bg-industrial-surface px-4 text-base text-industrial-text"
        style={{ height: 48, lineHeight: 20 }}
        placeholder="Add a new task..."
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAddTask}
        placeholderTextColor="#728ba6"
      />
      <Button
        variant="primary"
        size="md"
        onPress={handleAddTask}
        style={{ paddingHorizontal: 12, paddingVertical: 6, width: 80 }}
      >
        <Text className="text-white font-semibold">Add</Text>
      </Button>
    </View>
  );
}
