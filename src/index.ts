import * as Koa from 'Koa';
import * as bodyparser from 'koa-bodyparser';

import * as mongoose from 'mongoose';
import { REDIS_CONF, MONGO_CONF } from './dbs/db';

import * as user from './routes/user';

const app = new Koa();

app.use(
    bodyparser({
        enableTypes: ['json', 'form', 'text']
    })
);

mongoose.connect(MONGO_CONF.getDbs(), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(user.routes());
app.use(user.allowedMethods());

export = app;
