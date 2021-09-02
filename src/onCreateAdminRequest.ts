import * as firebase from "firebase-admin";
import * as functions from "firebase-functions";
import { AdminRequest, Collection, Mail, Organization, User } from "./models";

export const onCreateAdminRequest = functions.firestore
  .document(`${Collection.adminRequests}/{adminRequestId}`)
  .onCreate(async (snap) => {
    try {
      const adminRequest = snap.data() as AdminRequest;
      if (adminRequest.organizationId) {
        const organizationResponse = await firebase
          .firestore()
          .collection(Collection.organizations)
          .doc(adminRequest.organizationId)
          .get();
        const userResponse = await firebase
          .firestore()
          .collection(Collection.users)
          .doc(adminRequest.uid)
          .get();
        const user = userResponse.data() as User;
        const organization = organizationResponse.data() as Organization;
        const email: Mail = {
          to: [organization.email],
          message: {
            subject: "SurfEvent App - Admin Request",
            // eslint-disable-next-line max-len
            text: `${user.firstName} ${user.lastName} is requesting permission to become an admin for ${organization.name}. You can approve or deny this request within your SurfEvent app.`,
          },
        };
        await firebase.firestore().collection(Collection.mail).add(email);
      }
    } catch (e) {
      throw new Error(e);
    }
  });
