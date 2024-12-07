const WebSocket = require('ws');

const socket = new WebSocket('ws://192.168.29.72:3000');

socket.on('open', () => {
    console.log('Connected to WebSocket server');
    socket.send('Hello, server!');
});

socket.on('message', (data) => {
    console.log('Received message from server:', data);
});

socket.on('error', (error) => {
    console.error('WebSocket Error:', error);
});

socket.on('close', () => {
    console.log('WebSocket connection closed');
});
