import {Dimensions, StyleSheet} from "react-native";


export default StyleSheet.create({
    conteiner: {
        height: 150,
        width: Dimensions.get("window").width, // pega largura max de qla dispositivos
        paddingLeft: 60
    },
    image:{
        height: '100%', width: 150,marginHorizontal:15
    }

});
