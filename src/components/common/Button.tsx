import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ReactNode } from 'react';
import { useTheme } from '@/hooks/useTheme';

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ children, variant = 'primary', size = 'md', className = '', style, ...props }: ButtonProps) {
  const { theme } = useTheme();
  const palette = theme.colors;
  const baseStyles = 'rounded-lg items-center justify-center';

  const variantStyles = {
    primary: 'bg-blue-500 active:bg-blue-600',
    secondary: 'bg-slate-700 active:bg-slate-800',
    outline: 'border-2 border-blue-500 bg-transparent active:bg-slate-800',
    danger: 'bg-red-600 active:bg-red-700',
  };

  const sizeStyles = {
    sm: 'px-3 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const inlineStyles = StyleSheet.create({
    primary: {
      backgroundColor: palette.amountAccent,
      borderRadius: 8,
      paddingHorizontal: 24,
      paddingVertical: 12,
    },
    secondary: {
      backgroundColor: palette.surfaceRaised,
      borderRadius: 8,
      paddingHorizontal: 24,
      paddingVertical: 12,
    },
    outline: {
      borderWidth: 2,
      borderColor: palette.amountAccent,
      borderRadius: 8,
      paddingHorizontal: 24,
      paddingVertical: 12,
      backgroundColor: 'transparent',
    },
    danger: {
      backgroundColor: palette.statusDanger,
      borderRadius: 8,
      paddingHorizontal: 24,
      paddingVertical: 12,
    },
  });

  return (
    <TouchableOpacity className={combinedClassName} style={[inlineStyles[variant], style]} {...props}>
      {children}
    </TouchableOpacity>
  );
}
