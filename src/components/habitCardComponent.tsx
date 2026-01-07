import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import HabitComponent from './habitComponent'

type habitCardProps = {
    onDeletePress: () => void,
    habitName: string,
    streak: number,
    completions: number,
}

const HabitCardComponent = ({onDeletePress, habitName, streak, completions}: habitCardProps) => {
  return (
    <View style={styles.container}>

        <View style={styles.cardcontainer}>
            <HabitComponent title={habitName}/>
            <View style={styles.textContainer}>
                <Text style={{marginVertical: 10}}>🔥: {streak} </Text>
                <Text style={{marginVertical: 10}}>✅: {completions} </Text>
            </View>
        </View>

        <View>
            <TouchableOpacity style={styles.button}
            onPress={onDeletePress}>
                <Text style={{color: "white", fontWeight: "bold"}}> Delete </Text>
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
        backgroundColor: "#f07c7cff",
        padding: 10,
        borderRadius: 15,
        marginLeft: 30,
    }
})