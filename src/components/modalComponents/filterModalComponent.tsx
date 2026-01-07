import { View, Text, Modal, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

type FilterModalProps = {
    onClose: () => void
    visibility: boolean
    onStreak: () => void
    onCompletions: () => void
}

const FilterModalComponent = ({onClose, visibility, onStreak, onCompletions}: FilterModalProps) => {
  return (
    <Modal transparent={true} animationType='fade' visible={visibility}>
        <Pressable style={styles.container} onPress={onClose}>
            <View style={styles.BoxContainer}>

                <Text> Filter By: </Text>

                <TouchableOpacity style={styles.button}
                onPress={onStreak}>
                <Text> Highest streak </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={onCompletions}>
                <Text> Most Completions </Text>
                </TouchableOpacity>

            </View>
        </Pressable>
    </Modal>
  )
}

export default FilterModalComponent

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  BoxContainer:{
    backgroundColor: "white",
    width: "60%",
    height: "20%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-around",
  },
  button:{
    alignItems: "center",
    backgroundColor: "#e0e0e0ff",
    width: "90%",
    padding: 10
  }
})