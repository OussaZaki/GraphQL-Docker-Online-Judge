'use strict';

const gulp = require('gulp');
const rimraf = require('gulp-rimraf');
const tslint = require('gulp-tslint');
const mocha = require('gulp-mocha');
const shell = require('gulp-shell');
const env = require('gulp-env');

/**
 * Remove build directory.
 */
gulp.task('clean', function () {
  return gulp.src(outDir, { read: false })
    .pipe(rimraf());
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
  return gulp.src('src/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('prose'));
});

gulp.task('serve', shell.task([
  'npm start',
]))

gulp.task('compile', shell.task([
  'npm run tsc',
]))

/**
 * Watch for changes in TypeScript
 */
gulp.task('watch', ['compile'], () => {
  gulp.watch('src/**/*.ts', ['compile', 'serve']);
})

/**
 * Build the project.
 */
gulp.task('build', ['tslint', 'compile', 'configs'], () => {
  console.log('Building the project ...');
});


/**
 * todo: figure out a config structure
 * Copy config files
 */
gulp.task('configs', (cb) => {
  return gulp.src("src/configurations/*.json")
    .pipe(gulp.dest('./build/src/configurations'));
});


/**
 * todo : figure out a test structure
 * Run tests.
 */
gulp.task('test', ['build'], (cb) => {
  const envs = env.set({
    NODE_ENV: 'test'
  });

  gulp.src(['build/test/**/*.js'])
    .pipe(envs)
    .pipe(mocha())
    .once('error', (error) => {
      console.log(error);
      process.exit(1);
    })
    .once('end', () => {
      process.exit();
    });
});

gulp.task('default', ['build']);