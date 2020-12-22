import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#41b5af"
    },
    textInput: {
        width: "80%",
        height: 60,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,

    },
    button: {
        width: "80%",
        height: 60,
        backgroundColor: '#e04a4a',
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    disabledButton: {
        width: "80%",
        height: 60,
        backgroundColor: '#998181',
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 20,
        color: "#fff",
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})
