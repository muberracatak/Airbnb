import { View, Text, StyleSheet, Image, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Post = (props) => {
    const post = props.post;
    const width = useWindowDimensions().width;
    const navigation = useNavigation();
    const goToPostPage = () => {
        navigation.navigate('Post', { postId: post.id });
    }
    return (
        <Pressable onPress={goToPostPage} style={[styles.container, { width: width - 60 }]}>
            <View style={styles.innerContainer}>
                <Image style={styles.image} source={{ uri: post.image }} />
                <View style={{ marginHorizontal: 10, flex: 1 }}>
                    <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>
                    <Text style={styles.description} numberOfLines={2}>
                        {post.type}. {post.title}
                    </Text>
                    <Text style={styles.prices}>
                        <Text style={{ fontWeight: 'bold' }} >${post.newPrice}</Text>
                        / night
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Post;

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',

    },
    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b',
    },
    description: {
        fontSize: 15,
    },
    prices: {
        fontSize: 15,
        marginVertical: 10
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through'
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline'
    }
})