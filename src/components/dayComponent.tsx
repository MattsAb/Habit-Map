import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

type dayProps = {
  day: string
}

const DayComponent = ({day}: dayProps) => {

    const router = useRouter()

  return (
    <TouchableOpacity style={styles.container}
    onPress={() =>  router.push(`/day/${day}`)
}>
    </TouchableOpacity>
  )
}

export default DayComponent

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
        width: 50,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 2
    }
})