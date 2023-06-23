export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';
export const SET_BASIC_INFO = 'SET_BASIC_INFO';
export const UNSET_BASIC_INFO = 'UNSET_BASIC_INFO';

export function setUser(accessToken: string) {
  return { type: SET_USER, payload: { accessToken } };
}

export function unsetUser() {
  return { type: UNSET_USER, payload: {} };
}

export function setBasicInfo(
  profileID: string | undefined,
  displayName: string | undefined,
  profileURL: string | undefined,
  imageUri: Object[] | undefined,
  email: string | undefined,
) {
  return { type: SET_BASIC_INFO, payload: {
    profileID, displayName, profileURL, imageUri, email
  } };
}

export function unsetBasicInfo() {
  return { type: UNSET_BASIC_INFO, payload: { } };
}