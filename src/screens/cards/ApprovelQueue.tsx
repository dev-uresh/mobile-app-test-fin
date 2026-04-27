import { Text, View, FlatList, Pressable, TextInput } from 'react-native';
import { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { typography } from '@/config/typography';
import { useTheme } from '@/hooks/useTheme';
import { approvals } from '@/store/api/bankingApi';

const BRANCHES = ['All Branches', 'Colombo', 'Kandy', 'Galle'];
const PRODUCTS = ['All Products', 'Vehicle Loan', 'Business Loan', 'Personal Loan'];

export default function ApprovelQueue() {
  const navigation = useNavigation<any>();
  const { theme } = useTheme();
  const palette = theme.colors;
  const [search, setSearch] = useState('');
  const [selectedBranch] = useState(BRANCHES[0]);
  const [selectedProduct] = useState(PRODUCTS[0]);

  const filtered = useMemo(() => {
    return approvals.filter((item) => {
      const matchesSearch =
        search.trim() === '' ||
        item.appNumber.toLowerCase().includes(search.toLowerCase()) ||
        item.customerName.toLowerCase().includes(search.toLowerCase());

      return matchesSearch;
    });
  }, [search]);

  return (
    <SafeAreaView edges={['top', 'left', 'right', 'bottom']} className="flex-1" style={{ backgroundColor: palette.screenBackground }}>
      <View className="px-4 pb-3 pt-2">
        <View className="flex-row items-start gap-x-3">
          <Pressable
            onPress={() => navigation.canGoBack() && navigation.goBack()}
            className="mt-1 h-8 w-8 items-center justify-center rounded-full"
            style={{ backgroundColor: palette.surface }}
          >
            <Ionicons name="arrow-back" size={18} color={palette.iconPrimary} />
          </Pressable>

          <View>
            <Text className="font-semibold uppercase tracking-wide" style={[typography.styles.title, { color: palette.textPrimary }]}>
              Approval Queue
            </Text>
            <Text className="mt-0.5" style={[typography.styles.body, { color: palette.textMuted }]}>
              {filtered.length} Items Pending
            </Text>
          </View>
        </View>

        <View
          className="mt-4 flex-row items-center rounded-xl border px-3 py-2.5"
          style={{ borderColor: palette.inputBorder, backgroundColor: palette.inputBackground }}
        >
          <Ionicons name="search-outline" size={17} color={palette.iconPrimary} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search Here"
            placeholderTextColor={palette.textMuted}
            className="ml-2 flex-1"
            style={[typography.styles.bodySmall, { color: palette.textPrimary }]}
          />
        </View>

        <View className="mt-3 flex-row gap-x-2.5">
          <Pressable
            className="flex-1 flex-row items-center justify-between rounded-xl border px-3 py-3"
            style={{ borderColor: palette.inputBorder, backgroundColor: palette.inputBackground }}
          >
            <Text style={[typography.styles.bodySmall, { color: palette.textSecondary }]}>
              {selectedBranch.replace('All ', '')}
            </Text>
            <Ionicons name="chevron-down" size={16} color={palette.textMuted} />
          </Pressable>
          <Pressable
            className="flex-1 flex-row items-center justify-between rounded-xl border px-3 py-3"
            style={{ borderColor: palette.inputBorder, backgroundColor: palette.inputBackground }}
          >
            <Text style={[typography.styles.bodySmall, { color: palette.textSecondary }]}>
              {selectedProduct.replace('All ', '')}
            </Text>
            <Ionicons name="chevron-down" size={16} color={palette.textMuted} />
          </Pressable>
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.getParent()?.navigate('CardDetail', { id: item.id })}
            className="mb-2.5 rounded-md border px-4 py-3"
            style={{ borderColor: palette.border, backgroundColor: palette.surfaceRaised }}
          >
            <Text className="font-medium tracking-wide" style={[typography.styles.hero, { color: palette.textPrimary }]}>
              {item.appNumber}
            </Text>
            <Text className="mt-0.5" style={[typography.styles.title, { color: palette.textSecondary }]}>
              Loan / Vehicle Loan
            </Text>

            <View className="mt-2 flex-row items-center gap-x-2">
              <Ionicons name="person-circle" size={17} color={palette.iconPrimary} />
              <Text style={[typography.styles.subtitle, { color: palette.textPrimary }]}>
                {item.customerName}
              </Text>
            </View>

            <View className="mt-2 flex-row items-center gap-x-2">
              <Ionicons name="ellipse" size={12} color={palette.amountAccent} />
              <Text className="font-semibold" style={[typography.styles.title, { color: palette.amountAccent }]}>
                {item.amount}
              </Text>
            </View>

            <View className="mt-3 flex-row items-center gap-x-1.5">
              <Ionicons name="calendar-clear-outline" size={13} color={palette.textSecondary} />
              <Text style={[typography.styles.bodySmall, { color: palette.textSecondary }]}>
                Created Date : {item.dueDate}
              </Text>
            </View>
          </Pressable>
        )}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 4, paddingBottom: 28 }}
        ListEmptyComponent={
          <Text className="mt-10 text-center" style={[typography.styles.bodySmall, { color: palette.textMuted }]}>
            No applications found.
          </Text>
        }
      />
    </SafeAreaView>
  );
}
