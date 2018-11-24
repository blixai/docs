# generate
> Simplicity is the ultimate sophistication. - da Vinci

The generate command currently is a simple wrapper for the project's package.json scripts.
Instead of having to run ```npm run someScript <args>``` or ```yarn someScript <args>``` you can
instead run 
```bash
blix generate someScript <args>
# Or with the generate alias "g"
blix g someScript <args>
```