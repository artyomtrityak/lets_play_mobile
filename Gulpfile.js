'use strict';

var gulp = require('gulp');
var spawn = require('child_process').spawn;


let make = () => {
  spawn('make', [], {stdio: 'inherit'})
  .on('close', (code) => {
    console.log('Child process exited with code ' + code + '\n\n\n');
  });
};

gulp.task('watch', (onTaskDone) => {
  return gulp.watch('**/*.js', make);
});
