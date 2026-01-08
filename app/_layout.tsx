import React from 'react'
import { Stack } from 'expo-router'
import HabitContext from '../src/context/habitContext'
import CalendarContext from '../src/context/calendarContext'
import useColors from '../src/hooks/colors'

const Rootlayout = () => {

    const theme = useColors()

  return (
    <HabitContext>
        <CalendarContext>
            <Stack
            screenOptions={{headerTitleAlign: "center",
            animation: "none",
            headerTintColor: theme.title,
            headerStyle: {backgroundColor: theme.navBackground},}}>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            </Stack>
        </CalendarContext>
    </HabitContext>
  )
}

export default Rootlayout