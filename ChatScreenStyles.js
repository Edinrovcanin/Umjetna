import { StyleSheet } from 'react-native';

export const chatStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkgreen', // Tamno zelena boja
    },
    messageContainer: {
        padding: 20,
        flexGrow: 1,
    },
    message: {
        fontSize: 16,
        marginBottom: 10,
        padding: 10,
        borderRadius: 6,
    },
    userMessage: {
        backgroundColor: 'lightblue', // Svijetlo plava boja
        alignSelf: 'flex-end',
    },
    gptMessage: {
        backgroundColor: 'green', // Zelena boja
        alignSelf: 'flex-start',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'darkgreen', // Tamno zelena boja
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: 'green', // Zelena boja
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 6,
    },
    sendButtonText: {
        color: 'white',
        fontSize: 16,
    },
});
