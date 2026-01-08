import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react'
import uuid from 'react-native-uuid';

export type Habit = {
    name: string,
    streak: number,
    totalCompletes: number,
    id: string,
    icon: string,
    color: string,
}

type HabitContextType = {
  habits: Habit[]
  createHabit: (name: string, icon: string, color: string) => void
  deleteHabit: (id: string) => void
}

const GlobalHabitContext = createContext<HabitContextType | undefined>(undefined)


export const useHabits = () => {
  const context = useContext(GlobalHabitContext)

  if (!context) {
    throw new Error('useHabit must be used within HabitContext')
  }

  return context
}

const HabitContext = ({ children }: { children: React.ReactNode }) => {

    const [habits, setHabits] = useState<Habit[]>([])

    const createHabit = (name: string, icon: string, color: string) => {
        if (!name.trim()) return

        setHabits(prev => [
        ...prev,
        { name,
          streak: 0,
          totalCompletes: 0,
          id: uuid.v4(),
          icon,
          color}
        ])
    }

    const deleteHabit = (id: string) => {
        setHabits(prev => prev.filter(habit => habit.id !== id))
    }

useEffect(() => {
const getHabits = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('habits');
    setHabits(jsonValue != null ? JSON.parse(jsonValue) : [])
  } catch (err) {
    console.error('Failed to load habits from AsyncStorage', err);
    setHabits([])
  }
};
getHabits()
},[])

useEffect(() => {
  const storeHabits = async () => {
    try {
      await AsyncStorage.setItem('habits', JSON.stringify(habits))
    } catch (err) {
      console.error('Failed to save habits', err)
    }
  }
  storeHabits()
}, [habits])


  return (
    <GlobalHabitContext.Provider value={{habits, createHabit, deleteHabit}}>
        {children}
    </GlobalHabitContext.Provider>
  )
}

export default HabitContext