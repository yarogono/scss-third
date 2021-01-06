import gulp from "gulp";
import del from "del";

// SCSS
import sass from "gulp-sass";
import minify from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";

// pug
import gpug from "gulp-pug";
import babel from "gulp-babel";

// js
import uglify from "gulp-uglify";

// live
import ws from "gulp-webserver";
import ghPages from "gulp-gh-pages";

sass.compiler = require("node-sass");

const routes = {
  pug: {
    watch: "src/**/*.pug",
    src: "src/index.pug",
    dest: "dist",
  },
  css: {
    watch: "src/scss/**/*.scss",
    src: "src/scss/styles.scss",
    dest: "dist/css",
  },
  js: {
    watch: "src/img.js",
    src: "src/img.js",
    dest: "dist",
  },
  reset: {
    src: "src/reset.css",
    dest: "dist/css",
  },
};

const styles = () =>
  gulp
    .src(routes.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.css.dest));

const gh = () => gulp.src("dist/**/*").pipe(ghPages());

const reset = () =>
  gulp.src(routes.reset.src).pipe(minify()).pipe(gulp.dest(routes.reset.dest));

const pug = () =>
  gulp.src(routes.pug.src).pipe(gpug()).pipe(gulp.dest(routes.pug.dest));

const js = () =>
  gulp
    .src(routes.js.src)
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(routes.js.dest));

const watch = () => {
  gulp.watch(routes.css.watch, styles);
  gulp.watch(routes.pug.watch, pug);
  gulp.watch(routes.js.watch, js);
};

const webserver = () => gulp.src("dist").pipe(ws({ livereload: true }));

const clean = () => del(["dist/styles.css", "dist/index.html", "dist/img.js"]);

// build delete for preventing conflict
const prepare = gulp.series([clean]);

// pug transcompile
const assets = gulp.series([reset, styles, pug, js]);

// excute webserver
const live = gulp.parallel([webserver, watch]);

// for build
export const build = gulp.series([prepare, assets]);

// for dev(webserver)
export const dev = gulp.series([build, live]);

// for deploy
export const deploy = gulp.series([build, gh, clean]);
