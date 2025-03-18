import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Menu, IconButton } from "react-native-paper";
import { useRouter } from "expo-router";

export default function NavigationMenu() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const navigateTo = (path) => {
    closeMenu();
    router.push(path);
  };

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={<IconButton icon="menu" size={24} onPress={openMenu} />}
    >
      <Menu.Item
        onPress={() => navigateTo("/")}
        title="Home"
        leadingIcon="home"
      />
      <Menu.Item
        onPress={() => navigateTo("/news")}
        title="Notícias"
        leadingIcon="newspaper"
      />
      <Menu.Item
        onPress={() => navigateTo("/profile")}
        title="Perfil"
        leadingIcon="account"
      />
    </Menu>
  );
}

const styles = StyleSheet.create({});
