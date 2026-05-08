import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CardDetailScreen from '@/screens/cards/CardDetail';
import AppraisalForm from '@/screens/cards/AppraisalForm';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabNavigator} />
      <Stack.Screen name="CardDetail" component={CardDetailScreen} />
      <Stack.Screen name="AppraisalForm" component={AppraisalForm} />
    </Stack.Navigator>
  );
}
