/// <binding BeforeBuild='clean, sass-compile' AfterBuild='min' Clean='clean' ProjectOpened='watch-sass' />
"use strict";

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  sassGlob = require("gulp-sass-glob"),
  browserSync = require("browser-sync").create(),
  runSequence = require("run-sequence");

gulp.task("sass-styles", function() {
  return gulp
    .src("scss/styles.scss")
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("css"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task("browserSync", function() {
  browserSync.init({
    injectChanges: true,
    notify: false,
    server: ["./"]
  });
});

gulp.task("watch", function() {
  runSequence("sass-styles", "browserSync");

  gulp.watch(["scss/**/*.scss"], () => runSequence("sass-styles"));
});
