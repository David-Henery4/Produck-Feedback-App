"use client";
import { signIn } from "next-auth/react";
import { GoogleLogo, GitHubLogo } from "public/assets/providers";

const ProvidersSignIn = ({ providers }) => {
  return (
    <div className="w-full grid gap-4">
      {Object?.values(providers)
        .filter((pro) => pro.id === "google" || pro.id === "github").map((provider) => {
          const isGoogle = provider.id === "google";
          const isGitHub = provider.id === "github";
          return (
            <div key={provider.name} className="w-full">
              <button
                onClick={() => signIn(provider.id)}
                className={`px-6 py-7 w-full rounded-[10px] inline-flex items-center justify-center font-medium hover:scale-105 ${
                  isGoogle && "bg-offWhite dark:bg-navy text-black/75 dark:text-white/75"
                } ${isGitHub && "bg-black text-white/75"}`}
              >
                <span className="mr-auto">
                  {isGitHub && <GitHubLogo />}
                  {isGoogle && <GoogleLogo />}
                </span>
                <span className="mr-auto">Sign in with {provider.name}</span>
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ProvidersSignIn;
