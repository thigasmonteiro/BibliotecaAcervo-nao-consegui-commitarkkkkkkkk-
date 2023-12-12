import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

function Card(props) {
  const { livro } = props;

  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.cardImagem}
        source={{ uri: livro.capa.url }}
      />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitulo}>{livro.titulo}</Text>
        <Text style={styles.cardAutor}>{livro.autor}</Text>
        <Text style={styles.cardISBN}>ISBN: {livro.isbn}</Text>
        <Text style={styles.cardAnoPublicacao}>Autor: {livro.autor} </Text>
        <Text style={styles.cardAutor}>Autor: José</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F5F5F5', // Fundo mais claro
    borderRadius: 10,
    padding: 15, // Maior espaço interno
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Sombra para destacar o card
  },
  cardImagem: {
    width: 100,
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
    marginRight: 15,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 18, // Título maior
    fontWeight: 'bold', // Negrito
    marginBottom: 5,
    color: '#333', // Cor mais escura
  },
  cardAutor: {
    fontSize: 14,
    color: '#777', // Cor mais suave
    marginBottom: 5,
  },
  cardISBN: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  cardAnoPublicacao: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'italic', // Itálico para o ano de publicação
  },
});

export default Card;
