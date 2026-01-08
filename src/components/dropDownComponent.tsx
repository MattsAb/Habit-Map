import React from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import useColors from '../hooks/colors';

  const data = [
    { label: 'fitness', value: 'barbell' },
    { label: 'culinary', value: 'restaurant' },
    { label: 'study', value: 'school' },
    { label: 'social', value: 'chatbubbles' },
    { label: 'gaming', value: 'game-controller' },
    { label: 'chores', value: 'cafe' },
    { label: 'other', value: 'extension-puzzle' },
  ];

  type dropdownProps = {
    value: any
    onChange: (value: any) => void
  }

  const DropdownComponent = ({value, onChange}: dropdownProps) => {

    const theme = useColors()

    return (
      <Dropdown
        style={[styles.dropdown, {borderBottomColor: theme.text}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={[styles.selectedTextStyle, {color: theme.text}]}
        inputSearchStyle={[styles.inputSearchStyle,{color: theme.text}]}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={value}
        onChange={item => {
        onChange(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color={theme.iconColour} size={20} />
        )}
      />
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      borderBottomWidth: 0.5,
      width: "90%"
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });