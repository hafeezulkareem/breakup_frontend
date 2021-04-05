import { getToken } from "./StorageUtils";

export const isSignedIn = () => {
   const token = getToken();
   return token !== undefined;
};
