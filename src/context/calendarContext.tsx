import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'



type CalendarContextType = {

}

const GlobalCalendarContext = createContext<CalendarContextType | undefined>(undefined)


export const useCalendar = () => {
  const context = useContext(GlobalCalendarContext)

  if (!context) {
    throw new Error('useCalendar must be used within HabitContext')
  }

  return context
}

const CalendarContext = () => {

    
  return (
    <View>
      <Text>calendarContext</Text>
    </View>
  )
}

export default CalendarContext