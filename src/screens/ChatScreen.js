import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { getLLMResponse } from '../services/llmService';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const llmResponse = await getLLMResponse(input);
      const botMessage = { sender: 'bot', text: llmResponse };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={{ alignSelf: item.sender === 'user' ? 'flex-end' : 'flex-start' }}>
            {item.text}
          </Text>
        )}
      />
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Type your message..."
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default ChatScreen;
