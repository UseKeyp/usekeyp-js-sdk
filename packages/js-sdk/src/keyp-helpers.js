import React from "react";
import { signIn } from "next-auth/react";

const signInKeyp = (provider) => {
    signIn("keyp", undefined, `login_provider=${provider}`);
};

export { signInKeyp }
