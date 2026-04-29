import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { typography } from '@/config/typography';
import { useTheme } from '@/hooks/useTheme';

type WorkflowItem = {
  id: string;
  title: string;
  subtitle: string;
  timestamp: string;
  details?: string;
  isHighlighted?: boolean;
};

const workflowItems: WorkflowItem[] = [
  {
    id: '001182',
    title: 'SUBMITTED - Submit Actions',
    subtitle: '001182',
    timestamp: '3/30/2026, 5:09:14 PM',
    details: 'Cap : 1 limit',
    isHighlighted: false,
  },
  {
    id: 'chathura.buddika',
    title: 'chathura.buddika',
    subtitle: 'Time as previous action : 1m later',
    timestamp: '3/30/2026, 5:09:14 PM',
    details: 'APPROVED - Approve Action\nCap : 1m later\nRemarks : Test01',
    isHighlighted: true,
  },
  {
    id: 'Dulanjali.Ravindi',
    title: 'Dulanjali. Ravindi',
    subtitle: 'Holding for : 6d 18h 51m later',
    timestamp: '3/30/2026, 5:09:14 PM',
    isHighlighted: false,
  },
];

export default function ApplicationWorkflowHistory() {
  const { theme } = useTheme();
  const palette = theme.colors;
  const [openItemId, setOpenItemId] = useState<string>('chathura.buddika');

  return (
    <View className="mx-3 mt-2 rounded-b-md border border-t-0 px-3 py-3" style={{ borderColor: palette.border, backgroundColor: palette.surfaceRaised }}>
      <Text className="mb-2 font-semibold uppercase tracking-wide" style={[typography.styles.caption, { color: palette.textMuted }]}>Application Workflow History</Text>

      <View className="gap-y-2">
        {workflowItems.map((item, index) => {
          const isOpen = openItemId === item.id;

          return (
            <View key={item.id}>
              <View className="flex-row">
                <View className="items-center pr-3 pt-3">
                  <View className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#2EA7FF' }} />
                  {index < workflowItems.length - 1 ? <View className="mt-1 h-full w-[2px] flex-1 rounded-full" style={{ backgroundColor: palette.border }} /> : null}
                </View>

                <Pressable
                  onPress={() => setOpenItemId((current) => (current === item.id ? '' : item.id))}
                  className="flex-1 rounded-xl border px-3 py-3"
                  style={{
                    borderColor: item.isHighlighted ? '#2D5FA5' : palette.border,
                    backgroundColor: item.isHighlighted ? '#0F2137' : palette.surface,
                  }}
                >
                  <Text className="font-semibold uppercase tracking-wide" style={[typography.styles.caption, { color: '#28A6FF' }]} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text className="mt-0.5" style={[typography.styles.bodySmall, { color: item.isHighlighted ? '#8EC6FF' : palette.textMuted }]}>
                    {item.subtitle}
                  </Text>

                  {isOpen ? (
                    <View className="mt-2 gap-y-1.5">
                      <Text style={[typography.styles.caption, { color: palette.textMuted }]}>{item.timestamp}</Text>
                      {item.details ? <Text style={[typography.styles.caption, { color: palette.textSecondary }]}>{item.details}</Text> : null}
                    </View>
                  ) : null}
                </Pressable>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}