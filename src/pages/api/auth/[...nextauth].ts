import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const users = [
                    {
                        id: "1",
                        name: "Alice",
                        username: "admin",
                        password: "admin123",
                        role: "admin",
                    },
                    {
                        id: "2",
                        name: "Bob",
                        username: "agent",
                        password: "agent123",
                        role: "agent",
                    },
                    {
                        id: "3",
                        name: "Charlie",
                        username: "user",
                        password: "user123",
                        role: "user",
                    },
                ];

                const user = users.find(
                    (u) =>
                        u.username === credentials?.username &&
                        u.password === credentials?.password
                );

                if (user) return user;
                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.role = token.role;
                session.user.id = token.id;
            }
            return session;
        },
    },

    // Optionnel, pour debug
    debug: true,
});
