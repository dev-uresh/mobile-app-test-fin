import { Text, TouchableOpacity, View } from 'react-native';

interface QuickAction {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

interface QuickActionsProps {
  actions: QuickAction[];
}

export default function QuickActions({ actions }: QuickActionsProps) {
  return (
    <View>
      <Text className="mt-6 text-2xl font-bold text-[#d8e6f7]">Quick Actions</Text>
      <View className="mt-4 flex-row justify-between">
        {actions.map((action, index) => (
          <TouchableOpacity key={index} onPress={action.onPress} className={action.variant === 'secondary' ? 'w-[48%] rounded-xl border border-[#29476d] bg-[#102541] px-4 py-4' : 'w-[48%] rounded-xl bg-[#0f67b5] px-4 py-4'}>
            <Text className={action.variant === 'secondary' ? 'text-center font-semibold text-[#c4dbf3]' : 'text-center font-semibold text-[#e7f4ff]'}>
              {action.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
