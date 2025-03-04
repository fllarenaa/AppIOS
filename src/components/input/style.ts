import { StyleSheet } from "react-native";
import  colors  from "@/src/constants/mainStyle";

export const styles = StyleSheet.create({
    input: {
        width: "100%",
        height:52,
        borderWidth: 2,
        color: colors.baige,
        borderRadius: 10,
        borderColor:"linear-gradient(90deg,rgb(32, 66, 153),rgb(12, 25, 58))",
        padding:12,
        fontSize:16,
    }
})