import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const SuggestionRow = ({ item }) => (


    <View >
        <View style={styles.row}>
            <View style={styles.icon}>
                <Entypo name="location-pin" size={24} color="black" />
            </View>
            <Text >{item.description}</Text>
        </View>
    </View>
)

export default SuggestionRow

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'lightgrey'

    },
    icon: {
        backgroundColor: '#d4d4d4',
        padding: 10,
        borderRadius: 10,
        marginRight: 10
    }
})