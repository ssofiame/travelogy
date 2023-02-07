import React, { Component } from 'react';
import Constants from 'expo-constants';
import { Image, Text, VStack, Center, NativeBaseProvider } from 'native-base';
import { StyleSheet } from 'react-native'

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('App');
    }, 4000);
  }
  render() {
    return (
      <NativeBaseProvider bg='#00000'>
        <VStack style={styles.vstack}>
          <Center>
            <Image source={require("../assets/logo1.png")} style={styles.pict} />
          </Center>
          <Text style={styles.text}> Developed by Telkom Team </Text> 
        </VStack>
      </NativeBaseProvider>
    );
  }
}

var styles = StyleSheet.create({
  vstack: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pict: {
    width: 150,
    height: 100
  },
  text: {
    position: 'absolute',
    bottom: 0,
  },
})