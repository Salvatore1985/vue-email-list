const root = new Vue({
    el: '#root',
    data: {},
    methods: {},
    created() { },
    mounted() { },
});

AXIOS.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function (response) {
        const result = response.data;
        console.log(result)
    });