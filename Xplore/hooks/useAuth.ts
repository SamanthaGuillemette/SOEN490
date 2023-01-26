/*
 *  This hook provides access to those states/functions created in AuthContext.
 *  In other words, the 'AuthProvider' will enable access to those data for the whole app
 *  To consume any of these data, you need to call this 'useAuth()' hook.
 *
 *  Usage: const { sessionToken, loading, loggedIn } = useAuth();

 *  More info: look at the 'type AuthContextData = { ... }' in AuthContext.tsx
 */
import { useContext } from "react";
import { AuthContext, AuthContextData } from "../services/authentication";

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("===> useAuth must be used within an AuthProvider");
  }

  return context;
}
