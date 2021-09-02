import { firebase } from "@react-native-firebase/firestore";
import * as functions from "firebase-functions";
import { AdminRequest, Collection, Mail } from "./models";

export const onCreateAdminRequest = functions.firestore
  .document(`${Collection.adminRequests}/{adminRequestId}`)
  .onCreate(async (snap) => {
    try {
      const adminRequest = snap.data() as AdminRequest;
      if (adminRequest.organizationId) {
        const organization = await firebase
          .firestore()
          .collection(Collection.organizations)
          .where("organizationId", "==", adminRequest.organizationId)
          .get();

        const email: Mail = {
          to: [organization.email],
          message: {
            subject: "SurfEvent App - Admin Request",
            // eslint-disable-next-line max-len
            text: `${adminRequest.name} is requesting permission to become an admin for ${organization.name}. You can approve or deny this request within your SurfEvent app.`,
          },
        };
        await firebase.firestore().collection(Collection.mail).add(email);
      }
    } catch (e) {
      throw new Error(e);
    }
  });
