import { View, Text } from 'react-native'
import React from 'react'
import DetailedPost from '../components/DetailedPost'
import places from '../components/Post/data'
import { useRoute } from '@react-navigation/native'

const PostScreen = (props) => {
    const route = useRoute()
    const post = places.find(place => place.id === route.params.postId);
    return (
        <View style={{ backgroundColor: 'white' }}>
            <DetailedPost post={post} />
        </View>
    )
}

export default PostScreen