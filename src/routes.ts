import Router from 'koa-router';

const prefixRouter = {
  prefix: '/api',
};

const router = new Router(prefixRouter);

router.get('/', async (ctx) => {
  ctx.body = { message: 'Hello World' };
});

export { router };
