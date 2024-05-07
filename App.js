import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  { label: 'Türkiye', value: '1' },
  { label: 'Amerika', value: '2' },
  { label: 'İtalya', value: '3' },
  { label: 'Belçika', value: '4' },
  { label: 'Irak', value: '5' },
  { label: 'İran', value: '6' },
  { label: 'Çin', value: '7' },
  { label: 'Japonya', value: '8' },
];

const data2 = [
  { label: 'Ali', value: '1' },
  { label: 'Veli', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const DropdownComponent = () => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);

  const renderLabel = () => {
    if (value1 || value2 || value3 || value4) {
      return (
        <Text style={[styles.label, { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}

      {/* İlk Dropdown */}
      <Dropdown
        style={[styles.dropdown, { marginBottom: 12 }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Country"
        searchPlaceholder="Search..."
        value={value1}
        onChange={item => setValue1(item.value)}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={value1 ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />

      {/* İkinci Dropdown */}
      <Dropdown
        style={[styles.dropdown, { marginBottom: 12 }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data2}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Name"
        searchPlaceholder="Search..."
        value={value2}
        onChange={item => setValue2(item.value)}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={value2 ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />

      {/* Üçüncü Dropdown */}
      <Dropdown
        style={[styles.dropdown, { marginBottom: 12 }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Country"
        searchPlaceholder="Search..."
        value={value3}
        onChange={item => setValue3(item.value)}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={value3 ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />

      {/* Dördüncü Dropdown */}
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Country"
        searchPlaceholder="Search..."
        value={value4}
        onChange={item => setValue4(item.value)}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={value4 ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCFF',
    padding: 16,
    justifyContent: 'center',
    alignContent: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
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
