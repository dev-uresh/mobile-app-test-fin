import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet } from 'react-native';
import { ReactNode } from 'react';

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  style,
  ...props 
}: ButtonProps) {
  const baseStyles = 'rounded-lg items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-industrial-accent active:bg-industrial-accent-strong',
    secondary: 'bg-industrial-panel active:bg-industrial-surface',
    outline: 'border-2 border-industrial-accent bg-transparent active:bg-industrial-surface',
    danger: 'bg-industrial-danger active:bg-[#be5555]'
  };
  
  const sizeStyles = {
    sm: 'px-3 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4'
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  const inlineStyles = StyleSheet.create({
    primary: { backgroundColor: '#3ea9f5', borderRadius: 8, paddingHorizontal: 24, paddingVertical: 12 },
    secondary: { backgroundColor: '#153147', borderRadius: 8, paddingHorizontal: 24, paddingVertical: 12 },
    outline: { borderWidth: 2, borderColor: '#3ea9f5', borderRadius: 8, paddingHorizontal: 24, paddingVertical: 12 },
    danger: { backgroundColor: '#de6464', borderRadius: 8, paddingHorizontal: 24, paddingVertical: 12 },
  });
  
  return (
    <TouchableOpacity 
      className={combinedClassName}
      style={[inlineStyles[variant], style]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}
