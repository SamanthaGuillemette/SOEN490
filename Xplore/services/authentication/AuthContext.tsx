import { Models } from "appwrite";
import React, { createContext, useState } from "react";
import api from "../appwrite/api";

// The "shape" of our AuthContext data
export type AuthContextData = {
  sessionToken?: Models.Session | null;
  accountToken?: Models.Account<any> | null;
  loggedIn: boolean;
  loading: boolean;
  signUp: (username: string, email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  getSessionStatus: (sessionId: string) => void;
  getAccountStatus: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

/*
 *  This 'AuthProvider' will be wrapped around the root of our app to provide
 *  access to states/functions inside the AuthContext data object.
 *  ==> Look at type "AuthContextData"
 */
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [sessionToken, setSessionToken] = useState<Models.Session | null>(null);
  const [accountToken, setAccountToken] = useState<Models.Account<any> | null>(
    null
  );
  const [loggedIn, setLoginStatus] = useState<boolean>(false);
  const [loading, setLoadingStatus] = useState<boolean>(false);
  //const [emailIsVerified, setVerifiedStatus] = useState<boolean>(false);

  const getSessionStatus = (sessionId: string) => {
    const status = api.getSession(sessionId);
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

  const getAccountStatus = () => {
    const status = api.getAccount();
    status.then(
      (response) => {
        console.log(`===> Account data retrieved: ${JSON.stringify(response)}`);
        setAccountToken(response);
      },
      (error) => {
        console.log(`===> Account data not found: ${error}`);
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
        setLoginStatus(true);
        console.log(`===> Session created: ${JSON.stringify(response)}`);
      },
      (err) => {
        setLoginStatus(false);
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
    setLoadingStatus(true);
    try {
      const accountObj = await api.createAccount(email, password, username);

      //a session needed to be created in order to send the verifiation email.
      const sessionObj = await api.createSession(email, password);
      const emailVerificationObj = await api.createEmailVerification();

      Promise.all([accountObj, sessionObj, emailVerificationObj]);
      setSessionToken(sessionObj);
      setLoadingStatus(false);
      console.log(
        accountObj ??
          `===> Account created: ${JSON.stringify(
            accountObj
          )} and Verification email sent!`
      );
    } catch (error) {
      console.log("Sign up error: ", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        sessionToken,
        accountToken,
        loggedIn,
        loading,
        signIn,
        signOut,
        signUp,
        getSessionStatus,
        getAccountStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
