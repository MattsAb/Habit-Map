import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import HabitComponent from './habitComponent'

type streakProps = {
    name: string,
    streak: number,
    totalCompletes: number
}

const StreakCardComponent = ({name, streak, totalCompletes}: streakProps) => {
  return (
        <View style={styles.streakCardContainer}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <HabitComponent title={name}/>
            </View>
            <View style={styles.textContainer}>
                <Text> Streak: {streak} </Text>
                <Text> Total Times Completed: {totalCompletes} </Text>
            </View>
        </View>

  )
}

export default StreakCardComponent

const styles = StyleSheet.create({
    streakCardContainer:{
        backgroundColor: "white",
        width: "90%",
        flexDirection: "row",
        padding: 20,
        borderRadius: 30,
        alignItems: "center",
        marginVertical: 10
    },
    textContainer:{
        justifyContent: "center",
        alignItems: "center"
    }
})