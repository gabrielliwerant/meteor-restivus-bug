## Demonstration of a bug present in the restivus meteor package

https://github.com/kahmali/meteor-restivus

This repo is a fresh install of meteor with the restivus package. Then we add a minimal RESTful interface in `routes-api.js` and add authentication.

To reproduce bug:

1. Clone repo
2. Start meteor
3. Visit api/foo

We get an output of the following:

  TypeError: Not a string or buffer at Hash.update (crypto.js:240:17) at Object.Accounts._hashLoginToken (packages/accounts-base/accounts_server.js:577:1) at [object Object].Restivus.config.auth.user (packages/nimble:restivus/lib/restivus.coffee:15:27) at Route.Route._authenticate (packages/nimble:restivus/lib/route.coffee:159:34) at Route.Route._authAccepted (packages/nimble:restivus/lib/route.coffee:146:8) at Route.Route._callEndpoint (packages/nimble:restivus/lib/route.coffee:124:9) at [object Object].Router.route.action (packages/nimble:restivus/lib/route.coffee:46:31) at boundNext (packages/iron:middleware-stack/lib/middleware_stack.js:251:1) at runWithEnvironment (packages/meteor/dynamics_nodejs.js:108:1) at packages/meteor/dynamics_nodejs.js:121:1

Notice that if we remove `{authRequired: true}` or set it to `false`, the bug disappears.
