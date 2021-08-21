import * as functions from "firebase-functions";

export const scheduleMessage = functions.pubsub
  .schedule("5 11 * * *") // min: 0-59, hour: 0-23, dayOfMonth: 1-31, month: 1-12, dayOfWeek: 0-6
  .timeZone("America/New_York") // Users can choose timezone - default is America/Los_Angeles
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .onRun((context) => {
    console.log("This will be run every day at 11:05 AM Eastern!");
    return null;
  });
