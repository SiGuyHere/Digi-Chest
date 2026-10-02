import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import type { ComponentProps } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type RootTabParamList = {
  Map: undefined;
  Shop: undefined;
  Leaderboard: undefined;
  Settings: undefined;
};

type TabName = keyof RootTabParamList;
type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

const Tab = createBottomTabNavigator<RootTabParamList>();

const screens: Record<TabName, { title: string; description: string; icon: IconName }> = {
  Map: {
    title: 'Map',
    description: 'This page is going to display a map where you can find items.',
    icon: 'home-variant-outline',
  },
  Shop: {
    title: 'Shop',
    description: 'Explore new items and ideas from this tab.',
    icon: 'compass-outline',
  },
  Leaderboard: {
    title: 'Leaderboard',
    description: 'Keep all of your favorite things together here.',
    icon: 'treasure-chest-outline',
  },
  Settings: {
    title: 'Settings',
    description: 'Adjust the app to make it feel like your own.',
    icon: 'cog-outline',
  },
};

function TabScreen({ name }: { name: TabName }) {
  const screen = screens[name];

  return (
    <View style={styles.screen}>
      <View style={styles.iconCircle}>
        <MaterialCommunityIcons name={screen.icon} size={46} color="#7dd3fc" />
      </View>
      <Text style={styles.title}>{screen.title}</Text>
      <Text style={styles.description}>{screen.description}</Text>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>CURRENT SCREEN</Text>
        <Text style={styles.cardValue}>{name}</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#7dd3fc',
          tabBarInactiveTintColor: '#64748b',
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name={screens[route.name as TabName].icon}
              size={size}
              color={color}
            />
          ),
        })}
      >
        {(Object.keys(screens) as TabName[]).map((name) => (
          <Tab.Screen key={name} name={name}>
            {() => <TabScreen name={name} />}
          </Tab.Screen>
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
    backgroundColor: '#0f172a',
  },
  iconCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 96,
    height: 96,
    marginBottom: 24,
    borderRadius: 48,
    backgroundColor: '#172554',
  },
  title: {
    marginBottom: 10,
    color: '#f8fafc',
    fontSize: 32,
    fontWeight: '700',
  },
  description: {
    maxWidth: 300,
    color: '#cbd5e1',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 320,
    marginTop: 32,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1e3a8a',
    borderRadius: 16,
    backgroundColor: '#111c36',
  },
  cardLabel: {
    marginBottom: 8,
    color: '#7dd3fc',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  cardValue: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: '600',
  },
  tabBar: {
    height: 64,
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: 0,
    backgroundColor: '#111827',
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
});
