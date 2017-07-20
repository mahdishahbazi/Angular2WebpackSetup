// var gulp = require('gulp');
// var concat = require('gulp-concat');
// var minify = require('gulp-minify');
// var cleanCss = require('gulp-clean-css');
// var less = require('gulp-less');
// var ts = require("gulp-typescript");
// var tsProject = ts.createProject("tsconfig.json");

// gulp.task('less', function () {
//     gulp.src('Source/**/*.less')
//         .pipe(less())
//         .pipe(gulp.dest('Output/css'))
// });

// gulp.task('ts', function () {
//     return tsProject.src()
//         .pipe(tsProject())
//         .js .pipe(minify({
//         ext:{
//             min:'.min.js'
//         },
//         noSource: false}))
//         .pipe(gulp.dest('Output/js'));
// });

// var ts = require('gulp-typescript');

// gulp.task('html', function () {
//     gulp.src('Source/**/*.html')
//         .pipe(gulp.dest('Output/js'));
// });

// gulp.task('pack-js', function () {	
// 	return gulp.src(['Output/**/*.js', 'Output/*.js'])
// 		.pipe(concat('bundle.js'))
// 		// .pipe(minify({
//         // ext:{
//         //     min:'.js'
//         // },
//         //noSource: true}))        
// 		.pipe(gulp.dest('Output/js'));
// });
 
// gulp.task('pack-css', function () {	
// 	return gulp.src(['Output/**/*.css'])
// 		.pipe(concat('style.css'))
//         .pipe(cleanCss())
// 		.pipe(gulp.dest('Output/css'));
// });

// gulp.task('default', ['less','ts','pack-js', 'pack-css' ], function () {
//     //  gulp.watch('./Source/**/*.less', ['less','pack-css']);
//     //  gulp.watch('./Source/**/*.ts', ['ts','pack-js']);
// })

var gulp = require('gulp');
var less = require('gulp-less');
gulp.task('less', function () {
    gulp.src('Source/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('Output'))
});


gulp.task('default', ['less' ], function () {
      //gulp.watch('./Source/**/*.less', ['less','pack-css']);
      gulp.watch('./Source/**/*.less', ['less']);
      
    //  gulp.watch('./Source/**/*.ts', ['ts','pack-js']);
})