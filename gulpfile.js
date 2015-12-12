// =============================================================================
// Include plugins
// =============================================================================
var $                 = require('gulp-load-plugins')();
var gulp              = require('gulp');
var gutil             = require('gulp-util');
var argv              = require('yargs').argv;
var browser           = require('browser-sync');
var sequence          = require('run-sequence');
var sass              = require('gulp-sass');
var concat            = require('gulp-concat');
var jekyll            = require('gulp-jekyll');

// =============================================================================
// Use `spawn` to execute shell command using Node
// The directory that contains the Gulpfile whose task needs to be run.
// Gulp tasks that need to be run.
// Check for --production flag
// Port to use for the development server.
// Browsers to target when prefixing CSS.
// =============================================================================
// var spawn             = require('child_process').spawn;
// var isProduction      = !!(argv.production);
// var PORT              = 3010;
// var UI_PORT           = 3020;
// var STYLEGUIDE_PORT   = 3030;
// // For reference 3040 - bower/BackstopJS/server.js port
// var COMPATIBILITY     = ['last 2 versions', 'ie >= 9'];


// =============================================================================
// Paths
// =============================================================================
var corePath          = '_core';
var srcPath           = 'src';
var htmlPath          = '.';
var buildPath         = '_site';
var bowerPath         = 'bower';


// =============================================================================
// File paths to various assets are defined here.
// =============================================================================
var PATHS = {
  markup: [
    htmlPath + '/index.html',
    htmlPath + '/_layouts/*.html',
    htmlPath + '/_posts/*.{markdown,md}']
};


// =============================================================================
// File paths to various assets are defined here.
// =============================================================================
gulp.task('default', function () {
  gulp.src(PATHS.markup)
  .pipe(jekyll({
    source: htmlPath,
    destination: buildPath
  }))
  .pipe(gulp.dest(buildPath));
});
