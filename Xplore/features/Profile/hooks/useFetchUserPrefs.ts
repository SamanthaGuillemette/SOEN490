import { useQuery } from "react-query";
import api from "../../../services/appwrite/api";

export const useFetchUserPrefs = () => {
  const { data: userPrefs } = useQuery("user prefs", () =>
    api.getUserPreferences()
  );
  return userPrefs;
};
