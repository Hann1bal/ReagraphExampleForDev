import * as signalR from "@microsoft/signalr";
import INode from "./INode";

export default class SignalRConnector {
    state: boolean = false;

    hubConnection: signalR.HubConnection;

    constructor() {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl("http://95.165.172.75:5031/Graph")
            .configureLogging(signalR.LogLevel.Debug)
            .withAutomaticReconnect()
            .build();
        // Starts the SignalR connection
        this.startConnection();
    }
    connect() {
        this.startConnection();
    }
    disconect() {
        this.hubConnection.stop();
    }
    setState(state: boolean) {
        this.state = state;
    }
    startConnection() {
        this.hubConnection.start().then(() => {
            // Once started, invokes the sendConnectionId in our ChatHub inside our ASP.NET Core application.
            if (this.hubConnection.connectionId) {
                this.hubConnection.invoke("handshake");
            }
        });
    }
    off(method: string, props: any) {
        this.hubConnection.off(method)

    }
     on(method: string, props: any) {
        this.hubConnection.on(method, (e:MessageEvent<INode[]>)=>{
            props(e)
        })
    }

}