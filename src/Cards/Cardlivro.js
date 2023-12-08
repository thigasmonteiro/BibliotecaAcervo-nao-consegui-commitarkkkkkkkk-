import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

function Card(props) {
  return (
    <View>
      <Image
        style={{ width: "40%", height: "100%", borderRadius: 10 }}
        source={{ uri: props.livro.capa.url }}
        />
      <View>
        <Text style={{ fontSize:20, padding: 10, marginRight: 145}}>{props.livro.titulo}</Text>      </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff', // Fundo com transparência
    borderRadius: 10,
    padding: 10,
  },
  cardImagem: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    marginRight: 10,
  },
  cardInfo: {
    flex: 1,
  },
  cardTexto: {
    fontSize: 16,
  },
});

export default Card;