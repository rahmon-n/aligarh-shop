import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser
} from '../../utils/firebase/firebase.utils';

const getSnapshotFromUserAuth = async (userAuth, additionalDetails) => {
  try {
    const userSnapshot = await createUserDocumentFromAuth(
      userAuth,
      additionalDetails
    );

    if (userSnapshot) {
      console.log(userSnapshot);
      return { id: userSnapshot.id, ...userSnapshot.data() };
    }
  } catch (error) {
    signInFailed(error);
  }
};

export const checkUserSession = createAsyncThunk(
  'user/checkUserSession',
  async (_, { dispatch }) => {
    try {
      const userAuth = await getCurrentUser();
      if (!userAuth) return;
      dispatch(signInSuccess(await getSnapshotFromUserAuth(userAuth)));
    } catch (error) {
      dispatch(signInFailed(error));
    }
  }
);

export const googleSignInStart = createAsyncThunk(
  'user/googleSignInStart',
  async (_, { dispatch }) => {
    try {
      const { user } = await signInWithGooglePopup();
      dispatch(signInSuccess(await getSnapshotFromUserAuth(user)));
    } catch (error) {
      dispatch(signInFailed(error));
    }
  }
);

export const emailSignInStart = createAsyncThunk(
  'user/emailSignInStart',
  async ({ email, password }, { dispatch }) => {
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      dispatch(signInSuccess(await getSnapshotFromUserAuth(user)));
    } catch (error) {
      dispatch(signInFailed(error));
    }
  }
);

export const signUpStart = createAsyncThunk(
  'user/signUpStart',
  async ({ email, password, displayName }, { dispatch }) => {
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      const additionalDetails = { displayName };
      dispatch(
        signUpSuccess(await getSnapshotFromUserAuth(user, additionalDetails))
      );
      await dispatch(
        checkUserSession() // auto login after sign up
      );
    } catch (error) {
      dispatch(signUpFailed(error));
    }
  }
);

export const signOutStart = createAsyncThunk(
  'user/signOutStart',
  async (_, { dispatch }) => {
    try {
      await signOutUser();
      dispatch(signOutSuccess());
    } catch (error) {
      dispatch(signOutFailed(error));
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    error: null
  },
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signInFailed: (state, action) => {
      state.error = action.payload;
    },
    signUpSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signUpFailed: (state, action) => {
      state.error = action.payload;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
    },
    signOutFailed: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed
} = userSlice.actions;

export const selectCurrentUser = (state) => state.userReducer;
export default userSlice.reducer;
