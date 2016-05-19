'use strict';

var Client = require('./client');

function apiPlugin(options) {
    var options = options;

    return {
        name: 'apiPlugin',
        plugContext: function () {
            var client = new Client(options);

            return {
                plugActionContext: function (actionContext) {
                    actionContext.api = client;
                },
                plugStoreContext: function (storeContext) {
                    storeContext.api = client;
                }
            };
        },
        dehydrate: function () {
            return { options: options };
        },
        rehydrate: function (state) {
            options = state.options;
        }
    };
}

module.exports = apiPlugin;
