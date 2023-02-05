import { View, Text, FlatList } from 'react-native'
import React from 'react'
import DATA from '../components/Post/data'
import Posts from '../components/Post/Posts'

const GuzelManzaralar = () => {
    return (
        < FlatList
            data={DATA}
            renderItem={({ item }) =>
                <Posts post={item} />
            }
            style={{ top: 20 }}
        />
    )
}

export default GuzelManzaralar