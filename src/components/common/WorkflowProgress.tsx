import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface WorkflowProgressProps {
  currentStep: number;
  totalSteps: number;
  stages: string[];
}

export default function WorkflowProgress({ currentStep, totalSteps, stages }: WorkflowProgressProps) {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="rounded-2xl border px-4 py-4" style={{ borderColor: palette.inputBorder, backgroundColor: palette.surface }}>
      <Text className="text-lg font-semibold" style={{ color: palette.textPrimary }}>Application Workflow History</Text>

      <View className="mt-4 flex-row items-center justify-between">
        <Text className="text-sm" style={{ color: palette.textMuted }}>Workflow Stage</Text>
        <Text className="text-sm" style={{ color: palette.textMuted }}>
          Step {currentStep} of {totalSteps}
        </Text>
      </View>

      <View className="mt-2 flex-row items-center">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isActive = index < currentStep;
          return (
            <View
              key={`step-${index}`}
              className="mr-1.5 h-1 flex-1 rounded-full"
              style={{ backgroundColor: isActive ? palette.amountAccent : palette.border }}
            />
          );
        })}
      </View>

      <View className="mt-4 gap-y-2.5">
        {stages.map((stage, index) => {
          const isDone = index + 1 <= currentStep;
          return (
            <View key={stage} className="flex-row items-center rounded-xl border px-3 py-2.5" style={{ borderColor: palette.border, backgroundColor: palette.surfaceRaised }}>
              <View className="h-4 w-4 items-center justify-center rounded-[3px]" style={{ backgroundColor: isDone ? palette.amountAccent : palette.border }}>
                {isDone ? <Ionicons name="checkmark" size={12} color={theme.raw.neutral.white} /> : null}
              </View>
              <Text className="ml-2.5 text-base font-medium" style={{ color: palette.textPrimary }}>{stage}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
