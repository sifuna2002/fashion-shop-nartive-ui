import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'

export default function NavBar() {
  return (
    <View style={styles.container}>
        <Icon name="home" size={30} color="#f8a1aa" style={{marginRight: 40,marginLeft: 20}} />
        <Icon name="newspaper-variant-outline" size={30} color="gray" style={{marginRight: 40}} />
        <Icon name="cart-outline" size={30} color="gray" style={{marginRight: 40}} />
        <Icon name="account-outline" size={30} color="gray" />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        padding: 10,
        marginTop: 20,
    }
})