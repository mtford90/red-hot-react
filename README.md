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

Benefits:

* NO REFRESHING! You can maintain app state whilst experimenting with components and styling.

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
* `build`

# Production

Optionally, The production app can be served with `npm start` however you must ensure that `gulp compile` has been run.

# Configuration

* `build.config.js`: Boilerplate configuration.
* `webpack.config.js`: Webpack configuration. (You probably don't need to touch this).

# Credits

* [http://gaearon.github.io/react-hot-loader/](React Hot Loader tutorial)