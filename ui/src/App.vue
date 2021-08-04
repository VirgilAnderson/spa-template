<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link v-if="authenticated" to="/dashboard">Dashboard</router-link><span v-if="authenticated"> | </span>
            <router-link v-if="!authenticated" to="/login">Login</router-link>
            <a href="#" v-if="authenticated" @click.prevent="logout">Logout</a>
        </div>
        <router-view />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
        })
    },
    methods: {
      ...mapActions({
        logOutAction: 'auth/logout'
      }),

      async logout () {
        await this.logOutAction()

        this.$router.replace({ name: 'Home' })
      }
    }
}
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
