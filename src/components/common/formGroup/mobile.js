import { isPhoneNum } from '@/utils/validate'
let mixin = {
    data() {
        return {
            getValidate: '',
            status: '',
            popupVisible: false

        }
    },
    computed: {
        checkPhoneNum() {
            return this.form.phoneNum
        },
        //注册按钮是否可用
        registerStatus() {
            console.log(
                this.isEmpty(this.form.verify),
                this.status === 'error',
                this.isEmpty(this.status),
                this.isEmpty(this.form.password)
            )

            return (
                this.isEmpty(this.form.verify) ||
                this.isEmpty(this.form.password) ||
                this.status === 'error' ||
                this.isEmpty(this.status)
            )
        }
    },
    created() {
        console.log('混入的钩子函数');
    },
    methods: {
        handleVerify() {
            console.log('获得验证码')
        },
        onValuesChange(picker, values) {
            this.form.country = values[0]
        },
        isEmpty(obj) {
            return typeof obj == 'undefined' || obj == null || obj == ''
        },
    },
    watch: {
        checkPhoneNum(val, oldVal) {
            if (val == 'undefined' || val == null || val == '') {
                this.status = ''
            } else {
                if (isPhoneNum(val)) {
                    this.status = 'success'
                    this.getValidate = false
                } else {
                    this.status = 'error'
                    this.getValidate = true
                }
            }
        }
    }
}

export default mixin;