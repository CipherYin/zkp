import create from "zustand";
import { persist } from "zustand/middleware";

interface UserInfo {
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
  userInfo: UserInfo | null;
  setUserInfo: (userInfo: UserInfo) => void;
  clearUserInfo: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userInfo: null, 
      setUserInfo: (userInfo: UserInfo) => set({ userInfo }), 
      clearUserInfo: () => set({ userInfo: null }),
    }),
    {
      name: "user-storage", 
      getStorage: () => localStorage, 
    }
  )
);
