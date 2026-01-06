import { View, Text } from 'react-native'
import { useLocalSearchParams, Stack } from 'expo-router'

export default function DayScreen() {
  const { day } = useLocalSearchParams<{ day: string }>()

  return (
    <>
    <Stack.Screen options={{title: `${day}`}}/>

    <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
        <View>
        <Text style={{fontWeight: "bold"}}> You don't have any habits to do on {day} </Text>
        </View>
    </View>

    </>
  )
}
