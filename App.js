import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('./app/statics/logo.png')} style={styles.navImg}/>
          <Text style={styles.navRight}>
            <Icon name="search" size={25}></Icon>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: '#ff4040',
    paddingHorizontal: 15,
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navImg: {
    height: 28,
    width: 92
  },
  navRight: {
    color: 'white',
    flexDirection: 'row'
  }
});
