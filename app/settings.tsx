import { View, Text, Switch } from 'react-native';
import { useState } from 'react';
import { industrialTheme } from '@/theme/industrial';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [syncOnCellular, setSyncOnCellular] = useState(false);
  const { colors } = industrialTheme;

  return (
    <View className="app-bg flex-1 p-6">
      <Text className="app-title mb-2 text-3xl font-bold">Settings</Text>
      <Text className="app-body mb-8 text-base">
        Configure your app preferences and behavior.
      </Text>

      <View className="app-surface mb-4 p-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-1 pr-4">
            <Text className="app-title text-base font-semibold">Push Notifications</Text>
            <Text className="app-body mt-1 text-sm">
              Receive reminders for upcoming and overdue tasks.
            </Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: colors.border, true: colors.accentStrong }}
            thumbColor={notificationsEnabled ? colors.text : colors.muted}
            ios_backgroundColor={colors.border}
          />
        </View>
      </View>

      <View className="app-surface p-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-1 pr-4">
            <Text className="app-title text-base font-semibold">Sync on Cellular</Text>
            <Text className="app-body mt-1 text-sm">
              Allow data synchronization while using mobile data.
            </Text>
          </View>
          <Switch
            value={syncOnCellular}
            onValueChange={setSyncOnCellular}
            trackColor={{ false: colors.border, true: colors.accentStrong }}
            thumbColor={syncOnCellular ? colors.text : colors.muted}
            ios_backgroundColor={colors.border}
          />
        </View>
      </View>
    </View>
  );
}
