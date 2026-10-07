import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Card, Title, Paragraph, Button, Divider } from "react-native-paper";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Content>
          <Title>Bem-vindo ao App</Title>
          <Paragraph>
            Este é um exemplo de um card do React Native Paper. Você pode
            navegar entre as telas usando o dropdown menu no topo direito ou a
            barra de navegação inferior.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Saiba mais</Button>
          <Button mode="contained">Iniciar</Button>
        </Card.Actions>
      </Card>

      <Divider style={styles.divider} />

      <Card style={styles.card}>
        <Card.Content>
          <Title>Recursos</Title>
          <Paragraph>
            Explore os recursos disponíveis em nosso aplicativo. O React Native
            Paper fornece componentes modernos para uma experiência de usuário
            aprimorada.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Explorar</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Configurações</Title>
          <Paragraph>
            Personalize seu aplicativo de acordo com suas preferências.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button icon="cog">Configurar</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  card: {
    margin: 16,
    marginBottom: 8,
  },
  divider: {
    marginVertical: 8,
  },
});
