import { View, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, toastConfig } from '../../../style';
import Toast from 'react-native-toast-message';
import Checkbox from 'expo-checkbox';

const RegistrationScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [tc, setTc] = useState(false);

    const handleFormSubmit = () => {
        console.log('Email:', email, 'Password:', password);

        if (!name || !email || !password || !confirmPassword) {
            Toast.show({
                text1: 'All fields are required',
                type: 'warning',
                duration: 2000,
                position: 'top',
                topOffset: 0
            });
            return;
        }

        if (password !== confirmPassword) {
            Toast.show({
                text1: 'Passwords do not match',
                type: 'warning',
                duration: 2000,
                position: 'top',
                topOffset: 0
            });
            return;
        }

        if (!tc) {
            Toast.show({
                text1: 'Please accept Terms and Conditions',
                type: 'warning',
                duration: 2000,
                position: 'top',
                topOffset: 0
            });
            return;
        }

        const formData = { name, email, password, tc };
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setTc(false);

        Toast.show({
            text1: 'Registration successful',
            type: 'done',
            duration: 2000,
            position: 'top',
            topOffset: 0
        });

        console.log('Form Data:', formData);
    };

    return (
        <SafeAreaView>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <Toast config={toastConfig} />
                <View style={{ marginHorizontal: 30 }}>
                    <View style={styles.inputWithLabel}>
                        <Text style={styles.labelText}>Name</Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            placeholder='Enter Name'
                            keyboardType='default'
                        />
                    </View>
                    <View style={styles.inputWithLabel}>
                        <Text style={styles.labelText}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder='Enter Email'
                            keyboardType='email-address'
                        />
                    </View>
                    <View style={styles.inputWithLabel}>
                        <Text style={styles.labelText}>Password</Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            placeholder='Enter Password'
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.inputWithLabel}>
                        <Text style={styles.labelText}>Confirm Password</Text>
                        <TextInput
                            style={styles.input}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder='Confirm Password'
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                        <Checkbox
                            value={tc}
                            onValueChange={setTc}
                            color={tc ? '#4630EB' : undefined}
                        />
                        <Text style={{ color: tc ? '#4630EB' : 'black', marginLeft: 10 }}>
                            I agree to the Terms & Conditions
                        </Text>
                    </View>
                    <View style={{ width: 200, alignSelf: 'center', marginVertical: 20 }}>
                        <Button title='Register' onPress={handleFormSubmit} color='purple' />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('UserLogin')} style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: 'blue' }}>Already registered? Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RegistrationScreen;
