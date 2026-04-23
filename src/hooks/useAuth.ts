import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from './useStore';
import { signIn, signOut } from '@/store/authSlice';

export function useAuth() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return useMemo(
    () => ({
      ...auth,
      signIn: (payload: { token: string; user: { id: string; username: string } }) => dispatch(signIn(payload)),
      signOut: () => dispatch(signOut()),
    }),
    [auth, dispatch]
  );
}
