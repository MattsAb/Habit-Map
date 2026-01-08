import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

import HabitComponent from '../../src/components/habitComponent'
import { useCalendar, Week } from '../../src/context/calendarContext'
import { useHabits } from '../../src/context/habitContext'
import { daysOfWeek } from '../../src/context/calendarContext'
import { Ionicons } from '@expo/vector-icons'
import useColors from '../../src/hooks/colors'


const map = () => {

const theme = useColors()

const {habits} = useHabits()
const {weekHabits} = useCalendar()

const getWeek: (keyof Week)[] = [...daysOfWeek.filter(day => day !== 'sunday'), 'sunday']

  return (
    <ScrollView style={[styles.container,{backgroundColor: theme.background}]}>
      {getWeek.map(day => (
      <View key={day} style={styles.dayContainer}>
              <Text style={{color: theme.text}}> {weekHabits[day].length > 0 ? day : `No habits to do on ${day}` } </Text>
              {weekHabits[day]?.length ? (

            <View>
                {habits
                .filter(habit =>
                  weekHabits[day].some(dh => dh.habitId === habit.id))
                .map(habit => (
                <View
                  key={habit.id}
                  style={styles.habitRow}
                >
                  <View style={styles.habitCenter}>
                    <HabitComponent
                      title={habit.name}
                      icon={habit.icon}
                      color={habit.color}
                    />
                  </View>

                    {weekHabits[day]
                      .find(dh => dh.habitId === habit.id)
                      ?.isCompleted && (
                        <Ionicons name="checkmark" size={40} color={theme.title} />
                    )}
                </View>
                ))}
          </View>

        ) : null}
        <View style={[styles.line, {backgroundColor: theme.uiBackground}]}/>
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
  habitcontainer:{
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
  },
line: {
  width: "100%",
  height: 1,
  marginVertical: 10,
},
  habitRow: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 12,
  marginVertical: 5,
},

habitCenter: {
  flex: 1,
  alignItems: "center",
},

});
