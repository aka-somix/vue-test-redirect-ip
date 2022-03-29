import { defineStore } from 'pinia'

export const ipStore = defineStore('ip', {

    state: () => ({
        ip: "UNKNOWN",
    }),

    getters: {
        getMYIp(): string {
            return this.ip;
        }
    },
    actions: {
        setMyIp(ip: string) {
            this.ip = ip;
        },
    }
})
