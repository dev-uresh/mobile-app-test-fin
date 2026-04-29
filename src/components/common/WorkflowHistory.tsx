import { Pressable, Text, View } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { typography } from '@/config/typography';
import { useTheme } from '@/hooks/useTheme';

export interface WorkflowHistoryItem {
  id: string;
  title: string;
  action: string;
  timestamp: string;
  details?: string;
  icon?: string;
  status?: 'submitted' | 'approved' | 'rejected' | 'pending';
}

interface WorkflowHistoryProps {
  items: WorkflowHistoryItem[];
  title?: string;
}

const statusColors: Record<string, string> = {
  submitted: '#00A3D9',
  approved: '#109E4B',
  rejected: '#B11212',
  pending: '#C95B18',
};

export default function WorkflowHistory({ items, title = 'Application Workflow History' }: WorkflowHistoryProps) {
  const { theme } = useTheme();
  const palette = theme.colors;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'approved':
        return 'checkmark-circle';
      case 'rejected':
        return 'close-circle';
      case 'pending':
        return 'time-outline';
      default:
        return 'ellipse';
    }
  };

  const getStatusColor = (status?: string) => {
    return statusColors[status || 'pending'];
  };

  return (
    <View className="mt-4">
      {/* Section Header */}
      <Text style={[typography.styles.bodySmall, { color: palette.textSecondary }]} className="font-semibold mb-3">
        {title}
      </Text>

      {/* Workflow Items */}
      <View className="gap-y-2">
        {items.map((item, index) => {
          const isExpanded = expandedId === item.id;

          return (
            <View key={item.id}>
              {/* Main Item Header */}
              <Pressable
                onPress={() => toggleExpand(item.id)}
                className="flex-row items-center rounded-lg border px-3 py-3"
                style={{ borderColor: palette.border, backgroundColor: palette.surfaceRaised }}
              >
                {/* Timeline Dot */}
                <View className="items-center mr-3">
                  <Ionicons
                    name={getStatusIcon(item.status)}
                    size={18}
                    color={getStatusColor(item.status)}
                  />
                  {index < items.length - 1 && (
                    <View
                      className="w-0.5 h-6 mt-1"
                      style={{ backgroundColor: palette.border }}
                    />
                  )}
                </View>

                {/* Content */}
                <View className="flex-1 ml-2">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-1">
                      <Text
                        className="font-semibold"
                        style={[typography.styles.bodySmall, { color: palette.textPrimary }]}
                        numberOfLines={1}
                      >
                        {item.title}
                      </Text>
                      <Text
                        className="mt-0.5"
                        style={[typography.styles.caption, { color: getStatusColor(item.status) }]}
                        numberOfLines={1}
                      >
                        {item.action}
                      </Text>
                    </View>

                    {/* Expand/Collapse Icon */}
                    <Ionicons
                      name={isExpanded ? 'chevron-up' : 'chevron-down'}
                      size={18}
                      color={palette.textMuted}
                      style={{ marginLeft: 8 }}
                    />
                  </View>
                </View>
              </Pressable>

              {/* Expanded Details */}
              {isExpanded && (
                <View
                  className="mt-1 ml-9 rounded-lg border border-t-0 px-3 py-3"
                  style={{ borderColor: palette.border, backgroundColor: palette.surface }}
                >
                  <View className="flex-row items-start gap-x-2 mb-2">
                    <Ionicons
                      name="time-outline"
                      size={14}
                      color={palette.textMuted}
                      style={{ marginTop: 2 }}
                    />
                    <Text style={[typography.styles.caption, { color: palette.textMuted }]}>
                      {item.timestamp}
                    </Text>
                  </View>

                  {item.details && (
                    <View className="flex-row items-start gap-x-2">
                      <Ionicons
                        name="document-text-outline"
                        size={14}
                        color={palette.textMuted}
                        style={{ marginTop: 2 }}
                      />
                      <Text
                        style={[typography.styles.caption, { color: palette.textSecondary }]}
                        className="flex-1"
                      >
                        {item.details}
                      </Text>
                    </View>
                  )}
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}
