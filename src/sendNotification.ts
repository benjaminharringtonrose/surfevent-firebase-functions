import * as firebase from "firebase-admin";
import { Collection, Mail, User } from "./models";

export const sendNotification = async (
  userId: string,
  title?: string,
  body?: string
): Promise<void> => {
  const userRef = firebase.firestore().collection("users").doc(userId);
  const userDoc = await userRef.get();
  const user = userDoc.data() as User;
  if (!user) {
    throw new Error("sendNotification: no user");
  }
  if (user.messagingTokens && user.messagingTokens.length > 0) {
    const message: firebase.messaging.MessagingPayload = {
      notification: {
        title,
        body,
      },
    };
    console.log("sending push notification my g", message);
    await firebase.messaging().sendToDevice(user.messagingTokens, message);
  }

  if (user.email) {
    const email: Mail = {
      to: [user.email],
      message: {
        subject: `SurfEvent - ${title}`,
        text: body || "",
      },
    };
    console.log("sending email my g");
    await firebase.firestore().collection(Collection.mail).add(email);
  }
};
