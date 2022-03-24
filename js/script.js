const root = new Vue({
    el: '#root',
    data: {
        userEmail: "",
    },
    methods: {},
    created() { },
    mounted() {
        const self = this;
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {
                const result = response;
                console.log(response.data.response)
                self.userEmail = response.data.response;

            });
    },
});

