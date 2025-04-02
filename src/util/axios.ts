import axios from "axios";

export function getAccessToken(code: string) {
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

export function getUserInfo(accessToken: string) {
  return axios.get("https://api.galxe.com/oauth/api/2/user?scope=Email%20Twitter%20Discord%20Github%20EVMAddress%20SolanaAddress", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
