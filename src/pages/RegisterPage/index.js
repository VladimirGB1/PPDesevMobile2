import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";

import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function RegisterPage() {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/Logo.png')} style={styles.imgLogo}/>

            <TextInput style={styles.input} placeholder="Nome do usuário" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>
            <TextInput style={styles.input} placeholder="Confirmar senha" secureTextEntry={true}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Cadastrar-se</Text>
            </TouchableOpacity>
                <Link style={styles.links} to={{screen: "LoginPage"}}>Já possui conta?</Link>
        </View>
    );
  }