import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server/index.ts';

const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000',
        }),
    ],
});


const createdUser = await trpc.userCreate.mutate({ email: 'email2@emai.com' });

console.log('createdUser: ', createdUser);
