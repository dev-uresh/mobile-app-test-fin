import { memo } from 'react';
import { Pressable, Text, View } from 'react-native';

import {
  approvalActionRows,
  approvalActionStyles,
  ApprovalActionId,
  ApprovalActionItem,
} from '@/config/approvalActions';

interface ApprovalActionButtonsProps {
  actions?: readonly (readonly ApprovalActionItem[])[];
  onActionPress?: (actionId: ApprovalActionId) => void;
}

function ApprovalActionButtons({ actions = approvalActionRows, onActionPress }: ApprovalActionButtonsProps) {
  return (
    <View className="mt-4 gap-y-3 px-4 pb-2">
      {actions.map((row, rowIndex) => (
        <View key={`approval-action-row-${rowIndex}`} className="flex-row gap-x-3">
          {row.map((action) => (
            <Pressable
              key={action.id}
              onPress={() => onActionPress?.(action.id)}
              accessibilityRole="button"
              accessibilityLabel={action.label}
              className="h-11 flex-1 items-center justify-center rounded-full"
              style={{ backgroundColor: approvalActionStyles[action.id].backgroundColor }}
            >
              <Text className="font-medium" style={{ color: approvalActionStyles[action.id].textColor }}>
                {action.label}
              </Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
}

export default memo(ApprovalActionButtons);
