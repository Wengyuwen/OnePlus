const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");


gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})

gulp.task("htmla",function(){
    return gulp.src("html/*.html")
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest("dist/html"))
    .pipe(connect.reload());
})

gulp.task("images",function(){
    return gulp.src("images/**/*.{jpg,png,svg}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

gulp.task("scripts",function(){
    return gulp.src(["js/*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

gulp.task("data",function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

const sass = require("gulp-sass");
sass.compiler = require('node-sass');
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

gulp.task("scss",function(){
    return gulp.src("stylesheet/**/*.{scss,css}")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(function(path){
        path.basename += ".min"
    }))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

gulp.task("build",["copy-html","images","scripts","data","scss","htmla"],function(){
    console.log("项目建立成功")
})

gulp.task("watch",function(){
    gulp.watch("*.html",["copy-html"])
    gulp.watch("images/**/*.{jpg,png,svg}",["images"])
    gulp.watch(["*.json","!package.json"],["data"])
    gulp.watch(["js/*.js","!gulpfile.js"],["scripts"])
    gulp.watch("stylesheet/**/*.{scss,css}",["scss"])
    gulp.watch("html/*.html",["htmla"])
})

const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:7789,
        livereload:true
    })
})

gulp.task("default",["watch","server"]);
