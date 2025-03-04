import { useState } from "react";
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Link , router } from "expo-router";
import colors from '../constants/mainStyle';
import { Button } from "../components/button";
import { supabase } from "@/src/lib/supabase";

export default function Index() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState(false);


    async function handleSignIn() {
            setLoading(true);
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })

            if (!email || !password) {
                Alert.alert("Erro", "Por favor, preencha todos os campos.");
         return;
            }

            if (error) {
                Alert.alert('Error', error.message)
                setLoading(false);
                return;
            }
            Alert.alert(`Bem-Vindo, ${name}`);
            setTimeout(() => {
            }, 2000);
            setLoading(false);
            router.replace('/dashboard') //trocar por navigate para funcioanr o botão de voltar
        }

        // Alert.alert(`Bem-Vindo, ${name}`);
        // setTimeout(() => {
        //     router.navigate("/register");
        // }, 2000);


    // function handleNext() {
    //     if (!name || !password) {
    //         Alert.alert("Erro", "Por favor, preencha todos os campos.");
    //         return;
    //     }
    //     Alert.alert(`Bem-Vindo, ${name}`);
    //     setTimeout(() => {
    //         router.navigate("/register");
    //     }, 2000);
    // }

    return (
        <LinearGradient 
        colors={[
          'rgb(17, 33, 73)',
          'rgba(0, 0, 48, 1)',
          'rgb(3, 12, 47)',
          'rgb(22, 41, 83)',
        ]}
        start={[0.5, 0]}
        end={[1.5, 1]}
        style={styles.container} >
       
            <Text style={styles.header}>Be<Text style={{ color: colors.green }}>Wise</Text></Text>
            <View style={styles.main}>
                <Text style={styles.title}>Olá, {name}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    placeholderTextColor={colors.baige}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor={colors.baige}
                    value={password}
                    secureTextEntry
                    onChangeText={setPassword}
                />

                <Button title="Login" onPress={handleSignIn}/>
                    <Text style={styles.paragraph}>
                        Ainda não possui uma conta? <Link style={{color: colors.green,         textDecorationLine:"underline"}} href={"/register"}>Registre-se</Link>
                    </Text>
 
        </View></LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 32,
        fontWeight: "bold",
        color: colors.baige,
        marginBottom: 20,
    },
    main: {
        width: "85%",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    paragraph: {
        color: colors.baige,
        fontSize: 16,
        textAlign: "center",
        // textDecorationLine:"underline"
    },
    title: {
        color: colors.baige,
        fontSize: 24,
        marginBottom: 10,
    },
    input: {
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        color: colors.baige,
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
        fontSize: 16,

    },
    button: {
        width: "100%",
        backgroundColor: "#FFD700",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1e3c72",
    },
});
