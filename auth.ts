import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
 
const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
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
            async authorize(credentials, request) {
                if ((!credentials?.email || typeof credentials?.email !== 'string') || 
                    (!credentials?.password || typeof credentials?.password !== 'string')
                ) {
                    throw new Error('Invalid credentials')
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user || (user.hashedPassword || typeof user?.hashedPassword !== 'string')) {
                    throw new Error('Invalid credentials')
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password, 
                    user.hashedPassword
                );
                if (!isCorrectPassword) {
                    throw new Error('Incorrect password')
                }

                return user
            }
        })
    ],
    pages: {
        signIn: '/create-account'
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET
})