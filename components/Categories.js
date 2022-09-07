import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'

export default function Categories() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.text}>All</Text>
            </View>
            <View style={styles.item2}>
                <Text style={styles.text2}>Popular</Text>
            </View>
            <View style={styles.item2}>
                <Text style={styles.text2}>Recent</Text>
            </View>
            <View style={styles.item3}>
            <Text style={styles.text3}>Recommended</Text>
        </View>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      marginTop:20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height:30,
      width: '100%',
    },
    item: {
        height: '100%',
        backgroundColor:'#f8a1aa',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius:20,
    },
    item2: {
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius:20,
        marginLeft: 10,
        backgroundColor:'#e0e1e5',
        width: 80,
    },
    item3: {
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius:20,
        width: 120,
        backgroundColor:'#e0e1e5',
        marginLeft: 10,
    },
    text: {
        marginTop: 5,
        marginLeft: 10,
        width: 30,
        alignSelf: 'center',
    },
    text2: {
        marginTop: 5,
        alignSelf: 'center',
    },
    text3: {
        marginTop: 5,
        alignSelf: 'center',
    },
    textContainer: {
        marginLeft:10,
        width: '50%',
        height: '100%',
        display: 'flex',
        marginTop:40, 
        alignContent: 'center',
    },
  })