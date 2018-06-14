<template>
    <div class="container">

        <form action="#" @submit.prevent="submit">

            <h3>Sign In</h3>
            
            {{ errors }}

            <div class="field">
                <label for="">Email</label>
                 <input type="email" name="email" id="email" class="input" placeholder="email" v-model="form.email"> 
            </div>
            <div class="field">
                <label for="">Password</label>
                <input type="password" name="password" id="password" class="input" placeholder="password" v-model="form.password"> 
            </div>
            <div class="field">
                <button class="button is-block is-info">Sign In</button>
            </div>
        </form>
        
    </div>
</template>

<script>
    export default {
        middleware: 'guest',
        
        data () {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async submit () {
                await this.$auth.login({
                    data: this.form
                })

                this.$router.push({
                    path: this.$route.query.redirect || '/'
                }) 
                
                this.$toast.success('Logged In!');
            }
        }
    }
</script>
