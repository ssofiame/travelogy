import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CardListScreen = (navigation) => {
    return (
      <View style={styles.container}>
        <Text>Coming Soon</Text>
      </View>
    );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});