import * as Koa from 'Koa';
import * as bodyparser from 'koa-bodyparser';

import * as helloWorld from './routes/helloWorld';

const app = new Koa();

app.use(
    bodyparser({
        enableTypes: ['json', 'form', 'text']
    })
);

app.use(helloWorld.routes());
app.use(helloWorld.allowedMethods());

export = app;
