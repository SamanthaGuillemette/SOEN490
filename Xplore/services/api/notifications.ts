import {
  COLLECTION_ID_NOTIFICATIONS,
  COLLECTION_ID_PROJECT,
  COLLECTION_ID_USERS,
} from "@env";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Query } from "appwrite";
import api from "../appwrite/api";

// notificationType should be "badge" | "groupAdd" | "joinRequest" | "joinAccept"
interface Notifications {
  notificationType: any;
  createdAt: any;
  groupName: any;
  chatID: any;
  projectID: any;
  memberRequestingID: any;
  memberAcceptedRequestID: any;
  badgeName: any;
}

const createBadgeNotif = async (userID: any, badgeName: any) => {
  await api.createDocument(COLLECTION_ID_NOTIFICATIONS, {
    userID: userID,
    notificationType: "badge",
    badgeName: badgeName,
    createdAt: new Date().toISOString(),
  });
};

const createGroupAddNotif = async (
  userID: any,
  chatID: any,
  groupName: any
) => {
  await api.createDocument(COLLECTION_ID_NOTIFICATIONS, {
    userID: userID,
    notificationType: "groupAdd",
    chatID: chatID,
    groupName: groupName,
    createdAt: new Date().toISOString(),
  });
};

const createRequestJoinNotif = async (
  userID: any,
  projectID: any,
  projectName: any,
  projectOwnerID: string
) => {
  await api.createDocument(COLLECTION_ID_NOTIFICATIONS, {
    userID: projectOwnerID, // project owner
    memberRequestingID: userID, // member who sent the request
    notificationType: "joinRequest",
    projectID: projectID,
    projectName: projectName,
    createdAt: new Date().toISOString(),
  });
};

// Method to see if user has already requested to join the specified project
const useUserAlreadyRequested = (userID: any, projectID: any) => {
  const [alreadyRequested, setAlreadyRequested] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.listDocuments(COLLECTION_ID_NOTIFICATIONS, [
          Query.equal("memberRequestingID", userID),
          Query.equal("projectID", projectID),
          Query.equal("notificationType", "joinRequest"),
        ]);
        response.total > 0
          ? setAlreadyRequested(true)
          : setAlreadyRequested(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userID, projectID]);

  return alreadyRequested;
};

const deleteRequestJoinNotif = async (userID: any, projectID: any) => {
  const response = await api.listDocuments(COLLECTION_ID_NOTIFICATIONS, [
    Query.equal("memberRequestingID", userID),
    Query.equal("projectID", projectID),
    Query.equal("notificationType", "joinRequest"),
  ]);

  response?.documents.forEach((doc: any) => {
    api.deleteDocument(COLLECTION_ID_NOTIFICATIONS, doc.$id);
  });
};

// To update the list of members for a project once request is accepted
const updateProjMemberList = async (userId: any, projectID: any) => {
  try {
    const response = await api.getDocument(COLLECTION_ID_PROJECT, projectID);
    let members = response.members;
    members.push(userId);

    await api.updateDocument(COLLECTION_ID_PROJECT, projectID, {
      members: members,
    });
  } catch (e) {
    console.log(e);
  }
};

// To update the list of projects for the user once request is accepted
const updateUserProjList = async (userId: any, projectID: any) => {
  try {
    const response = await api.listDocuments(COLLECTION_ID_USERS, [
      Query.equal("userID", userId),
    ]);
    response?.documents?.map((doc: any) => {
      let projects = doc.projects;
      projects.push(projectID);

      api.updateDocument(COLLECTION_ID_USERS, doc.$id, {
        projects: projects,
      });
    });
  } catch (e) {
    console.log(e);
  }
};

const createAcceptJoinNotif = async (
  userID: any,
  projectID: any,
  projectName: any,
  memberAcceptedRequestID: any
) => {
  await api.createDocument(COLLECTION_ID_NOTIFICATIONS, {
    userID: userID, // user whose request got accepted
    memberAcceptedRequestID: memberAcceptedRequestID, // admin who accepted the request
    notificationType: "joinAccept",
    projectID: projectID,
    projectName: projectName,
    createdAt: new Date().toISOString(),
  });

  updateUserProjList(userID, projectID); // update user's project list
  updateProjMemberList(userID, projectID); // updating list of members for the project
};

const getNotifs = async (userID: any) => {
  const response = await api.listDocuments(COLLECTION_ID_NOTIFICATIONS, [
    Query.equal("userID", userID),
  ]);
  const notifs = await Promise.all(
    response?.documents?.map(async (doc) => {
      return {
        //for all notifs
        id: doc.$id,
        notificationType: doc.notificationType,
        createdAt: doc.createdAt,
        seen: doc.seen,
        userID: doc.userID,

        //for group chats add
        groupName: doc.groupName,
        chatID: doc.chatID,

        //for project joining
        projectID: doc.projectID,
        projectName: doc.projectName,
        memberRequestingID: doc.memberRequestingID,
        memberAcceptedRequestID: doc.memberAcceptedRequestID,

        //for badges
        badgeName: doc.badgeName,
      };
    })
  );
  return notifs;
};

const useListNotifications = (userID: any) => {
  const [notifs, setNotifs] = useState<Notifications[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const notifications = await getNotifs(userID);
        notifications.sort(
          (notif1: any, notif2: any) =>
            new Date(notif2.createdAt).getTime() -
            new Date(notif1.createdAt).getTime()
        );
        setNotifs(notifications);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userID]);

  return notifs;
};

const markAsSeen = async (userID: any) => {
  const notifs = await getNotifs(userID);
  const updatePromises = notifs
    .filter((notif) => !notif.seen)
    .map((notif) =>
      api.updateDocument(COLLECTION_ID_NOTIFICATIONS, notif.id, {
        seen: true,
      })
    );
  await Promise.all(updatePromises);
};

const useNewNotificationsCount = (userID: any) => {
  const isFocused = useIsFocused();
  const [newNotificationsCount, setNewNotificationsCount] = useState(0);

  useEffect(() => {
    const getNewNotificationsCount = async () => {
      if (isFocused) {
        const notifs = await getNotifs(userID);
        const count = notifs.filter((notif) => !notif.seen).length;
        setNewNotificationsCount(count);
      }
    };
    if (userID) {
      getNewNotificationsCount();
    }
  }, [isFocused, userID]);

  return newNotificationsCount;
};

export {
  createBadgeNotif,
  createGroupAddNotif,
  createRequestJoinNotif,
  createAcceptJoinNotif,
  useListNotifications,
  markAsSeen,
  useNewNotificationsCount,
  deleteRequestJoinNotif,
  useUserAlreadyRequested,
};
