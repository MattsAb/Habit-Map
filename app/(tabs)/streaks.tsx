import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import StreakCardComponent from '../../src/components/streakCardComponent'
import { useHabits } from '../../src/context/habitContext'
import { Tabs } from 'expo-router'
import FilterModalComponent from '../../src/components/modalComponents/filterModalComponent'
import useColors from '../../src/hooks/colors'

const streaks = () => {

  const [modalVisibility, setModalVisibilty] = useState(false)
  const [sortOption, setSortOption] = useState<'streak' | 'totalCompletes'>('streak')

  const theme = useColors()

  const {habits} = useHabits()

  const sortedHabits = [...habits].sort((a, b) => {
    if (sortOption === 'streak') return b.streak - a.streak
    if (sortOption === 'totalCompletes') return b.totalCompletes - a.totalCompletes
  return 0
})

  return (
    <>
    <Tabs.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity style={[styles.filterButton, {backgroundColor: theme.greenButton}]}
            onPress={() => setModalVisibilty(true)}
            ><Text style={{color: theme.text}}> Filter </Text></TouchableOpacity>
          ),
        }}
      />


    <View style={[styles.container, {backgroundColor: theme.background}]}>

       { habits.length > 0 ? (<ScrollView contentContainerStyle={{alignItems: "center"}} style ={{width: "100%"}}
       showsVerticalScrollIndicator={false}>
            {sortedHabits.map((habit) => (
              <StreakCardComponent
                key={habit.id}
                name={habit.name}
                icon={habit.icon}
                color={habit.color}
                streak={habit.streak}
                totalCompletes={habit.totalCompletes}/>
            ))}
          </ScrollView>) : (<View style={styles.noHabitsText}><Text> You don't have any habits </Text></View>)}

          <FilterModalComponent 
          visibility={modalVisibility} 
          onClose={() => setModalVisibilty(false)}
          onCompletions={() => {setModalVisibilty(false)
            setSortOption('totalCompletes')
          }}
          onStreak={() => {setModalVisibilty(false)
            setSortOption('streak')
          }}/>

    </View>
    </>
  )
}

export default streaks

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    flex: 1
  },
  noHabitsText: {
    justifyContent:"center",
     flex: 1
  },
  filterButton:{
    backgroundColor: "#6ad66aff",
    padding: 10,
    marginLeft: 30,
    borderRadius: 20
  }
})