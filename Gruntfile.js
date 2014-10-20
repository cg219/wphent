var path = require("path");

module.exports = function(grunty){

	var bowerScripts = [];
	var uglifyScripts = [];

	grunty.initConfig({
		pkg: grunty.file.readJSON("package.json"),
		less: {
			all: {
				options: {
					paths: ["public/css"]
				},
				files: {
					"public/css/styles.css" : "less/styles.less"
				}
			}
		},
		clean: {
			build: ["js/libs"]
		},
		copy: {
			bower: {
				files: [{
					expand: true,
					src: bowerScripts,
					dest: "js/libs/",
					filter: "isFile",
					flatten: true
				}]
			},
			jsDev: {
				files: [{
					expand: true,
					src: ["js/theme/*"],
					dest: "public/js/",
					filter: "isFile",
					flatten: true
				}]
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			libs: {
				files: {
					"public/js/libs.min.js" : uglifyScripts
				}
			}
		},
		jade: {
			main: {
				options: {
					pretty: true,
					data: false
				},
				files: [{
					src: "views/*.jade",
					dest: "public",
					expand: true,
					ext: ".html",
					flatten: true
				}]
			}
		},
		watch: {
			options: {
				spawn: false
			},
			scripts: {
				files: ["js/theme/*.js"],
				tasks: ["copy:jsDev"]
			},
			pages: {
				files: ["views/*"],
				tasks: ["jade"]
			},
			css: {
				files: ["less/*"],
				tasks: ["less"]
			}
		},
		focus: {
			all: {
				include: ["scripts", "pages", "css"]
			}
		}

	})

	grunty.loadNpmTasks("grunt-contrib-clean");
	grunty.loadNpmTasks("grunt-contrib-copy");
	grunty.loadNpmTasks("grunt-contrib-cssmin");
	grunty.loadNpmTasks("grunt-contrib-uglify");
	grunty.loadNpmTasks("grunt-contrib-watch");
	grunty.loadNpmTasks("grunt-contrib-less");
	grunty.loadNpmTasks("grunt-contrib-jade");
	grunty.loadNpmTasks("grunt-focus");

	grunty.registerTask("default", ["clean:build", "copy:bower", "uglify:libs", "focus:all"]);
}