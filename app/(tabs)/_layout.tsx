import React from 'react'
import { Tabs, useRouter } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"

import useColors from '../../src/hooks/colors'

const TabsLayout = () => {

  const router = useRouter()
  const theme = useColors()

  return (
      <Tabs 
          screenOptions={{headerTitleAlign: "center",
            headerTintColor: theme.title,
            tabBarStyle: {backgroundColor: theme.navBackground},
            tabBarActiveTintColor: theme.iconColourFocused,
            tabBarInactiveTintColor: theme.iconColour,
            headerStyle: {backgroundColor: theme.navBackground}}}
      >
          <Tabs.Screen name='calendar' options={{tabBarIcon: ({color}) => (<Ionicons name="calendar" size={32} color={color} />), title: "Calendar"}}/>
          <Tabs.Screen name='map' options={{tabBarIcon: ({color}) => (<Ionicons name="map" size={32} color={color} /> ), title: "Map"}}/>
          <Tabs.Screen name='index' options={{tabBarIcon: ({color}) => (<Ionicons name="home" size={32} color={color} /> ), title: "Home"}}/>
          <Tabs.Screen name='streaks' options={{tabBarIcon: ({color}) => (<Ionicons name="analytics" size={32} color={color} /> ), title: "Streaks"}}/>
          <Tabs.Screen name='habits' options={{tabBarIcon: ({color}) => (<Ionicons name="cube" size={32} color={color} /> ), title: "Habits"}}/>
          <Tabs.Screen name="day/[day]"options={{ href: null }}/>
          <Tabs.Screen name="habitCreator"options={{ href: null, headerTitle: "Create a habit"}}/>
      </Tabs>
  )
}

export default TabsLayout