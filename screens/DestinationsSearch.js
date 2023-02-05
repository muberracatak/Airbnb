import { View, Text, TextInput, StyleSheet, Button, FlatList, Pressable, Modal, ScrollView, DatePickerIOS } from 'react-native'
import React, { useState } from 'react'
import SearchData from './search'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';
import DateTimePicker from '@react-native-community/datetimepicker';


const DestinationsSearch = (props) => {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    return (




        <View style={styles.container}>

            <View >
                <Text style={{ fontSize: 23, fontWeight: '600', top: -60, left: -18 }}>Where to ?</Text>
            </View>

            <GooglePlacesAutocomplete
                placeholder='Search '
                onPress={(data, details = null) => {

                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    navigation.navigate('GuestScreen')
                }}
                style={{
                    top: 1,
                    height: '30%',
                    backgroundColor: 'white',

                }}
                query={{
                    key: 'AIzaSyCfyolB-xHPHwm3b_PFHiniMImG4fcRVX4',
                    language: 'en',
                    types: '(cities)'
                }}
                renderRow={(item) =>
                    <SuggestionRow item={item} />
                }
            />

            <View>
                <Text style={{ fontSize: 23, fontWeight: '600', top: 180, left: -18 }}>When's your trip ?</Text>

            </View>
            <View style={{ top: 200, left: -215 }}>
                <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={(event, selectedDate) => {
                        setShow(false);
                        setDate(selectedDate || date);
                    }}
                />
            </View>
            <View>
                <Text style={{ top: 172, left: 97, fontSize: '17' }}>Selected date : {date.toDateString()}</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable
                    onPress={() => navigation.navigate('HomeScreen')}
                    style={{ justifyContent: 'center', top: 250, backgroundColor: 'purple', alignItems: 'center', width: 80, borderWidth: 1, borderRadius: 12, padding: 10 }} >
                    <Text style={{ color: 'white' }}>Search</Text>
                </Pressable>
            </View>


        </View >

    )
}

export default DestinationsSearch;

const styles = StyleSheet.create({
    container: {
        margin: 20,
        top: 40,
        height: '50%',
        backgroundColor: 'white',
        padding: 20
    },
    textInput: {
        fontSize: 30,
        marginBottom: 20,
        marginTop: 100,
        borderWidth: 1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'

    },
    locationText: {

    },
    icon: {
        backgroundColor: '#d4d4d4',
        padding: 10,
        borderRadius: 10,
        marginRight: 10
    }

})