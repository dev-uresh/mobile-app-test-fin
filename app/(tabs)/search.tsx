import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTaskStore } from '../store/taskStore';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const tasks = useTaskStore((state) => state.tasks);

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className="flex-1 bg-white p-6">
      <Text className="mb-6 text-3xl font-bold text-gray-800"
        style={{ marginTop: 16, marginBottom: 16, fontSize: 24 }}
      >
        Search Tasks
      </Text>

      <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3 mb-6">
        <Ionicons name="search-outline" size={20} color="#6B7280" />
        <TextInput
          className="flex-1 ml-2 text-base"
          placeholder="Search for tasks..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#9CA3AF"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={20} color="#6B7280" />
          </TouchableOpacity>
        )}
      </View>

      {searchQuery.length > 0 ? (
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="bg-gray-50 p-4 rounded-lg mb-3">
              <Text className="text-base text-gray-800">{item.text}</Text>
              <Text className="text-xs text-gray-500 mt-1">
                Status: {item.completed ? 'Completed' : 'Pending'}
              </Text>
            </View>
          )}
          ListEmptyComponent={
            <Text className="mt-8 text-center text-gray-400">
              No tasks found matching: {searchQuery}
            </Text>
          }
        />
      ) : (
        <Text className="mt-8 text-center text-gray-400">
          Start typing to search for tasks
        </Text>
      )}
    </View>
  );
}
