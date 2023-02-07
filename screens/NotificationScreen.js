import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NotificationScreen = (navigation) => {
    return (
      <View style={styles.container}>
        <Text>Coming Soon</Text>
      </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
