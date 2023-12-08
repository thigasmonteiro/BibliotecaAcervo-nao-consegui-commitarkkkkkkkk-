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

    <ScrollView>
          {Livros.map((Livro) => (
            <Cardlivro key={Livro.id} livro={Livro} />
          ))}
        </ScrollView>


    // <View style={styles.container}>
    //   <Text style={styles.header}>Acervo da Biblioteca</Text>
    //   <ScrollView style={styles.booksContainer}>
    //     {livros.map((livro) => (
    //       <TouchableOpacity key={livro.id} onPress={() => toggleModal(livro)}>
    //         <View style={styles.bookContainer}>
    //           <Image source={{ uri: livro.coverImage }} style={styles.bookImage} />
    //           <View style={styles.livroInfo}>
    //             <Text style={styles.bookTitle}>{livro.livro}</Text>
    //             <Text style={styles.bookAuthor}>Autor: {livro.autor}</Text>
    //             <Text style={styles.bookAuthor}>Editora: {livro.editora}</Text>
    //           </View>
    //           <Text style={book.available ? styles.available : styles.notAvailable}>
    //             {livro.available ? 'Disponível' : 'Indisponível'}
    //           </Text>
    //         </View>
    //       </TouchableOpacity>
    //     ))}
    //   </ScrollView>
    //   <Modal
    //     animationType="slide"
    //     transparent={true}
    //     visible={isModalVisible}
    //     onRequestClose={() => toggleModal()}
    //   >
    //     <View style={styles.modalContainer}>
    //       <View style={styles.modalContent}>
    //         <Text style={styles.modalTitle}>Detalhes do Livro</Text>
    //         <Image source={{ uri: selectedLivro?.coverImage }} style={styles.modalImage} />
    //         <Text style={styles.modalBookTitle}>{selectedLivro?.livro}</Text>
    //         <Text style={styles.modalBookAuthor}>Autor: {selectedLivro?.autor}</Text>
    //         <Text style={styles.modalBookAuthor}>Editora: {selectedLivro?.editora}</Text>
    //         <TextInput
    //           style={styles.input}
    //           placeholder="Seu nome"
    //           value={borrowerName}
    //           onChangeText={(text) => setBorrowerName(text)}
    //         />
    //         <TouchableOpacity style={styles.borrowButton} onPress={handleBorrow}>
    //           <Text style={styles.borrowButtonText}>Emprestar</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity style={styles.closeButton} onPress={() => toggleModal()}>
    //           <Text style={styles.closeButtonText}>Voltar</Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </Modal>
    // </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04BF7B',
    padding: 20,
    
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    justifyContent:'center'
  },
  booksContainer: {
    flex: 1,
    backgroundColor:"#04BF7B"
  },
  bookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff', // Fundo com transparência
    borderRadius: 10,
    padding: 10,
  },
  bookImage: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    marginRight: 10,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 16,
    color: 'gray',
  },
  available: {
    color: 'green',
    fontWeight: 'bold',
  },
  notAvailable: {
    color: 'red',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, orange)', // Cor de fundo preta com transparência
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  modalBookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalBookAuthor: {
    fontSize: 18,
    color: 'gray',
  },
  modalSynopsis: {
    fontSize: 16,
    marginBottom: 10,
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  borrowButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  borrowButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});


