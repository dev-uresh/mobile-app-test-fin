import { Text, View } from 'react-native';

export default function NotificationsScreen() {
  return (
    <View className="app-bg flex-1 p-6">
      <Text className="app-title text-3xl font-bold">Notifications</Text>
      <Text className="app-body mt-2">Alerts, reminders, and status updates appear here.</Text>
    </View>
  );
}
