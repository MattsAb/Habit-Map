import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"

type habitProps = {
    title: string,
}


const HabitComponent = ({title}: habitProps) => {
  return (
    <View style={styles.container}>
        <Ionicons name="person" size={50} color="white"/>
        <Text style={styles.title}> {title} </Text>
    </View>
  )
}

export default HabitComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cc8e8eff",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    title: {
        color: "white",
        fontSize: 12,
        textAlign: "center"
    }
})