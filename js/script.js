const root = new Vue({
    el: '#root',
    data: {
        userEmail: [],
        currentEmail: [0],
        numberList: null,
    },
    methods: {
        generateLIst() {
            const self = this;
            self.userEmail = [];
            self.currentEmail = []
            console.log("digitato", self.userEmail);

            if (self.numberList === null) {
                self.numberList = 0;
            }
            for (let i = 0; i < self.numberList; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(function (response) {
                        const result = response;
                        console.log(response.data.response)
                        self.userEmail.push(response.data.response);

                    });

            }
            self.currentEmail.push(self.numberList);
            console.log("inserito", self.currentEmail);
            self.numberList = null;
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