import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";

import styles from "./styles";
import { Link } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function LoginPage(){

    const { signIn } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/Logo.png')} style={styles.imgLogo}/>
            <TextInput style={styles.input} placeholder="Nome do usuário"/>
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha"/>
            <TouchableOpacity style={styles.button} onPress={() => signIn()}>
                <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.view}>
                <Text style={styles.txt}>Novo no MOVIƎ? <Link style={styles.links} to={{screen: "RegisterPage"}}>Crie uma conta</Link></Text>
                <Link style={styles.links} to={{screen: "ForgotPasswordPage"}}>Esqueceu a senha?</Link>
            </View>
        </View>
    );
}