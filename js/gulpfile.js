var gulp = require('gulp');

// 16. brower-sync
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('default', ['browser-sync']);