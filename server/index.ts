import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { router } from './trpc.ts';
import { routes } from './routes.ts';

const appRouter = router(routes);

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
    router: appRouter,
});

server.listen(3000);

console.log('Server listen on the port 3000');
