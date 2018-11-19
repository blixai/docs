# Deploying
> May the force be with you

## Frontend
Deploying Blix projects is just like any other. If you have a frontend you will find a command ```build``` in your package.json. Use ```npm run build``` or ```yarn build``` to minify your frontend.

## Backend
For the backend you may want to configure your .env file and make sure you're running with process.env = **PRODUCTION** to ensure the best performance.
You'll also want to look into how your service handles clustering. Heroku for example allows for clustering through "workers". The free or basic paid tier comes with a single worker.

#### Coming soon: specific instructions for Heroku, Github Pages, Now, Google Cloud, Azure, and AWS.