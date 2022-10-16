/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const HomeFC = () => {
  const FruitArray = [
    {
        id: 1,
        name: 'BlueBerry',
    },
    {
        id: 2,
        name: 'Orange',
    },
    {
        id: 3,
        name: 'Apple',
    },
  ];


  React.useEffect(() => {
    functionOne();
  }, []);

  const functionOne = () => {
    const name = 'Apple';

    //If condition
    if (name === 'BlueBerry') {
      console.log('Fruit', true);
    } else {
      console.log('Fruit', false);
    }

    //Ternary Operator
    name === 'Orange'
    ? console.log('Fruit', true)
    : console.log('Fruit', false);

    //Switch Condition
    switch (name){
        case 'Apple': console.log('Fruit', true);
            break;
        default: console.log('Fruit', false);
            break;
    }
  };

  return (
    <SafeAreaView>
      <Text>IF CONDITION</Text>
    </SafeAreaView>
  );
};

export default HomeFC;
