import { UserState } from './reducers/user';

export type RootState = {
  user: UserState,
};

export interface Setting {
  id: number,
  name: string,
  description: string,
  switch: boolean,
};