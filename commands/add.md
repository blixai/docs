---
sidebarDepth: 1
---

# add
> Improvise. Adapt. Overcome. - U.S. Marines

The Blix add command allows you to quickly add tools to your project that might typically take hours if not days. Like adding react-router + redux to a basic react project. But with great power comes risk. While we try to avoid mutating your project as much as possible **we recommend making sure you have everything committed beforehand**.

## Backend

Adds a ```server``` folder and scripts for controllers and models (if database selected). Also installs necessary Express / ORM packages.

```bash
|── server
    |── controllers
    |── helpers
    |── models
    |── views 
    |── routes.js
    |── server.js
```

If a Postgres database is selected [Knex.js](https://knexjs.org/) installed and the init command executed to create a db folder with migrations and seed files as well as the knex config file.
```bash
|── db
    |── migrations
|── knexfile.js
```

## Webpack

Adds a webpack.config.js file.

## Webpack Dev Server

Installs a ```webpack-dev-server``` package

## React-Router

## Redux

## Database