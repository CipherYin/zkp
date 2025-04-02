'use client'
import { useUserStore } from "@/store/userStore";
import { getAccessToken, getUserInfo } from "@/util/axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function OAuthCallBack() {
    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    const [error, setError] = useState<string | null>(null);
    const setUserInfo = useUserStore((state) => state.setUserInfo); 
    const router = useRouter()
    useEffect(() => {
        if (code) {
        getAccessToken(code)
            .then((response) => {
            const accessToken = response.data.access_token;
            return getUserInfo(accessToken);
            })
            .then((response) => {
            setUserInfo(response.data);
            router.push('/')
            })
            .catch((err) => {
            setError(`Error: ${err.message}`);
            });
        }
    }, [code]);
    return (
        <div className="w-full h-[40vw] flex flex-col items-center justify-center text-center bg-tutorialblue rounded-3xl py-5 px-4 2xl:py-16 2xl:px-40">
                {error && <p className="text-white text-3xl">{error}</p>}
                {!error && <p className="text-white text-3xl">Loading...</p>}
                
        </div>

    )
}