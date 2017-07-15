module.exports = function() {
    var clients = './src/client/';
    var config = {
        temp: './.tmp',
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        less: clients + 'styles/styles.less'
    };
    return config;
};