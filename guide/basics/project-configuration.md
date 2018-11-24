# Project Configurations
> Stay committed to your decisions but stay flexible in your approach - Tony Robbins

## Frontend

Blix follows a fractal style for file management on the frontend. By default all frontend projects have a ```src``` folder that is transpiled and output to a ```dist``` folder. 
Within the ```src``` folder there are common that may have additionally directories or files based on what type of project it is. I.e. a React project with Redux will have
a ```src/reducers``` directory while a project without a state management solution won't.

Here's a look at the consistent files/folders that will be built regardless of frontend type
```bash
|── src
    |── api
    |── components
    |── index.js 
```
1) The ```api``` folder provides a simple way to decouple service logic and with our generators can help you connect to a resource quickly and consistently.
1) The ```components``` folder is pretty self explanatory. We should note however, that for React projects we encourage a component to have it's own folder, with the component file, a test file, a css file, and if a redux project: a container.

### Projects with Client Side Routing

Projects that use packages like ```react-router``` or ```vue-router``` have a ```views``` folder within ```src```.
We find that instead of having a component from within the ```src/components``` folder it tends to be much cleaner to use a component as a "view" and import the components, styling, and services you need for that page.

***Views Example***
```bash
|── src
    |── views
        |── Home.js
        |── Login.js
        |── Account.js
```

### Projects with State Management

For React with Redux projects the src folder contain ```actions``` and ```reducers``` directories along with a ```configStore.js``` file. 

***Redux Example***
```bash
|── src
    |── actions
        |── index.js
    |── reducers
        |── rootReducer.js
        |── User.js
    |── configStore.js
```

## Backend

All backends follow the MVC pattern and currently only use Express. If you're familiar with Ruby on Rails this will be immediately familiar.

***Backend Example***
```bash
|── server
    |── controllers
    |── helpers
    |── models
    |── views 
    |── routes.js
    |── server.js
```

All routes are stored in the ```routes.js``` file for ease of lookup. The ```helpers``` folder is perfect for things like authentication handlers. 
For applications with client side routing it would be best to make an endpoint for each route server side. So if you're in a project that serves a frontend
you should see a index.html file in ```views``` under a folder: ```home``` and a route ```r.get('/', Home.index)``` in ```routes.js```. To make a new page route use: ```r.get('/page', Home.index)```.
This will serve the index.html which calls the JS file with the routing library which will load to the JS "page" you need. This will help prevent unnecessary 404's.

## Common Folders

