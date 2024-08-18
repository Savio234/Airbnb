import { signIn } from "@/auth";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (request: any) => {
    const { email, password } = request.query;

    const response = await signIn('credentials', {
        redirect: false,
        email,
        password
    });

    if (response?.error) {
        return {
            props: {
                error: response?.error
            }
        }
    }

    return {
        props: {},
        redirect: {
            destination: '/',
            permanent: false,
        }
    }
}