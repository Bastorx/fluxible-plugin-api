# fluxible-plugin-api

Inspired by: https://github.com/Hairfie/fluxible-plugin-hairfie-api

Fluxible API Plugin
===========================

Install
-------

    npm install --save fluxible-plugin-api

```javascript

import ApiPlugin from 'fluxible-plugin-api';

app.plug(ApiPlugin({
    apiUrl: {api-url}
}));

```

Action Context
--------------

```javascript

function loadUser(context, { userId }) {
    return context.Api
        .get(`/users/${userId}`)
        .then(user => context.dispatch('RECEIVE_USER', user));
}

```

Store Context
-------------

```javascript

import BaseStore from 'fluxible/addons/BaseStore';

class UserStore extends BaseStore {

    static handlers = {
        RECEIVE_USER: 'onReceiveUser'
    }

    constructor(dispatcher) {
        super(dispatcher);

        this.users = {};
    }

    onReceiveUser(user) {
        this.users[user.id] = user;
    }

    getById(id) {
        const user = this.users[id];

        if (!user) {
            this.getContext().Api.get(`/users/${userId}`).then(user => {
                this.getContext().dispatch('RECEIVE_USER', user);
            });
        }

        return user;
    }

}

```
