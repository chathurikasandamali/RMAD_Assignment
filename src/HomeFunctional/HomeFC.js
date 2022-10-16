/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from '../HomeCC.styles';

const HomeFC = () => {
    const sampleJson = {
      name: 'Chathurika Sandamali',
      address: 'Matara',
      age: 25,
      car: ['Honda', 'Toyota', 'BMW'],
    };
    const numberArray = [1, 2, 3, 4];
    const stringArray = ['Malshan', 'Isuru', 'Mishen'];
    const objectArray = [
      {
        name: 'Malshan',
        age: 18,
      },
      {
        name: 'Isuru',
        age: 20,
      },
      {
        name: 'Mishen',
        age: 25,
      },
    ];

    const [count, setCount] = useState(1);

    React.useEffect(() => {
        console.log("USE EFFECT")
        console.log("numberArray - ", numberArray);
        console.log("stringArray - ", stringArray);
        console.log("SampleJson Name - ", sampleJson.name);
        console.log("SampleJson car - ", sampleJson.car[0])
    }, []);
 
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{count}</Text>

        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
            style={styles.btn}
            onPress={() => setCount(count+1)}>
            <Text style={styles.btnTitle}>+ Button</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.btn}
            onPress={() => setCount(count-1)}>
            <Text style={styles.btnTitle}>- Button</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
};

export default HomeFC;
