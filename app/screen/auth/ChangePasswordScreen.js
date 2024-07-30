import { View, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, toastConfig } from '../../../style';
import Toast from 'react-native-toast-message';

const ChangePasswordScreen = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleFormSubmit = () => {
        if (!oldPassword || !newPassword || !confirmNewPassword) {
            Toast.show({
                text1: 'All fields are required',
                type: 'warning',
                duration: 2000,
                position: 'top',
                topOffset: 0
            });
            return;
        }

        if (newPassword !== confirmNewPassword) {
            Toast.show({
                text1: 'New passwords do not match',
                type: 'warning',
                duration: 2000,
                position: 'top',
                topOffset: 0
            });
            return;
        }

        const formData = { oldPassword, newPassword };
        setOldPassword('');
        setNewPassword('');
        setConfirmNewPassword('');

        Toast.show({
            text1: 'Password changed successfully',
            type: 'done',
            duration: 2000,
            position: 'top',
            topOffset: 0
        });

        console.log('Form Data:', formData);
    };

    return (
        <SafeAreaView>
            <Toast config={toastConfig} />
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={{ marginHorizontal: 30 }}>
                    <View style={styles.inputWithLabel}>
                        <Text style={styles.labelText}>Old Password</Text>
                        <TextInput
                            style={styles.input}
                            value={oldPassword}
                            onChangeText={setOldPassword}
                            placeholder='Enter Old Password'
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.inputWithLabel}>
                        <Text style={styles.labelText}>New Password</Text>
                        <TextInput
                            style={styles.input}
                            value={newPassword}
                            onChangeText={setNewPassword}
                            placeholder='Enter New Password'
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.inputWithLabel}>
                        <Text style={styles.labelText}>Confirm New Password</Text>
                        <TextInput
                            style={styles.input}
                            value={confirmNewPassword}
                            onChangeText={setConfirmNewPassword}
                            placeholder='Confirm New Password'
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{ width: 200, alignSelf: 'center', marginVertical: 20 }}>
                        <Button title='Change Password' onPress={handleFormSubmit} color='purple' />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ChangePasswordScreen;
