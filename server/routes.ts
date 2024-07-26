import { randomUUID } from 'crypto';
import { z } from 'zod';
import { Users } from './data.ts';
import { publicProcedure } from './trpc.ts';


export const routes = {
    userList: publicProcedure
        .query(async () => {
            return Users;
        }),
    userById: publicProcedure
        .input(z.string())
        .query(async (opts: { input: string }) => {
            const { input } = opts;

            const user = Users.find(user => user.id === input);

            return user;
        }),
    userCreate: publicProcedure
        .input(z.object({ email: z.coerce.string().email() }))
        .mutation(async (opts: { input: { email: string } }) => {
            const { email } = opts.input;

            const user = {
                id: randomUUID(),
                email,
            };

            Users.push(user);

            return user;
        }),
}
