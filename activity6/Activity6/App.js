import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Morning = [
  { id: '1', title: 'Wake-Up', color: '#27445D' },
  { id: '2', title: 'Brush  Teeth', color: '#497D74' },
  { id: '3', title: 'Drink a glass of water', color: '#71BBB2' },
  { id: '4', title: 'Make a quick Breakfast', color: '#3674B5' },
  { id: '5', title: 'Do exercise', color: '#578FCA' },
  { id: '6', title: 'Review your schedule and set priorities', color: '#3674B5' },
  { id: '7', title: 'Do homework', color: '#A1E3F9' },
  { id: '8', title: 'Clean the room', color: '#F7CFD8' },
  { id: '9', title: 'bath the dog', color: '#A6F1E0' },
  { id: '10', title: 'Third Item' },
];

const Afternoon = [
  { id: '1', title: 'Lunch Break', color: '#F8F5E9' },
  { id: '2', title: 'Cook food for lunch', color: '#E195AB' },
  { id: '3', title: 'Take a nap', color: '#FFCDB2' },
  { id: '4', title: 'Work on Pending Task', color: '#B5828C' },
  { id: '5', title: 'Do quick exercise', color: '#B1C29E' },
  { id: '6', title: 'Take Short Break', color: '#A7B49E' },
  { id: '7', title: 'Continue Study', color: '#FFDAB3' },
  { id: '8', title: 'Prepare for the Next Day', color: '#A6CDC6' },
  { id: '9', title: 'Evening Relaxation', color: '#C4D9FF' },
  { id: '10', title: 'Bond with family', color: '#A6CDC6' },
];

const Evening = [
  { id: '1', title: 'Dinner', color: '#123524' },
  { id: '2', title: 'Cook food for dinner', color: '#3E7B27' },
  { id: '3', title: 'Light Exercise', color: '#85A947' },
  { id: '4', title: 'Watch some series', color: '#4B5945' },
  { id: '5', title: 'go to bed', color: '#B2C9AD' },
  { id: '6', title: 'go to sleep', color: '#8EB486' },
];


const CustomRadioButton = ({ isSelected, onSelect }) => (
  <TouchableOpacity onPress={onSelect} style={styles.radioButtonContainer}>
    <View style={[styles.radioButton, isSelected && styles.selectedRadioButton]} />
  </TouchableOpacity>
);

const Item = ({ title, color, isSelected, onSelect }) => (
  <View style={[styles.item, { backgroundColor: color }]}>
    <TouchableOpacity onPress={onSelect}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    <CustomRadioButton isSelected={isSelected} onSelect={onSelect} />
  </View>
);

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (title) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(title)) {
        
        return prevSelectedItems.filter((item) => item !== title);
      } else {
        
        return [...prevSelectedItems, title];
      }
    });
  };

  const getNotSelectedCount = () => {
    
    const totalItems = [...Morning, ...Afternoon, ...Evening];
    return totalItems.length - selectedItems.length;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.textStyle}>Morning</Text>
        <FlatList
          data={Morning}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              color={item.color}
              isSelected={selectedItems.includes(item.title)}
              onSelect={() => handleSelect(item.title)}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        <Text style={styles.textStyle}>Afternoon</Text>
        <FlatList
          data={Afternoon}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              color={item.color}
              isSelected={selectedItems.includes(item.title)}
              onSelect={() => handleSelect(item.title)}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        <Text style={styles.textStyle}>Evening</Text>
        <FlatList
          data={Evening}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              color={item.color}
              isSelected={selectedItems.includes(item.title)}
              onSelect={() => handleSelect(item.title)}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        <Text style={styles.selectedCount}>
          Selected Count: {selectedItems.length}
        </Text>
        <Text style={styles.selectedCount}>
          Not Selected Count: {getNotSelectedCount()}
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    flex: 1,
  },
  radioButtonContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3674B5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  selectedRadioButton: {
    backgroundColor: '#3674B5',
  },
  selectedCount: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
});

export default App;