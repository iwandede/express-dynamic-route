/**
 * Konfigurasi
 */
 
var fs = require('fs');

module.exports = {
    
    token: 'as#d40pej^rmt;4wwqc4fp3',
    
    sys: {
        model: 'routes',
        views: 'views',
        static: 'assets',
        controller: '',
    },
    
    site: {
        host: '127.0.0.1',
        port: 3000,
        https: false,
        //key: fs.readFileSync('/etc/ssl/ssl.key'),
        //crt: fs.readFileSync('/etc/ssl/ssl.crt'),
        title: 'Fleet Web Control'
    }
};
