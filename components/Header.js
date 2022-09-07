import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Ionicons'

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.circleContainer}>
        <Icon style={styles.circleIcon} name='grid' size={20} color="#f8a1aa" />
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.textCenter}>Hello Zaskia</Text>
        <Text style={styles.textCenter1}>Jakarta, NIA</Text>
      </View>
      <Image style={styles.circleImage} source={require('../img/avatar.jpg')} />
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    marginTop:40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    width: '100%',
  },
  circleContainer: {
    marginRight: 80,
    backgroundColor:'white',
    borderRadius:100,
    height:40,
    width:40,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  circleIcon: {
    textAlign: 'center',
    marginTop:10,
  },
  circleImage: {
    width:40,
    height:40,
    borderRadius:50,
    marginLeft:80,
  },
  middleContainer: {
  },
  textCenter:{
    color: 'gray',
    fontWeight: 'normal',
  },
})