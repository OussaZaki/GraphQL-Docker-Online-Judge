'use strict';

const gulp = require('gulp');
const rimraf = require('gulp-rimraf');
const tslint = require('gulp-tslint');
const mocha = require('gulp-mocha');
const shell = require('gulp-shell');
const env = require('gulp-env');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');

const tsProject = ts.createProject('tsconfig.json');
const outDir = "./build";

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

/**
 * Compile ts files to js
 */
gulp.task('compile', function() {
    const tsResult = tsProject.src()
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest(outDir));
});

/**
 * Watch for changes in TypeScript
 */
gulp.task('watch', ['compile'], () => {
  gulp.watch('src/**/*.ts', ['compile']);
})

/**
 * Compile ts files to js
 */
gulp.task('build', ['clean', 'tslint', 'compile']);

/**
 * Watch for changes in TypeScript
 */
gulp.task('serve', ['compile', 'watch'], () => {
  nodemon({
    watch: outDir,
    script: `${outDir}/server.js`,
    NODE_ENV: 'developement'
  });
})

gulp.task('serve:prod', shell.task([
  'mkdirp ./tmp & node build/server.js',
]))

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