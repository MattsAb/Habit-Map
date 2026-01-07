import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'

import AddHabitModalComponent from '../src/components/modalComponents/addHabitModalComponent'
import DeleteHabitModalComponent from '../src/components/modalComponents/deleteHabitModalComponent'
import HabitCardComponent from '../src/components/habitCardComponent'
import ButtonComponent from '../src/components/basicComponents/ButtonComponent'
import { useHabits } from '../src/context/habitContext'


const habits = () => {

const {habits, deleteHabit} = useHabits()

const [addModalVisibility, setAddModalVisibility] = useState(false)
const [deleteModalVisibility, setDeleteModalVisibility] = useState(false)
const [selectedhabit, setSelectedHabit] = useState({name: "", id: ""})

  return (
    <View style={styles.container}>

        <ButtonComponent title='Add New Habit' color='#6ad66aff' onPress={() => setAddModalVisibility(true)}/>

          { habits.length > 0 ? (<ScrollView showsVerticalScrollIndicator={false}>
            {habits.map((habit) => (
              <HabitCardComponent
                key={habit.id}
                habitName={habit.name}
                streak={habit.streak}
                completions={habit.totalCompletes}
                onDeletePress={() => {
                  setDeleteModalVisibility(true)
                  setSelectedHabit({name: habit.name, id: habit.id})
                }}
              />
            ))}
          </ScrollView>) : (<View style={styles.noHabitsText}><Text> You don't have any habits </Text></View>)
}



        <AddHabitModalComponent
        visibility={addModalVisibility}
        onCancel={() => setAddModalVisibility(false)}
        onAdd={() => setAddModalVisibility(false)}/>

        <DeleteHabitModalComponent 
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