import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import useColors from '../hooks/colors'

type habitProps = {
    title: string,
    icon: string,
    color: string,
}


const HabitComponent = ({title, icon, color}: habitProps) => {

    const theme = useColors()

  return (
    <View style={[styles.container, {backgroundColor: color ? color : "grey"}]}>
        <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={50} color={theme.title}/>
        <Text style={[styles.title,{color: theme.title}]}> {title} </Text>
    </View>
  )
}

export default HabitComponent

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    title: {
        color: "white",
        fontSize: 12,
        textAlign: "center",
        marginBottom: 10
    }
})