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


export const useHabits = () => {
  const context = useContext(GlobalHabitContext)

  if (!context) {
    throw new Error('useHabit must be used within HabitContext')
  }

  return context
}

const HabitContext = ({ children }: { children: React.ReactNode }) => {

    const [habits, setHabits] = useState<Habit[]>([{name: "test", streak: 1, id: "1"}, {name: "test2", streak: 2, id: "2"},{name: "test3", streak: 0, id: "3"},
        {name: "test4", streak: 1, id: "4"}, {name: "test5", streak: 2, id: "5"},{name: "test6", streak: 0, id: "6"}
    ])

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
    <GlobalHabitContext.Provider value={{habits, createHabit, deleteHabit}}>
        {children}
    </GlobalHabitContext.Provider>
  )
}

export default HabitContext