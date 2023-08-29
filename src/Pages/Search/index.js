import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Search() {
    const [ searchText, setSearchText ] = useState(''); //usando useState para criar um estado e armazenar o texto da pesquisa,ainda usando useState, atualiza o valor de searchText
    const [ searchHistory, setSearchHistory ] = useState([]) //criando um estado que guarda o texto digitado, o set.... é oque permite atualizar o valor do primeiro elemento
    const [ searchResults, setSearchResults ] = useState('');// outro estado para armazenar os resusltados da pesquisa.       
    const handleSearch = () => {
        if (searchText.trim() !=='' ) {
            setSearchResults([
                ...searchResults,
                {
                    title: searchText,
                    imageUrl: 'https://example.com/book-image.jpg', //nao esqucer url
                    author : ' Autor Desconecido' 
                },
                {
                    //adicionar mais caso quiser, no title o searchText
                    //que faz o nome do livro ser oque pesquisou.
                    //nao esquecer de mudar na Views 'resultsContainer'
                    //e no title.
                },
            ]);
            setSearchHistory(prevHistory => [searchText, ...prevHistory]);
            setSearchText('');
        }
    }

    const clearHistory = () => {
        setSearchHistory([]);//limpa histórico e os resultados
        setSearchResults([])
    };

    return(
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput 
                style={styles.searchInput}
                placeholder="Digite o nome do livro..."
                value={searchText} //const searchText (nao esquecer)
                onChangeText={setSearchText} // segungo elemento da const
                />
                <TouchableOpacity style={styles.searchButton} 
                onPress={handleSearch}>
                    <Text style={styles.searchButtonText}> Pesquisar </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.historyContainer}> 
                <Text style={styles.historyTitle}> Histórico de Pesquisa </Text>

                <FlatList  //flatlist do history junto com o clear history e results
                data={searchHistory}
                renderItem= { ({item}) => <Text style={styles.historyItem}>{item}</Text>}
                keyExtractor = {(item, index) => index.toString()}                
                />
                {searchHistory.length > 0 && (
                    <TouchableOpacity style={styles.clearButton}
                    onPress={clearHistory}>
              <         Ionicons name="trash-outline" size={24} color="red" />
                         <Text style={styles.clearButtonText}>Limpar Histórico</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.resultsContainer}>
                <FlatList
                data={searchResults}
                renderItem={({ item }) => (
            <View style={styles.bookItem}>
              <Image source={{ uri: item.imageUrl }} style={styles.bookImage} />
              <View style={styles.bookDetails}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookAuthor}>{item.author}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{backgroundColor:'#fff'}
    
})