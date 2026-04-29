import { Priority } from '@/components/common/PriorityBadge';
import { Approval } from '@/types/approval';

type ApprovalRecord = Approval & {
  dueDate: string;
  createdDate: string;
  priority: Priority;
  requestedAt: string;
};

export const approvals: ApprovalRecord[] = [
  {
    id: '1',
    appNumber: 'APP00000856',
    loanType: 'Business Loan',
    customerName: 'Isal Lakshitha Parera',
    amount: 'RS 150,000',
    dueDate: 'Mar 18, 2026',
    createdDate: 'March 16, 2026',
    priority: 'HIGH',
    relationshipManager: 'Isuru Bandara',
    requestedAt: '2 hours ago',
  },
  {
    id: '2',
    appNumber: 'APP00000857',
    loanType: 'Business Loan',
    customerName: 'Nimali Perera',
    amount: 'RS 95,000',
    dueDate: 'Mar 20, 2026',
    createdDate: 'March 16, 2026',
    priority: 'LOW',
    relationshipManager: 'Tharindu Peris',
    requestedAt: '4 hours ago',
  },
  {
    id: '3',
    appNumber: 'APP00000858',
    loanType: 'Personal Loan',
    customerName: 'Dhanushka Fernando',
    amount: 'RS 220,000',
    dueDate: 'Mar 24, 2026',
    createdDate: 'March 15, 2026',
    priority: 'MEDIUM',
    relationshipManager: 'Sachini De Silva',
    requestedAt: 'Yesterday',
  },
  {
    id: '4',
    appNumber: 'APP00000859',
    loanType: 'Business Loan',
    customerName: 'Supun Jayawardana',
    amount: 'RS 80,000',
    dueDate: 'Mar 28, 2026',
    createdDate: 'March 14, 2026',
    priority: 'HIGH',
    relationshipManager: 'Kavisha Nethmini',
    requestedAt: 'Yesterday',
  },
];

export function findApprovalById(id?: string) {
  if (!id) {
    return undefined;
  }

  return approvals.find((approval) => approval.id === id);
}

export async function fetchApprovalById(id?: string): Promise<ApprovalRecord> {
  await Promise.resolve();

  if (!id) {
    throw new Error('Missing route params.');
  }

  const approval = findApprovalById(id);

  if (!approval) {
    throw new Error('Approval not found.');
  }

  return approval;
}

