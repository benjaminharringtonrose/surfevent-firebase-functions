import * as functions from "firebase-functions";

export const onCreateEvent = functions.firestore
  .document("events/{eventId}")
  .onCreate(async (snap, context) => {
    const eventId = context.params.eventId;
    const data = snap.data();
    console.log(`eventId ${eventId} created`);
    console.log("data:", data);
  });
