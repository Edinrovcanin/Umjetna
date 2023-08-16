import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import openai from 'openai'; // Učitavanje openai paketa
import { chatStyles } from './ChatScreenStyles'; // Učitavanje stilova

openai.apiKey = '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'; // Zamijenite sa svojim API ključem

const ChatScreen = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleSendMessage = async () => {
        if (inputText.trim() === '') return;

        // Dodajemo korisničku poruku u chat
        setMessages([...messages, { text: inputText, type: 'user' }]);
        setInputText('');

        try {
            // Slanje upita OpenAI API-ju
            const response = await openai.Completions.create({
                engine: 'davinci-codex',
                prompt: inputText,
                max_tokens: 50,
            });

            const gptResponse = response.choices[0].text;

            // Dodajemo odgovor od GPT-3 u chat
            setMessages([...messages, { text: gptResponse, type: 'gpt' }]);
        } catch (error) {
            console.error('Greška prilikom komunikacije s OpenAI API-jem:', error);
        }
    };

    return (
        <View style={chatStyles.container}>
            <ScrollView contentContainerStyle={chatStyles.messageContainer}>
                {messages.map((message, index) => (
                    <Text
                        key={index}
                        style={[
                            chatStyles.message,
                            message.type === 'user' ? chatStyles.userMessage : chatStyles.gptMessage,
                        ]}
                    >
                        {message.text}
                    </Text>
                ))}
            </ScrollView>
            <View style={chatStyles.inputContainer}>
                <TextInput
                    style={chatStyles.input}
                    placeholder="Unesite pitanje..."
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity style={chatStyles.sendButton} onPress={handleSendMessage}>
                    <Text style={chatStyles.sendButtonText}>Pošalji</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChatScreen;
