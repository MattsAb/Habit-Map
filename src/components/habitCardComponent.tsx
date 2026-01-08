import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import HabitComponent from './habitComponent'
import useColors from '../hooks/colors'

type habitCardProps = {
    onDeletePress: () => void,
    habitName: string,
    streak: number,
    completions: number,
    icon: string,
    color: string
}

const HabitCardComponent = ({onDeletePress, habitName, streak, completions, icon, color}: habitCardProps) => {

    const theme = useColors()

  return (
    <View style={styles.container}>

        <View style={[styles.cardcontainer, {backgroundColor: theme.uiBackground}]}>
            <HabitComponent title={habitName} icon={icon} color={color}/>
            <View style={styles.textContainer}>
                <Text style={{marginVertical: 10, color: theme.text}}>🔥: {streak} </Text>
                <Text style={{marginVertical: 10, color: theme.text}}>✅: {completions} </Text>
            </View>
        </View>

        <View>
            <TouchableOpacity style={[styles.button, {backgroundColor: theme.redButton}]}
            onPress={onDeletePress}>
                <Text style={{color: theme.text, fontWeight: "bold"}}> Delete </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HabitCardComponent

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    cardcontainer:{
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 30,
        width: "65%"
    },
    textContainer:{
        marginLeft: 30,
        width: "40%"
    },
    button:{
        padding: 10,
        borderRadius: 15,
        marginLeft: 30,
    }
})