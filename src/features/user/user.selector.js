import { createSelector } from 'reselect';

const selectUserReducer = (state) => state.userReducer;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.currentUser
);
