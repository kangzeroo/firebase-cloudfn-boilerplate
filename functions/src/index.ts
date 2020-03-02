// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

export { default as addMessage } from "./fn/addMessage/addMessage.fn";
export { default as makeUppercase } from "./fn/modifyMessage/modifyMessage.fn";
export { default as graphql } from "./fn/graphql/graphql.fn";
