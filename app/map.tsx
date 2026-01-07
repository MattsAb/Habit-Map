import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

import HabitComponent from '../src/components/habitComponent'
import { useCalendar, Week } from '../src/context/calendarContext'
import { useHabits } from '../src/context/habitContext'
import { daysOfWeek } from '../src/context/calendarContext'


const map = () => {
const {habits} = useHabits()
const {weekHabits} = useCalendar()

const getWeek: (keyof Week)[] = [...daysOfWeek.filter(day => day !== 'sunday'), 'sunday']

  return (
    <ScrollView style={styles.container}>
      {getWeek.map(day => (
      <View key={day} style={styles.dayContainer}>
              <Text> {weekHabits[day].length > 0 ? day : `No habits to do on ${day}` } </Text>
              {weekHabits[day]?.length ? (

            <View>
                {habits
                .filter(habit => weekHabits[day]?.includes(habit.id))
                .map(habit => (
                  <View key={habit.id} style={{ margin: 5 }}>
                      <HabitComponent title={habit.name} /> 
                  </View>
                ))}
          </View>

        ) : null}
        <View style={styles.line}/>
      </View>
))}
    </ScrollView>
  )
}

export default map

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',          
    paddingVertical: 10,
  },
  dayContainer: {
    width: '100%',           
    marginBottom: 15, 
    paddingHorizontal: 10,
    alignItems: "center"
  },
  dayLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  line: {
    backgroundColor: "black",
    width: 1,
    height: 100
  },
});
