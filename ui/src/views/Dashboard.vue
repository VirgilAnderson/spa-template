<template>
    <div class="dashboard">
        <h1>This is a dashboard page</h1>
        <p>Logged in as: {{ name }}</p>
    </div>
</template>

<script>
import api from '../services/api'

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
        api.get('api/user').then(response => {
            this.name = response.data.name
        }).catch()
    }
}
</script>
