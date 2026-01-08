import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SegmentedButtons } from "react-native-paper";

import HabitComponent from '../src/components/habitComponent'
import ButtonComponent from '../src/components/basicComponents/ButtonComponent';
import DropdownComponent from '../src/components/dropDownComponent';
import ColorPickerComponent from '../src/components/colorPickerComponent';
import { useHabits } from '../src/context/habitContext';
import { useRouter } from 'expo-router';
import useColors from '../src/hooks/colors';


const habitCreator = () => {

  const [titleInput, setTitleInput] = useState('')
  const [selectType, setSelectType] = useState('barbell')
  const [selectedColor, setSelectedColor] = useState('#e69090ff')

  const {createHabit} = useHabits()

  const router = useRouter()
  const theme = useColors()

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
            <View style={[styles.habitContainer, {backgroundColor: theme.navBackground}]}>
                <HabitComponent title={titleInput} icon={selectType} color={selectedColor}/>
                <TextInput maxLength={25}
                value={titleInput}
                onChangeText={(value) => setTitleInput(value)}
                placeholder='Habit Name...' 
                placeholderTextColor={theme.text}
                style={[styles.input, {backgroundColor: theme.navBackground, borderColor: theme.text, color: theme.text}]}/>
                <DropdownComponent value={selectType} onChange={setSelectType}/>
                <ColorPickerComponent onSelect={setSelectedColor}
                />
            </View>
            <View style={styles.buttonContainer}> 
                <ButtonComponent title='Add Habit' color={theme.greenButton}
                onPress={() => {
                    createHabit(titleInput, selectType, selectedColor)
                    setTitleInput('')
                    setSelectType('barbell')
                    setSelectedColor('#e69090ff')
                    router.back()
                }}/>
                <ButtonComponent title='Cancel' color={theme.redButton}
                    onPress={() => {
                    setTitleInput('')
                    router.back()
                }}/>
            </View>
    </View>
  )
}

export default habitCreator

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer:{
    flexDirection: "row"
  },
habitContainer:
{
    justifyContent: "space-around",
    alignItems: "center",
    height: "60%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 30
},
input:{
    width: "80%",
    borderBottomWidth: 1
}

})