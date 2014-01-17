/*
 * grunt-mocha-phantomjs
 * https://github.com/jdcataldo/grunt-mocha-phantomjs
 *
 * Copyright (c) 2013 Justin Cataldo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.',
        }
      }
    },
    mocha_phantomjs: {
      no_output: {
        options: {
          'reporter': 'dot'
        },
        files: {
          src: ['test/index.html']
        }
      },
      output: {
        options: {
          'reporter': 'dot',
          'output': 'results/result.txt'
        },
        files: {
          src: ['test/index.html']
        }
      },
      server: {
        options: {
          urls: ['http://localhost:8000/test/index.html'],
          'reporter': 'dot'
        }
      }
    },
    watch: {
      options: {
        spawn: false
      },
      mocha_phantomjs: {
        files: ['test/*.html'],
        tasks: ['mocha_phantomjs:output']
      }
    }
  });

  grunt.event.on('watch', function(action, filepath) {
    grunt.config('mocha_phantomjs.output', [filepath]);
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['jshint', 'connect', 'mocha_phantomjs', 'watch']);

};
