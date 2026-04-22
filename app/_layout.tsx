import "../global.css";
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { industrialTheme } from '@/theme/industrial';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor={industrialTheme.colors.bg} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: industrialTheme.colors.bg },
        }}
      />
    </>
  );
}
