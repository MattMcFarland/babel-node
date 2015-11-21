'use strict';

/* Module Dependencies */
const gulp = require('gulp');
/* Task Dependencies */
const bundle = require('./tasks/bundle');


gulp.task('default', () => {
  bundle('src/index', 'index', 'dist/js');
});
