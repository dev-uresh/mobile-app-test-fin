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
    <View className="mb-2 flex-row items-center rounded-lg border border-industrial-border bg-industrial-surface p-4">
      <TouchableOpacity
        className={`w-6 h-6 rounded border-2 mr-3 items-center justify-center ${
          task.completed ? 'border-industrial-accent bg-industrial-accent' : 'border-industrial-border'
        }`}
        onPress={() => toggleTask(task.id)}
      >
        {task.completed && <Text className="text-white text-xs">✓</Text>}
      </TouchableOpacity>
      
      <Text
        className={`flex-1 text-base ${
          task.completed ? 'text-industrial-dim line-through' : 'text-industrial-text'
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
