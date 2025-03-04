import { StyleSheet } from "react-native";
import  colors  from "@/src/constants/mainStyle";

export const styles = StyleSheet.create ({
    button: {
        width:"100%" ,
        height: 52,
        backgroundColor: "#336559",
        // borderRadius:10,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        justifyContent:"center",
        alignItems:"center",
    },
    title: {
        fontSize:16,
        fontWeight:"bold",
        color:colors.baige,
    }
})