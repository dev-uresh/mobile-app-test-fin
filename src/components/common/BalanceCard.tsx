import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { typography } from '@/config/typography';
import { useTheme } from '@/hooks/useTheme';

interface BalanceCardProps {
  icon: ReactNode;
  label: string;
  value: number | string;
  subText?: string;
  iconBg?: string;
}

export default function BalanceCard({ icon, label, value, subText = '+3 today', iconBg }: BalanceCardProps) {
  const { theme } = useTheme();
  const palette = theme.colors;

  return (
    <View className="w-[48%] rounded-2xl border p-4" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
      <View className="h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: iconBg ?? palette.surfaceRaised }}>
        {icon}
      </View>
      <Text className="mt-4" style={[typography.styles.subtitle, { color: palette.textMuted }]}>
        {label}
      </Text>
      <Text className="mt-2 font-bold" style={[typography.styles.pageTitle, { color: palette.textPrimary }]}>
        {value}
      </Text>
      {subText ? (
        <Text className="mt-4" style={[typography.styles.body, { color: palette.textSecondary }]}>
          {subText}
        </Text>
      ) : null}
    </View>
  );
}
