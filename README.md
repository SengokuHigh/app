### How to commit and deploy
```
git init
git add .
git commit -m "new update"
git branch -M main
git remote add origin https://github.com/SengokuHigh/app.git
git push https://SengokuHigh:<generate ur own personal token>@github.com/SengokuHigh/app.git main

npm run deploy
```

### Running locally
edit package.json, remove homepage
```
"homepage1": "https://sengokuhigh.github.io/app"
```

run the webapp on local computer
```
npm install
npm start
```

### note! sensitive information should not be checked-in
### sensitive file should be added into .gitignore
