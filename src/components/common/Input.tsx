import { TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
  containerClassName?: string;
}

export default function Input({ containerClassName = '', className = '', ...props }: InputProps) {
  return (
    <View className={containerClassName}>
      <TextInput className={`rounded-lg border border-industrial-border bg-industrial-surface px-4 py-3 text-base text-industrial-text ${className}`} placeholderTextColor="#728ba6" {...props} />
    </View>
  );
}
