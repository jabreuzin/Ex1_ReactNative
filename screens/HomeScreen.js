import React from "react";
import {View, StyleSheet, Button, Text} from "react-native";

function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Página Inicial</Text>
            <Button 
                title="Ir para detalhes"
                onPress={() => navigation.navigate('Detalhes')}//Navega para "Detalhes"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f8'
    },
    text: {
        color: 'blue',
        fontSize: '30',
        fontWeight: 'bold',
        marginBottom: '20'
    }
});

export default HomeScreen;