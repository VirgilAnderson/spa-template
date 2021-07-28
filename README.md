# spa-template

This isa template for creating SPA projects using laravel on the backend and Vue.js on the front end. The idea is to keep the SPA contained within but separate from the backend so that it can be changed if necessary. This build includes the following packages:

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

## Installation

Clone the project into a directory

```
git clone git@github.com:VirgilAnderson/spa-template.git
```

Install the composer dependencies

```
composer install
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

Migrate the database

```
php artisan migrate
```

Install the npm dependencies for the ui

```
cd ui
npm install
```

Add the url of the project to the hosts file. NOTE: UI and backend MUST run on the same top level domain for Sanctum to work.

```
    sudo vim /etc/hosts
```

Modify the vue.config.js file to match your domain name

```
module.exports = {
    devServer: {
        host: 'spa_template.test'
    }
}
```
