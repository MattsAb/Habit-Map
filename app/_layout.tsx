import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"

import HabitContext from '../src/context/habitContext'
import CalendarContext from '../src/context/calendarContext'

const RootLayout = () => {
  return (
    <HabitContext>
      <CalendarContext>
      <Tabs 
          screenOptions={{headerTitleAlign: "center"}}
      >
          <Tabs.Screen name='calendar' options={{tabBarIcon: () => (<Ionicons name="calendar" size={32} color="black" /> )}}/>
          <Tabs.Screen name='map' options={{tabBarIcon: () => (<Ionicons name="map" size={32} color="black" /> )}}/>
          <Tabs.Screen name='index' options={{tabBarIcon: () => (<Ionicons name="home" size={32} color="black" /> ), title: "home"}}/>
          <Tabs.Screen name='streaks' options={{tabBarIcon: () => (<Ionicons name="analytics" size={32} color="black" /> )}}/>
          <Tabs.Screen name='habits' options={{tabBarIcon: () => (<Ionicons name="cube" size={32} color="black" /> )}}/>
          <Tabs.Screen name="day/[day]"options={{ href: null }}/>
      </Tabs>
      </CalendarContext>
    </HabitContext>
  )
}

export default RootLayout