<template>
    <div class="dashboard">
        <h1>This is a dashboard page</h1>
        <p>Logged in as: {{ name }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from "axios"
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://spa_template.test'

export default {
    name: 'dashboard',
    computed: {
        ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
        })
    },
    data() {
        return {
            name: '',
        }
    },
    methods: {

    },
    mounted() {
        if(this.$store.getters['auth/authenticated']){
            axios.get('api/user').then(response => {
                this.name = response.data.name
            }).catch(error => {
                console.log(error)
            })
        }
        

    }
}
</script>
