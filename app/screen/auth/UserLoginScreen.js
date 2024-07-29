import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../../style'



const UserLoginScreen = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleFormSumbit = () => {
        console.log('Email:', email, 'Password:', password)
        if (email && password) {
            console.log("Login Success")
        }
        else {
            console.log("Please fill out all fields")
        }
    }


    return (
        <SafeAreaView>
            <View style={{ marginHorizontal: 30 }}>
                <View style={styles.inputWithLabel}>
                    <Text style={styles.labelText}>Email</Text>
                    <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='Enter Email' keyboardType='email-address' />
                </View>
            </View>
            <View style={{ marginHorizontal: 30 }}>
                <View style={styles.inputWithLabel}>
                    <Text style={styles.labelText}>Password</Text>
                    <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder='Enter Password' secureTextEntry={true} />
                </View>
                <View style={{width:200,alignSelf:'center',margin:20}}>
                    <Button title='Login' onPress={handleFormSumbit} color='purple' />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default UserLoginScreen