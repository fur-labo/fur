#!/usr/bin/env node


var fur = require('../../../lib'),
    async = require('async');

async.series([
    function (callback) {
        fur.favicon("fur-favicon.png", {
            "text": "F",
            "color": "e",
            "font": "af",
            "style": "circle",
            "format": "png"
        }, callback);
    },
    function (callback) {
        fur.banner('fur-banner.png', {
            "text": "FUR",
            "color": "e",
            "font": "af",
            "style": "default",
            "format": "png"
        }, callback);
    }
], function (err) {
    if (err) {
        console.error(err);
    }
});
