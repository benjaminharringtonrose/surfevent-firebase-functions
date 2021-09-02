// https://firebase.google.com/docs/functions/typescript
import * as admin from "firebase-admin";
admin.initializeApp();

// import { onCreateEvent } from "./onCreateEvent";
// export { onCreateEvent };

// import { onCreateHeat } from "./onCreateHeat";
// export { onCreateHeat };

import { onCreateUser } from "./onCreateUser";
export { onCreateUser };

import { scheduleMessage } from "./scheduleMessage";
export { scheduleMessage };

import { onCreateAdminRequest } from "./onCreateAdminRequest";
export { onCreateAdminRequest };
