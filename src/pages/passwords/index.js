import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Passwords() {
    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass");
            console.log(passwords);
        }

        loadPasswords();
    }, []); // Remova a referência à propriedade 'focused'

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.hearder}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    hearder: {
        backgroundColor: "#392de9",
        paddingTop: 50,
        paddingBottom: 20,
        paddingLeft: 22,
        paddingRight: 14,
    },
    title: {
        fontSize: 25,
        color: "white",
        fontWeight: 'bold'
    }
});
