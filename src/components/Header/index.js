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
                <Text style={styles.title}> Biblioteca</Text>
                <View style={styles.logoContainer}>
                    <Image source={{uri: 'https://images.vexels.com/media/users/3/229082/isolated/preview/6fabc24c3830d75486725cc6d786dfbb-logotipo-dos-circulos-do-livro.png' }} 
                    style={styles.logo}  />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#22D7F0',
        paddingBottom:10,
        paddingTop:40,
    },
    header:{
        backgroundColor:'#22D7F0',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:10,
        marginStart:10,
        marginEnd:10,
        justifyContent:'space-between',
        paddingBottom:10,
        paddingTop:10,
    },
    iconContainer:{
        flexDirection:'row',
        marginEnd:10,
        justifyContent:'flex-start',
        width: 30,
    },
    title:{
        flex:1,
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        textAlign:'center'
    },
    logoContainer:{
        width:50,
        height:50,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    logo:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        marginStart:10,
    }

    

})