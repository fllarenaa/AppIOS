import { useState } from "react";
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";
import colors from '../constants/mainStyle';
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../components/button";
import { supabase } from "@/src/lib/supabase";



export default function Dashboard() {


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
            <Pressable style={styles.button} onPress={() => router.back()}>
                 <Ionicons name="arrow-back" size={24} style={{color: colors.baige}} />
            </Pressable>
            <Text style={styles.header}>Be<Text style={{ color: colors.green }}>Wise</Text></Text>
            <View style={styles.main}>
                <Text style={styles.title}>Dashboard Page</Text>
        
               

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
    title: {
        color: colors.baige,
        fontSize: 24,
        marginBottom: 10,
        fontWeight: "bold",
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
        backgroundColor: colors.green,
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },
});
