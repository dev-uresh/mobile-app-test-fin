import { Text, View } from 'react-native';

import TransactionItem from '@/components/common/TransactionItem';

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
  return (
    <View className="mt-7">
      <Text className="text-2xl font-bold text-[#d8e6f7]">Recent Activity</Text>
      <View className="mt-4 rounded-2xl border border-[#1f3552] bg-[#0b1f39] p-4">
        {tasks.length === 0 ? (
          <Text className="text-sm text-[#87a0c0]">{emptyMessage}</Text>
        ) : (
          tasks.map((task) => <TransactionItem key={task.id} id={task.id} text={task.text} completed={task.completed} />)
        )}
      </View>
    </View>
  );
}
