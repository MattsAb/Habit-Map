import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useHeaderHeight } from '@react-navigation/elements';


import { useHabits } from '../src/context/habitContext'
import { useCalendar, Week } from '../src/context/calendarContext'

import HabitComponent from '../src/components/habitComponent'

const HomeScreen = () => {

  const {habits} = useHabits()
  const {weekHabits, getToday} = useCalendar()

  const headerHeight = useHeaderHeight()
  const screenHeight = Dimensions.get('window').height;
 
  return (
    <ScrollView style={{}}
    contentContainerStyle={[styles.contentContainerStyle,  { minHeight: screenHeight - headerHeight, paddingTop: headerHeight}]}>

        {habits
        .filter((habit) => weekHabits[getToday()]?.includes(habit.id))
        .map((habit, index) => (
          <View key={habit.id} style={{marginLeft: index % 2 == 0 ? 15 : 0, marginRight: index % 2 !== 0 ? 15 : 0}}>
            <HabitComponent title={habit.name} /> 
          </View>
          ))}

      <View style={styles.ground}></View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  ground:{
    width: "100%",
    height: "10%", 
    backgroundColor: "black"
  },
  contentContainerStyle:{
    justifyContent: "flex-end",
    alignItems: "center",
  }

})