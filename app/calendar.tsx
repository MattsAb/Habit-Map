import { View, StyleSheet } from 'react-native'
import React from 'react'

import WeekComponent from '../src/components/weekComponent'

const calendar = () => {
  return (
    <View style={styles.container}>
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