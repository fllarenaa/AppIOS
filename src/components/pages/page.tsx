import { useState } from "react";
import {View, Text, StyleSheet, Alert} from "react-native"
import { Button } from "@/src/components/button";
import { Input } from "@/src/components/input";
import { router } from "expo-router";

export default function Index() {
    const [name, setName] = useState<string>()

    function HandledNext () {
         Alert.alert(`Bem-Vindo, ${name}`)
         setTimeout(() => {
            router.navigate("/dashboard")
         }, 3000);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello,{name}</Text>
           
            <Input placeholder="Usuário" onChangeText={(text) => setName(text)}/>
            <Input className="Password" passwordRules={"s"} maxLength={8} placeholder="Senha" textContentType="password"/>
            <Button title="Clique Aqui." onPress={HandledNext}/>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
        flex:1,
        padding: 32,
        justifyContent:"center",
    },
    title: {
        color: "#111111",
        fontSize: 25,
    },
})
