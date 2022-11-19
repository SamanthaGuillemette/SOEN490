/* eslint-disable */
import SecureStore from "expo-secure-store";
import { useMemo, useReducer, useEffect, createContext } from "react";


interface AuthState {
  isLoading: boolean;
  isSignout: boolean;
  userToken?: null;
}

interface Action {
  type: "RESTORE_TOKEN" | "SIGN_IN" | "SIGN_OUT";
  token?: null 
}




export const useAuth = () => {
  const [state, dispatch] = useReducer(
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
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken: null | string | undefined;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {}

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
     // dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data: any) => {
        //todo: handle signin here

        dispatch({ type: "SIGN_IN", token: null });
      },
      signOut: () =>
        dispatch({
          type: "SIGN_OUT",
          token: null,
        }),
      signUp: async (data: any) => {
        //todo: handle login here

        dispatch({ type: "SIGN_IN", token: null });
      },
    }),
    []
  );


  
};


export default useAuth; 