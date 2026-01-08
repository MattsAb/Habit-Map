import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export type day = {
  habitId: string,
  isCompleted: boolean
}

export type Week = {
  monday: day[]
  tuesday: day[]
  wednesday: day[]
  thursday: day[]
  friday: day[]
  saturday: day[]
  sunday: day[]
}
export const daysOfWeek: (keyof Week)[] = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

type CalendarContextType = {
    weekHabits: Week
    toggleCompletion: (day :keyof Week,id: string) => void
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
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
    })

const addHabitToDay = (day: keyof Week, habitIds: string[]) => {
  setWeekHabits(prev => {
    const existing = prev[day]

    const updated = habitIds.map(id => {
      const found = existing.find(h => h.habitId === id)
      return found ?? { habitId: id, completed: false }
    })

    return {
      ...prev,
      [day]: updated,
    }
  })
}

const getToday = (): keyof Week =>{

  const date = new Date()
  return daysOfWeek[date.getDay()]

}

const toggleCompletion = (day: keyof Week, habitId: string) => {
  setWeekHabits(prev => ({
    ...prev,
    [day]: prev[day].map(h =>
      h.habitId === habitId ? { ...h, isCompleted: true } : h
    ),
  }))
  console.log(weekHabits[day])
}

useEffect(() => {
const getWeekHabits = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('weekHabits');
    setWeekHabits(jsonValue != null ? JSON.parse(jsonValue) : [])
  } catch (err) {
    console.error('Failed to load week habits from AsyncStorage', err);
    setWeekHabits({ 
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],})
  }
};
getWeekHabits()
},[])

useEffect(() => {
  const storeWeekHabits = async () => {
    try {
      await AsyncStorage.setItem('weekHabits', JSON.stringify(weekHabits))
    } catch (err) {
      console.error('Failed to save day habits', err)
    }
  }
  storeWeekHabits()
}, [weekHabits])
    
  return (
    <GlobalCalendarContext.Provider value={{weekHabits, addHabitToDay, getToday, toggleCompletion}}>
        {children}
    </GlobalCalendarContext.Provider>
    
  )
}

export default CalendarContext