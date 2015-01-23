module.exports = function (grunt) {

	// Load Grunt tasks declared in the package.json file
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            }
        },

        connect: {
            server: {
              options: {
                hostname: 'http://127.0.0.1',
                port: 4000,
                base: '_site',
                keepalive:true
              }
            }
        },

		open: {
			server: {
				path: '<%= connect.server.options.hostname %>:<%= connect.server.options.port %>'
			}
		},

        watch: {
          livereload: {
            files: [
                '_config.yml',
                'index.html',
                '_layouts/**',
                '_posts/**',
                '_includes/**',
				'_sass/**',
				'css/**',
                'index.html',
                '404.html'
            ],
            tasks: ['shell:jekyllBuild'],
            options: {
              livereload: true
            },
          },
        },

        express: {
            all: {
                options: {
                    port: '<%= connect.server.options.port %>',
                    hostname: '<%= connect.server.options.hostname %>',
                    bases: ['<%= connect.server.options.base %>'],
                    livereload: true
                }
            }
        }

        // sass: {
        // 	dist: {
        // 		options: {
        // 			style: 'compressed'
        // 		},
        // 		files: {
        // 			'css/main.scss',
        // 			'_sass/**'
        // 		}
        // 	},
        // 	dev: {
        // 		options: {
        // 			style: 'expanded'
        // 		},
        // 		files: {
        // 			'css/main.scss',
        // 			'_sass/**'
        // 		}
        // 	}
        // }

    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', [
        'shell:jekyllBuild',
        'express',
        'open',
        'watch'
    ]);
}