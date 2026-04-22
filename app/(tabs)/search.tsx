import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTaskStore } from '../store/taskStore';
import { industrialTheme } from '@/theme/industrial';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const tasks = useTaskStore((state) => state.tasks);
  const { colors } = industrialTheme;

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className="app-bg flex-1 p-6">
      <Text className="app-title mb-6 text-3xl font-bold"
        style={{ marginTop: 16, marginBottom: 16, fontSize: 24 }}
      >
        Search Tasks
      </Text>

      <View className="mb-6 flex-row items-center rounded-lg border border-industrial-border bg-industrial-surface px-4 py-3">
        <Ionicons name="search-outline" size={20} color={colors.muted} />
        <TextInput
          className="ml-2 flex-1 text-base text-industrial-text"
          placeholder="Search for tasks..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={colors.dim}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={20} color={colors.muted} />
          </TouchableOpacity>
        )}
      </View>

      {searchQuery.length > 0 ? (
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="app-surface mb-3 p-4">
              <Text className="app-title text-base">{item.text}</Text>
              <Text className="app-body mt-1 text-xs">
                Status: {item.completed ? 'Completed' : 'Pending'}
              </Text>
            </View>
          )}
          ListEmptyComponent={
            <Text className="app-caption mt-8 text-center">
              No tasks found matching: {searchQuery}
            </Text>
          }
        />
      ) : (
        <Text className="app-caption mt-8 text-center">
          Start typing to search for tasks
        </Text>
      )}
    </View>
  );
}
