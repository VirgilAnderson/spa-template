# spa-template

This is a template for creating SPA projects using laravel on the backend and Vue.js on the front end. The idea is to keep the SPA contained within but separate from the backend so that it can be changed if necessary. This build includes the following packages:

Backend:

-   Laravel
-   Blade
-   Sanctum
-   Laravel Debugbar

Frontend UI:

-   Vue 2.x
-   Babel
-   Vue Router
-   Vuex
-   Eslint
-   Axios

## Installation

### Basic Install

Clone the project into a directory

```
git clone git@github.com:VirgilAnderson/spa-template.git
```

Install the composer dependencies

```
cd spa_template
composer install
```

### Create & update the .env file

Create the .env file

```
cp .env.example .env
```

Generate your app key

```
php artisan key:generate
```

Set the app url

```
APP_URL=http://spa_template.test
```

Create a database and update the .env files to match

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=spa_template
DB_USERNAME=root
DB_PASSWORD=
```

Update the .env files for Sanctum

```
SESSION_DOMAIN=.spa_template.test
SANCTUM_STATEFUL_DOMAINS=spa_template.test:8080
```

Update the .env file for debugbar

```
DEBUGBAR_ENABLED=true
```

### Migrate the database

```
php artisan migrate
```

Seed the database with a user

```
php artisan tinker
$user = User::factory()->create()
$user->password = bcrypt('password');
$user->save();
```

### Build the UI

Install the npm dependencies for the ui

```
cd ui
npm install
```

Add the url of the project to the hosts file. NOTE: UI and backend MUST run on the same top level domain for Sanctum to work.

```
sudo vim /etc/hosts
```

Add the following to the hosts file:

```
127.0.0.1   spa_template.test
```

Update the axios config to use your new route (Login.vue & Dashboard.vue)

```
axios.defaults.baseURL = 'http://test_spa.test'
```

Modify the vue.config.js file to match your domain name

```
module.exports = {
    devServer: {
        host: 'spa_template.test'
    }
}

```

Visit spa_template.test to view the backend laravel app
Visit spa_template.test:8080 to view the frontend vue app

```

```
