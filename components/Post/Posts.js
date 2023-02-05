import { View, Text, StyleSheet, Image, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const Posts = (props) => {
    const post = props.post;
    const navigation = useNavigation();

    return (
        <View>
            <View>

                <Pressable onPress={() => navigation.navigate('Post', { postId: post.id })} style={styles.container}>

                    <Image style={styles.image} source={{ uri: post.image }} />
                    <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>
                    <Text style={styles.description} numberOfLines={2}>
                        {post.type}. {post.title}
                    </Text>
                    <Text style={styles.prices}>
                        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                        <Text style={{ fontWeight: '700' }}>   ${post.newPrice} </Text>
                        night
                    </Text>
                    <Text style={styles.totalPrice}> {post.totalPrice}</Text>

                </Pressable>

            </View>

        </View>
    )
}

export default Posts;

const styles = StyleSheet.create({
    container: {
        margin: 20,

    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10

    },
    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b',
    },
    description: {
        fontSize: 18,
        lineHeight: 26
    },
    prices: {
        fontSize: 18,
        marginVertical: 10
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through'
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})
