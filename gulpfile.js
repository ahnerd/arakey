var gulp = require('gulp');
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify'); 
var ngmin = require('gulp-ngmin');


var jsFiles = './js/*.min.js',  
    jsDest = './js';

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        //.pipe(uglify())
   
        .pipe(concat('scripts.js'))
        //.pipe(ngmin({dynamic: false}))
        //.pipe(uglify())
        //.pipe(rename('app.min.js'))
        .pipe(gulp.dest(jsDest));
});