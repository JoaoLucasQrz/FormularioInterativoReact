import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [dadosSalvos, setDadosSalvos] = useState<{ nome: string; idade: string; email: string } | null>(null);

  const salvar = () => {
    if (!nome || !idade || !email) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    setDadosSalvos({ nome, idade, email });
  };

  const limpar = () => {
    setNome("");
    setIdade("");
    setEmail("");
    setDadosSalvos(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Login</Text>
        <Text style={styles.headerSubtitle}>Bem-vindo! Preencha os campos abaixo:</Text>
      </View>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Seu nome"
        placeholderTextColor="#5A6566"
        style={styles.input}
      />

      <Text style={styles.label}>Idade</Text>
      <TextInput
        value={idade}
        onChangeText={(text) => setIdade(text.replace(/[^0-9]/g, ""))}
        placeholder="Sua idade"
        placeholderTextColor="#5A6566"
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Seu e-mail"
        placeholderTextColor="#5A6566"
        keyboardType="email-address"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button title="Salvar" onPress={salvar} color="#6EB5BB" />
        <Button title="Limpar" onPress={limpar} color="#6D8E91" />
      </View>

      {dadosSalvos && (
        <View style={styles.dadosContainer}>
          <Text style={styles.dadosTitulo}>Dados Salvos:</Text>
          <Text>Nome: {dadosSalvos.nome}</Text>
          <Text>Idade: {dadosSalvos.idade}</Text>
          <Text>E-mail: {dadosSalvos.email}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A3A3C",
    padding: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: "center",
  },
  headerTitle: {
    color: "#61DBE6",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  headerSubtitle: {
    color: "#6EB5BB",
    fontSize: 16,
  },
  label: {
    color: "#61DBE6",
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#6D8E91",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dadosContainer: {
    marginTop: 20,
    backgroundColor: "#6EB5BB",
    padding: 15,
    borderRadius: 8,
  },
  dadosTitulo: {
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2A3A3C",
    fontSize: 16,
  },
});
