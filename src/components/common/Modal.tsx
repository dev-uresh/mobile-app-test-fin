import { Modal as RNModal, ModalProps, View } from 'react-native';
import { ReactNode } from 'react';
import { useTheme } from '@/hooks/useTheme';

interface AppModalProps extends ModalProps {
  children: ReactNode;
}

export default function Modal({ children, ...props }: AppModalProps) {
  const { theme } = useTheme();

  return (
    <RNModal transparent animationType="fade" {...props}>
      <View
        className="flex-1 items-center justify-center p-6"
        style={{ backgroundColor: theme.name === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(8,19,31,0.25)' }}
      >
        {children}
      </View>
    </RNModal>
  );
}
