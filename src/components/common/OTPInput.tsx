import { TextInput, View } from 'react-native';

interface OTPInputProps {
  value: string;
  onChangeText: (value: string) => void;
  length?: number;
}

export default function OTPInput({ value, onChangeText, length = 6 }: OTPInputProps) {
  return (
    <View className="flex-row justify-between gap-2">
      {Array.from({ length }).map((_, index) => (
        <TextInput
          key={index}
          value={value[index] ?? ''}
          onChangeText={onChangeText}
          keyboardType="number-pad"
          className="h-12 w-12 rounded-lg border border-slate-700 bg-slate-800 text-center text-lg text-slate-100"
          maxLength={1}
        />
      ))}
    </View>
  );
}
