import { Pressable, ScrollView, Text, View } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ApprovalActionButtons from '@/components/common/ApprovalActionButtons';
import ApplicationTree from '@/components/common/ApplicationTree';
import ApplicationWorkflowHistory from '@/components/common/ApplicationWorkflowHistory';
import { typography } from '@/config/typography';
import { getApprovalById } from '@/store/api/bankingApi';
import { useTheme } from '@/hooks/useTheme';

export default function CardDetailScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { theme } = useTheme();
  const palette = theme.colors;
  const [isWorkflowHistoryOpen, setIsWorkflowHistoryOpen] = useState(false);
  const [isApplicationTreeOpen, setIsApplicationTreeOpen] = useState(false);
  const approval = getApprovalById((route.params as { id?: string } | undefined)?.id);

  const customerNic = `${approval.id}200063301654`.slice(0, 12);
  const amountValue = approval.amount.replace(/^RS/i, 'Rs.').replace(' ', '');
  const marketingOfficer = approval.relationshipManager.split(' ')[0] ?? approval.relationshipManager;

  const infoTiles = [
    { label: 'Customer Name', value: approval.customerName },
    { label: 'Customer NIC', value: customerNic },
    { label: 'Application No', value: approval.appNumber },
    { label: 'Amount', value: amountValue },
    { label: 'Interest Rate', value: '12%' },
    { label: 'Group Exposure', value: amountValue },
    { label: 'Branch', value: 'Head Office' },
    { label: 'Marketing Officer', value: marketingOfficer },
  ];

  const sectionRows = [
    {
      label: 'Application Workflow History',
      chevron: true,
      isOpen: isWorkflowHistoryOpen,
      onPress: () => setIsWorkflowHistoryOpen((current) => !current),
    },
    {
      label: 'Application Tree',
      chevron: true,
      isOpen: isApplicationTreeOpen,
      onPress: () => setIsApplicationTreeOpen((current) => !current),
    },
    { label: 'Appraisal Form', chevron: false },
  ] as const;

  const textStyles = {
    headerTitle: typography.styles.lead,
    headerSubtitle: typography.styles.body,
    tileLabel: typography.styles.body,
    tileValue: typography.styles.bodyStrong,
    sectionLabel: typography.styles.bodySmall,
  } as const;

  return (
    <SafeAreaView edges={['top', 'left', 'right', 'bottom']} className="flex-1" style={{ backgroundColor: palette.screenBackground }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 6, paddingTop: 8, paddingBottom: 24 }}>
        <View className="mb-3 flex-row items-center">
          <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()} className="h-8 w-8 items-center justify-center rounded-full" hitSlop={8}>
            <Ionicons name="arrow-back" size={18} color={palette.iconPrimary} />
          </Pressable>

          <View className="ml-1">
            <Text style={[textStyles.headerTitle, { color: palette.textPrimary }]}>LOAN</Text>
            <Text style={[textStyles.headerSubtitle, { color: palette.amountAccent }]}>{approval.loanType}</Text>
          </View>
        </View>

        <View className="flex-row flex-wrap justify-between gap-y-2">
          {infoTiles.map((tile) => (
            <View
              key={tile.label}
              className="w-[49%] rounded-md border px-3 py-3.5"
              style={{ borderColor: palette.border, backgroundColor: palette.surfaceRaised }}
            >
              <Text style={[textStyles.tileLabel, { color: palette.textSecondary }]}>{tile.label}</Text>
              <Text className="mt-1 font-semibold" style={[textStyles.tileValue, { color: palette.amountAccent }]} numberOfLines={1}>
                {tile.value}
              </Text>
            </View>
          ))}
        </View>

        <View className="mt-2 gap-y-2">
          {sectionRows.map((row) => (
            <View key={row.label}>
              <Pressable
                onPress={row.chevron ? row.onPress : undefined}
                className="min-h-12 flex-row items-center justify-between rounded-md border px-3"
                style={{ borderColor: palette.border, backgroundColor: palette.surfaceRaised }}
              >
                <Text style={[textStyles.sectionLabel, { color: palette.textPrimary }]}>{row.label}</Text>
                {row.chevron ? (
                  <Ionicons name={row.isOpen ? 'chevron-up' : 'chevron-down'} size={16} color={palette.textMuted} />
                ) : null}
              </Pressable>

              {row.label === 'Application Workflow History' && row.isOpen ? <ApplicationWorkflowHistory /> : null}
              {row.label === 'Application Tree' && row.isOpen ? <ApplicationTree /> : null}
            </View>
          ))}
        </View>

        <ApprovalActionButtons />
      </ScrollView>
    </SafeAreaView>
  );
}
