import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/HomeScreen'
import DestinationsSearch from '../screens/DestinationsSearch'
import SearchResultsMap from '../screens/SearchResultsMap'
import PostPage from '../screens/PostScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen'

import ExploreNavigator from '../navigation/ExploreNavigator'
const Tab = createBottomTabNavigator();


const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="search" size={24} color="black" />
                    ),
                }}
                name="Explore"
                component={ExploreNavigator}

            />
            <Tab.Screen name="Map"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="map-marked-alt" size={24} color="black" />),

                }}
                component={SearchResultsMap} />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        < FontAwesome5 name="user-circle" size={24} color="black" />),

                }}
                name="Profile" component={ProfileScreen} />

        </Tab.Navigator>
    )
}

export default HomeTabNavigator