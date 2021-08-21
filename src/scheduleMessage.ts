import * as functions from "firebase-functions";
import { sendNotification } from "./sendNotification";

export const scheduleMessage = functions.pubsub
  .schedule("every day 14:03") // min: 0-59, hour: 0-23, dayOfMonth: 1-31
  .timeZone("America/New_York") // month: 1-12, dayOfWeek: 0-6
  .onRun(() => {
    sendNotification(
      "eX49V3VgwEuinbnknk0Nqc:APA91bGeyWlcND4QlMMpYlD6jvEnTPk99seJrAAsSfS6u5feNzmfsitxzAe6LpgHhhftelgbxrX3dqbxIjGuXXfQhd8Ez3emezr4xojepSKm_582UGkZ1hhVseG0PHA9dtnfslBWz_lx",
      "You're killing it",
      "Keep crushin' it my dude"
    );
    return null;
  });
