//

const gulp = require("gulp"); // Load Gulp!
// Now that we've installed the terser package we can require it:
const terser = require("gulp-terser"),
  rename = require("gulp-rename");
sass = require("gulp-sass");
cssnano = require("gulp-cssnano");
autoprefixer = require("gulp-autoprefixer");
browserSync = require("browser-sync");

//This is for SASS, check your file-paths
gulp.task("scripts", function() {
  return gulp
    .src("./js/*.js")
    .pipe(terser())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest("./build/js"));
});

gulp.task("sass", function() {
  return (
    gulp
      //locates scss files
      //.src("./css/style.scss")
      .src("./sass/style.scss")
      //converts sass to css
      .pipe(sass())
      //adds prefixes for compatability
      .pipe(autoprefixer())
      //adds css to build dir
      //.pipe(gulp.dest("./build/css"))
      //minifies our CSS
      .pipe(cssnano())
      //renames our CSS files
      .pipe(rename("style.min.css"))
      .pipe(rename("style.css"))
      //adds our final output to build dir
      .pipe(gulp.dest("./build/css"))
    //syncs browser whenever a change is made and saved
    //.pipe(browserSync.stream())
  );
});

gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("js/*.js", gulp.series("scripts"));
  gulp.watch("sass/*.scss", gulp.series("sass"));
  gulp.watch("./html").on("change", browserSync.reload);
  gulp
    .watch(["build/css/*.css", "build/js/*.js"])
    .on("change", browserSync.reload);
});

// My function WATCH
// gulp.task("watch", function() {
//   gulp.watch("./css/style.scss", ["./build/css"]); // Наблюдение за sass файлами
// Наблюдение за другими типами файлов
//});

// End My Watch

gulp.task("default", gulp.series("watch"));
