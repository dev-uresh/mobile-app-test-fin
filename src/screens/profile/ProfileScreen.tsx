import { ScrollView, Text, TouchableOpacity, View, Switch } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { useTaskStore } from '@/store/taskStore';
import { useTheme } from '@/hooks/useTheme';

export default function ProfileScreen() {
  const tasks = useTaskStore((state) => state.tasks);
  const { theme, setTheme } = useTheme();
  const palette = theme.colors;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <ScrollView className="flex-1" style={{ backgroundColor: palette.screenBackground }}>
      <View className="p-6">
        <View className="mb-8 mt-4 items-center">
          <View className="mb-4 h-24 w-24 items-center justify-center rounded-full border" style={{ borderColor: palette.border, backgroundColor: palette.surfaceRaised }}>
            <FontAwesome name="user" size={48} color={palette.amountAccent} />
          </View>
          <Text className="text-2xl font-bold" style={{ color: palette.textPrimary }}>User Profile</Text>
          <Text className="mt-1 text-sm" style={{ color: palette.textMuted }}>user@example.com</Text>
        </View>

        <View className="mb-6">
          <Text className="mb-4 text-xl font-semibold" style={{ color: palette.textPrimary }}>Statistics</Text>
          <View className="flex-row justify-between">
            <View className="mr-2 flex-1 rounded-lg border p-4" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
              <Text className="text-3xl font-bold" style={{ color: palette.amountAccent }}>{tasks.length}</Text>
              <Text className="mt-1 text-sm" style={{ color: palette.textMuted }}>Total Tasks</Text>
            </View>
            <View className="mx-2 flex-1 rounded-lg border p-4" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
              <Text className="text-3xl font-bold" style={{ color: palette.statusSuccess }}>{completedTasks}</Text>
              <Text className="mt-1 text-sm" style={{ color: palette.textMuted }}>Completed</Text>
            </View>
            <View className="ml-2 flex-1 rounded-lg border p-4" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
              <Text className="text-3xl font-bold" style={{ color: palette.statusWarning }}>{pendingTasks}</Text>
              <Text className="mt-1 text-sm" style={{ color: palette.textMuted }}>Pending</Text>
            </View>
          </View>
        </View>

        <View className="mb-6">
          <Text className="mb-4 text-xl font-semibold" style={{ color: palette.textPrimary }}>Settings</Text>
          <TouchableOpacity className="mb-3 flex-row items-center justify-between rounded-lg border p-4" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
            <View className="flex-row items-center">
              <Ionicons name="notifications-outline" size={24} color={palette.textSecondary} />
              <Text className="ml-3 text-base" style={{ color: palette.textPrimary }}>Notifications</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={palette.textMuted} />
          </TouchableOpacity>
          <View className="mb-3 flex-row items-center justify-between rounded-lg border p-4" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
            <View className="flex-row items-center">
              <Ionicons name="color-palette-outline" size={24} color={palette.textSecondary} />
              <Text className="ml-3 text-base" style={{ color: palette.textPrimary }}>Theme</Text>
            </View>
            <Switch
              value={theme.name === 'dark'}
              onValueChange={(v) => setTheme(v ? 'dark' : 'light')}
              thumbColor={theme.name === 'dark' ? palette.amountAccent : undefined}
              trackColor={{ false: palette.border, true: palette.borderStrong }}
            />
          </View>
          <TouchableOpacity className="mb-3 flex-row items-center justify-between rounded-lg border p-4" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
            <View className="flex-row items-center">
              <Ionicons name="language-outline" size={24} color={palette.textSecondary} />
              <Text className="ml-3 text-base" style={{ color: palette.textPrimary }}>Language</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={palette.textMuted} />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between rounded-lg border p-4" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
            <View className="flex-row items-center">
              <Ionicons name="help-circle-outline" size={24} color={palette.textSecondary} />
              <Text className="ml-3 text-base" style={{ color: palette.textPrimary }}>Help & Support</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={palette.textMuted} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="mt-4 items-center rounded-lg p-4" style={{ backgroundColor: palette.statusDanger }}>
          <Text className="text-base font-semibold" style={{ color: theme.raw.neutral.white }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
