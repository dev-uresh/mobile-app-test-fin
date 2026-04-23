import { ActivityIndicator, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export default function Loader() {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="items-center justify-center p-4">
      <ActivityIndicator size="large" color={palette.amountAccent} />
    </View>
  );
}
