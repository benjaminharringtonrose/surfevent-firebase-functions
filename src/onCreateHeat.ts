import * as functions from "firebase-functions";
import { sendNotification } from "./sendNotification";

export const onCreateHeat = functions.firestore
  .document("heats/{heatId}")
  .onCreate(async (snap, context) => {
    const { heatId } = context.params;
    const data = snap.data();
    console.log(`heatId ${heatId} created`);
    console.log("data:", data);
    sendNotification(
      "eX49V3VgwEuinbnknk0Nqc:APA91bGeyWlcND4QlMMpYlD6jvEnTPk99seJrAAsSfS6u5feNzmfsitxzAe6LpgHhhftelgbxrX3dqbxIjGuXXfQhd8Ez3emezr4xojepSKm_582UGkZ1hhVseG0PHA9dtnfslBWz_lx",
      "You're killing it",
      heatId
    );
  });
