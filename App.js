import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Amplify, { Auth } from '@aws-amplify/core'
import awsconfig from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Router from './navigation/Router'
//muberra.catak45@gmail.com

Amplify.configure(awsconfig);
const Stack = createNativeStackNavigator();
const App = () => {
  return (

    <Router />

  );
}

export default App;
