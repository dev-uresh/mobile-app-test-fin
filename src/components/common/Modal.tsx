import { Modal as RNModal, ModalProps, View } from 'react-native';
import { ReactNode } from 'react';

interface AppModalProps extends ModalProps {
  children: ReactNode;
}

export default function Modal({ children, ...props }: AppModalProps) {
  return (
    <RNModal transparent animationType="fade" {...props}>
      <View className="flex-1 items-center justify-center bg-black/60 p-6">{children}</View>
    </RNModal>
  );
}
