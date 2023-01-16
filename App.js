import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import FullName from './src/components/FullName';

function App() {
  //For storing data specific to component
  const [count, setCount] = useState(0);
  const [name, setName] = useState({
    name: '',
  });

  const handleChange = text => {
    setName(prevName => {
      return {
        ...prevName,
        name: text,
      };
    });
  };

  return (
    // For preventing UI to render in safearea
    <SafeAreaView style={styles.rootContainer}>
      {/*For making overflowing content scollable */}
      <ScrollView style={styles.scrollView}>
        {/*container to hold other components */}
        <View style={styles.viewContainer}>
          <Text style={styles.heading}>React Natice Component Demo</Text>
          {/* for displaying text */}
          <Text style={[styles.heading, styles.textContainer]}>
            {/* It supportes nesting of styling */}
            <Text>Nested Text </Text>
            <Text>Another nested text</Text>
          </Text>
          <Text style={{color: '#f00', fontSize: 20}}>Outside text</Text>

          {/*Using state to hold and manage container specific data  */}
          <Text style={styles.heading}>Count : {count}</Text>
          <Button
            title="Increment Count"
            onPress={() => setCount(prevCount => prevCount + 1)}
          />

          {/*Passing props using custom fullname component */}
          <FullName fName="Monkey D." lName="Luffy" />
        </View>

        {/*For getting user input data */}
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: '#0f0',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {name.name}
          </Text>
        </View>
        <TextInput
          value={name.name}
          //With using onChange
          // onChange={event => {
          //   return handleChange(event.nativeEvent.text);
          // }}
          onChangeText={handleChange}
          placeholder="Your name"
          style={styles.input}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heading: {
    paddingHorizontal: 10,
    marginVertical: 5,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    margin: 10,
    padding: 10,
    borderColor: '#0f0',
    borderWidth: 2,
    borderRadius: 15,
    color: '#000',
  },
});
