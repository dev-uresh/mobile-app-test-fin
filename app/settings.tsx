import { View, Text, Switch } from 'react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [syncOnCellular, setSyncOnCellular] = useState(false);

  return (
    <View className="flex-1 bg-white p-6">
      <Text className="mb-2 text-3xl font-bold text-gray-800">Settings</Text>
      <Text className="mb-8 text-base text-gray-500">
        Configure your app preferences and behavior.
      </Text>

      <View className="mb-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-1 pr-4">
            <Text className="text-base font-semibold text-gray-800">Push Notifications</Text>
            <Text className="mt-1 text-sm text-gray-500">
              Receive reminders for upcoming and overdue tasks.
            </Text>
          </View>
          <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
        </View>
      </View>

      <View className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-1 pr-4">
            <Text className="text-base font-semibold text-gray-800">Sync on Cellular</Text>
            <Text className="mt-1 text-sm text-gray-500">
              Allow data synchronization while using mobile data.
            </Text>
          </View>
          <Switch value={syncOnCellular} onValueChange={setSyncOnCellular} />
        </View>
      </View>
    </View>
  );
}
