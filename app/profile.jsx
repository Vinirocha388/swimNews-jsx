import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  List,
  Switch,
  Divider,
} from "react-native-paper";

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);

  const onToggleDarkMode = () => setDarkMode(!darkMode);
  const onToggleNotifications = () => setNotifications(!notifications);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={100}
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={styles.avatar}
        />
        <Title>João Silva</Title>
        <Paragraph>joao.silva@email.com</Paragraph>
        <Button mode="outlined" style={styles.editButton} icon="account-edit">
          Editar Perfil
        </Button>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Configurações</Title>

          <List.Item
            title="Modo Escuro"
            right={() => (
              <Switch value={darkMode} onValueChange={onToggleDarkMode} />
            )}
          />
          <Divider />

          <List.Item
            title="Notificações"
            right={() => (
              <Switch
                value={notifications}
                onValueChange={onToggleNotifications}
              />
            )}
          />
          <Divider />

          <List.Item
            title="Idioma"
            description="Português (Brasil)"
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />

          <List.Item
            title="Privacidade"
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Atividade</Title>

          <List.Item
            title="Histórico"
            description="Ver seu histórico de atividades"
            left={(props) => <List.Icon {...props} icon="history" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />

          <List.Item
            title="Favoritos"
            description="Gerenciar seus itens favoritos"
            left={(props) => <List.Icon {...props} icon="star" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />

          <List.Item
            title="Downloads"
            description="Gerenciar seus downloads"
            left={(props) => <List.Icon {...props} icon="download" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        style={styles.logoutButton}
        icon="logout"
        buttonColor="#FF3B30"
      >
        Sair
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  avatar: {
    marginBottom: 10,
  },
  editButton: {
    marginTop: 10,
  },
  card: {
    margin: 16,
    marginBottom: 8,
  },
  logoutButton: {
    margin: 16,
    marginBottom: 32,
  },
});
