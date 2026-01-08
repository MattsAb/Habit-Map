import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const colors = [
    '#e69090ff',
    '#e6dd90ff',
    '#c8e690ff',
    '#90e69bff',
    '#90e6e6ff',
    '#5b6ed8ff',
    '#a269d1ff',
    '#e690d8ff',
]

type PickerProps = {
    onSelect: (value: string) => void

}


const ColorPickerComponent = ({onSelect}: PickerProps) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: "wrap", width: "60%"}}>
      {colors.map(color => (
        <Pressable
          key={color}
          style={[styles.colorBox, { backgroundColor: color }]}
          onPress={() => onSelect(color)}
        />
      ))}
    </View>
  )
}

export default ColorPickerComponent

const styles = StyleSheet.create({
    colorBox:{
        width: 30,
        height: 30,
        borderRadius: 10,
        margin: 10
    }
})