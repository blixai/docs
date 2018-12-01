---
sidebarDepth: 1
---

# scripts
> Live in the future, then build what's missing. - Paul Graham

Scripts are one of the pillars of Blix. With the ```blix scripts``` command you can add a one of our scripts to an existing project or create a new custom script with an optional template. 

For learning more about how scripts work check out our [guide](/guide/basics/scripts.html)

::: warning Future Changes
Expect how Blix scripts work to undergo heavy changes in the future. We may decide to stop embedding the scripts in the project and keep optional templates, or switch to a yaml file, we're also considering a ML solution. Stay tuned.
:::

## React Component Scripts

React component scripts come in several different types depending on the type of project you have.
What they share in common is the ability to create a stateful or stateless component, inside it's own folder, and always with a css file.

***Usage***
```bash
blix generate component <name>
```
You will then be prompted via y/N cli question whether this component is stateful.
If it's not a functional component is created.

Notes:

* If no name is provided a example of how to use the script will be console logged.
* If a folder with that name already exists an error will be logged and the script will exit.

### basic react component script
Creates a folder in ```src``` with the name provided. Inside the folder you'll find a file with the name uppercased and a simple css file with the same name.

### react-router component script
Creates a folder in ```src/components``` with the name provided. Inside the folder you'll find a file with the name uppercased and a simple css file with the same name.

### redux component script
Creates a folder in ```src``` with the name provided. Inside the folder you'll find a file with the name uppercased and a simple css file with the same name as well as a **NameContainer.js** redux container. We prefer to keep our container logic separate from our components. 

### react-router + redux component script
Creates a folder in ```src/components``` with the name provided. Inside the folder you'll find a file with the name uppercased and a simple css file with the same name as well as a **NameContainer.js** redux container. We prefer to keep our container logic separate from our components. 

## Redux Action Script

## View Scripts 
The view command creates a view component in ```src/views```, creates the route in the
router library file (```src/Router.js``` for React and ```src/router.js``` for Vue).

It also will ask to import components (or Redux containers) into the view so you can quickly start to build the new page.



***Usage***
```bash
blix generate view <name>
```


## Api Script
Creates file and Axios functions for a resource. When run this will 
create a file with the name of the resource plus Data.js. So a resource name of user will be userData.js.
For separation of concerns we provide the ```src/api``` folder for all frontend projects. 

***Usage***
```bash
blix generate api <resource>
```
This creates async await with try/catch routes for:
```bash
GET     /api/v1/resource
PUT     /api/v1/resource/:id
DELETE  /api/v1/resource/:id
POST    /api/v1/resource
```
If you don't want to use the /api/v1/ you can quickly edit this in the ```scripts/templates/api.js``` file. 
These routes perfectly match our backend controller script.

## Controller Script

## Model Scripts

### mongoose model script

### bookshelf model script

## Creating a Custom Script