# Scripts
> Sometimes you've gotta run before you can walk - Tony Stark

Scripts are designed to make your life easier. They range from the simple: like generating a new component,
to the advanced: creating an action and reducer, importing the reducer into the rootReducer, and importing the action into a container.
**If you're not sure how a script works simply run it without any arguments and you'll get an error with an example of how to use it and what it does**.

## Running a script
There are two ways to run a script, via Blix or the package.json. You can find what scripts your project has by checking the scripts inside the package.json.
In this example there is a script "**component**". 

```json
"scripts": {
    "component": "node scripts/component.js"
}
```
To run it with Blix run:
```bash
blix generate controller testname
# Or use the alias: g
blix g controller testname
```
Note: The controller script requires a name for the controller, hence the "testname".

To run it with your package manager of choice:
```bash
npm run controller testname
# OR
yarn controller testname
```

## Editing a template
All scripts are stored in the ```scripts``` folder. And within the scripts folder you'll find templates for all kinds of things. 
```
scripts
    |── templates
        |── controller.js
        |── routes.js
        |── statefulComponent.js
        |── statelessComponent.js 
```

## Caveats
Currently we don't have a way to destroy/undo a generate command. 


## Upcoming Changes
We're looking at new and exciting ways to push the boundaries of making simple reusable scripts. 
From yaml to machine learning we're going to push the boundaries as far as we can. 


