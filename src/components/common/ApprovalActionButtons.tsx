import { Pressable, Text, View } from 'react-native';

import { approvalActionRows, ApprovalActionId, ApprovalActionItem } from '@/config/approvalActions';
import { typography } from '@/config/typography';
import { useTheme } from '@/hooks/useTheme';

interface ApprovalActionButtonsProps {
  actions?: readonly (readonly ApprovalActionItem[])[];
  onActionPress?: (actionId: ApprovalActionId) => void;
}

export default function ApprovalActionButtons({ actions = approvalActionRows, onActionPress }: ApprovalActionButtonsProps) {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="mt-3 gap-y-2.5">
      {actions.map((row, rowIndex) => (
        <View key={`approval-action-row-${rowIndex}`} className="flex-row gap-x-2.5">
          {row.map((action) => (
            <Pressable
              key={action.id}
              onPress={() => onActionPress?.(action.id)}
              className="h-10 flex-1 items-center justify-center rounded-full"
              style={{ backgroundColor: palette.surfaceRaised }}
            >
              <Text style={[typography.styles.bodySmall, { color: palette.textSecondary }]}>{action.label}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
}
