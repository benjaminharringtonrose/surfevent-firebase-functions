import * as functions from "firebase-functions";
import { firestore } from "firebase-admin";
import { Heat } from "./models";
import { sendNotification } from "./sendNotification";

export const onHeatChanged = functions.firestore
  .document("heats/{heatId}")
  .onUpdate(async (change, context) => {
    const heat = change.after.data() as Heat;
    sendNotification(heat.uid, heat.heatId, context.auth?.uid || "");
  });
