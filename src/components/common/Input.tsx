import { TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
  containerClassName?: string;
}

export default function Input({ containerClassName = '', className = '', ...props }: InputProps) {
  return (
    <View className={containerClassName}>
      <TextInput className={`rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-base text-slate-100 ${className}`} placeholderTextColor="#64748b" {...props} />
    </View>
  );
}
