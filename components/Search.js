import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Icon  from 'react-native-vector-icons/Ionicons'

export default class Search extends Component {
  render() {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.search}>
            <Icon name="search" size={20} />
        </View>
        <Icon name="qr-code-outline" size={30} color="#f8a1aa" style={{marginLeft: 30}} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
    searchContainer: {
      marginTop:40,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'space-between',
      width: '100%',
    },
    search: {
      width: '80%',
      height:40,
      borderRadius:15,
      backgroundColor:'white',
      display: 'flex',
      alignContent: 'center',
      padding:10,
    },
    circleIcon: {
      textAlign: 'center',
      marginTop:10,
    },
    circleImage: {
      width:50,
      height:50,
      borderRadius:50,
      marginLeft:60,
    },
    middleContainer: {
    },
    textCenter:{
      color: 'gray',
      fontWeight: 'normal',
    },
  })