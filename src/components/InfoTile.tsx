import { Text, View } from 'react-native';

import { typography } from '@/config/typography';

interface InfoTileProps {
  label: string;
  value: string;
  labelColor: string;
  valueColor: string;
  borderColor: string;
  backgroundColor: string;
}

export default function InfoTile({ label, value, labelColor, valueColor, borderColor, backgroundColor }: InfoTileProps) {
  return (
    <View className="rounded-lg border px-3 py-3" style={{ borderColor, backgroundColor }}>
      <Text className="uppercase tracking-wide" style={[typography.styles.caption, { color: labelColor }]} numberOfLines={1}>
        {label}
      </Text>
      <Text className="mt-1 font-semibold" style={[typography.styles.bodyStrong, { color: valueColor }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}
