import { Pressable, Text, View } from 'react-native';

import { typography } from '@/config/typography';

interface ErrorStateProps {
  title: string;
  message: string;
  buttonLabel: string;
  onPress: () => void;
  accentColor: string;
  textColor: string;
  backgroundColor: string;
}

export default function ErrorState({ title, message, buttonLabel, onPress, accentColor, textColor, backgroundColor }: ErrorStateProps) {
  return (
    <View className="flex-1 items-center justify-center px-6 py-10">
      <View className="w-full rounded-2xl border px-5 py-5" style={{ borderColor: accentColor, backgroundColor }}>
        <Text className="font-semibold" style={[typography.styles.title, { color: textColor }]}>
          {title}
        </Text>
        <Text className="mt-2" style={[typography.styles.bodySmall, { color: textColor }]}>
          {message}
        </Text>

        <Pressable
          onPress={onPress}
          accessibilityRole="button"
          accessibilityLabel={buttonLabel}
          className="mt-4 items-center justify-center rounded-full px-4 py-3"
          style={{ backgroundColor: accentColor }}
        >
          <Text className="font-semibold text-white">{buttonLabel}</Text>
        </Pressable>
      </View>
    </View>
  );
}
