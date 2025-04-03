import { Suspense } from "react";
import OAuthCallBack from "./content";

export default function OAuthCallbackWithSuspense(){
    return (
      <Suspense fallback={<p className="text-white text-3xl">Loading...</p>}>
        <OAuthCallBack />
      </Suspense>
    );
  };