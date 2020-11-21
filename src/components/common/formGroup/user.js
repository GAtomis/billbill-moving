let mixin = {

    created() {
        console.log('混入的钩子函数');
    },
    methods: {
        handleLogin() {
            console.log('登录')
        },
        handleRegister() {
            console.log('注册')
        },
    }
}

export default mixin;