import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

type ActionTone = 'success' | 'danger' | 'warning' | 'primary';

interface ActionButtonProps {
  label: string;
  tone: ActionTone;
  onPress?: () => void;
}

export default function ActionButton({ label, tone, onPress }: ActionButtonProps) {
  const { theme } = useTheme();
  const palette = theme.colors;
  const toneColor =
    tone === 'success'
      ? palette.statusSuccess
      : tone === 'danger'
        ? palette.statusDanger
        : tone === 'warning'
          ? palette.statusWarning
          : palette.amountAccent;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="h-12 flex-1 items-center justify-center rounded-xl border"
      style={{ backgroundColor: palette.surface, borderColor: toneColor }}
    >
      <Text className="text-base font-semibold" style={{ color: theme.raw.neutral.white }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
