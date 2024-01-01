import {Text, StyleSheet, 
    Pressable, Image, View} from 'react-native'

//botao de Menu no Topo Personalizado
const styles = StyleSheet.create({
pressable: {
    position: "absolute", 
    top: 20, 
    left: 0,
    width: 65,
    height: 70
},
viewBtn:{
    justifyContent :"flex-end",
    height: "100%", 
    width:"100%",
    backgroundColor: "#000000", 
    borderBottomRightRadius: 100, 
    borderTopRightRadius: 100,
    shadowColor: "#000000",
    shadowOffset: {
          width: 0,
          height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 5,
    elevation: 20,
    justifyContent: 'flex-start',
    paddingLeft: 8
},
image:{
    width: "80%",
    height: "75%",
    resizeMode:"contain"
},
text: {
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: '#fff',
  textAlign: 'center'
},
centerView:{
    flexDirection: "row",
    justifyContent:'flex-start',
    alignItems:'center'
},
});

export default props => {
return(
  <Pressable  style={[styles.centerView,styles.pressable]} onPress={props.onPress}>
    <View style={[styles.centerView,styles.viewBtn]}>
    <Image 
    style={styles.image}
    source={props.source()}></Image>
    </View>
  </Pressable>

  );
}