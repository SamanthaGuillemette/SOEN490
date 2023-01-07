import { Models } from "appwrite";
import React, { createContext, useState, useContext } from "react";
import api from "../appwrite/api";

type AuthContextData = {
  sessionToken?: Models.Session | null;
  loggedIn: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  getSessionStatus: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [sessionToken, setSessionToken] = useState<Models.Session | null>(null);
  const [loggedIn, setLoginStatus] = useState<boolean>(false);
  const [loading, setLoadingStatus] = useState<boolean>(false);

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
  return (
    <AuthContext.Provider
      value={{
        sessionToken,
        loggedIn,
        loading,
        signIn,
        signOut,
        getSessionStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("===> useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
