'use strict';
var moder = require('moder');

module.exports = function(app, dirname) {
    var modules = moder(dirname, {lazy: false});
    var context = app.context;
    var file, module, key;
    for (file in modules) {
        module = modules[file];
        if (typeof module === 'function') {
            set(context, file, module);
        } else if (typeof module === 'object'){
            for (key in module) {
                set(context, key, module[key]);
            }
        } else {
            throw new Error('Invalid module');
        }
    }
};

function set(context, key, value) {
    if (context[key]) {
        throw new Error('Context ' + key + 'already exist');
    }
    context[key] = value;
}
