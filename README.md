# VariadicJS

[VariadicJS](https://variadicjs.github.io/) is a demo website to showcase [variadicjs](https://github.com/variadicjs/variadic.js) library.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Detailed nformation on how to perform common tasks you can find  [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Quick start

 [Fork](https://help.github.com/articles/fork-a-repo/) this repo and replace `YOUR_USER_NAME` with your github username in the next step.

* clone the repo: `git clone https://github.com/YOUR_USER_NAME/variadicjs.github.io.git`
* cd into new folder: `cd variadicjs.github.io`
* install dependences: `npm install`

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run predeploy`

Same as `npm run build`.

### `npm run deploy`

Publishes everything from **build** folder to **master** branch.
