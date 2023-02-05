import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from '../screens/signinScreen';
import SignupScreen from '../screens/signupScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen'
import EditProfileScreen from '../screens/EditProfileScreen'

import SearchResultsMap from '../screens/SearchResultsMap';
import PostScreen from '../screens/PostScreen';
import SearchResults from '../screens/SearchResults';
import DestinationsSearch from '../screens/DestinationsSearch';
import GuestScreen from '../screens/GuestScreen';
import GuzelManzaralar from '../screens/GuzelManzaralar';
import TabNavigator from './HomeTabNavigator'
import ExploreNavigator from './ExploreNavigator'
const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignInScreen} />

                <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={TabNavigator}
                />



                <Stack.Screen name="DestinationsSearch" component={DestinationsSearch}
                    options={{ title: 'Where ?' }}
                />
                <Stack.Screen name="GuestScreen" component={GuestScreen} options={{ title: '' }} />
                <Stack.Screen name="Post" component={PostScreen} options={{ title: '' }} />
                <Stack.Screen name="BeatifulLandscapes" component={GuzelManzaralar} />
                <Stack.Screen options={{ headerShown: false }} name="SearchResultsMap" component={SearchResultsMap} />

                <Stack.Screen options={{ headerShown: false }} name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen options={{ headerShown: false }} name="EditProfileScreen" component={EditProfileScreen} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router