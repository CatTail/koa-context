# koa-context [![NPM version][npm-image]][npm-url] [![build status][travis-image]][travis-url] [![Test coverage][coveralls-image]][coveralls-url]

> Extend koa context

## Installation

    npm install --save koa-context

## Usage

With file `context/csrf.js`

    module.exports = {
        csrf: function() {
            // blanblanblan
        },
        assertCSRF: function() {
            // blanblanblan
        },
    };

We can't extend context by

    var app = require('koa')();
    var context = require('koa-context');
    context(app, __dirname + '/context');

    app.use(function* () {
        this.csrf();
    });

## License

MIT

[npm-image]: https://img.shields.io/npm/v/koa-context.svg?style=flat
[npm-url]: https://npmjs.org/package/koa-context
[travis-image]: https://img.shields.io/travis/CatTail/koa-context.svg?style=flat
[travis-url]: https://travis-ci.org/CatTail/koa-context
[coveralls-image]: https://img.shields.io/coveralls/CatTail/koa-context.svg?style=flat
[coveralls-url]: https://coveralls.io/r/CatTail/koa-context?branch=master
