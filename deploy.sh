#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build 

# navigate into the build output directory
cd .vuepress/dist

# if you are deploying to a custom domain
echo 'www.blixjs.com' > CNAME

git init
git config user.name "Devon Bull"
git config user.email "devjbull@gmail.com"
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:blixjs/blixjs.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/blixjs/blixjs.com.git master:gh-pages

cd -