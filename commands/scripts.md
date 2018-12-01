# scripts
> Live in the future, then build what's missing. - Paul Graham

Scripts are one of the pillars of Blix. With the ```blix scripts``` command you can add a one of our scripts to an existing project or create a new custom script with an optional template. 

For learning more about how scripts work check out our [guide](/guide/basics/scripts.html)

## Future Changes
Expect how Blix scripts work to undergo heavy changes in the future. We may decide to remove the script from the project and keep optional templates, or switch to a yaml file, we're also considering a ML solution. Stay tuned.

## react component scripts

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

### react+router component script
Creates a folder in ```src/components``` with the name provided. Inside the folder you'll find a file with the name uppercased and a simple css file with the same name.

### redux component script
Creates a folder in ```src``` with the name provided. Inside the folder you'll find a file with the name uppercased and a simple css file with the same name as well as a **NameContainer.js** redux container. We prefer to keep our container logic separate from our components. 

### react-router + redux component script
Creates a folder in ```src/components``` with the name provided. Inside the folder you'll find a file with the name uppercased and a simple css file with the same name as well as a **NameContainer.js** redux container. We prefer to keep our container logic separate from our components. 

## redux action script

## view scripts 

## api script

## controller script

## model scripts

### mongoose model script

### bookshelf model script

## Creating a Custom Script