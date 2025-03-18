import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { List, Divider, Searchbar, Chip, Surface } from "react-native-paper";

export default function NewsScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Pesquisar notícias"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />

      <View style={styles.chipContainer}>
        <Chip style={styles.chip} mode="outlined" selected>
          Todas
        </Chip>
        <Chip style={styles.chip} mode="outlined">
          Tecnologia
        </Chip>
        <Chip style={styles.chip} mode="outlined">
          Negócios
        </Chip>
        <Chip style={styles.chip} mode="outlined">
          Esportes
        </Chip>
      </View>

      <ScrollView>
        <List.Item
          title="React Native Paper lança nova versão"
          description="A biblioteca de componentes para React Native acaba de receber uma grande atualização..."
          left={(props) => <List.Icon {...props} icon="react" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <Divider />

        <List.Item
          title="Expo anuncia novas funcionalidades"
          description="A plataforma Expo recebeu diversas atualizações para melhorar a experiência dos desenvolvedores..."
          left={(props) => <List.Icon {...props} icon="code-tags" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <Divider />

        <List.Item
          title="React lança hooks aprimorados"
          description="Novas funcionalidades para os hooks do React prometem melhorar o desempenho das aplicações..."
          left={(props) => <List.Icon {...props} icon="language-javascript" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <Divider />

        <List.Item
          title="Typescript ganha popularidade"
          description="Cada vez mais projetos estão adotando Typescript como linguagem padrão para desenvolvimento..."
          left={(props) => <List.Icon {...props} icon="language-typescript" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <Divider />

        <List.Item
          title="Dicas para melhorar a performance do seu app"
          description="Confira estas dicas essenciais para otimizar o desempenho do seu aplicativo React Native..."
          left={(props) => <List.Icon {...props} icon="speedometer" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  searchBar: {
    margin: 16,
    marginBottom: 8,
  },
  chipContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  chip: {
    marginRight: 8,
  },
});
