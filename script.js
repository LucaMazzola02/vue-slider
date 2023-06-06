/*
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/
const { createApp } = Vue;

createApp({
    data() {
        return {
            images: [
                'img/01.webp',
                'img/02.webp',
                'img/03.webp',
                'img/04.webp',
                'img/05.webp',
            ],
            activeIndex : 0,
            autoplay: false,
        }
    },
    methods: {
        previousSlide(){
            if ( this.activeIndex === 0){
                this.activeIndex = this.images.length - 1;
            } else {
                this.activeIndex--;
            }
        },
        nextSlide(){
            if ( this.activeIndex === this.images.length - 1){
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },

        goToSlide(slideIndex){
            if (slideIndex >= this.images.length || slideIndex < 0){
                return 0;
            }

            this.activeIndex = slideIndex;
        },

        startAutoplay(){
            if (!this.autoplay){
                this.autoplay = setInterval(this.nextSlide, 3000);
                console.log('autoplay started');
            } else {
                console.warn('Autoplay is already active');
            }
        },

        stopAutoplay(){
            if (!this.autoplay ){
                console.warn('There is no autoplay to stop');
            } else {
                console.log('autoplay cleared');
                clearInterval(this.autoplay);
                this.autoplay = false;
            }
        }
    },

    mounted(){

        this.startAutoplay();

    },

}).mount('#app');












const images = [
    {
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

