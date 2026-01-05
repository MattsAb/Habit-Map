import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import AddHabitModalComponent from '../src/components/addHabitModalComponent'


const habits = () => {

const [modalVisibility, setModalVisibility] = useState(false)

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.addButton}
        onPress={() => setModalVisibility(true)}
        ><Text style={{color: "white"}}> Add New Habit </Text></TouchableOpacity>
        <AddHabitModalComponent
        visibility={modalVisibility}
        onCancel={() => setModalVisibility(false)}
        onAdd={() => setModalVisibility(false)}/>
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