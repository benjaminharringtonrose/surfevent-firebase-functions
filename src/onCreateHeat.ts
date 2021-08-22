import * as functions from "firebase-functions";
import { Heat } from "./models";
import { sendNotification } from "./sendNotification";

export const onCreateHeat = functions.firestore
  .document("heats/{heatId}")
  .onCreate(async (snap) => {
    const heat = snap.data() as Heat;
    sendNotification(heat.uid, "You're killing it", heat.heatId);
  });
