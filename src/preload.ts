import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('api', {
    ping: () => {
        return 'pong';
    }
});