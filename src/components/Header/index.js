import React from 'react-native'
import { View, Text, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.iconContainer}>
                    <AntDesign name='bars' size={30} color={'white'}/>
                </View>
                <Text style={styles.title}> Biblioteca Pública Paraná </Text>
                <View style={styles.logoContainer}>
                    <Image source={{uri: 'https://media.glassdoor.com/sql/2493747/biblioteca-p%C3%BAblica-do-paran%C3%A1-squarelogo-1555303572425.png' }} 
                    style={styles.logo}  />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'orange'
      },
      searchContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingTop:30,
      },
      searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        backgroundColor:'#fff'
      },
      searchButton: {
        backgroundColor: '#35AAFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        justifyContent: 'center',
      },
      searchButtonText: {
        color: 'white',
      },
      historyContainer: {
        flex: 1,
      },
      historyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'white',
        alignSelf:'center'
        
      },
      historyItem: {
        marginBottom: 5,
        color:'#fff',
        fontSize:14,
      },
      clearButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      clearButtonText: {
        marginLeft: 5,
        color: 'red',
      },
      resultsContainer: {
        flex: 1,
        marginTop: 20,
        
      },
      bookItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        padding: 10,
        backgroundColor:'#fff'
      },
      bookImage: {
        width: 50,
        height: 70,
        marginRight: 10,
      },
      bookDetails: {
        flex: 1,
      },
      bookTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      bookAuthor: {
        color: 'gray',
      },
})