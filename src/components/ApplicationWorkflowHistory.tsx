import { memo, useMemo, useState } from 'react';
import { Text, View } from 'react-native';

import { typography } from '@/config/typography';

type WorkflowHistoryItem = {
  id: string;
  title: string;
  subtitle: string;
  timestamp: string;
  details?: string;
  isHighlighted?: boolean;
};

interface ApplicationWorkflowHistoryProps {
  borderColor: string;
  backgroundColor: string;
  textColor: string;
  mutedColor: string;
  accentColor: string;
  surfaceColor: string;
}

function ApplicationWorkflowHistory({ borderColor, backgroundColor, textColor, mutedColor, accentColor, surfaceColor }: ApplicationWorkflowHistoryProps) {
  const [activeItemId, setActiveItemId] = useState('chathura.buddika');

  const workflowItems = useMemo<WorkflowHistoryItem[]>(
    () => [
      {
        id: '001182',
        title: 'SUBMITTED - Submit Actions',
        subtitle: '001182',
        timestamp: '3/30/2026, 5:09:14 PM',
        details: 'Cap : 1 limit',
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
      },
    ],
    [],
  );

  return (
    <View className="rounded-b-lg border border-t-0 px-3 py-3" style={{ borderColor, backgroundColor }}>
      <Text className="mb-2 uppercase tracking-wide" style={[typography.styles.caption, { color: mutedColor }]}>
        Application Workflow History
      </Text>

      <View className="gap-y-2">
        {workflowItems.map((item, index) => {
          const isExpanded = activeItemId === item.id;

          return (
            <View key={item.id} className="flex-row">
              <View className="items-center pr-3 pt-3">
                <View className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: accentColor }} />
                {index < workflowItems.length - 1 ? <View className="mt-1 flex-1 w-0.5 rounded-full" style={{ backgroundColor: borderColor }} /> : null}
              </View>

              <View
                className="flex-1 rounded-xl border px-3 py-3"
                style={{ borderColor: item.isHighlighted ? accentColor : borderColor, backgroundColor: item.isHighlighted ? surfaceColor : backgroundColor }}
              >
                <Text className="font-semibold uppercase tracking-wide" style={[typography.styles.caption, { color: accentColor }]} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text className="mt-0.5" style={[typography.styles.bodySmall, { color: item.isHighlighted ? accentColor : mutedColor }]}>
                  {item.subtitle}
                </Text>

                {isExpanded ? (
                  <View className="mt-2 gap-y-1">
                    <Text style={[typography.styles.caption, { color: mutedColor }]}>{item.timestamp}</Text>
                    {item.details ? <Text style={[typography.styles.caption, { color: textColor }]}>{item.details}</Text> : null}
                  </View>
                ) : null}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default memo(ApplicationWorkflowHistory);
