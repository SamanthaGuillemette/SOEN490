import { Models } from "appwrite";
import React, { createContext, useState } from "react";
import api from "../appwrite/api";

// The "shape" of our AuthContext data
export type AuthContextData = {
  sessionToken?: Models.Session | null;
  loggedIn: boolean;
  loading: boolean;
  emailIsVerified: boolean;
  signUp: (username: string, email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  getSessionStatus: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

/*
 *  This 'AuthProvider' will be wrapped around the root of our app to provide
 *  access to states/functions inside the AuthContext data object.
 *  ==> Look at type "AuthContextData"
 */
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [sessionToken, setSessionToken] = useState<Models.Session | null>(null);
  const [loggedIn, setLoginStatus] = useState<boolean>(false);
  const [loading, setLoadingStatus] = useState<boolean>(false);
  const [emailIsVerified, setVerifiedStatus] = useState<boolean>(false);

  const getSessionStatus = () => {
    const status = api.getAccount();
    status.then(
      (response) => {
        console.log(`===> Session retrieved: ${JSON.stringify(response)}`);
        setLoginStatus(true);
      },
      (error) => {
        setLoginStatus(false);
        console.log(`===> Session not found: ${error}`);
      }
    );
  };

  const signIn = (email: string, password: string) => {
    const login = api.createSession(email, password);
    setLoadingStatus(true);

    login.then(
      (response) => {
        setSessionToken(response);
        setLoadingStatus(false);
        console.log(`===> Session created: ${JSON.stringify(response)}`);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const signOut = () => {
    if (sessionToken) {
      const logout = api.deleteCurrentSession();
      setLoadingStatus(true);

      logout.then(
        () => {
          setLoadingStatus(false);
          setLoginStatus(false);
          setSessionToken(null);
        },
        (error) => {
          console.log(`===> Logout error: ${error}`);
        }
      );
    } else {
      console.log("===> No session id found");
    }
  };

  const signUp = async (username: string, email: string, password: string) => {
    try {
      const accountObj = await api.createAccount(email, password, username);

      //a session needed to be created in order to send the verifiation email.
      const sessionObj = await api.createSession(email, password);
      const emailVerificationObj = await api.createEmailVerification();
      setVerifiedStatus(true);

      console.log(
        accountObj ??
          `===> Account created: ${JSON.stringify(
            accountObj
          )} and Verification email sent!`
      );
      Promise.all([accountObj, sessionObj, emailVerificationObj]);
    } catch (error) {
      console.log("Sign up error: ", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        sessionToken,
        loggedIn,
        loading,
        emailIsVerified,
        signIn,
        signOut,
        signUp,
        getSessionStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
