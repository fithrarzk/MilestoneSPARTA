"use client";
import React from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UserProfile({params}: any){
    
    const router = useRouter();
    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout successful");
            router.push("/login");
        } catch (error:any) {
            console.log("Logout failed", error.message);
            toast.error(error.message);
        }
    }

    return(

    <div>    
        <h1>Test Profile Id: {params.id}</h1>
        <h2>Nomor telepon: 08123456789</h2>
        <button onClick={logout}>Logout</button>
    </div>
    
    )
    
}