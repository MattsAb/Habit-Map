import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import useColors from '../hooks/colors'

type dayProps = {
  day: string
  totalHabits: number
}

const DayComponent = ({day, totalHabits}: dayProps) => {

    const router = useRouter()
    const theme = useColors()

    const dayColor = totalHabits ? `rgba(${200 - totalHabits * 10}, 255, ${200 - totalHabits * 10}, 1)` : "grey"

  return (
    <View style={{alignItems: "center"}}>
      <Text style={{color: theme.text}}> {day.substring(0,3)} </Text>
    <TouchableOpacity style={[styles.container, {backgroundColor: dayColor}]}
    onPress={() =>  router.push(`/day/${day}`)
}>
      <Text style={{color: "white", fontWeight: "bold", fontSize: 20, shadowColor: "black", }}>{totalHabits ? `${totalHabits}` : '0'}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default DayComponent

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 2
    }
})