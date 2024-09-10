import { defineStore } from "pinia";

export const useLightbox = defineStore("lightbox-store", {
    state: () => ({
            isShown: false,
            index: 0,
            exterier: { name: 'exterier', length: 14 },
            interier: { name: 'interier', length: 15 },
            drevostavby: { name: 'drevostavby', length: 14 },
            projektovanie: { name: 'projektovanie', length: 14 },
            currentSluzba: { name: 'exterier', length: 14 },
        }),
    actions: {
        openLightbox(n) {
            this.currentSluzba = n;
            this.index = 0;
            this.isShown = true;
        },
        closeLightbox() {
            this.isShown = false;  
        }
    }
});