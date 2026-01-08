import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import HabitComponent from '../habitComponent'
import useColors from '../../hooks/colors'

type deleteModalProps = {
  visibility: boolean,
  onCancel: () => void,
  onDelete: () => void,
  habitName: string,
  icon: string,
  color: string,
}

const DeleteHabitModalComponent = ({visibility, onDelete, onCancel, habitName, icon, color}: deleteModalProps) => {

  const theme = useColors()

  return (
    <Modal transparent={true} animationType='fade' visible={visibility}>
        <View style={styles.container}>
            <View style={[styles.deleteBoxContainer, {backgroundColor: theme.background}]}>
                <Text style={[styles.title,{color: theme.title}]}> Delete {habitName} Habit? </Text>

                <HabitComponent title={habitName} icon={icon} color={color}/>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: theme.redButton}]}
                            onPress={onDelete}
                        ><Text style={{color: "white"}}> Delete </Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: theme.redButton}]}
                            onPress={onCancel}
                        ><Text style={{color: "white"}}> Cancel </Text></TouchableOpacity>
                    </View>
            </View>
        </View>
    </Modal>
  )
}

export default DeleteHabitModalComponent

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  deleteBoxContainer:{
    backgroundColor: "white",
    width: "90%",
    height: "30%",
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
  title:{
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonContainer:{
    flexDirection: "row",
    marginVertical: 10,
  }
})