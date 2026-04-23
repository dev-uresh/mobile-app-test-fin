import { Text, TouchableOpacity } from 'react-native';

type ActionTone = 'success' | 'danger' | 'warning' | 'primary';

interface ActionButtonProps {
  label: string;
  tone: ActionTone;
  onPress?: () => void;
}

const TONE_STYLES: Record<ActionTone, { border: string; text: string }> = {
  success: { border: 'border-[#00d27f]', text: 'text-[#dffcee]' },
  danger: { border: 'border-[#b20f2a]', text: 'text-[#fde4ea]' },
  warning: { border: 'border-[#8f9c00]', text: 'text-[#f6f8d7]' },
  primary: { border: 'border-[#00a5ff]', text: 'text-[#e3f4ff]' },
};

export default function ActionButton({ label, tone, onPress }: ActionButtonProps) {
  const style = TONE_STYLES[tone];

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} className={`h-12 flex-1 items-center justify-center rounded-xl border bg-[#051b33] ${style.border}`}>
      <Text className={`text-base font-semibold ${style.text}`}>{label}</Text>
    </TouchableOpacity>
  );
}
