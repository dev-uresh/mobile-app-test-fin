import { TextInput, TextInputProps, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface InputProps extends TextInputProps {
  containerClassName?: string;
}

export default function Input({ containerClassName = '', className = '', ...props }: InputProps) {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className={containerClassName}>
      <TextInput
        className={`rounded-lg border px-4 py-3 text-base ${className}`}
        style={{ borderColor: palette.inputBorder, backgroundColor: palette.inputBackground, color: palette.textPrimary }}
        placeholderTextColor={palette.textMuted}
        {...props}
      />
    </View>
  );
}
