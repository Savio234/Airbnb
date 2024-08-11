import bcrypt from 'bcrypt'
import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const response = await request.json();
    const { email, name, password } = response

    const hashedPassword = await bcrypt.hash (password, 12);

    const user = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword,
        }
    });

    return NextResponse.json(user)
}