import { COLLECTION_ID_NOTIFICATIONS } from "@env";
import { useEffect, useState } from "react";
import { Query } from "appwrite";
import api from "../appwrite/api";

// notificationType should be "badge" | "groupAdd" | "joinRequest" | "joinAccept"

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

const createRequestJoinNotif = async (userID: any, projectID: any) => {
  await api.createDocument(COLLECTION_ID_NOTIFICATIONS, {
    userID: userID, // project owner
    memberRequestingID: userID, // member who sent the request
    notificationType: "joinRequest",
    projectID: projectID,
    createdAt: new Date().toISOString(),
  });
};

const createAcceptJoinNotif = async (userID: any, projectID: any) => {
  await api.createDocument(COLLECTION_ID_NOTIFICATIONS, {
    userID: userID, // user whose request got accepted
    memberAcceptedRequestID: userID, // admin who accepted the request
    notificationType: "joinAccept",
    projectID: projectID,
    createdAt: new Date().toISOString(),
  });
};

export {
  createBadgeNotif,
  createGroupAddNotif,
  createRequestJoinNotif,
  createAcceptJoinNotif,
};
