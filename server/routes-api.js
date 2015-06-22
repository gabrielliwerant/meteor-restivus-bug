Restivus.configure({
    useAuth: true,
    prettyJson: true
});

Restivus.addRoute('foo', {authRequired: true}, {
    get: function ()
    {
        return {
            statusCode: 200,
            body: {message: 'bar'}
        };
    }
});
