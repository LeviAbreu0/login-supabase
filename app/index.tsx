import React from "react";
import { Link } from "expo-router";
import { Text, StyleSheet, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const botaoFormulario = () => {
  const [text, nomedoUsuario] = React.useState('');
  const [senha, senhaDoUsuario] = React.useState('');


  function click() {
    Alert.alert("Sucesso", `Usuário ${text} logado!`); // Alterei para Alert do React Native
  }

  return (

    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={nomedoUsuario}
        value={text}
        placeholder="Usuário"
        placeholderTextColor={"#999999"}
        keyboardType="default"
      />

      <TextInput
        style={styles.input}
        onChangeText={senhaDoUsuario}
        value={senha}
        placeholder="Senha"
        placeholderTextColor="#999999"
        secureTextEntry={true}
        keyboardType="default"
      />

      <TouchableOpacity style={styles.botao} onPress={click}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <Link href={"/recovery"} style={styles.link}>Recuperar Senha</Link>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 16,
  },
  input: {
    textAlign: 'left',
    margin: 10,
    borderWidth: 1,
    borderColor: '#333', 
    borderRadius: 15,
    padding: 16,
    width: '100%',
    backgroundColor: '#1e1e1e',
    color: '#fff', 
    fontSize: 16,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botao: {
    padding: 16,
    backgroundColor: '#228b22',
    marginTop: 24,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
  },
  linkContainer: {
    marginTop: 20,
  },
  link: {
    color: '#008000',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default botaoFormulario;