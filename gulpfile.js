var gulp = require('gulp')
  , concat = require('gulp-concat')
  , eslint = require('gulp-eslint')
  , mochaPhantom = require('gulp-mocha-phantomjs')

/**
 * Lint task.
 */
gulp.task('lint', function() {
  return gulp.src(['src/{,*/}*.js', '!src/{bridge,intro,outro}.js'])
    .pipe(eslint())
    .pipe(eslint.format())
})

/**
 * Test task.
 */
gulp.task('test', function() {
  return gulp.src('test/runner.html')
    .pipe(mochaPhantom())
})

/**
 * Default task.
 */
gulp.task('default', ['build'])
