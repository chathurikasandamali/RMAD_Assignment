/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import styles from './HomeCC.styles';

class HomeCC extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    console.log("constructor")
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate", nextProps, nextState)
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  componentWillUnmount(){
    console.log("componentWillUnmount")
  }

  onButtonPress() {
    console.log('PRESS');
    this.setState({
        count: this.state.count+1,
    });
  }

  onReduceButtonPress() {
    this.setState({
        count: this.state.count-1,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.count}</Text>

        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
            style={styles.btn}
            onPress={() => this.onButtonPress()}>
            <Text style={styles.btnTitle}>+ Button</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.btn}
            onPress={() => this.onReduceButtonPress()}>
            <Text style={styles.btnTitle}>- Button</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeCC;
