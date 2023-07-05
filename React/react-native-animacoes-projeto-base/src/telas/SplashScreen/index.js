import React from "react";
import {View} from "react-native";
import styles from "./styles";
import LottieView from 'lottie-react-native';
import Doctor from '../../assets/doctor.json';

export default function SplashScreen({navigation}) {

    function animacaoFinalizada() {
        // reset retira primeira tela splash da pilha
        navigation.reset({
            index:0,
            routes:[{name:'Onboarding'}]
        })
    }


    return (
        <View style={styles.container}>
            <LottieView source={Doctor}
                        loop={false}
                        autoPlay={true}
                        onAnimationFinish={animacaoFinalizada}
            />
        </View>

    )
}
