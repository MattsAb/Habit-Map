import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'

import AddHabitModalComponent from '../src/components/addHabitModalComponent'
import DeleteHabitModalComponent from '../src/components/deleteHabitModalComponent'
import HabitCardComponent from '../src/components/habitCardComponent'
import { useHabit } from '../src/context/habitContext'


const habits = () => {

const {habits, deleteHabit} = useHabit()

const [addModalVisibility, setAddModalVisibility] = useState(false)
const [deleteModalVisibility, setDeleteModalVisibility] = useState(false)
const [selectedhabit, setSelectedHabit] = useState({name: "", id: ""})

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.addButton}
        onPress={() => setAddModalVisibility(true)}
        ><Text style={{color: "white"}}> Add New Habit </Text></TouchableOpacity>


          { habits.length > 0 ? (<ScrollView showsVerticalScrollIndicator={false}>
            {habits.map((habit) => (
              <HabitCardComponent
                key={habit.id}
                habitName={habit.name}
                streak={habit.streak}
                onDeletePress={() => {
                  setDeleteModalVisibility(true)
                  setSelectedHabit({name: habit.name, id: habit.id})
                }}
              />
            ))}
          </ScrollView>) : (<View style={{justifyContent:"center", flex: 1}}><Text> You don't have any habits </Text></View>)
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
  addButton:{
    backgroundColor: "#57ce7fff",
    padding: 20,
    borderRadius: 30,
    marginVertical: 10
  }

})