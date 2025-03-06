import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Bem-vindo ao nosso aplicativo!</Text>
            <Image 
                source={{ uri: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3139049:1632325398/shutterstock_793317166_Easy-Resize.com.jpg?f=16x9&h=574&w=1020&$p$f$h$w=5f51913' }} 
                style={styles.image} 
            />
            
            <Text style={styles.descriptionText}>
                Estamos felizes em tê-lo aqui. Explore o aplicativo para descobrir mais!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4DA3F0',
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 140,
        borderRadius: 10,
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 130,
        color: '#fff',
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 10,
        marginTop: -100,
        color: '#fff',
    },
});