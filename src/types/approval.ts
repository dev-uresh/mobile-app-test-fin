export interface Approval {
  id: string;
  customerName: string;
  appNumber: string;
  amount: string;
  loanType: string;
  relationshipManager: string;
  dueDate: string;
  createdDate: string;
  requestedAt: string;
}

export type ApprovalRouteParams = {
  id?: string;
} | undefined;
