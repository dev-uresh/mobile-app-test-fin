import { Priority } from '@/components/common/PriorityBadge';

export interface Approval {
  id: string;
  appNumber: string;
  loanType: string;
  customerName: string;
  amount: string;
  dueDate: string;
  createdDate: string;
  priority: Priority;
  relationshipManager: string;
  requestedAt: string;
}

export const approvals: Approval[] = [
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

export function getApprovalById(id?: string | string[]) {
  if (!id) {
    return approvals[0];
  }

  const normalizedId = Array.isArray(id) ? id[0] : id;
  return approvals.find((approval) => approval.id === normalizedId) ?? approvals[0];
}
