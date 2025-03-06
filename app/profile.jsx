import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Box, Heading, Text, Image } from 'native-base';

export default function Profile() {
    return (
        <NativeBaseProvider>
            <Box style={styles.container}>
                <Box style={styles.card}>
                    <Image 
                        source={{ uri: 'https://img.cdndsgni.com/preview/12161345.jpg' }} 
                        alt="Profile Image"
                        style={styles.profileImage} 
                    />
                    <Heading style={styles.name}>João Silva</Heading>
                    <Text style={styles.info}>Email: joao.silva@example.com</Text>
                    <Text style={styles.info}>Telefone: (11) 98765-4321</Text>
                    <Text style={styles.info}>Cidade: São Paulo, SP</Text>
                </Box>
            </Box>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4DA3F0',
        padding: 20,
    },
    card: {
        width: '90%',
        backgroundColor: '#4E70F0',
        padding: 30,
        alignItems: 'center',
        borderRadius: 10,
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
        color: '#fff',
    },
});