import { View, Text, TextInput, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import DATA from '../components/Post/data'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const post = DATA[0];
const EditProfileScreen = () => {
    const [username, setUsername] = useState('');
    const navigation = useNavigation();

    return (
        <View style={{ top: 50 }}>
            <Pressable onPress={() => navigation.goBack()}>
                <AntDesign name="back" size={24} color="black" style={{ margin: 10 }} />
            </Pressable>
            <Text style={{ fontWeight: '600', fontSize: 23, margin: 10, padding: 10 }}>Edit personal info </Text>
            <View>
                <TextInput
                    value={post.username}
                    style={{ borderWidth: 1, borderRadius: 12, borderColor: 'gray', margin: 10, padding: 14 }}
                    placeholder='First name'
                />
                <TextInput
                    value={post.lastname}
                    style={{ borderWidth: 1, borderRadius: 12, borderColor: 'gray', margin: 10, padding: 14 }}
                    placeholder='Last name'
                />
                <View style={{ height: 1, backgroundColor: 'lightgrey', width: 350, left: 20 }} />

            </View>
            <View>
                <Pressable style={{ margin: 10, padding: 10 }}>
                    <Text style={{ fontSize: 17 }}>
                        Email
                    </Text>
                    <Text style={{ color: 'gray' }}>
                        {post.email}
                    </Text>
                </Pressable>
                <View style={{ height: 1, backgroundColor: 'lightgrey', width: 350, left: 20 }} />
                <Pressable style={{ margin: 10, padding: 10 }}>
                    <Text style={{ fontSize: 17 }}>
                        Phone numbers
                    </Text>
                    <Text style={{ color: 'gray' }}>
                        For notifications, reminders, and help logging in.
                    </Text>
                </Pressable>
                <View style={{ height: 1, backgroundColor: 'lightgrey', width: 350, left: 20 }} />
                <Pressable style={{ margin: 10, padding: 10 }}>
                    <Text style={{ fontSize: 17 }}>
                        Government ID
                    </Text>
                    <Text style={{ color: 'gray' }}>
                        Not provided
                    </Text>
                </Pressable>
                <View style={{ height: 1, backgroundColor: 'lightgrey', width: 350, left: 20 }} />
                <Pressable style={{ margin: 10, padding: 10 }}>
                    <Text style={{ fontSize: 17 }}>
                        Emergency contact
                    </Text>

                </Pressable>
            </View>

        </View>
    )
}

export default EditProfileScreen