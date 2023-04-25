const {createApp} = Vue;

createApp ({

    data() {
        return {
            mailList: [],
        }
    },

    methods: {
        getMailList() {
            // per comodità viene inizializzata la variabile 'url' con il link
            const url = 'https://flynn.boolean.careers/exercises/api/random/mail';
            // all'interno di un ciclo *for* viene richiamata l'API 
            for (let index = 0; index < 10; index++) {
                axios.get(url).then((result) => {
                    // il tutto viene pushato nell'array mailList,
                    // che di partenza è vuoto
                    this.mailList.push(result.data.response);
                })
            }
                // log inserito per verificare la corretta lunghezza dell'array 
                console.warn('array dopo generate -->', this.mailList);
        },

        resetMailList() {
            // questa funzioncina "svuota" l'array
            this.mailList = [];

                // log inserito per verificare se effettivamente l'array
                // viene correttamente "svuotato" 
                console.error('array dopo reset -->', this.mailList);
        }
    },

    mounted() {

        // rimosso il richiamo alla funzione nel mounted affinchè questa
        // possa "partire" al click sul *button*

        // this.getMailList()
    }


}).mount('#app');