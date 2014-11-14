/*global dev*/

/**
 * This file handles styles that should only be included when using the dev server.
 * The default is to apply transitions to all elements so that the live editing looks awesome.
 *
 * For those who are less than impressed with this, it can be turned using the devStyles options
 * within dev.config.js
 */

// Dev variable is injected by webpack-dev-server if served via dev server.
// Otherwise the gulp compilation task injects false.
if (dev && require('../../dev.config.js').devStyles) {
    require("../../styles/scss/_dev_only.scss");
}