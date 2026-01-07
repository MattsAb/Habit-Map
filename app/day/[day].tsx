import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useLocalSearchParams, Stack } from 'expo-router'

import ButtonComponent from '../../src/components/basicComponents/ButtonComponent'
import DayHabitModal from '../../src/components/modalComponents/dayHabitModal'
import HabitComponent from '../../src/components/habitComponent'
import { useState } from 'react'
import { useHabits } from '../../src/context/habitContext'
import { useCalendar, Week } from '../../src/context/calendarContext'

export default function DayScreen() {
  const { day } = useLocalSearchParams<{ day: string }>()

  const [modalVisibility, setModalVisibilty] = useState(false)

  const {habits} = useHabits()
  const {weekHabits} = useCalendar()

    const typedDay = day.toLowerCase() as keyof Week
    const dayHabits = weekHabits[typedDay] ? weekHabits[typedDay] : []


  return (
    <>
    <Stack.Screen options={{title: `${day}`}}/>

    <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>

    {dayHabits.length > 0 ? (
    <ScrollView contentContainerStyle={styles.list}>
    {habits
        .filter(habit => dayHabits.includes(habit.id))
        .map(habit => (
        <View key={habit.id} style={{ margin: 10 }}>
            <HabitComponent title={habit.name} />
        </View>
        ))}
    </ScrollView>) : (
    <View style={{flex: 1, justifyContent: "center"}}>
        <Text style={{fontWeight: "bold"}}> You don't have any habits to do on {day} </Text>
    </View>)
}


        <View style={{marginBottom: 10}}>
            <ButtonComponent title='Select Habits' color='#6ad66aff' onPress={() => setModalVisibilty(true)}/>
        </View>

    </View>

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
list:{
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 30,
  },
})
