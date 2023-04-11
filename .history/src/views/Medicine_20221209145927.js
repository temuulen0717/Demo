import COLORS  from "../consts/color"
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { setStatusBarStyle } from "expo-status-bar";


const Medicine = ({navigation}) => {
    return(
       <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
       <ImageBackground style={style.imgDetail} source={{uri:'https://imgs.search.brave.com/PGuUxHRZ2955mQyTmBx2TYrzqSMMfGwJSI9vjlPZK_k/rs:fit:1269:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/ckMxS3RQNHlJTlFx/bnlqYXc3b2ZRSGFD/eCZwaWQ9QXBp'}}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
        </ImageBackground>
        <View>
            <Text style={style.phone}>Утасны жагсаалт</Text>
        </View>
       <View style={style.container}> 
        
        <View style = {style.number}  >
            <Button color={COLORS.grey} title="Яаралтай утасны жагсаалт" ></Button>
        </View>
        <View style={style.number}>
          <Button color={COLORS.grey} title = "Аймгийн эрүүл мэндийн байгууллагын утасны дугаар"></Button>
        </View>
        <View style={style.number}>
          <Button onPress={() => navigation.navigate("MedNum")} color={COLORS.grey} title ="Онцгой байдлын газрын утасны дугаар" ></Button>
        </View>
        </View>
       </SafeAreaView>

    )
}
export default Medicine

const style = StyleSheet.create({
    header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imgDetail:{
    position:'absolute',
    height: 200,
    width:'100%'
  },
  phone:{
    color:'#FFFFFF',
    top: 220,
    backgroundColor:'#000000',
    width:130,
    height:30,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    fontsize:20,
    fontWeight:'bold',
    marginHorizontal: 20,
    marginVertical: 20,
    textAlign:'center',
    padding: 6,
  },
  container: {
    flex:1,
    justifyContent:'center',
    
  },
  number:{
    margin:20,
    borderRadius:20,
    elevation:12,
  }
})