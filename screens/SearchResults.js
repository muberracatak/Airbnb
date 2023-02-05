import { View, Text, FlatList, Pressable, Dimensions, ScrollView, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DATA from '../components/Post/data'
import Posts from '../components/Post/Posts'
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider, SearchIcon } from "native-base"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import DestinationsSearch from './DestinationsSearch'

const SearchResults = (props) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', top: 30, position: 'relative' }}>

            <Pressable style={{
                marginHorizontal: 10,
                width: Dimensions.get('screen').width - 40, zIndex: 100, top: 20, position: 'absolute', flexDirection: 'row', backgroundColor: '#fff', height: 56, borderRadius: 30, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
            }} onPress={() => navigation.navigate('DestinationsSearch')}>
                <View  >
                    <View>
                        <NativeBaseProvider >
                            <SearchIcon size="5" style={{ marginTop: 14, marginLeft: 10 }} />
                        </NativeBaseProvider>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 38, marginTop: 8 }}>Where to?</Text>
                    <Text style={{ fontSize: 14, marginLeft: 38, marginTop: 4, color: 'gray' }}>Anywhere - Any week - Add guests</Text>
                </View>
            </Pressable>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ top: 80 }}>
                <View style={{ flexDirection: 'row', margin: 20 }}>
                    <Pressable style={{ alignItems: 'center' }} onPress={() => navigation.navigate('BeatifulLandscapes')}>
                        <MaterialCommunityIcons name="window-open-variant" size={24} color="black" />
                        <Text style={{ padding: 5 }}>Beautiful landscapes</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center' }} onPress={() => navigation.navigate('BeatifulLandscapes')}>
                        <MaterialCommunityIcons name="palm-tree" size={24} color="black" />
                        <Text style={{ padding: 5 }}>Next to sea</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center' }} onPress={() => navigation.navigate('BeatifulLandscapes')}>
                        <MaterialCommunityIcons name="home" size={24} color="black" />
                        <Text style={{ padding: 5 }}>Tiny homes</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center' }} onPress={() => navigation.navigate('BeatifulLandscapes')}>
                        <MaterialCommunityIcons name="home-flood" size={24} color="black" />
                        <Text style={{ padding: 5 }}>Mansions</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center' }} onPress={() => navigation.navigate('BeatifulLandscapes')}>
                        <MaterialIcons name="vpn-key" size={24} color="black" />
                        <Text style={{ padding: 5 }}>New</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center' }} onPress={() => navigation.navigate('BeatifulLandscapes')}>
                        <Ionicons name="bed" size={24} color="black" />
                        <Text style={{ padding: 5 }}>Private rooms</Text>
                    </Pressable>
                </View>
            </ScrollView>
            <View style={{ height: 1, backgroundColor: 'gray', marginTop: 80 }} />
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <DestinationsSearch />
            </Modal>
            < FlatList
                data={DATA}
                renderItem={({ item }) =>
                    <Posts post={item} />
                }
                style={{ top: 20 }}
            />
        </View >
    )
}

export default SearchResults;

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        top: 650,
        left: 165,
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 20,
        width: 80,
        alignItems: 'center',

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})