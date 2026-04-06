import { Drawer } from 'expo-router/drawer';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Text, View } from 'react-native';

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, paddingTop: 0, backgroundColor: '#08172D' }}
    >
      <View className="border-b border-[#183150] px-5 pb-4 pt-14">
        <Text className="text-xl font-bold text-[#d9e8fb]">finverus</Text>
        <Text className="mt-1 text-xs tracking-[1.5px] text-[#86a3c4]">ADMIN DASHBOARD</Text>
      </View>

      <View className="flex-1 pt-3">
        <DrawerItemList {...props} />
      </View>

      <View className="border-t border-[#183150] p-3">
        <DrawerItem
          label="Help"
          labelStyle={{ color: '#b3cae6', fontSize: 14, marginLeft: -12 }}
          icon={({ color, size }) => <Ionicons name="help-circle-outline" size={size} color={color} />}
          onPress={() => props.navigation.navigate('help')}
          inactiveTintColor="#86a3c4"
        />
        <DrawerItem
          label="Settings"
          labelStyle={{ color: '#b3cae6', fontSize: 14, marginLeft: -12 }}
          icon={({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />}
          onPress={() => props.navigation.navigate('settings')}
          inactiveTintColor="#86a3c4"
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default function TabLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#08172D' },
        headerTintColor: '#d9e8fb',
        headerShadowVisible: false,
        headerTitleStyle: { fontWeight: '700' },
        sceneStyle: { backgroundColor: '#020b1a' },
        drawerType: 'front',
        drawerStyle: { backgroundColor: '#08172D', width: 286 },
        drawerActiveTintColor: '#e6f4ff',
        drawerInactiveTintColor: '#9bb6d4',
        drawerActiveBackgroundColor: '#0e355c',
        drawerLabelStyle: { marginLeft: -12, fontSize: 14, fontWeight: '600' },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: 'Dashboard',
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="approvals"
        options={{
          title: 'Approvals',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="checkmark-done-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="reports"
        options={{
          title: 'Reports',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="stats-chart-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="search"
        options={{
          title: 'Search',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="add"
        options={{
          title: 'Add Task',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: 'Profile',
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="user-o" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="help"
        options={{
          title: 'Help',
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          title: 'Settings',
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer>
  );
}
