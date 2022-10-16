/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import logo from '../ThirdWeek/logo.jpg';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={[{key: 'Kamal'}, {key: 'Amal'}, {key: 'Nimal'}]}
          renderItem={({item}) => <Text style={styles.logo}>{item.key}</Text>}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  logo: {
    fontSize: 25,
  },
});

export default Home;
