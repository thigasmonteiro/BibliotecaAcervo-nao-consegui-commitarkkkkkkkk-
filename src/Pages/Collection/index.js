import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal, TextInput } from 'react-native';

const LibraryCatalog = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      livro: 'Livro 1',
      autor: 'Autor 1',
      coverImage: 'https://via.placeholder.com/150',
      synopsis: 'Sinopse do Livro 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique tristique leo. ',
      available: true,
      details: {
        language: 'Português',
        pages: 300,
        categoria: 'Ficção',
        publicationYear: 2022,
      },
    },
    {
      id: 2,
      livro: 'Livro 2',
      autor: 'Autor 2',
      coverImage: 'https://via.placeholder.com/150',
      synopsis: 'Sinopse do Livro 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique tristique leo. ',
      available: false,
      details: {
        language: 'Inglês',
        pages: 250,
        categoria: 'Não Ficção',
        publicationYear: 2021,
      },
    },
    {
      id: 3,
      livro: 'Livro 3',
      autor: 'Autor 3',
      coverImage: 'https://via.placeholder.com/150',
      synopsis: 'Sinopse do Livro 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique tristique leo. ',
      available: true,
      details: {
        language: 'Espanhol',
        pages: 200,
        categoria: 'Romance',
        publicationYear: 2020,
      },
    },
  ]);

  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [borrowerName, setBorrowerName] = useState('');

  const toggleModal = (book) => {
    setSelectedBook(book);
    setBorrowerName('');
    setModalVisible(!isModalVisible);
  };

  const handleBorrow = () => {
    ///implementar api se quiser
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Acervo da Biblioteca</Text>
      <ScrollView style={styles.booksContainer}>
        {books.map((book) => (
          <TouchableOpacity key={book.id} onPress={() => toggleModal(book)}>
            <View style={styles.bookContainer}>
              <Image source={{ uri: book.coverImage }} style={styles.bookImage} />
              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle}>{book.livro}</Text>
                <Text style={styles.bookAuthor}>Autor: {book.autor}</Text>
              </View>
              <Text style={book.available ? styles.available : styles.notAvailable}>
                {book.available ? 'Disponível' : 'Indisponível'}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => toggleModal()}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Detalhes do Livro</Text>
            <Image source={{ uri: selectedBook?.coverImage }} style={styles.modalImage} />
            <Text style={styles.modalBookTitle}>{selectedBook?.title}</Text>
            <Text style={styles.modalBookAuthor}>Autor: {selectedBook?.author}</Text>
            <Text style={styles.modalSynopsis}>{selectedBook?.synopsis}</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailText}>Idioma: {selectedBook?.details.language}</Text>
              <Text style={styles.detailText}>Páginas: {selectedBook?.details.pages}</Text>
              <Text style={styles.detailText}>Gênero: {selectedBook?.details.ca}</Text>
              <Text style={styles.detailText}>Ano de Publicação: {selectedBook?.details.publicationYear}</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Seu nome"
              value={borrowerName}
              onChangeText={(text) => setBorrowerName(text)}
            />
            <TouchableOpacity style={styles.borrowButton} onPress={handleBorrow}>
              <Text style={styles.borrowButtonText}>Emprestar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => toggleModal()}>
              <Text style={styles.closeButtonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
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

export default LibraryCatalog;
