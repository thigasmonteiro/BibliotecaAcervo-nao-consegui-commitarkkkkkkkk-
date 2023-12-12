import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import livroService from '../../services/Livro'
import Cardlivro from '../../Cards/Cardlivro';
import AutorService from '../../services/Autor'

export default function LibraryCatalog ({ navigation }) {
  const [Livros, setLivros] = useState([]);

  async function BuscarDados2() {
    const data = await livroService.getAllLivros();
    setLivros(data);
  }

  useEffect(() => {
    BuscarDados2();
  }, []);


  
  return (

    <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Livros em Estoque </Text>
          {Livros.map((Livro) => (
            <Cardlivro key={Livro.id} livro={Livro} autor={autor} />
          ))}
        </ScrollView>



  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2296F0',
    padding: 20,
  },
  titulo:{
    color:'white',
    fontSize:20,
    justifyContent:'center',
    fontWeight:'bold'
  }
  
});


