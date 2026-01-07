import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SegmentedButtons } from "react-native-paper";

import HabitComponent from '../habitComponent'
import { useHabits } from '../../context/habitContext';

type addModalProps = {
  visibility: boolean,
  onCancel: () => void,
  onAdd: () => void,
}

const AddHabitModalComponent = ({visibility, onAdd, onCancel}: addModalProps) => {

  const [titleInput, setTitleInput] = useState('')

  const {createHabit} = useHabits()


  return (
    <Modal transparent={true} visible={visibility} animationType='fade'>
        <View style={styles.container}>
            <View style={styles.addBoxContainer}>
                <Text style={styles.header}> Add Habit </Text>
                <View style ={{flexDirection: "row"}}>
                    <View style={{flex: 1, marginLeft: 10}}>
                      <HabitComponent title={titleInput}/>
                    </View>
                    <View style={{flex: 2}}>
                        <TextInput style={styles.input}
                        maxLength={20}
                        value={titleInput}
                        onChangeText={(value) => setTitleInput(value)}
                        placeholder='Habit name'/>
                    </View>
                </View>
                <View style={{flexDirection: "row", marginVertical: 10,}}>
                    <TouchableOpacity style={[styles.button, {backgroundColor: "#5dcf70ff"}]}
                    onPress={() => {
                      onAdd()
                      createHabit(titleInput)
                      setTitleInput('')
                    }}>
                      <Text style={{color: "white"}}> Add </Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {backgroundColor: "#df7878ff"}]}
                    onPress={onCancel}
                    ><Text style={{color: "white"}}> Cancel </Text></TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default AddHabitModalComponent

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  addBoxContainer: {
    backgroundColor: "white",
    width: "90%",
    height: "50%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    width: "30%",
    alignItems: "center"
  },
  input: {
    borderWidth: 1,
    width: "90%"
  },
  header:{
    fontSize: 20
  }

})