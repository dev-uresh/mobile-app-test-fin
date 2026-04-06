import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export type FilterTab = 'All' | 'High' | 'Medium' | 'Low' | string;

interface FilterTabsProps {
  tabs: FilterTab[];
  activeTab: FilterTab;
  onTabChange: (tab: FilterTab) => void;
  onFilterPress?: () => void;
}

export default function FilterTabs({
  tabs,
  activeTab,
  onTabChange,
  onFilterPress,
}: FilterTabsProps) {
  return (
    <View className="mt-3 flex-row items-center gap-x-2">
      {/* Filter Button */}
      <TouchableOpacity
        onPress={onFilterPress}
        className="flex-row items-center gap-x-1.5 rounded-full bg-[#0f67b5] px-4 py-2"
      >
        <Ionicons name="options-outline" size={14} color="#e7f4ff" />
        <Text className="text-sm font-semibold text-[#e7f4ff]">Filters</Text>
      </TouchableOpacity>

      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => onTabChange(tab)}
            className={`mr-2 rounded-full px-4 py-2 ${
              activeTab === tab
                ? 'bg-[#0f67b5]'
                : 'border border-[#1f3552] bg-transparent'
            }`}
          >
            <Text
              className={`text-sm font-semibold ${
                activeTab === tab ? 'text-[#e7f4ff]' : 'text-[#8ea2bc]'
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}