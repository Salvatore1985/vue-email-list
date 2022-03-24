const root = new Vue({
    el: '#root',
    data: {
        userEmail: [],
        numberList: 10,
    },
    methods: {
        /*  generateLIst() {
 
         } */
        /*      myParseIntNUmber(text) {
                 this.text = parseInt(this.text);
                 return this.text;
             } */

    },
    created() {
    },
    mounted() {
        const self = this;


        for (let i = 0; i < self.numberList; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (response) {
                    const result = response;
                    console.log(response.data.response)
                    self.userEmail.push(response.data.response);

                });

        }

    },
});

console.log(typeof myParseIntNUmber("10"));

function myParseIntNUmber(text) {
    text = parseInt(text);
    return text;
}
