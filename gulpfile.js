// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sysBuilder = require('systemjs-builder');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('bundle:libs', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js'
      ])
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/lib/js'));
});

// Generate systemjs-based builds
gulp.task('bundle:js', function() {
  var builder = new sysBuilder('', 'systemjs.config.js');
  return builder.buildStatic('app', 'public/dist/js/app.min.js');
});

// Generate systemjs-based builds
gulp.task('bundle:js', function() {
  var builder = new sysBuilder('', 'systemjs.config.js');
  return builder.buildStatic('app', 'public/dist/js/app.min.js');
});

// Minify JS bundle
gulp.task('minify:js', function() {
  return gulp
    .src('public/dist/js/app.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/js'));
});