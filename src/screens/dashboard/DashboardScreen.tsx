import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTaskStore } from '@/store/taskStore';
import Header from '@/components/layout/Header';
import BalanceCard from '@/components/common/BalanceCard';
import AccountSummary from './AccountSummary';
import QuickActions from '@/components/layout/QuickActions';
import RecentActivity from '@/components/layout/RecentActivity';
import { useTheme } from '@/hooks/useTheme';

export default function DashboardScreen() {
  const tasks = useTaskStore((state) => state.tasks);
  const loadTasks = useTaskStore((state) => state.loadTasks);
  const navigation = useNavigation<any>();
  const { theme } = useTheme();
  const palette = theme.colors;

  const pendingApprovals = tasks.filter((t) => !t.completed).length;
  const opinionRequests = tasks.filter((t) => t.completed).length;
  const requiredFiles = tasks.filter((t) => !t.completed && /urgent|high|asap|priority/i.test(t.text)).length;
  const approvedFiles = tasks.length * 8;
  const recentTasks = [...tasks].reverse().slice(0, 5);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const stats = [
    { label: 'Pending Approvals', value: pendingApprovals, iconName: 'timer-outline' as const, iconBg: palette.surfaceRaised },
    { label: 'Opinion requests', value: opinionRequests, iconName: 'checkmark-circle-outline' as const, iconBg: palette.surfaceRaised },
    { label: 'Required Files', value: requiredFiles, iconName: 'information-circle-outline' as const, iconBg: palette.surfaceRaised },
    { label: 'Approved Files', value: approvedFiles, iconName: 'cash-outline' as const, iconBg: palette.surfaceRaised },
  ];

  const quickActions = [
    { label: 'View Cards', variant: 'primary' as const, onPress: () => navigation.navigate('Cards') },
    { label: 'View Statements', variant: 'secondary' as const, onPress: () => navigation.navigate('Statements') },
  ];

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: palette.screenBackground }}>
      <ScrollView contentContainerStyle={{ padding: 16, paddingTop: 8, paddingBottom: 28 }}>
        <Header name="Admin" onMenuPress={() => navigation.navigate('Profile')} onAlertsPress={() => navigation.navigate('Notifications')} />

        <View className="mt-6 flex-row flex-wrap justify-between gap-y-3">
          {stats.map((stat) => (
            <BalanceCard key={stat.label} icon={<Ionicons name={stat.iconName} size={24} color={palette.amountAccent} />} label={stat.label} value={stat.value} iconBg={stat.iconBg} />
          ))}
        </View>

        {/* <AccountSummary /> */}
        <QuickActions actions={quickActions} />
        {/* <RecentActivity tasks={recentTasks} /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
