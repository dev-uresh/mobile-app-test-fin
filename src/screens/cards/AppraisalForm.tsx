import { useState } from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { typography } from '@/config/typography';
import { useTheme } from '@/hooks/useTheme';

const SECTIONS = [
  'Basic Details',
  'Summary of Security / Other Terms & Conditions',
  'Security for the facilities and Valuation Report Details',
  'Borrowing Details Extracted From CRID Report',
  'Details of the existing facility if MIFL',
  'Bank Turn over for last Three Month',
  'Debt Servicing Ability',
  'Customer Risk Rating',
  'Approval History',
  'Loan Installment Slab',
];

export default function AppraisalForm() {
  const navigation = useNavigation<any>();
  const { theme } = useTheme();
  const palette = theme.colors;
  const [open, setOpen] = useState<Record<number, boolean>>({});

  return (
    <SafeAreaView edges={["top", "left", "right", "bottom"]} className="flex-1" style={{ backgroundColor: palette.screenBackground }}>
      <View className="px-4 pb-2 pt-2">
        <View className="flex-row items-start gap-x-3">
          <Pressable
            onPress={() => navigation.canGoBack() && navigation.goBack()}
            className="mt-1 h-8 w-8 items-center justify-center rounded-full"
            style={{ backgroundColor: palette.surface }}
            hitSlop={8}
          >
            <Ionicons name="arrow-back" size={18} color={palette.iconPrimary} />
          </Pressable>

          <View className="ml-1 flex-1">
            <Text className="font-semibold uppercase tracking-wide" style={[typography.styles.title, { color: palette.textPrimary }]}>CREDIT APPRAISAL FORM</Text>
            <Text className="mt-0.5" style={[typography.styles.bodySmall, { color: palette.amountAccent }]}>Mahindra Idea Finance Limited</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 140 }}>
        {SECTIONS.map((label, idx) => (
          <View key={label} className="mb-3">
            <Pressable
              onPress={() => setOpen((s) => ({ ...s, [idx]: !s[idx] }))}
              className="min-h-12 flex-row items-center justify-between rounded-xl border px-3 py-3"
              style={{ borderColor: palette.border, backgroundColor: palette.surfaceRaised }}
            >
              <Text style={[typography.styles.bodySmall, { color: palette.textPrimary }]}>{label}</Text>
              <Ionicons name={open[idx] ? 'chevron-up' : 'chevron-down'} size={16} color={palette.textMuted} />
            </Pressable>

            {open[idx] ? (
              <View className="mt-2 rounded-lg border px-3 py-3" style={{ borderColor: palette.border, backgroundColor: palette.surface }}>
                <Text style={[typography.styles.bodySmall, { color: palette.textSecondary }]}>Placeholder content for {label}.</Text>
              </View>
            ) : null}
          </View>
        ))}

        <View className="mt-4 flex-row justify-end">
          <Pressable
            className="rounded-full px-6 py-3"
            style={{ backgroundColor: palette.amountAccent }}
            onPress={() => {}}
          >
            <Text style={[typography.styles.bodySmall, { color: '#fff' }]}>Download</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
