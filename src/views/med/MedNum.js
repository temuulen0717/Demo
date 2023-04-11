import {Text, SafeAreaView, View, StyleSheet} from 'react-native'
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/MaterialIcons";
import { number3 } from '../../consts/data';

const MedNum = ({navigation}) => {

renderNumber = ({item}) => {
    return(
        <TouchableHighlight>
            <View>
                <Text>{item.name}</Text>
                <Text>{item.number}</Text>
            </View>
        </TouchableHighlight>
    )
}
    return(
    <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF"}}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={"#000000"}
            onPress={navigation.goBack}
          />
          <Text style={style.head}>Яаралтай түргэн тусламж</Text>
         </View> 
         <View>
            <FlatList data={number3}
            renderItem = {this.renderNumber}
            keyExtractor={item => item.id}/>
         </View>
    </SafeAreaView>

    )
}
export default MedNum;

const style = StyleSheet.create({
    header: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor:"#FFFFFF",
    borderColor:"#000000",
    elevation:13,
    height:40,
    borderRadius:13,
    alignItems:'center'
    },
    head:{
        marginRight:100,
        fontWeight:'bold',
    }
})