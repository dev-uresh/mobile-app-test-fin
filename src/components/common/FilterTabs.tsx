import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export type FilterTab = 'All' | 'High' | 'Medium' | 'Low' | string;

interface FilterTabsProps {
  tabs: FilterTab[];
  activeTab: FilterTab;
  onTabChange: (tab: FilterTab) => void;
  onFilterPress?: () => void;
}

export default function FilterTabs({ tabs, activeTab, onTabChange, onFilterPress }: FilterTabsProps) {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="mt-3 flex-row items-center gap-x-3">
      <TouchableOpacity onPress={onFilterPress} className="flex-row items-center gap-x-2 rounded-full px-5 py-2.5" style={{ backgroundColor: palette.amountAccent }}>
        <Ionicons name="options-outline" size={18} color={theme.raw.neutral.white} />
        <Text className="text-base font-semibold" style={{ color: theme.raw.neutral.white }}>Filters</Text>
      </TouchableOpacity>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => onTabChange(tab)}
            className="mr-2.5 rounded-full px-5 py-2.5"
            style={activeTab === tab ? { backgroundColor: palette.amountAccent } : { borderWidth: 1, borderColor: palette.border, backgroundColor: 'transparent' }}
          >
            <Text className="text-base font-semibold" style={{ color: activeTab === tab ? theme.raw.neutral.white : palette.textMuted }}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
