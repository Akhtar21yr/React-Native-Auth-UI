import { View, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles, toastConfig } from '../../../style'
import Toast from 'react-native-toast-message'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'



const SendPasswordResetEmail = () => {
    navigation = useNavigation()
    const [email, setEmail] = useState()

    const handleFormSumbit = () => {
        if (email) {
            const formData = { email }
            setEmail()
            Toast.show({
                text1: 'Password Reset Email Sent Please Check your Email',
                type: 'done',
                duration: 2000,
                position: 'top',
                topOffset: 0
            })
        }
        else {
            Toast.show({
                text1: 'Email is required',
                type: 'warning',
                duration: 2000,
                position: 'top',
                topOffset: 0
            })
        }
    }


    return (
        <SafeAreaView>
            <Toast config={toastConfig} />
            <ScrollView keyboardShouldPersistTaps='handled'>

                <View style={{ marginHorizontal: 30 }}>
                    <View style={{ alignSelf: 'center', marginBottom: 10 }}>
                        <MaterialIcons name='shopping-bag' color='purple' size={100} />
                    </View>
                    <View style={styles.inputWithLabel}>
                        <Text style={styles.labelText}>Email</Text>
                        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='Enter Email' keyboardType='email-address' />
                    </View>
                </View>
                <View style={{ marginHorizontal: 30 }}>
                    <View style={{ width: 200, alignSelf: 'center', margin: 20 }}>
                        <Button title='Login' onPress={handleFormSumbit} color='purple' />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default SendPasswordResetEmail