/*global dev*/

// Dev variable is injected by webpack-dev-server if served via dev server.
// Otherwise the gulp compilation task injects false.
if (dev && require('../../dev.config.js').devStyles) {
    require("../../styles/scss/_dev_only.scss");
}