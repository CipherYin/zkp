'use client'
import { useUserStore } from "@/store/userStore";
import { getAccessToken, getUserInfo, getUserProfile, userLogin } from "@/util/axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function OAuthCallBack() {
    const searchParams = useSearchParams();

    const [code, setCode] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const setGalxeUserInfo = useUserStore((state) => state.setGalxeUserInfo); 
    const setZkpUserInfo = useUserStore((state) => state.setZkpUserInfo); 
    const setToken = useUserStore((state) => state.setToken); 

    const router = useRouter()
    useEffect(() => {
        const codeFromUrl = searchParams.get("code");
        setCode(codeFromUrl);
      }, [searchParams]);
    useEffect(() => {
        if (code) {
            getAccessToken(code)
              .then((response) => {
                const accessToken = response.data.access_token;
                console.log("AccessToken:", accessToken);
          
                return userLogin(accessToken).then((userLoginResponse) => {
                  console.log("UserLoginResponse:", userLoginResponse);
          
                  const token = userLoginResponse?.results?.token;
                  setToken(token)
                  console.log("ZKP Token:", token);
                  return getUserProfile(token).then((zkpUserInfo)=>{
                    console.log("ZKP User Info:", zkpUserInfo);
                    setZkpUserInfo(zkpUserInfo)
                    return getUserInfo(accessToken);
                  } )
                 
                });
              })
              .then((response) => {
                setGalxeUserInfo(response.data);
                router.push("/");
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