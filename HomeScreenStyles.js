import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    textContainer: {
        marginBottom: 40,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
