import argon2 from 'argon2'
import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const response = await request.json();
    const { email, name, password } = response

    const hashedPassword = await argon2.hash(password);

    const user = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword,
        }
    });

    return NextResponse.json(user)
}