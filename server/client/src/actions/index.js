export const CURRENT_USER = 'current_user';

export function setCurrentUser(user) {
  return {
    type: CURRENT_USER,
    payload: user
  }
}