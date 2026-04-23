import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export type FilterTab = 'All' | 'High' | 'Medium' | 'Low' | string;

interface FilterTabsProps {
  tabs: FilterTab[];
  activeTab: FilterTab;
  onTabChange: (tab: FilterTab) => void;
  onFilterPress?: () => void;
}

export default function FilterTabs({ tabs, activeTab, onTabChange, onFilterPress }: FilterTabsProps) {
  return (
    <View className="mt-3 flex-row items-center gap-x-3">
      <TouchableOpacity onPress={onFilterPress} className="flex-row items-center gap-x-2 rounded-full bg-[#0f67b5] px-5 py-2.5">
        <Ionicons name="options-outline" size={18} color="#e7f4ff" />
        <Text className="text-base font-semibold text-[#e7f4ff]">Filters</Text>
      </TouchableOpacity>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => onTabChange(tab)}
            className={`mr-2.5 rounded-full px-5 py-2.5 ${activeTab === tab ? 'bg-[#0f67b5]' : 'border border-[#1f3552] bg-transparent'}`}
          >
            <Text className={`text-base font-semibold ${activeTab === tab ? 'text-[#e7f4ff]' : 'text-[#8ea2bc]'}`}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
