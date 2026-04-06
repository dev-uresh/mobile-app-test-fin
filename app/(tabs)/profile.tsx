import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useTaskStore } from '../store/taskStore';

export default function Profile() {
  const tasks = useTaskStore((state) => state.tasks);
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.filter(task => !task.completed).length;

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        {/* Profile Header */}
        <View className="items-center mb-8 mt-4">
          <View className="bg-pink-100 rounded-full w-24 h-24 items-center justify-center mb-4">
            <FontAwesome name="user" size={48} color="#f63ba2" />
          </View>
          <Text className="text-2xl font-bold text-gray-800">User Profile</Text>
          <Text className="text-sm text-gray-500 mt-1">user@example.com</Text>
        </View>

        {/* Stats Section */}
        <View className="mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">Statistics</Text>
          <View className="flex-row justify-between">
            <View className="bg-blue-50 flex-1 p-4 rounded-lg mr-2">
              <Text className="text-3xl font-bold text-blue-600">{tasks.length}</Text>
              <Text className="text-sm text-gray-600 mt-1">Total Tasks</Text>
            </View>
            <View className="bg-green-50 flex-1 p-4 rounded-lg mx-2">
              <Text className="text-3xl font-bold text-green-600">{completedTasks}</Text>
              <Text className="text-sm text-gray-600 mt-1">Completed</Text>
            </View>
            <View className="bg-orange-50 flex-1 p-4 rounded-lg ml-2">
              <Text className="text-3xl font-bold text-orange-600">{pendingTasks}</Text>
              <Text className="text-sm text-gray-600 mt-1">Pending</Text>
            </View>
          </View>
        </View>

        {/* Settings Section */}
        <View className="mb-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">Settings</Text>
          
          <TouchableOpacity className="flex-row items-center justify-between bg-gray-50 p-4 rounded-lg mb-3">
            <View className="flex-row items-center">
              <Ionicons name="notifications-outline" size={24} color="#4B5563" />
              <Text className="text-base text-gray-800 ml-3">Notifications</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between bg-gray-50 p-4 rounded-lg mb-3">
            <View className="flex-row items-center">
              <Ionicons name="color-palette-outline" size={24} color="#4B5563" />
              <Text className="text-base text-gray-800 ml-3">Theme</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between bg-gray-50 p-4 rounded-lg mb-3">
            <View className="flex-row items-center">
              <Ionicons name="language-outline" size={24} color="#4B5563" />
              <Text className="text-base text-gray-800 ml-3">Language</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between bg-gray-50 p-4 rounded-lg">
            <View className="flex-row items-center">
              <Ionicons name="help-circle-outline" size={24} color="#4B5563" />
              <Text className="text-base text-gray-800 ml-3">Help & Support</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity className="bg-red-500 p-4 rounded-lg items-center mt-4">
          <Text className="text-white font-semibold text-base">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
