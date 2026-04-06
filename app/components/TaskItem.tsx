import { View, Text, TouchableOpacity } from 'react-native';
import { Task, useTaskStore } from '../store/taskStore';
import { Button } from '@/components/nativewindui/Button';


interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const toggleTask = useTaskStore(state => state.toggleTask);
  const deleteTask = useTaskStore(state => state.deleteTask);

  return (
    <View className="flex-row items-center bg-gray-50 rounded-lg p-4 mb-2">
      <TouchableOpacity
        className={`w-6 h-6 rounded border-2 mr-3 items-center justify-center ${
          task.completed ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
        }`}
        onPress={() => toggleTask(task.id)}
      >
        {task.completed && <Text className="text-white text-xs">✓</Text>}
      </TouchableOpacity>
      
      <Text
        className={`flex-1 text-base ${
          task.completed ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {task.text}
      </Text>
      
      <Button
      style={{ paddingHorizontal: 12, paddingVertical: 6, width: 80 }}
        variant="danger"
        size="sm"
        onPress={() => deleteTask(task.id)}
      >
        <Text className="text-white text-sm font-semibold">Delete</Text>
      </Button>
    </View>
  );
}
