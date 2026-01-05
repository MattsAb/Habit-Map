import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const DayComponent = () => {
  return (
    <TouchableOpacity style={styles.container}>
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