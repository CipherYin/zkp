import { UserInfoResponse } from "@/util/axios";
import create from "zustand";
import { persist } from "zustand/middleware";

interface GalxeUserInfo {
  DiscordUserID: string;
  DiscordUsername: string;
  EVMAddress: string;
  Email: string;
  GithubUserID: string;
  GithubUsername: string;
  SolanaAddress: string;
  TwitterUserID: string;
  TwitterUsername: string;
}


interface UserStore {
  token: string | null;
  galxeUserInfo: GalxeUserInfo | null;
  zkpUserInfo: UserInfoResponse | null;
  setToken: (token:string)=>void;
  setZkpUserInfo: (zkpUserInfo: UserInfoResponse)=>void;
  setGalxeUserInfo: (galxeUserInfo: GalxeUserInfo) => void;
  clearGalxeUserInfo: () => void;
  clearZkpUserInfo: () => void;
  clearToken: ()=>void;

}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      token: null,
      galxeUserInfo: null, 
      zkpUserInfo: null,
      setToken: (token:string) => set({token}),
      setZkpUserInfo: (zkpUserInfo: UserInfoResponse) => set({ zkpUserInfo }), 
      setGalxeUserInfo: (galxeUserInfo: GalxeUserInfo) => set({ galxeUserInfo }), 
      clearGalxeUserInfo: () => set({ galxeUserInfo: null }),
      clearZkpUserInfo: () => set({ zkpUserInfo: null }),
      clearToken: ()=>set({token:null})
    }),
    {
      name: "user-storage", 
      getStorage: () => localStorage, 
    }
  )
);
