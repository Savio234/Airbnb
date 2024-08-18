import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import argon2 from 'argon2'
 
const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
    // export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [ 
        Google, GitHub,
        // Google({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string
        // }), 
        // GitHub({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string
        // }),
        CredentialsProvider({
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials')
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email as string
                    }
                })

                // if (!user || (user.hashedPassword || typeof user?.hashedPassword !== 'string' || Buffer)) {
                if (!user || !user?.hashedPassword) {
                    throw new Error('Invalid credentials')
                }

                const isCorrectPassword = await argon2.verify(
                    user?.hashedPassword as string,
                    credentials?.password as string
                );
                if (!isCorrectPassword) {
                    throw new Error('Incorrect password')
                }

                return user
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET
})