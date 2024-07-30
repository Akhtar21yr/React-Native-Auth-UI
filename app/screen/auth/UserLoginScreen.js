import { View, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles, toastConfig } from '../../../style'
import Toast from 'react-native-toast-message'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'




const UserLoginScreen = () => {
    navigation = useNavigation()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleFormSumbit = () => {
        console.log('Email:', email, 'Password:', password)
        if (email && password) {
            const formData = { email, password }
            setEmail()
            setPassword()
            Toast.show({
                text1: 'Login success',
                type: 'done',
                duration: 2000,
                position: 'top',
                topOffset: 0
            })
        }
        else {
            Toast.show({
                text1: 'All fields are required',
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
                    <View style={styles.inputWithLabel}>
                        <Text style={styles.labelText}>Password</Text>
                        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder='Enter Password' secureTextEntry={true} />
                    </View>
                    <View style={{ width: 200, alignSelf: 'center', margin: 20 }}>
                        <Button title='Login' onPress={handleFormSumbit} color='purple' />
                    </View>
                    <View style={{flexDirection:'row', alignSelf:'center'}}>
                        <View style={{flex:1}}>
                            <TouchableOpacity onPress={()=>{console.log('password reset screen')}} style={{justifyContent:'flex-start'}}>
                                <Text style={{fontWeight:'bold',color:'blue'}}>Forget Password</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Registration')}} style={{justifyContent:'flex-end'}}>
                                <Text style={{fontWeight:'bold',color:'blue'}}>New User? Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default UserLoginScreen