import express from 'express';
import { Server } from 'socket.io';
const app = express();
const io = new Server();
app.use(express.json());
io.on('connection', socket => {
    app.use(request => socket.emit('request', request));
});
//# sourceMappingURL=index.js.map