import { View, FlatList, Text } from 'react-native';
import { useState, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import ApprovalCard, { Approval } from '@/components/Approvalcard';
import FilterTabs, { FilterTab } from '@/components/Filtertabs';
import SearchBar from '@/components/Searchbar';

const MOCK_APPROVALS: Approval[] = [
  {
    id: '1',
    appNumber: 'APP00000857',
    loanType: 'Business Loan',
    customerName: 'Isal Lakshika suriyapathiraja',
    amount: 'RS 150,000',
    dueDate: 'Mar 18, 2026',
    createdDate: 'March 16, 2025',
    priority: 'HIGH',
  },
  {
    id: '2',
    appNumber: 'APP00000857',
    loanType: 'Business Loan',
    customerName: 'Isal Lakshika suriyapathiraja',
    amount: 'RS 150,000',
    dueDate: 'Mar 18, 2026',
    createdDate: 'March 16, 2025',
    priority: 'LOW',
  },
  {
    id: '3',
    appNumber: 'APP00000857',
    loanType: 'Business Loan',
    customerName: 'Isal Lakshika suriyapathiraja',
    amount: 'RS 150,000',
    dueDate: 'Mar 18, 2026',
    createdDate: 'March 16, 2025',
    priority: 'MEDIUM',
  },
  {
    id: '4',
    appNumber: 'APP00000857',
    loanType: 'Business Loan',
    customerName: 'Isal Lakshika suriyapathiraja',
    amount: 'RS 150,000',
    dueDate: 'Mar 18, 2026',
    createdDate: 'March 16, 2025',
    priority: 'HIGH',
  },
];

const TABS: FilterTab[] = ['All', 'High', 'Medium', 'Low'];

export default function ApprovalsScreen() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<FilterTab>('All');

  const filtered = useMemo(() => {
    return MOCK_APPROVALS.filter((item) => {
      const matchesSearch =
        search.trim() === '' ||
        item.appNumber.toLowerCase().includes(search.toLowerCase()) ||
        item.customerName.toLowerCase().includes(search.toLowerCase());

      const matchesTab = activeTab === 'All' || item.priority === activeTab.toUpperCase();

      return matchesSearch && matchesTab;
    });
  }, [search, activeTab]);

  return (
    <SafeAreaView className="flex-1 bg-[#020b1a]">
      <View className="px-4 pt-2 pb-2">
        <Text className="text-2xl font-bold text-[#f0f6ff]">Approvals</Text>
        <Text className="mt-0.5 text-sm text-[#8ea2bc]">Pending Funding</Text>

        <View className="mt-4">
          <SearchBar value={search} onChangeText={setSearch} />
        </View>

        <FilterTabs
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onFilterPress={() => {
            // open filter modal / bottom sheet
          }}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ApprovalCard
            item={item}
            onPress={(approval) => {
              console.log('Pressed:', approval.appNumber);
            }}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 28 }}
        ListEmptyComponent={
          <Text className="mt-10 text-center text-sm text-[#87a0c0]">No approvals found.</Text>
        }
      />
    </SafeAreaView>
  );
}