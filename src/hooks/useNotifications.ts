import { useAppSelector } from './useStore';

export function useNotifications() {
  const notifications = useAppSelector((state) => state.notifications.notifications);
  return { notifications };
}
