import { View, Text, Pressable, Dimensions } from 'react-native'
import React from 'react'
import Posts from './Posts'
import DATA from './data'

const data = DATA[0]
const PostScreen = () => {
    return (
        <View>

            <Posts post={data} />
        </View>
    )
}

export default PostScreen