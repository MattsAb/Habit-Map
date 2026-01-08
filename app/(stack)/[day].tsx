import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useLocalSearchParams, Stack } from 'expo-router'

import ButtonComponent from '../../src/components/basicComponents/ButtonComponent'
import DayHabitModal from '../../src/components/modalComponents/dayHabitModal'
import HabitComponent from '../../src/components/habitComponent'
import { useState } from 'react'
import { useHabits } from '../../src/context/habitContext'
import { useCalendar, Week } from '../../src/context/calendarContext'
import useColors from '../../src/hooks/colors'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DayScreen() {
  const { day } = useLocalSearchParams<{ day: string }>()

  const [modalVisibility, setModalVisibilty] = useState(false)

  const theme = useColors()

  const {habits} = useHabits()
  const {weekHabits} = useCalendar()

  const typedDay = day.toLowerCase() as keyof Week
  const dayHabits = weekHabits[typedDay] ? weekHabits[typedDay] : []


  return (
    <>
    <Stack.Screen options={{title: `${day}`}}/>

    <SafeAreaView style={[styles.container, {backgroundColor: theme.background}]}>

    {dayHabits.length > 0 ? (
    <ScrollView contentContainerStyle={styles.list}>
    {habits
  .filter(habit =>
    dayHabits.some(dh => dh.habitId === habit.id)
  )
  .map(habit => (
    <View key={habit.id} style={{ margin: 10 }}>
      <HabitComponent
        title={habit.name}
        icon={habit.icon}
        color={habit.color}
      />
    </View>
  ))}

    </ScrollView>) : (
    <View style={styles.noHabitsText}>
        <Text style={{fontWeight: "bold"}}> You don't have any habits to do on {day} </Text>
    </View>)}


        <View style={{marginBottom: 10}}>
            <ButtonComponent title='Select Habits' color={theme.greenButton} onPress={() => setModalVisibilty(true)}/>
        </View>

    </SafeAreaView>

    <DayHabitModal 
    visibilty={modalVisibility} 
    onCancel={() => setModalVisibilty(false)} 
    onSelect={() => {
    setModalVisibilty(false)}}
    day={typedDay}
    />
    </>
  )
}

const styles = StyleSheet.create({
container:{
  alignItems: "center",
  flex: 1
},
list:{
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
    justifyContent: "center"
  },
noHabitsText:{
  flex: 1,
  justifyContent: "center"
}
})
