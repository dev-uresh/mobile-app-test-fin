import { useCallback, useMemo, useState } from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ApprovalActionButtons from '@/components/ApprovalActionButtons';
import ApplicationTree from '@/components/ApplicationTree';
import ApplicationWorkflowHistory from '@/components/ApplicationWorkflowHistory';
import ErrorState from '@/components/ErrorState';
import InfoTile from '@/components/InfoTile';
import LoadingState from '@/components/LoadingState';
import ScreenHeader from '@/components/ScreenHeader';
import SectionRow from '@/components/SectionRow';
import { SECTION_LABELS } from '@/constants/sectionLabels';
import { typography } from '@/config/typography';
import { useApproval } from '@/hooks/useApproval';
import { useTheme } from '@/hooks/useTheme';
import { MainStackParamList } from '@/navigation/types';
import { ApprovalRouteParams } from '@/types/approval';

type Navigation = NativeStackNavigationProp<MainStackParamList, 'CardDetail'>;
type CardDetailRoute = RouteProp<MainStackParamList, 'CardDetail'>;

type InfoTileItem = {
  id: string;
  label: string;
  value: string;
};

export default function CardDetailScreen() {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<CardDetailRoute>();
  const { theme } = useTheme();
  const palette = theme.colors;
  const [isWorkflowOpen, setIsWorkflowOpen] = useState(false);
  const [isTreeOpen, setIsTreeOpen] = useState(false);

  const approvalParams: ApprovalRouteParams = route.params;
  const approvalId = approvalParams?.id;
  const { approval, isLoading, error, refetch } = useApproval(approvalId);

  const goBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [navigation]);

  const toggleWorkflow = useCallback(() => {
    setIsWorkflowOpen((current) => !current);
  }, [setIsWorkflowOpen]);

  const toggleTree = useCallback(() => {
    setIsTreeOpen((current) => !current);
  }, [setIsTreeOpen]);

  const infoTiles = useMemo<InfoTileItem[]>(() => {
    if (!approval) {
      return [];
    }

    const customerNic = `${approval.id}200063301654`.slice(0, 12);
    const amountValue = approval.amount.replace(/^RS/i, 'Rs.').replace(' ', '');
    const marketingOfficer = approval.relationshipManager.split(' ')[0] ?? approval.relationshipManager;

    return [
      { id: 'customer-name', label: 'Customer Name', value: approval.customerName },
      { id: 'customer-nic', label: 'Customer NIC', value: customerNic },
      { id: 'application-no', label: 'Application No', value: approval.appNumber },
      { id: 'amount', label: 'Amount', value: amountValue },
      { id: 'interest-rate', label: 'Interest Rate', value: '12%' },
      { id: 'group-exposure', label: 'Group Exposure', value: amountValue },
      { id: 'branch', label: 'Branch', value: 'Head Office' },
      { id: 'marketing-officer', label: 'Marketing Officer', value: marketingOfficer },
    ];
  }, [approval]);

  const sectionItems = useMemo(
    () => [
      {
        id: SECTION_LABELS.workflowHistory,
        title: SECTION_LABELS.workflowHistory,
        isOpen: isWorkflowOpen,
        onPress: toggleWorkflow,
        renderContent: () => (
          <ApplicationWorkflowHistory
            borderColor={palette.border}
            backgroundColor={palette.surfaceRaised}
            textColor={palette.textSecondary}
            mutedColor={palette.textMuted}
            accentColor={palette.amountAccent}
            surfaceColor={palette.surface}
          />
        ),
      },
      {
        id: SECTION_LABELS.applicationTree,
        title: SECTION_LABELS.applicationTree,
        isOpen: isTreeOpen,
        onPress: toggleTree,
        renderContent: () => (
          <ApplicationTree
            borderColor={palette.border}
            backgroundColor={palette.surfaceRaised}
            textColor={palette.textPrimary}
            mutedColor={palette.textMuted}
            successColor={palette.statusSuccess}
            primaryColor={palette.raw.neutral.white}
            valueChipColor={palette.surface}
          />
        ),
      },
      {
        id: SECTION_LABELS.appraisalForm,
        title: SECTION_LABELS.appraisalForm,
        isOpen: false,
        onPress: () => undefined,
      },
    ],
    [isTreeOpen, isWorkflowOpen, palette.border, palette.amountAccent, palette.surfaceRaised, palette.surface, palette.textMuted, palette.textPrimary, palette.statusSuccess, palette.raw.neutral.white, toggleTree, toggleWorkflow],
  );

  const renderInfoTile: ListRenderItem<InfoTileItem> = useCallback(
    ({ item }) => (
      <InfoTile
        label={item.label}
        value={item.value}
        labelColor={palette.textSecondary}
        valueColor={palette.amountAccent}
        borderColor={palette.border}
        backgroundColor={palette.surfaceRaised}
      />
    ),
    [palette.amountAccent, palette.border, palette.surfaceRaised, palette.textSecondary],
  );

  const keyExtractor = useCallback((item: InfoTileItem) => item.id, []);

  if (isLoading) {
    return <LoadingState message="Loading approval details..." color={palette.amountAccent} messageColor={palette.textMuted} />;
  }

  if (error || !approval) {
    const message = error?.message ?? 'Approval not found.';

    return (
      <SafeAreaView edges={['top', 'left', 'right', 'bottom']} className="flex-1" style={{ backgroundColor: palette.screenBackground }}>
        <ErrorState
          title="Unable to load approval"
          message={message}
          buttonLabel="Try again"
          onPress={refetch}
          accentColor={palette.amountAccent}
          textColor={palette.textPrimary}
          backgroundColor={palette.surfaceRaised}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top', 'left', 'right', 'bottom']} className="flex-1" style={{ backgroundColor: palette.screenBackground }}>
      <FlatList
        data={infoTiles}
        renderItem={renderInfoTile}
        keyExtractor={keyExtractor}
        numColumns={2}
        columnWrapperClassName="px-4 gap-x-2.5"
        contentContainerClassName="pb-6"
        ListHeaderComponent={
          <View>
            <ScreenHeader
              title="LOAN"
              subtitle={approval.loanType}
              onBackPress={goBack}
              iconColor={palette.iconPrimary}
              titleColor={palette.textPrimary}
              subtitleColor={palette.amountAccent}
            />

            <View className="px-4 pt-4">
              <View className="gap-y-2.5">
                {sectionItems.map((section) => (
                  <SectionRow
                    key={section.id}
                    title={section.title}
                    isOpen={section.isOpen}
                    onPress={section.onPress}
                    headerBackgroundColor={palette.surfaceRaised}
                    headerBorderColor={palette.border}
                    textColor={palette.textPrimary}
                    chevronColor={palette.textMuted}
                    contentBorderColor={palette.border}
                    contentBackgroundColor={palette.surfaceRaised}
                  >
                    {section.renderContent ? section.renderContent() : null}
                  </SectionRow>
                ))}

                <View className="rounded-lg border px-3 py-3" style={{ borderColor: palette.border, backgroundColor: palette.surfaceRaised }}>
                  <Text className="font-medium" style={[typography.styles.bodySmall, { color: palette.textPrimary }]}>
                    {SECTION_LABELS.appraisalForm}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        }
        ListFooterComponent={<ApprovalActionButtons />}
        ListEmptyComponent={null}
      />
    </SafeAreaView>
  );
}
