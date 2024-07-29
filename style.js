import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    labelText: {
        fontSize: 18,
        marginBottom: 6,
        marginLeft: 7,
    },
    input: {
        height: 40,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 8,
        fontSize: 15,
    },
    inputWithLabel: {
        marginBottom: 10,
        marginTop: 5,
    },
});

const toastConfig = {
    warning: ({ text1, props }) => (
        <View style={{ 
            height: 30, 
            width: '100%', 
            backgroundColor: 'orange', 
            justifyContent: 'center', 
            alignItems: 'center' ,
            paddingTop:12.5
        }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>
    ),
    done: ({ text1, props }) => (
        <View style={{ 
            height: 30, 
            width: '100%', 
            backgroundColor: '#1affc6', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingTop:12.5
        }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>
    ),
};

export { styles, toastConfig };
