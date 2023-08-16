import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { homeStyles } from './HomeScreenStyles'; // Učitavanje stilova

const HomeScreen = ({ navigation }) => {
    return (
        <View style={homeStyles.container}>
            <Text style={homeStyles.header}>Moc umjetne inteligencije u vasem dzepu!</Text>
            <View style={homeStyles.textContainer}>
                <Text style={homeStyles.text}>Pitaj bilo koje pitanje</Text>
                <Text style={homeStyles.text}>Powerd by HPT3.5</Text>
                <Text style={homeStyles.text}>Dostupno na svim jezicima</Text>
            </View>
            <TouchableOpacity
                style={homeStyles.button}
                onPress={() => navigation.navigate('Chat')}
            >
                <Text style={homeStyles.buttonText}>Zapocni razgovor!</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
