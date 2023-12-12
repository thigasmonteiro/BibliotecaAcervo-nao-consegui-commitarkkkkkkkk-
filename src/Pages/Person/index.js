import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet } from 'react-native';

const Profile = () => {
  const user = {
    name: 'Thiago Monteiro',
    location: 'Araquari',
    
    books: [
      {
        id: 1,
        title: 'Meu Pequeno Príncipe',
        author: 'John Maier',
        year: 2020,
        publisher: 'Editora ABC',
        image: 'https://images.tcdn.com.br/img/img_prod/1086289/livro_o_pequeno_principe_capa_verde_autor_antoine_de_saint_exupery_1041_1_98cd25ab312f025c69366e161dd3630f.png',
      },
      {
        id: 2,
        title: 'Senhor dos Anéis',
        author: 'Arnold James',
        year: 2015,
        publisher: 'Editora XYZ',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCdFoBRR_eBBrb-DT90EUhV1n76og9f-SEw&usqp=CAU',
        progress: 75,
        rating: 5,
      },
    ],
    coverPhoto: 'https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg',
    profileImage: 'https://thumbs.dreamstime.com/b/circular-monocrom%C3%A1tico-%C3%ADcone-do-branco-da-silhueta-homem-perfil-isolado-no-112109811.jpg',
  };

  return (
    <ScrollView style={styles.container}>
      {/* Capa de Fundo */}
      <ImageBackground
        source={{ uri: user.coverPhoto }}
        style={styles.coverPhoto}
      >
        {/* Conteúdo da capa de fundo aqui */}
      </ImageBackground>

      {/* Imagem de Perfil (sobreposta à capa) */}
      <Image
        source={{ uri: user.profileImage }}
        style={styles.profileImage}
      />

      <View style={styles.profileInfo}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.location}>{user.location}</Text>

        {/* Informações do perfil */}
        <View style={styles.profileStats}>
          <Text>{user.friends} MEUS </Text>
          <Text>{user.photos} LIVROS</Text>
        </View>
      </View>

      {/* Lista de Livros Lidos */}
      <View style={styles.booksList}>
        {user.books.map((book) => (
          <View style={styles.bookContainer} key={book.id}>
            <Image source={{ uri: book.image }} style={styles.bookImage} />
            <View style={styles.bookText}>
              <Text style={styles.bookTitle}>{book.title}</Text>
              <Text style={styles.bookAuthor}>{book.author}</Text>
              <Text style={styles.bookInfo}>Ano: {book.year}</Text>
              <Text style={styles.bookInfo}>Editora: {book.publisher}</Text>
            </View>
            {/* Adicione a barra de progresso e avaliação em estrelas aqui */}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2296F0',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    top: 150,
    left: '50%',
    marginLeft: -50,
  },
  profileInfo: {
    alignItems: 'center',
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    color: 'white',
  },
  location: {
    fontSize: 16,
    color: 'white',
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  booksList: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  bookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
  },
  bookImage: {
    width: 75,
    height: 100,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  bookText: {
    flex: 1,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 14,
    color: 'gray',
  },
  bookInfo: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Profile;
