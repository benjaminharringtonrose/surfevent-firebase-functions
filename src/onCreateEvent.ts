import * as functions from "firebase-functions";
import { sendNotification } from "./sendNotification";
import { Event } from "./models";

export const onCreateEvent = functions.firestore
  .document("events/{eventId}")
  .onCreate(async (snap) => {
    const event = snap.data() as Event;
    try {
      await sendNotification(event.uid, "Success", "Event Successfully Created");
    } catch (e) {
      throw new Error(e);
    }
  });
