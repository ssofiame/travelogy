import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SupportScreen = (navigation) => {
    return (
      <View style={styles.container}>
        <Text>Coming Soon</Text>
      </View>
    );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});