<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ipStore } from '../store/ip';
import axios from 'axios';
import { getData } from '../service/ipBasedData';

// DATA
const store = ipStore()
let data = ref("NO DATA, CLICK THE BUTTON TO EXTRACT");

// HOOKS
onMounted(async () => {
    const ipinfoResponse = await axios.get('https://api.ipify.org/?format=json');
    if (ipinfoResponse.data && ipinfoResponse.data.ip) {
        store.setMyIp(ipinfoResponse.data.ip);
    }
    else store.setMyIp("UNKNOWN")
})

// METHODS
async function sendRequest(ip: string) {
    try {
        const extractedData = await getData(ip);
        data.value = `DATA EXTRACTED: ${extractedData}`;
    }
    catch (err) {
        data.value = "ERROR WHILE EXTRACTING DATA, CHECK CODE AND RETRY!"
    }
}
</script>

<template>
    <div class="container boxing">
        <div class="card blue">
            <h3>Your IP is {{ store.getMYIp }}</h3>
        </div>

        <div class="card small">
            <h3 class="left">EXTRACTED DATA:</h3>
            <div class="panel">
                <p>{{ data }}</p>
            </div>
            <div @click="sendRequest(store.getMYIp)" class="button blue">EXTRACT</div>
        </div>
    </div>
</template>

<style scoped>
div.container {
    background-color: white;
    z-index: 2;
    min-height: 50vh;
}

.card {
    position: relative;
    border-radius: 5px;
    margin: 2rem;
}
.card > h3 {
    margin: auto;
    padding: 1rem;
    font-size: 1rem;
}

.blue {
    background-color: #e5ecf8;
}

h3.left {
    text-align: left;
}
.card.small {
    width: 40vw;
    margin: auto;
}
.panel {
    border-radius: 2px;
    border: 2px solid #101010;
    min-height: 10vh;
}

.panel > p {
    word-wrap: normal;
    color: #347194;
    font-size: 0.8rem;
}

.button {
    font-size: clamp(0.6rem, 1vw, 1vw);
    margin: 0.5rem 0;
    padding: 1rem;
    position: absolute;
    right: 0;
    transition: 300ms;
}
.button:hover {
    cursor: pointer;
    background-color: #347194;
    color: #e5ecf8;
}
</style>
