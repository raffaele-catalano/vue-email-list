const {createApp} = Vue;

createApp ({

    data() {
        return {
            mailList: [],
        }
    },

    methods: {
        getMailList() {

            const url = 'https://flynn.boolean.careers/exercises/api/random/mail';

            for (let index = 0; index < 10; index++) {
                axios.get(url).then((response) => {
                    this.mailList.push(response.data.response);
                })
            }
        }
    },

    mounted() {
        this.getMailList()
    }


}).mount('#app');