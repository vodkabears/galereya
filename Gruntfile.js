module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            options: {
                preserveComments: 'some'
            },
            galereya: {
                files: {
                    'dist/js/jquery.galereya.min.js': ['src/js/jquery.galereya.js']
                }
            }
        },

        copy: {
            galereya: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['css/jquery.galereya.css', 'css/jquery.galereya.ie.css', 'js/jquery.galereya.js', 'img/*'],
                        dest: 'dist/'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'copy']);
};