import axios from "axios";
import { io, Socket } from "socket.io-client";
import VacationModel from "../Models/VacationModel";
import config from "../utils/Config";

class SocketService {

    private socket: Socket;

    public connect(): void {
        this.socket = io(config.url);

    }

    public disconnect(): void {
        this.socket.disconnect();
    }
    // the socket.on in FC routing 

}

    const socketService = new SocketService();

export default socketService;