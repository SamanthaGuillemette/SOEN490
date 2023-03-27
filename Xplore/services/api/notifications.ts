import { COLLECTION_ID_NOTIFICATIONS } from "@env";
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
  projectName: any
) => {
  await api.createDocument(COLLECTION_ID_NOTIFICATIONS, {
    userID: userID, // project owner
    memberRequestingID: userID, // member who sent the request
    notificationType: "joinRequest",
    projectID: projectID,
    projectName: projectName,
    createdAt: new Date().toISOString(),
  });
};

const createAcceptJoinNotif = async (
  userID: any,
  projectID: any,
  projectName: any
) => {
  await api.createDocument(COLLECTION_ID_NOTIFICATIONS, {
    userID: userID, // user whose request got accepted
    memberAcceptedRequestID: userID, // admin who accepted the request
    notificationType: "joinAccept",
    projectID: projectID,
    projectName: projectName,
    createdAt: new Date().toISOString(),
  });
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
  const [newNotificationsCount, setNewNotificationsCount] = useState(0);

  useEffect(() => {
    const getNewNotificationsCount = async () => {
      const notifs = await getNotifs(userID);
      const count = notifs.filter((notif) => !notif.seen).length;
      setNewNotificationsCount(count);
    };

    if (userID) {
      getNewNotificationsCount();
    }
  }, [userID]);

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
};
