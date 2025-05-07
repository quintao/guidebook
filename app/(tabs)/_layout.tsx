import { Tabs } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Colors from '../constants/colors';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.mainColorGreen }}>
      <Tabs.Screen name="index"
        options={{
          headerShown: false,
          title: 'Secteurs',
          tabBarIcon: ({ color }) => <FontAwesome6 size={20} name="mountain-sun" color={color} />,
        }}
        />
      <Tabs.Screen name="about"
        options={{
          headerShown: false,
          title: 'About',
          tabBarIcon: ({ color }) => <FontAwesome6 size={20} name="info" color={color} />,
        }}      />
    </Tabs>
  );
}
