'use server';
import { auth } from "@/auth";
import prisma from '@/app/libs/prismadb'

export async function getSession() {
   return await auth()
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return "You're currently not logged in"
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email as string
            }
        })

        if (!currentUser) {
            return 'You need to sign up'
        }

        return currentUser

    } catch (error: any) {
        return 'You need to be logged in'
    }
}