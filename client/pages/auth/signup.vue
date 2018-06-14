<template>
    <div class="container">

        <form action="#" @submit.prevent="submit">

            <h3>Register</h3>

            {{ errors }}

            <div class="field">
                <label for="">Full Name</label>
                <input type="text" class="input" placeholder="Display Name" v-model="form.displayName">
            </div>
            <div class="field">
                <label for="">Email</label>
                <input type="email" class="input" placeholder="email" v-model="form.email">
            </div>
            <div class="field">
                <label for="">Password</label>
                <input type="password" class="input" placeholder="password" v-model="form.password">
            </div>
            <button class="button is-info">Sign Up</button>
        </form>
    </div>
</template>


<script>
    export default {
        middleware: 'guest',
        
        data () {
            return {
                form: {
                    displayName: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async submit () {
                await this.$axios.post('register', this.form)

                this.$auth.loginWith('local', {
                    data: this.form
                })

                this.$router.push({
                    name: 'index'
                })
            }
        }
    }
</script>