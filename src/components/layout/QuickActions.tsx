import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface QuickAction {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

interface QuickActionsProps {
  actions: QuickAction[];
}

export default function QuickActions({ actions }: QuickActionsProps) {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View>
      <Text className="mt-6 text-2xl font-bold" style={{ color: palette.textPrimary }}>
        Quick Actions
      </Text>
      <View className="mt-4 flex-row justify-between">
        {actions.map((action, index) => (
          <TouchableOpacity
            key={index}
            onPress={action.onPress}
            className="w-[48%] rounded-xl px-4 py-4"
            style={
              action.variant === 'secondary'
                ? { borderWidth: 1, borderColor: palette.border, backgroundColor: palette.surface }
                : { backgroundColor: palette.amountAccent }
            }
          >
            <Text
              className="text-center font-semibold"
              style={{ color: action.variant === 'secondary' ? palette.textSecondary : theme.raw.neutral.white }}
            >
              {action.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
