import React from "react";
import {View, Text, Button, StyleSheet} from "react-native";

function DetailsScreen({navigation, route}) {
    const {itemId, otherParam} = route.params || {};
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes</Text>
            {itemId && <Text style={styles.text}>Item ID: {itemId}</Text>}
            {otherParam && <Text style={styles.text}>Outro Parâmetro: {otherParam}</Text>}
            <Button
                title='Voltar para início'
                onPress={() => navigation.goBack()}//Volta para a tela anterior
            />
            <View style={{marginTop: 20}}>
                <Button
                    title='Voltar para a home (direto)'
                    onPress={() => navigation.navigate('Home')}//Volta para a home
                />
            </View>
            <View style={{marginTop: 20}}>
                <Button
                    title='Ir para detalhes novamente (com params)'
                    onPress={() => 
                        navigation.push('Detalhes', {
                            itemId: Math.floor(Math.random()* 100),
                            otherParam: 'Novo Detalhe',
                        })
                    }//Adiciona uma nova tela de detalhes à pilha
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  paramText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
});

export default DetailsScreen;