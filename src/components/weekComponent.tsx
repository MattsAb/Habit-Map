import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import DayComponent from './dayComponent'

const WeekComponent = () => {
  return (
    <View style={styles.container}>
        <DayComponent day='Monday'/>
        <DayComponent day='Tuesday'/>
        <DayComponent day='Wednesday'/>
        <DayComponent day='Thursday'/>
        <DayComponent day='Friday'/>
        <DayComponent day='Saturday'/>
        <DayComponent day='Sunday'/>
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