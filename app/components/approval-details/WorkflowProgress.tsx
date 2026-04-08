import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

interface WorkflowProgressProps {
  currentStep: number;
  totalSteps: number;
  stages: string[];
}

export default function WorkflowProgress({ currentStep, totalSteps, stages }: WorkflowProgressProps) {
  return (
    <View className="rounded-2xl border border-[#0f78bf] bg-[#0b3050] px-4 py-4">
      <Text className="text-base font-semibold text-[#e4f2ff]">Application Workflow History</Text>

      <View className="mt-4 flex-row items-center justify-between">
        <Text className="text-xs text-[#8db2d4]">Workflow Stage</Text>
        <Text className="text-xs text-[#8db2d4]">
          Step {currentStep} of {totalSteps}
        </Text>
      </View>

      <View className="mt-2 flex-row items-center">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isActive = index < currentStep;
          return (
            <View
              key={`step-${index}`}
              className={`mr-1.5 h-1 flex-1 rounded-full ${isActive ? 'bg-[#00adff]' : 'bg-[#cad3de]'}`}
            />
          );
        })}
      </View>

      <View className="mt-4 gap-y-2.5">
        {stages.map((stage, index) => {
          const isDone = index + 1 <= currentStep;
          return (
            <View
              key={stage}
              className="flex-row items-center rounded-xl border border-[#2d4f71] bg-[#173754] px-3 py-2.5"
            >
              <View
                className={`h-4 w-4 items-center justify-center rounded-[3px] ${isDone ? 'bg-[#20a7f4]' : 'bg-[#d2dce7]'}`}
              >
                {isDone ? <Ionicons name="checkmark" size={12} color="#00182d" /> : null}
              </View>
              <Text className="ml-2.5 text-sm font-medium text-[#d7e8fa]">{stage}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
