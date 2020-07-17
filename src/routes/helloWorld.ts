import Router = require('koa-router');

const router = new Router();

router.get('/abc', async (ctx) => {
    ctx.body = {
        a: '123'
    };
});

export = router;
