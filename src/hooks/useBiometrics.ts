import { useMemo } from 'react';
import { biometricService } from '@/services/biometrics/BiometricService';

export function useBiometrics() {
  return useMemo(
    () => ({
      isAvailable: () => biometricService.isAvailable(),
      authenticate: () => biometricService.authenticate(),
    }),
    []
  );
}
