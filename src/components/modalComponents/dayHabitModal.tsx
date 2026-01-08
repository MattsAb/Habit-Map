import { View, Text, Modal, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useHabits } from '../../context/habitContext'
import HabitComponent from '../habitComponent'
import ButtonComponent from '../basicComponents/ButtonComponent'
import { useCalendar, Week} from '../../context/calendarContext'
import useColors from '../../hooks/colors'

type dayHabitModalProps = {
    visibilty: boolean,
    onSelect: () => void,
    onCancel: () => void,
    day: keyof Week,
}

const DayHabitModal = ({visibilty, onSelect, onCancel, day}: dayHabitModalProps) => {

    const [selection, setSelection] = useState<string[]>([])

    const {habits} = useHabits()
    const {addHabitToDay, weekHabits} = useCalendar()

    const theme = useColors()

  useEffect(() => {
    setSelection(weekHabits[day].map(h => h.habitId))
  }, [day, visibilty])



  return (
    <Modal transparent={true} animationType='fade' visible={visibilty}>
        <View style={styles.container}>
            <View style={[styles.addBoxContainer, {backgroundColor: theme.background}]}>

                <Text style={[styles.header,{color: theme.title}]}> Select Habits </Text>

                <ScrollView contentContainerStyle={styles.list}>
                    {habits.map((habit) => (
                        <TouchableOpacity 
                        onPress={() => {
                            if (!selection.includes(habit.id))
                            {
                                setSelection(prev => [...prev, habit.id])
                            }
                            else
                            {
                                setSelection(prev => prev.filter(habits => habits !== habit.id))
                            }
                        }}
                        style={[styles.listItem, {backgroundColor: selection.includes(habit.id) ? "#8acf7cff" : "rgba(0,0,0,0)"}]}
                        key={habit.id}>
                            <HabitComponent
                            color={habit.color}
                            icon={habit.icon}
                            title={habit.name}/>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View style={{flexDirection: "row"}}>
                    <ButtonComponent title='Select' color={theme.greenButton} onPress={() => {
                        addHabitToDay(day, selection)
                        onSelect()}}/>
                    <ButtonComponent title='Cancel' color={theme.redButton} onPress={onCancel}/>
                </View>

            </View>
        </View>
    </Modal>
  )
}

export default DayHabitModal

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
    height: "80%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-between"
  },
  header:{
    fontSize: 20,
    fontWeight: "bold"
  },
  list:{
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 30,
    justifyContent: "center"
  },
  listItem:{
    margin: 2,
    padding: 8,
    borderRadius: 20
  }
})