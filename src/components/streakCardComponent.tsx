import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import HabitComponent from './habitComponent'
import useColors from '../hooks/colors'

type streakProps = {
    name: string,
    streak: number,
    totalCompletes: number,
    icon: string,
    color: string
}

const StreakCardComponent = ({name, streak, totalCompletes, icon, color}: streakProps) => {

    const theme = useColors()

  return (
        <View style={[styles.streakCardContainer, {backgroundColor: theme.uiBackground}]}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <HabitComponent title={name} icon={icon} color={color}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={{color: theme.text}}> Streak: {streak} </Text>
                <Text style={{color: theme.text}}> Total Times Completed: {totalCompletes} </Text>
            </View>
        </View>

  )
}

export default StreakCardComponent

const styles = StyleSheet.create({
    streakCardContainer:{
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