const defaultForm = {
    country: '中国大陆',
    username: '',
    password: '',
    phoneNum: '',
    verify: ''
}


let mixin = {
    data() {
        return {
            form: Object.assign({}, defaultForm),
        }
    },
    created() {
        console.log('混入的钩子函数');
        // this.form = this.$route.params
        console.log(this.$route.params);
        if (Object.keys(this.$route.params).length) {
            this.form = this.$route.params
        }

    },
    methods: {
        handleLogin() {
            console.log('登录')
            this.$router.push({ path: "/home" })


        },
        handleRegister() {
            console.log('注册')
        },


    }
}



export default mixin;