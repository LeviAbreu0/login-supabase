import React from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const RecuperarSenha = () => {
  const [text, email] = React.useState('');
  
  function click() {
    alert("Seu código para redefinição foi enviado para seu email!");
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={email}
        placeholder="Insira seu email."
        keyboardType="default"
      />
      <TouchableOpacity style={styles.botao} onPress={click}>
        <Text style={styles.texto}>Enviar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 36,
    alignItems: 'center',
  },
  input: {
    margin: 10,
    borderWidth: 1.5,
    borderRadius: 15,
    padding: 20,
    width: '100%',
    textAlign: 'left',
  },
  botao: {
    padding: 16,
    backgroundColor: 'lightskyblue',
    marginTop: 24,
    borderRadius: 16,
    width: '100%',
    height: 56,
  },
  texto: {
    textAlign: 'center',
    color: 'black',
  }
});

export default RecuperarSenha;