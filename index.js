'use strict';

var Client = require('./client');

function ApiPlugin(options) {
    var options = options;

    return {
        name: 'ApiPlugin',
        plugContext: function () {
            var client = new Client(options);

            return {
                plugActionContext: function (actionContext) {
                    actionContext.Api = client;
                },
                plugStoreContext: function (storeContext) {
                    storeContext.Api = client;
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

module.exports = ApiPlugin;
