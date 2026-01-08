import { View, Text, Modal, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import useColors from '../../hooks/colors'

type FilterModalProps = {
    onClose: () => void
    visibility: boolean
    onStreak: () => void
    onCompletions: () => void
}

const FilterModalComponent = ({onClose, visibility, onStreak, onCompletions}: FilterModalProps) => {

  const theme = useColors()

  return (
    <Modal transparent={true} animationType='fade' visible={visibility}>
        <Pressable style={styles.container} onPress={onClose}>
            <View style={[styles.BoxContainer, {backgroundColor: theme.background}]}>

                <Text style = {{color: theme.text}}> Filter By: </Text>

                <TouchableOpacity style={[styles.button,{backgroundColor: theme.uiBackground}]}
                onPress={onStreak}>
                <Text style={{color: theme.text}}> Highest streak </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button,{backgroundColor: theme.uiBackground}]}
                onPress={onCompletions}>
                <Text style={{color: theme.text}}> Most Completions </Text>
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
    padding: 10,
    borderRadius: 20
  }
})