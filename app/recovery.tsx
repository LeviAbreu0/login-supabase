import React from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


const RecuperarSenha = () => {
  const [text, email] = React.useState('');
  
  function click() {
    alert("Seu código para redefinição foi enviado para seu email!");
  }

  return (
    <SafeAreaView style = {styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={email}
        placeholder="Insira seu email"
        placeholderTextColor={'#999999'}
        keyboardType="default"
      />
      <TouchableOpacity style={styles.botao} onPress={click}>
        <Text style={styles.textoBotao}>Enviar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
  },
  input: {
    backgroundColor: '#1e1e1e',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 15,
    padding: 16,
    width: '100%',
    textAlign: 'left',
    fontSize: 16,
    color: '#fff',
  },
  botao: {
    padding: 16,
    backgroundColor: '#228b22',
    marginTop: 24,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  }
});

export default RecuperarSenha;