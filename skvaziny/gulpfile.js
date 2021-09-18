const gulp = require('gulp');

const less = require('gulp-less'), 
    cssnano = require('gulp-cssnano'), 
    autoprefixer = require('gulp-autoprefixer'), 
    imagemin = require('gulp-imagemin'), 
    concat = require('gulp-concat'), 
    uglify = require('gulp-uglify'), 
    rename = require('gulp-rename'), 
    useref = require('gulp-useref'),
    gulpIf = require('gulp-if'),
    del = require('del');
    browserSync = require('browser-sync');

gulp.task('html', function() {
    return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('imgs', function() {
    return gulp.src('src/images/*.+(jpg|jpeg|png|gif)')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest('dist/images'))
});

gulp.task('useref', function () {
    return gulp.src('src/*.html') 
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify())) 
        .pipe(gulpIf('*.css', cssnano()))
        //.pipe(gulpIf('*.css', autoprefixer({cascade: false})))
        .pipe(gulp.dest('dist'));
});

gulp.task('html-dev', function() {
    return gulp.src('src/**/*.html')
    .pipe(gulp.dest('src'));
})

gulp.task('css', function() {
    return gulp.src('src/css/*.less')
        //.pipe(concat('styles.less'))
        .pipe(less())
        .pipe(autoprefixer({
            //browsers: ['last 2 versions'],
            cascade: false
         }))
        //.pipe(cssnano())
        //.pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function() {
    return gulp.src('src/js/main.js') 
        //.pipe(concat('scripts.js')) 
        .pipe(uglify()) 
        .pipe(rename({ suffix: '.min' })) 
        .pipe(gulp.dest('dist/js')); 
});

gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: 'src' 
        },
        notify: false 
    });
});

gulp.task('watch', ['browser-sync', 'css'], function () {
    gulp.watch('src/css/**/*.less', ['css']); 
    gulp.watch('src/**/*.html', browserSync.reload); 
    gulp.watch('src/js/**/*.js', browserSync.reload); 
  });

gulp.task('clean', function() {
    return del.sync('dist'); 
});

gulp.task('default', ['watch']);

gulp.task('build', ['html', 'fonts', 'imgs', 'useref']);



