import { useLocalSearchParams } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ActionButton from '@/components/approval-details/ActionButton';
import DetailCard from '@/components/approval-details/DetailCard';
import WorkflowProgress from '@/components/approval-details/WorkflowProgress';
import { getApprovalById } from '@/data/approvals';

export default function ApprovalDetailsScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const approval = getApprovalById(id);

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} className="flex-1 bg-[#020b1a]">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 12, paddingTop: 10, paddingBottom: 24 }}>
        <View className="flex-row gap-x-2.5">
          <ActionButton label="Recommend" tone="success" />
          <ActionButton label="Reject" tone="danger" />
        </View>

        <View className="mt-2.5 flex-row gap-x-2.5">
          <ActionButton label="Return" tone="warning" />
          <ActionButton label="Request Opinions" tone="primary" />
        </View>

        <View className="mt-3 gap-y-2.5">
          <DetailCard
            icon="person"
            title="Customer Name"
            value={approval.customerName}
            rightLinkText="View Appraisal Report"
          />

          <View className="flex-row gap-x-2.5">
            <View className="flex-1">
              <DetailCard
                icon="wallet"
                title="Loan Amount"
                value={approval.amount}
                valueTone="success"
              />
            </View>
            <View className="flex-1">
              <DetailCard icon="calendar" title="Due Date" value={approval.dueDate} />
            </View>
          </View>

          <DetailCard
            icon="document-text"
            title="Application Summary"
            value={approval.loanType}
            priority={approval.priority}
            showChevron
          />

          <DetailCard
            icon="people"
            title="Opinions"
            value={approval.relationshipManager}
            subValue={`Credit Manager     ${approval.requestedAt}`}
            priority={approval.priority}
            showChevron
          />

          <WorkflowProgress
            currentStep={2}
            totalSteps={4}
            stages={['Submitted', 'Verification', 'Approver Review']}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
