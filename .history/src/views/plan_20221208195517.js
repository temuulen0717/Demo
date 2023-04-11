import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {StyleSheet, Text, View} from 'react-native'
export default function Plan () {
    const getPosts = () => {
        fetch("https://c234-112-72-2-34.ngrok.io/posts")
        .then((res) => res.json())
        .then(resJson => {
            console.log(resJson)
        }).catch(e => {console.log(e)})
    } 

    useEffect(() => {
        getPosts();
    }, [])

    return
}