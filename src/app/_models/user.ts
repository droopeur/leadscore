export class User {
  id: string;
  username: string;
  accountStatus: string;
  expirationDate: Date;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  timeZone: string;
  organizationId: string;
  organizationName: string;
  signupClient: string;
  dateCreated: Date;
  lastLoginDate: Date;
  active: true;
  human: true;
  permissions: [
    string
    ];
  teamIds: [
    string
    ];
  partnerId: string;
  profilePicture: string;
  description: string;
  alias: string;
  instagramProfileId: string;
  token?: {
    expires: Date;
    authToken: string
  }
}

