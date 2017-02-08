
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var bs = require('browser-sync').create();
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var paths = {
    INDEX: 'src/system/index.html',
    PAGES_JSON: 'src/system/Pages.json',
    PAGES: 'src/pages/**/*.html',
    VENDOR_JS: [
        'src/vendors/**/*.js', 
        'src/vendors/**/**/*.js'
    ],
    VENDOR_CSS: [
        'src/vendors/**/*.css', 
        'src/vendors/**/**/*.css'
    ],
    STATIC: [
        'src/system/index.html', 
        'src/assets/**/*.*',
    ],
    JSX: [
        'src/system/*.jsx', 
        'src/pages/**/*.jsx', 
        'src/components/*/*.jsx', 
    ],
    CSS: [
        'src/system/common.css', 
        'src/pages/**/*.css',
        'src/components/**/*.css',
    ],
    IMAGES: [
        'src/assets/images/*.png', 
        'src/assets/images/*.jpg',
    ],
    MAIN_JS: 'main.js',
    DEST_INDEX: 'dist',
    DEST_JS: 'dist/js',
    DEST_CSS: 'dist/css',
    DEST_PAGES: 'dist/pages',
    DEST_VENDOR: 'dist/vendor',
    DEST_IMAGES: 'dist/assets/images',
    ENTRY_POINT: 'src/system/index.jsx'
};


gulp.task('default', ['copy-static', 'browser-sync', 'build-css', 'build-jsx', 'compress', 'inject', 'watch']);

gulp.task('copy-static', function() {
    gulp.src(paths.INDEX)
        .pipe(gulp.dest(paths.DEST_INDEX));

    gulp.src(paths.PAGES)
        .pipe(gulp.dest(paths.DEST_PAGES));
    
    gulp.src(paths.VENDOR_JS)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(paths.DEST_VENDOR));  

    gulp.src(paths.VENDOR_CSS)
        .pipe(concat('vendor.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.DEST_VENDOR));  

});

gulp.task('images', function(){
    return gulp.src(paths.IMAGES)
    .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.DEST_IMAGES));
})

gulp.task('build-css', ['copy-static'], function(){
    gulp.src(paths.CSS)
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest(paths.DEST_CSS));
})

gulp.task('rebuild-css', function(){
    gulp.src(paths.CSS)
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest(paths.DEST_CSS))
    .pipe(bs.reload({stream: true}));
})

gulp.task('build-jsx', ['build-css'], function() {
    return browserify({
        entries: paths.ENTRY_POINT,
        extensions: ['.jsx'], 
        paths: './node_modules',
        debug: true
    })
    .transform(babelify.configure({
        ignore: /(bower_components)|(node_modules)/,
        presets: ["es2015", "react"]
    }))
    .bundle()
    .on('error', function (error) {
        if(error.codeFrame){
            var msg = error.codeFrame.replace(/\n/g, '\n    ');
            gutil.log('|- ' + gutil.colors.bold(error.message));
            gutil.log('|\n    ' + msg + '\n           |');
        }
        else{
            console.log(error.message);
        }

        this.emit("end");
    })
    .pipe( source(paths.MAIN_JS) )
    .pipe( gulp.dest(paths.DEST_JS) )

});

gulp.task('rebuild-jsx', function() {
    return browserify({
        entries: paths.ENTRY_POINT,
        extensions: ['.jsx'], 
        paths: './node_modules',
        debug: true
    })
    .transform(babelify.configure({
        ignore: /(bower_components)|(node_modules)/,
        presets: ["es2015", "react"]
    }))
    .bundle()
    .on('error', function (error) {
        if(error.codeFrame){
            var msg = error.codeFrame.replace(/\n/g, '\n    ');
            gutil.log('|- ' + gutil.colors.bold(error.message));
            gutil.log('|\n    ' + msg + '\n           |');
        }
        else{
            console.log(error.message);
        }

        this.emit("end");
    })
    .pipe( source(paths.MAIN_JS) )
    .pipe( gulp.dest(paths.DEST_JS) )
    .pipe(bs.reload({stream: true}));

});

gulp.task('compress', ['build-jsx'], function(){
    gulp.src(paths.DEST_JS + "/main.js")
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe( gulp.dest(paths.DEST_JS) )

    
})


gulp.task('inject', ['compress'], function () { 

    var index = gulp.src(paths.DEST_INDEX + "/index.html");
    var pages = gulp.src(paths.DEST_PAGES + "/*/*.html");
    var sources = gulp.src(
        [
            paths.DEST_CSS + "/*.css", 
            paths.DEST_JS + "/*.min.js", 
            paths.DEST_VENDOR + "/*.*"
        ], 
        { read: false }
    );

    index.pipe(inject(sources, { 
        addPrefix: '.', 
        addRootSlash: false, 
        removeTags: true,
    }))
    .pipe(gulp.dest(paths.DEST_INDEX));

    pages.pipe(inject(sources, { 
        addPrefix: '.', 
        addRootSlash: false, 
        removeTags: true 
    }))
    .pipe(gulp.dest(paths.DEST_PAGES))
    .pipe(bs.reload({stream: true}));

});


gulp.task('watch', ['inject'], function() {
    gulp.watch(paths.CSS, {cwd:'./'},['rebuild-css']);
    gulp.watch(paths.JSX, {cwd:'./'},['inject']);
    gulp.watch(paths.PAGES, ['inject']);
    gulp.watch(paths.INDEX, ['inject']);
    gulp.watch(paths.PAGES_JSON, ['inject']);
    gulp.watch(paths.STATIC, ['copy-static']).on('change', bs.reload);

});


gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: ["./" + paths.DEST_INDEX, "./"]
        }
    });
});


