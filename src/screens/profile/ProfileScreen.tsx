import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { useTaskStore } from '@/store/taskStore';

export default function ProfileScreen() {
  const tasks = useTaskStore((state) => state.tasks);
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <ScrollView className="app-bg flex-1">
      <View className="p-6">
        <View className="mb-8 mt-4 items-center">
          <View className="mb-4 h-24 w-24 items-center justify-center rounded-full border border-slate-700 bg-slate-700">
            <FontAwesome name="user" size={48} color="#3ea9f5" />
          </View>
          <Text className="app-title text-2xl font-bold">User Profile</Text>
          <Text className="app-body mt-1 text-sm">user@example.com</Text>
        </View>

        <View className="mb-6">
          <Text className="app-title mb-4 text-xl font-semibold">Statistics</Text>
          <View className="flex-row justify-between">
            <View className="mr-2 flex-1 rounded-lg border border-slate-700 bg-slate-800 p-4">
              <Text className="text-3xl font-bold text-blue-400">{tasks.length}</Text>
              <Text className="app-body mt-1 text-sm">Total Tasks</Text>
            </View>
            <View className="mx-2 flex-1 rounded-lg border border-slate-700 bg-slate-800 p-4">
              <Text className="text-3xl font-bold text-green-400">{completedTasks}</Text>
              <Text className="app-body mt-1 text-sm">Completed</Text>
            </View>
            <View className="ml-2 flex-1 rounded-lg border border-slate-700 bg-slate-800 p-4">
              <Text className="text-3xl font-bold text-yellow-400">{pendingTasks}</Text>
              <Text className="app-body mt-1 text-sm">Pending</Text>
            </View>
          </View>
        </View>

        <View className="mb-6">
          <Text className="app-title mb-4 text-xl font-semibold">Settings</Text>
          <TouchableOpacity className="mb-3 flex-row items-center justify-between rounded-lg border border-slate-700 bg-slate-800 p-4">
            <View className="flex-row items-center">
              <Ionicons name="notifications-outline" size={24} color="#cbd5e1" />
              <Text className="app-title ml-3 text-base">Notifications</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
          </TouchableOpacity>
          <TouchableOpacity className="mb-3 flex-row items-center justify-between rounded-lg border border-slate-700 bg-slate-800 p-4">
            <View className="flex-row items-center">
              <Ionicons name="color-palette-outline" size={24} color="#cbd5e1" />
              <Text className="app-title ml-3 text-base">Theme</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
          </TouchableOpacity>
          <TouchableOpacity className="mb-3 flex-row items-center justify-between rounded-lg border border-slate-700 bg-slate-800 p-4">
            <View className="flex-row items-center">
              <Ionicons name="language-outline" size={24} color="#cbd5e1" />
              <Text className="app-title ml-3 text-base">Language</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between rounded-lg border border-slate-700 bg-slate-800 p-4">
            <View className="flex-row items-center">
              <Ionicons name="help-circle-outline" size={24} color="#cbd5e1" />
              <Text className="app-title ml-3 text-base">Help & Support</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="mt-4 items-center rounded-lg bg-red-600 p-4">
          <Text className="text-base font-semibold text-white">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
