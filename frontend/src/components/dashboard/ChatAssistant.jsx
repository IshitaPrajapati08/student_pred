import React, { useState } from 'react';

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    { text: 'How can I improve my performance?', sender: 'user' },
    { text: 'Based on your data, focusing on "Computer Networks" and practicing more coding problems on platforms like LeetCode could help.', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Mock bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: 'That\'s a great question! Let me analyze your profile...', sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
      <h3 className="text-lg font-medium text-gray-700 mb-4">AI Chatbot Assistant</h3>
      <div className="flex-grow bg-gray-50 p-4 rounded-lg mb-4 overflow-y-auto h-64 border border-gray-200">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <p className={`p-3 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask a question..."
          className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Send</button>
      </div>
    </div>
  );
};

export default ChatAssistant;