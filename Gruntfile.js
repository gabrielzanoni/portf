// Generated on 2013-07-28 using generator-angular 0.3.1
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {

  // ----
  // General grunt config
  // ----

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var yeomanConfig = {
    tmp: '.tmp',
    src: 'app',
    dist: 'www'
  };

  try {
    yeomanConfig.src = require('./bower.json').appPath || yeomanConfig.src;
  } catch (e) {}

  grunt.initConfig({
    yeoman: yeomanConfig,

    // ---
    // Server only tasks
    // ---
    watch: {
      coffee: {
        files: ['<%= yeoman.src %>/scripts/{,**/}*.coffee'],
        tasks: ['coffee:build']
      },
      jade: {
        files: ['<%= yeoman.src %>/*.jade', '<%= yeoman.src %>/views/pages/{,**/}*.jade'],
        tasks: ['jade:build']
      },
      html2js: {
        files: ['<%= yeoman.src %>/views/components/{,**/}*.jade', '<%= yeoman.src %>/views/tq/{,**/}*.jade'],
        tasks: ['jade', 'html2js', 'useminPrepare', 'copy:prebuild']
      },
      stylus: {
        files: ['<%= yeoman.src %>/{,**/}*.styl'],
        tasks: ['TO_BE_REPLACED_BY_SERVER_TASK']
      },
      coffeeTest: {
        files: ['test/spec/{,**/}*.coffee'],
        tasks: ['coffee:test']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= yeoman.tmp %>/{,**/}*.html',
          '<%= yeoman.tmp %>/styles/{,**/}*.js',
          '<%= yeoman.tmp %>/scripts/{,**/}*.css',
          '<%= yeoman.app %>/assets/{,**/}*.{png,jpg,jpeg,gif,webp,svg,ttf}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '127.0.0.1'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, yeomanConfig.tmp),
              mountFolder(connect, yeomanConfig.src)
            ];
          }
        }
      },
      test: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, yeomanConfig.tmp),
              mountFolder(connect, 'test')
            ];
          }
        }
      },
      dist: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, yeomanConfig.tmp)
            ];
          }
        }
      }
    },
    open: {
      server: {
        url: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>'
      }
    },

    // ---
    // Build only tasks
    // ---
    stylus: {
      build: {
        options: {
          // paths: ['{,*/}*.styl'],
        },
        files: [{
            expand: true,
            cwd: '<%= yeoman.src %>',
            dest: '.tmp',
            src: [
              'styles/pages/{,**/}*.styl'
            ],
            ext: '.css'
        }]
      }
    },
    coffee: {
      build: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/scripts',
          src: '{,**/}*.coffee',
          dest: '<%= yeoman.tmp %>/scripts',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '{,**/}*.coffee',
          dest: '<%= yeoman.tmp %>/spec',
          ext: '.js'
        }]
      }
    },
    jade: {
      build: {
        options: {
            pretty: true
        },
        files: [{
            expand: true,
            cwd: '<%= yeoman.src %>',
            dest: '<%= yeoman.tmp %>',
            src: '{,**/}*.jade',
            ext: '.html'
        }]
      }
    },
    imagemin: {
      build: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/assets/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.tmp %>/assets/images'
        }]
      }
    },
    svgmin: {
      build: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/assets/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.tmp %>/assets/images'
        }]
      }
    },
    html2js: {
      build: {
        options: {
          base: "<%= yeoman.tmp %>",
          module: "app.templates"
        },
        files: [{
            expand: false,
            // cwd: '<%= yeoman.tmp %>',
            dest: '<%= yeoman.tmp %>/scripts/templates.js',
            src: [
              '<%= yeoman.tmp %>/views/components/{,*/}*.html',
              '<%= yeoman.tmp %>/views/tq/{,*/}*.html'
            ],
            ext: '.js'
        }]
      }
    },
    useminPrepare: {
      html: '<%= yeoman.tmp %>/index.html',
      options: {
        dest: '<%= yeoman.tmp %>'
      }
    },

    // ---
    // Deploy only tasks
    // ---
    ngmin: {
      deploy: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/scripts',
          src: '*.js',
          dest: '<%= yeoman.dist %>/scripts'
        }]
      }
    },
    uglify: {
      deploy: {
        files: {
          '<%= yeoman.dist %>/scripts/scripts.js': [
            '<%= yeoman.tmp %>/scripts/scripts.js'
          ]
        }
      }
    },
    rev: {
      deploy: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
          ]
        }
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    htmlmin: {
      predeploy: {
        options: {
          removeComments: true,
          // removeCommentsFromCDATA: true,
          // removeCDATASectionsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          // collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          // useShortDoctype: true,
          removeEmptyAttributes: true,
          // removeOptionalTags: true,
          // removeEmptyElements: true,
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: '{,*/}*.html',
          dest: '<%= yeoman.dist %>'
        }]
      },
      afterdeploy: {
        options: {
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: [
            '{,*/}*.html',
            'views/{,**/}*.html',
          ],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    'string-replace': {
      css: {
        files: {
          '<%= yeoman.dist %>/styles/main.css':'<%= yeoman.dist %>/styles/main.css'
        },
        options: {
          replacements: [{
            pattern: /url\(\"(\.\.\/)+/ig,
            replacement: 'url("./'
          }]
        }
      }
    },

    // ---
    // Mixed Tasks
    // ---
    clean: {
      build: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.tmp %>',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '<%= yeoman.tmp %>',
      afterdeploy: {
        files: [{
          src: [
            '<%= yeoman.tmp %>',
            '<%= yeoman.dist %>/bower_components',
            '<%= yeoman.dist %>/www',
            '<%= yeoman.dist %>/styles/pages',
          ]
        }]
      },
      predeploy: {
        files: [{
          src: [
            '<%= yeoman.dist %>/scripts',
            // '<%= yeoman.dist %>/styles/{,**/}*.css',
          ]
        }]
      }
    },
    copy: {
      prebuild: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.src %>',
          dest: '<%= yeoman.tmp %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'bower_components/**/*',
          ]
        }, 
        {
          expand: true,
          cwd: '<%= yeoman.src %>',
          dest: '<%= yeoman.tmp %>',
          src: [
            'assets/**/*'
          ]
        },
        {
          expand: true,
          cwd: '<%= yeoman.tmp %>',
          dest: '<%= yeoman.tmp %>',
          src: [
            '{,**/}*.html',
            '{,**/}*.js', //will be erased before deploy
            '{,**/}*.css', //will be erased before deploy
          ]
        }]
      },
      afterbuild: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.tmp %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '**/*',
          ]
        }]
      },
      predeploy: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.tmp %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '{,**/}*.css',
          ]
        }]
      }
    },


    // ---
    // Unused Tasks
    // ---

    // Put files not handled in other tasks here
    concurrent: {
      server: [
        'coffee:build',
        'jade',
        'imagemin',
        'svgmin',
        'html2js',
        'useminPrepare',
        'copy:prebuild'
      ],
      test: [
        'coffee'
      ],
      dist: [
        'coffee',
        'jade',
        'stylus',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    cdnify: {
      build: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.src %>/scripts/{,*/}*.js'
      ]
    }
  });

  grunt.registerTask('server', function (company, environment) {

    var env = environment || 'debug';

    var watch_config = grunt.config.get('watch');
    grunt.config.set('watch', watch_config);

    return grunt.task.run([
      'build:' + env,
      'connect:livereload',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    //'concurrent:test',
    'coffee',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('deploy', function (company, environment) {

    var env = environment || 'debug';

    grunt.task.run([
      'build:' + env,
      'clean:predeploy', //remove current non-minified js files from dist folder
      'concat',
      'copy:predeploy', 
      // 'cssmin',
      'string-replace:css',
      'ngmin',
      'uglify',
      'rev',
      // 'cdnify',
      'htmlmin:predeploy',
      'usemin', //Update the HTML to reference our concat/min/revved script files
      'htmlmin:afterdeploy',
      'clean:afterdeploy'
    ]);
  });

  grunt.registerTask('build', function (company, environment) {

    var env = environment || 'debug'; //TODO: use environment to change build settings, config files to be loaded, etc

    grunt.task.run([
      'clean',
      'stylus:',
      'coffee:build',
      'jade',
      'imagemin',
      'svgmin',
      'html2js',
      'useminPrepare',
      'copy:prebuild', //copies everything to tmp folder
      'copy:afterbuild', // mirrors tmp folder to www
    ]);
  });

};
