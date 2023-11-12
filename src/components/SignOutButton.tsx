"use client"

import { FC, useState } from "react";
import Button from "@/ui/Button";
import { signOut } from "next-auth/react";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
    const [isLoading , setIsLoading] = useState<boolean>(false);

    const signInWithGoogle = async () => {
        setIsLoading(true);
        
        try {
            await signOut()
        } catch (error) {
            toast({
                title: 'Error signing out',
                message: 'Please try again later',
                type: 'error',
            })
        }
    }

    return <Button onClick={signUserOut} isLoading={isLoading}>
        Sign out
    </Button>
}

export default SignOutButton;

function toast(arg0: { title: string; message: string; type: string; }) {
    throw new Error("Function not implemented.");
}
