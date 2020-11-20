// generare una lista di 10 indirizzi email e stamparle in pagina con vue.

var app = new Vue ({

    el: '#root',
    data: {
        email: false,
        arrayEmail:[],
        totalEmail : 10,
    },

    mounted() {
        const self = this;
        for (var i = 0; i < this.totalEmail; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                // assegno la risposta ottenuta alla variabile email
                self.email = risposta.data.response;
                // pusho nell'array vuoto
                self.arrayEmail.push(self.email)
            });
        };
    },

//end vue
});
