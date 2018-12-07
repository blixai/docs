---
sidebarDepth: 2
---

# API

## canUseYarn

Checks if yarn.lock file or package-lock.json file already exists.
If neither exist it will then attempt to check to see if yarn exists.

## yarn
* ``` @async```

If canUseYarn returns successful and a choice hasn't already been made, it prompts the user if they
want to use yarn and stores the answer.

## installDependencies 
* ```@param {string} [packages] - Packages is a string of space separated npm packages```
* ```@param {string} [type] - Type can either be "dev" for development or undefined```

If a project name exists (store.name) it changes directories to that folder. From there it checks if yarn has been selected to be used. It also uses the type arg to determine if it should install packages as development or production dependencies. It then executes syncronously to install the packages passed to it. If there is an error it will respond with a generic error, if mode is development a full error will be output.

## installKnexGlobal

## addScriptToPackageJSON

## modifyKnex

## writeFile

## mkdirSync

## rename

## checkScriptsFolderExist

## getCWDName

## appendFile

## checkIfScriptIsTaken

## moveAllFilesInDir

## addDependenciesToStore

## installAllPackages

## insert

## capitalize

## loadFile
