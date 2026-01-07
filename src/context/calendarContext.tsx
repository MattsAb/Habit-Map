import { View, Text } from 'react-native'
import React, { createContext, useContext, useState } from 'react'

export type Week = {
  monday: string[]
  tuesday: string[]
  wednesday: string[]
  thursday: string[]
  friday: string[]
  saturday: string[]
  sunday: string[]
}

export const daysOfWeek: (keyof Week)[] = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

type CalendarContextType = {
    weekHabits: Week
    addHabitToDay: (day: keyof Week, habitIds: string[]) => void
    getToday: () => keyof Week
}

const GlobalCalendarContext = createContext<CalendarContextType | undefined>(undefined)

export const useCalendar = () => {
  const context = useContext(GlobalCalendarContext)

  if (!context) {
    throw new Error('useCalendar must be used within HabitContext')
  }
  return context
}

const CalendarContext = ({ children }: { children: React.ReactNode }) => {

    const [weekHabits, setWeekHabits] = useState<Week>({
    monday: ['1','2','3','4','5','6'],
    tuesday: ['1','2'],
    wednesday: [],
    thursday: ['3','4', '5'],
    friday: [],
    saturday: [`1`,`2`,'3','4'],
    sunday: [],
    })

  const addHabitToDay = (day: keyof Week, habitIds: string[]) => {
    setWeekHabits(prev => ({
      ...prev,
      [day]: habitIds
    }))
}

const getToday = (): keyof Week =>{

  const date = new Date()
  return daysOfWeek[date.getDay()]

}
    
  return (
    <GlobalCalendarContext.Provider value={{weekHabits, addHabitToDay, getToday}}>
        {children}
    </GlobalCalendarContext.Provider>
    
  )
}

export default CalendarContext