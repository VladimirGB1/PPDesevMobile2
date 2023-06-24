import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import CardFilme from '../../components/CardFilme';

export default function MoviesPage(){

    let [filmes, setFilmes] = useState([]);

    const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

    useEffect(function(){
        fetch(baseURL)
            .then(data => data.json())
            .then(objeto => {
                console.log(objeto);
                setFilmes(objeto.data);
            })
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {filmes.length > 0 ? <ScrollView> {filmes.map(filme => <CardFilme key={filme.id} filme={filme.attributes}/>)} </ScrollView>: <ActivityIndicator size={'large'}/>}
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#633219',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });