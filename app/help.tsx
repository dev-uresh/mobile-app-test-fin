import { View, Text } from 'react-native';

export default function HelpScreen() {
  return (
    <View className="flex-1 bg-white p-6">
      <Text className="mb-2 text-3xl font-bold text-gray-800">Help Center</Text>
      <Text className="mb-6 text-base text-gray-500">
        Find support resources and onboarding guides.
      </Text>

      <View className="mb-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
        <Text className="text-base font-semibold text-gray-800">How to manage tasks</Text>
        <Text className="mt-2 text-sm leading-6 text-gray-500">
          Use the Home tab to create tasks, update completion status, and keep your daily planning in one place.
        </Text>
      </View>

      <View className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
        <Text className="text-base font-semibold text-gray-800">Need direct support?</Text>
        <Text className="mt-2 text-sm leading-6 text-gray-500">
          Contact the internal app team through your standard support channel and include app version details.
        </Text>
      </View>
    </View>
  );
}
