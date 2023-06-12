export const SET_USER_ID = 'SET_USER_ID';
export const UNSET_USER_ID = 'UNSET_USER_ID';

export function setUserId(userId: string) {
  return { type: SET_USER_ID, payload: { userId } };
}

export function unsetUserId() {
  return { type: UNSET_USER_ID, payload: {} };
}