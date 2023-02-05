import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SearchResults from '../screens/SearchResults';
import SearchResultsTopBar from './SearchResultsTopBar';
const Stack = createNativeStackNavigator();

const Router = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="SearchResults" component={SearchResults}
                options={{ title: 'Search your destination' }}
            />
            <Stack.Screen
                name="Welcome" component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />




        </Stack.Navigator>

    )
}

export default Router