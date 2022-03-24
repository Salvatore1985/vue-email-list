const root = new Vue({
    el: '#root',
    data: {
        userEmail: [],
    },
    methods: {},
    created() { },
    mounted() {
        const self = this;
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (response) {
                    const result = response;
                    console.log(response.data.response)
                    self.userEmail.push(response.data.response);

                });

        }
    },
});

