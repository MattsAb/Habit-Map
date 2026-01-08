import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'

import DeleteHabitModalComponent from '../../src/components/modalComponents/deleteHabitModalComponent'
import HabitCardComponent from '../../src/components/habitCardComponent'
import ButtonComponent from '../../src/components/basicComponents/ButtonComponent'
import { useHabits } from '../../src/context/habitContext'
import { useRouter } from 'expo-router'
import useColors from '../../src/hooks/colors'

const habits = () => {

const {habits, deleteHabit} = useHabits()

const [deleteModalVisibility, setDeleteModalVisibility] = useState(false)
const [selectedhabit, setSelectedHabit] = useState({name: "", id: "", icon: "", color: ""})

const router = useRouter()
const theme = useColors()

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>

        <ButtonComponent title='Add New Habit' color={theme.greenButton} onPress={() => router.push('../habitCreator')}/>

          { habits.length > 0 ? (<ScrollView showsVerticalScrollIndicator={false}>
            {habits.map((habit) => (
              <HabitCardComponent
                key={habit.id}
                habitName={habit.name}
                icon={habit.icon}
                color={habit.color}
                streak={habit.streak}
                completions={habit.totalCompletes}
                onDeletePress={() => {
                  setDeleteModalVisibility(true)
                  setSelectedHabit({name: habit.name, id: habit.id, icon: habit.icon, color: habit.color})
                }}
              />
            ))}
          </ScrollView>) : (<View style={styles.noHabitsText}><Text> You don't have any habits </Text></View>)
}

        <DeleteHabitModalComponent
        color={selectedhabit.color} 
        icon={selectedhabit.icon}
        habitName={selectedhabit.name}
        visibility={deleteModalVisibility}
        onCancel={() => setDeleteModalVisibility(false)}
        onDelete={() => {setDeleteModalVisibility(false)
          deleteHabit(selectedhabit.id)
        }}/>
    </View>
  )
}

export default habits

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
  },
    noHabitsText: {
    justifyContent:"center",
     flex: 1
  }
})