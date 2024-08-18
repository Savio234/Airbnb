import { signIn } from "@/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";


// export async function POST(request: NextApiRequest, res: NextApiResponse) {
//     const { email, password } = request.body;

//     const response = await signIn("credentials", {
//         redirect: false,
//         email,
//         password
//     })

//     if (response?.error) {
//         return res.status(401).json({message: response.error})
//     }

//     return res.status(200).json({message: 'Login succesful'})

// }

export async function POST(request: Request) {
    const data = await request.json();
    const { email, password } = data;

    const response = await signIn("credentials", {
        redirect: false,
        email,
        password
    })

    if (response?.error) {
        return NextResponse.json({message: response.error})
    }

    return NextResponse.json({message: 'Login succesful', data})
}