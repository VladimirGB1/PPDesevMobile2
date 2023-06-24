import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";

import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function ForgotPasswordPage() {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/Logo.png')} style={styles.imgLogo}/>
            <TextInput style={styles.input} placeholder="Email" />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Recuperar</Text>
            </TouchableOpacity>
            <Link style={styles.links} to={{screen: "LoginPage"}}>Voltar para o login</Link>
        </View>
    );
  }