'use strict';
var should = require('should');
var context = require('..');

describe('koa-context', function() {
    it('should load function module', function() {
        var app = {context: {}};
        context(app, __dirname + '/fixtures/function');
        should.ok(app.context.name);
    });

    it('should load object module', function() {
        var app = {context: {}};
        context(app, __dirname + '/fixtures/object');
        should.ok(app.context.key1);
        should.ok(app.context.key2);
        should(app.context.name).not.ok;
    });

    it('should throw if module invalid', function() {
        var app = {context: {}};
        (function() {
            context(app, __dirname + '/fixtures/invalid');
        }).should.throw();
    });

    it('should throw if context already exist', function() {
        var app = {context: {name: function(){}}};
        (function() {
            context(app, __dirname + '/fixtures/function');
        }).should.throw();
    });
});
