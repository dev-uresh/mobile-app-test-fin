import { Ionicons } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChangeText, placeholder = 'Search by customer or ID' }: SearchBarProps) {
  return (
    <View className="flex-row items-center rounded-xl border border-[#1f3552] bg-[#0b1f39] px-3 py-2.5">
      <Ionicons name="search-outline" size={16} color="#5578a1" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#5578a1"
        className="ml-2 flex-1 text-sm text-[#c4dbf3]"
      />
    </View>
  );
}
