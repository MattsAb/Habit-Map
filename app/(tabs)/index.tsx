import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useHeaderHeight } from '@react-navigation/elements';


import { useHabits } from '../../src/context/habitContext'
import { useCalendar } from '../../src/context/calendarContext'

import HabitComponent from '../../src/components/habitComponent'
import useColors from '../../src/hooks/colors';

const HomeScreen = () => {

  const {habits} = useHabits()
  const {weekHabits, getToday, toggleCompletion} = useCalendar()

  const theme = useColors()

  const headerHeight = useHeaderHeight()
  const screenHeight = Dimensions.get('window').height;

  const incompleteHabits = habits.filter(habit =>
    weekHabits[getToday()]?.some(dh => dh.habitId === habit.id && !dh.isCompleted)
  )
 
  return (
    <ScrollView style={{backgroundColor: theme.background}}
      contentContainerStyle={[
        styles.contentContainerStyle,
        { minHeight: screenHeight - headerHeight, paddingTop: headerHeight }
      ]}
    >
      {incompleteHabits.length > 0 ? (
        incompleteHabits.map((habit, index) => (
          <TouchableOpacity
            key={habit.id}
            onLongPress={() => toggleCompletion(getToday(), habit.id)}
            style={{
              marginLeft: index % 2 === 0 ? 15 : 0,
              marginRight: index % 2 !== 0 ? 15 : 0
            }}
          >
            <HabitComponent title={habit.name} icon={habit.icon} color={habit.color} />
            
          </TouchableOpacity>
        ))
      ) : (
        <View style={styles.completedMessageContainer}>
          <Text style={[styles.completedMessage, {color: theme.text}]}>
            🎉 All habits for today are completed!
          </Text>
        </View>
      )}

      <View style={[styles.ground]}></View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  ground: {
    width: "100%",
    height: "10%",
    backgroundColor: "black"
  },
  contentContainerStyle: {
    justifyContent: "flex-end",
    alignItems: "center"
  },
  completedMessageContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50
  },
  completedMessage: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
})
