## Demonstration of a bug present in the restivus meteor package

https://github.com/kahmali/meteor-restivus

This repo is a fresh install of meteor with the restivus package. Then we add a minimal RESTful interface in `routes-api.js` and add authentication.

To reproduce bug:

1. Clone repo
2. Start meteor
3. Visit api/foo

Notice that if we remove `{authRequired: true}` or set it to `false`, the bug disappears.
