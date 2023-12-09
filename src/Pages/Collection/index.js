import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import livroService from '../../services/Livro'
import Cardlivro from '../../Cards/Cardlivro';

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
         
          {Livros.map((Livro) => (
            <Cardlivro key={Livro.id} livro={Livro} />
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
  
});


