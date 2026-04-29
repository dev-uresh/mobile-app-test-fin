import { ActivityIndicator, Text, View } from 'react-native';

interface LoadingStateProps {
  message: string;
  color: string;
  messageColor: string;
}

export default function LoadingState({ message, color, messageColor }: LoadingStateProps) {
  return (
    <View className="flex-1 items-center justify-center px-6 py-10">
      <ActivityIndicator size="large" color={color} />
      <Text className="mt-4 text-center" style={{ color: messageColor }}>
        {message}
      </Text>
    </View>
  );
}
