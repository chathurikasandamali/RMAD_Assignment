/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const AssignmentMarks = () => {
  React.useEffect(() => {
    functionOne();
  }, []);

  const functionOne = () => {
    const marks = 70;

    //If condition
    // if (marks >= 75) {
    //   console.log('Result: A ');
    // } else if (marks >= 65 && marks < 75) {
    //   console.log('Result: B ');
    // } else if (marks >= 55 && marks < 65) {
    //   console.log('Result: C ');
    // } else if (marks >= 35 && marks < 55) {
    //   console.log('Result: S ');
    // } else {
    //   console.log('Result: Fail ');
    // }

    //Ternary Operator
    // marks >= 75 ? console.log('Result: A ')
    // : marks >= 65 ? console.log('Result: B ')
    // : marks >= 55 ? console.log('Result: C ')
    // : marks >= 35 ? console.log('Result: S ')
    // : console.log('Result: Fail ');

    //Switch case
    switch (true) {
        case marks >= 75:
            console.log('Result: A ');
            break;
        case marks >= 65:
            console.log('Result: B ');
            break;
        default:
            console.log('Result: Fail ');
            break;
    }
  };

  return (
    <SafeAreaView>
      <Text>MARKS</Text>
    </SafeAreaView>
  );
};

export default AssignmentMarks;
