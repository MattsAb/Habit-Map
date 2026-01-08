import { View, StyleSheet } from 'react-native'
import React from 'react'

import DayComponent from './dayComponent'
import { useCalendar } from '../context/calendarContext'

const WeekComponent = () => {

  const {weekHabits} = useCalendar()

  return (
    <View style={styles.container}>
        <DayComponent day='Monday' totalHabits={weekHabits.monday.length}/>
        <DayComponent day='Tuesday' totalHabits={weekHabits.tuesday.length}/>
        <DayComponent day='Wednesday' totalHabits={weekHabits.wednesday.length}/>
        <DayComponent day='Thursday' totalHabits={weekHabits.thursday.length}/>
        <DayComponent day='Friday' totalHabits={weekHabits.friday.length}/>
        <DayComponent day='Saturday' totalHabits={weekHabits.saturday.length}/>
        <DayComponent day='Sunday' totalHabits={weekHabits.sunday.length}/>
    </View>
  )
}

export default WeekComponent

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 2,
    }
})