<template>
    <div>
        <h1>This is the Login page</h1>
		<input type="text" v-model="email" placeholder="email">
		<input type="password" v-model="password" placeholder="password">
		<button @click="login">Login</button>
		<p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://spa_template.test'

export default {
	name: 'dashboard',
	data() {
		return {
			email: '',
			password: '',
			errorMessage: '',
		}
	},
	methods: {
		/**
		 * method login()
		 * 
		 * Grabs the user token from the sanctum backend
		 */
		login:function() {
            axios.get('/sanctum/csrf-cookie').then(response => {
				console.log(response)
				axios.post('/login', {
					email: this.email,
					password: this.password,
				})
				.then(response2 => {
					console.log(response2)
					localStorage.setItem('isLoggedIn', 'true')
					this.$router.push({ name: 'Dashboard' })
				}).catch(error => {
					const key = Object.keys(error.response.data.errors)[0]
					this.errorMessage = error.response.data.errors[key][0]
					// console.log(error)
				})
			});
		},
	},
};
</script>

<style scoped>

</style>