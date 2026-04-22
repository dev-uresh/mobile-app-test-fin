import { View, Text } from 'react-native';

export default function HelpScreen() {
  return (
    <View className="app-bg flex-1 p-6">
      <Text className="app-title mb-2 text-3xl font-bold">Help Center</Text>
      <Text className="app-body mb-6 text-base">
        Find support resources and onboarding guides.
      </Text>

      <View className="app-surface mb-4 p-4">
        <Text className="app-title text-base font-semibold">How to manage tasks</Text>
        <Text className="app-body mt-2 text-sm leading-6">
          Use the Home tab to create tasks, update completion status, and keep your daily planning in one place.
        </Text>
      </View>

      <View className="app-surface p-4">
        <Text className="app-title text-base font-semibold">Need direct support?</Text>
        <Text className="app-body mt-2 text-sm leading-6">
          Contact the internal app team through your standard support channel and include app version details.
        </Text>
      </View>
    </View>
  );
}
