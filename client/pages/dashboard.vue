<template>
    <div class="block">
        <p>Welcome back {{ user.displayName }}</p>

        <a href="#" @click.prevent="logout">Sign Out | {{ user.displayName }}</a>
    </div>
</template>

<script>
    export default {
        middleware: 'auth',

        methods: {
            logout () {
                this.$auth.logout()
            }
        }
    }
</script>