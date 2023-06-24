import { Text, View } from "react-native";
import styles from "./styles";

export default function MovieDetailsPage({ route }){

const {filme} = route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>Sinopse completa:  {filme.sinopse}</Text>
        </View>
    );
}