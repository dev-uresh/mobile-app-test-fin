import { Text, View } from 'react-native';

import TransactionItem from '@/components/common/TransactionItem';
import { useTheme } from '@/hooks/useTheme';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface RecentActivityProps {
  tasks: Task[];
  emptyMessage?: string;
}

export default function RecentActivity({ tasks, emptyMessage = 'No activity yet. Add a task to get started.' }: RecentActivityProps) {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="mt-7">
      <Text className="text-2xl font-bold" style={{ color: palette.textPrimary }}>
        Recent Activity
      </Text>
      <View className="mt-4 rounded-2xl border p-4" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
        {tasks.length === 0 ? (
          <Text className="text-sm" style={{ color: palette.textMuted }}>
            {emptyMessage}
          </Text>
        ) : (
          tasks.map((task) => <TransactionItem key={task.id} id={task.id} text={task.text} completed={task.completed} />)
        )}
      </View>
    </View>
  );
}
