var gulp = require('gulp');
var args = require('yargs').argv;
var $ = require('gulp-load-plugins')({lazy: true});
var del = require('del');
var config = require('./gulp.config')();

gulp.task('pass-joins', function() {
    return gulp.src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}));
});

gulp.task('styles', ['clean-styles'], function() {
    return gulp.src(config.less)
          .pipe($.plumber())
          .pipe($.less())
          //.pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
          .pipe(gulp.dest(config.temp));
});


gulp.task('clean-styles', function() {
    var files = config.temp + '**/*.css';
    clean(files)
});

gulp.task('less-watcher', function() {
    gulp.watch([config.less], ['styles']);
});


function clean(path) {
    del(path);
}