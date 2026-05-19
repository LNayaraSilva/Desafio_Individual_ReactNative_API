import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Vibration,
} from "react-native";

export default function App() {
  const [imagem, setImagem] = useState("");
  const [carregando, setCarregando] = useState(true);

  async function buscarCachorro() {
    try {
      setCarregando(true);

      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();

      setImagem(data.message);

      Vibration.vibrate(120);
    } catch (error) {
      console.log("Erro ao buscar cachorro:", error);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarCachorro();
  }, []);

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Carregando cachorro...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🐶 Cachorro Aleatório</Text>

      <View style={styles.card}>
        <Image source={{ uri: imagem }} style={styles.imagem} />

        <TouchableOpacity style={styles.botao} onPress={buscarCachorro}>
          <Text style={styles.textoBotao}>Novo cachorro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#ffb347",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 20,
},

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#20305a",
    textAlign: "center",
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
  },

  imagem: {
    width: "100%",
    height: 300,
    borderRadius: 14,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "#ff7a00",
    padding: 14,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});