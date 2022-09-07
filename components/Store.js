import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons'

export default function Store() {
  return (
    <View style={styles.Container}>
        <View style={styles.row}>
            <View style={styles.imageContainer} >
                <Image source={require('../img/fash1.jpg')} style={styles.circleImage} />
            </View>
            <View style={styles.priceContainer} >
                <View style={styles.prices} >
                    <Text style={{fontWeight: 'bold'}}>Casual V-neck</Text>
                    <Text style={{color: 'gray'}}>$ 129.00</Text>
                </View>
                <View style={styles.circle} >
                    <Icon name='ios-heart-outline' color='white' size={20} style={{padding:2.5}} />
                </View>
            </View>
        </View>
        <View style={styles.row2}>
            <View style={styles.imageContainer} >
                <Image source={require('../img/fash2.jpg')} style={styles.circleImage} />
            </View>
            <View style={styles.priceContainer} >
                <View style={styles.prices} >
                    <Text style={{fontWeight: 'bold'}}>Nerd Dress</Text>
                    <Text style={{color: 'gray'}}>$ 120.00</Text>
                </View>
                <View style={styles.circle} >
                    <Icon name='ios-heart-outline' color='white' size={20} style={{padding:2.5}} />
                </View>
            </View>
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
      height:300,
      borderRadius:20,
      width: '100%',
    },
    row: {
        flexDirection: 'column',
        alignContent: 'center',
        height: '100%',
        width: '47.5%',
    },
    row2: {
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        height: '100%',
        width: '47.5%',
        marginLeft: '5%',
    },
    imageContainer: {
        width: '100%',
        height: '80%',
    },
    priceContainer: {
        padding: 10,
        flexDirection: 'row',
    },
    circleImage: {
        width:'100%',
        height:'100%',
        borderRadius: 40,
    },
    circle: {
        width:25,
        height:25,
        backgroundColor:'#f8a1aa',
        borderRadius: 25,
        marginLeft: 10,
        marginTop: 10,
    },
  })