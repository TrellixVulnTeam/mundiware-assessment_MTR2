var gulp = require("gulp"),
	imagemin = require("gulp-imagemin"),
	concat = require("gulp-concat"),
	babel = require("gulp-babel"),
	webpack = require("webpack-stream"),
	autoprefixer = require("gulp-autoprefixer"),
	cleanCSS = require("gulp-clean-css"),
	sass =require("gulp-sass");

	sass.compiler = require("node-sass");

// Assets
gulp.task("build-img", () => 
	gulp.src("public/assets/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest("dist/public/assets"))
);

// Javascript
gulp.task("build-js", () =>
	gulp
		.src("src/scripts/*.js")
		.pipe(
			babel({
				presets: ["@babel/preset-env"],
				plugins: ["@babel/transform-runtime"],
			})
		)
		.pipe(
			webpack({
				output: {
					filename: "bundle.js",
				},
			})
		)
		.pipe(concat("scripts.min.js"))
		.pipe(gulp.dest("dist/src/scripts"))
);

// CSS
gulp.task("build-css", () =>
	gulp
		.src("src/styles/*.css")
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['last 99 versions'],
				cascade: false
			})
		)
		.pipe(
			cleanCSS({
				compatibility: "ie8",
			})
		)
		.pipe(concat("styles.min.css"))
		.pipe(gulp.dest("dist/src/styles"))
);

// Monitor
function defaultTask(cb) {
	gulp.watch("src/scripts/*.js", gulp.series("build-js"));
	gulp.watch("src/styles/*.css", gulp.series("build-css"));
	cb();
}

exports.default = defaultTask;
