import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, ImageBackground, StyleSheet,Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from '../../src/consts/color'
const OnBoardScreen= ({navigation}) => {
    return <View style ={{flex: 1}}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
        <ImageBackground 
            style= {{flex: 1}}
            source={require('../../src/assets/wallpaper.webp')}>
                <View style={style.details}>
                    <Text style={{color: COLORS.white, fontSize: 40, fontWeight: 'bold'}}>Монголд тавтай морилно уу</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('HomeScreen')}>
                        <View style={style.btn}>
                        <Text style={{fontWeight: 'bold'}}>Эхлэх</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
    </View>
}

const style = StyleSheet.create({
   details: {
    height:'60%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
   },
   btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center" ,
   },
});
export default OnBoardScreen;