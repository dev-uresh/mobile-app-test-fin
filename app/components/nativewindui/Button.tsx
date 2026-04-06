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
    primary: 'bg-blue-500 active:bg-blue-600',
    secondary: 'bg-gray-500 active:bg-gray-600',
    outline: 'border-2 border-blue-500 active:bg-blue-50',
    danger: 'bg-red-500 active:bg-red-600'
  };
  
  const sizeStyles = {
    sm: 'px-3 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4'
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  const inlineStyles = StyleSheet.create({
    primary: { backgroundColor: '#3B82F6', borderRadius: 8, paddingHorizontal: 24, paddingVertical: 12 },
    secondary: { backgroundColor: '#6B7280', borderRadius: 8, paddingHorizontal: 24, paddingVertical: 12 },
    outline: { borderWidth: 2, borderColor: '#3B82F6', borderRadius: 8, paddingHorizontal: 24, paddingVertical: 12 },
    danger: { backgroundColor: '#EF4444', borderRadius: 8, paddingHorizontal: 24, paddingVertical: 12 },
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
