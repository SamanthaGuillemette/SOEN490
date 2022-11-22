import { Models } from "appwrite";
import React, { createContext, useState, useContext } from "react";
import { account } from "../appwrite/appwrite";

type AuthContextData = {
  loggedIn?: Models.Session;
  sessionStatus: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  getSessionStatus: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState<Models.Session>();
  const [sessionStatus, setSessionStatus] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getSessionStatus = () => {
    const status = account.get();

    status.then(
      (response) => {
        console.log(response);
        setSessionStatus(true);
      },
      (error) => {
        setSessionStatus(false);
        console.log(`Session not found: ${error}`);
      }
    );
  };

  const signIn = (email: string, password: string) => {
    const login = account.createEmailSession(email, password);
    setIsLoading(true);

    login.then(
      (result) => {
        setLoggedIn(result);
        setIsLoading(false);
        console.log(result);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const signOut = () => {
    if (loggedIn) {
      account.deleteSession(loggedIn?.$id);
    } else {
      console.log("no session id found");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        sessionStatus,
        isLoading,
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
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
