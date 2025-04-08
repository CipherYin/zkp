import axios from "axios";
import { compressImageTo15KB } from "./utils";

export async function getAccessToken(code: string) {
  return axios.post(
    "https://api.galxe.com/oauth/auth/2/token",
    `client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}&code=${code}&grant_type=authorization_code`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
}

export async function getUserInfo(accessToken: string) {
  return axios.get("https://api.galxe.com/oauth/api/2/user?scope=Email%20Twitter%20Discord%20Github%20EVMAddress%20SolanaAddress", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

interface ResultsProps{
  token: string
}
interface UserLoginResponse {
  code: number;
  msg: string;
  results:ResultsProps
}
export async function userLogin(token: string):Promise<UserLoginResponse> {
  const response = await axios.get<UserLoginResponse>(
    "/api/api/v1/user/login",
    {
      params: {
        access_token: token,
      },
    }
  );

  return response.data;
}

export interface UserInfoResponse {
  code: number;
  msg: string;
  results: {
    staked_10u: boolean;
    staked_1000u: boolean;
    staked_5000u: boolean;
    image: boolean;
    identity_code: string;
  } |null;
}

export async function getUserProfile(token: string): Promise<UserInfoResponse> {
  const res = await axios.get<UserInfoResponse>(
    '/api/api/v1/user/info',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
}
export async function uploadUserImage(file: File, token: string): Promise<UserInfoResponse> {
  const compressedFile = await compressImageTo15KB(file)

  const formData = new FormData();
  formData.append("image", compressedFile);

  const res = await axios.post<UserInfoResponse>("/api/api/v1/user/image", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}