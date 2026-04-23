import { Text, View, FlatList } from 'react-native';
import { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Card from '@/components/common/Card';
import FilterTabs, { FilterTab } from '@/components/common/FilterTabs';
import SearchBar from '@/components/common/SearchBar';
import { approvals } from '@/store/api/bankingApi';

const TABS: FilterTab[] = ['All', 'High', 'Medium', 'Low'];

export default function CardsScreen() {
  const navigation = useNavigation<any>();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<FilterTab>('All');

  const filtered = useMemo(() => {
    return approvals.filter((item) => {
      const matchesSearch =
        search.trim() === '' ||
        item.appNumber.toLowerCase().includes(search.toLowerCase()) ||
        item.customerName.toLowerCase().includes(search.toLowerCase());

      const matchesTab = activeTab === 'All' || item.priority === activeTab.toUpperCase();
      return matchesSearch && matchesTab;
    });
  }, [search, activeTab]);

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} className="flex-1 bg-[#020b1a]">
      <View className="px-4 pb-2 pt-1">
        <Text className="text-2xl font-bold text-[#f0f6ff]">Cards</Text>
        <Text className="mt-0.5 text-sm text-[#8ea2bc]" style={{ fontSize: 14 }}>
          Pending funding and card review
        </Text>

        <View className="mt-4">
          <SearchBar value={search} onChangeText={setSearch} />
        </View>

        <FilterTabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={(approval) => navigation.getParent()?.navigate('CardDetail', { id: approval.id })}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 28 }}
        ListEmptyComponent={<Text className="mt-10 text-center text-sm text-[#87a0c0]">No cards found.</Text>}
      />
    </SafeAreaView>
  );
}
