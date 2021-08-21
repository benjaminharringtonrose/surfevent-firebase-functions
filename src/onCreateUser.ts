/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as functions from "firebase-functions";
import * as firebase from "firebase-admin";
import { User } from "./models";

firebase.firestore().settings({ ignoreUndefinedProperties: true });

export const onCreateUser = functions.auth.user().onCreate(async (user) => {
  functions.logger.info("onCreateUser - user:", user);
  const userRecord: Partial<User> = {
    uid: user.uid,
    email: user.email,
    providers: user.providerData?.map((provider) => provider.providerId),
  };
  await firebase.firestore().collection("users").doc(userRecord.uid!).set(userRecord);
});
