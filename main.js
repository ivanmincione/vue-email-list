// generare una lista di 10 indirizzi email e stamparle in pagina con vue.

var app = new Vue ({

    el: '#root',
    data: {
        email: false,
        arrayEmail: [],
        i: 0,
    },

    mounted() {
        const self = this;
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                self.email = risposta.data.response;
            });
    },

//end vue
});
