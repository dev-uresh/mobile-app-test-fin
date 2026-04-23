import { Text, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface TransactionItemProps {
  id: string;
  text: string;
  completed: boolean;
  updatedLabel?: string;
}

export default function TransactionItem({ id, text, completed, updatedLabel = 'Updated today' }: TransactionItemProps) {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="mb-3 rounded-xl border p-3" style={{ borderColor: palette.border, backgroundColor: palette.surfaceRaised }}>
      <View className="flex-row items-start justify-between">
        <View className="w-[78%]">
          <Text className="text-base font-semibold" style={{ color: palette.textPrimary }} numberOfLines={1}>
            APP{id.slice(-8)}
          </Text>
          <Text className="mt-1 text-sm" style={{ color: palette.textMuted }} numberOfLines={1}>
            {text}
          </Text>
        </View>
        <View
          className="rounded-full px-2.5 py-1"
          style={{ backgroundColor: completed ? palette.statusSuccess : palette.statusDanger }}
        >
          <Text className="text-[10px] font-bold tracking-wider" style={{ color: theme.raw.neutral.white }}>
            {completed ? 'DONE' : 'HIGH'}
          </Text>
        </View>
      </View>
      <Text className="mt-2 text-xs" style={{ color: palette.textMuted }}>
        {updatedLabel}
      </Text>
    </View>
  );
}
