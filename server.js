// server.js

const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Dynamic Custom Topic Quiz Challenge Server\n');
});

const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

// Handle player joining
io.on('connection', (socket) => {
    socket.on('joinGameRoom', (data) => {
        socket.join(data.room);
        io.to(data.room).emit('playerJoined', { player: socket.id });
    });

    socket.on('leaveGameRoom', (data) => {
        socket.leave(data.room);
    });
});

server.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
