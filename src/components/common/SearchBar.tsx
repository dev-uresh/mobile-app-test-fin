import { Ionicons } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChangeText, placeholder = 'Search by customer or ID' }: SearchBarProps) {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View
      className="flex-row items-center rounded-xl border px-3 py-2.5"
      style={{ borderColor: palette.inputBorder, backgroundColor: palette.inputBackground }}
    >
      <Ionicons name="search-outline" size={16} color={palette.textMuted} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={palette.textMuted}
        className="ml-2 flex-1 text-sm"
        style={{ color: palette.textPrimary }}
      />
    </View>
  );
}
