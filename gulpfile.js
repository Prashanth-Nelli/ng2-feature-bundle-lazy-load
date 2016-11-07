var gulp      = require('gulp');
var concat    = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var builder   = require('./build');

gulp.task('copy_templates',function(){
  console.log('copy templates');
  return gulp.src('./app/**/*.html').pipe(gulp.dest('./dist/app'));
});

gulp.task('bundle_css',function(){
  return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css','./css/styles.css'])
          .pipe(concatCss('style.css'))
          .pipe(gulp.dest('./dist'));
});

gulp.task('lib_bundle',function(){
  return gulp
        .src([
            'node_modules/core-js/client/shim.min.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/systemjs/dist/system.src.js'
        ])
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('bundle',function(){
  console.log('build is going on');
  return builder.build();
});

gulp.task('copy_index',function(){
  return gulp.src('./index-prod.html').pipe(concat('index.html')).pipe(gulp.dest('./dist'));
});

gulp.task('bundle_systemjs_stuff',function(){
  return gulp.src(['./bundleToModuleMapping.js','./patch_systemJs_import.js','./systemjs.config.js'])
        .pipe(concat('systemjs.config.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default',['copy_index','copy_templates','bundle','bundle_systemjs_stuff','lib_bundle','bundle_css']);
