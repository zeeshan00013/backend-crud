import React, { useState } from 'react'

export const Images = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const responses = {
    "hello": "Hello! How can I assist you?",
    "hi": "Hi there! How can I help you?",
    "how are you": "I'm just a chatbot, but thanks for asking!",
    "who are you": "I'm a chatbot designed to assist you. What do you need help with?",
    "your name": "my name is zeeshan"
    // Add more predefined responses as needed
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setMessages([...messages, { text: input, isUser: true }]);
    
    const response = responses[input.toLowerCase()] || "Sorry, I didn't understand that.";
    setMessages([...messages, { text: response, isUser: false }]);
    
    setInput('');
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  ) 
};
