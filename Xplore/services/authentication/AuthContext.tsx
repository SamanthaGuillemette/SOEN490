import { Models } from "appwrite";
import React, { createContext, useState } from "react";
import api from "../appwrite/api";

// The "shape" of our AuthContext data
export type AuthContextData = {
  sessionToken?: Models.Session | null;
  accountToken?: Models.Account<any> | null;
  loading: boolean;
  signUp: (
    username: string,
    email: string,
    password: string,
    appURL: string
  ) => void;
  signIn: (email: string, password: string) => void;
  verifyEmail: (userid: string, secret: string) => void;
  passwordRecovery: (userid: string, appURL: string) => void;
  confirmRecovery: (userid: string, secret: string, password: string) => void;
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
  const [loading, setLoadingStatus] = useState<boolean>(false);
  //const [emailIsVerified, setVerifiedStatus] = useState<boolean>(false);

  const getSessionStatus = (sessionId: string) => {
    const status = api.getSession(sessionId);
    status.then(
      (response) => {
        //console.log(`===> Session retrieved: ${JSON.stringify(response)}`);
        setSessionToken(response);
      },
      (error) => {
        console.log(`===> Session not found: ${error}`);
      }
    );
  };

  const getAccountStatus = () => {
    const status = api.getAccount();
    status.then(
      (response) => {
        //console.log(`===> Account data retrieved: ${JSON.stringify(response)}`);
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
        getAccountStatus();
        setLoadingStatus(false);
        console.log(`===> Session created: ${JSON.stringify(response)}`);
      },
      (err) => {
        setLoadingStatus(false);
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

  const signUp = async (
    username: string,
    email: string,
    password: string,
    appURL: string
  ) => {
    setLoadingStatus(true);
    try {
      const accountObj = await api.createAccount(email, password, username);

      //a session needed to be created in order to send the verifiation email.
      const sessionObj = await api.createSession(email, password);
      const emailVerificationObj = await api.createEmailVerification(appURL);

      Promise.all([accountObj, sessionObj, emailVerificationObj]);
      api.deleteCurrentSession();
      setLoadingStatus(false);
      // console.log(
      //   accountObj ??
      //     `===> Account created: ${JSON.stringify(
      //       accountObj
      //     )} and Verification email sent!`
      // );
    } catch (error) {
      console.log("Sign up error: ", error);
    }
  };

  const verifyEmail = async (userid: string, secret: string) => {
    try {
      const emailVerificationObj = await api.updateEmailVerification(
        userid,
        secret
      );

      Promise.all([emailVerificationObj]);
      console.log(
        emailVerificationObj ??
          `===> Email is verified: ${JSON.stringify(emailVerificationObj)}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const passwordRecovery = async (userid: string, appURL: string) => {
    try {
      const passwordVerificationObj = await api.createPasswordRecovery(
        userid,
        appURL
      );

      Promise.all([passwordVerificationObj]);
      console.log(
        passwordVerificationObj ??
          `===> Password recovery email sent: ${JSON.stringify(
            passwordVerificationObj
          )}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const confirmRecovery = async (
    userid: string,
    secret: string,
    password: string
  ) => {
    try {
      const passwordVerificationObj = await api.createPasswordRecoveryConfirm(
        userid,
        secret,
        password
      );

      Promise.all([passwordVerificationObj]);
      console.log(
        passwordVerificationObj ??
          `===> Password recovery email sent: ${JSON.stringify(
            passwordVerificationObj
          )}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        sessionToken,
        accountToken,
        loading,
        signIn,
        signOut,
        signUp,
        getSessionStatus,
        getAccountStatus,
        verifyEmail,
        passwordRecovery,
        confirmRecovery,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
