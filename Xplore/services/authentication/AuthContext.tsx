import { Models } from "appwrite";
import React, { createContext, useState, useContext } from "react";
import { account } from "../appwrite/appwrite";

type AuthContextData = {
  loggedIn?: Models.Session;
  signIn: any;
  signOut: any;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<Models.Session>();

  const signIn = (email: string, password: string) => {
    const login = account.createEmailSession(email, password);

    login.then(
      function (result) {
        setLoggedIn(result);
      },
      function (err) {
        console.log(err);
      }
    );
  };

  const signOut = () => {
    if (loggedIn?.$id !== undefined) {
      account.deleteSession(loggedIn?.$id);
    } else {
      console.log("no session id found");
    }
  };
  return (
    <AuthContext.Provider value={{ loggedIn, signIn, signOut }}>
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
