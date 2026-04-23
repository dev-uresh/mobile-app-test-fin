import { TextInput, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface OTPInputProps {
  value: string;
  onChangeText: (value: string) => void;
  length?: number;
}

export default function OTPInput({ value, onChangeText, length = 6 }: OTPInputProps) {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="flex-row justify-between gap-2">
      {Array.from({ length }).map((_, index) => (
        <TextInput
          key={index}
          value={value[index] ?? ''}
          onChangeText={onChangeText}
          keyboardType="number-pad"
          className="h-12 w-12 rounded-lg border text-center text-lg"
          style={{ borderColor: palette.inputBorder, backgroundColor: palette.inputBackground, color: palette.textPrimary }}
          maxLength={1}
        />
      ))}
    </View>
  );
}
