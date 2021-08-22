import * as functions from "firebase-functions";
import { sendNotification } from "./sendNotification";

export const scheduleMessage = functions.pubsub
  .schedule("every day 15:35")
  .timeZone("America/New_York")
  .onRun(async () => {
    try {
      await sendNotification(
        "yLKe0CYN5kQ2qhM9TdtOBplXDeJ3",
        "You're killing it",
        "Keep crushin' it my dude"
      );
      return null;
    } catch (e) {
      throw new Error(e);
    }
  });
