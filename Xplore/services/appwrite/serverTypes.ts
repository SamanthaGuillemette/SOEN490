/**
 *  Response objects (types) from the Server
 */
export interface AccountObject {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  registration: string;
  status: boolean;
  passwordUpdate: string;
  email: string;
  phone: string;
  emailVerification: boolean;
  phoneVerification: boolean;
  prefs: {};
}

/**
 *  Payload objects to send to Server
 */
export interface UserInfo {
  name: string;
  dob: string;
  isStudent: boolean;
}
