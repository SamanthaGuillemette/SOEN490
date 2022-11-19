/* eslint-disable */
import SecureStore from "expo-secure-store";
import { useMemo, useReducer, useEffect } from "react";

type Token = string | null

interface AuthState {
  isLoading: boolean;
  isSignedIn: boolean;
  userToken?: Token
}

interface Action {
  type: "RESTORE_TOKEN" | "SIGN_IN" | "SIGN_OUT";
  token?: Token
}

export const useAuth = () => {
  const [authState, dispatch] = useReducer(
    (prevState: AuthState, action: Action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignedIn: true,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignedIn: false,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignedIn: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const updateToken = async () => {
      let userToken: Token
      try {
        userToken = await SecureStore.getItemAsync("userToken");
        dispatch({ type: "RESTORE_TOKEN", token: userToken });
      } catch (e) {}

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
     
    };

    updateToken();
  }, []);

  //not sure why we need to memoization here (useMemo)
  const authActions = useMemo(
    () => ({
      signIn: async (data: any) => {
        //todo: handle signin here (set token) and redirect 
          

        dispatch({ type: "SIGN_IN", token: null });
      },
      signOut: () =>
        dispatch({
          type: "SIGN_OUT",
          token: null,
        }),
      signUp: async (data: any) => {
        //todo: handle login here create account and redirect to login 

        dispatch({ type: "SIGN_IN", token: null });
      },
    }),
    []
  );

  return {authState, authActions}
  
};


export default useAuth; 