<template>
    <div class="dashboard">
        <h1>This is a dashboard page</h1>
        <p>Logged in as: {{ name }}</p>
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
