import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

type Button = {
    title: string,
    color: string,
    onPress: () => void,
}

const ButtonComponent = ({onPress, title, color}: Button) => {
  return (
    <TouchableOpacity style={[styles.addButton, {backgroundColor: color}]}
     onPress={onPress}
    ><Text style={{color: "white"}}> {title} </Text></TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
addButton:{
    padding: 20,
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal: 20,
  }
})