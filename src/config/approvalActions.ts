export type ApprovalActionId = 'recommend' | 'reject' | 'return' | 'requestOpinions';

export interface ApprovalActionItem {
  id: ApprovalActionId;
  label: string;
}

export interface ApprovalActionStyle {
  backgroundColor: string;
  textColor: string;
}

export const approvalActionStyles: Record<ApprovalActionId, ApprovalActionStyle> = {
  recommend: {
    backgroundColor: '#109E4B',
    textColor: '#FFFFFF',
  },
  reject: {
    backgroundColor: '#B11212',
    textColor: '#FFFFFF',
  },
  return: {
    backgroundColor: '#C95B18',
    textColor: '#FFFFFF',
  },
  requestOpinions: {
    backgroundColor: '#C95B18',
    textColor: '#FFFFFF',
  },
};

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
