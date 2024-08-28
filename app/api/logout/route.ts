// import { signOut } from "@/auth";
import { getSession, signOut } from 'next-auth/react'
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const data = await request.json();
    const session = await getSession();
    
    if(!session) {
        return NextResponse.json({message: 'Not authenticated'})
    }

    return NextResponse.json(signOut())
}