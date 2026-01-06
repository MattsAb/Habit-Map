import { View, Text } from 'react-native'
import React, { createContext, useContext, useState } from 'react'
import uuid from 'react-native-uuid';

export type Habit = {
    name: string,
    streak: number,
    id: string,
}

type HabitContextType = {
  habits: Habit[]
  createHabit: (name: string) => void
  deleteHabit: (id: string) => void
}

const GlobalHabitContext = createContext<HabitContextType | undefined>(undefined)


export const useHabit = () => {
  const context = useContext(GlobalHabitContext)

  if (!context) {
    throw new Error('useHabit must be used within HabitContext')
  }

  return context
}

const HabitContext = ({ children }: { children: React.ReactNode }) => {

    const [habits, setHabits] = useState<Habit[]>([])

    const createHabit = (name: string) => {
        if (!name.trim()) return

        setHabits(prev => [
        ...prev,
        { name, streak: 0, id: uuid.v4()}
        ])
    }

    const deleteHabit = (id: string) => {
        setHabits(prev => prev.filter(habit => habit.id !== id))
    }


  return (
    <GlobalHabitContext.Provider value={{habits, setHabits, createHabit, deleteHabit} as any}>
        {children}
    </GlobalHabitContext.Provider>
  )
}

export default HabitContext