import { ScrollView, View } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTaskStore } from '../store/taskStore';
import DashboardHeader from '@/components/Dashboardheader';
import StatCard from '@/components/Statcard';
import QuickActions from '@/components/QuickActions';
import RecentActivity from '@/components/Recentactivity';

export default function Home() {
  const tasks = useTaskStore((state) => state.tasks);
  const loadTasks = useTaskStore((state) => state.loadTasks);
  const router = useRouter();

  const pendingApprovals = tasks.filter((t) => !t.completed).length;
  const opinionRequests = tasks.filter((t) => t.completed).length;
  const requiredFiles = tasks.filter(
    (t) => !t.completed && /urgent|high|asap|priority/i.test(t.text)
  ).length;
  const approvedFiles = tasks.length * 8;
  const recentTasks = [...tasks].reverse().slice(0, 5);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const stats = [
    {
      label: 'Pending Approvals',
      value: pendingApprovals,
      iconName: 'timer-outline' as const,
      iconBg: '#083860',
    },
    {
      label: 'Opinion requests',
      value: opinionRequests,
      iconName: 'checkmark-circle-outline' as const,
      iconBg: '#083860',
    },
    {
      label: 'Required Files',
      value: requiredFiles,
      iconName: 'information-circle-outline' as const,
      iconBg: '#083860',
    },
    {
      label: 'Approved Files',
      value: approvedFiles,
      iconName: 'cash-outline' as const,
      iconBg: '#083860',
    },
  ];

  const quickActions = [
    {
      label: 'View All Approvals',
      variant: 'primary' as const,
      onPress: () => router.push('/approvals'),
    },
    {
      label: 'View Reports',
      variant: 'secondary' as const,
      onPress: () => router.push('/(tabs)/reports'),
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#020b1a]">
      <ScrollView contentContainerStyle={{ padding: 16, paddingTop: 8, paddingBottom: 28 }}>
        <DashboardHeader
          name="Admin"
          onMenuPress={() => router.push('/(tabs)/settings')}
          onAlertsPress={() => router.push('/(tabs)/approvals')}
        />

        <View className="mt-6 flex-row flex-wrap justify-between gap-y-3">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              icon={<Ionicons name={stat.iconName} size={24} color="#7cd0ff" />}
              label={stat.label}
              value={stat.value}
              iconBg={stat.iconBg}
            />
          ))}
        </View>

        <QuickActions actions={quickActions} />
        <RecentActivity tasks={recentTasks} />
      </ScrollView>
    </SafeAreaView>
  );
}