import { useCallback, useEffect, useState } from 'react';

import { Approval } from '@/types/approval';
import { fetchApprovalById } from '@/store/api/bankingApi';

interface UseApprovalResult {
  approval: Approval | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useApproval(approvalId?: string): UseApprovalResult {
  const [approval, setApproval] = useState<Approval | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [refreshIndex, setRefreshIndex] = useState(0);

  const refetch = useCallback(() => {
    setRefreshIndex((current) => current + 1);
  }, []);

  useEffect(() => {
    let active = true;

    async function loadApproval() {
      setIsLoading(true);
      setError(null);

      try {
        const result = await fetchApprovalById(approvalId);

        if (!active) {
          return;
        }

        setApproval(result);
      } catch (caughtError) {
        if (!active) {
          return;
        }

        setApproval(null);
        setError(caughtError instanceof Error ? caughtError : new Error('Failed to load approval.'));
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    void loadApproval();

    return () => {
      active = false;
    };
  }, [approvalId, refreshIndex]);

  return { approval, isLoading, error, refetch };
}
