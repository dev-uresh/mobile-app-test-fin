import { memo, useMemo } from 'react';
import { Text, View } from 'react-native';

import { typography } from '@/config/typography';

type TreeRow = {
  label: string;
  value: string;
};

interface ApplicationTreeProps {
  borderColor: string;
  backgroundColor: string;
  textColor: string;
  mutedColor: string;
  successColor: string;
  primaryColor: string;
  valueChipColor: string;
}

function ApplicationTree({
  borderColor,
  backgroundColor,
  textColor,
  mutedColor,
  successColor,
  primaryColor,
  valueChipColor,
}: ApplicationTreeProps) {
  const treeRows = useMemo<TreeRow[]>(
    () => [
      { label: 'Approval Pending', value: '00095' },
      { label: 'Recommendation Pending', value: '001182' },
      { label: 'Recommendation Pending', value: 'Janith' },
      { label: 'Recommendation Pending', value: '001088' },
    ],
    [],
  );

  return (
    <View className="rounded-b-lg border border-t-0 px-3 py-3" style={{ borderColor, backgroundColor }}>
      <Text className="mb-1 uppercase tracking-wide" style={[typography.styles.caption, { color: mutedColor }]}>
        Application Tree
      </Text>
      <Text className="mb-3 text-xs font-semibold uppercase tracking-wide" style={{ color: successColor }}>
        Pending
      </Text>

      <View className="gap-y-2">
        {treeRows.map((row, index) => (
          <View key={`${row.label}-${row.value}`} className="flex-row items-center rounded-lg border px-3 py-2.5" style={{ borderColor, backgroundColor: index === 0 ? '#22344D' : backgroundColor }}>
            <Text className="flex-1 pr-3 font-medium" style={[typography.styles.bodySmall, { color: textColor }]} numberOfLines={1}>
              {row.label}
            </Text>
            <View className="min-w-20 rounded-md px-3 py-1.5" style={{ backgroundColor: index === 0 ? '#47566D' : valueChipColor }}>
              <Text className="text-right text-xs font-semibold" style={{ color: primaryColor }} numberOfLines={1}>
                {row.value}
              </Text>
            </View>
          </View>
        ))}

        <View className="rounded-xl border px-3 py-2.5" style={{ borderColor: '#1198F0', backgroundColor: '#0E4A86' }}>
          <View className="flex-row items-center justify-between gap-x-3">
            <Text className="text-sm font-medium" style={{ color: '#E5F2FF' }} numberOfLines={1}>
              Current Recommendation
            </Text>
            <View className="rounded-md bg-[#2B6FBB] px-3 py-1">
              <Text className="text-xs font-semibold text-white" numberOfLines={1}>
                Dulanjali. Ravindi
              </Text>
            </View>
          </View>
        </View>

        <View className="rounded-xl border px-3 py-2.5" style={{ borderColor: '#0B7C3C', backgroundColor: '#0D5528' }}>
          <View className="flex-row items-center justify-between gap-x-3">
            <Text className="text-sm font-medium" style={{ color: '#E8FFF1' }} numberOfLines={1}>
              Recommended by
            </Text>
            <View className="rounded-md bg-[#0F6A33] px-3 py-1">
              <Text className="text-xs font-semibold text-white" numberOfLines={1}>
                Chathura. buddika
              </Text>
            </View>
          </View>
        </View>

        <View className="rounded-xl border px-3 py-2.5" style={{ borderColor: '#12C24F', backgroundColor: '#0B4D1E' }}>
          <View className="flex-row items-center justify-between gap-x-3">
            <Text className="text-sm font-medium" style={{ color: '#E8FFF1' }} numberOfLines={1}>
              Submitted By
            </Text>
            <View className="rounded-md bg-[#0F6A33] px-3 py-1">
              <Text className="text-xs font-semibold text-white" numberOfLines={1}>
                001182
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default memo(ApplicationTree);
