import * as functions from "firebase-functions";
import { sendNotification } from "./sendNotification";

export const scheduleMessage = functions.pubsub
  .schedule("every day 13:24") // min: 0-59, hour: 0-23, dayOfMonth: 1-31, month: 1-12, dayOfWeek: 0-6
  .timeZone("America/New_York")
  .onRun((context) => {
    sendNotification("", "You're killing it", "Keep crushin' it my dude");
    return null;
  });
