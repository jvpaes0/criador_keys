import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image } from "react-native";
import * as clipboard from 'expo-clipboard'
import { useStorage } from '../../hooks/useStorage';

export function ModalPassword({ password, handleClose }) {
    const storage = useStorage();

    async function handleCopyPassword() {
        await clipboard.setStringAsync(password);
        await storage.saveItem("@pass", password);
        
        alert("Senha salva com sucesso!");
        handleClose();
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Aqui está sua Senha:</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.Text}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24
    },
    innerPassword: {
        backgroundColor: "#0e0e0e",
        width: '91%',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 20,
    },
    Text: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 25
    },
    buttonArea: {
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
    },
    buttonSave: {
        backgroundColor: "#00BFFF",
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 25
    },
    buttonSaveText: {
        fontSize: 22,
        color: "#fff",
        fontWeight: 'bold'
    }


})