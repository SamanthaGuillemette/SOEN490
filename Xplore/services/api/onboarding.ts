import { useState, useEffect } from "react";
import api from "../../services/appwrite/api";
import { Query } from "appwrite";
import { COLLECTION_ID_ONBOARDING } from "@env";

const useUpdateOnboarding = (userId: any) => {
  const [onboarding, setOnboarding] = useState<any | false>(false);
  useEffect(() => {
    const getOnboarding = async () => {
      try {
        const onboarding_response = await api.listDocuments(
          COLLECTION_ID_ONBOARDING,
          [Query.equal("userID", userId)]
        );
        if (onboarding_response.total === 0 && userId) {
          api.createDocument(COLLECTION_ID_ONBOARDING, {
            userID: userId,
            seen: true,
          })
        } else {
          setOnboarding(onboarding_response?.documents[0]);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getOnboarding();
  }, [userId]);
  return onboarding;
};

export { useUpdateOnboarding };