import { getCurrentUserToken } from "../../firebase/firebase";
import {userEndpoints} from './endpoints';
export async function syncUserData() {
  const userToken = await getCurrentUserToken();

  return fetch(userEndpoints.login, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${userToken}`,
    }
  });
}
