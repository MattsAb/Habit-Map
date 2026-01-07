import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

type dayProps = {
  day: string
  totalHabits: number
}

const DayComponent = ({day, totalHabits}: dayProps) => {

    const router = useRouter()

    const dayColor = totalHabits ? `rgba(${200 - totalHabits * 10}, 255, ${200 - totalHabits * 10}, 1)` : "grey"

  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: dayColor}]}
    onPress={() =>  router.push(`/day/${day}`)
}>
      <Text style={{color: "white", fontWeight: "bold", fontSize: 20, shadowColor: "black", textShadowOffset: {width: 10,height:10}}}>{totalHabits ? `${totalHabits}` : '0'}</Text>
    </TouchableOpacity>
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