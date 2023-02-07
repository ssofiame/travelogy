import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import RootStackScreen from './screens/RootStackScreen';
import DrawerScreen from './screens/DrawerScreen';

import { auth } from './config';

const App = () => {

  const [isLoggedIn, setLoggedIn] = useState(false); 

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <PaperProvider>
    <NavigationContainer>
      { isLoggedIn ? (
        <DrawerScreen/>
      )
    :
      (
      <RootStackScreen/>
    )}
    </NavigationContainer>
    </PaperProvider>
  );
}

export default App;