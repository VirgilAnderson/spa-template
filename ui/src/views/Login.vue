<template>
    <div>
        <h1>Login</h1>
		<div>
			<div>
				<label for="email">Email address</label>
				<input type="text" name="email" id="email" v-model="email">
			</div>
			<div>
				<label for="password">Password</label>
				<input type="password" name="password" id="password" v-model="password">
			</div>
			<div>
			<button @click="login">
				Sign in
			</button>
			<p v-if="errorMessage">{{ errorMessage }}</p>
			</div>
		</div>
		
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
				})
			});
		},
	},
};
</script>

<style scoped>

</style>