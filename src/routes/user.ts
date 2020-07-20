import * as Router from 'koa-router';
import User from '../dbs/models/user';

const router = new Router();

router.prefix('/user');

router.get('/:name', async (ctx) => {
    const result = await User.find({
        user_login: ctx.request.body.name
    });
    ctx.body = result;
});

router.post('/', async (ctx) => {
    const user = new User({
        user_login: ctx.request.body.user_login,
        user_pass: ctx.request.body.user_pass,
        user_registered: Date.now()
    });
    // 异步的捕获错误
    try {
        await user.save();
        // 成功返回0
        ctx.body = {
            code: 0
        };
    } catch (e) {
        // 错误先打印出来
        console.log(e);
        ctx.body = {
            code: -1
        };
    }
});

export = router;
