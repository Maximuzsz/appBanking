import { Feather } from '@expo/vector-icons';
import React from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name}){
    return(
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.userName}>{name}</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.bottonUser}>
                    <Feather name="user" size={27} color='#FFF'/>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd:16,
        paddingBottom: 44,
    },
    content:{
        flex:1,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    userName:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'
    },
    bottonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(2555,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/2,
    }
})
