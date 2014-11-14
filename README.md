live-react-boilerplate
======================

A boilerplate configuration for ReactJS featuring:

* Hot Reload (no refresh)
    * React components
    * Styling
        * SASS/SCSS
        * Less
        * CSS
* Testing (Jest)
* Compilation
* Routing
* Bootstrap

... and plenty more.

Focus is on developer productivity and rapid delivery.

# Quick start

Run the following to get up and running in no time:

```
npm install
bower install
gulp watch
```

If all goes well, the app will launch in your default browser and you can start live editing straight away.

# Gulp tasks

Below is a summary of the individual gulp tasks and their function:

* `help`
    * List all tasks
* `test`
    * Run jest tests in `/__tests__`
* `watch`
    * run tests
    * run dev server on port 3000
    * on .js/.jsx changes run tests and hot reload
* `compile`
    * compiles to `bin/app.js`

# Production

The production app can be served with `npm start` however you must ensure that `gulp compile` has been run.

# Configuration

* `build.config.js`: Boilerplate configuration.
* `webpack.config.js`: Webpack configuration. (You probably don't need to touch this).

# Credits

Checkout `dependencies` and `devDependencies` in the [package.json](https://github.com/mtford90/red-hot-react/blob/master/package.json)