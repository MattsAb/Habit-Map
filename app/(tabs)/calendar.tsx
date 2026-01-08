import { View, StyleSheet } from 'react-native'
import React from 'react'

import WeekComponent from '../../src/components/weekComponent'
import useColors from '../../src/hooks/colors'

const calendar = () => {

  const theme = useColors()

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <WeekComponent/>
    </View>
  )
}

export default calendar

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

})