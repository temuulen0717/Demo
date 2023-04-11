import React, {useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {StyleSheet, Text, View} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'


export default function Plan () {

    const [data, setData] = useState([])
    const getPosts = () => {
        fetch("https://c234-112-72-2-34.ngrok.io/posts")
        .then((res) => res.json())
        .then(resJson => {
            console.log('data' ,resJson)
            setData(resJson);
        }).catch(e => {console.log(e)})
    } 

    useEffect(() => {
        getPosts();
    }, [])

    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center'
    }
})