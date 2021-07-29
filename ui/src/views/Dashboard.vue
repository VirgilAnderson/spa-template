<template>
    <div class="dashboard">
        <h1>This is a dashboard page</h1>
        <p>Logged in as: {{ name }}</p>
        <button @click="logout">Log out</button>
    </div>
</template>

<script>
import axios from "axios"
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://spa_template.test'

export default {
    name: 'dashboard',
    data() {
        return {
            name: '',
        }
    },
    methods: {
        logout:function() {
            axios.post('/logout').then(response => {
                console.log(response)
                localStorage.removeItem('isLoggedIn')
                this.$router.push({ name: 'Home' })
            })
        }
    },
    mounted() {
        axios.get('api/user').then(response => {
            this.name = response.data.name
        }).catch(error => {
            console.log(error)
        })
    }
}
</script>
