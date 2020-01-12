"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var jsmin = require("gulp-minify");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var webp = require("gulp-webp");
var posthtml = require("gulp-posthtml");
var htmlmin = require('gulp-htmlmin');
var include = require("posthtml-include");
var server = require("browser-sync").create();
var del = require("del");

gulp.task("style", function () {
  return gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(server.stream());
});

gulp.task("js", function () {
  return gulp.src("js/script.js")
    .pipe(plumber())
    .pipe(jsmin({
      ext:{
        min: ".min.js"
      }
    }))
    .pipe(gulp.dest("js"));
});

gulp.task("images", function () {
  return gulp.src("img/**/*.{png,jpg,svg}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
 .pipe(gulp.dest("img"));
});

gulp.task("webp", function () {
  return gulp.src("img/**/*.{png,jpg}")
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest("img"));
});

gulp.task("sprite", function () {
  return gulp.src("img/icon-*.svg")
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("img"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
  .pipe(posthtml([
    include()
  ]))
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(gulp.dest("source"));
});

// gulp.task("clean", function () {
//   return del("source");
// });
//
// gulp.task("copy", function () {
//   return gulp.src([
//     "source/fonts/**/*.{woff,woff2}",
//     "source/img/**",
//     "source/vendor/**"
//   ], {
//     base: "source"
//   })
//   .pipe(gulp.dest("source"));
// });

gulp.task("build", gulp.series(
  // "clean",
  // "copy",
  "style",
  // "js",
  // "sprite",
  "html"
));

gulp.task("server", function () {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("style", "refresh"));
  gulp.watch("source/js/*.js", gulp.series("js", "refresh"));
  // gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("start", gulp.series("build", "server"));