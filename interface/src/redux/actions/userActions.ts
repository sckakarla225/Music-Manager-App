export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

export function setUser(accessToken: string) {
  return { type: SET_USER, payload: { accessToken } };
}

export function unsetUser() {
  return { type: UNSET_USER, payload: {} };
}