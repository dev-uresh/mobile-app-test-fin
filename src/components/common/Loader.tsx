import { ActivityIndicator, View } from 'react-native';

export default function Loader() {
  return (
    <View className="items-center justify-center p-4">
      <ActivityIndicator size="large" color="#3ea9f5" />
    </View>
  );
}
