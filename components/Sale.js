import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function Sale() {
  return (
    <View style={styles.Container}>
      <View style={styles.imageContainer}>
        <Image source={require('../img/shopp.png')} style={styles.circleImage} />
      </View>  
      <View style={styles.textContainer}>
        <Text style={{fontWeight: 'bold',color: 'white',fontSize: 17,}}>Big Sale</Text>
        <Text style={{fontWeight: 'light',color: 'whitesmoke'}}>Get the trandy</Text>
        <Text style={{fontWeight: 'light',color: 'whitesmoke'}}>fashion at a discount  </Text>
        <Text style={{fontWeight: 'light',color: 'whitesmoke'}}>of up to 50%</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    Container: {
      marginTop:20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height:120,
      borderRadius:20,
      backgroundColor:'#f8a1aa',
      width: '100%',
    },
    imageContainer: {
        width: '50%',
        height: '100%',
    },
    textContainer: {
        marginLeft:10,
        width: '50%',
        height: '100%',
        display: 'flex',
        marginTop:40, 
        alignContent: 'center',
    },
    circleImage: {
        width:'100%',
        height:'100%',
    },
  })