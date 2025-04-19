import React from "react";
import { Link } from "expo-router";
import { Text, StyleSheet, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



//botoes de formulario hooks

const botaoFormulario = () => {
  const [text, nomedoUsuario] = React.useState('');
  const [senha, senhaDoUsuario] = React.useState('');

  //Função de click!!!

  function click() {
    alert(`Usuário! ${text}, logado!`);
  }

  return (

    <SafeAreaView style={styles.container}>

      <TextInput
        style={styles.input}
        onChangeText={nomedoUsuario}
        value={text}
        placeholder="Usuário"
        keyboardType="default"
      />

      <TextInput
        style={styles.input}
        onChangeText={senhaDoUsuario}
        value={senha}
        placeholder="Senha"
        secureTextEntry={true}
        keyboardType="default"
      />

      <TouchableOpacity style={styles.botao} onPress={click}>
        <Text style={styles.texto}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <Link href={"/recovery"}>Recuperar Senha</Link>
      </View>

    </SafeAreaView>
  );
};

//criando css

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 24,
  },
  input: {
    margin: 10,
    borderWidth: 1.5,
    borderRadius: 15,
    padding: 20,
    width: '100%',
    textAlign: 'left',
  },
  texto: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },

  botao: {
    padding: 16,
    backgroundColor: 'lightskyblue',
    marginTop: 24,
    borderRadius: 16,
    width: '100%',
    height: 56,
  }
});

export default botaoFormulario;