import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function News() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notícias sobre Natação</Text>
            <Image 
                source={{ uri: 'https://guiaderodas.com/wp-content/uploads/2021/08/Natacao-para-pessoas-com-deficiencia.jpg' }} 
                style={styles.image} 
            />
            <Text style={styles.content}>
                A natação é um dos esportes mais completos e benéficos para a saúde. 
                Recentemente, atletas de todo o mundo se reuniram para competir no campeonato mundial de natação, 
                onde recordes foram quebrados e novas estrelas surgiram. 
                A prática regular da natação pode melhorar a resistência cardiovascular, 
                fortalecer os músculos e promover o bem-estar geral.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#4DA3F0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
        color   : '#fff',
    },
});