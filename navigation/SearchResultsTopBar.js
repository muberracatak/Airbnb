import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();
const SearchResultsTopBar = (props) => {
    return (
        <Tab.Navigator >
            <Tab.Screen name='list' component={SearchResults}
                options={{
                    title: 'List View',
                    tabBarActiveTintColor: '#f15454',
                    tabBarIndicatorStyle: {
                        backgroundColor: '#f15454'
                    }
                }} />
            <Tab.Screen name='Map' component={SearchResultsMap} />

        </Tab.Navigator>
    )
}

export default SearchResultsTopBar