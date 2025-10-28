// plugins/axios.js
import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
    const instance = axios.create({
    baseURL: 'https://api.everestlc.uz/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
    });

    // You can add interceptors here
    instance.interceptors.request.use((config) => {
    // Add auth token, etc.
    return config;
    });

    nuxtApp.provide('axios', instance);
});