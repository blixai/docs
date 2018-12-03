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

Here are example of a **"Button"** component. We show stateful, stateless, and a container if the project uses Redux.

**Stateful Component**
```js
import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        Hello Button
      </div>
    )
  }
}

export default Button 
```

**Stateless Component**
```js
import React from 'react'
import './Button.css'

const Button = (props) => { 
  return(
    <div>Hello Button</div>
  )
}

export default Button
```

**Redux Container**
```js
import { connect } from 'react-redux'
import Button from './Button'

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, null)(Button)
```

### Basic React Component Script
Creates a folder in ```src``` with the name provided. Inside the folder you'll find a file with the name uppercased and a empty css file with the same name.

### React-Router Component Script
Creates a folder in ```src/components``` with the name provided. Inside the folder you'll find a file with the name uppercased and a empty css file with the same name.

### Redux Component Script
Creates a folder in ```src``` with the name provided. Inside the folder you'll find a file with the name uppercased and a empty css file with the same name as well as a **NameContainer.js** redux container. We prefer to keep our container logic separate from our components. 

### React-Router + Redux Component Script
Creates a folder in ```src/components``` with the name provided. Inside the folder you'll find a file with the name uppercased and a empty css file with the same name as well as a **NameContainer.js** redux container. We prefer to keep our container logic separate from our components. 


## Redux Action Script

***Usage***
```bash
blix generate action
```
You will then prompted: 
1) For the action's name.
1) The Reducers name.
1) A list of containers in the project and a question of "which containers should this action apply to".

::: tip Notes:
1) If the Reducer already exists it will add the action to the reducer. If not it will create and import the new reducer into the rootReducer.
1) You can add the action to more than one container at a time. 
1) The action will be imported into the container. If dispatch is not mapped it will be created and connected in the export.
1) Container names are case sensitive.
:::

**Example**
```bash
blix generate action

# action name: login
# reducer name: User
# containers to apply action to: Navbar
```

***NavbarContainer.js***
```js
import { connect } from 'react-redux'
import { login } from '../../actions'
import Navbar from './Navbar'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleLogin: (input) => {
			dispatch(login(input))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
```

***User Reducer***
```js
const user = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload
    default:
      return state
  }
}

export default user
```

***rootReducer.js***
```js
import { combineReducers } from 'redux'
import User from './User'


const rootReducer = combineReducers({
	User
}) 

export default rootReducer
```

***action***
```js
export const login = (payload) => {
  return {
    type: "LOGIN",
    payload
  }
}
```

This is an ultra powerful script.



## View Scripts 
The view command creates a view component in ```src/views```, creates the route in the
router library file (```src/Router.js``` for React and ```src/router.js``` for Vue).

It also will ask to import components (or Redux containers) into the view so you can quickly start to build the new page.



***Usage***
```bash
blix generate view <name>
```


## Api Script
Creates a file with Axios functions for a resource. When run this will 
create a file with the name of the resource plus Data.js. So a resource name of user will be userData.js.
For separation of concerns we provide the ```src/api``` folder for all frontend projects. 

***Usage***
```bash
blix generate api <resource>
```
This creates async await functions with try/catch routes for:
```bash
GET     /api/v1/resource
PUT     /api/v1/resource/:id
DELETE  /api/v1/resource/:id
POST    /api/v1/resource
```

Here's an example of a user resource file created by running ```blix generate api user```
```js
import axios from 'axios'

const getUser = async () => {
    try {
        let data = await axios.get('/api/v1/user')
        return data
    } catch (err) {
        throw err
    }
}

const postUser = async (user) => {
    try {
        let response = await axios.post('/api/v1/user', user)
        return response
    } catch (err) {
        throw err
    }
}

const putUser = async (user, id) => {
    try {
        let response = await axios.put(`/api/v1/user/${id}`, user)
        return response
    } catch (err) {
        throw err
    }
}

const deleteUser = async (id) => {
    try {
        let response = await axios.delete(`/api/v1/user/${id}`)
        return response
    } catch (err) {
        throw err
    }
}

export {
    getUser,
    postUser,
    putUser,
    deleteUser
}
```


If you don't want to use the /api/v1/ you can quickly edit this in the ```scripts/templates/api.js``` file. 
These routes map with our backend controller script in order to quickly connect client and server in a standardized way.

## Controller Script
Creates a file and adds routes to the server's routes. The standard Blix server is has a ```controllers``` folder
and ```routes.js``` file. 

***Usage***
```bash
blix generate controller <resource>
```

***Routes Generated in routes.js***
```bash
GET     /api/v1/resource
PUT     /api/v1/resource/:id
DELETE  /api/v1/resource/:id
POST    /api/v1/resource
```

***Controller Generated***
```js
// from an example of "blix generate controller user"
// so the file will be server/controllers/user.js
exports.get = (req, res) => { }

exports.put = (req, res) => { }

exports.deleteUser = (req, res) => { }

exports.post = (req, res) => { }
```
The functions inside the controller are already connected in the routes.js file. 


## Model Scripts
A model script creates a database ORM model file in ```server/models```.
Currently we have model scripts for [Mongoose](https://mongoosejs.com/) and [Bookshelf](https://bookshelfjs.org/) ORM's. 
Either script can be run with just a model name and will create a base model file. 
However, you can also pass in **"fields"** with the field  type separated by a colon. 
If no field type is provided it defaults to type "string". The accepted fields differ by database type and are listed below.

***Basic Usage***
```bash
blix generate model <name>
```

### Mongoose model script
In the Mongoose script the field type is capitalized to reflect the Mongoose class types.

**Valid types:** String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array

***Create Mongoose User Model***
```bash
blix generate model User name age:Number isAdmin:Boolean emails:Array
```
Creates a file ```server/models/User.js```. 
```js
let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.ObjectId

let userSchema = new Schema({
      name: String,
      age: Number,
      isAdmin: Boolean,
      emails: Array

})

module.exports = mongoose.model('User', userSchema)
```

### Bookshelf model script
The Bookshelf model script has a couple of extra actions to note.
In order to work we must instantiate a bookshelf instance, and in order to do so we create a bookshelf.js file in ```server/models/```.
When run the script will also create a migration file in ```db/migrations```.
The field types are **snakecased** (unlike other scripts like the Mongoose script which takes uppercase field names).

***Valid types:*** string, binary, boolean, date, dateTime, decimal, float, integer, bigInteger, text, json, jsonb

***Create Bookshelf User Model and Migration***
```bash
blix generate model User name age:integer is_admin:boolean emails:integer
```

Creates model file: ```server/models/User.js```
```js
let bookshelf = require('./bookshelf')

let User = bookshelf.Model.extend({
  tableName: 'users'
})

module.exports = User
```

Creates migration: ```db/migrations/20181202233921_users.js``` (the file id will be different)
```js
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('users', (t) => {
      t.increments('id').primary()
      t.string('name')
      t.integer('age')
      t.boolean('is_admin')
      t.integer('emails') // this will reference a foreign key

      t.timestamps(true, true)
    })
  ])
}

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
}
```

If you encounter errors we recommend running adding a database via ```blix add``` and trying again. 



## Creating a Custom Script