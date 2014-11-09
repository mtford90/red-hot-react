require("../styles/scss/main.scss");

//require("../styles/sass/main.sass");
//require("../styles/css/main.css");
//require("../styles/less/main.less");



// Dev variable is injected by webpack-dev-server if served via dev server.
// Otherwise the gulp compilation task injects false.
if (dev) {
    require("../styles/scss/_dev_only.scss");
}