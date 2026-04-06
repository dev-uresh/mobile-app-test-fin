import { ScrollView, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

import { useTaskStore } from '../store/taskStore';
import DashboardHeader from '@/components/Dashboardheader';
import StatCard from '@/components/Statcard';
import QuickActions from '@/components/QuickActions';
import RecentActivity from '@/components/Recentactivity';
// import DashboardHeader from '../components/DashboardHeader';
// import StatCard from '../components/StatCard';
// import QuickActions from '../components/QuickActions';
// import RecentActivity from '../components/RecentActivity';

// Simple icon placeholder — replace with your icon library (e.g. lucide-react-native)
function IconDot() {
  return <Text className="text-base font-bold text-[#9bd2ff]">*</Text>;
}

export default function Home() {
  const tasks = useTaskStore((state) => state.tasks);
  const loadTasks = useTaskStore((state) => state.loadTasks);
  const router = useRouter();

  const pendingApprovals = tasks.filter((t) => !t.completed).length;
  const approvedToday = tasks.filter((t) => t.completed).length;
  const urgentItems = tasks.filter(
    (t) => !t.completed && /urgent|high|asap|priority/i.test(t.text)
  ).length;
  const totalValue = tasks.length * 8;
  const recentTasks = [...tasks].reverse().slice(0, 5);

  useEffect(() => {
    loadTasks();
  }, []);

  const stats = [
    { label: 'Pending Approvals', value: pendingApprovals },
    { label: 'Approved Today',    value: approvedToday },
    { label: 'Urgent Items',      value: urgentItems },
    { label: 'Total Value',       value: totalValue },
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
      onPress: () => router.push('/reports'),
    },
  ];

  return (
    <ScrollView
      className="flex-1 bg-[#020b1a]"
      contentContainerStyle={{ padding: 16, paddingTop: 20, paddingBottom: 28 }}
    >
      {/* Header */}
      <DashboardHeader name="Admin" />

      {/* Stat Cards Grid */}
      <View className="mt-6 flex-row flex-wrap justify-between gap-y-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            icon={<IconDot />}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </View>

      {/* Quick Actions */}
      <QuickActions actions={quickActions} />

      {/* Recent Activity */}
      <RecentActivity tasks={recentTasks} />
    </ScrollView>
  );
}