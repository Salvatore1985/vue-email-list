const root = new Vue({
    el: '#root',
    data: {
        userEmail: [],
        numberList: 20,
    },
    methods: {
        generateLIst() {
            const self = this;
            self.userEmail = [];
            for (let i = 0; i < self.numberList; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(function (response) {
                        const result = response;
                        console.log(response.data.response)
                        self.userEmail.push(response.data.response);

                    });

            }

        },
        myParseIntNUmber() {
            this.numberList = parseInt(this.numberList);
            this.generateLIst();

        }


    },
    created() {
    },
    mounted() {

    },
});

/* console.log(typeof myParseIntNUmber("10"));

function myParseIntNUmber(text) {
    text = parseInt(text);
    return text;
}
 */