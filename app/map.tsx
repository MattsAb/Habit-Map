import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

import HabitComponent from '../src/components/habitComponent'
import { useCalendar } from '../src/context/calendarContext'
import { useHabits } from '../src/context/habitContext'
import { Week } from '../src/context/calendarContext'

const daysOfWeek: (keyof Week)[] =['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];


const map = () => {
const {habits} = useHabits()
const {weekHabits} = useCalendar()

  return (
    <ScrollView style={styles.container}>
{daysOfWeek.map(day => (
  <View key={day} style={styles.dayContainer}>
    <Text> {day} </Text>
    {weekHabits[day]?.length ? (
      <ScrollView horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.dayHabitList}>
        {habits
          .filter(habit => weekHabits[day]?.includes(habit.id))
          .map(habit => (
            <View key={habit.id} style={{ margin: 5 }}>
              <HabitComponent title={habit.name} />
            </View>
          ))}
      </ScrollView>
    ) : null}
    <View style={{backgroundColor: "black", width: 1, height: 100, marginLeft:50}}/>
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
  },
  dayLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  dayHabitList: {
    flexDirection: 'row',
  },
});
