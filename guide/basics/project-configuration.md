# Project Configurations
> Stay committed to your decisions but stay flexible in your approach - Tony Robbins

## Frontend

Blix follows a fractal style for file management on the frontend. By default all frontend projects have a ```src``` folder that is transpiled and output to a ```dist``` folder. 
Within the ```src``` folder there are common that may have additionally directories or files based on what type of project it is. I.e. a React project with Redux will have
a ```src/reducers``` directory while a project without a state management solution won't.

Here's a look at the consistent files/folders that will be built regardless of frontend type
```
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

***Views Example***:
```
|── src
    |── views
        |── Home.js
        |── Login.js
        |── Account.js
```

### Projects with State Management

For React with Redux projects the src folder contain ```actions``` and ```reducers``` directories along with a ```configStore.js``` file. 

***Redux Example***
```
|── src
    |── actions
        |── index.js
    |── reducers
        |── rootReducer.js
        |── User.js
    |── configStore.js
```

## Backend

All backends follow the MVC pattern.

## Common Folders