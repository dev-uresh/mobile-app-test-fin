import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import DashboardScreen from '@/screens/dashboard/DashboardScreen';
import CardsScreen from '@/screens/cards/CardsScreen';
import TransferScreen from '@/screens/transfer/TransferScreen';
import PaymentScreen from '@/screens/payments/PaymentScreen';
import StatementScreen from '@/screens/statements/StatementScreen';
import ProfileScreen from '@/screens/profile/ProfileScreen';
import NotificationsScreen from '@/screens/notifications/NotificationsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Cards"
        component={CardsScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="card-outline" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Transfer"
        component={TransferScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="swap-horizontal-outline" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="cash-outline" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Statements"
        component={StatementScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="document-text-outline" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ({ color, size }) => <FontAwesome name="user-o" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="notifications-outline" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  );
}
