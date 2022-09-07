import { View, Text,SafeAreaView,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header  from '../components/Header'
import Search from '../components/Search'
import Sale from '../components/Sale'
import Categories from '../components/Categories'
import Store from '../components/Store'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Header />
            <ScrollView horizontal={false} vertical={true} showsVerticalScrollIndicator={false}>
                <Search />
                <Sale />
                <Categories />
                <Store />
                <Store />
            </ScrollView>
            <NavBar />
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 20,
        height: 820,
        backgroundColor:'#fbfaff',
    },
})