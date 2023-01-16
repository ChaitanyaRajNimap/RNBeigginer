import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function FullName({fName, lName}) {
  return (
    <View styles={styles.rootContainer}>
      <Text style={styles.heading}>
        Ore wa {fName} {lName}!
      </Text>
    </View>
  );
}

export default FullName;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    margin: 10,
    color: '#f00',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
