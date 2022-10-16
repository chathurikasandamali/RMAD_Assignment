/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const AssignmentMarks = () => {
  React.useEffect(() => {
    functionOne();
  }, []);

  const functionOne = () => {
    const marks = 80;

    //If condition
    if (marks > 75) {
      console.log('Result: A ');
    } else if (marks > 65 && marks < 75) {
      console.log('Result: B ');
    } else if (marks > 55 && marks < 65) {
      console.log('Result: C ');
    } else if (marks > 35 && marks < 55) {
      console.log('Result: S ');
    } else {
      console.log('Result: Fail ');
    }
  };

  return (
    <SafeAreaView>
      <Text>MARKS</Text>
    </SafeAreaView>
  );
};

export default AssignmentMarks;
	