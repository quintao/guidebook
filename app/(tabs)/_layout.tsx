import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#994960' }}>
      <Tabs.Screen name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
        />
      <Tabs.Screen name="about"
        options={{
          headerShown: false,
          title: 'About',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="info" color={color} />,
        }}      />
    </Tabs>
  );
}
