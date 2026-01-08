import { useColorScheme } from "react-native"

export const colors = {
    dark: {
        text: 'white',
        title: '#fff',
        background: '#84b0daff',
        navBackground: '#1b4e7eff',
        iconColour: '#83a9ccff',
        iconColourFocused: '#fff',
        uiBackground: '#003566',
        redButton:"#d85353ff",
        greenButton:'#39df39ff'
    },
    light: {
        text: 'black',
        title: '#201e2b',
        background: 'white',
        navBackground: '#88b7e6ff',
        iconColour: '#000000ff',
        iconColourFocused: '#ffffffff',
        uiBackground: '#b3cfebff',
        redButton:"#d85353ff",
        greenButton:'#6ad66aff'
    }
}

export default function useColors() {
    const colorScheme = useColorScheme()
    const theme = colorScheme === 'dark' ? colors.dark : colors.light
    return theme
}