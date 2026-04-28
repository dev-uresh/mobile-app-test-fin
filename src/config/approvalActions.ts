export type ApprovalActionId = 'recommend' | 'reject' | 'return' | 'requestOpinions';

export interface ApprovalActionItem {
  id: ApprovalActionId;
  label: string;
}

export const approvalActionRows: readonly (readonly ApprovalActionItem[])[] = [
  [
    { id: 'recommend', label: 'Recommend' },
    { id: 'reject', label: 'Reject' },
  ],
  [
    { id: 'return', label: 'Return' },
    { id: 'requestOpinions', label: 'Request Opinions' },
  ],
];
