

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { instance } from "@/axios/axiosInstance";

interface IUser {
    fName: string;
    lName: string;
    phone: string;
    email: string;
}

const AccountPage: React.FC = () => {
    const router = useRouter();
    const token = Cookies.get("accessKey");

    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        if (!token) {
            router.push("/login");
        }
    }, [token, router]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await instance.get("UserInfo");
                if (response?.data?.message) {
                    setUser(response?.data?.message);
                }
            } catch (error) {
                console.error("Failed to fetch User", error);
                setUser(null);
            }
        };
        fetchUser();
    }, []);

    if (!user) {
        return <p>Loading user information...</p>;
    }

    return (
        <div className="container">
            <div className="text-center py-20 md:py-40">
                <h1 className="text-2xl md:text-4xl font-semibold md:font-medium">Account</h1>
                <p className="text-sm font-normal py-2">
                    <Link href="/">Home</Link> &#x2022; <span>Account</span>
                </p>
            </div>
            <div>
                <h1 className="text-4xl font-bold">Account</h1>
                <ul className="py-4 text-sm font-normal">
                    <li className="flex flex-row gap-10 py-4 border-b-2">
                        <span className="w-16 md:w-28 font-semibold">My Name:</span>
                        <span>{user.fName} {user.lName}</span>
                    </li>
                    <li className="flex flex-row gap-10 py-4 border-b-2">
                        <span className="w-16 md:w-28 font-semibold">Email:</span>
                        <span>{user.email}</span>
                    </li>
                    <li className="flex flex-row gap-10 py-4 border-b-2">
                        <span className="w-16 md:w-28 font-semibold">Phone:</span>
                        <span>{user.phone}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AccountPage;
