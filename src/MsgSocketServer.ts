import { Server as HTTPServer } from "http";
import { Server as WSServer } from 'socket.io';
import { DMSession } from "./types/DMSession";

let io: WSServer;
let sessions: DMSession[];

/**
 * Initializes the DM socket server.
 */
async function init(server: HTTPServer) {
    io = new WSServer(server);
    console.log('Web socket server started.');

    io.use((socket, next) => {
        
    });

    io.on('connect', (socket) => {
        // Check for session token

    });
}

export const MsgSocketServer = {
    init
}