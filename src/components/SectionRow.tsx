import { memo, ReactNode, useEffect, useMemo, useRef } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { typography } from '@/config/typography';

interface SectionRowProps {
  title: string;
  isOpen: boolean;
  onPress: () => void;
  children?: ReactNode;
  contentPaddingClassName?: string;
  headerBackgroundColor: string;
  headerBorderColor: string;
  textColor: string;
  chevronColor: string;
  contentBorderColor: string;
  contentBackgroundColor: string;
}

function SectionRow({
  title,
  isOpen,
  onPress,
  children,
  contentPaddingClassName = 'px-3 pb-3',
  headerBackgroundColor,
  headerBorderColor,
  textColor,
  chevronColor,
  contentBorderColor,
  contentBackgroundColor,
}: SectionRowProps) {
  const chevronRotation = useRef(new Animated.Value(isOpen ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(chevronRotation, {
      toValue: isOpen ? 1 : 0,
      duration: 180,
      useNativeDriver: true,
    }).start();
  }, [chevronRotation, isOpen]);

  const rotateStyle = useMemo(
    () => ({
      transform: [
        {
          rotate: chevronRotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
          }),
        },
      ],
    }),
    [chevronRotation],
  );

  return (
    <View>
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={title}
        hitSlop={8}
        className="min-h-12 flex-row items-center justify-between rounded-lg border px-3 py-3"
        style={{ borderColor: headerBorderColor, backgroundColor: headerBackgroundColor }}
      >
        <Text className="font-medium" style={[typography.styles.bodySmall, { color: textColor }]}>
          {title}
        </Text>

        <Animated.View style={rotateStyle}>
          <Ionicons name="chevron-down" size={16} color={chevronColor} />
        </Animated.View>
      </Pressable>

      {isOpen ? (
        <View className={contentPaddingClassName} style={{ borderColor: contentBorderColor, backgroundColor: contentBackgroundColor }}>
          {children}
        </View>
      ) : null}
    </View>
  );
}

export default memo(SectionRow);
